'use client';

import React from "react";
import { useStyles } from "./style";
import {
  SvgCloud, SvgSparkles, SvgShieldLock, SvgSearch,
} from "../../../../components/svg/CustomIcons";

// Simple inline SVG icons for drive-specific needs
const SvgFileDoc = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1={16} y1={13} x2={8} y2={13} />
    <line x1={16} y1={17} x2={8} y2={17} />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const SvgLockIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const SvgTimer = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const SvgTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);
const SvgArchive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x={1} y={3} width={22} height={5} />
    <line x1={10} y1={12} x2={14} y2={12} />
  </svg>
);

const DriveFeature = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroGlow} />
        <div className={classes.heroContent}>
          <div className={classes.badge}><SvgCloud width={16} height={16} /> Weblings Drive</div>
          <h1 className={classes.title}>
            Smart cloud storage
            <span className={classes.titleAccent}>that reads your files and answers for you.</span>
          </h1>
          <p className={classes.heroDescription}>
            Save and share your files with enterprise-grade granular permissions, time-expiring external links, and built-in AI that reads massive files and finds the answers you need.
          </p>
          <button className={classes.primaryButton}>Deploy Enterprise Drive</button>
        </div>

        <div className={classes.workspace}>
          <div className={classes.workspaceBar}>
            <div className={classes.dots}><span className={classes.dot} /><span className={classes.dot} /><span className={classes.dot} /></div>
            <span>drive.weblings.com <strong>Project: Alpha Launch</strong></span>
            <span className={classes.avatar}>AS</span>
          </div>

          <aside className={classes.sidebar}>
            <button className={classes.uploadButton}>+ Upload File</button>
            <div className={classes.navList}>
              <div className={classes.navItem}>My Workspace</div>
              <div className={`${classes.navItem} ${classes.navItemActive}`}>Project Files</div>
              <div className={classes.navItem}>Shared with Me</div>
              <div className={classes.navItem}>Expiring Links <small>2 Active</small></div>
            </div>
            <div className={classes.tagHeading}>Custom Tags</div>
            <div className={classes.tagDots}><span className={`${classes.tagDot} ${classes.tagDotNegative}`} /><span className={`${classes.tagDot} ${classes.tagDotWarning}`} /><span className={`${classes.tagDot} ${classes.tagDotBrand}`} /></div>
          </aside>

          <main className={classes.files}>
            <div className={classes.filesHeader}><span>Alpha Launch / Vendor Docs</span><span className={classes.filter}>Filter</span></div>
            <div className={classes.fileList}>
              <div className={classes.fileRow}>
                <div className={classes.fileMeta}><div className={classes.fileIcon}><SvgFileDoc /></div><div><div className={classes.fileName}>Master_MSA_2026.pdf</div><div className={classes.fileDetail}>4.2 MB · Uploaded Yesterday by HR</div></div></div>
                <button className={classes.aiButton}>Ask AI</button>
              </div>
              <div className={`${classes.fileRow} ${classes.fileRowActive}`}>
                <div className={classes.fileMeta}><div className={`${classes.fileIcon} ${classes.fileIconBlue}`}><SvgFileDoc /></div><div><div className={classes.fileName}>Q3_Technical_Specs_Final.pdf</div><div className={classes.fileDetail}>12.8 MB · Uploaded Today by Alex</div></div></div>
                <span><SvgSparkles width={14} height={14} /></span>
              </div>
            </div>
          </main>

          <aside className={classes.aiPanel}>
            <div className={classes.aiHeader}><SvgSparkles width={14} height={14} /> Document AI</div>
            <div className={classes.aiContent}>
              <div className={classes.chatBubble}>What is the exact API rate limit specified in this document?</div>
              <div className={`${classes.chatBubble} ${classes.chatBubbleAi}`}>Based on section 4.2, the API rate limit is <strong>5,000 requests per minute</strong> per tenant.<br /><br /><small>ⓘ Found on Page 12</small></div>
            </div>
            <div className={classes.aiFooter}>Ask a question about this file... <strong>↑</strong></div>
          </aside>
        </div>
      </section>

      <section className={classes.section}>
        <div className={classes.split}>
          <div>
            <div className={classes.kicker}>AI Document Intelligence</div>
            <h2 className={classes.sectionTitle}>Talk to Your Files.<br />Don&apos;t Just Store Them.</h2>
            <p className={classes.sectionText}>Why spend two hours reading a 50-page vendor contract when AI can read it in two seconds? Weblings Drive changes how your team interacts with company data.</p>
            <div className={classes.points}>
              <div className={classes.point}><span className={classes.pointNumber}>1</span><div><h3 className={classes.pointTitle}>Instant Q&amp;A Extraction</h3><p className={classes.pointText}>Ask direct questions about any shared document and get precise answers with page citations.</p></div></div>
              <div className={classes.point}><span className={classes.pointNumber}>2</span><div><h3 className={classes.pointTitle}>Project-Level Semantic Memory</h3><p className={classes.pointText}>Keep critical documents searchable as a shared AI memory for developers and managers.</p></div></div>
            </div>
          </div>
          <div className={classes.demoCard}><div className={classes.demoFile}><div className={classes.demoFileTitle}><SvgFileDoc style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Enterprise_SLA_Agreement.pdf</div><div className={classes.demoFileMeta}>62 Pages · Legal Department</div></div><div className={`${classes.chatBubble} ${classes.chatBubbleAi}`} style={{ marginTop: 16 }}>According to Section 8.2, the vendor must issue a <strong>15% service credit</strong> when uptime falls below 99.9%.</div></div>
        </div>
      </section>

      <section className={classes.section}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}><div className={classes.kicker}>Military-Grade Perimeter</div><h2 className={classes.sectionTitle}>Fort Knox Permissions &amp;<br />Self-Destructing Links.</h2><p className={classes.sectionText}>You decide exactly who sees your data, from company-wide folders to confidential one-to-one sharing.</p></div>
        <div className={classes.capabilityGrid}>
          <div className={classes.capability}><div className={classes.capabilityIcon}><SvgLockIcon /></div><h3 className={classes.capabilityTitle}>Granular Access Control</h3><p className={classes.capabilityText}>Share at organization, team, project, or individual level. Without explicit permission, nobody else can even see the file exists.</p><div className={classes.pillRow}><span className={classes.pill}>ORG LEVEL</span><span className={classes.pill}>TEAM LEVEL</span><span className={classes.pill}>USER ONLY</span></div></div>
          <div className={classes.capability}><div className={classes.capabilityIcon}><SvgTimer /></div><h3 className={classes.capabilityTitle}>Time-Bomb Public Links</h3><p className={classes.capabilityText}>Create secure external links that automatically expire after a defined period, keeping sensitive files under control.</p><div className={classes.taxonomyRow}><span>weblings.link/share/x89f...</span><span className={classes.taxonomyStatus}>Expires in 12h</span></div></div>
        </div>
      </section>

      <section className={classes.section}>
        <div className={classes.split}>
          <div className={classes.taxonomy}><h3 className={classes.capabilityTitle}>Custom File Taxonomy</h3><div className={classes.pillRow}><span className={classes.pill}>Legal &amp; Compliance</span><span className={classes.pill}>Q3 Invoices</span><span className={classes.pill}>Raw Assets</span></div><h3 className={classes.capabilityTitle} style={{ marginTop: 32 }}>Data Lifecycle Policies</h3><div className={classes.taxonomyRow}><span><SvgTrash /> Temp Build Files</span><span className={classes.taxonomyStatus}>Auto-delete: 30 Days</span></div><div className={classes.taxonomyRow}><span><SvgArchive /> Signed Contracts</span><span className={classes.taxonomyStatus}>Retain Forever</span></div></div>
          <div><div className={classes.kicker}>Organized by Design</div><h2 className={classes.sectionTitle}>Your files, your rules.</h2><p className={classes.sectionText}>Bring structure to every department with tags, lifecycle policies, and a workspace that keeps important information easy to find.</p></div>
        </div>
      </section>
    </div>
  );
};

export default DriveFeature;
