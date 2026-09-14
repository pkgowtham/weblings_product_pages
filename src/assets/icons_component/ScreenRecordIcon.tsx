import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ScreenRecordIcon: React.FC<IconProps> = ({
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
      className={`screen-record-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .rec-dot {
          transition: opacity 0.2s ease;
        }
        .screen-record-icon:hover .rec-dot,
        .screen-record-icon.is-hovered .rec-dot {
          animation: recBlink 0.75s infinite ease-in-out;
        }
        @keyframes recBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.15;
          }
        }
      `}</style>
      {/* Screen Frame */}
      <rect x="2" y="3" width="20" height="14" rx="2" />
      {/* Stand Base */}
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />

      {/* Crisp Solid Red REC Dot with Pure Blink Animation */}
      <circle className="rec-dot" cx="12" cy="10" r="3" fill="#E11D48" stroke="none" />
    </svg>
  );
};

export default ScreenRecordIcon;
