const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load environment variables from .env and .env.local manually
function loadEnv() {
  const envFiles = ['.env', '.env.local'];
  for (const envFile of envFiles) {
    const fullPath = path.resolve(process.cwd(), envFile);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          // Remove surrounding quotes if any
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    }
  }
}

loadEnv();

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const INDEX_NAME = process.env.VECTORIZE_INDEX_NAME || 'docs-vector-index';
const EMBED_MODEL = '@cf/baai/bge-base-en-v1.5';

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('❌ Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN in environment.');
  process.exit(1);
}

// Helper to recursively collect markdown files
function getMarkdownFiles(dirPath, fileList = []) {
  if (!fs.existsSync(dirPath)) return fileList;
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    if (item.startsWith('.')) continue;
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getMarkdownFiles(fullPath, fileList);
    } else if (stat.isFile() && item.endsWith('.md')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Split markdown content into chunks based on headers or paragraph bounds
function chunkMarkdownContent(filePath, content) {
  const relPath = path.relative(process.cwd(), filePath);
  const fileName = path.basename(filePath, '.md');
  // Strip Notion UUID hash from title if present
  const cleanTitle = fileName.replace(/\s+[a-f0-9]{32}$/i, '');

  const sections = content.split(/(?=\n#{1,3}\s+)/);
  const chunks = [];

  for (let i = 0; i < sections.length; i++) {
    const sectionText = sections[i].trim();
    if (!sectionText) continue;

    // If section is very large, split into ~1000 character paragraphs
    if (sectionText.length > 1200) {
      const paragraphs = sectionText.split(/\n\n+/);
      let currentChunk = '';

      for (const p of paragraphs) {
        if ((currentChunk + '\n\n' + p).length > 1000) {
          if (currentChunk.trim()) {
            chunks.push({
              title: cleanTitle,
              path: relPath,
              text: currentChunk.trim()
            });
          }
          currentChunk = p;
        } else {
          currentChunk = currentChunk ? `${currentChunk}\n\n${p}` : p;
        }
      }
      if (currentChunk.trim()) {
        chunks.push({
          title: cleanTitle,
          path: relPath,
          text: currentChunk.trim()
        });
      }
    } else {
      chunks.push({
        title: cleanTitle,
        path: relPath,
        text: sectionText
      });
    }
  }

  return chunks;
}

// Generate vector embedding via Cloudflare Workers AI REST API
async function generateEmbedding(text) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${EMBED_MODEL}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: [text] })
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Embedding API failed (${resp.status}): ${errText}`);
  }

  const json = await resp.json();
  if (!json.success || !json.result || !json.result.data || !json.result.data[0]) {
    throw new Error(`Invalid response format from Workers AI embedding: ${JSON.stringify(json)}`);
  }

  return json.result.data[0];
}

// Batch insert vectors into Cloudflare Vectorize via REST API
async function uploadVectorBatch(batch) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/vectorize/v2/indexes/${INDEX_NAME}/insert`;

  // Format as NDJSON
  const ndjson = batch.map(item => JSON.stringify(item)).join('\n');

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/x-ndjson'
    },
    body: ndjson
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Vectorize insert failed (${resp.status}): ${errText}`);
  }

  const json = await resp.json();
  if (!json.success) {
    throw new Error(`Vectorize insert error: ${JSON.stringify(json.errors)}`);
  }

  return json;
}

async function main() {
  console.log(`🚀 Starting documentation ingestion into Cloudflare Vectorize index: '${INDEX_NAME}'...`);
  console.log(`📌 Account ID: ${ACCOUNT_ID}`);

  const contentDir = path.resolve(process.cwd(), 'src/content');
  const markdownFiles = getMarkdownFiles(contentDir);
  console.log(`📄 Found ${markdownFiles.length} markdown file(s) under src/content/`);

  let allChunks = [];
  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const chunks = chunkMarkdownContent(file, content);
    allChunks.push(...chunks);
  }

  console.log(`🧩 Total generated doc chunks: ${allChunks.length}`);

  if (allChunks.length === 0) {
    console.log('⚠️ No documentation chunks found to index.');
    return;
  }

  const vectorsToInsert = [];
  const BATCH_SIZE = 20;
  let successCount = 0;

  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i];
    const chunkId = crypto.createHash('md5').update(`${chunk.path}-${i}-${chunk.text}`).digest('hex');

    try {
      process.stdout.write(`⏳ Generating embedding ${i + 1}/${allChunks.length}: [${chunk.title}]... `);
      const vector = await generateEmbedding(chunk.text);
      process.stdout.write(`✅ Done (${vector.length} dims)\n`);

      vectorsToInsert.push({
        id: chunkId,
        values: vector,
        metadata: {
          title: chunk.title,
          path: chunk.path,
          text: chunk.text
        }
      });

      if (vectorsToInsert.length >= BATCH_SIZE) {
        console.log(`📤 Uploading batch of ${vectorsToInsert.length} vectors to Cloudflare Vectorize...`);
        await uploadVectorBatch(vectorsToInsert);
        successCount += vectorsToInsert.length;
        console.log(`✅ Batch uploaded successfully! Total uploaded: ${successCount}/${allChunks.length}`);
        vectorsToInsert.length = 0; // Clear batch
      }
    } catch (err) {
      console.error(`\n❌ Error processing chunk ${i + 1}:`, err.message);
    }
  }

  // Flush any remaining vectors after loop finishes (e.g. leftover 9 vectors)
  if (vectorsToInsert.length > 0) {
    try {
      console.log(`📤 Uploading final batch of ${vectorsToInsert.length} remaining vectors to Cloudflare Vectorize...`);
      await uploadVectorBatch(vectorsToInsert);
      successCount += vectorsToInsert.length;
      console.log(`✅ Final batch uploaded successfully! Total uploaded: ${successCount}/${allChunks.length}`);
      vectorsToInsert.length = 0;
    } catch (err) {
      console.error(`❌ Error uploading final vector batch:`, err.message);
    }
  }

  console.log(`\n🎉 Ingestion complete! Successfully indexed ${successCount} document chunks into Vectorize index '${INDEX_NAME}'.`);
}

main().catch(err => {
  console.error('Fatal error during indexing:', err);
  process.exit(1);
});
