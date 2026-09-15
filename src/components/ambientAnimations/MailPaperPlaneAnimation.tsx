import React from "react";

interface MailPaperPlaneAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const MailPaperPlaneAnimation: React.FC<MailPaperPlaneAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";

  // Top-Right: Swoops from top-right's left, executes loop flip, exits to bottom-right
  const topRightFlightPath =
    "M -15 45 C 50 48, 100 80, 135 60 C 160 42, 145 12, 115 20 C 88 28, 92 68, 130 82 C 180 100, 235 70, 340 125";

  // Bottom-Left: Swoops from bottom-left, executes loop flip, exits to upper-right of corner box
  const bottomLeftFlightPath =
    "M -15 125 C 50 120, 100 85, 135 105 C 160 122, 145 155, 115 145 C 88 138, 92 98, 130 85 C 180 65, 235 95, 340 40";

  const flightPath = isBottomLeft ? bottomLeftFlightPath : topRightFlightPath;
  const duration = isBottomLeft ? "9.5s" : "8.5s";
  const delay = isBottomLeft ? "2s" : "0s";
  const gradId = isBottomLeft ? "mailCornerTrailGradBL" : "mailCornerTrailGradTR";
  const glowId = isBottomLeft ? "mailPlaneGlowBL" : "mailPlaneGlowTR";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isBottomLeft
          ? { bottom: 8, left: 12 }
          : { top: 8, right: 12 }),
        width: "320px",
        height: "165px",
        maxWidth: "40vw",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 2,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 165"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="25%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="90%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Delicate Flight Contrail */}
        <path
          d={flightPath}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.4"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* Soft Waypoint Specks */}
        <circle cx={isBottomLeft ? 115 : 115} cy={isBottomLeft ? 145 : 20} r="1.8" fill="#8B5CF6" opacity="0.4" />
        <circle cx={isBottomLeft ? 235 : 235} cy={isBottomLeft ? 95 : 70} r="1.5" fill="#3B82F6" opacity="0.35" />

        {/* Animated Origami Paper Airplane */}
        <g>
          <animateMotion
            path={flightPath}
            dur={duration}
            begin={delay}
            repeatCount="indefinite"
            rotate="auto"
          />
          {/* Subtle Ambient Halo */}
          <circle cx="0" cy="0" r="12" fill="rgba(37, 99, 235, 0.16)" filter={`url(#${glowId})`} />

          {/* Scaled Origami Plane */}
          <g transform="scale(0.75)">
            {/* Top Wing */}
            <polygon
              points="-14,-7 16,0 -4,2"
              fill="#2563EB"
              opacity="0.95"
            />
            {/* Bottom Wing */}
            <polygon
              points="-14,7 16,0 -4,2"
              fill="#1D4ED8"
              opacity="0.85"
            />
            {/* Upper Wing Fold Facet */}
            <polygon
              points="-14,-7 16,0 -14,0"
              fill="#60A5FA"
              opacity="0.6"
            />
            {/* Center Fold Spine */}
            <line
              x1="-14"
              y1="0"
              x2="16"
              y2="0"
              stroke="#BFDBFE"
              strokeWidth="0.8"
            />
            {/* Tail Wake Glow */}
            <circle
              cx="-15"
              cy="0"
              r="1.8"
              fill="#8B5CF6"
              opacity="0.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MailPaperPlaneAnimation;
