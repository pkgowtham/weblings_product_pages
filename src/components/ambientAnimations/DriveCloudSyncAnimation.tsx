import React from "react";

interface DriveCloudSyncAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

export const DriveCloudSyncAnimation: React.FC<DriveCloudSyncAnimationProps> = ({
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
          <linearGradient id="cloudSyncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072C4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="uploadBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0072C4" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.35" />
          </linearGradient>
          <filter id="cloudGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Ambient Corner Aura */}
        <circle cx="95" cy="58" r="44" fill="rgba(147, 51, 234, 0.07)" filter="url(#cloudGlow)" />

        {/* Outer Frame Container */}
        <rect x="8" y="14" width="174" height="88" rx="8" fill="rgba(255, 255, 255, 0.85)" stroke="rgba(0, 114, 196, 0.18)" strokeWidth="0.9" />

        {/* Header: Zero-Knowledge Cloud */}
        <text x="18" y="28" fill="#0072C4" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">
          CLOUD VAULT SYNC
        </text>
        <circle cx="168" cy="25" r="2.5" fill="#10B981" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Divider */}
        <line x1="18" y1="36" x2="172" y2="36" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="0.8" />

        {/* Left Side: Upload Beam to Cloud */}
        <g transform="translate(24, 42)">
          {/* Vertical Upload Beam Light */}
          <rect x="18" y="18" width="14" height="34" fill="url(#uploadBeamGrad)" />

          {/* Cloud Silhouette */}
          <path
            d="M 12 18 C 12 14, 15 11, 19 11 C 21 8, 26 7, 29 10 C 32 8, 37 9, 38 13 C 41 13, 43 15, 43 18 C 43 21, 40 23, 37 23 L 15 23 C 12 23, 10 20, 12 18 Z"
            fill="url(#cloudSyncGrad)"
            filter="url(#cloudGlow)"
          />
          <path
            d="M 12 18 C 12 14, 15 11, 19 11 C 21 8, 26 7, 29 10 C 32 8, 37 9, 38 13 C 41 13, 43 15, 43 18 C 43 21, 40 23, 37 23 L 15 23 C 12 23, 10 20, 12 18 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            opacity="0.7"
          />

          {/* Upward Floating Encrypted Document Packet */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,32; 0,6; 0,6; 0,32"
              keyTimes="0; 0.45; 0.85; 1"
              dur="4.5s"
              repeatCount="indefinite"
            />
            {/* Document Card */}
            <rect x="18" y="0" width="14" height="18" rx="2.5" fill="#FFFFFF" stroke="#0072C4" strokeWidth="0.9" filter="url(#cloudGlow)" />
            {/* Folded Corner */}
            <polygon points="27,0 32,5 27,5" fill="#38BDF8" />
            {/* Mini Lock Glyphs */}
            <circle cx="25" cy="9" r="2" fill="#9333EA" />
            <rect x="23" y="11" width="4" height="3" rx="0.5" fill="#9333EA" />
          </g>

          {/* Sync Pulsing Ring when Doc arrives */}
          <circle cx="25" cy="18" r="10" fill="none" stroke="#10B981" strokeWidth="1">
            <animate attributeName="r" values="4;14;14;4" keyTimes="0; 0.45; 0.85; 1" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.9;0;0" keyTimes="0; 0.45; 0.85; 1" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Right Side: Storage Status & Encryption Specs */}
        <g transform="translate(86, 44)">
          <text x="0" y="8" fill="#1E293B" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">
            AES-256 GCM
          </text>
          <text x="0" y="18" fill="#64748B" fontSize="5.5" fontFamily="sans-serif">
            Streaming Vault Sync
          </text>

          {/* Progress / Storage Bar */}
          <rect x="0" y="24" width="86" height="5" rx="2.5" fill="rgba(0, 114, 196, 0.1)" />
          <rect x="0" y="24" width="62" height="5" rx="2.5" fill="url(#cloudSyncGrad)">
            <animate attributeName="width" values="50;75;50" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="66" y="22" fill="#10B981" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">
            Syncing
          </text>
        </g>

        {/* Bottom Ticker: Tamper-Proof */}
        <rect x="18" y="82" width="76" height="12" rx="3" fill="rgba(147, 51, 234, 0.08)" />
        <circle cx="25" cy="88" r="1.8" fill="#9333EA" />
        <text x="31" y="90.5" fill="#9333EA" fontSize="5.2" fontWeight="600" fontFamily="sans-serif">
          100% Tamper-Proof
        </text>
      </svg>
    </div>
  );
};

export default DriveCloudSyncAnimation;
