import React from 'react';
import type { Metadata } from 'next';
import DocsClientView from '../../components/docs/DocsClientView';
import { getDocBySlug, getDocsTree } from '../../lib/docs/markdown';

export const metadata: Metadata = {
  title: 'Documentation - Weblings Docs',
  description: 'Official Weblings Worksuite Documentation',
};

export default async function DocsRootPage() {
  const doc = getDocBySlug([]) || {
    id: 'web-documentation',
    slug: 'web-documentation',
    slugArray: ['web-documentation'],
    title: 'Documentation',
    rawTitle: 'Documentation',
    description: 'Official Weblings Documentation',
    order: -1,
    parentSlug: null,
    fullPath: '',
    lastSlugSegment: 'web-documentation',
    content: '',
    frontmatter: {},
  };

  const { tree, flatMap } = getDocsTree();

  return (
    <DocsClientView
      doc={doc}
      tree={tree}
      flatMap={flatMap}
      slugPath="web-documentation"
    />
  );
}
