import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CloudServerIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 24,
  height = 24,
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
      className={`cloud-server-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .cloud-body {
          transform-origin: 12px 7px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cloud-server-icon:hover .cloud-body,
        .cloud-server-icon.is-hovered .cloud-body {
          transform: translateY(-1.5px);
        }
        .server-rack {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .data-link {
          stroke-dasharray: 2 2;
          transition: stroke-dashoffset 0.3s ease;
        }
        .cloud-server-icon:hover .data-link,
        .cloud-server-icon.is-hovered .data-link {
          animation: cloudDataFlow 0.5s linear infinite;
        }
        .server-led {
          transition: fill 0.3s ease;
        }
        .cloud-server-icon:hover .server-led,
        .cloud-server-icon.is-hovered .server-led {
          fill: #10B981;
        }
        @keyframes cloudDataFlow {
          from { stroke-dashoffset: 4; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      {/* Cloud Header */}
      <path
        className="cloud-body"
        d="M5 12h14a3.5 3.5 0 0 0-1-6.8 5 5 0 0 0-9.2-1.2A4 4 0 0 0 5 12z"
      />
      {/* Dynamic Data Transfer Link between Cloud & Server */}
      <line className="data-link" x1="12" y1="12" x2="12" y2="15" />
      {/* Server Rack Box */}
      <rect className="server-rack" x="3" y="15" width="18" height="6" rx="1.5" />
      {/* Server Activity Indicator Lights */}
      <circle className="server-led" cx="6.5" cy="18" r="0.75" fill="currentColor" />
      <circle cx="9.5" cy="18" r="0.75" fill="currentColor" />
      <line x1="13" y1="18" x2="18" y2="18" />
    </svg>
  );
};

export default CloudServerIcon;
