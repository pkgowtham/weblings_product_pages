import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const GlobeIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 28,
  height = 28,
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
      className={`globe-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .globe-graphic {
          transform-origin: 12px 12px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .globe-icon:hover .globe-graphic,
        .globe-icon.is-hovered .globe-graphic {
          transform: scale(1.08);
        }
      `}</style>
      <g className="globe-graphic">
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3a14.5 14.5 0 0 1 3.8 9 14.5 14.5 0 0 1-3.8 9 14.5 14.5 0 0 1-3.8-9 14.5 14.5 0 0 1 3.8-9z" />
      </g>
    </svg>
  );
};

export default GlobeIcon;
