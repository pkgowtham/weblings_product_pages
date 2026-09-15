import React from "react";

interface ConnectSignalWaveAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const ConnectSignalWaveAnimation: React.FC<ConnectSignalWaveAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isBottomLeft = position === "bottomLeft";

  const primaryWaveTR = "M -10 75 Q 65 30, 140 75 T 290 75 T 315 75";
  const secondaryWaveTR = "M -10 75 Q 65 120, 140 75 T 290 75 T 315 75";

  const primaryWaveBL = "M -10 75 Q 65 120, 140 75 T 290 75 T 315 75";
  const secondaryWaveBL = "M -10 75 Q 65 30, 140 75 T 290 75 T 315 75";

  const primaryWave = isBottomLeft ? primaryWaveBL : primaryWaveTR;
  const secondaryWave = isBottomLeft ? secondaryWaveBL : secondaryWaveTR;

  const durationA = isBottomLeft ? "7.2s" : "6.5s";
  const durationB = isBottomLeft ? "9s" : "8.5s";
  const delayA = isBottomLeft ? "1.2s" : "0s";
  const delayB = isBottomLeft ? "3.2s" : "2s";

  const grad1Id = isBottomLeft ? "connectCornerGrad1BL" : "connectCornerGrad1TR";
  const grad2Id = isBottomLeft ? "connectCornerGrad2BL" : "connectCornerGrad2TR";
  const glowId = isBottomLeft ? "connectSignalGlowBL" : "connectSignalGlowTR";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isBottomLeft
          ? { bottom: 8, left: 12 }
          : { top: 8, right: 12 }),
        width: "300px",
        height: "150px",
        maxWidth: "38vw",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 2,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 300 150"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id={grad1Id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
            <stop offset="30%" stopColor="#0EA5E9" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#10B981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={grad2Id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Harmonic Counter Wave */}
        <path
          d={secondaryWave}
          fill="none"
          stroke={`url(#${grad2Id})`}
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {/* Primary Acoustic Sine Wave */}
        <path
          d={primaryWave}
          fill="none"
          stroke={`url(#${grad1Id})`}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Center Connection Harmonic Node & Resonant Ripple */}
        <g transform="translate(140, 75)">
          <circle cx="0" cy="0" r="3" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" values="3;18" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="3" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" values="3;24" dur="3.5s" begin="1.75s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0" dur="3.5s" begin="1.75s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="2.8" fill={isBottomLeft ? "#10B981" : "#0EA5E9"} />
          <circle cx="0" cy="0" r="1.2" fill="#FFFFFF" />
        </g>

        {/* Gliding Signal Packet (Sky Cyan) */}
        <g>
          <animateMotion
            path={primaryWave}
            dur={durationA}
            begin={delayA}
            repeatCount="indefinite"
            rotate="auto"
          />
          <circle cx="0" cy="0" r="9" fill="rgba(14, 165, 233, 0.22)" filter={`url(#${glowId})`} />
          <rect x="-4.5" y="-2" width="9" height="4" rx="2" fill="#0EA5E9" />
          <circle cx="1.5" cy="0" r="0.9" fill="#FFFFFF" />
        </g>

        {/* Gliding Signal Packet (Emerald Echo) */}
        <g>
          <animateMotion
            path={secondaryWave}
            dur={durationB}
            begin={delayB}
            repeatCount="indefinite"
            rotate="auto"
          />
          <circle cx="0" cy="0" r="7" fill="rgba(16, 185, 129, 0.22)" filter={`url(#${glowId})`} />
          <rect x="-3.5" y="-1.6" width="7" height="3.2" rx="1.6" fill="#10B981" />
          <circle cx="1" cy="0" r="0.7" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

export default ConnectSignalWaveAnimation;
