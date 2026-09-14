import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const SmartphoneIcon: React.FC<IconProps> = ({
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
      className={`phone-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .phone-body {
          transform-origin: 12px 12px;
          transition: transform 0.35s ease;
        }
        .phone-icon:hover .phone-body,
        .phone-icon.is-hovered .phone-body {
          animation: phoneTiltLeftRight 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes phoneTiltLeftRight {
          0% {
            transform: rotate(0deg);
          }
          28% {
            transform: rotate(-18deg);
          }
          68% {
            transform: rotate(18deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      <g className="phone-body">
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" ry="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" strokeWidth={1.5} />
      </g>
    </svg>
  );
};

export default SmartphoneIcon;
