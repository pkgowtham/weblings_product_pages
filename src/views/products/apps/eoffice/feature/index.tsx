'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStyles } from "./style";

import WorkspaceDashboardMockup from "../../../../../components/dashboardMockup";
import PhoneMockup from "../../../../../components/phoneMockup";
import AppStoreButtons from "../../../../../components/appStoreButtons";
import { EOfficeOrgPulseAnimation } from "../../../../../components/ambientAnimations";
import {
  EOfficeIcon,
  ShieldLockIcon,
  InstantIntegrationIcon,
  ImmutableHistoryIcon,
} from "../../../../../assets/icons_component";

/* ─────────────────────────────────────────────────────────────
   ANIMATED VECTOR SVG ICONS FOR CARDS
   ───────────────────────────────────────────────────────────── */

// 1. Lightning Velocity Icon (5-Minute Section)
const SvgSpeedBolt: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 28,
  height = 28,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.15) rotate(-6deg)" : "scale(1)",
    }}
  >
    <defs>
      <linearGradient id="speedBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0072C4" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill="url(#speedBoltGrad)"
      stroke="#0072C4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="10" stroke="#0072C4" strokeWidth="1" strokeDasharray="3 3" opacity={isHovered ? 0.8 : 0.3}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="6s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// 2. Smart Attendance Clock with Concentric Radar Pulse
const SvgSmartAttendance: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 26,
  height = 26,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.12)" : "scale(1)",
    }}
  >
    <circle cx="12" cy="12" r="9" stroke="#0072C4" strokeWidth={2} />
    {/* Rotating Clock Hands */}
    <line x1="12" y1="12" x2="12" y2="7" stroke="#0072C4" strokeWidth={2} strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur={isHovered ? "3s" : "12s"}
        repeatCount="indefinite"
      />
    </line>
    <line x1="12" y1="12" x2="15.5" y2="12" stroke="#10B981" strokeWidth={2} strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur={isHovered ? "1.5s" : "6s"}
        repeatCount="indefinite"
      />
    </line>
    <circle cx="12" cy="12" r="2" fill="#0072C4" />
    {/* Pulsing ring */}
    <circle cx="12" cy="12" r="10.5" stroke="#10B981" strokeWidth={1} opacity={0.6}>
      <animate attributeName="r" values="9;12;9" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 3. Leave Management / Vacation Tier Icon
const SvgLeaveHierarchy: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 26,
  height = 26,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.12)" : "scale(1)",
    }}
  >
    <rect x="3" y="4" width="18" height="17" rx="3" stroke="#0072C4" strokeWidth={2} />
    <line x1="16" y1="2" x2="16" y2="5" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" />
    <line x1="8" y1="2" x2="8" y2="5" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="#E2E8F0" strokeWidth={1.5} />
    {/* Dynamic Approved Days */}
    <rect x="6" y="12" width="4" height="4" rx="1" fill="#10B981" opacity={0.9} />
    <rect x="14" y="12" width="4" height="4" rx="1" fill="#0072C4" opacity={isHovered ? 0.9 : 0.4} />
    <rect x="10" y="12" width="4" height="4" rx="1" fill="#38BDF8" opacity={0.8} />
    {/* Vacation Sun Arc */}
    <circle cx="19" cy="5" r="2.5" fill="#F59E0B">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 4. Manager Approval Silhouette with Orbiting Badge
const SvgManagerApproval: React.FC<{ width?: number; height?: number }> = ({
  width = 20,
  height = 20,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" stroke="#0072C4" strokeWidth={2} />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" />
    <circle cx="18" cy="16" r="3.5" fill="#10B981" />
    <polyline points="16.5,16 17.5,17 19.5,15" stroke="#FFFFFF" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 5. Warning Action Required Badge
const SvgAlertWarning: React.FC<{ width?: number; height?: number }> = ({
  width = 12,
  height = 12,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      stroke="#E11D48"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="12" y1="9" x2="12" y2="13" stroke="#E11D48" strokeWidth={2.2} strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="#E11D48" />
  </svg>
);

// 6. Laptop Asset with Animated Scanline
const SvgLaptopAudit: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 26,
  height = 26,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.12)" : "scale(1)",
    }}
  >
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="#0072C4" strokeWidth={2} />
    <line x1="1" y1="19" x2="23" y2="19" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" />
    <line x1="10" y1="19" x2="14" y2="19" stroke="#38BDF8" strokeWidth={2} strokeLinecap="round" />
    {/* Inner Screen Scanline */}
    <line x1="5" y1="9" x2="19" y2="9" stroke="#10B981" strokeWidth={1} strokeDasharray="2 2">
      <animate attributeName="y1" values="6;14;6" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y2" values="6;14;6" dur="2s" repeatCount="indefinite" />
    </line>
  </svg>
);

