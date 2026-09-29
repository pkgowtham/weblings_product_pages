import React from 'react';
import type { Metadata } from 'next';
import DocsClientView from '../../components/docs/DocsClientView';
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
    <DocsClientView
      title={pageData.title}
      content={pageData.content}
      slugPath={pageData.slugPath}
      breadcrumbs={pageData.breadcrumbs}
      activePage={pageData.activePage}
    />
  );
}
