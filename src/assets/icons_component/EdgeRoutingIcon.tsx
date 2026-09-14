import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const EdgeRoutingIcon: React.FC<IconProps> = ({
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
      className={`edge-routing-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .routing-flow-1 {
          stroke-dasharray: 6 3;
          transition: stroke-dashoffset 0.3s ease;
        }
        .routing-flow-2 {
          stroke-dasharray: 6 3;
          transition: stroke-dashoffset 0.3s ease;
        }
        .edge-routing-icon:hover .routing-flow-1,
        .edge-routing-icon.is-hovered .routing-flow-1 {
          animation: flowRight 0.8s linear infinite;
        }
        .edge-routing-icon:hover .routing-flow-2,
        .edge-routing-icon.is-hovered .routing-flow-2 {
          animation: flowLeft 0.8s linear infinite;
        }
        @keyframes flowRight {
          from { stroke-dashoffset: 9; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowLeft {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 9; }
        }
      `}</style>
      {/* Top Edge Server Box */}
      <rect x="3" y="3" width="18" height="5.5" rx="1.5" />
      <circle cx="6.5" cy="5.75" r="0.75" fill="currentColor" />
      <circle cx="9.5" cy="5.75" r="0.75" fill="currentColor" />

      {/* Bottom Edge Server Box */}
      <rect x="3" y="15.5" width="18" height="5.5" rx="1.5" />
      <circle cx="6.5" cy="18.25" r="0.75" fill="currentColor" />
      <circle cx="9.5" cy="18.25" r="0.75" fill="currentColor" />

      {/* Clean, Non-Stretched Bidirectional Low-Latency Routing Arrows */}
      {/* Arrow 1: Routing East */}
      <path className="routing-flow-1" d="M6 10.5h11" />
      <polyline points="14.5 8.5 17 10.5 14.5 12.5" />

      {/* Arrow 2: Routing West */}
      <path className="routing-flow-2" d="M18 13.5H7" />
      <polyline points="9.5 11.5 7 13.5 9.5 15.5" />
    </svg>
  );
};

export default EdgeRoutingIcon;
