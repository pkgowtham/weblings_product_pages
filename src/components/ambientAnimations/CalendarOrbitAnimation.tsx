import React from "react";

interface CalendarOrbitAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const CalendarOrbitAnimation: React.FC<CalendarOrbitAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";
  const glowId = isBottomLeft ? "chronoCornerGlowBL" : "chronoCornerGlowTR";

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
          fill={isBottomLeft ? "rgba(99, 102, 241, 0.09)" : "rgba(0, 114, 196, 0.08)"}
          filter={`url(#${glowId})`}
        />

        {/* Outer Clock Tick Ring */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={isBottomLeft ? "360 60 60" : "0 60 60"}
            to={isBottomLeft ? "0 60 60" : "360 60 60"}
            dur={isBottomLeft ? "40s" : "45s"}
            repeatCount="indefinite"
          />
          {/* Subtle Outer Track */}
          <circle cx="60" cy="60" r="46" fill="none" stroke="#6366F1" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />

          {/* 12 Clock Hour Marker Dots */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x = 60 + 46 * Math.sin(rad);
            const y = 60 - 46 * Math.cos(rad);
            const isCardinal = deg % 90 === 0;
            return (
              <circle
                key={deg}
                cx={x}
                cy={y}
                r={isCardinal ? 1.8 : 1}
                fill={isCardinal ? (isBottomLeft ? "#6366F1" : "#0072C4") : (isBottomLeft ? "#0072C4" : "#6366F1")}
                opacity={isCardinal ? 0.75 : 0.4}
              />
            );
          })}
        </g>

        {/* Inner Orbital Orbit Track */}
        <circle cx="60" cy="60" r="28" fill="none" stroke="#0072C4" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        {/* Orbiting Circadian Planet Node */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={isBottomLeft ? "180 60 60" : "0 60 60"}
            to={isBottomLeft ? "540 60 60" : "360 60 60"}
            dur={isBottomLeft ? "11s" : "10s"}
            repeatCount="indefinite"
          />
          {/* Gliding Hour Particle */}
          <circle cx="60" cy="32" r="3.2" fill={isBottomLeft ? "#6366F1" : "#0072C4"} opacity="0.9" />
          <circle cx="60" cy="32" r="1.3" fill="#FFFFFF" opacity="0.95" />
          {/* Faint Tail Sparkle */}
          <circle cx="56" cy="32.5" r="1.2" fill={isBottomLeft ? "#0072C4" : "#6366F1"} opacity="0.6" />
        </g>

        {/* Central Pulsating Chronometer Core */}
        <circle cx="60" cy="60" r="8" fill="none" stroke={isBottomLeft ? "#6366F1" : "#0072C4"} strokeWidth="1.2" opacity="0.6">
          <animate attributeName="r" values="7;12" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="60" r="4.5" fill={isBottomLeft ? "#6366F1" : "#0072C4"} opacity="0.85" />
        <circle cx="60" cy="60" r="2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export default CalendarOrbitAnimation;
