import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const BellAlertIcon: React.FC<IconProps> = ({
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
      className={`bellalert-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .bell-body {
          transform-origin: 12px 3px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bellalert-icon:hover .bell-body, .bellalert-icon.is-hovered .bell-body {
          animation: bellWiggle 0.6s ease-in-out;
          transform: rotate(10deg);
        }
        @keyframes bellWiggle {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-14deg); }
          40% { transform: rotate(14deg); }
          60% { transform: rotate(-8deg); }
          80% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
      <g className="bell-body">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </g>
      {/* Alert dot is static and non-animated as requested */}
      <circle cx={18} cy={4} r={3} fill="currentColor" />
    </svg>
  );
};

export default BellAlertIcon;
