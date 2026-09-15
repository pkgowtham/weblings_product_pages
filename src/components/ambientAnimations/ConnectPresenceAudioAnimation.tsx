import React from "react";

interface ConnectPresenceAudioAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ConnectPresenceAudioAnimation: React.FC<ConnectPresenceAudioAnimationProps> = ({
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
          <filter id="presenceGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Ambient Corner Aura */}
        <circle cx="95" cy="58" r="44" fill="rgba(14, 165, 233, 0.07)" filter="url(#presenceGlow)" />

        {/* Outer Frame Container */}
        <rect x="8" y="14" width="174" height="88" rx="8" fill="rgba(255, 255, 255, 0.85)" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="0.9" />

        {/* Header: Live Channel Call */}
        <text x="18" y="28" fill="#0EA5E9" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">
          LIVE VOICE &amp; CHAT
        </text>
        {/* Blinking Live Indicator */}
        <circle cx="168" cy="25" r="2.5" fill="#10B981">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Divider */}
        <line x1="18" y1="36" x2="172" y2="36" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="0.8" />

        {/* Overlapping Team Presence Avatars */}
        <g transform="translate(18, 44)">
          {/* Avatar 1 */}
          <circle cx="12" cy="12" r="11" fill="#0EA5E9" opacity="0.85" />
          <circle cx="12" cy="9" r="4" fill="#FFFFFF" opacity="0.9" />
          <path d="M 6 19 C 6 15, 18 15, 18 19" fill="#FFFFFF" opacity="0.9" />
          {/* Online Dot */}
          <circle cx="19" cy="19" r="3" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />

          {/* Avatar 2 */}
          <circle cx="28" cy="12" r="11" fill="#10B981" opacity="0.85" />
          <circle cx="28" cy="9" r="4" fill="#FFFFFF" opacity="0.9" />
          <path d="M 22 19 C 22 15, 34 15, 34 19" fill="#FFFFFF" opacity="0.9" />
          <circle cx="35" cy="19" r="3" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />

          {/* Avatar 3 */}
          <circle cx="44" cy="12" r="11" fill="#6366F1" opacity="0.85" />
          <circle cx="44" cy="9" r="4" fill="#FFFFFF" opacity="0.9" />
          <path d="M 38 19 C 38 15, 50 15, 50 19" fill="#FFFFFF" opacity="0.9" />
          <circle cx="51" cy="19" r="3" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* Active Audio Waveform Equalizer Bars */}
        <g transform="translate(86, 52)">
          {/* Bar 1 */}
          <rect x="0" y="0" width="3" height="16" rx="1.5" fill="#0EA5E9">
            <animate attributeName="height" values="8;18;6;14;8" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="5;0;6;2;5" dur="1.2s" repeatCount="indefinite" />
          </rect>
          {/* Bar 2 */}
          <rect x="6" y="0" width="3" height="20" rx="1.5" fill="#10B981">
            <animate attributeName="height" values="18;8;22;10;18" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="y" values="0;5;-2;4;0" dur="1.4s" repeatCount="indefinite" />
          </rect>
          {/* Bar 3 */}
          <rect x="12" y="0" width="3" height="24" rx="1.5" fill="#0EA5E9">
            <animate attributeName="height" values="12;24;8;20;12" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="y" values="3;-4;5;-1;3" dur="1.1s" repeatCount="indefinite" />
          </rect>
          {/* Bar 4 */}
          <rect x="18" y="0" width="3" height="16" rx="1.5" fill="#6366F1">
            <animate attributeName="height" values="16;6;18;8;16" dur="1.3s" repeatCount="indefinite" />
            <animate attributeName="y" values="1;6;0;5;1" dur="1.3s" repeatCount="indefinite" />
          </rect>
          {/* Bar 5 */}
          <rect x="24" y="0" width="3" height="10" rx="1.5" fill="#10B981">
            <animate attributeName="height" values="6;16;4;12;6" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="y" values="6;1;7;3;6" dur="1.5s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Live Typing & Message Delivery Bubble */}
        <g transform="translate(126, 44)">
          <rect x="0" y="0" width="46" height="20" rx="5" fill="rgba(14, 165, 233, 0.08)" stroke="#0EA5E9" strokeWidth="0.8" />
          {/* Tail */}
          <polygon points="-3,14 0,10 0,15" fill="rgba(14, 165, 233, 0.08)" />

          {/* Typing Dots */}
          <circle cx="14" cy="10" r="2" fill="#0EA5E9">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="10" r="2" fill="#0EA5E9">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="10" r="2" fill="#0EA5E9">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Bottom Ticker: Real-Time Zero Latency */}
        <rect x="18" y="78" width="76" height="14" rx="3.5" fill="rgba(16, 185, 129, 0.08)" />
        <circle cx="26" cy="85" r="2" fill="#10B981" />
        <text x="32" y="87.5" fill="#10B981" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
          Zero-Lag Streaming
        </text>
      </svg>
    </div>
  );
};

export default ConnectPresenceAudioAnimation;
