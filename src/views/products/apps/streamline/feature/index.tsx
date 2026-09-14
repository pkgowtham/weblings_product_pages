'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import streamlineDataJson from '../../../../../data/streamline.json';
import StreamlineMockup from '../../../../../components/streamlineMockup';
import PhoneMockup from '../../../../../components/phoneMockup';
import AppStoreButtons from '../../../../../components/appStoreButtons';
import {
  StreamlineIcon,
  TargetIcon,
  BoltIcon,
  BrainIcon,
  SearchIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  HandshakeIcon,
  ShieldLockIcon,
  SettingsIcon,
  FolderIcon,
  MicIcon,
  ClipboardCheckIcon,
  TicketIcon,
  DoneIcon,
  HumanVerificationIcon,
  InstantIntegrationIcon,
  AiTicketIcon,
  GuestAccessIcon,
  ImmutableHistoryIcon,
  BulkReassignIcon,
  WorkflowConfigIcon,
  HierarchyTreeIcon,
} from '../../../../../assets/icons_component';

// Apple & Android Store SVGs
const SvgApple: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.03-.51 2.58-1.18z" />
  </svg>
);

const SvgAndroid: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.551 0 .9993.4478.9993.9993.0001.5515-.4482 1.0001-.9993 1.0001m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.5511 0 .9993.4478.9993.9993 0 .5515-.4482 1.0001-.9993 1.0001m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.1 12 8.1s-3.5902.3126-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
  </svg>
);

