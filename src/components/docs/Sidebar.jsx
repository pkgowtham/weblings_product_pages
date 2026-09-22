'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TopicIcon } from './TopicIcon';

function ChevronIcon({ isExpanded }) {
  return (
    <svg
      className={`tree-chevron ${isExpanded ? 'expanded' : ''}`}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Global cache for expanded node IDs to keep folders open across route transitions
let globalExpandedIds = new Set(['web-documentation']);

function getAncestorIds(nodes, targetId) {
  const ancestors = [];
  function search(list, path = []) {
    if (!list) return false;
    for (const item of list) {
      if (item.id === targetId) {
        ancestors.push(...path);
        return true;
      }
      if (item.children && item.children.length > 0) {
        if (search(item.children, [...path, item.id])) {
          return true;
        }
      }
    }
    return false;
  }
  search(nodes);
  return ancestors;
}

function TreeNode({
  node,
  activeId,
  onSelect,
  expandedIds,
  onToggle,
  depth = 0,
  searchQuery = '',
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = activeId === node.id;

  const isDescendantSelected = (n) => {
    if (n.id === activeId) return true;
    return n.children?.some(isDescendantSelected);
  };
  const hasActiveChild = hasChildren && node.children.some(isDescendantSelected);

  // A folder is open if it's in expandedIds, or depth is 0, or active child, or search query is typed
  const isExpanded =
    depth === 0 ||
    expandedIds.has(node.id) ||
    hasActiveChild ||
    Boolean(searchQuery);

  const matchesSearch = node.title.toLowerCase().includes(searchQuery.toLowerCase());
  const hasMatchingChild = (n) => {
    if (n.title.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    return n.children?.some(hasMatchingChild);
  };

  if (searchQuery && !matchesSearch && !hasMatchingChild(node)) {
    return null;
  }

  const toggleExpand = (e) => {
    e.stopPropagation();
    onToggle(node.id);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    // If it has children and is not expanded, open it without closing other folders
    if (hasChildren && !isExpanded) {
      onToggle(node.id);
    }
    onSelect(node.id);
  };

  return (
    <div className={`tree-node-group depth-${depth}`}>
      <div
        className={`tree-item depth-${depth} ${isSelected ? 'active' : ''} ${
          hasActiveChild ? 'parent-active' : ''
        }`}
        onClick={handleSelect}
      >
        {hasChildren ? (
          <button
            type="button"
            className="tree-toggle-btn"
            onClick={toggleExpand}
            aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          >
            <ChevronIcon isExpanded={isExpanded} />
          </button>
        ) : (
          <span className="tree-toggle-spacer" />
        )}
        <TopicIcon title={node.title} slug={node.slug} className="tree-topic-icon" />
        <span className="tree-item-label">{node.title}</span>
      </div>

      {hasChildren && isExpanded && (
        <div className="tree-children-container">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              activeId={activeId}
              onSelect={onSelect}
              expandedIds={expandedIds}
              onToggle={onToggle}
              depth={depth + 1}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ tree, activeId, onSelect, searchQuery, isOpen, onClose }) {
  const [sidebarWidth, setSidebarWidth] = useState(290);
  const [isDragging, setIsDragging] = useState(false);
  const isResizingRef = useRef(false);

  // Initialize expandedIds deterministically so server and client initial render match
  const [expandedIds, setExpandedIds] = useState(() => new Set(['web-documentation']));

  // Sync expanded IDs from localStorage after mount (client-only) to avoid hydration mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem('weblings_docs_expanded_nodes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setExpandedIds((prev) => {
            const next = new Set(prev);
            parsed.forEach((id) => next.add(id));
            globalExpandedIds = next;
            return next;
          });
        }
      }
    } catch (e) {}
  }, []);

  // When activeId or tree changes, ensure active node's ancestors are also in expandedIds
  useEffect(() => {
    if (activeId && tree) {
      const ancestors = getAncestorIds(tree, activeId);
      if (ancestors.length > 0) {
        setExpandedIds((prev) => {
          let hasNew = false;
          const next = new Set(prev);
          ancestors.forEach((id) => {
            if (!next.has(id)) {
              next.add(id);
              hasNew = true;
            }
          });
          if (hasNew) {
            globalExpandedIds = next;
            try {
              localStorage.setItem('weblings_docs_expanded_nodes', JSON.stringify([...next]));
            } catch (e) {}
            return next;
          }
          return prev;
        });
      }
    }
  }, [activeId, tree]);

  // Toggle single node without affecting any other node
  const toggleNode = useCallback((nodeId) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      globalExpandedIds = next;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('weblings_docs_expanded_nodes', JSON.stringify([...next]));
        } catch (e) {}
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWidth = localStorage.getItem('weblings_sidebar_width');
      if (savedWidth) {
        const parsed = parseInt(savedWidth, 10);
        if (!isNaN(parsed) && parsed >= 200 && parsed <= 550) {
          setSidebarWidth(parsed);
          document.documentElement.style.setProperty('--sidebar-width', `${parsed}px`);
        }
      }
    }
  }, []);

  const startResizing = (e) => {
    e.preventDefault();
    isResizingRef.current = true;
    setIsDragging(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizingRef.current) return;
      const newWidth = Math.min(Math.max(e.clientX, 200), 550);
      setSidebarWidth(newWidth);
      document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
    };

    const handleMouseUp = () => {
      if (isResizingRef.current) {
        isResizingRef.current = false;
        setIsDragging(false);
        document.body.style.removeProperty('user-select');
        document.body.style.removeProperty('cursor');
        if (typeof window !== 'undefined') {
          const currentVal = document.documentElement.style.getPropertyValue('--sidebar-width');
          if (currentVal) {
            localStorage.setItem('weblings_sidebar_width', currentVal.replace('px', ''));
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''} ${isDragging ? 'resizing' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-mobile-header">
          <span className="sidebar-mobile-title">Documentation</span>
          {onClose && (
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {tree &&
          tree.map((section) => (
            <div key={section.id} className="sidebar-section">
              <TreeNode
                node={section}
                activeId={activeId}
                onSelect={onSelect}
                expandedIds={expandedIds}
                onToggle={toggleNode}
                depth={0}
                searchQuery={searchQuery}
              />
            </div>
          ))}
      </aside>

      <div
        className={`sidebar-resizer ${isDragging ? 'is-resizing' : ''}`}
        onMouseDown={startResizing}
        title="Click and drag to resize sidebar"
      />
    </div>
  );
}
