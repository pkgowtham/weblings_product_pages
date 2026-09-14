'use client';

import React from "react";
import { useStyles } from "./style";
import DriveMockup from "../../../../components/driveMockup";
import PhoneMockup from "../../../../components/phoneMockup";
import AppStoreButtons from "../../../../components/appStoreButtons";
import {
  DriveIcon,
  LockIcon,
  ShieldLockIcon,
} from "../../../../assets/icons_component";

// Document icon matching original page
const SvgFileDoc: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1={16} y1={13} x2={8} y2={13} />
    <line x1={16} y1={17} x2={8} y2={17} />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SvgTimer: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SvgTrash: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const SvgArchive: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x={1} y={3} width={22} height={5} />
    <line x1={10} y1={12} x2={14} y2={12} />
  </svg>
);

const DriveFeature: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (ORIGINAL CONTENT)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.hero}>
        <div className={classes.heroGlow} />
        <div className={classes.heroContent}>
          <div className={classes.badge}>
            <DriveIcon width={16} height={16} isHovered={true} />
            <span>Weblings Drive</span>
          </div>

          <h1 className={classes.title}>
            Smart cloud storage{" "}
            <span className={classes.titleAccent}>
              that reads your files and answers for you.
            </span>
          </h1>

          <p className={classes.heroDescription}>
            Save and share your files with enterprise-grade granular permissions, time-expiring external links, and built-in AI that reads massive files and finds the answers you need.
          </p>

          <div className={classes.heroBtnRow}>
            <button className={classes.primaryButton}>Deploy Enterprise Drive</button>
          </div>
        </div>

        {/* Embedded Interactive Web App Mockup */}
        <div className={classes.mockupWrapper}>
          <DriveMockup />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: AI DOCUMENT INTELLIGENCE (ORIGINAL CONTENT)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.splitGrid}>
          <div>
            <span className={classes.kicker}>AI Document Intelligence</span>
            <h2 className={classes.sectionTitle}>
              Talk to Your Files.<br />Don&apos;t Just Store Them.
            </h2>
            <p className={classes.sectionDescription}>
              Why spend two hours reading a 50-page vendor contract when AI can read it in two seconds? Weblings Drive changes how your team interacts with company data.
            </p>

            <div className={classes.points}>
              <div className={classes.point}>
                <span className={classes.pointNumber}>1</span>
                <div>
                  <h3 className={classes.pointTitle}>Instant Q&amp;A Extraction</h3>
                  <p className={classes.pointText}>
                    Ask direct questions about any shared document and get precise answers with page citations.
                  </p>
                </div>
              </div>

              <div className={classes.point}>
                <span className={classes.pointNumber}>2</span>
                <div>
                  <h3 className={classes.pointTitle}>Project-Level Semantic Memory</h3>
                  <p className={classes.pointText}>
                    Keep critical documents searchable as a shared AI memory for developers and managers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Demo Card */}
          <div className={classes.demoCard}>
            <div className={classes.demoFile}>
              <div className={classes.demoFileTitle}>
                <SvgFileDoc style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: '#DC2626' }} />
                <span>Enterprise_SLA_Agreement.pdf</span>
              </div>
              <div className={classes.demoFileMeta}>62 Pages · Legal Department</div>
            </div>
            <div className={classes.chatBubbleAi}>
              According to Section 8.2, the vendor must issue a <strong>15% service credit</strong> when uptime falls below 99.9%.
              <br /><br />
              <small style={{ color: '#0284C7', fontWeight: 600 }}>ⓘ Found on Page 12</small>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: MILITARY-GRADE PERIMETER (ORIGINAL CONTENT)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.sectionHeaderCenter}>
          <span className={classes.kicker}>Military-Grade Perimeter</span>
          <h2 className={classes.sectionTitle}>
            Fort Knox Permissions &amp;<br />Self-Destructing Links.
          </h2>
          <p className={classes.sectionDescription}>
            You decide exactly who sees your data, from company-wide folders to confidential one-to-one sharing.
          </p>
        </div>

        <div className={classes.capabilityGrid}>
          {/* Capability 1 */}
          <div className={classes.capability}>
            <div className={classes.capabilityIcon}>
              <LockIcon width={24} height={24} isHovered={true} />
            </div>
            <h3 className={classes.capabilityTitle}>Granular Access Control</h3>
            <p className={classes.capabilityText}>
              Share at organization, team, project, or individual level. Without explicit permission, nobody else can even see the file exists.
            </p>
            <div className={classes.pillRow}>
              <span className={classes.pill}>ORG LEVEL</span>
              <span className={classes.pill}>TEAM LEVEL</span>
              <span className={classes.pill}>USER ONLY</span>
            </div>
          </div>

          {/* Capability 2 */}
          <div className={classes.capability}>
            <div className={classes.capabilityIcon} style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
              <SvgTimer />
            </div>
            <h3 className={classes.capabilityTitle}>Time-Bomb Public Links</h3>
            <p className={classes.capabilityText}>
              Create secure external links that automatically expire after a defined period, keeping sensitive files under control.
            </p>
            <div className={classes.taxonomyRow}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.84rem' }}>weblings.link/share/x89f...</span>
              <span className={classes.taxonomyStatus}>Expires in 12h</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ORGANIZED BY DESIGN (ORIGINAL CONTENT)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.splitGrid}>
          {/* Left Column: Taxonomy & Policies Card */}
          <div className={classes.taxonomy}>
            <h3 className={classes.capabilityTitle}>Custom File Taxonomy</h3>
            <div className={classes.pillRow} style={{ marginTop: 12 }}>
              <span className={classes.pill} style={{ backgroundColor: '#FEE2E2', color: '#B91C1C' }}>Legal &amp; Compliance</span>
              <span className={classes.pill} style={{ backgroundColor: '#E0F2FE', color: '#0369A1' }}>Q3 Invoices</span>
              <span className={classes.pill} style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>Raw Assets</span>
            </div>

            <h3 className={classes.capabilityTitle} style={{ marginTop: 32 }}>Data Lifecycle Policies</h3>
            <div className={classes.taxonomyRow} style={{ marginTop: 12 }}>
              <span><SvgTrash /> Temp Build Files</span>
              <span className={classes.taxonomyStatus} style={{ color: '#DC2626' }}>Auto-delete: 30 Days</span>
            </div>
            <div className={classes.taxonomyRow}>
              <span><SvgArchive /> Signed Contracts</span>
              <span className={classes.taxonomyStatus} style={{ color: '#16A34A' }}>Retain Forever</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <span className={classes.kicker}>Organized by Design</span>
            <h2 className={classes.sectionTitle}>Your files, your rules.</h2>
            <p className={classes.sectionDescription}>
              Bring structure to every department with tags, lifecycle policies, and a workspace that keeps important information easy to find.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: UNIFIED MOBILE EXPERIENCE (WITH MOBILE MOCKUP)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.mobileSectionWrapper}>
        <div className={classes.mobileGrid}>
          {/* Left Column: Narrative & AppStoreButtons */}
          <div>
            <span className={classes.kicker}>Mobile Apps</span>
            <h2 className={classes.sectionTitle}>Your Team, In Your Pocket.</h2>
            <p className={classes.sectionDescription}>
              Save and share your files with enterprise-grade granular permissions, time-expiring external links, and built-in AI right from your mobile device.
            </p>

            <AppStoreButtons reviewCountText="Over 45,000+ active enterprise reviews" />
          </div>

          {/* Right Column: Phone Mockup variant="drive" */}
          <div className={classes.mobilePhoneWrapper}>
            <PhoneMockup variant="drive" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriveFeature;
