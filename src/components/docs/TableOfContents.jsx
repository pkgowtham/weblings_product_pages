'use client';

import React, { useMemo } from 'react'

export default function TableOfContents({ markdownContent }) {
  const headings = useMemo(() => {
    if (!markdownContent) return []
    const cleaned = markdownContent.replace(/^\s*#\s+[^\r\n]+(?:\r?\n)*/, '')
    const lines = cleaned.split('\n')
    const parsed = []
    lines.forEach((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/)
      if (match) {
        const level = match[1].length
        const text = match[2].replace(/[*_~`]/g, '').trim()
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
        parsed.push({ level, text, id })
      }
    })
    return parsed
  }, [markdownContent])

  if (!headings || headings.length === 0) return null

  return (
    <aside className="toc-sidebar">
      <div className="toc-title">On this page</div>
      <ul className="toc-list">
        {headings.map((h, i) => (
          <li key={i} className="toc-item" style={{ paddingLeft: `${(h.level - 1) * 12}px` }}>
            <a href={`#${h.id}`} className="toc-link">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
