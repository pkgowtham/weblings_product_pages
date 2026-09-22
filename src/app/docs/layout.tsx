import React from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import '../../styles/docs.css';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-root-container">
      {children}
    </div>
  );
}