const SvgStar: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StreamlineFeature: React.FC = () => {
  const classes = useStyles();

  // JSON Data extracts
  const heroData = streamlineDataJson.feature.main;
  const featuresList = streamlineDataJson.feature.features;
  const usageData = streamlineDataJson.feature.usage;

  const scopeFeature = featuresList.find((f: any) => f.id === 'scope_pipeline');
  const vectorFeature = featuresList.find((f: any) => f.id === 'vector_search');
  const auditFeature = featuresList.find((f: any) => f.id === 'audit_trail');
  const mobileFeature = featuresList.find((f: any) => f.id === 'mobile_streamline');

  // Interactive Hover states & step selection
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isSearchHovered, setIsSearchHovered] = useState<boolean>(false);
  const [hoveredIncludedCard, setHoveredIncludedCard] = useState<number | null>(null);

  // Split title and accent for Hero
  const titleParts = heroData.title.split('\n');
  const mainTitle = titleParts[0] || 'Lean, AI-driven project management.';
  const accentTitle = titleParts[1] || 'Zero bloat—turn client meetings directly into tickets and cut out the middleman.';

  return (
    <div className={classes.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION WITH EMBEDDED INTERACTIVE STREAMLINE MOCKUP */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.heroSection}>
        <div className={classes.heroGlow} />
        <div className={classes.ambientBlobBrand} />
        <div className={classes.ambientBlobInfo} />

        <div className={classes.heroContent}>
          {/* Eyebrow Pill */}
          <div className={classes.eyebrowPill}>
            <StreamlineIcon width={18} height={18} isHovered={true} />
            <span className={classes.eyebrowText}>{heroData.subtitle}</span>
          </div>

          {/* Heading */}
          <h1 className={classes.heroTitle}>
            {mainTitle} <span className={classes.heroTitleAccent}>{accentTitle}</span>
          </h1>

          {/* Paragraph */}
          <p className={classes.heroParagraph}>{heroData.content}</p>

          {/* Primary CTA */}
          <button className={classes.heroCtaButton}>
            <span>{heroData.action[0]?.label || 'Deploy Streamline'}</span>
          </button>
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* INTERACTIVE STREAMLINE MOCKUP (TIMELINE, BACKLOGS, SPRINTS, BOARD) */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className={classes.mockupWrapper}>
          <StreamlineMockup />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: ENTERPRISE ARCHITECTURE CARDS */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.sectionHeaderCenter}>
          <span className={classes.kicker}>{usageData.subtitle}</span>
          <h2 className={classes.sectionTitle}>{usageData.title}</h2>
          <p className={classes.sectionDescription}>{usageData.description}</p>
        </div>

        <div className={classes.cardGrid}>
          {usageData.cards.map((card: any) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                className={`${classes.featureCard} ${isHovered ? classes.featureCardHovered : ''}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.featureIconWrapper}>
                  {card.id === 'reassignment' && <BulkReassignIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'guest' && <GuestAccessIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'workflow' && <WorkflowConfigIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'hierarchy' && <HierarchyTreeIcon width={24} height={24} isHovered={isHovered} />}
                </div>
                <h3 className={classes.cardTitle}>{card.title}</h3>
                <p className={classes.cardDescription}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: THE END OF MANUAL TICKET ENTRY (SCOPE PIPELINE) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.sectionHeaderCenter}>
          <div className={classes.kicker}>The End of Manual Ticket Entry</div>
          <h2 className={classes.sectionTitle}>
            Streamline does not just track your work; it actively builds it.
          </h2>
          <p className={classes.sectionDescription}>
            The AI Scope Engine listens to client calls, auto-generates sprint tickets, and lets you find exactly what you need in milliseconds.
          </p>
        </div>

        <div className={classes.pipelineContainer}>
          <div className={classes.pipelineGraphicCard}>
            {/* Pipeline Header Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #EEF2F6', paddingBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#0072C4', display: 'inline-block', boxShadow: '0 0 0 3px rgba(0, 114, 196, 0.2)' }} />
                <span style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#0072C4' }}>
                  AI Scope-to-Sprint Pipeline
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#F0FDF4', color: '#15803D', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, border: '1px solid #BBF7D0' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#16A34A', display: 'inline-block' }} />
                <span>Live Active</span>
              </div>
            </div>

            {/* 3 Step Pipeline Cards */}
            <div className={classes.pipelineStepsRow}>
              {/* Step 1 */}
              <div
                className={`${classes.pipelineFlowStep} ${activeStep === 1 ? classes.pipelineFlowStepActive : ''}`}
                onMouseEnter={() => setActiveStep(1)}
                onClick={() => setActiveStep(1)}
                onTouchStart={() => setActiveStep(1)}
              >
                <div className={classes.pipelineStepIconBadge}>
                  <BrainIcon width={22} height={22} isHovered={activeStep === 1} />
                </div>
                <div className={classes.pipelineStepText}>
                  <div className={classes.pipelineStepHeader}>
                    <span className={classes.pipelineStepTag}>Step 01</span>
                  </div>
                  <h4 className={classes.pipelineStepTitle}>Smart Detection</h4>
                  <p className={classes.pipelineStepSub}>
                    Extract new client requirements and cross-reference the project baseline.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`${classes.pipelineFlowStep} ${activeStep === 2 ? classes.pipelineFlowStepActive : ''}`}
                onMouseEnter={() => setActiveStep(2)}
                onClick={() => setActiveStep(2)}
                onTouchStart={() => setActiveStep(2)}
              >
                <div className={classes.pipelineStepIconBadge} style={{ color: '#9333EA', borderColor: '#E9D5FF', backgroundColor: activeStep === 2 ? '#FAF5FF' : '#FFFFFF' }}>
                  <HumanVerificationIcon width={22} height={22} isHovered={activeStep === 2} />
                </div>
                <div className={classes.pipelineStepText}>
                  <div className={classes.pipelineStepHeader}>
                    <span className={classes.pipelineStepTag} style={{ backgroundColor: '#F3E8FF', color: '#9333EA' }}>Step 02</span>
                  </div>
                  <h4 className={classes.pipelineStepTitle}>Human Verification</h4>
                  <p className={classes.pipelineStepSub}>
                    Review the generated ticket and approve it as a formal Change of Request.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className={`${classes.pipelineFlowStep} ${activeStep === 3 ? classes.pipelineFlowStepActive : ''}`}
                onMouseEnter={() => setActiveStep(3)}
                onClick={() => setActiveStep(3)}
                onTouchStart={() => setActiveStep(3)}
              >
                <div className={classes.pipelineStepIconBadge} style={{ color: '#16A34A', borderColor: '#BBF7D0', backgroundColor: activeStep === 3 ? '#F0FDF4' : '#FFFFFF' }}>
                  <InstantIntegrationIcon width={22} height={22} isHovered={activeStep === 3} />
                </div>
                <div className={classes.pipelineStepText}>
                  <div className={classes.pipelineStepHeader}>
                    <span className={classes.pipelineStepTag} style={{ backgroundColor: '#DCFCE7', color: '#15803D' }}>Step 03</span>
                  </div>
                  <h4 className={classes.pipelineStepTitle}>Instant Integration</h4>
                  <p className={classes.pipelineStepSub}>
                    Drop the approved ticket into the sprint and notify the team in Chat.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Step Detail Showcase */}
            {activeStep === 1 && (
              <div className={classes.pipelineShowcaseCard} style={{ backgroundColor: '#F8FAFC', borderColor: '#BFDBFE' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0072C4' }}>
                      <MicIcon width={18} height={18} isHovered={true} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#0072C4', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      In-Call Speech Stream
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#15803D', backgroundColor: '#DCFCE7', padding: '4px 12px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #BBF7D0' }}>
                    <DoneIcon width={13} height={13} fill="#15803D" />
                    99.4% Match
                  </span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: '16px 20px', border: '1px solid #E2E8F0', marginBottom: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                  <p style={{ fontSize: 14, color: '#334155', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                    &ldquo;Client: We need OAuth2 Single Sign-On and Okta integration before launch next month.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#0F172A', fontWeight: 600 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 6, backgroundColor: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                      <TicketIcon width={17} height={17} />
                    </div>
                    <span>Draft Ticket Extracted: <strong style={{ color: '#0072C4' }}>OAuth2 Single Sign-On Flow</strong></span>
                  </div>
                  <span style={{ fontSize: 12, color: '#64748B', fontWeight: 600, backgroundColor: '#F1F5F9', padding: '4px 12px', borderRadius: 6 }}>
                    Auto-Tagged: Security • +13 Pts
                  </span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className={classes.pipelineShowcaseCard} style={{ backgroundColor: '#FAF5FF', borderColor: '#E9D5FF' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#F3E8FF', border: '1px solid #E9D5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                      <ClipboardCheckIcon width={18} height={18} isHovered={true} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#9333EA', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Scope Change Approval
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#6B21A8', backgroundColor: '#F3E8FF', padding: '4px 12px', borderRadius: 20, border: '1px solid #E9D5FF' }}>
                    Pending 1-Click Approval
                  </span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: '16px 20px', border: '1px solid #E9D5FF', marginBottom: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>
                    Change Request #CR-104: Enterprise SSO
                  </div>
                  <div style={{ fontSize: 13, color: '#64748B' }}>
                    Scope delta: <strong>+13 Story Points</strong> • Assigned: <strong>@alex.smith</strong> • Target: Sprint 2
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#9333EA', color: '#FFF', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700, padding: '10px 20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(147, 51, 234, 0.25)' }}>
                    <DoneIcon width={15} height={15} fill="#FFFFFF" />
                    Approve &amp; Sync to Sprint
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#FFF', color: '#64748B', border: '1px solid #CBD5E1', borderRadius: 8, fontSize: 13, fontWeight: 600, padding: '10px 18px', cursor: 'pointer' }}>
                    <SettingsIcon width={15} height={15} />
                    Edit Scope
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className={classes.pipelineShowcaseCard} style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#DCFCE7', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A' }}>
                      <StreamlineIcon width={18} height={18} isHovered={true} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#16A34A', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Sprint Backlog Synced
                    </span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#15803D', backgroundColor: '#DCFCE7', padding: '4px 12px', borderRadius: 20, border: '1px solid #BBF7D0' }}>
                    Active in Sprint 2
                  </span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: '16px 20px', border: '1px solid #BBF7D0', marginBottom: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 6, backgroundColor: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                        <TicketIcon width={17} height={17} />
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#0F172A' }}>
                        STR-112 OAuth2 Single Sign-On Flow
                      </span>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#0284C7', backgroundColor: '#E0F2FE', padding: '4px 10px', borderRadius: 6 }}>
                      IN PROGRESS
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: '#64748B', flexWrap: 'wrap', gap: 8 }}>
                  <span>Owner: <strong style={{ color: '#0F172A' }}>@alex.smith</strong></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#16A34A', fontWeight: 700 }}>
                    <DoneIcon width={15} height={15} fill="#16A34A" />
                    Team Pings Dispatched
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: INTELLIGENT DISCOVERY & SEMANTIC VECTOR SEARCH */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.splitGrid}>
          {/* Left: Interactive Vector Search Simulation Card */}
          <div
            className={classes.searchDemoCard}
            onMouseEnter={() => setIsSearchHovered(true)}
            onMouseLeave={() => setIsSearchHovered(false)}
          >
            <div className={classes.searchQueryBox}>
              <SearchIcon width={18} height={18} isHovered={isSearchHovered} />
              <span>&quot;What was the database error the client mentioned last month?&quot;</span>
            </div>

            <div className={classes.searchResultCard}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#64748B', marginBottom: 4 }}>
                STR-392 - Recorded Oct 14
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: '0 0 6px 0' }}>
                Fix MongoDB timeout during checkout
              </h4>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.5, margin: 0 }}>
                &quot;The checkout kept timing out when writing to Mongo...&quot;
              </p>
            </div>
          </div>

          {/* Right: Original Description */}
          <div>
            <div className={classes.kicker}>Intelligent Discovery</div>
            <h2 className={classes.sectionTitle}>Semantic Vector Search: Find Needles in a Haystack</h2>
            <p className={classes.sectionDescription}>
              Search thousands of tickets using natural human language. The AI understands context and meaning, retrieving the exact ticket, attachment, and comment history without rigid tags.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: IMMUTABLE AUDIT TRAIL */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.splitGrid}>
          {/* Left: Original Description */}
          <div>
            <div className={classes.kicker}>Absolute Accountability</div>
            <h2 className={classes.sectionTitle}>The Immutable Audit Trail</h2>
            <p className={classes.sectionDescription}>
              Every comment, attachment, and status change is permanently recorded. You always know who changed priority, reassigned a ticket, and when it happened.
            </p>
          </div>

          {/* Right: Original Audit Rows */}
          <div className={classes.auditCard}>
            <div className={classes.auditRow}>
              <div className={classes.auditAvatar}>JD</div>
              <div className={classes.auditText}>
                <strong>John Doe</strong> changed status from In Progress to <strong>Deployed</strong><br />
                <small style={{ color: '#94A3B8' }}>Oct 14, 2026 - 10:42 AM</small>
              </div>
            </div>

            <div className={classes.auditRow}>
              <div className={classes.auditAvatar} style={{ backgroundColor: '#EFF6FF', color: '#0072C4' }}>SJ</div>
              <div className={classes.auditText}>
                <strong>Sarah J.</strong> attached final_specs_v2.pdf<br />
                <small style={{ color: '#94A3B8' }}>Oct 13, 2026 - 4:15 PM</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5: UNIFIED MOBILE EXPERIENCE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.mobileSection}>
        <div className={classes.mobileSplit}>
          {/* Mobile Phone Mockup running Streamline */}
          <div className={classes.mobilePhoneCol}>
            <PhoneMockup variant="stream" />
          </div>

          {/* Mobile Information Details */}
          <div className={classes.mobileDetailsCol}>
            <div>
              <h2 className={classes.sectionTitle}>Your Team, In Your Pocket.</h2>
              <p className={classes.sectionDescription} style={{ marginBottom: 28 }}>
                Review client comments, transition tickets across columns, and track sprint progress from iOS and Android.
              </p>
            </div>

            {/* Universal App Store & Play Store Buttons */}
            <AppStoreButtons reviewCountText="Over 45,000+ active enterprise professionals" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6: ENTERPRISE FEATURES, NO EXTRA INVOICE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.sectionHeaderCenter}>
          <h2 className={classes.sectionTitle}>Enterprise Features, No Extra Invoice</h2>
          <p className={classes.sectionDescription}>
            Agile boards, AI ticket creation, guest access, and audit history are included in your Weblings Worksuite.
          </p>
        </div>

        <div className={classes.includedGrid}>
          <div
            className={classes.includedCard}
            onMouseEnter={() => setHoveredIncludedCard(1)}
            onMouseLeave={() => setHoveredIncludedCard(null)}
          >
            <div className={classes.featureIconWrapper}>
              <AiTicketIcon width={22} height={22} isHovered={hoveredIncludedCard === 1} />
            </div>
            <h4 className={classes.cardTitle}>AI Auto-Ticket Creation</h4>
            <p className={classes.cardDescription}>Turn meeting requirements into assignable tickets.</p>
          </div>

          <div
            className={classes.includedCard}
            onMouseEnter={() => setHoveredIncludedCard(2)}
            onMouseLeave={() => setHoveredIncludedCard(null)}
          >
            <div className={classes.featureIconWrapper}>
              <GuestAccessIcon width={22} height={22} isHovered={hoveredIncludedCard === 2} />
            </div>
            <h4 className={classes.cardTitle}>Guest Access</h4>
            <p className={classes.cardDescription}>Collaborate with clients without extra seats.</p>
          </div>

          <div
            className={classes.includedCard}
            onMouseEnter={() => setHoveredIncludedCard(3)}
            onMouseLeave={() => setHoveredIncludedCard(null)}
          >
            <div className={classes.featureIconWrapper}>
              <SearchIcon width={22} height={22} isHovered={hoveredIncludedCard === 3} />
            </div>
            <h4 className={classes.cardTitle}>Semantic Search</h4>
            <p className={classes.cardDescription}>Find historical project context instantly.</p>
          </div>

          <div
            className={classes.includedCard}
            onMouseEnter={() => setHoveredIncludedCard(4)}
            onMouseLeave={() => setHoveredIncludedCard(null)}
          >
            <div className={classes.featureIconWrapper}>
              <ImmutableHistoryIcon width={22} height={22} isHovered={hoveredIncludedCard === 4} />
            </div>
            <h4 className={classes.cardTitle}>Immutable History</h4>
            <p className={classes.cardDescription}>Keep every project change accountable.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreamlineFeature;
