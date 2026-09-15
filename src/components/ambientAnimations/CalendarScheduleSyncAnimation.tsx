import React from "react";

interface CalendarScheduleSyncAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CalendarScheduleSyncAnimation: React.FC<CalendarScheduleSyncAnimationProps> = ({
  className,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        bottom: 12,
        left: 16,
        width: "190px",
        height: "115px",
        maxWidth: "42vw",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 190 115"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <filter id="chronoSyncGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Ambient Corner Aura */}
        <circle cx="95" cy="58" r="44" fill="rgba(0, 114, 196, 0.07)" filter="url(#chronoSyncGlow)" />

        {/* Outer Frame Container */}
        <rect x="8" y="14" width="174" height="88" rx="8" fill="rgba(255, 255, 255, 0.85)" stroke="rgba(0, 114, 196, 0.18)" strokeWidth="0.9" />

        {/* Header Title: Smart Sync */}
        <text x="18" y="28" fill="#0072C4" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">
          AUTONOMOUS SYNC
        </text>
        <circle cx="168" cy="25" r="2.5" fill="#10B981" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Timeline Grid Line */}
        <line x1="18" y1="36" x2="172" y2="36" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="0.8" />

        {/* Time Interval Labels */}
        <text x="20" y="45" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">09:00</text>
        <text x="65" y="45" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">11:00</text>
        <text x="110" y="45" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">01:00</text>
        <text x="150" y="45" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">03:00</text>

        {/* Track 1: Busy Block A */}
        <rect x="18" y="52" width="40" height="15" rx="3.5" fill="rgba(0, 114, 196, 0.12)" stroke="rgba(0, 114, 196, 0.25)" strokeWidth="0.8" />
        <text x="23" y="62" fill="#0072C4" fontSize="5.8" fontFamily="sans-serif" opacity="0.8">Busy</text>

        {/* Track 2: Busy Block B */}
        <rect x="122" y="52" width="50" height="15" rx="3.5" fill="rgba(99, 102, 241, 0.12)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.8" />
        <text x="127" y="62" fill="#6366F1" fontSize="5.8" fontFamily="sans-serif" opacity="0.8">Conflict</text>

        {/* The Optimal Conflict-Free Slot (Center Window: 62 to 118) */}
        <rect
          x="62"
          y="50"
          width="56"
          height="19"
          rx="4.5"
          fill="rgba(16, 185, 129, 0.08)"
          stroke="#10B981"
          strokeWidth="1.1"
          strokeDasharray="3 3"
        />

        {/* Matched Meeting Pill with Pulsing Glow */}
        <g>
          <animate
            attributeName="opacity"
            values="0.3; 1; 1; 0.3"
            keyTimes="0; 0.45; 0.85; 1"
            dur="5s"
            repeatCount="indefinite"
          />
          <rect x="65" y="52" width="50" height="15" rx="3.5" fill="#10B981" opacity="0.9" filter="url(#chronoSyncGlow)" />
          <text x="73" y="62.5" fill="#FFFFFF" fontSize="6" fontWeight="700" fontFamily="sans-serif">
            100% Free
          </text>
          <path d="M 103 61 L 105 63 L 108 59" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Scanning Sweeper Ray */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 100,0; 100,0; 0,0"
            keyTimes="0; 0.45; 0.85; 1"
            dur="5s"
            repeatCount="indefinite"
          />
          <line x1="40" y1="48" x2="40" y2="73" stroke="#0072C4" strokeWidth="1.2" opacity="0.85" />
          <circle cx="40" cy="48" r="2" fill="#0072C4" />
          <circle cx="40" cy="73" r="2" fill="#0072C4" />
        </g>

        {/* Bottom Status Ticker */}
        <rect x="18" y="78" width="70" height="14" rx="3.5" fill="rgba(0, 114, 196, 0.06)" />
        <circle cx="26" cy="85" r="2" fill="#0072C4" />
        <text x="32" y="87.5" fill="#0072C4" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
          Zero Conflicts
        </text>
      </svg>
    </div>
  );
};

export default CalendarScheduleSyncAnimation;