// 7. Audit Camera with Focus Ring & Shutter Flash
const SvgAuditCamera: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 28,
  height = 28,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.15)" : "scale(1)",
    }}
  >
    <path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      stroke="#0072C4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="4" stroke="#0072C4" strokeWidth={2} />
    <circle cx="12" cy="13" r="2" fill={isHovered ? "#10B981" : "#0072C4"} />
    {/* Focus Ring */}
    <circle cx="12" cy="13" r="6" stroke="#38BDF8" strokeWidth={1} strokeDasharray="3 3">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 13"
        to="360 12 13"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// 8. Team Leave Visibility Radar Icon
const SvgTeamVisibility: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 24,
  height = 24,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.15)" : "scale(1)",
    }}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#0072C4" strokeWidth={2} />
    <circle cx="12" cy="12" r="3" stroke="#0072C4" strokeWidth={2} fill={isHovered ? "#0072C4" : "none"} />
    <circle cx="12" cy="12" r="6" stroke="#38BDF8" strokeWidth={1} strokeDasharray="2 2" opacity={0.6}>
      <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 9. Announcements & Praise Celebratory Icon
const SvgPraiseAnnounce: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 24,
  height = 24,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1)",
    }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill={isHovered ? "rgba(0, 114, 196, 0.15)" : "none"} />
    {/* Floating celebratory particles */}
    <circle cx="4" cy="5" r="1.5" fill="#F59E0B">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="5" r="1.5" fill="#10B981">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 10. Profile Autonomy & Digital ID Card Icon
const SvgProfileAutonomy: React.FC<{ width?: number; height?: number; isHovered?: boolean }> = ({
  width = 24,
  height = 24,
  isHovered = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: isHovered ? "scale(1.15)" : "scale(1)",
    }}
  >
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0072C4" strokeWidth={2} />
    <circle cx="8" cy="9" r="2.5" stroke="#0072C4" strokeWidth={1.8} />
    <line x1="14" y1="8" x2="18" y2="8" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" />
    <line x1="14" y1="12" x2="18" y2="12" stroke="#64748B" strokeWidth={1.8} strokeLinecap="round" />
    <path d="M5 17c0-1.8 1.5-3 3-3s3 1.2 3 3" stroke="#0072C4" strokeWidth={1.8} strokeLinecap="round" />
    {/* Verification Badge */}
    <circle cx="16.5" cy="16.5" r="2.5" fill="#10B981" />
  </svg>
);

