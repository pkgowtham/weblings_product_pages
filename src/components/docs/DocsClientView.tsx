'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import Sidebar from './Sidebar';
import DocViewer from './DocViewer';
import TableOfContents from './TableOfContents';
import AiChatWidget from './AiChatWidget';
import defaultTree from '../../data/docs-tree.json';
import type { DocItem, TreeNodeItem, FlatMapItem } from '../../lib/docs/markdown';

interface DocsClientViewProps {
  doc?: DocItem;
  title?: string;
  content?: string;
  tree?: TreeNodeItem[];
  flatMap?: Record<string, FlatMapItem>;
  slugPath: string;
  breadcrumbs?: { id: string; title: string; slug: string }[];
  activePage?: {
    prev?: { id?: string; title: string; slug: string } | null;
    next?: { id?: string; title: string; slug: string } | null;
  };
}

export default function DocsClientView({
  doc,
  title,
  content,
  tree,
  flatMap,
  slugPath,
  breadcrumbs: propBreadcrumbs,
  activePage: propActivePage,
}: DocsClientViewProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const effectiveTree = tree || (defaultTree as unknown as TreeNodeItem[]);
  const effectiveTitle = title || doc?.title || 'Documentation';
  const effectiveContent = content !== undefined ? content : (doc?.content || '');

  useEffect(() => {
    // Check saved theme in localStorage or default to light
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('weblings_docs_theme') : null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('weblings_docs_theme', nextTheme);
      }
      return nextTheme;
    });
  };

  // Close sidebar on Escape key or on window resize > 770px
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 770) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSelectPage = (targetSlug: string) => {
    closeSidebar();
    if (!targetSlug || targetSlug.startsWith('section-')) return;
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    if (targetSlug === 'web-documentation') {
      router.push('/docs');
    } else {
      router.push(`/docs/${targetSlug}`);
    }
  };

  // Construct breadcrumbs hierarchy if not precomputed
  const getBreadcrumbs = (pageSlug: string) => {
    if (propBreadcrumbs) return propBreadcrumbs;
    const crumbs: { id: string; title: string; slug: string }[] = [];
    let currentSlug: string | null = pageSlug;
    while (currentSlug && flatMap && flatMap[currentSlug]) {
      const item = flatMap[currentSlug];
      crumbs.unshift({ id: item.id, title: item.title, slug: item.slug });
      currentSlug = item.parentId;
    }
    return crumbs;
  };

  const activePage = propActivePage || (flatMap && flatMap[slugPath]) || {
    id: slugPath,
    slug: slugPath,
    slugArray: [],
    title: effectiveTitle,
    parentId: null,
    order: 0,
    prev: null,
    next: null,
  };
  const breadcrumbs = propBreadcrumbs || getBreadcrumbs(slugPath);

  return (
    <div className="app-layout">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      <div className="main-wrapper">
        <div
          className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
          onClick={closeSidebar}
          aria-hidden="true"
        />

        <Sidebar
          tree={effectiveTree}
          activeId={slugPath}
          onSelect={handleSelectPage}
          searchQuery={searchQuery}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        <DocViewer
          pageTitle={effectiveTitle}
          content={effectiveContent}
          breadcrumbs={breadcrumbs}
          activePage={activePage}
          onSelectPage={handleSelectPage}
          isLoading={false}
        />

        <TableOfContents markdownContent={effectiveContent} />
      </div>
      <AiChatWidget />
    </div>
  );
}
