import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const DataRetentionIcon: React.FC<IconProps> = ({
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
      className={`data-retention-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .db-stack {
          transition: transform 0.3s ease;
        }
        .retention-clock {
          transition: transform 0.3s ease;
          transform-origin: 17px 17px;
        }
        .data-retention-icon:hover .db-stack,
        .data-retention-icon.is-hovered .db-stack {
          animation: dbBounce 0.6s ease-in-out;
        }
        .data-retention-icon:hover .retention-clock,
        .data-retention-icon.is-hovered .retention-clock {
          animation: clockSpin 1.2s infinite linear;
        }
        @keyframes dbBounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes clockSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {/* Top Database Cylinder */}
      <ellipse className="db-stack" cx="10" cy="5" rx="7" ry="2.5" />
      {/* Middle Cylinder Tier */}
      <path className="db-stack" d="M3 5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
      {/* Bottom Cylinder Tier */}
      <path className="db-stack" d="M3 10v5c0 1.38 3.13 2.5 7 2.5 1.1 0 2.14-.09 3.08-.25" />
      {/* Retention Policy Clock Badge in bottom right */}
      <circle cx="17" cy="17" r="5" fill="#FFFFFF" />
      <circle cx="17" cy="17" r="5" />
      <polyline className="retention-clock" points="17 14.5 17 17 19 18" strokeWidth={1.8} />
    </svg>
  );
};

export default DataRetentionIcon;
