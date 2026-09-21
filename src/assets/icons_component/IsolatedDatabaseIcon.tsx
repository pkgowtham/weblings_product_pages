import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const IsolatedDatabaseIcon: React.FC<IconProps> = ({
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
      className={`isolated-db-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .db-unit-top {
          transform-origin: 12px 6px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .db-unit-bottom {
          transform-origin: 12px 16px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .isolation-barrier {
          transition: opacity 0.3s ease;
        }
        .isolated-db-icon:hover .db-unit-top,
        .isolated-db-icon.is-hovered .db-unit-top {
          transform: translateY(-2px);
        }
        .isolated-db-icon:hover .db-unit-bottom,
        .isolated-db-icon.is-hovered .db-unit-bottom {
          transform: translateY(2px);
        }
        .isolated-db-icon:hover .isolation-barrier,
        .isolated-db-icon.is-hovered .isolation-barrier {
          opacity: 1;
        }
      `}</style>
      {/* Top Isolated Database Cylinder */}
      <g className="db-unit-top">
        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
        <path d="M4 5v3.5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
      </g>

      {/* Isolation Boundary / Separation Barrier */}
      <line
        className="isolation-barrier"
        x1="2"
        y1="11.5"
        x2="22"
        y2="11.5"
        strokeDasharray="2 2"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Bottom Isolated Database Cylinder */}
      <g className="db-unit-bottom">
        <ellipse cx="12" cy="15" rx="8" ry="2.5" />
        <path d="M4 15v3.5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V15" />
      </g>
    </svg>
  );
};

export default IsolatedDatabaseIcon;
