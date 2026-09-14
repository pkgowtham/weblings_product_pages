import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * BulkReassignIcon
 * Represents 1-Click Bulk Reassignment of tasks across developers and sprints.
 * Features stacked ticket cards being transferred in bulk to a destination team member.
 */
export const BulkReassignIcon: React.FC<IconProps> = ({
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
      className={`bulk-reassign-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .bulk-reassign-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .stacked-cards {
          transform-origin: 5px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .transfer-arrow {
          transform-origin: 12px 10px;
          transition: transform 0.3s ease;
        }
        .target-user {
          transform-origin: 18px 14px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bulk-reassign-icon:hover,
        .bulk-reassign-icon.is-hovered {
          transform: translateY(-1px);
        }
        .bulk-reassign-icon:hover .stacked-cards,
        .bulk-reassign-icon.is-hovered .stacked-cards {
          transform: translateX(1.5px) rotate(-2deg);
        }
        .bulk-reassign-icon:hover .transfer-arrow,
        .bulk-reassign-icon.is-hovered .transfer-arrow {
          transform: translateX(2px);
        }
        .bulk-reassign-icon:hover .target-user,
        .bulk-reassign-icon.is-hovered .target-user {
          transform: scale(1.08);
        }
      `}</style>

      {/* Stacked Bulk Task Cards */}
      <g className="stacked-cards">
        {/* Back Card */}
        <path d="M5 3.5h6.5a2 2 0 0 1 2 2v7.5" strokeWidth={1.5} />
        {/* Front Card */}
        <rect x="2" y="6" width="9" height="12" rx="2" fill="rgba(0, 114, 196, 0.08)" />
        <line x1="4.5" y1="9.5" x2="7.5" y2="9.5" strokeWidth={1.8} />
        <line x1="4.5" y1="13" x2="6.5" y2="13" strokeWidth={1.8} />
      </g>

      {/* Fast 1-Click Transfer Arrow */}
      <g className="transfer-arrow" strokeWidth={2.2}>
        <path d="M10.5 10.5h4" />
        <path d="m13 8.5 2 2-2 2" />
      </g>

      {/* Destination Team Member */}
      <g className="target-user">
        <circle cx="18" cy="8" r="2.8" />
        <path d="M13.5 18a4.5 4.5 0 0 1 9 0" />
      </g>
    </svg>
  );
};

export default BulkReassignIcon;
