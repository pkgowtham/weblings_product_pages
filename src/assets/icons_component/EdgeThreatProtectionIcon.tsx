import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const EdgeThreatProtectionIcon: React.FC<IconProps> = ({
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
      className={`edge-threat-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .shield-barrier {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .globe-core {
          transform-origin: 12px 10.5px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .edge-threat-icon:hover .shield-barrier,
        .edge-threat-icon.is-hovered .shield-barrier {
          transform: scale(1.05);
        }
        .edge-threat-icon:hover .globe-core,
        .edge-threat-icon.is-hovered .globe-core {
          transform: scale(1.12);
        }
      `}</style>
      {/* Outer Threat Protection Shield */}
      <path
        className="shield-barrier"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />

      {/* Global Edge Network Sphere inside Shield */}
      <g className="globe-core">
        <circle cx="12" cy="10.5" r="4.5" />
        <line x1="7.5" y1="10.5" x2="16.5" y2="10.5" />
        <ellipse cx="12" cy="10.5" rx="1.8" ry="4.5" />
      </g>
    </svg>
  );
};

export default EdgeThreatProtectionIcon;