// 10. Granular Logistics (Shift timings, hybrid/remote, working days)
const SvgLogistics: React.FC<{ width?: number; height?: number }> = ({
  width = 22,
  height = 22,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <circle cx="4" cy="12" r="2.5" fill="#0072C4" />
    <circle cx="12" cy="10" r="2.5" fill="#38BDF8" />
    <circle cx="20" cy="14" r="2.5" fill="#0072C4" />
  </svg>
);

// 11. Tailored Leave Plans (Vacation, sick, casual balances)
const SvgLeavePlan: React.FC<{ width?: number; height?: number }> = ({
  width = 22,
  height = 22,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="#CBD5E1" strokeWidth={1.5} />
    <path d="M8 15l2.5 2.5 5.5-5.5" stroke="#10B981" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 12. Frictionless Offboarding (Checklist, asset returns, handover)
const SvgOffboarding: React.FC<{ width?: number; height?: number }> = ({
  width = 22,
  height = 22,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="rgba(0, 114, 196, 0.12)" stroke="#0072C4" strokeWidth={1.8} />
    <path d="M9 14l2.5 2.5 5-5" stroke="#10B981" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="9" y1="9" x2="15" y2="9" stroke="#38BDF8" strokeWidth={1.8} />
  </svg>
);

// 13. Luxury 4-Point Sparkle Star
const SvgSparkleStar: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 18,
  color = "#0072C4",
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color, display: "inline-block", verticalAlign: "middle", ...style }}
  >
    <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   VANILLA REVEAL ON SCROLL COMPONENT
   ───────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: EOFFICE FEATURE PAGE
   ───────────────────────────────────────────────────────────── */
const EofficeFeaturePage: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  // Hover states for interactive card SVGs
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredEdiCard, setHoveredEdiCard] = useState<string | null>(null);

  return (
    <div className={classes.page}>
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION WITH WEB APP MOCKUP
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.hero}>
        <div className={classes.heroGlow} />
        <div className={classes.heroContent}>
          <div className={classes.badge}>
            <EOfficeIcon width={16} height={16} />
            <span>Weblings E-Office</span>
          </div>
          <h1 className={classes.title}>
            The HRMS that actually does the work.
            <span className={classes.titleAccent}>Zero paperwork. Zero friction.</span>
          </h1>
          <p className={classes.heroDescription}>
            Handle shift timings, track hybrid attendance, audit physical assets, and build a great company culture—all from one unified dashboard that does the heavy lifting for you.
          </p>
          <div className={classes.heroBtnRow}>
            <button
              className={classes.primaryButton}
              onClick={() => router.push('/agreement')}
            >
              Deploy E-Office Now
            </button>
          </div>
        </div>

        {/* Interactive High-Fidelity Web App Mockup */}
        <div className={classes.mockupWrapper}>
          <WorkspaceDashboardMockup variant="eoffice" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: ONE-CLICK ONBOARDING (with office ambient animations)
          ───────────────────────────────────────────────────────────── */}
      <section className={`${classes.sectionWrapper} ${classes.sectionWrapperAnimated}`} style={{ position: "relative" }}>
        {/* Ambient Background in Weblings Blue */}
        <div className={classes.ambientCanvas}>
          <div className={classes.ambientBlobBlue} />
          <div className={classes.ambientBlobSky} />
          <div className={classes.ambientScanTrack}>
            <div className={classes.ambientScanLight} />
          </div>
        </div>

        {/* Concrete Office Ambient Animations (Top-Right: Shift Terminal | Bottom-Left: Approval Pipeline) */}
        <EOfficeOrgPulseAnimation position="topRight" />
        <EOfficeOrgPulseAnimation position="bottomLeft" />

        <div className={classes.sectionInner}>
          <div className={classes.splitGrid}>
            {/* Left Column: Narrative */}
            <RevealOnScroll>
              <div>
                <span className={classes.kicker}>The Ultimate God-Mode</span>
                <h2 className={classes.sectionTitle}>
                  One-click onboarding.{" "}
                  <span style={{ color: "#0072C4" }}>Zero IT headaches.</span>
                </h2>
                <p className={classes.sectionDescription}>
                  When you hire someone, you don&apos;t just add a name to a spreadsheet. E-Office lets management configure every single variable of an employee&apos;s professional life from one screen.
                </p>
                <div className={classes.points}>
                  {/* Point 1: Granular Logistics */}
                  <div className={classes.pointCard}>
                    <div className={classes.pointIconWrap}>
                      <SvgLogistics />
                    </div>
                    <div className={classes.pointContent}>
                      <div className={classes.pointHeader}>
                        <h3 className={classes.pointTitle}>Granular Logistics</h3>
                        <span className={classes.pointBadge}>STEP 01</span>
                      </div>
                      <p className={classes.pointText}>
                        Set custom shift timings, flag them as hybrid or remote, define their exact working days, attach specific regional holiday calendars, and lock in their salary package.
                      </p>
                    </div>
                  </div>

                  {/* Point 2: Tailored Leave Plans */}
                  <div className={classes.pointCard}>
                    <div className={classes.pointIconWrap}>
                      <SvgLeavePlan />
                    </div>
                    <div className={classes.pointContent}>
                      <div className={classes.pointHeader}>
                        <h3 className={classes.pointTitle}>Tailored Leave Plans</h3>
                        <span className={classes.pointBadge}>STEP 02</span>
                      </div>
                      <p className={classes.pointText}>
                        Set up vacation, sick, and casual leave balances in seconds. Adjust available days based on an employee&apos;s specific role, seniority, or contract type—no complex formulas or manual tracking required.
                      </p>
                    </div>
                  </div>

                  {/* Point 3: Frictionless Offboarding */}
                  <div className={classes.pointCard}>
                    <div className={classes.pointIconWrap}>
                      <SvgOffboarding />
                    </div>
                    <div className={classes.pointContent}>
                      <div className={classes.pointHeader}>
                        <h3 className={classes.pointTitle}>Frictionless Offboarding</h3>
                        <span className={classes.pointBadge}>STEP 03</span>
                      </div>
                      <p className={classes.pointText}>
                        When it&apos;s time to part ways, one click smooths out the whole process. Employees trigger their resignation, instantly kicking off a clean checklist for asset returns, handover docs, and final clearances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Column: Employee Configuration Console */}
            <RevealOnScroll delay={160}>
              <div className={classes.configCard}>
                <div className={classes.configCardGlow} />
                <div className={classes.configCardHeader}>
                  <span>Employee Configuration Console</span>
                  <span style={{ fontSize: "0.68rem", color: "#0072C4", fontWeight: 700 }}>v2.4 Active</span>
                </div>
                <div className={classes.configGrid}>
                  <div className={classes.configField}>
                    <span className={classes.configLabel}>Custom Email ID</span>
                    <div className={classes.configValue}>alex@ny-branch.com</div>
                  </div>
                  <div className={classes.configField}>
                    <span className={classes.configLabel}>Shift Timing</span>
                    <div className={classes.configValue}>10:00 AM – 07:00 PM (EST)</div>
                  </div>
                </div>
                <div className={classes.configField}>
                  <span className={classes.configLabel}>Working Model &amp; Days</span>
                  <div className={classes.configTagRow} style={{ marginTop: 6 }}>
                    <span className={classes.configTagBlue}>Hybrid (3 Days Office)</span>
                    <span className={classes.configTagGray}>Mon – Fri</span>
                  </div>
                </div>
                <div className={classes.configField} style={{ marginTop: 14 }}>
                  <span className={classes.configLabel}>Attached Leave Plan</span>
                  <div className={classes.configLeavePlan}>
                    <span className={classes.configLeavePlanName}>Tier 2: Senior Engineer Plan</span>
                    <span className={classes.configLeavePlanCount}>26 Total Leaves / Yr</span>
                  </div>
                </div>
                <button className={classes.configProvisionBtn}>
                  Provision Employee &amp; Generate Apps
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* 5-Minute Comparison Block with Animated Speed Bolt SVG */}
          <RevealOnScroll delay={80}>
            <div
              className={classes.fiveMinBox}
              onMouseEnter={() => setHoveredCard('fiveMin')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={classes.fiveMinBlobLeft} />
              <div className={classes.fiveMinIconBox}>
                <SvgSpeedBolt isHovered={hoveredCard === 'fiveMin'} />
              </div>
              <h3 className={classes.fiveMinTitle}>5 Minutes. Not 5 Days.</h3>
              <div className={classes.fiveMinGrid}>
                <div className={classes.fiveMinCardOld}>
                  <div className={classes.fiveMinCardOldLabel}>The Old Way</div>
                  <p className={classes.fiveMinCardText}>
                    A new hire starts, and their first week is a frustrating scavenger hunt for login credentials. They need an IT ticket for their email, a magical invite link for team chat, and manual admin approval just to see the project boards. An exhausting waste of time.
                  </p>
                </div>
                <div className={classes.fiveMinCardNew}>
                  {/* Decorative Stars around the card */}
                  <span className={classes.starTopRight}>
                    <SvgSparkleStar size={20} color="#0072C4" />
                  </span>
                  <span className={classes.starTopLeft}>
                    <SvgSparkleStar size={13} color="#F59E0B" />
                  </span>
                  <span className={classes.starBottomRight}>
                    <SvgSparkleStar size={15} color="#38BDF8" />
                  </span>
                  <span className={classes.starBottomLeft}>
                    <SvgSparkleStar size={11} color="#0072C4" />
                  </span>

                  {/* Inner ambient glow */}
                  <div className={classes.fiveMinCardGlow} />

                  {/* Label */}
                  <div className={classes.fiveMinCardNewLabel}>
                    <span className={classes.newWayDot} />
                    The Weblings Way
                  </div>

                  <p className={classes.fiveMinCardTextBright}>
                    It takes 5 minutes. The moment HR clicks &quot;Create Employee,&quot; the system auto-generates their custom business email, drops them into the correct company chat channels, assigns their project boards, and grants unified calendar access. Zero waiting. Zero IT support tickets.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: ATTENDANCE & LEAVES (Intelligent Tracking)
          ───────────────────────────────────────────────────────────── */}
      <section className={`${classes.sectionWrapper} ${classes.sectionWrapperGray}`}>
        <div className={classes.sectionInner}>
          <RevealOnScroll>
            <div className={classes.sectionHeaderCenter}>
              <span className={classes.kickerGreen}>Intelligent Tracking</span>
              <h2 className={classes.sectionTitle}>
                Attendance and Leaves that calculate themselves.
              </h2>
              <p className={classes.sectionDescription}>
                Whether your team is logging in via physical office fingerprint scanners or clicking a button remotely, the system handles the math automatically based on their specific holiday calendars and weekends.
              </p>
            </div>
          </RevealOnScroll>

          <div className={classes.trackingGrid}>
            {/* Card 1: Smart Attendance Engine */}
            <RevealOnScroll delay={100}>
              <div
                className={`${classes.trackingCard} ${classes.trackingCardTopBlue}`}
                onMouseEnter={() => setHoveredCard('attendance')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.trackingCardIconBox}>
                  <SvgSmartAttendance isHovered={hoveredCard === 'attendance'} />
                </div>
                <h3 className={classes.trackingCardTitle}>Smart Attendance Engine</h3>
                <p className={classes.trackingCardText}>
                  Employees get a crystal-clear dashboard showing exactly when they&apos;re on the clock, when a regional holiday is coming up, or if they have a long weekend. The system uses their specific shift rules to log remote or office attendance, track total working hours, and instantly flag late arrivals—giving management perfect analytics without anyone lifting a finger.
                </p>
                <div className={classes.pillRow}>
                  <span className={classes.pillGreen}>Fingerprint Sync</span>
                  <span className={classes.pillBlue}>Remote Web Login</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2: Transparent Leave Hierarchy */}
            <RevealOnScroll delay={220}>
              <div
                className={`${classes.trackingCard} ${classes.trackingCardTopGreen}`}
                onMouseEnter={() => setHoveredCard('leaves')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.trackingCardIconBox}>
                  <SvgLeaveHierarchy isHovered={hoveredCard === 'leaves'} />
                </div>
                <h3 className={classes.trackingCardTitle}>Transparent Leave Hierarchy</h3>
                <p className={classes.trackingCardText}>
                  Employees see exactly how many Casual, Sick, or Vacation leaves they have remaining at a glance. They request time off directly in the portal. The request instantly notifies their specific reporting manager via the built-in hierarchy for one-click approval or rejection.
                </p>
                <div className={classes.leaveApprovalRow}>
                  <div className={classes.leaveApprovalLeft}>
                    <SvgManagerApproval />
                    <span className={classes.leaveApprovalText}>Manager Approval Auto-Route</span>
                  </div>
                  <span className={classes.leaveApprovalBadge}>2 Days Requested</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ASSET TRACKING (Ironclad Accountability)
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.sectionWrapper}>
        <div className={classes.sectionInner}>
          <div className={classes.splitGridReverse}>
            {/* Asset Audit Card */}
            <RevealOnScroll delay={100}>
              <div
                className={classes.auditCard}
                onMouseEnter={() => setHoveredCard('assetAudit')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.auditCardGlow} />
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0F172A", marginBottom: 14 }}>
                  Active Asset Audit Console
                </div>
                <div className={classes.auditInner}>
                  <div className={classes.auditActionRequired}>
                    <SvgAlertWarning />
                    <span>Action Required</span>
                  </div>
                  <div className={classes.auditAssetHeader}>
                    <SvgLaptopAudit isHovered={hoveredCard === 'assetAudit'} />
                    <div>
                      <div className={classes.auditAssetName}>MacBook Pro 16&quot;</div>
                      <div className={classes.auditAssetAssigned}>Assigned to: Alex Johnson · SN: MBP-84920</div>
                    </div>
                  </div>
                  <div className={classes.auditUploadBox}>
                    <div className={classes.auditUploadIconWrap}>
                      <SvgAuditCamera isHovered={hoveredCard === 'assetAudit'} />
                    </div>
                    <div className={classes.auditUploadTitle}>Random Audit Triggered by HR</div>
                    <div className={classes.auditUploadSub}>
                      Please upload a photo showing the device and serial number on the back.
                    </div>
                    <button className={classes.auditUploadBtn}>Upload Photo Proof</button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Narrative */}
            <RevealOnScroll delay={220}>
              <div>
                <span className={classes.kickerRose}>Ironclad Accountability</span>
                <h2 className={classes.sectionTitle}>
                  Asset tracking with actual teeth.
                </h2>
                <p className={classes.sectionDescription}>
                  Stop losing expensive hardware when remote employees leave. Every single asset is categorized, serialized, and strictly accounted for.
                </p>
                <p className={classes.sectionDescription}>
                  Need to verify an employee still has the $3,000 laptop you sent them? Management can trigger a{" "}
                  <strong style={{ color: "#0072C4" }}>Random Audit Request</strong> at any time. The employee receives a notification requiring them to instantly upload a photo of the device and its serial number. Seamless, frictionless, and completely accountable.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: COHESIVE CULTURE (Animated SVG Cards)
          ───────────────────────────────────────────────────────────── */}
      <section className={`${classes.sectionWrapper} ${classes.sectionWrapperGray}`}>
        <div className={classes.sectionInner}>
          <RevealOnScroll>
            <div className={classes.sectionHeaderCenter}>
              <span className={classes.kicker}>Unified Workspace Town Square</span>
              <h2 className={classes.sectionTitle}>A Cohesive Culture, Baked Right In.</h2>
              <p className={classes.sectionDescription}>
                Your HR portal shouldn&apos;t just be for clocking in and out. It&apos;s the digital town square that keeps your organization connected and running smoothly.
              </p>
            </div>
          </RevealOnScroll>

          <div className={classes.cultureGrid}>
            {/* Culture Card 1: Team Leave Visibility */}
            <RevealOnScroll delay={80}>
              <div
                className={classes.cultureCard}
                onMouseEnter={() => setHoveredCard('culture-1')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.cultureIconBox}>
                  <SvgTeamVisibility isHovered={hoveredCard === 'culture-1'} />
                </div>
                <h3 className={classes.cultureTitle}>Team Leave Visibility</h3>
                <p className={classes.cultureText}>
                  No more wondering why someone isn&apos;t replying on Slack. Employees can see the approved leave schedules of their immediate team members, ensuring smooth handoffs and project substitution without dropping the ball.
                </p>
              </div>
            </RevealOnScroll>

            {/* Culture Card 2: Announcements & Praise */}
            <RevealOnScroll delay={180}>
              <div
                className={classes.cultureCard}
                onMouseEnter={() => setHoveredCard('culture-2')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.cultureIconBox}>
                  <SvgPraiseAnnounce isHovered={hoveredCard === 'culture-2'} />
                </div>
                <h3 className={classes.cultureTitle}>Announcements &amp; Praise</h3>
                <p className={classes.cultureText}>
                  Post company-wide emergency updates that pin directly to every dashboard. Run polls to gather employee opinions, and let team members publicly praise each other&apos;s good work on the central social feed.
                </p>
              </div>
            </RevealOnScroll>

            {/* Culture Card 3: Profile Autonomy */}
            <RevealOnScroll delay={280}>
              <div
                className={classes.cultureCard}
                onMouseEnter={() => setHoveredCard('culture-3')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={classes.cultureIconBox}>
                  <SvgProfileAutonomy isHovered={hoveredCard === 'culture-3'} />
                </div>
                <h3 className={classes.cultureTitle}>Profile Autonomy</h3>
                <p className={classes.cultureText}>
                  Employees can manage their own personal details, update name spellings, or upload new certification documents. Edits are held in a queue until the concerning HR member clicks &quot;Approve,&quot; keeping your records spotless.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ENTERPRISE DATA INTEGRITY
          ───────────────────────────────────────────────────────────── */}


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: MOBILE SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className={classes.mobileSectionWrapper}>
        <div className={classes.mobileGrid}>
          {/* Left Column: Narrative */}
          <div>
            <RevealOnScroll>
              <div>
                <span className={classes.kicker}>Unified Mobile Experience</span>
                <h2 className={classes.sectionTitle}>
                  Your entire HR department, right in your pocket.
                </h2>
                <p className={classes.sectionDescription}>
                  Clock in remotely, upload asset audit photos, check the company feed, and apply for sick leave while lying in bed. Because E-Office is part of the Weblings app, it sits right next to your Streamline tickets and Team Chat. Everything you need, instantly accessible.
                </p>
                <AppStoreButtons reviewCountText="Over 45,000+ active enterprise reviews" />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className={classes.mobilePhoneWrapper}>
            <PhoneMockup variant="eoffice" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EofficeFeaturePage;