'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './style';
import AppStoreButtons from '../../../../../components/appStoreButtons';
import {
  MailIcon,
  ShieldLockIcon,
  SettingsIcon,
  VirusShieldIcon,
  InfinityIcon,
  FolderIcon,
  CartIcon,
  SearchIcon,
  BrainIcon,
  TagIcon,
  UserIcon,
  BoltIcon,
  GlobeIcon,
  MessageSquareIcon,
  ClipboardCheckIcon,
} from '../../../../../assets/icons_component';

import WeblingsMailMockup from '../../../../../components/mailMockup/index';
import PhoneMockup from '../../../../../components/phoneMockup/index';

/* ─────────────────────────────────────────────────────────────
   INLINE ACCENT SVG ICONS
   ───────────────────────────────────────────────────────────── */
const SvgArrowRight = ({ width = 15, height = 15 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SvgApple = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.03-.51 2.58-1.18z" />
  </svg>
);

const SvgAndroid = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.551 0 .9993.4478.9993.9993.0001.5515-.4482 1.0001-.9993 1.0001m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.5511 0 .9993.4478.9993.9993 0 .5515-.4482 1.0001-.9993 1.0001m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.1 12 8.1s-3.5902.3126-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
  </svg>
);

const SvgStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const MailFeature = () => {
  const classes = useStyles();

  // Interactive step selection state
  const [activeStep, setActiveStep] = useState<number>(2);

  // Hover states for interactive card micro-animations
  const [hoveredSecCard, setHoveredSecCard] = useState<number | null>(null);
  const [hoveredBenefitCard, setHoveredBenefitCard] = useState<number | null>(null);
  const [hoveredIntelligentCard, setHoveredIntelligentCard] = useState<string | null>(null);

  return (
    <div className={classes.page}>
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION WITH EMBEDDED INTERACTIVE WEB APP MOCKUP
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.hero}>
        <div className={classes.glow} />
        <div className={classes.heroContent}>
          <div className={classes.heroBadge}>
            <MailIcon width={16} height={16} /> Weblings Inbox
          </div>
          <h1 className={classes.heroTitle}>
            Enterprise Email Hosting.
            <span className={classes.heroTitleAccent}>Without the per-seat tax.</span>
          </h1>
          <p className={classes.heroDescription}>
            Stop paying extra every time you hire a new employee. Get unlimited custom domain email addresses, edge-network spam protection, and the ability to send massive 10GB attachments—all fully included in your Weblings Worksuite.
          </p>
          <button className={classes.heroPrimaryButton}>Deploy Enterprise Inbox</button>
        </div>

        {/* Authentic Weblings Mail App Mockup — Interactive Embedded Web Area */}
        <div className={classes.webMockupWrapper}>
          <WeblingsMailMockup />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: ZERO-DAY ONBOARDING
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionOne}>
        <div className={classes.ambientBlobBrand} />
        <div className={classes.ambientBlobInfo} />

        <div className={classes.container}>
          <div className={classes.splitGrid}>
            {/* Left Column: Narrative & Interactive Stepper Timeline */}
            <div className={classes.gridCol}>
              <div className={classes.eyebrowPill}>
                <span className={classes.pingDot} />
                <span className={classes.eyebrowText}>ZERO-DAY ONBOARDING</span>
              </div>

              <h2 className={classes.sectionTitle}>
                From Offer Letter to Inbox in{' '}
                <span className={classes.sectionTitleWavy}>3 Seconds</span>.
              </h2>

              <p className={classes.sectionSubtitle}>
                Stop filing IT tickets just to get a new employee an email address. Because Inbox is deeply integrated with the E-Office HRMS, the workflow is entirely automated.
              </p>

              {/* Stepper Timeline */}
              <div className={classes.timelineWrapper}>
                <div className={classes.timelineLine} />

                {/* Mobile Quick Step Selector Bar */}
                <div className={classes.mobileQuickTabs}>
                  <button
                    type="button"
                    className={activeStep === 1 ? classes.mobileQuickTabBtnActive : classes.mobileQuickTabBtn}
                    onClick={() => setActiveStep(1)}
                  >
                    <span className={activeStep === 1 ? classes.mobileQuickTabNumActive : classes.mobileQuickTabNum}>1</span>
                    <span>HR Profile</span>
                  </button>
                  <button
                    type="button"
                    className={activeStep === 2 ? classes.mobileQuickTabBtnActive : classes.mobileQuickTabBtn}
                    onClick={() => setActiveStep(2)}
                  >
                    <span className={activeStep === 2 ? classes.mobileQuickTabNumActive : classes.mobileQuickTabNum}>2</span>
                    <span>Email</span>
                  </button>
                  <button
                    type="button"
                    className={activeStep === 3 ? classes.mobileQuickTabBtnActive : classes.mobileQuickTabBtn}
                    onClick={() => setActiveStep(3)}
                  >
                    <span className={activeStep === 3 ? classes.mobileQuickTabNumActive : classes.mobileQuickTabNum}>3</span>
                    <span>Ready</span>
                  </button>
                </div>

                {/* Step 1 */}
                <div
                  className={classes.stepItem}
                  onClick={() => setActiveStep(1)}
                  onMouseEnter={() => setActiveStep(1)}
                >
                  <div className={activeStep === 1 ? classes.stepNumberCircleActive : classes.stepNumberCircle}>
                    1
                  </div>
                  <div className={activeStep === 1 ? classes.stepContentBoxActive : classes.stepContentBox}>
                    {/* Mobile Header with integrated step badge */}
                    <div className={classes.mobileCardHeader}>
                      <div className={classes.mobileBadgeAndTitle}>
                        <span className={activeStep === 1 ? classes.mobileStepBadgeActive : classes.mobileStepBadge}>1</span>
                        <h3 className={classes.stepTitle}>HR Creates the Profile</h3>
                      </div>
                    </div>
                    {/* Desktop Header */}
                    <div className={classes.stepTitleRow}>
                      <h3 className={classes.stepTitle}>HR Creates the Profile</h3>
                    </div>
                    <p className={classes.stepDescription}>
                      Your HR manager adds the new hire in E-Office and selects their specific branch location from a simple dropdown.
                    </p>
                  </div>
                </div>

                {/* Mobile Step Connector 1 -> 2 */}
                <div className={classes.mobileStepConnector}>
                  <div className={classes.mobileConnectorLine} />
                </div>

                {/* Step 2 */}
                <div
                  className={classes.stepItem}
                  onClick={() => setActiveStep(2)}
                  onMouseEnter={() => setActiveStep(2)}
                >
                  <div className={activeStep === 2 ? classes.stepNumberCircleActive : classes.stepNumberCircle}>
                    2
                  </div>
                  <div className={activeStep === 2 ? classes.stepContentBoxActive : classes.stepContentBox}>
                    {/* Mobile Header with integrated step badge */}
                    <div className={classes.mobileCardHeader}>
                      <div className={classes.mobileBadgeAndTitle}>
                        <span className={activeStep === 2 ? classes.mobileStepBadgeActive : classes.mobileStepBadge}>2</span>
                        <h3 className={classes.stepTitle}>Instant Email Allocation</h3>
                      </div>
                      <span className={classes.stepTag}>Auto-Provision</span>
                    </div>
                    {/* Desktop Header */}
                    <div className={classes.stepTitleRow}>
                      <h3 className={classes.stepTitle}>Instant Email Allocation</h3>
                      <span className={classes.stepTag}>Auto-Provision</span>
                    </div>
                    <p className={classes.stepDescription}>
                      The system instantly creates their custom business email under the domain allocated to that specific location.
                    </p>
                  </div>
                </div>

                {/* Mobile Step Connector 2 -> 3 */}
                <div className={classes.mobileStepConnector}>
                  <div className={classes.mobileConnectorLine} />
                </div>

                {/* Step 3 */}
                <div
                  className={classes.stepItem}
                  onClick={() => setActiveStep(3)}
                  onMouseEnter={() => setActiveStep(3)}
                >
                  <div className={activeStep === 3 ? classes.stepNumberCircleActive : classes.stepNumberCircle}>
                    3
                  </div>
                  <div className={activeStep === 3 ? classes.stepContentBoxActive : classes.stepContentBox}>
                    {/* Mobile Header with integrated step badge */}
                    <div className={classes.mobileCardHeader}>
                      <div className={classes.mobileBadgeAndTitle}>
                        <span className={activeStep === 3 ? classes.mobileStepBadgeActive : classes.mobileStepBadge}>3</span>
                        <h3 className={classes.stepTitle}>Ready to Work</h3>
                      </div>
                    </div>
                    {/* Desktop Header */}
                    <div className={classes.stepTitleRow}>
                      <h3 className={classes.stepTitle}>Ready to Work</h3>
                    </div>
                    <p className={classes.stepDescription}>
                      Within seconds, the new identity is populated across Team Chat, Streamline tickets, and the company directory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Glass Showcase Card */}
            <div className={classes.gridCol}>
              <div className={classes.glassShowcaseCard}>
                {/* Window Chrome Bar */}
                <div className={classes.glassWindowBar}>
                  <div className={classes.trafficDots}>
                    <span className={classes.dotRed} />
                    <span className={classes.dotYellow} />
                    <span className={classes.dotGreen} />
                    <span className={classes.pipelineUrl}>pipeline.weblings.internal</span>
                  </div>
                  <span className={classes.liveSyncBadge}>LIVE SYNC</span>
                </div>

                {/* Canvas Flow Nodes */}
                <div className={classes.canvasFlow}>
                  {/* Top Node (Step 1) */}
                  <div className={clsx(classes.nodeRow, activeStep === 1 && classes.nodeRowHighlighted)}>
                    <div className={classes.nodeLeft}>
                      <div className={clsx(classes.nodeIconBox, activeStep === 1 && classes.nodeIconBoxBrand)}>
                        <UserIcon width={16} height={16} isHovered={activeStep === 1} />
                      </div>
                      <span className={classes.nodeTitle}>Add Employee: Alex Smith</span>
                    </div>
                    <span className={clsx(classes.nodeTag, activeStep === 1 && classes.nodeTagActive)}>E-Office</span>
                  </div>

                  {/* Pulsing Connector */}
                  <div className={clsx(classes.connectorPulsing, activeStep >= 2 && classes.connectorPulsingActive)}>
                    <span className={classes.connectorPingDot} />
                  </div>

                  {/* Highlight Node (Step 2) */}
                  <div className={clsx(classes.nodeRow, activeStep === 2 && classes.nodeRowHighlighted)}>
                    <div className={classes.nodeLeft}>
                      <div className={clsx(classes.nodeIconBox, activeStep === 2 && classes.nodeIconBoxBrand)}>
                        <MailIcon width={16} height={16} isHovered={activeStep === 2} />
                      </div>
                      <span className={classes.nodeEmailText}>alex@ny-branch.com</span>
                    </div>
                    <div className={classes.nodeSpeedBadge}>
                      <BoltIcon width={13} height={13} isHovered={activeStep === 2} />
                      <span>0.4s</span>
                    </div>
                  </div>

                  {/* Branching Fork Connectors */}
                  <div className={clsx(classes.branchingFork, activeStep === 3 && classes.branchingForkActive)}>
                    <div className={classes.forkTopStem} />
                    <div className={classes.forkBar} />
                    <div className={classes.forkBottomStems}>
                      <div className={classes.forkBottomStem} />
                      <div className={classes.forkBottomStem} />
                    </div>
                  </div>

                  {/* Bottom Output Nodes (Step 3) */}
                  <div className={classes.bottomNodesGrid}>
                    <div className={clsx(classes.bottomNodeCard, activeStep === 3 && classes.bottomNodeCardHighlighted)}>
                      <MessageSquareIcon width={15} height={15} isHovered={activeStep === 3} />
                      <span>Added to Chat</span>
                    </div>
                    <div className={clsx(classes.bottomNodeCard, activeStep === 3 && classes.bottomNodeCardHighlighted)}>
                      <ClipboardCheckIcon width={15} height={15} isHovered={activeStep === 3} />
                      <span>Added to Streamline</span>
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className={classes.glassCardFooter}>
                  <span className={classes.footerStatusOk}>
                    <span className={classes.footerDotGreen} />
                    {activeStep === 1 && "Profile synced • Branch NY selected"}
                    {activeStep === 2 && "Auto-provisioned • alex@ny-branch.com"}
                    {activeStep === 3 && "Webhook dispatched • Chat & Streamline ready"}
                  </span>
                  <span>{activeStep === 3 ? "HTTP 200 OK" : "HTTP 201 CREATED"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: GLOBAL ARCHITECTURE & COMPLIANCE
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionTwo}>
        <div className={classes.container}>
          {/* Section Header */}
          <div className={classes.secTwoHeader}>
            <div className={classes.eyebrowPill}>
              <span className={classes.eyebrowText}>MILITARY-GRADE PERIMETER</span>
            </div>
            <h2 className={classes.sectionTitle}>Secured by the Global Edge Network.</h2>
            <p className={classes.sectionSubtitle} style={{ marginBottom: 0 }}>
              Email is the number one vector for corporate breaches. We route your entire inbox through the same infrastructure that protects the world's largest financial institutions.
            </p>
          </div>

          {/* Main Topology Visualization Card */}
          <div className={classes.topologyCard}>
            <div className={classes.topologyHeaderRow}>
              <div className={classes.topologyHeaderLeft}>
                <div className={classes.topologyIconBox}>
                  <GlobeIcon width={22} height={22} />
                </div>
                <div>
                  <h3 className={classes.topologyTitle}>Anycast Routing Fabric</h3>
                  <p className={classes.topologySubtitle}>340+ PoPs across 110 global metropolitan clusters</p>
                </div>
              </div>

              <div className={classes.topologyBadgesRow}>
                <span className={classes.complianceBadgePositive}>
                  <ShieldLockIcon width={14} height={14} /> TLS 1.3 / E2EE
                </span>
                <span className={classes.complianceBadgeBrand}>
                  <ShieldLockIcon width={14} height={14} /> Quantum-Resistant
                </span>
              </div>
            </div>

            {/* Node Latency Matrix */}
            <div className={classes.latencyMatrixGrid}>
              {/* US-East */}
              <div className={classes.edgeNodeCard}>
                <div className={classes.edgeNodeHeader}>
                  <span className={classes.edgeRegionName}>EDGE // US-EAST</span>
                  <span className={classes.edgeStatusPulseDot} />
                </div>
                <div>
                  <span className={classes.edgeLatencyBig}>
                    8.2<span className={classes.edgeLatencyUnit}>ms</span>
                  </span>
                  <div className={classes.progressBarBg}>
                    <div className={classes.progressBarFill} style={{ width: '88%' }} />
                  </div>
                </div>
                <span className={classes.edgeLocationSub}>Ashburn DC-11 • Active</span>
              </div>

              {/* EU-Central */}
              <div className={classes.edgeNodeCard}>
                <div className={classes.edgeNodeHeader}>
                  <span className={classes.edgeRegionName}>EDGE // EU-CENTRAL</span>
                  <span className={classes.edgeStatusPulseDot} />
                </div>
                <div>
                  <span className={classes.edgeLatencyBig}>
                    11.4<span className={classes.edgeLatencyUnit}>ms</span>
                  </span>
                  <div className={classes.progressBarBg}>
                    <div className={classes.progressBarFill} style={{ width: '79%' }} />
                  </div>
                </div>
                <span className={classes.edgeLocationSub}>Frankfurt FRA-02 • Active</span>
              </div>

              {/* AP-South */}
              <div className={classes.edgeNodeCard}>
                <div className={classes.edgeNodeHeader}>
                  <span className={classes.edgeRegionName}>EDGE // AP-SOUTH</span>
                  <span className={classes.edgeStatusPulseDot} />
                </div>
                <div>
                  <span className={classes.edgeLatencyBig}>
                    14.1<span className={classes.edgeLatencyUnit}>ms</span>
                  </span>
                  <div className={classes.progressBarBg}>
                    <div className={classes.progressBarFill} style={{ width: '72%' }} />
                  </div>
                </div>
                <span className={classes.edgeLocationSub}>Singapore SIN-08 • Active</span>
              </div>

              {/* SA-East */}
              <div className={classes.edgeNodeCard}>
                <div className={classes.edgeNodeHeader}>
                  <span className={classes.edgeRegionName}>EDGE // SA-EAST</span>
                  <span className={classes.edgeStatusPulseDot} />
                </div>
                <div>
                  <span className={classes.edgeLatencyBig}>
                    18.7<span className={classes.edgeLatencyUnit}>ms</span>
                  </span>
                  <div className={classes.progressBarBg}>
                    <div className={classes.progressBarFill} style={{ width: '65%' }} />
                  </div>
                </div>
                <span className={classes.edgeLocationSub}>São Paulo GRU-01 • Active</span>
              </div>
            </div>
          </div>

          {/* 3 Supporting Security Pillar Cards */}
          <div className={classes.securityGridThree}>
            <div
              className={classes.securityMiniCard}
              onMouseEnter={() => setHoveredSecCard(1)}
              onMouseLeave={() => setHoveredSecCard(null)}
            >
              <div className={clsx(classes.securityIconBox, classes.securityIconBlue)}>
                <ShieldLockIcon width={22} height={22} isHovered={hoveredSecCard === 1} />
              </div>
              <h3 className={classes.securityCardTitle}>Advanced Anti-Phishing</h3>
              <p className={classes.securityCardText}>
                Our perimeter network proactively detects attacker infrastructure, stopping targeted BEC and phishing attacks before they reach your inbox.
              </p>
            </div>

            <div
              className={classes.securityMiniCard}
              onMouseEnter={() => setHoveredSecCard(2)}
              onMouseLeave={() => setHoveredSecCard(null)}
            >
              <div className={clsx(classes.securityIconBox, classes.securityIconPurple)}>
                <SettingsIcon width={22} height={22} isHovered={hoveredSecCard === 2} />
              </div>
              <h3 className={classes.securityCardTitle}>Zero-Headache DNS</h3>
              <p className={classes.securityCardText}>
                SPF, DKIM, and DMARC configure themselves automatically when you link or purchase a domain.
              </p>
            </div>

            <div
              className={classes.securityMiniCard}
              onMouseEnter={() => setHoveredSecCard(3)}
              onMouseLeave={() => setHoveredSecCard(null)}
            >
              <div className={clsx(classes.securityIconBox, classes.securityIconRose)}>
                <VirusShieldIcon width={22} height={22} isHovered={hoveredSecCard === 3} />
              </div>
              <h3 className={classes.securityCardTitle}>Edge-Level Antivirus</h3>
              <p className={classes.securityCardText}>
                Every attachment is scanned by multiple enterprise virus engines in isolated cloud sandboxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: UNRESTRICTED EMAIL, FULLY INCLUDED
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionThree}>
        <div className={classes.container}>
          <div className={classes.centerHeader}>
            <div className={classes.eyebrowPill}>
              <span className={classes.eyebrowText}>ENTERPRISE INCLUSIONS</span>
            </div>
            <h2 className={classes.sectionTitle}>Unrestricted Email, Fully Included.</h2>
            <p className={classes.sectionSubtitle}>
              Stop rationing out email addresses to save money on user licenses. Create as many custom inboxes as you need for contractors, support aliases, or new hires. It is 100% included in your flat Weblings Worksuite invoice.
            </p>
          </div>

          <div className={classes.fourCardsGrid}>
            {/* Card 1 */}
            <div
              className={clsx(classes.featureBenefitCard, classes.benefitCardBlue)}
              onMouseEnter={() => setHoveredBenefitCard(1)}
              onMouseLeave={() => setHoveredBenefitCard(null)}
            >
              <div className={clsx(classes.featureBenefitIconBox, classes.benefitIconBlue)}>
                <InfinityIcon width={24} height={24} isHovered={hoveredBenefitCard === 1} />
              </div>
              <h3 className={classes.featureBenefitTitle}>Unlimited Addresses</h3>
              <p className={classes.featureBenefitText}>
                Create absolute unlimited aliases and standard inboxes. No extra per-user billing.
              </p>
              <div className={classes.hoverLink}>
                <span>Explore aliases</span>
                <SvgArrowRight />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={clsx(classes.featureBenefitCard, classes.benefitCardPurple)}
              onMouseEnter={() => setHoveredBenefitCard(2)}
              onMouseLeave={() => setHoveredBenefitCard(null)}
            >
              <div className={clsx(classes.featureBenefitIconBox, classes.benefitIconPurple)}>
                <FolderIcon width={24} height={24} isHovered={hoveredBenefitCard === 2} />
              </div>
              <h3 className={classes.featureBenefitTitle}>Massive 10GB Attachments</h3>
              <p className={classes.featureBenefitText}>
                Standard 20MB native limits apply, but our Drive integration automatically swaps larger files for secure 10GB links.
              </p>
              <div className={classes.hoverLink}>
                <span>Storage policy</span>
                <SvgArrowRight />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={clsx(classes.featureBenefitCard, classes.benefitCardGreen)}
              onMouseEnter={() => setHoveredBenefitCard(3)}
              onMouseLeave={() => setHoveredBenefitCard(null)}
            >
              <div className={clsx(classes.featureBenefitIconBox, classes.benefitIconGreen)}>
                <CartIcon width={24} height={24} isHovered={hoveredBenefitCard === 3} />
              </div>
              <h3 className={classes.featureBenefitTitle}>In-App Domain Purchasing</h3>
              <p className={classes.featureBenefitText}>
                Search, purchase, and route new domains directly within the Organization app natively.
              </p>
              <div className={classes.hoverLink}>
                <span>Domain registrar</span>
                <SvgArrowRight />
              </div>
            </div>

            {/* Card 4 */}
            <div
              className={clsx(classes.featureBenefitCard, classes.benefitCardAmber)}
              onMouseEnter={() => setHoveredBenefitCard(4)}
              onMouseLeave={() => setHoveredBenefitCard(null)}
            >
              <div className={clsx(classes.featureBenefitIconBox, classes.benefitIconAmber)}>
                <SearchIcon width={24} height={24} isHovered={hoveredBenefitCard === 4} />
              </div>
              <h3 className={classes.featureBenefitTitle}>Lightning Fast Indexing</h3>
              <p className={classes.featureBenefitText}>
                Instantly filter through years of indexed email history without browser lag or timeouts.
              </p>
              <div className={classes.hoverLink}>
                <span>Instant search tech</span>
                <SvgArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: INTELLIGENT ORGANIZATION
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionFour}>
        <div className={classes.container}>
          <div className={classes.centerHeader}>
            <div className={classes.eyebrowPill}>
              <span className={classes.eyebrowText}>INTELLIGENT ORGANIZATION</span>
            </div>
            <h2 className={classes.sectionTitle}>Find Anything. Organize Everything.</h2>
            <p className={classes.sectionSubtitle}>
              AI-powered retrieval and visual segregation help you find every thread without guessing the right keywords.
            </p>
          </div>

          <div className={classes.twoCardComparisonGrid}>
            {/* Card A: Semantic Vector Search */}
            <div
              className={classes.intelligentCard}
              onMouseEnter={() => setHoveredIntelligentCard('a')}
              onMouseLeave={() => setHoveredIntelligentCard(null)}
            >
              <div>
                <div className={clsx(classes.featureBenefitIconBox, classes.intelligentIconPurple)}>
                  <BrainIcon width={26} height={26} isHovered={hoveredIntelligentCard === 'a'} />
                </div>
                <h3 className={classes.featureBenefitTitle}>Semantic Vector Search</h3>
                <p className={classes.featureBenefitText}>
                  Stop guessing exact keywords. Our built-in AI uses vector embeddings to understand the meaning and context behind your search. Ask naturally and find the exact email immediately.
                </p>
              </div>

              {/* UI Search Mockup */}
              <div className={classes.searchMockupBar}>
                <SearchIcon width={16} height={16} isHovered={hoveredIntelligentCard === 'a'} />
                <span className={classes.searchQueryText}>
                  &ldquo;that design file Sarah sent last week&rdquo;
                </span>
                <span className={classes.kbdShortcut}>⌘K</span>
              </div>
            </div>

            {/* Card B: Visual Color Tags */}
            <div
              className={classes.intelligentCard}
              onMouseEnter={() => setHoveredIntelligentCard('b')}
              onMouseLeave={() => setHoveredIntelligentCard(null)}
            >
              <div>
                <div className={clsx(classes.featureBenefitIconBox, classes.intelligentIconBlue)}>
                  <TagIcon width={26} height={26} isHovered={hoveredIntelligentCard === 'b'} />
                </div>
                <h3 className={classes.featureBenefitTitle}>Visual Color Tags</h3>
                <p className={classes.featureBenefitText}>
                  Visually segregate your inbox with custom, color-coded tags for projects, priority levels, or specific clients. Keep your workspace perfectly categorized.
                </p>
              </div>

              {/* UI Tags Collection Mockup */}
              <div className={classes.tagsCollectionMockup}>
                <span className={classes.tagChipRed}>
                  <span className={classes.tagChipDot} style={{ backgroundColor: '#E35D6A' }} />
                  Urgent
                </span>
                <span className={classes.tagChipAmber}>
                  <span className={classes.tagChipDot} style={{ backgroundColor: '#F59E0B' }} />
                  Client Approval
                </span>
                <span className={classes.tagChipBlue}>
                  <span className={classes.tagChipDot} style={{ backgroundColor: '#0072C4' }} />
                  Invoices
                </span>
                <span className={classes.tagChipGreen}>
                  <span className={classes.tagChipDot} style={{ backgroundColor: '#10B981' }} />
                  Internal Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: UNIFIED MOBILE EXPERIENCE
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionFive}>
        <div className={classes.container}>
          <div className={classes.mobileSplitGrid}>
            {/* Left Column: Phone Mockup Component with Mail Variant */}
            <div className={classes.mobileLeftCol}>
              <PhoneMockup variant="mail" />
            </div>

            {/* Right Column: Unified Mobile Copy & Store CTAs */}
            <div className={classes.mobileRightCol}>
              <div className={classes.eyebrowPill}>
                <span className={classes.eyebrowText}>UNIFIED MOBILE EXPERIENCE</span>
              </div>

              <h2 className={classes.sectionTitle}>Your Team, In Your Pocket.</h2>

              <p className={classes.sectionSubtitle}>
                You don&apos;t need a separate app for email, another for chat, and another for HR. The unified Weblings iOS and Android app puts your Enterprise Inbox right next to your Streamline tickets and Team Chat. Stay responsive to clients and collaborate seamlessly anywhere.
              </p>

              {/* Universal App Store & Play Store Buttons with Social Proof */}
              <AppStoreButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MailFeature;
