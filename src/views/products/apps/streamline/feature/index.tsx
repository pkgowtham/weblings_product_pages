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
                  {card.id === 'reassignment' && <BoltIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'guest' && <HandshakeIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'workflow' && <SettingsIcon width={24} height={24} isHovered={isHovered} />}
                  {card.id === 'hierarchy' && <FolderIcon width={24} height={24} isHovered={isHovered} />}
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

        <div className={classes.splitGrid}>
          {/* Left Column: Interactive Flow Graphic */}
          <div className={classes.pipelineGraphicCard}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEF2F6', paddingBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0072C4' }}>
                AI Scope-to-Sprint Pipeline
              </span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', backgroundColor: '#F0FDF4', padding: '2px 8px', borderRadius: 12 }}>
                Live Active
              </span>
            </div>

            {/* Step 1 Graphic Button */}
            <div
              className={`${classes.pipelineFlowStep} ${activeStep === 1 ? classes.pipelineFlowStepActive : ''}`}
              onMouseEnter={() => setActiveStep(1)}
              onClick={() => setActiveStep(1)}
              onTouchStart={() => setActiveStep(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className={classes.pipelineStepIconBadge}>
                <BrainIcon width={20} height={20} isHovered={activeStep === 1} />
              </div>
              <div className={classes.pipelineStepText}>
                <span className={classes.pipelineStepTitle}>1. Smart Detection</span>
                <span className={classes.pipelineStepSub}>Extract new client requirements and cross-reference the project baseline.</span>
              </div>
            </div>

            {/* Step 2 Graphic Button */}
            <div
              className={`${classes.pipelineFlowStep} ${activeStep === 2 ? classes.pipelineFlowStepActive : ''}`}
              onMouseEnter={() => setActiveStep(2)}
              onClick={() => setActiveStep(2)}
              onTouchStart={() => setActiveStep(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className={classes.pipelineStepIconBadge} style={{ color: '#9333EA', borderColor: '#E9D5FF' }}>
                <TargetIcon width={20} height={20} isHovered={activeStep === 2} />
              </div>
              <div className={classes.pipelineStepText}>
                <span className={classes.pipelineStepTitle}>2. Human Verification</span>
                <span className={classes.pipelineStepSub}>Review the generated ticket and approve it as a formal Change of Request.</span>
              </div>
            </div>

            {/* Step 3 Graphic Button */}
            <div
              className={`${classes.pipelineFlowStep} ${activeStep === 3 ? classes.pipelineFlowStepActive : ''}`}
              onMouseEnter={() => setActiveStep(3)}
              onClick={() => setActiveStep(3)}
              onTouchStart={() => setActiveStep(3)}
              style={{ cursor: 'pointer' }}
            >
              <div className={classes.pipelineStepIconBadge} style={{ color: '#16A34A', borderColor: '#BBF7D0' }}>
                <TrendingUpIcon width={20} height={20} isHovered={activeStep === 3} />
              </div>
              <div className={classes.pipelineStepText}>
                <span className={classes.pipelineStepTitle}>3. Instant Integration</span>
                <span className={classes.pipelineStepSub}>Drop the approved ticket into the sprint and notify the team in Chat.</span>
              </div>
            </div>

            {/* Dynamic Step Detail Showcase based on hover/touch selection */}
            {activeStep === 1 && (
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: 10, padding: '14px 16px', border: '1px solid #E2E8F0', marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#0072C4' }}>🎙️ IN-CALL SPEECH STREAM</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', backgroundColor: '#DCFCE7', padding: '1px 6px', borderRadius: 4 }}>99.4% Match</span>
                </div>
                <p style={{ fontSize: 12, color: '#334155', fontStyle: 'italic', margin: '0 0 10px 0' }}>
                  &ldquo;Client: We need OAuth2 Single Sign-On and Okta integration before launch next month.&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#0F172A', fontWeight: 600 }}>
                  <span style={{ backgroundColor: '#0284C7', color: '#FFF', padding: '1px 5px', borderRadius: 3, fontSize: 10, fontWeight: 800 }}>T</span>
                  <span>Draft Ticket Extracted: <strong>OAuth2 Single Sign-On Flow</strong></span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div style={{ backgroundColor: '#FAF5FF', borderRadius: 10, padding: '14px 16px', border: '1px solid #E9D5FF', marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#9333EA' }}>📋 SCOPE CHANGE APPROVAL</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#6B21A8', backgroundColor: '#F3E8FF', padding: '1px 6px', borderRadius: 4 }}>Pending 1-Click Approval</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Change Request #CR-104: Enterprise SSO</div>
                <div style={{ fontSize: 11, color: '#64748B', marginBottom: 10 }}>Scope delta: +13 Story Points • Assigned: @alex.smith</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ backgroundColor: '#9333EA', color: '#FFF', border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700, padding: '5px 12px', cursor: 'pointer' }}>
                    ✓ Approve &amp; Sync to Sprint
                  </button>
                  <button style={{ backgroundColor: '#FFF', color: '#64748B', border: '1px solid #CBD5E1', borderRadius: 6, fontSize: 11, fontWeight: 600, padding: '5px 10px', cursor: 'pointer' }}>
                    Edit Scope
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div style={{ backgroundColor: '#F0FDF4', borderRadius: 10, padding: '14px 16px', border: '1px solid #BBF7D0', marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A' }}>🚀 SPRINT BACKLOG SYNCED</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#15803D', backgroundColor: '#DCFCE7', padding: '1px 6px', borderRadius: 4 }}>Active in Sprint 2</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ backgroundColor: '#0284C7', color: '#FFF', padding: '1px 5px', borderRadius: 3, fontSize: 10, fontWeight: 800 }}>T</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>STR-112 OAuth2 Single Sign-On Flow</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: '#64748B' }}>
                  <span>Owner: <strong>@alex.smith</strong></span>
                  <span style={{ color: '#16A34A', fontWeight: 600 }}>Team Pings Dispatched ✓</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Copy & Stepper */}
          <div>
            <h3 className={classes.sectionTitle}>Automated Scope-to-Sprint Pipeline</h3>
            <p className={classes.sectionDescription} style={{ marginBottom: 24 }}>
              When a client drops a new requirement, AI catches it, drafts the exact ticket, and queues it for one-click human approval.
            </p>

            <div className={classes.stepperList}>
              <div
                className={`${classes.stepItem} ${activeStep === 1 ? classes.stepItemActive : ''}`}
                onMouseEnter={() => setActiveStep(1)}
                onClick={() => setActiveStep(1)}
                onTouchStart={() => setActiveStep(1)}
              >
                <div className={classes.stepNumberBadge}>1</div>
                <div>
                  <h4 className={classes.cardTitle} style={{ marginBottom: 4 }}>Smart Detection</h4>
                  <p className={classes.cardDescription}>
                    Extract new client requirements and cross-reference the project baseline.
                  </p>
                </div>
              </div>

              <div
                className={`${classes.stepItem} ${activeStep === 2 ? classes.stepItemActive : ''}`}
                onMouseEnter={() => setActiveStep(2)}
                onClick={() => setActiveStep(2)}
                onTouchStart={() => setActiveStep(2)}
              >
                <div className={classes.stepNumberBadge} style={{ backgroundColor: '#9333EA' }}>2</div>
                <div>
                  <h4 className={classes.cardTitle} style={{ marginBottom: 4 }}>Human Verification</h4>
                  <p className={classes.cardDescription}>
                    Review the generated ticket and approve it as a formal Change of Request.
                  </p>
                </div>
              </div>

              <div
                className={`${classes.stepItem} ${activeStep === 3 ? classes.stepItemActive : ''}`}
                onMouseEnter={() => setActiveStep(3)}
                onClick={() => setActiveStep(3)}
                onTouchStart={() => setActiveStep(3)}
              >
                <div className={classes.stepNumberBadge} style={{ backgroundColor: '#16A34A' }}>3</div>
                <div>
                  <h4 className={classes.cardTitle} style={{ marginBottom: 4 }}>Instant Integration</h4>
                  <p className={classes.cardDescription}>
                    Drop the approved ticket into the sprint and notify the team in Chat.
                  </p>
                </div>
              </div>
            </div>
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
              <BoltIcon width={22} height={22} isHovered={hoveredIncludedCard === 1} />
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
              <HandshakeIcon width={22} height={22} isHovered={hoveredIncludedCard === 2} />
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
              <ShieldLockIcon width={22} height={22} isHovered={hoveredIncludedCard === 4} />
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
