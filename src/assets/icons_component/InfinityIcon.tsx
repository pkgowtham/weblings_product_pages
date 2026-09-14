import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const InfinityIcon: React.FC<IconProps> = ({
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
      className={`infinity-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .infinity-path {
          transform-origin: 12px 12px;
          transition: transform 0.4s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .infinity-icon:hover .infinity-path,
        .infinity-icon.is-hovered .infinity-path {
          transform: scale(1.12) rotate(6deg);
        }
      `}</style>
      <g className="infinity-path">
        <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z" />
        <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" />
      </g>
    </svg>
  );
};

export default InfinityIcon;
