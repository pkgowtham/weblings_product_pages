import React from "react";

interface StreamlineSprintAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const StreamlineSprintAnimation: React.FC<StreamlineSprintAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";

  // Top-Right: Arches upward over milestones, ends in bottom-right
  const topRightPath =
    "M -15 110 C 60 115, 110 38, 170 42 C 230 46, 270 95, 335 115";

  // Bottom-Left: Arches smoothly across lower milestone stations
  const bottomLeftPath =
    "M -15 55 C 60 50, 110 122, 170 118 C 230 114, 270 65, 335 45";

  const sprintPath = isBottomLeft ? bottomLeftPath : topRightPath;
  const duration = isBottomLeft ? "8.8s" : "8s";
  const delay = isBottomLeft ? "1.5s" : "0s";
  const gradId = isBottomLeft ? "sprintCornerGradBL" : "sprintCornerGradTR";
  const glowId = isBottomLeft ? "rocketCornerGlowBL" : "rocketCornerGlowTR";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isBottomLeft
          ? { bottom: 8, left: 12 }
          : { top: 8, right: 12 }),
        width: "320px",
        height: "160px",
        maxWidth: "40vw",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 2,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 160"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072C4" stopOpacity="0" />
            <stop offset="25%" stopColor="#0072C4" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0072C4" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Milestone Arched Sprint Track */}
        <path
          d={sprintPath}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.4"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* Milestone Node Rings */}
        <g opacity="0.45">
          <circle cx="75" cy={isBottomLeft ? 72 : 88} r="2.5" fill="#0072C4" />
          <circle cx="75" cy={isBottomLeft ? 72 : 88} r="5.5" fill="none" stroke="#0072C4" strokeWidth="0.7" strokeDasharray="2 2" />

          <circle cx="170" cy={isBottomLeft ? 118 : 42} r="3" fill="#F59E0B" />
          <circle cx="170" cy={isBottomLeft ? 118 : 42} r="6.5" fill="none" stroke="#F59E0B" strokeWidth="0.7" strokeDasharray="2 2" />

          <circle cx="265" cy={isBottomLeft ? 72 : 88} r="2.5" fill="#10B981" />
          <circle cx="265" cy={isBottomLeft ? 72 : 88} r="5.5" fill="none" stroke="#10B981" strokeWidth="0.7" strokeDasharray="2 2" />
        </g>

        {/* Animated Mini Velocity Rocket */}
        <g>
          <animateMotion
            path={sprintPath}
            dur={duration}
            begin={delay}
            repeatCount="indefinite"
            rotate="auto"
          />

          <g transform="scale(0.72)">
            {/* Thrust Flame */}
            <ellipse
              cx="-14"
              cy="0"
              rx="5"
              ry="2"
              fill="#EF4444"
              opacity="0.85"
              filter={`url(#${glowId})`}
            />
            <ellipse
              cx="-11"
              cy="0"
              rx="3"
              ry="1.2"
              fill="#FBBF24"
              opacity="0.95"
            />

            {/* Fins */}
            <polygon points="-7,-5 -2,-1 -8,0" fill="#D97706" />
            <polygon points="-7,5 -2,1 -8,0" fill="#B45309" />

            {/* Fuselage */}
            <path
              d="M -8 -2.8 C -2 -3.2, 6 -2.2, 14 0 C 6 2.2, -2 3.2, -8 2.8 Z"
              fill="#F59E0B"
            />
            {/* Upper Highlight */}
            <path
              d="M -2 -1.8 C 3 -1.4, 9 -0.6, 14 0 C 9 0.6, 3 1.4, -2 1.8 Z"
              fill="#FEF08A"
              opacity="0.7"
            />
            {/* Window */}
            <circle cx="3" cy="0" r="1.6" fill="#0072C4" />
            <circle cx="3.4" cy="-0.3" r="0.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default StreamlineSprintAnimation;
