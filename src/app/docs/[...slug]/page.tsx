import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DocsClientView from '../../../components/docs/DocsClientView';
import { getDocSlugs, getDocBySlug, getDocPageData } from '../../../lib/docs/markdown';

export async function generateStaticParams() {
  const slugArrays = getDocSlugs();
  return slugArrays
    .filter((slugArray) => slugArray.length > 0)
    .map((slugArray) => ({
      slug: slugArray,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);
  return {
    title: `${doc?.title || 'Documentation'} - Weblings Docs`,
    description: doc?.description || 'Official Weblings Worksuite Documentation',
  };
}

export default async function DocSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const pageData = getDocPageData(resolvedParams.slug);
  if (!pageData) {
    notFound();
  }

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
