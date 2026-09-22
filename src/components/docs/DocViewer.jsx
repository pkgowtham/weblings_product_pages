'use client';

import React, { useState, useMemo, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cleanNotionName, slugify } from '../../lib/docs/utils'
import { TopicIcon } from './TopicIcon'

function isScreenshotFilename(str) {
  if (!str) return true
  const s = str.trim().toLowerCase()
  if (
    s.startsWith('screenshot') ||
    s.startsWith('image') ||
    s.startsWith('untitled') ||
    s.startsWith('clean_') ||
    s.startsWith('img_')
  ) {
    return true
  }
  if (/\d{4}-\d{2}-\d{2}/.test(s)) return true
  if (/\d{1,2}[\.:]\d{2}/.test(s)) return true
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(s)) return true
  return false
}

function enhanceMarkdownImageCaptions(markdownText) {
  if (!markdownText) return ''
  const lines = markdownText.split('\n')
  let currentHeading = ''

  const processedLines = lines.map((line) => {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      let rawHeading = headingMatch[2].replace(/[*_~`]/g, '').trim()
      currentHeading = rawHeading.replace(/^\d+[\.\)]\s*/, '').trim() || rawHeading
      return line
    }

    return line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
      if (isScreenshotFilename(alt)) {
        const newAlt = currentHeading || ''
        return `![${newAlt}](${src})`
      }
      return match
    })
  })

  return processedLines.join('\n')
}

export default function DocViewer({
  pageTitle,
  content,
  breadcrumbs,
  activePage,
  onSelectPage,
  isLoading,
}) {
  const [lightboxImg, setLightboxImg] = useState(null)

  // Scroll to top when page changes, or scroll to hash element if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        const id = decodeURIComponent(hash.replace('#', ''))
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }, [pageTitle, content])

  const cleanedContent = useMemo(() => {
    if (!content) return ''
    const withoutTitle = content.replace(/^\s*#\s+[^\r\n]+(?:\r?\n)*/, '')
    return enhanceMarkdownImageCaptions(withoutTitle)
  }, [content])

  // Resolve relative exported Notion image paths to public /docs-images/ directory
  const resolveImageSrc = (src) => {
    if (!src) return ''
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    const decoded = decodeURIComponent(src)
    let cleaned = decoded.replace(/^(\.\/|\.\.\/)+/, '')
    const parts = cleaned.split(/[/\\]/).filter(Boolean)
    const cleanedParts = parts.map((p) => slugify(cleanNotionName(p)))
    if (cleanedParts.length > 1 && cleanedParts[0].startsWith('web-documentation')) {
      parts.shift()
    }
    cleaned = parts.join('/')

    if (cleaned.startsWith('/docs-images/')) return cleaned
    if (cleaned.startsWith('docs-images/')) return `/${cleaned}`

    // Extract filename for direct lookup
    const filename = cleaned.split('/').pop()
    return `/docs-images/${filename}`
  }

  const components = {
    p: ({ node, children }) => {
      const hasImage = node.children?.some(
        (child) => child.type === 'element' && child.tagName === 'img'
      )
      if (hasImage) {
        return <div className="markdown-paragraph-img">{children}</div>
      }
      return <p>{children}</p>
    },
    h1: ({ node, children, ...props }) => {
      const text = String(children).replace(/[*_~`]/g, '').trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      return <h1 id={id} {...props}>{children}</h1>
    },
    h2: ({ node, children, ...props }) => {
      const text = String(children).replace(/[*_~`]/g, '').trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      return <h2 id={id} {...props}>{children}</h2>
    },
    h3: ({ node, children, ...props }) => {
      const text = String(children).replace(/[*_~`]/g, '').trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      return <h3 id={id} {...props}>{children}</h3>
    },
    a: ({ node, href, children, ...props }) => {
      if (href && (href.endsWith('.md') || href.includes('3b'))) {
        const decodedHref = decodeURIComponent(href).replace(/\.md$/, '')

        const pathSegments = decodedHref
          .split(/[/\\]/)
          .map((part) => slugify(cleanNotionName(part)))
          .filter(Boolean)

        if (pathSegments.length > 1 && pathSegments[0].startsWith('web-documentation')) {
          pathSegments.shift()
        }

        const targetSlug = pathSegments.join('/')
        return (
          <a
            {...props}
            href={`/docs/${targetSlug}`}
            onClick={(e) => {
              e.preventDefault()
              onSelectPage(targetSlug)
            }}
          >
            {children}
          </a>
        )
      }
      return <a href={href} {...props}>{children}</a>
    },
    aside: ({ node, children, ...props }) => {
      return <blockquote className="notion-callout-aside" {...props}>{children}</blockquote>
    },
    img: ({ node, src, alt, ...props }) => {
      const resolvedSrc = resolveImageSrc(src)
      const altText = alt && !isScreenshotFilename(alt) ? alt : ''

      return (
        <figure className="doc-image-wrapper">
          <div className="doc-image-frame" onClick={() => setLightboxImg(resolvedSrc)}>
            <img
              {...props}
              src={resolvedSrc}
              alt={altText || pageTitle || 'Documentation Diagram'}
              className="doc-image-el"
              loading="lazy"
            />
            {altText && <figcaption className="doc-image-caption-text">{altText}</figcaption>}
          </div>
        </figure>
      )
    },
  }

  const prevPage = activePage?.prev
  const nextPage = activePage?.next

  return (
    <main className="content-area">
      <div className="article-container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
          {breadcrumbs &&
            breadcrumbs.map((crumb, i) => {
              const targetSlug = crumb.id || crumb.slug
              const isLast = i === breadcrumbs.length - 1
              return (
                <React.Fragment key={targetSlug || i}>
                  <a
                    href={`/docs/${targetSlug}`}
                    className={`breadcrumb-node ${isLast ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      if (targetSlug) {
                        onSelectPage(targetSlug)
                      }
                    }}
                  >
                    {crumb.title}
                  </a>
                  {!isLast && <span className="breadcrumb-sep">/</span>}
                </React.Fragment>
              )
            })}
        </nav>

        {isLoading ? (
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>Loading documentation page...</p>
          </div>
        ) : (
          <>
            <h1 className="doc-header-title">
              <TopicIcon title={pageTitle} className="doc-title-svg-icon" />
              {pageTitle || 'Documentation'}
            </h1>

            {content ? (
              <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                  {cleanedContent}
                </ReactMarkdown>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', padding: '20px 0' }}>
                No documentation text on this page or section is empty.
              </p>
            )}

            {/* Next / Previous Article Navigation */}
            {(prevPage || nextPage) && (
              <div className="article-nav-container">
                {prevPage ? (
                  <div className="article-nav-card" onClick={() => onSelectPage(prevPage.id || prevPage.slug)}>
                    <span className="article-nav-label">← Previous</span>
                    <span className="article-nav-title">{prevPage.title}</span>
                  </div>
                ) : (
                  <div style={{ flex: 1 }} />
                )}

                {nextPage ? (
                  <div
                    className="article-nav-card"
                    style={{ textAlign: 'right' }}
                    onClick={() => onSelectPage(nextPage.id || nextPage.slug)}
                  >
                    <span className="article-nav-label">Next →</span>
                    <span className="article-nav-title">{nextPage.title}</span>
                  </div>
                ) : (
                  <div style={{ flex: 1 }} />
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Enlarged view" className="lightbox-img-full" />
        </div>
      )}
    </main>
  )
}
