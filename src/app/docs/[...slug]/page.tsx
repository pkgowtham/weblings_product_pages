import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DocsClientView from '../../../components/docs/DocsClientView';
import { getDocSlugs, getDocBySlug, getDocsTree } from '../../../lib/docs/markdown';

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
  const doc = getDocBySlug(resolvedParams.slug);
  if (!doc) {
    notFound();
  }

  const { tree, flatMap } = getDocsTree();
  const slugPath = Array.isArray(resolvedParams.slug) ? resolvedParams.slug.join('/') : resolvedParams.slug;

  return (
    <DocsClientView
      doc={doc}
      tree={tree}
      flatMap={flatMap}
      slugPath={slugPath}
    />
  );
}
