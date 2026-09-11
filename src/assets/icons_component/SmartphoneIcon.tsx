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
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }
        .phone-icon:hover .phone-body,
        .phone-icon.is-hovered .phone-body {
          animation: dotToPhoneGrow 0.5s cubic-bezier(0.34, 1.45, 0.64, 1) forwards;
        }
        @keyframes dotToPhoneGrow {
          0% {
            transform: scale(0.25);
            opacity: 0.3;
          }
          65% {
            transform: scale(1.06);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <g className="phone-body">
        <rect x="6" y="2" width="12" height="20" rx="2.5" ry="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" strokeWidth={2} />
      </g>
    </svg>
  );
};

export default SmartphoneIcon;
