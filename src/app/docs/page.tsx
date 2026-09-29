import React from 'react';
import type { Metadata } from 'next';
import DocViewer from '../../components/docs/DocViewer';
import TableOfContents from '../../components/docs/TableOfContents';
import { getDocPageData } from '../../lib/docs/markdown';

export const metadata: Metadata = {
  title: 'Documentation - Weblings Docs',
  description: 'Official Weblings Worksuite Documentation',
};

export default async function DocsRootPage() {
  const pageData = getDocPageData([]) || {
    title: 'Documentation',
    content: '',
    slugPath: 'web-documentation',
    breadcrumbs: [{ id: 'web-documentation', title: 'Documentation', slug: 'web-documentation' }],
    activePage: { prev: null, next: null },
  };

  return (
    <>
      <DocViewer
        pageTitle={pageData.title}
        content={pageData.content}
        breadcrumbs={pageData.breadcrumbs}
        activePage={pageData.activePage}
        isLoading={false}
      />
      <TableOfContents markdownContent={pageData.content} />
    </>
  );
}

