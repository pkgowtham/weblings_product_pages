import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ScrollDownIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 20,
  height = 20,
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
      className={`scrolldown-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(3px);
          }
        }
        .scrolldown-arrow {
          animation: scrollBounce 1.4s ease-in-out infinite;
        }
        .scrolldown-icon:hover .scrolldown-arrow,
        .scrolldown-icon.is-hovered .scrolldown-arrow {
          animation-duration: 0.7s;
        }
      `}</style>
      <circle cx={12} cy={12} r={10} strokeWidth={1.5} opacity={0.6} />
      <g className="scrolldown-arrow">
        <path d="M12 8v8" />
        <path d="M8 12l4 4 4-4" />
      </g>
    </svg>
  );
};

export default ScrollDownIcon;
