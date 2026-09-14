import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * TimeBombLinkIcon
 * Represents Time-Bomb / Time-Bound Public Links with expiring countdown.
 * Features an active stopwatch timer dial with ticking animation triggered ONLY on hover.
 */
export const TimeBombLinkIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`timebomb-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .timebomb-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .timer-btn {
          transition: transform 0.2s ease;
          transform-origin: 12px 3px;
        }
        .ticking-needle {
          transform-origin: 12px 14px;
          transform: rotate(0deg);
          animation: none;
        }
        .timebomb-icon:hover,
        .timebomb-icon.is-hovered {
          transform: translateY(-1.5px);
        }
        .timebomb-icon:hover .timer-btn,
        .timebomb-icon.is-hovered .timer-btn {
          transform: translateY(1px);
        }
        /* Ticking animation ONLY triggers on hover */
        .timebomb-icon:hover .ticking-needle,
        .timebomb-icon.is-hovered .ticking-needle {
          animation: tickTockNeedle 1.2s steps(8) infinite;
        }
        @keyframes tickTockNeedle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Top Stopwatch Push Button */}
      <path className="timer-btn" d="M10 2h4" strokeWidth={2.2} />
      <path className="timer-btn" d="M12 2v3" strokeWidth={2} />

      {/* Timer Housing Dial */}
      <circle cx="12" cy="14" r="8" fill="rgba(217, 119, 6, 0.08)" strokeWidth={2} />

      {/* Ticking Clock Needle (Static by default, ticks only when hovered) */}
      <g className="ticking-needle">
        <line x1="12" y1="14" x2="12" y2="9" strokeWidth={2.2} strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
      </g>

      {/* Expiring Link Spark / Accent Arc */}
      <path d="M19 6.5l1.5-1.5" strokeWidth={1.8} />
      <path d="M5 6.5l-1.5-1.5" strokeWidth={1.8} />
    </svg>
  );
};

export default TimeBombLinkIcon;
