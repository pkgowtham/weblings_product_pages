import React from "react";

interface DriveVaultScanAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const DriveVaultScanAnimation: React.FC<DriveVaultScanAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";
  const glowId = isBottomLeft ? "vaultCornerGlowBL" : "vaultCornerGlowTR";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isBottomLeft
          ? { bottom: 14, left: 20 }
          : { top: 14, right: 20 }),
        width: "125px",
        height: "125px",
        maxWidth: "32vw",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
          </filter>
        </defs>

        {/* Ambient Radial Aura */}
        <circle
          cx="60"
          cy="60"
          r="42"
          fill={isBottomLeft ? "rgba(147, 51, 234, 0.09)" : "rgba(0, 114, 196, 0.08)"}
          filter={`url(#${glowId})`}
        />

        {/* Reticle Viewfinder Corner Brackets */}
        <g stroke={isBottomLeft ? "#9333EA" : "#0072C4"} strokeWidth="1.2" fill="none" opacity="0.4">
          <path d="M 28 38 V 28 H 38" />
          <path d="M 82 28 H 92 V 38" />
          <path d="M 92 82 V 92 H 82" />
          <path d="M 38 92 H 28 V 82" />
        </g>

        {/* Rotating Hexagonal Cipher Ring */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={isBottomLeft ? "360 60 60" : "0 60 60"}
            to={isBottomLeft ? "0 60 60" : "360 60 60"}
            dur={isBottomLeft ? "22s" : "24s"}
            repeatCount="indefinite"
          />
          {/* Hexagon Track */}
          <polygon
            points="60,24 88,40 88,72 60,88 32,72 32,40"
            fill="none"
            stroke={isBottomLeft ? "#0072C4" : "#9333EA"}
            strokeWidth="0.8"
            strokeDasharray="4 4"
            opacity="0.45"
          />
          {/* Hex Vertices */}
          <circle cx="60" cy="24" r="1.5" fill={isBottomLeft ? "#9333EA" : "#0072C4"} />
          <circle cx="88" cy="40" r="1.5" fill={isBottomLeft ? "#0072C4" : "#9333EA"} />
          <circle cx="88" cy="72" r="1.5" fill={isBottomLeft ? "#9333EA" : "#0072C4"} />
          <circle cx="60" cy="88" r="1.5" fill={isBottomLeft ? "#0072C4" : "#9333EA"} />
          <circle cx="32" cy="72" r="1.5" fill={isBottomLeft ? "#9333EA" : "#0072C4"} />
          <circle cx="32" cy="40" r="1.5" fill={isBottomLeft ? "#0072C4" : "#9333EA"} />
        </g>

        {/* Expanding Cryptographic Perimeter Radar Pulse */}
        <circle cx="60" cy="60" r="14" fill="none" stroke="#0072C4" strokeWidth="1.2" opacity="0.65">
          <animate attributeName="r" values="14;38" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.65;0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="60" r="14" fill="none" stroke="#9333EA" strokeWidth="1" opacity="0.65">
          <animate attributeName="r" values="14;48" dur="4s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.65;0" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>

        {/* Centered Cryptographic Vault Shield */}
        <g transform="translate(60, 60)">
          {/* Shield Outline */}
          <path
            d="M 0 -13 L 11 -6 V 3 C 11 10, 0 16, 0 16 C 0 16, -11 10, -11 3 V -6 Z"
            fill={isBottomLeft ? "#7C3AED" : "#0072C4"}
            opacity="0.9"
          />
          {/* Inner Shield Facet */}
          <path
            d="M 0 -11.5 L 8 -5.5 V 2.5 C 8 8.5, 0 13.5, 0 13.5 Z"
            fill={isBottomLeft ? "#A78BFA" : "#38BDF8"}
            opacity="0.75"
          />
          {/* Keyhole / Lock Pin */}
          <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
          <rect x="-1" y="0" width="2" height="4.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

export default DriveVaultScanAnimation;
