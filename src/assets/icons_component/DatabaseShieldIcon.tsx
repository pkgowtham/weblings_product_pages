import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const DatabaseShieldIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`db-shield-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .db-top {
          transform-origin: 12px 5px;
          transition: transform 0.35s ease;
        }
        .db-shield {
          transform-origin: 16px 16px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .db-shield-icon:hover .db-shield,
        .db-shield-icon.is-hovered .db-shield {
          transform: scale(1.15);
        }
        .db-shield-icon:hover .db-top,
        .db-shield-icon.is-hovered .db-top {
          transform: translateY(-1px);
        }
      `}</style>
      {/* Database disks */}
      <ellipse className="db-top" cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4.03 3 9 3 .83 0 1.63-.04 2.4-.11" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3 .7 0 1.38-.03 2.03-.08" />
      
      {/* Protective Shield on the lower right */}
      <g className="db-shield">
        <path
          d="M17 12l4 1.5v3.5c0 2.5-2.5 4.5-4 5-1.5-.5-4-2.5-4-5v-3.5l4-1.5z"
          fill="rgba(0, 114, 196, 0.12)"
          stroke="#0072C4"
          strokeWidth="1.8"
        />
        <path d="M15.5 16.5l1.2 1.2 2.3-2.3" stroke="#0072C4" strokeWidth="1.8" />
      </g>
    </svg>
  );
};

export default DatabaseShieldIcon;
