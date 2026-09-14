import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * ImmutableHistoryIcon
 * Represents the immutable audit trail and permanent history log.
 * Features a circular history rewind arrow with a centered, permanent immutable lock seal.
 */
export const ImmutableHistoryIcon: React.FC<IconProps> = ({
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
      className={`immutable-history-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .immutable-history-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .history-circle-arrow {
          transform-origin: 12px 12px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .immutable-lock {
          transform-origin: 12px 13px;
          transition: transform 0.3s ease;
        }
        .immutable-history-icon:hover,
        .immutable-history-icon.is-hovered {
          transform: translateY(-1px);
        }
        .immutable-history-icon:hover .history-circle-arrow,
        .immutable-history-icon.is-hovered .history-circle-arrow {
          transform: rotate(-35deg);
        }
        .immutable-history-icon:hover .immutable-lock,
        .immutable-history-icon.is-hovered .immutable-lock {
          transform: scale(1.08);
        }
      `}</style>

      {/* Circular History Rewind Arrow */}
      <g className="history-circle-arrow">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </g>

      {/* Centered Immutable Security Lock */}
      <g className="immutable-lock">
        {/* Shackle */}
        <path d="M10 11V9.5a2 2 0 0 1 4 0V11" strokeWidth={1.8} />
        {/* Lock Body */}
        <rect x="8.5" y="11" width="7" height="6" rx="1.5" fill="rgba(0, 114, 196, 0.1)" strokeWidth={2} />
        {/* Keyhole dot */}
        <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
};

export default ImmutableHistoryIcon;
