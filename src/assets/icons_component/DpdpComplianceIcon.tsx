import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const DpdpComplianceIcon: React.FC<IconProps> = ({
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
      className={`dpdp-compliance-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .compliance-doc-body {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .dpdp-compliance-icon:hover .compliance-doc-body,
        .dpdp-compliance-icon.is-hovered .compliance-doc-body {
          transform: translateY(-1.5px);
        }
        .seal-check {
          transform-origin: 12px 12px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .dpdp-compliance-icon:hover .seal-check,
        .dpdp-compliance-icon.is-hovered .seal-check {
          transform: scale(1.15);
        }
        .seal-circle {
          transition: fill 0.3s ease;
        }
        .dpdp-compliance-icon:hover .seal-circle,
        .dpdp-compliance-icon.is-hovered .seal-circle {
          fill: rgba(217, 119, 6, 0.22);
        }
      `}</style>
      {/* Unified Document & Badge Group */}
      <g className="compliance-doc-body">
        {/* Document Outline */}
        <path d="M4.5 4A2 2 0 0 1 6.5 2H14.5l5 5v13a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V4z" />
        <path d="M14.5 2v5h5" />

        {/* Verified Seal Badge Inside Document */}
        <g>
          {/* Ribbon Tails */}
          <path d="M10 16l-1 2.5 3-1 3 1-1-2.5" strokeWidth="1.6" />
          {/* Seal Stamp Circle */}
          <circle className="seal-circle" cx="12" cy="12" r="3.8" fill="rgba(217, 119, 6, 0.12)" />
          {/* Verified Checkmark */}
          <polyline className="seal-check" points="10.2 12 11.5 13.3 13.8 10.7" strokeWidth="1.8" />
        </g>
      </g>
    </svg>
  );
};

export default DpdpComplianceIcon;
