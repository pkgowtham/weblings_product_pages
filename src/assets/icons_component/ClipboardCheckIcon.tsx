import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ClipboardCheckIcon: React.FC<IconProps> = ({
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
      className={`clipboard-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .clipboard-check {
          clip-path: inset(0 0 0 0);
          transition: clip-path 0.35s ease;
        }
        .clipboard-icon:hover .clipboard-check,
        .clipboard-icon.is-hovered .clipboard-check {
          animation: checkGrowLeftRight 0.42s cubic-bezier(0.2, 0.9, 0.4, 1) forwards;
        }
        @keyframes checkGrowLeftRight {
          0% {
            clip-path: inset(0 100% 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
      <g className="clipboard-frame">
        <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </g>
      <path className="clipboard-check" d="m9 14 2 2 4-4" />
    </svg>
  );
};

export default ClipboardCheckIcon;
