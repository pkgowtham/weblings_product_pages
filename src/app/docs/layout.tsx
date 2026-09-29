import React from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import '../../styles/docs.css';
import DocsLayoutClient from '../../components/docs/DocsLayoutClient';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-root-container">
      <DocsLayoutClient>
        {children}
      </DocsLayoutClient>
    </div>
  );
}
