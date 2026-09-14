import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ConversionIcon: React.FC<IconProps> = ({
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
      className={`conversion-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .conversion-cycle {
          transform-origin: 12px 12px;
          transition: transform 0.3s ease;
        }
        .conversion-icon:hover .conversion-cycle,
        .conversion-icon.is-hovered .conversion-cycle {
          animation: conversionSpin 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes conversionSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }
      `}</style>
      <g className="conversion-cycle">
        {/* Top-to-right conversion arc */}
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <polyline points="3 3 3 8 8 8" />

        {/* Bottom-to-left conversion arc */}
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <polyline points="21 21 21 16 16 16" />
      </g>
    </svg>
  );
};

export default ConversionIcon;
