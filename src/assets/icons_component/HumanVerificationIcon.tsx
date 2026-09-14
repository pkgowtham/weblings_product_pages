import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * HumanVerificationIcon
 * Represents reliable, trusted human oversight & verification.
 * Features a well-proportioned human reviewer paired with an authentic, crisp verification shield and checkmark.
 */
export const HumanVerificationIcon: React.FC<IconProps> = ({
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
      className={`human-verify-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .human-verify-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .reviewer-avatar {
          transform-origin: 7.5px 12px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .trust-shield-group {
          transform-origin: 17px 14px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .trust-check-stroke {
          transition: stroke-width 0.2s ease;
        }
        .human-verify-icon:hover,
        .human-verify-icon.is-hovered {
          transform: translateY(-1px);
        }
        .human-verify-icon:hover .reviewer-avatar,
        .human-verify-icon.is-hovered .reviewer-avatar {
          transform: translateY(-0.5px);
        }
        .human-verify-icon:hover .trust-shield-group,
        .human-verify-icon.is-hovered .trust-shield-group {
          transform: scale(1.06);
        }
        .human-verify-icon:hover .trust-check-stroke,
        .human-verify-icon.is-hovered .trust-check-stroke {
          stroke-width: 2.5;
        }
      `}</style>
      
      {/* Human Reviewer Silhouette (Natural proportions, no long neck gap) */}
      <g className="reviewer-avatar">
        {/* Head: cy=6.5, r=3.3 (bottom of head at y=9.8) */}
        <circle cx="7.5" cy="6.5" r="3.3" />
        {/* Shoulders & Torso: starts naturally at y=13.5 (only 3.7px neck clearance) */}
        <path d="M1.5 19v-1a4.2 4.2 0 0 1 4.2-4.2h3a4.2 4.2 0 0 1 3.2 1.5" />
      </g>

      {/* Crisp, Sharp Security & Trust Verification Shield */}
      <g className="trust-shield-group">
        {/* Classic Sharp Medieval/Security Shield (Flat top, vertical sides, sharp bottom point - NO balloon shape) */}
        <path
          d="M17 8l4 1.5v4c0 3.8-2.5 6.3-4 7.2-1.5-.9-4-3.4-4-7.2v-4L17 8Z"
          fill="rgba(147, 51, 234, 0.12)"
          stroke="currentColor"
          strokeWidth={1.9}
        />
        {/* Bold, Clearly Visible Center Checkmark */}
        <path
          className="trust-check-stroke"
          d="m14.8 13.8 1.5 1.5 3-3"
          strokeWidth={2.2}
        />
      </g>
    </svg>
  );
};

export default HumanVerificationIcon;
