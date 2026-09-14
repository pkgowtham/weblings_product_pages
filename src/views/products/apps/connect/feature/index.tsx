'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import chatDataJson from '../../../../../data/chat.json';
import ConnectMockup from '../../../../../components/connectMockup';
import PhoneMockup from '../../../../../components/phoneMockup';
import AppStoreButtons from '../../../../../components/appStoreButtons';
import {
  ConnectIcon,
  GlobeIcon,
  BoltIcon,
  FolderIcon,
  BrainIcon,
  SearchIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  BuildingIcon,
  LockIcon,
  ShieldLockIcon,
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

const ConnectFeature: React.FC = () => {
  const classes = useStyles();

  // JSON Data extracts
  const heroData = chatDataJson.feature.main;
  const featuresList = chatDataJson.feature.features;
  const usageData = chatDataJson.feature.usage;

  const infraFeature = featuresList.find((f: any) => f.id === 'infrastructure');
  const aiFeature = featuresList.find((f: any) => f.id === 'ai_intelligence');
  const mobileFeature = featuresList.find((f: any) => f.id === 'mobile_apps');

  // Interactive Hover states for micro-animations
  const [hoveredInfraCard, setHoveredInfraCard] = useState<string | null>(null);
  const [hoveredAiCard, setHoveredAiCard] = useState<string | null>(null);
  const [hoveredUsageCard, setHoveredUsageCard] = useState<string | null>(null);

  // Split title and accent for Hero
  const titleParts = heroData.title.split('\n');
  const mainTitle = titleParts[0] || 'Enterprise-grade client calls that turn into actionable tickets.';
  const accentTitle = titleParts[1] || 'Zero premium price tag.';

  return (
    <div className={classes.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION WITH EMBEDDED INTERACTIVE CONNECT MOCKUP */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.heroSection}>
        <div className={classes.heroGlow} />
        <div className={classes.ambientBlobBrand} />
        <div className={classes.ambientBlobInfo} />

        <div className={classes.heroContent}>
          {/* Eyebrow Pill */}
          <div className={classes.eyebrowPill}>
            <ConnectIcon width={18} height={18} />
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
            <span>{heroData.action[0]?.label || 'Deploy Team Chat'}</span>
          </button>
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* INTERACTIVE CONNECT WEB MOCKUP (REPRODUCING USER IMAGE FIDELITY) */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className={classes.mockupWrapper}>
          <ConnectMockup />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: INTERNET-SCALE INFRASTRUCTURE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.infraSplit}>
          {/* Left Column: Cards */}
          <div>
            <div className={classes.kicker}>Internet-Scale Infrastructure</div>
            <h2 className={classes.sectionTitle}>Built on the Backbone of the Modern Internet.</h2>
            <p className={classes.sectionDescription} style={{ marginBottom: 28 }}>
              A chat app is useless if it drops connections. We engineered our communications architecture on a global edge network to deliver flawless, uninterrupted reliability.
            </p>

            <div className={classes.infraCardsList}>
              {/* Card 1: Edge Routing */}
              <div
                className={classes.infraCard}
                onMouseEnter={() => setHoveredInfraCard('edge')}
                onMouseLeave={() => setHoveredInfraCard(null)}
              >
                <div className={classes.infraIconBox}>
                  <GlobeIcon width={24} height={24} isHovered={hoveredInfraCard === 'edge'} />
                </div>
                <div>
                  <h3 className={classes.infraCardTitle}>Ultra-Low Latency Edge Routing</h3>
                  <p className={classes.infraCardText}>
                    Chats and video calls route through the closest data center for low latency anywhere your team works.
                  </p>
                </div>
              </div>

              {/* Card 2: Simulcast Video */}
              <div
                className={classes.infraCard}
                onMouseEnter={() => setHoveredInfraCard('simulcast')}
                onMouseLeave={() => setHoveredInfraCard(null)}
              >
                <div className={classes.infraIconBox}>
                  <BoltIcon width={24} height={24} isHovered={hoveredInfraCard === 'simulcast'} />
                </div>
                <div>
                  <h3 className={classes.infraCardTitle}>Simulcast Video Scaling</h3>
                  <p className={classes.infraCardText}>
                    Host calls with hundreds of participants while video quality adjusts in real time for every device.
                  </p>
                </div>
              </div>

              {/* Card 3: Zero-Setup Channels */}
              <div
                className={classes.infraCard}
                onMouseEnter={() => setHoveredInfraCard('channels')}
                onMouseLeave={() => setHoveredInfraCard(null)}
              >
                <div className={classes.infraIconBox}>
                  <FolderIcon width={24} height={24} isHovered={hoveredInfraCard === 'channels'} />
                </div>
                <div>
                  <h3 className={classes.infraCardTitle}>Zero-Setup Project Channels</h3>
                  <p className={classes.infraCardText}>
                    New projects automatically receive dedicated chat groups and instant project-file access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Global Edge Topology Graphic */}
          <div className={classes.networkGraphicCard}>
            <div className={classes.networkAmbientPulse} />
            <div className={classes.networkRingOuter} />
            <div className={classes.networkRingInner} />

            <div className={classes.networkCenterNode}>
              <div className={classes.networkGlobeIconWrap}>
                <GlobeIcon width={38} height={38} isHovered={true} />
              </div>
              <h3 className={classes.networkNodeTitle}>GLOBAL EDGE NETWORK</h3>
              <span className={classes.networkNodeSubtitle}>WebSockets &amp; WebRTC Active</span>
            </div>

            <div className={classes.networkMetricsGrid}>
              <div className={classes.networkMetricBox}>
                <span className={classes.networkMetricVal}>18ms</span>
                <span className={classes.networkMetricLbl}>Avg Latency</span>
              </div>
              <div className={classes.networkMetricBox}>
                <span className={classes.networkMetricVal}>0.00%</span>
                <span className={classes.networkMetricLbl}>Packet Loss</span>
              </div>
              <div className={classes.networkMetricBox}>
                <span className={classes.networkMetricVal}>99.999%</span>
                <span className={classes.networkMetricLbl}>Edge SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: BUILT-IN AI INTELLIGENCE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.sectionHeaderCentered}>
          <div className={classes.kicker}>Built-In AI Intelligence</div>
          <h2 className={classes.sectionTitle}>
            Stop the &quot;Telephone Game.&quot;<br />Protect Your Margins.
          </h2>
        </div>

        <div className={classes.aiTwoCardGrid}>
          {/* Card 1: Conversation to Code */}
          <div
            className={`${classes.glassCard} ${classes.cardBorderBrand}`}
            onMouseEnter={() => setHoveredAiCard('code')}
            onMouseLeave={() => setHoveredAiCard(null)}
          >
            <div>
              <div className={classes.aiCardHeader}>
                <div className={classes.aiIconBox}>
                  <BrainIcon width={28} height={28} isHovered={hoveredAiCard === 'code'} />
                </div>
                <h3 className={classes.aiCardTitle}>From Conversation to Code</h3>
              </div>
              <p className={classes.aiCardText}>
                Our AI captures exact client requirements during the call and generates accurate, assignable tickets directly for your development team.
              </p>
            </div>

            {/* Interactive Live Voice-to-Ticket Widget */}
            <div className={classes.ticketPreviewBox}>
              <div className={classes.transcriptQuote}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#E11D48' }}>● AUDIO CAPTURE</span>
                  <span style={{ fontSize: 10, color: '#94A3B8' }}>10:42 AM</span>
                </div>
                <em>&quot;Yes, we&apos;ll definitely need the payment gateway updated by Tuesday.&quot;</em>
              </div>

              <div className={classes.ticketGeneratedRow}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className={classes.ticketBadge}>STR-204</span>
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>Update Payment Gateway integration</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>Auto-Assigned</span>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Search & Instant Proof */}
          <div
            className={`${classes.glassCard} ${classes.cardBorderEmerald}`}
            onMouseEnter={() => setHoveredAiCard('search')}
            onMouseLeave={() => setHoveredAiCard(null)}
          >
            <div>
              <div className={classes.aiCardHeader}>
                <div className={classes.aiIconBoxEmerald}>
                  <SearchIcon width={28} height={28} isHovered={hoveredAiCard === 'search'} />
                </div>
                <h3 className={classes.aiCardTitle}>Smart Search &amp; Instant Proof</h3>
              </div>
              <p className={classes.aiCardText}>
                Every meeting becomes searchable memory. Ask what a client requested and get the exact answer with its date, time, and words.
              </p>
            </div>

            {/* Interactive Searchable Memory Widget */}
            <div className={classes.searchPreviewBox}>
              <div className={classes.searchBarMock}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2.5} strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>What file format did the client approve for billing?</span>
              </div>

              <div className={classes.verifiedProofBadge}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2.5} strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Verified Quote:</strong> &quot;Approved for PDF format&quot; &bull; <em>Huddle Sep 8, 11:15 AM (0.24s)</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: UNIFIED MOBILE EXPERIENCE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.mobileSection}>
        <div className={classes.mobileSplit}>
          {/* Mobile Phone Mockup inheriting exact Connect design */}
          <div className={classes.mobilePhoneCol}>
            <PhoneMockup variant="connect" />
          </div>

          {/* Mobile Information Details */}
          <div className={classes.mobileDetailsCol}>
            <div>
              <div className={classes.kicker}>Mobile Apps</div>
              <h2 className={classes.sectionTitle}>Your Team, In Your Pocket.</h2>
              <p className={classes.sectionDescription} style={{ marginBottom: 28 }}>
                Take live 4K video calls, review AI meeting extracts, and manage your team from anywhere on iOS and Android.
              </p>
            </div>

            {/* Universal App Store & Play Store Buttons with Social Proof */}
            <AppStoreButtons reviewCountText="Over 45,000+ active enterprise professionals" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: ENTERPRISE FEATURES, NO EXTRA INVOICE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.sectionHeaderCentered}>
          <h2 className={classes.sectionTitle}>Enterprise Features, No Extra Invoice</h2>
          <p className={classes.sectionDescription}>
            Unlimited calls, message history, screen recording, and organization-controlled retention are included in your Weblings Worksuite.
          </p>
        </div>

        <div className={classes.enterpriseGrid}>
          <div
            className={classes.usageCard}
            onMouseEnter={() => setHoveredUsageCard('pip')}
            onMouseLeave={() => setHoveredUsageCard(null)}
          >
            <div
              className={classes.usageIconWrap}
              style={{
                backgroundColor: hoveredUsageCard === 'pip' ? '#EBF5FF' : '#F8FAFC',
                borderColor: hoveredUsageCard === 'pip' ? '#0072C4' : '#E2E8F0',
              }}
            >
              <TrendingUpIcon width={24} height={24} isHovered={hoveredUsageCard === 'pip'} />
            </div>
            <h3 className={classes.usageCardTitle}>Picture-in-Picture</h3>
            <p className={classes.usageCardDesc}>
              Keep video floating while browsing other modules and tickets.
            </p>
          </div>

          <div
            className={classes.usageCard}
            onMouseEnter={() => setHoveredUsageCard('recording')}
            onMouseLeave={() => setHoveredUsageCard(null)}
          >
            <div
              className={classes.usageIconWrap}
              style={{
                backgroundColor: hoveredUsageCard === 'recording' ? '#EBF5FF' : '#F8FAFC',
                borderColor: hoveredUsageCard === 'recording' ? '#0072C4' : '#E2E8F0',
              }}
            >
              <BoltIcon width={24} height={24} isHovered={hoveredUsageCard === 'recording'} />
            </div>
            <h3 className={classes.usageCardTitle}>Screen Recording</h3>
            <p className={classes.usageCardDesc}>
              Save native screen sharing and recordings to Drive.
            </p>
          </div>

          <div
            className={classes.usageCard}
            onMouseEnter={() => setHoveredUsageCard('privacy')}
            onMouseLeave={() => setHoveredUsageCard(null)}
          >
            <div
              className={classes.usageIconWrap}
              style={{
                backgroundColor: hoveredUsageCard === 'privacy' ? '#EBF5FF' : '#F8FAFC',
                borderColor: hoveredUsageCard === 'privacy' ? '#0072C4' : '#E2E8F0',
              }}
            >
              <BuildingIcon width={24} height={24} isHovered={hoveredUsageCard === 'privacy'} />
            </div>
            <h3 className={classes.usageCardTitle}>Branch Privacy</h3>
            <p className={classes.usageCardDesc}>
              Keep regional teams in private workspaces.
            </p>
          </div>

          <div
            className={classes.usageCard}
            onMouseEnter={() => setHoveredUsageCard('retention')}
            onMouseLeave={() => setHoveredUsageCard(null)}
          >
            <div
              className={classes.usageIconWrap}
              style={{
                backgroundColor: hoveredUsageCard === 'retention' ? '#EBF5FF' : '#F8FAFC',
                borderColor: hoveredUsageCard === 'retention' ? '#0072C4' : '#E2E8F0',
              }}
            >
              <LockIcon width={24} height={24} isHovered={hoveredUsageCard === 'retention'} />
            </div>
            <h3 className={classes.usageCardTitle}>Custom Retention</h3>
            <p className={classes.usageCardDesc}>
              Preserve files and messages using your organization rules.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectFeature;
