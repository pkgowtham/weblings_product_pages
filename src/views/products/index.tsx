'use client';

import React, { useState } from "react";
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
import SvgWeblingslogo from "../../components/svg/Weblingslogo";
import StorageGraphic from "../../components/svg/StorageGraphic";
import PipelineStep from "../../components/pipelineStep/index";
import PhoneMockup from "../../components/phoneMockup/index";
import BentoCard from "../../components/bentoCard/index";
import { SvgApple, SvgAndroid } from "../../components/appStoreButtons";
import StatusModal, { StatusModalType } from "../../components/statusModal";
import SecurityComplianceSection from "../../components/securityComplianceSection";
import {
  BrainIcon,
  MicIcon,
  BoltIcon,
  ClipboardCheckIcon,
  CodeSearchIcon,
  BellAlertIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  GlobeIcon,
  BuildingIcon,
  LockIcon,
  BarChartIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  HandshakeIcon,
  CloudServerIcon,
  ShieldLockIcon,
  DatabaseShieldIcon,
  DoorOpenIcon,
} from "../../assets/icons_component";

// Import static data from JSON
import data from "../../data/home.json";

// Email regex: ensures proper structure, exactly one period after @, and at least 2 letters after the period
const EMAIL_REGEX = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

const aiIcons: Record<string, React.ReactNode> = {
  brain: <BrainIcon width={22} height={22} />,
  mic: <MicIcon width={22} height={22} />,
  bolt: <BoltIcon width={22} height={22} />,
  clipboardCheck: <ClipboardCheckIcon width={22} height={22} />,
  codeSearch: <CodeSearchIcon width={22} height={22} />,
  bellAlert: <BellAlertIcon width={22} height={22} />,
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

// Migration SVG icons with reverse-snap hover animations
const migrationSvgIcons = [
  <CheckCircleIcon key="mc1" width={24} height={24} />,
  <MessageSquareIcon key="mc2" width={24} height={24} />,
  <HandshakeIcon key="mc3" width={24} height={24} />,
  <CloudServerIcon key="mc4" width={24} height={24} />,
  <DatabaseShieldIcon key="mc5" width={24} height={24} />,
  <DoorOpenIcon key="mc6" width={24} height={24} />,
];

// Bento section icons and data
const bentoColors = ["blue", "purple", "rose", "emerald"] as const;
const bentoBadges = ["AUTO-CONFIGURED", "BRANCH DOMAINS", "BRANCH PRIVACY", "ON-DEMAND METRICS"];
const bentoIcons = [
  <GlobeIcon key="b1" width={28} height={28} />,
  <BuildingIcon key="b2" width={28} height={28} />,
  <LockIcon key="b3" width={28} height={28} />,
  <BarChartIcon key="b4" width={28} height={28} />,
];

// Bento footer renderers
const bentoFooters = [
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#2563EB" }} />
        MX, SPF &amp; DKIM configured ✓
      </span>
      <span style={{ background: "rgba(59,130,246,0.1)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>Auto-Configured</span>
    </>
  ),
  (
    <>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>ny.company.com</span>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>sf.company.com</span>
      <span style={{ fontFamily: "monospace", fontWeight: 600, background: "#fff", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(147,51,234,0.2)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)", fontSize: "12px" }}>london.company.com</span>
    </>
  ),
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        Strict Branch Isolation
      </span>
      <span style={{ background: "rgba(244,63,94,0.08)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>Zero Data Leakage</span>
    </>
  ),
  (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
        Manual Fetch Sync
      </span>
      <span style={{ background: "rgba(16,185,129,0.08)", padding: "4px 12px", borderRadius: "8px", fontFamily: "monospace", fontWeight: 600, fontSize: "12px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>On-Demand Metrics</span>
    </>
  ),
];

// Vanilla Animate-On-Scroll Component (Zero external packages)
const RevealOnScroll: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, className, delay = 0, style }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Interactive Card Helpers that forward hover states to icons
const AiCardItem: React.FC<{
  cardClass: string;
  iconClass: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  titleClass: string;
  descClass: string;
}> = ({ cardClass, iconClass, icon, title, description, titleClass, descClass }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const renderedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, { isHovered })
    : icon;
  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={iconClass}>{renderedIcon}</div>
      <h4 className={titleClass}>{title}</h4>
      <p className={descClass}>{description}</p>
    </div>
  );
};

const MigrationCardItem: React.FC<{
  cardClass: string;
  iconClass: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  titleClass: string;
  descClass: string;
}> = ({ cardClass, iconClass, icon, title, description, titleClass, descClass }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const renderedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, { isHovered })
    : icon;
  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={iconClass}>{renderedIcon}</div>
      <h3 className={titleClass}>{title}</h3>
      <p className={descClass}>{description}</p>
    </div>
  );
};

const PersonaCardItem: React.FC<{
  card: any;
  isSky: boolean;
  classes: any;
}> = ({ card, isSky, classes }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={classes.personaCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={clsx(classes.personaGlow, isSky ? classes.personaGlowSky : classes.personaGlowBlue)} />
      <div>
        {/* Role Badge */}
        <div className={classes.roleBadgeRow}>
          <div className={clsx(classes.roleIcon, isSky ? classes.roleIconSky : classes.roleIconBlue)}>
            {isSky ? (
              <SmartphoneIcon isHovered={isHovered} width={20} height={20} />
            ) : (
              <TrendingUpIcon isHovered={isHovered} width={20} height={20} />
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
            <SvgApple width={16} height={16} />
            iOS App
          </button>
          <button className={classes.androidBtn}>
            <SvgAndroid width={16} height={16} />
            Android App
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const router = useRouter();
  const classes = usestyles();

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: StatusModalType;
    badge?: string;
    title: string;
    message: React.ReactNode;
    primaryBtnText?: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscribeEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = subscribeEmail.trim();
    if (!trimmedEmail) {
      setModalState({
        isOpen: true,
        type: "warning",
        badge: "EMAIL REQUIRED",
        title: "Email Address Required",
        message: "Email address is mandatory. Please enter your email to subscribe.",
        primaryBtnText: "Got It",
      });
      return;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setModalState({
        isOpen: true,
        type: "warning",
        badge: "INVALID EMAIL",
        title: "Invalid Email Address",
        message: "Please enter a valid email address (e.g. name@company.com).",
        primaryBtnText: "Got It",
      });
      return;
    }

    setIsSubscribing(true);

    try {
      // Step 1: Check if email is already subscribed
      const checkResponse = await fetch(
        `https://weblings-migration-dev.weblingsdev.workers.dev/V1/subscribe/checkEmail?email=${encodeURIComponent(trimmedEmail)}`
      );

      if (!checkResponse.ok) {
        let errorText = "Unable to verify email status right now. Please try again.";
        try {
          const checkErr = await checkResponse.json();
          if (checkErr?.message) {
            errorText = checkErr.message;
          } else if (checkErr?.error) {
            errorText = checkErr.error;
          }
        } catch { }
        setModalState({
          isOpen: true,
          type: "error",
          badge: "NOTICE",
          title: "Subscription Notice",
          message: errorText,
          primaryBtnText: "Close",
        });
        return;
      }

      const checkData = await checkResponse.json();

      // If email is already subscribed, display message and do not call the POST API
      if (checkData?.isSubscribed || checkData?.available === false) {
        setModalState({
          isOpen: true,
          type: "warning",
          badge: "FAVOURITE LIST",
          title: "You're Already in Our Favourite List!",
          message:
            checkData?.message ||
            "This email is already part of our favorite community! You're all set to receive upcoming updates.",
          primaryBtnText: "Understood",
        });
        return;
      }

      // Step 2: Email is available -> directly call the existing POST subscribe API
      const response = await fetch(
        "https://weblings-migration-dev.weblingsdev.workers.dev/V1/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: trimmedEmail }),
        }
      );

      if (!response.ok) {
        let errorText = "Unable to subscribe right now. Please try again or reach out directly to founders@weblings.com.";
        try {
          const resData = await response.json();
          if (resData?.message) {
            errorText = resData.message;
          } else if (resData?.error) {
            errorText = resData.error;
          }
        } catch {
          if (response.status === 404) {
            errorText = "Subscription endpoint is temporarily unavailable (404). Please try again later.";
          } else {
            errorText = `Subscription failed (${response.status}). Please try again or contact founders@weblings.com.`;
          }
        }
        setModalState({
          isOpen: true,
          type: "error",
          badge: "NOTICE",
          title: "Subscription Notice",
          message: errorText,
          primaryBtnText: "Close",
        });
      } else {
        const savedEmail = trimmedEmail;
        setSubscribeEmail("");
        setModalState({
          isOpen: true,
          type: "success",
          badge: "SUBSCRIBED",
          title: "Welcome to Weblings!",
          message: (
            <>
              Thank you for subscribing with <strong>{savedEmail}</strong>. We'll send you our latest updates, privacy tools, and product announcements. We respect your privacy — we will never share your email address, and we won't send you spam.
            </>
          ),
          primaryBtnText: "Great, thanks!",
        });
      }
    } catch (err: any) {
      setModalState({
        isOpen: true,
        type: "error",
        badge: "NOTICE",
        title: "Subscription Notice",
        message:
          err?.message || "Network error. Please check your connection and try again.",
        primaryBtnText: "Close",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

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
                onClick={() => router.push(data.headSection.action.link || "/agreement")}
              >
                {data.headSection.action.label}
              </Button>
              {/* <button
                className={classes.heroSecondaryBtn}
                onClick={() => router.push(data.headSection.secondaryAction?.link || "/")}
              >
                {data.headSection.secondaryAction?.label || "Watch Demo"}
              </button> */}
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

      {/* Tool Ticker / Fragmented Tool Stack Replacement Section */}
      <section className={classes.tickerSection} aria-label="Tool stack replacement">
        <div className={classes.tickerCard}>
          {/* Subtle top gradient accent */}
          <div className={classes.tickerTopAccent} />

          <div className={classes.tickerInner}>
            {/* Eyebrow Tag */}
            <div className={classes.tickerEyebrow}>
              <span className={classes.tickerEyebrowDot} />
              <span className={classes.tickerEyebrowText}>
                {data.ticker.title}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className={classes.tickerHeadline}>
              {data.ticker.headline}{" "}
              <span className={classes.tickerGradientText}>
                {data.ticker.headlineHighlight}
              </span>
              .
            </h2>

            {/* Minimal Subtitle */}
            <p className={classes.tickerSubtitle}>
              {data.ticker.description}
            </p>

            {/* Conversion Strip: Replaced Tools -> Weblings Solution Badge */}
            <div className={classes.tickerStrip}>
              {/* Row of Legacy Replaced Tools */}
              <div className={classes.tickerToolsRow}>
                {data.ticker.tools.map((tool: string, index: number) => (
                  <div key={index} className={classes.tickerToolBadge}>
                    <span className={classes.tickerToolDot} />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>

              {/* Convergence Connector Line with Arrow */}
              <div className={classes.tickerConvergence}>
                <div className={classes.tickerConvergenceLineLeft} />
                <span className={classes.tickerConvergenceText}>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={classes.tickerConvergenceArrow}
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  converged into
                </span>
                <div className={classes.tickerConvergenceLineRight} />
              </div>

              {/* Weblings Hero Solution Badge */}
              <div className={classes.weblingsBadgeWrapper}>
                <div className={classes.weblingsBadgeGlow} />
                <div className={classes.weblingsBadge}>
                  <SvgWeblingslogo
                    width={26}
                    height={17}
                    viewBox="0 0 34 22"
                    className={classes.weblingsBadgeIcon}
                  />
                  <span className={classes.weblingsBadgeTitle}>Weblings</span>
                  <span className={classes.weblingsBadgeDivider} />
                  <span className={classes.weblingsBadgeTag}>All-in-one suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Mockup Section */}
      <div className={classes.dashboardMockupContainer}>
        <div className={classes.dashboardMockupGlow} />
        <WorkspaceDashboardMockup variant="dashboard" />
      </div>

      {/* AI Dual-Engine Section */}
      <section className={classes.aiSectionWrapper}>
        {/* Animated Living Ambient Canvas */}
        <div className={classes.aiAmbientCanvas}>
          <div className={classes.aiGridPattern} />
          <div className={classes.aiOrbPurple} />
          <div className={classes.aiOrbCyan} />
          <div className={classes.aiOrbCenter} />
          <div className={classes.aiBeamTrack}>
            <div className={classes.aiBeamLight} />
          </div>
          <div className={classes.aiBeamTrackBottom}>
            <div className={classes.aiBeamLightBottom} />
          </div>
          {/* Subtle pulsating precision tech nodes */}
          <span className={clsx(classes.aiNodeDot, classes.aiNodePurple1)} />
          <span className={clsx(classes.aiNodeDot, classes.aiNodePurple2)} />
          <span className={clsx(classes.aiNodeDot, classes.aiNodeCyan1)} />
          <span className={clsx(classes.aiNodeDot, classes.aiNodeCyan2)} />
        </div>

        <div className={classes.aiSection}>
          <RevealOnScroll>
            <div className={classes.aiHeader}>
              <div className={classes.aiBadge}>
                <span className={classes.aiBadgeDotPurple}></span>
                <span className={classes.aiBadgeDotCyan}></span>
                {data.aiEngine.badge}
              </div>
              <h2 className={classes.aiTitle}>{data.aiEngine.title}</h2>
              <p className={classes.aiDesc}>{data.aiEngine.description}</p>
            </div>
          </RevealOnScroll>

          {/* Scope Defense */}
          <div className={classes.aiFlowBlock}>
            <RevealOnScroll delay={80}>
              <div className={clsx(classes.aiFlowHeader, classes.purpleFlowText)}>
                <span className={classes.flowBadgePurple}>{data.aiEngine.scopeDefense.badge}</span>
                <span>{data.aiEngine.scopeDefense.title}</span>
              </div>
            </RevealOnScroll>
            <div className={classes.aiGrid}>
              {data.aiEngine.scopeDefense.steps.map((step: any, index: number) => (
                <RevealOnScroll key={index} delay={120 + index * 100}>
                  <AiCardItem
                    cardClass={classes.aiCardPurple}
                    iconClass={clsx(classes.aiCardIcon, classes.aiCardIconPurple)}
                    icon={aiIcons[step.id] || step.icon}
                    title={step.title}
                    description={step.description}
                    titleClass={classes.aiCardTitle}
                    descClass={classes.aiCardDesc}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Interlock Bridge Divider */}
          <RevealOnScroll delay={60}>
            <div className={classes.aiFlowDivider}>
              <span className={classes.aiDividerBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 17 13" />
                  <polyline points="7 6 12 11 17 6" />
                </svg>
                Engine Interlock Active
              </span>
            </div>
          </RevealOnScroll>

          {/* Code Adherence */}
          <div className={classes.aiFlowBlock}>
            <RevealOnScroll delay={80}>
              <div className={clsx(classes.aiFlowHeader, classes.cyanFlowText)}>
                <span className={classes.flowBadgeCyan}>{data.aiEngine.codeAdherence.badge}</span>
                <span>{data.aiEngine.codeAdherence.title}</span>
              </div>
            </RevealOnScroll>
            <div className={classes.aiGrid}>
              {data.aiEngine.codeAdherence.steps.map((step: any, index: number) => (
                <RevealOnScroll key={index} delay={120 + index * 100}>
                  <AiCardItem
                    cardClass={classes.aiCardCyan}
                    iconClass={clsx(classes.aiCardIcon, classes.aiCardIconCyan)}
                    icon={aiIcons[step.id] || step.icon}
                    title={step.title}
                    description={step.description}
                    titleClass={classes.aiCardTitle}
                    descClass={classes.aiCardDesc}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            {data.mobileApps.cards.map((card: any, index: number) => (
              <PersonaCardItem
                key={index}
                card={card}
                isSky={index === 0}
                classes={classes}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MULTI-LOCATION BENTO SECTION — "Built for Growing Businesses"
          4-quadrant color-coded bento grid
          ═══════════════════════════════════════════════════════ */}
      <section className={classes.bentoSection}>
        <div className={classes.bentoAmbientCanvas}>
          <div className={classes.bentoDotPattern} />
          <div className={classes.bentoOrbIndigo} />
          <div className={classes.bentoOrbEmerald} />
        </div>
        <div className={classes.bentoInner}>
          {/* Section Header */}
          <RevealOnScroll>
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
          </RevealOnScroll>

          {/* Bento Grid */}
          <div className={classes.bentoGrid}>
            {data.features.featureBox.map((feature: any, index: number) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <BentoCard
                  colorScheme={bentoColors[index]}
                  icon={bentoIcons[index]}
                  badge={bentoBadges[index]}
                  title={feature.titleSubtext}
                  description={feature.titleSmallSubText}
                  footer={bentoFooters[index]}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ENTERPRISE-GRADE SECURITY & COMPLIANCE SECTION
          4-card dark grid with animated icons matching Image 1
          ═══════════════════════════════════════════════════════ */}
      <SecurityComplianceSection />

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
                <MigrationCardItem
                  key={index}
                  cardClass={clsx(
                    classes.migrationCard,
                    classes[colorMap.card as keyof typeof classes]
                  )}
                  iconClass={clsx(
                    classes.migrationCardIcon,
                    classes[colorMap.icon as keyof typeof classes]
                  )}
                  icon={migrationSvgIcons[index]}
                  title={point.title}
                  description={point.description}
                  titleClass={classes.migrationCardTitle}
                  descClass={classes.migrationCardDesc}
                />
              );
            })}
          </div>

          {/* Floating CTA with Social Proof Avatar Stack */}
          <div className={classes.migrationCTA}>
            <div className={classes.ctaGlowOverlay} />
            <div className={classes.ctaContent}>
              <button
                className={classes.migrationBtn}
                onClick={() => router.push('/agreement')}
              >
                {data.migration.action.label}
              </button>

              {/* Social Proof Avatar Stack & Text (Matching Image 2) */}
              <div className={classes.socialProofRow}>
                <div className={classes.socialAvatarStack}>
                  <div className={classes.socialAvatar}>JD</div>
                  <div className={classes.socialAvatar}>AS</div>
                  <div className={classes.socialAvatar}>MJ</div>
                  <div className={classes.socialAvatarPlus}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
                <span className={classes.socialProofText}>
                  Join our team in the early access beta.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Subscribe */}
      <div className={classes.StorageContainer}>
        <div className={classes.StorageWrapper}>
          <div className={classes.StorageContentLeft}>
            <div className={classes.Subscribe}>
              <div className={classes.NewsLetterImg}>
                <SvgNewsletter />
              </div>
              <Typography variant="HS">{data.subscribe.title}</Typography>
              <div className={classes.Description}>
                {data.subscribe.description}
              </div>
            </div>
            <form noValidate onSubmit={handleSubscribe} className={classes.subscribeForm}>
              <div className={classes.InputDiv}>
                <input
                  className={classes.InputText}
                  placeholder={data.subscribe.inputPlaceholder}
                  type="email"
                  required
                  value={subscribeEmail}
                  onChange={handleEmailChange}
                  disabled={isSubscribing}
                />
                <Button
                  element="button"
                  brand
                  disabled={isSubscribing}
                  type="submit"
                >
                  {isSubscribing ? "Subscribing..." : data.subscribe.action.label}
                </Button>
              </div>
            </form>
          </div>
          <div className={classes.StorageGraphicRight}>
            <StorageGraphic />
          </div>
        </div>
      </div>

      {/* Centered Status Popup Modal */}
      <StatusModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        badge={modalState.badge}
        title={modalState.title}
        message={modalState.message}
        primaryBtnText={modalState.primaryBtnText}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default Products;
