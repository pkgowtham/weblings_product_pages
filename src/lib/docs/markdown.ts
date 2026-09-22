import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cleanNotionName, slugify } from './utils';

export { cleanNotionName, slugify };

const contentDirectory = path.join(process.cwd(), 'src/content');
const publicImagesDirectory = path.join(process.cwd(), 'public/docs-images');

/**
 * Helper to process path parts: cleans Notion hashes and strips root wrapper directory
 */
function getCleanSlugSegments(relativePath: string): string[] {
  const parts = relativePath.split(/[/\\]/).filter(Boolean);
  const cleanParts = parts
    .map((part, index) => {
      const isLast = index === parts.length - 1;
      const rawName = isLast ? part.replace(/\.md$/, '') : part;
      const cleanName = cleanNotionName(rawName);
      return slugify(cleanName);
    })
    .filter(Boolean);

  // Strip top-level wrapper folder if it starts with 'web-documentation' or matches top container
  if (cleanParts.length > 1 && cleanParts[0].startsWith('web-documentation')) {
    cleanParts.shift();
  }

  return cleanParts;
}

/**
 * Copies image files from src/content to public/docs-images preserving directory paths & filenames
 */
export function syncImages(dir = contentDirectory, relativePath = ''): void {
  if (!fs.existsSync(dir)) return;
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relPath = path.join(relativePath, item.name);

      if (item.isDirectory()) {
        syncImages(fullPath, relPath);
      } else if (item.isFile() && /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(item.name)) {
        const parts = relPath.split(/[/\\]/).filter(Boolean);
        const cleanedParts = parts.map((p) => slugify(cleanNotionName(p)));
        if (cleanedParts.length > 1 && cleanedParts[0].startsWith('web-documentation')) {
          parts.shift();
        }
        const cleanRelPath = parts.join('/');
        const destRelPath = path.join(publicImagesDirectory, cleanRelPath);
        const destRelDir = path.dirname(destRelPath);

        if (!fs.existsSync(destRelDir)) {
          fs.mkdirSync(destRelDir, { recursive: true });
        }
        if (!fs.existsSync(destRelPath)) {
          fs.copyFileSync(fullPath, destRelPath);
        }

        // Also save flat filename copy for direct references
        const flatDestPath = path.join(publicImagesDirectory, item.name);
        if (!fs.existsSync(flatDestPath)) {
          fs.copyFileSync(fullPath, flatDestPath);
        }
      }
    }
  } catch (err) {
    console.error('Error syncing images:', err);
  }
}

interface MarkdownFileInfo {
  fullPath: string;
  relativePath: string;
  fileName: string;
}

/**
 * Recursively find all markdown files in src/content
 */
function getAllMarkdownFiles(dir = contentDirectory, relativePath = ''): MarkdownFileInfo[] {
  if (!fs.existsSync(dir)) return [];
  let results: MarkdownFileInfo[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relPath = path.join(relativePath, item.name);

    if (item.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath, relPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      results.push({
        fullPath,
        relativePath: relPath,
        fileName: item.name,
      });
    }
  }
  return results;
}

export interface DocItem {
  id: string;
  slug: string;
  slugArray: string[];
  title: string;
  rawTitle: string;
  description: string;
  order: number;
  parentSlug: string | null;
  fullPath: string;
  lastSlugSegment: string;
  content: string;
  frontmatter: Record<string, any>;
}

export interface FlatMapItem {
  id: string;
  slug: string;
  slugArray: string[];
  title: string;
  parentId: string | null;
  order: number;
  prev: { id: string; title: string; slug: string } | null;
  next: { id: string; title: string; slug: string } | null;
}

export interface TreeNodeItem {
  id: string;
  slug: string;
  title: string;
  order: number;
  children: TreeNodeItem[];
}

/**
 * Get all document objects with parsed metadata, clean titles, and clean slugs
 */
