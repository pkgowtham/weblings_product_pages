import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const SearchIcon: React.FC<IconProps> = ({
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
      className={`search-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .search-glass {
          transform-origin: 11px 11px;
          transition: transform 0.3s ease;
        }
        .search-icon:hover .search-glass,
        .search-icon.is-hovered .search-glass {
          animation: searchSmallSweep 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes searchSmallSweep {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          30% {
            transform: translate(1.5px, -1.5px) rotate(8deg);
          }
          70% {
            transform: translate(-1.2px, -0.8px) rotate(-6deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
      <g className="search-glass">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </g>
    </svg>
  );
};

export default SearchIcon;
