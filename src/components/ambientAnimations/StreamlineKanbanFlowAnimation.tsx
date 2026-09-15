import React from "react";

interface StreamlineKanbanFlowAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "topRight" | "bottomLeft";
}

export const StreamlineKanbanFlowAnimation: React.FC<StreamlineKanbanFlowAnimationProps> = ({
  className,
  style,
  position = "topRight",
}) => {
  const isTopRight = position === "topRight";

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        ...(isTopRight ? { top: 12, right: 16 } : { bottom: 12, left: 16 }),
        width: "200px",
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
        viewBox="0 0 200 115"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <defs>
          <filter id="kanbanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Ambient Corner Aura */}
        <circle cx="95" cy="58" r="46" fill="rgba(245, 158, 11, 0.07)" filter="url(#kanbanGlow)" />

        {/* 3 Mini Kanban Columns */}
        {/* Column 1: Backlog */}
        <rect x="8" y="14" width="52" height="88" rx="7" fill="rgba(0, 114, 196, 0.04)" stroke="rgba(0, 114, 196, 0.18)" strokeWidth="0.9" />
        <rect x="14" y="21" width="18" height="3" rx="1.5" fill="#0072C4" opacity="0.6" />
        {/* Static Card in Col 1 */}
        <rect x="13" y="30" width="42" height="22" rx="4" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(0, 114, 196, 0.15)" strokeWidth="0.8" />
        <rect x="17" y="35" width="22" height="2" rx="1" fill="#64748B" opacity="0.5" />
        <rect x="17" y="40" width="14" height="2" rx="1" fill="#94A3B8" opacity="0.4" />
        <circle cx="49" cy="37" r="2" fill="#0072C4" opacity="0.7" />

        {/* Column 2: In Progress */}
        <rect x="68" y="14" width="52" height="88" rx="7" fill="rgba(245, 158, 11, 0.04)" stroke="rgba(245, 158, 11, 0.22)" strokeWidth="0.9" />
        <rect x="74" y="21" width="20" height="3" rx="1.5" fill="#F59E0B" opacity="0.75" />

        {/* Column 3: Done */}
        <rect x="128" y="14" width="52" height="88" rx="7" fill="rgba(16, 185, 129, 0.04)" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.9" />
        <rect x="134" y="21" width="16" height="3" rx="1.5" fill="#10B981" opacity="0.7" />
        {/* Static Completed Card in Col 3 */}
        <rect x="133" y="62" width="42" height="22" rx="4" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.8" />
        <rect x="137" y="68" width="24" height="2" rx="1" fill="#64748B" opacity="0.5" />
        <circle cx="169" cy="73" r="2" fill="#10B981" opacity="0.8" />

        {/* Transitioning Active Sprint Ticket (Glides from Col 2 into Col 3) */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 60,0; 60,0; 0,0"
            keyTimes="0; 0.45; 0.85; 1"
            dur="6.5s"
            repeatCount="indefinite"
          />

          {/* Active Card Body */}
          <rect
            x="73"
            y="32"
            width="42"
            height="24"
            rx="5"
            fill="#FFFFFF"
            stroke="#F59E0B"
            strokeWidth="1.1"
            filter="url(#kanbanGlow)"
          />
          {/* Card Tag Badge */}
          <rect x="77" y="37" width="10" height="3" rx="1.5" fill="#F59E0B" opacity="0.85" />
          {/* Card Title Lines */}
          <rect x="77" y="43" width="24" height="2" rx="1" fill="#334155" opacity="0.7" />
          <rect x="77" y="48" width="16" height="1.8" rx="0.9" fill="#94A3B8" opacity="0.5" />
          {/* Active Progress Dot */}
          <circle cx="109" cy="44" r="2.2" fill="#0072C4" />
        </g>

        {/* Milestone Completion Ping in Col 3 */}
        <g transform="translate(154, 44)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#10B981" strokeWidth="1.2">
            <animate attributeName="r" values="4;14;14;4" keyTimes="0; 0.48; 0.85; 1" dur="6.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0; 0.8; 0; 0" keyTimes="0; 0.48; 0.85; 1" dur="6.5s" repeatCount="indefinite" />
          </circle>
          {/* Completion Checkmark Pulse */}
          <path
            d="M -3 0 L -0.5 2.5 L 3.5 -2"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate attributeName="opacity" values="0; 0.95; 0.95; 0" keyTimes="0; 0.48; 0.85; 1" dur="6.5s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default StreamlineKanbanFlowAnimation;
