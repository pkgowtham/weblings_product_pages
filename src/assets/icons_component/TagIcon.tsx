import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const TagIcon: React.FC<IconProps> = ({
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
      className={`tag-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .tag-body {
          transform-origin: 7px 7px;
          transition: transform 0.35s ease;
        }
        .tag-icon:hover .tag-body,
        .tag-icon.is-hovered .tag-body {
          animation: tagSwing 0.7s ease-in-out forwards;
        }
        @keyframes tagSwing {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-16deg);
          }
          55% {
            transform: rotate(12deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      <g className="tag-body">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth={2.5} />
      </g>
    </svg>
  );
};

export default TagIcon;
