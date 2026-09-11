'use client';

import React from "react";
import Typography from "../../components/typography/component";
import { usestyles } from "./style";
import Button from "../../components/button/button";
import SvgChevronRight from "../../components/svg/ChevronRight";
import clsx from "clsx";
import SvgStar from "../../components/svg/Star";
import SvgFrame from "../../components/svg/Frame";
import SvgNewsletter from "../../components/svg/Newsletter";
import WorkspaceDashboardMockup from "../../components/dashboardMockup/index";
import { useRouter } from "next/navigation";
import SvgNewHero from "../../custom-icons/NewHero";
import StorageGraphic from "../../components/svg/StorageGraphic";
import PipelineStep from "../../components/pipelineStep/index";
import PhoneMockup from "../../components/phoneMockup/index";
import BentoCard from "../../components/bentoCard/index";
import {
  SvgBrain,
  SvgMic,
  SvgBolt,
  SvgClipboardCheck,
  SvgCodeSearch,
  SvgBellAlert,
} from "../../components/svg/CustomIcons";

// Import static data from JSON
import data from "../../data/home.json";

const aiIcons: Record<string, React.ReactNode> = {
  brain: <SvgBrain width={22} height={22} />,
  mic: <SvgMic width={22} height={22} />,
  bolt: <SvgBolt width={22} height={22} />,
  clipboardCheck: <SvgClipboardCheck width={22} height={22} />,
  codeSearch: <SvgCodeSearch width={22} height={22} />,
  bellAlert: <SvgBellAlert width={22} height={22} />,
};

// Migration card color mapping (order matches data.migration.points)
const migrationColorClasses = [
  { card: "migrationCardGreen", icon: "migrationIconGreen" },
  { card: "migrationCardSky", icon: "migrationIconSky" },
  { card: "migrationCardAmber", icon: "migrationIconAmber" },
  { card: "migrationCardOrange", icon: "migrationIconOrange" },
  { card: "migrationCardPurple", icon: "migrationIconPurple" },
  { card: "migrationCardRose", icon: "migrationIconRose" },
];

// Migration SVG icons
const migrationSvgIcons = [
  // checkCircle
  <svg key="mc1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // messageSquare
  <svg key="mc2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  // handshake
  <svg key="mc3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>,
  // cloud
  <svg key="mc4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  // shieldLock
  <svg key="mc5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  // doorOpen
  <svg key="mc6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>,
];

// Bento section icons and data
const bentoColors = ["blue", "purple", "rose", "emerald"] as const;
const bentoBadges = ["DNS SECURE", "MULTI-TENANT", "ENCRYPTED SILOS", "GLOBAL VISIBILITY"];
const bentoIcons = [
  <svg key="b1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  <svg key="b2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="b3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  <svg key="b4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
];

