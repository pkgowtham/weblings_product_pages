'use client';
import React from "react";

interface EOfficeOrgPulseAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

/**
 * EOffice Ambient Animation
 * - Top-right: Live Biometric & Shift Attendance Terminal (with pulsing digital clock, fingerprint ring, punch-in verification)
 * - Bottom-left: Automated Leave & Approval Pipeline (with multi-tier request nodes, traveling approval signal, verified check badge)
 * Styled in Weblings Blue (#0072C4) with Emerald (#10B981) highlights.
 */
export const EOfficeOrgPulseAnimation: React.FC<EOfficeOrgPulseAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isBottomLeft ? { bottom: 12, left: 16 } : { top: 12, right: 16 }),
        width: isBottomLeft ? "260px" : "280px",
        height: isBottomLeft ? "130px" : "140px",
        maxWidth: "42vw",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
        userSelect: "none",
        ...style,
      }}
      aria-hidden="true"
    >
      {isBottomLeft ? (
        // ─────────────────────────────────────────────────────────────
        // BOTTOM-LEFT: AUTOMATED LEAVE & APPROVAL PIPELINE
        // ─────────────────────────────────────────────────────────────
        <svg
          viewBox="0 0 260 130"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            <linearGradient id="blPipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0072C4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0072C4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
            </linearGradient>
            <filter id="blGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>

          {/* Ambient Soft Glow */}
          <circle cx="130" cy="65" r="55" fill="rgba(0, 114, 196, 0.06)" filter="url(#blGlow)" />

          {/* Outer Glass Card */}
          <rect
            x="6"
            y="8"
            width="248"
            height="114"
            rx="10"
            fill="rgba(255, 255, 255, 0.92)"
            stroke="rgba(0, 114, 196, 0.18)"
            strokeWidth="1"
          />

          {/* Header Bar */}
          <g>
            <rect x="14" y="14" width="6" height="6" rx="1.5" fill="#0072C4" />
            <text x="26" y="20" fill="#0072C4" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.4">
              LEAVE APPROVAL WORKFLOW
            </text>
            <circle cx="238" cy="18" r="2.5" fill="#10B981">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          <line x1="14" y1="28" x2="246" y2="28" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="0.8" />

          {/* Step 1: Leave Request Box */}
          <rect x="16" y="38" width="64" height="42" rx="6" fill="#F0F7FF" stroke="rgba(0, 114, 196, 0.25)" strokeWidth="0.8" />
          <text x="22" y="49" fill="#0F172A" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
            Casual Leave
          </text>
          <text x="22" y="58" fill="#64748B" fontSize="5.5" fontFamily="sans-serif">
            2 Days Requested
          </text>
          <rect x="22" y="64" width="34" height="10" rx="3" fill="rgba(0, 114, 196, 0.12)" />
          <text x="26" y="71" fill="#0072C4" fontSize="5" fontWeight="600" fontFamily="sans-serif">
            Alex J.
          </text>

          {/* Connecting Animated Path */}
          <path
            d="M 80 59 L 140 59"
            fill="none"
            stroke="rgba(203, 213, 225, 0.9)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d="M 80 59 L 140 59"
            fill="none"
            stroke="url(#blPipGrad)"
            strokeWidth="2"
            strokeDasharray="8 16"
          >
            <animate attributeName="stroke-dashoffset" from="48" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Step 2: Manager Review Box */}
          <rect x="140" y="38" width="46" height="42" rx="6" fill="#FFFFFF" stroke="rgba(0, 114, 196, 0.2)" strokeWidth="0.8" />
          <circle cx="163" cy="52" r="7" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="0.8" />
          <text x="163" y="54.5" textAnchor="middle" fill="#475569" fontSize="6" fontWeight="700" fontFamily="sans-serif">
            HR
          </text>
          <text x="163" y="70" textAnchor="middle" fill="#64748B" fontSize="5" fontWeight="600" fontFamily="sans-serif">
            Auto-Route
          </text>

          {/* Forward Arrow */}
          <polygon points="190,56 198,59 190,62" fill="#10B981" />

          {/* Step 3: Approved Stamp */}
          <g transform="translate(202, 45)">
            <rect x="0" y="0" width="42" height="28" rx="5" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
            <circle cx="12" cy="14" r="5" fill="#10B981" />
            <polyline points="9.5,14 11.5,16 14.5,12" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="21" y="16" fill="#047857" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">
              PASS
            </text>
          </g>

          {/* Bottom Summary Pill */}
          <g transform="translate(16, 92)">
            <rect x="0" y="0" width="228" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.7" />
            <text x="10" y="13" fill="#475569" fontSize="5.5" fontFamily="sans-serif">
              Status: <tspan fill="#10B981" fontWeight="700">1-Click Manager Approval Executed</tspan>
            </text>
            <text x="184" y="13" fill="#94A3B8" fontSize="5" fontFamily="sans-serif">
              Balance: 6 Rem.
            </text>
          </g>
        </svg>
      ) : (
        // ─────────────────────────────────────────────────────────────
        // TOP-RIGHT: LIVE SHIFT ATTENDANCE TERMINAL
        // ─────────────────────────────────────────────────────────────
        <svg
          viewBox="0 0 280 140"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            <linearGradient id="trBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0072C4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.02" />
            </linearGradient>
            <filter id="trGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>

          {/* Soft background aura */}
          <circle cx="140" cy="70" r="58" fill="rgba(0, 114, 196, 0.06)" filter="url(#trGlow)" />

          {/* Outer Glass Card */}
          <rect
            x="6"
            y="8"
            width="268"
            height="124"
            rx="10"
            fill="rgba(255, 255, 255, 0.94)"
            stroke="rgba(0, 114, 196, 0.2)"
            strokeWidth="1"
          />

          {/* Header Bar with Live Clock */}
          <g>
            <rect x="16" y="16" width="7" height="7" rx="2" fill="#0072C4" />
            <text x="29" y="23" fill="#0072C4" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.4">
              SHIFT ATTENDANCE TERMINAL
            </text>
            <rect x="208" y="14" width="56" height="14" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="0.8" />
            <circle cx="216" cy="21" r="2" fill="#10B981">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x="222" y="23.5" fill="#047857" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">
              IN OFFICE
            </text>
          </g>

          <line x1="16" y1="34" x2="264" y2="34" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="0.8" />

          {/* Left Column: Live Digital Punch Clock */}
          <g transform="translate(16, 42)">
            <rect x="0" y="0" width="138" height="52" rx="6" fill="#F0F7FF" stroke="rgba(0, 114, 196, 0.2)" strokeWidth="0.8" />
            <text x="10" y="14" fill="#64748B" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
              SHIFT: 10:00 AM – 07:00 PM
            </text>
            {/* Live Clock Display */}
            <text x="10" y="32" fill="#0072C4" fontSize="13" fontWeight="800" fontFamily="monospace" letterSpacing="1">
              10:02:14
            </text>
            <text x="76" y="31" fill="#0369A1" fontSize="7" fontWeight="700" fontFamily="sans-serif">
              AM
            </text>
            <text x="10" y="44" fill="#10B981" fontSize="5.8" fontWeight="600" fontFamily="sans-serif">
              ✓ Biometric In: 09:58 AM (On Time)
            </text>
          </g>

          {/* Right Column: Animated Biometric Pulse Scanner */}
          <g transform="translate(164, 42)">
            <rect x="0" y="0" width="100" height="52" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
            {/* Biometric concentric rings */}
            <circle cx="28" cy="26" r="16" fill="none" stroke="rgba(0, 114, 196, 0.2)" strokeWidth="1" />
            <circle cx="28" cy="26" r="11" fill="none" stroke="rgba(0, 114, 196, 0.35)" strokeWidth="1" />
            <circle cx="28" cy="26" r="6" fill="rgba(0, 114, 196, 0.15)" stroke="#0072C4" strokeWidth="1.2" />

            {/* Pulsing radar wave */}
            <circle cx="28" cy="26" r="5" fill="none" stroke="#0072C4" strokeWidth="1.5">
              <animate attributeName="r" from="5" to="18" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="2.2s" repeatCount="indefinite" />
            </circle>

            {/* Scanner line moving up and down */}
            <line x1="14" y1="18" x2="42" y2="18" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round">
              <animate attributeName="y1" values="12;40;12" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="y2" values="12;40;12" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" repeatCount="indefinite" />
            </line>

            {/* Info text */}
            <text x="52" y="22" fill="#0F172A" fontSize="6.2" fontWeight="700" fontFamily="sans-serif">
              Punch
            </text>
            <text x="52" y="32" fill="#10B981" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
              Sync Active
            </text>
            <text x="52" y="42" fill="#94A3B8" fontSize="4.8" fontFamily="sans-serif">
              Fingerprint/Web
            </text>
          </g>

          {/* Bottom Progress Bar: Shift Completion */}
          <g transform="translate(16, 104)">
            <rect x="0" y="0" width="248" height="18" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.7" />
            <text x="8" y="12" fill="#475569" fontSize="5.2" fontWeight="600" fontFamily="sans-serif">
              Active Shift Progress: 04h 32m logged
            </text>
            <rect x="130" y="5" width="76" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="130" y="5" width="45" height="7" rx="3.5" fill="#0072C4" />
            <text x="214" y="11.5" fill="#0072C4" fontSize="5.2" fontWeight="700" fontFamily="sans-serif">
              56%
            </text>
          </g>
        </svg>
      )}
    </div>
  );
};

export default EOfficeOrgPulseAnimation;