export function getAllDocs(): DocItem[] {
  syncImages();
  const rawFiles = getAllMarkdownFiles();
  const docsMap = new Map<string, DocItem>();
  const parentChildOrder = new Map<string, Map<string, number>>();

  // 1. Build map of parent file fullPath -> ordered list of child slug segments from markdown links
  rawFiles.forEach((file) => {
    const content = fs.readFileSync(file.fullPath, 'utf8');
    const regex = /\[([^\]]+)\]\(([^)]+\.md)\)/g;
    let match: RegExpExecArray | null;
    let index = 0;
    const orderMap = new Map<string, number>();
    while ((match = regex.exec(content)) !== null) {
      const href = decodeURIComponent(match[2]);
      const fileName = path.basename(href, '.md');
      const cleanName = cleanNotionName(fileName);
      const childSlugSegment = slugify(cleanName);
      if (!orderMap.has(childSlugSegment)) {
        orderMap.set(childSlugSegment, index++);
      }
    }
    parentChildOrder.set(file.fullPath, orderMap);
  });

  // 2. Parse metadata & create doc objects
  rawFiles.forEach((file) => {
    const fileContent = fs.readFileSync(file.fullPath, 'utf8');
    const { data, content } = matter(fileContent);

    const rawFileNameWithoutExt = file.fileName.replace(/\.md$/, '');
    const cleanTitleFromFile = cleanNotionName(rawFileNameWithoutExt);

    const slugSegments = getCleanSlugSegments(file.relativePath);
    const slugPath = slugSegments.join('/');
    let parentSlugPath = slugSegments.slice(0, -1).join('/');
    const lastSlugSegment = slugSegments[slugSegments.length - 1];

    if (!parentSlugPath && slugPath !== 'web-documentation') {
      parentSlugPath = 'web-documentation';
    }

    let pageTitle = data.title || cleanTitleFromFile;
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match && h1Match[1] && !data.title) {
      pageTitle = h1Match[1].trim();
    }

    const docObj: DocItem = {
      id: slugPath,
      slug: slugPath,
      slugArray: slugSegments,
      title: pageTitle,
      rawTitle: cleanTitleFromFile,
      description: data.description || '',
      order: slugPath === 'web-documentation' ? -1 : (data.order ?? 99),
      parentSlug: parentSlugPath || null,
      fullPath: file.fullPath,
      lastSlugSegment,
      content,
      frontmatter: data,
    };

    docsMap.set(slugPath, docObj);
  });

  // 3. Assign order based on parent markdown file's link order
  docsMap.forEach((doc) => {
    if (doc.slug === 'web-documentation') {
      doc.order = -1;
      return;
    }
    if (doc.frontmatter.order !== undefined) return;

    if (doc.parentSlug && docsMap.has(doc.parentSlug)) {
      const parentDoc = docsMap.get(doc.parentSlug)!;
      const orderMap = parentChildOrder.get(parentDoc.fullPath);
      if (orderMap && orderMap.has(doc.lastSlugSegment)) {
        doc.order = orderMap.get(doc.lastSlugSegment)!;
      }
    } else {
      const rootFile = rawFiles.find((f) => {
        const cleanName = cleanNotionName(f.fileName.replace(/\.md$/, ''));
        return slugify(cleanName) === 'web-documentation';
      });
      if (rootFile) {
        const orderMap = parentChildOrder.get(rootFile.fullPath);
        if (orderMap && orderMap.has(doc.lastSlugSegment)) {
          doc.order = orderMap.get(doc.lastSlugSegment)!;
        }
      }
    }
  });

  // 4. Sort docs by order field then title fallback
  const docs = Array.from(docsMap.values()).sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
  });

  return docs;
}

/**
 * Get doc by slug (string or array of slug segments)
 */
export function getDocBySlug(slug?: string | string[]): DocItem | null {
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  const allDocs = getAllDocs();

  if (!slugPath) {
    const webDoc = allDocs.find((d) => d.slug === 'web-documentation');
    return webDoc || allDocs[0] || null;
  }

  let doc = allDocs.find((d) => d.slug === slugPath);
  if (!doc) {
    doc = allDocs.find((d) => d.slug.toLowerCase() === slugPath.toLowerCase());
  }
  if (!doc) {
    const lastPart = slugPath.split('/').pop();
    doc = allDocs.find((d) => d.slug.split('/').pop() === lastPart);
  }
  if (!doc) {
    const webDoc = allDocs.find((d) => d.slug === 'web-documentation');
    doc = webDoc || allDocs[0] || null;
  }
  return doc || null;
}

/**
 * Get all doc slugs for generateStaticParams
 */
export function getDocSlugs(): string[][] {
  const docs = getAllDocs();
  return docs.map((d) => d.slugArray);
}

/**
 * Build hierarchical document tree & flatMap in exact document link order
 */
export function getDocsTree(): { tree: TreeNodeItem[]; flatMap: Record<string, FlatMapItem> } {
  const docs = getAllDocs();
  const flatMap: Record<string, FlatMapItem> = {};

  const treeNodeMap = new Map<string, TreeNodeItem>();
  const rootNodes: TreeNodeItem[] = [];

  docs.forEach((doc) => {
    flatMap[doc.id] = {
      id: doc.id,
      slug: doc.slug,
      slugArray: doc.slugArray,
      title: doc.title,
      parentId: doc.parentSlug,
      order: doc.order,
      prev: null,
      next: null,
    };

    const node: TreeNodeItem = {
      id: doc.id,
      slug: doc.slug,
      title: doc.title,
      order: doc.order,
      children: [],
    };
    treeNodeMap.set(doc.id, node);
  });

  docs.forEach((doc) => {
    const node = treeNodeMap.get(doc.id)!;
    if (doc.parentSlug && treeNodeMap.has(doc.parentSlug)) {
      treeNodeMap.get(doc.parentSlug)!.children.push(node);
    } else {
      rootNodes.push(node);
    }
  });

  // Recursively sort all tree nodes by order
  function sortNodesByOrder(nodes: TreeNodeItem[]) {
    nodes.sort((a, b) => {
      if ((a.order ?? 99) !== (b.order ?? 99)) {
        return (a.order ?? 99) - (b.order ?? 99);
      }
      return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
    });
    nodes.forEach((node) => {
      if (node.children && node.children.length > 0) {
        sortNodesByOrder(node.children);
      }
    });
  }

  sortNodesByOrder(rootNodes);

  // Flatten tree in depth-first order for sequential Prev / Next links
  const linearList: FlatMapItem[] = [];
  function flattenLinear(nodes: TreeNodeItem[]) {
    nodes.forEach((node) => {
      if (flatMap[node.id]) {
        linearList.push(flatMap[node.id]);
      }
      if (node.children && node.children.length > 0) {
        flattenLinear(node.children);
      }
    });
  }
  flattenLinear(rootNodes);

  // Link sequential prev and next references based on tree order
  linearList.forEach((item, index) => {
    item.prev = index > 0 ? { id: linearList[index - 1].id, title: linearList[index - 1].title, slug: linearList[index - 1].slug } : null;
    item.next = index < linearList.length - 1 ? { id: linearList[index + 1].id, title: linearList[index + 1].title, slug: linearList[index + 1].slug } : null;
  });

  return { tree: rootNodes, flatMap };
}
