import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * GuestAccessIcon
 * Represents free external client and stakeholder guest access.
 * Features a client collaborator avatar paired with an external guest credential pass badge.
 */
export const GuestAccessIcon: React.FC<IconProps> = ({
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
      className={`guest-access-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .guest-access-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .guest-pass {
          transform-origin: 18px 8px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .guest-user-head {
          transform-origin: 8px 7px;
          transition: transform 0.3s ease;
        }
        .guest-access-icon:hover,
        .guest-access-icon.is-hovered {
          transform: translateY(-1px);
        }
        .guest-access-icon:hover .guest-user-head,
        .guest-access-icon.is-hovered .guest-user-head {
          transform: scale(1.05);
        }
        .guest-access-icon:hover .guest-pass,
        .guest-access-icon.is-hovered .guest-pass {
          animation: badgeSwing 0.6s ease-in-out;
        }
        @keyframes badgeSwing {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg) translateY(-1px); }
          55% { transform: rotate(6deg) translateY(-1px); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      {/* Guest User Silhouette */}
      <circle className="guest-user-head" cx="8" cy="7" r="4" />
      <path d="M2 20a6 6 0 0 1 12 0" />

      {/* External Guest Pass / Credential Badge */}
      <g className="guest-pass">
        {/* Lanyard Ring / Clip */}
        <path d="M18 7v3" strokeWidth={1.5} />
        {/* Guest Badge Card */}
        <rect x="14" y="10" width="8" height="11" rx="1.5" fill="rgba(0, 114, 196, 0.08)" />
        {/* Badge Photo dot & line */}
        <circle cx="18" cy="13.5" r="1.2" fill="currentColor" />
        <line x1="16" y1="17.5" x2="20" y2="17.5" strokeWidth={1.8} />
      </g>
    </svg>
  );
};

export default GuestAccessIcon;
