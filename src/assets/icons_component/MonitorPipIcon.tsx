import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const MonitorPipIcon: React.FC<IconProps> = ({
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
      className={`monitor-pip-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .pip-window {
          transform-origin: 15.5px 10.5px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .monitor-pip-icon:hover .pip-window,
        .monitor-pip-icon.is-hovered .pip-window {
          transform: scale(1.12);
        }
      `}</style>
      {/* Primary Display Screen */}
      <rect x="2" y="3" width="20" height="14" rx="2" />
      {/* Monitor Stand Base */}
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />

      {/* Floating Picture-in-Picture Window with Locked Internal Play Button */}
      <g className="pip-window">
        <rect
          x="11"
          y="7"
          width="9"
          height="7"
          rx="1.5"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth={1.8}
        />
        <polygon
          points="14.5,9.25 17.25,10.5 14.5,11.75"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export default MonitorPipIcon;
