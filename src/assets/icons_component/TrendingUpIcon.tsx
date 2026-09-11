import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const TrendingUpIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 20,
  height = 20,
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
      className={`trending-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .trending-group {
          clip-path: inset(0 0 0 0);
          transition: clip-path 0.35s ease;
        }
        .trending-icon:hover .trending-group,
        .trending-icon.is-hovered .trending-group {
          animation: growLeftRightChart 0.5s cubic-bezier(0.2, 0.9, 0.4, 1) forwards;
        }
        @keyframes growLeftRightChart {
          0% {
            clip-path: inset(0 100% 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
      <g className="trending-group">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </g>
    </svg>
  );
};

export default TrendingUpIcon;
