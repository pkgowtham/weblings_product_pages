import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CodeSearchIcon: React.FC<IconProps> = ({
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
      className={`codesearch-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .glass-group {
          transform-origin: 11px 11px;
          transition: transform 0.3s ease;
        }
        .codesearch-icon:hover .glass-group,
        .codesearch-icon.is-hovered .glass-group {
          animation: smallOrbitScan 0.7s ease-in-out;
        }
        @keyframes smallOrbitScan {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(1.5px, -1.2px);
          }
          50% {
            transform: translate(0, -2px);
          }
          75% {
            transform: translate(-1.4px, -0.8px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
      <g className="glass-group">
        <path d="m18 16 4 4" />
        <circle cx={11} cy={11} r={8} />
      </g>
      <path d="m8 9-2 2 2 2" />
      <path d="m14 9 2 2-2 2" />
    </svg>
  );
};

export default CodeSearchIcon;
