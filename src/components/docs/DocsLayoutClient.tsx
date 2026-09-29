'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Header from './Header';
import Sidebar from './Sidebar';
import AiChatWidget from './AiChatWidget';
import defaultTree from '../../data/docs-tree.json';
import type { TreeNodeItem } from '../../lib/docs/markdown';

export default function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Derive activeId from current URL pathname
  const activeId = React.useMemo(() => {
    if (!pathname || pathname === '/docs' || pathname === '/docs/') {
      return 'web-documentation';
    }
    return pathname.replace(/^\/docs\/?/, '');
  }, [pathname]);

  useEffect(() => {
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
    if (targetSlug === 'web-documentation') {
      router.push('/docs');
    } else {
      router.push(`/docs/${targetSlug}`);
    }
  };

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
          tree={defaultTree as unknown as TreeNodeItem[]}
          activeId={activeId}
          onSelect={handleSelectPage}
          searchQuery={searchQuery}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        {children}
      </div>

      <AiChatWidget />
    </div>
  );
}