// Bento footer renderers
const bentoFooters = [
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#2563EB" }} />
        MX, SPF &amp; DKIM configured ✓
      </span>
      <span style={{ background: "rgba(59,130,246,0.1)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>Auto-propagated</span>
    </>
  ),
  (
    <>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>ny.weblings.io</span>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>sf.weblings.io</span>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>london.weblings.io</span>
    </>
  ),
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        Strict Cross-Branch Silo
      </span>
      <span style={{ background: "rgba(244,63,94,0.08)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>Zero Leakage Guarantee</span>
    </>
  ),
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#059669" }} />
        Executive Telemetry Suite
      </span>
      <span style={{ background: "rgba(16,185,129,0.08)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>Real-time Metrics</span>
    </>
  ),
];

const Products = () => {
  const router = useRouter();
  const classes = usestyles();

  return (
    <div>
      {/* HeaderSection */}
      <div className={classes.mainSecCon}>
        <div className={classes.HeaderSection}>
          <div className={classes.heroBadge}>
            <span className={classes.pulseDot}></span>
            {data.headSection.badge}
          </div>
          <h1 className={classes.headTitle}>
            {data.headSection.titlePart1}
            <span className={classes.titleHighlight}>
              {data.headSection.titleHighlight}
            </span>
          </h1>
          <div className={classes.headTitleDescription}>
            <Typography variant="BM">
              {data.headSection.titleDescription}
            </Typography>
          </div>
          <div className={classes.heroBtnContainer}>
            <div className={classes.heroButtons}>
              <Button
                element="button"
                brand
                className={classes.heroPrimaryBtn}
                rightIcon={<SvgChevronRight className={classes.rightIcon} />}
                onClick={() => router.push(data.headSection.action.link || "/")}
              >
                {data.headSection.action.label}
              </Button>
              <button
                className={classes.heroSecondaryBtn}
                onClick={() => router.push(data.headSection.secondaryAction?.link || "/")}
              >
                {data.headSection.secondaryAction?.label || "Watch Demo"}
              </button>
            </div>
            <span className={classes.heroSubtext}>
              {data.headSection.action.subtext}
            </span>
          </div>
        </div>
        <div className={classes.heroSvgContainer}>
          <SvgNewHero />
        </div>
      </div>

      {/* Tool Ticker Section */}
      <div className={classes.tickerSection}>
        <div className={classes.tickerInner}>
          <div className={classes.tickerTitle}>{data.ticker.title}</div>
          <div className={classes.tickerTools}>
            {data.ticker.tools.map((tool: string, index: number) => (
              <span key={index} className={classes.tickerItem}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Preview Mockup Section */}
      <div className={classes.dashboardMockupContainer}>
        <div className={classes.dashboardMockupGlow} />
        <div className={classes.dashboardMockupFrame}>
          <div className={classes.dashboardMockupHeader}>
            <div className={classes.windowControls}>
              <span className={classes.windowDotRed} />
              <span className={classes.windowDotYellow} />
              <span className={classes.windowDotGreen} />
            </div>
            <div className={classes.browserNavIcons}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}><polyline points="15 18 9 12 15 6" /></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}><polyline points="9 18 15 12 9 6" /></svg>
            </div>
            <div className={classes.windowUrlBar}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={classes.lockIcon}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <span className={classes.windowUrlText}>app.weblings.com/workspace/dashboard</span>
              <span className={classes.windowLiveBadge}>● LIVE</span>
            </div>
            <div className={classes.windowActions}>
              <span className={classes.windowActionTag}>Weblings OS</span>
            </div>
          </div>
          <div className={classes.dashboardMockupScreen}>
            <WorkspaceDashboardMockup />
          </div>
        </div>
      </div>

      {/* AI Dual-Engine Section */}
      <div className={classes.aiSection}>
        <div className={classes.aiHeader}>
          <div className={classes.aiBadge}>
            <span className={classes.aiBadgeDotPurple}></span>
            <span className={classes.aiBadgeDotCyan}></span>
            {data.aiEngine.badge}
          </div>
          <h2 className={classes.aiTitle}>{data.aiEngine.title}</h2>
          <p className={classes.aiDesc}>{data.aiEngine.description}</p>
        </div>
        {/* Scope Defense */}
        <div className={classes.aiFlowBlock}>
          <div className={clsx(classes.aiFlowHeader, classes.purpleFlowText)}>
            <span className={classes.flowBadgePurple}>{data.aiEngine.scopeDefense.badge}</span>
            <span>{data.aiEngine.scopeDefense.title}</span>
          </div>
          <div className={classes.aiGrid}>
            {data.aiEngine.scopeDefense.steps.map((step: any, index: number) => (
              <div key={index} className={classes.aiCardPurple}>
                <div className={clsx(classes.aiCardIcon, classes.aiCardIconPurple)}>
                  {aiIcons[step.id] || step.icon}
                </div>
                <h4 className={classes.aiCardTitle}>{step.title}</h4>
                <p className={classes.aiCardDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Code Adherence */}
        <div className={classes.aiFlowBlock}>
          <div className={clsx(classes.aiFlowHeader, classes.cyanFlowText)}>
            <span className={classes.flowBadgeCyan}>{data.aiEngine.codeAdherence.badge}</span>
            <span>{data.aiEngine.codeAdherence.title}</span>
          </div>
          <div className={classes.aiGrid}>
            {data.aiEngine.codeAdherence.steps.map((step: any, index: number) => (
              <div key={index} className={classes.aiCardCyan}>
                <div className={clsx(classes.aiCardIcon, classes.aiCardIconCyan)}>
                  {aiIcons[step.id] || step.icon}
                </div>
                <h4 className={classes.aiCardTitle}>{step.title}</h4>
                <p className={classes.aiCardDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          WORKFLOW / PIPELINE SECTION — "How the Engine Runs Together"
          Split-view: pipeline steps (left) + Engine HUD (right)
          ═══════════════════════════════════════════════════════ */}
      <section className={classes.workflowSection}>
        <div className={classes.workflowGridPattern} />
        <div className={classes.workflowGlow} />
        <div className={classes.workflowInner}>
          {/* Section Header */}
          <div className={classes.workflowHeader}>
            <div className={classes.workflowBadge}>
              <span className={classes.workflowBadgeDot} />
              {data.automations.badge}
            </div>
            <h2 className={classes.workflowTitle}>{data.automations.title}</h2>
            <p className={classes.workflowSubtitle}>{data.automations.subtitle}</p>
          </div>

          {/* Pipeline Steps */}
          <div className={classes.workflowGrid}>
            <div className={classes.pipelineColumn}>
              <div className={classes.pipelineLine} />
              {data.automations.items.map((item: any, index: number) => (
                <PipelineStep
                  key={index}
                  stepNumber={item.num}
                  title={item.title}
                  description={item.description}
                  statusBadge={item.statusBadge}
                  statusBadgeColor={item.statusBadgeColor}
                  footerItems={item.footerItems}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MOBILE EXPERIENCE SECTION — "Stay in the Loop Anywhere"
          Dual persona cards with embedded phone mockups
          ═══════════════════════════════════════════════════════ */}
      <section className={classes.mobileSection}>
        <div className={classes.mobileDotPattern} />
        <div className={classes.mobileInner}>
          {/* Section Header */}
          <div className={classes.mobileHeader}>
            <div className={classes.mobileBadge}>
              <span className={classes.mobileBadgeIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </span>
              {data.mobileApps.badge}
            </div>
            <h2 className={classes.mobileTitle}>{data.mobileApps.title}</h2>
            <p className={classes.mobileDesc}>{data.mobileApps.description}</p>
          </div>

          {/* Dual Persona Cards */}
          <div className={classes.mobileGrid}>
            {data.mobileApps.cards.map((card: any, index: number) => {
              const isSky = index === 0;
              return (
                <div key={index} className={classes.personaCard}>
                  <div className={clsx(classes.personaGlow, isSky ? classes.personaGlowSky : classes.personaGlowBlue)} />
                  <div>
                    {/* Role Badge */}
                    <div className={classes.roleBadgeRow}>
                      <div className={clsx(classes.roleIcon, isSky ? classes.roleIconSky : classes.roleIconBlue)}>
                        {isSky ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        )}
                      </div>
                      <span className={clsx(classes.roleLabel, isSky ? classes.roleLabelSky : classes.roleLabelBlue)}>
                        {card.target}
                      </span>
                    </div>

                    <h3 className={classes.personaTitle}>{card.title}</h3>
                    <p className={classes.personaDesc}>{card.description}</p>
                  </div>

                  {/* Phone Mockup */}
                  <div className={classes.phoneMockupContainer}>
                    <PhoneMockup
                      variant={card.phoneVariant}
                      notification={card.phoneNotification}
                      feed={card.phoneFeed}
                    />
                  </div>

                  {/* Download Actions */}
                  <div className={classes.downloadFooter}>
                    <span className={classes.downloadLabel}>Available on all mobile platforms:</span>
                    <div className={classes.downloadBtns}>
                      <button className={classes.iosBtn}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.96 2.77.99.08 2.05-.52 2.69-1.27z" /></svg>
                        iOS App
                      </button>
                      <button className={classes.androidBtn}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#059669" }}><path d="M3.609 1.814L13.792 12 3.61 22.186a1.97 1.97 0 0 1-.61-.91V2.724a1.97 1.97 0 0 1 .609-.91zm11.235 11.238l2.257 2.256-11.83 6.83 9.573-9.086zm0-2.104L5.27 1.862l11.831 6.83-2.257 2.256zm1.488 1.488l3.666 2.115c.875.505.875 1.328 0 1.833l-3.666 2.115-2.025-2.031 2.025-2.032z" /></svg>
                        Android App
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MULTI-LOCATION BENTO SECTION — "Built for Growing Businesses"
          4-quadrant color-coded bento grid
          ═══════════════════════════════════════════════════════ */}
      <section className={classes.bentoSection}>
        <div className={classes.bentoInner}>
          {/* Section Header */}
          <div className={classes.bentoHeader}>
            <div className={classes.bentoBadge}>
              <span className={classes.bentoBadgeIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </span>
              Multi-Tenant Architecture
            </div>
            <h2 className={classes.bentoTitle}>{data.features.title}</h2>
            <p className={classes.bentoSubtitle}>{data.features.description}</p>
          </div>

          {/* Bento Grid */}
          <div className={classes.bentoGrid}>
            {data.features.featureBox.map((feature: any, index: number) => (
              <BentoCard
                key={index}
                colorScheme={bentoColors[index]}
                icon={bentoIcons[index]}
                badge={bentoBadges[index]}
                title={feature.titleSubtext}
                description={feature.titleSmallSubText}
                footer={bentoFooters[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MIGRATION / TRUST SECTION — "Terrified of Migrating?"
          Dark slate-900 section with colored-border hover cards
          ═══════════════════════════════════════════════════════ */}
      <section className={classes.migrationSection}>
        <div className={classes.migrationGlowTop} />
        <div className={classes.migrationGlowBottom} />
        <div className={classes.migrationInner}>
          {/* Section Header */}
          <div className={classes.migrationHeader}>
            <div className={classes.migrationBadge}>
              <span className={classes.migrationBadgeIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </span>
              Enterprise Grade Guarantee
            </div>
            <h2 className={classes.migrationTitle}>{data.migration.title}</h2>
            <p className={classes.migrationDesc}>{data.migration.description}</p>
          </div>

          {/* 6-Card Grid */}
          <div className={classes.migrationGrid}>
            {data.migration.points.map((point: any, index: number) => {
              const colorMap = migrationColorClasses[index];
              return (
                <div
                  key={index}
                  className={clsx(
                    classes.migrationCard,
                    classes[colorMap.card as keyof typeof classes]
                  )}
                >
                  <div
                    className={clsx(
                      classes.migrationCardIcon,
                      classes[colorMap.icon as keyof typeof classes]
                    )}
                  >
                    {migrationSvgIcons[index]}
                  </div>
                  <h3 className={classes.migrationCardTitle}>{point.title}</h3>
                  <p className={classes.migrationCardDesc}>{point.description}</p>
                </div>
              );
            })}
          </div>

          {/* Floating CTA */}
          <div className={classes.migrationCTA}>
            <div className={classes.ctaGlowOverlay} />
            <div className={classes.ctaContent}>
              <button
                className={classes.migrationBtn}
                onClick={() => router.push(data.migration.action.link || "/")}
              >
                {data.migration.action.label}
              </button>
              <p className={classes.migrationSubtext}>{data.migration.action.subtext}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage */}
      <div className={classes.StorageContainer}>
        <div className={classes.StorageWrapper}>
          <div className={classes.StorageContentLeft}>
            <Typography variant="TS" className={classes.StorageCategory}>
              {data.storage.category}
            </Typography>
            <Typography variant="HM" className={classes.StorageTitle}>
              {data.storage.title}
            </Typography>
            <Typography variant="BL" className={classes.StorageDescription}>
              {data.storage.description}
            </Typography>
          </div>
          <div className={classes.StorageGraphicRight}>
            <StorageGraphic />
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className={classes.MainSubscribe}>
        <div className={classes.SubscribeDiv}>
          <div className={classes.Subscribe}>
            <div className={classes.NewsLetterImg}>
              <SvgNewsletter />
            </div>
            <Typography variant="HS">{data.subscribe.title}</Typography>
            <div className={classes.Description}>
              {data.subscribe.description}
            </div>
          </div>
          <div className={classes.InputDiv}>
            <input
              className={classes.InputText}
              placeholder={data.subscribe.inputPlaceholder}
              type="text"
              defaultValue=""
            />
            <Button element="button" brand>
              {data.subscribe.action.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
