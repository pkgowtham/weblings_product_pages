import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * InstantIntegrationIcon
 * Represents seamless, instant integration of approved tickets into the active sprint.
 * Clean, solid sprint board column with a ticket sliding directly into the sprint lane.
 */
export const InstantIntegrationIcon: React.FC<IconProps> = ({
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
      className={`instant-integration-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .instant-integration-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .incoming-ticket {
          transform-origin: 6.5px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .integration-arrow {
          transform-origin: 12px 12px;
          transition: transform 0.3s ease;
        }
        .sprint-column {
          transform-origin: 18px 12px;
          transition: transform 0.3s ease;
        }
        .instant-integration-icon:hover,
        .instant-integration-icon.is-hovered {
          transform: translateY(-1px);
        }
        .instant-integration-icon:hover .incoming-ticket,
        .instant-integration-icon.is-hovered .incoming-ticket {
          transform: translateX(2.5px);
        }
        .instant-integration-icon:hover .integration-arrow,
        .instant-integration-icon.is-hovered .integration-arrow {
          transform: translateX(1.5px);
        }
      `}</style>

      {/* Solid Sprint Column Lane */}
      <g className="sprint-column">
        <rect x="14" y="3.5" width="7.5" height="17" rx="2" strokeWidth={2} />
        {/* Active Sprint Cards in Column */}
        <rect x="16" y="6" width="3.5" height="4" rx="0.8" fill="rgba(22, 163, 74, 0.2)" strokeWidth={1.5} />
        <rect x="16" y="13" width="3.5" height="4" rx="0.8" strokeWidth={1.5} />
      </g>

      {/* Incoming Approved Ticket (Solid, Clear) */}
      <g className="incoming-ticket">
        <rect x="2.5" y="6" width="8" height="12" rx="2" strokeWidth={2} fill="rgba(22, 163, 74, 0.1)" />
        <line x1="5" y1="9.5" x2="8" y2="9.5" strokeWidth={1.8} />
        <line x1="5" y1="13.5" x2="7" y2="13.5" strokeWidth={1.8} />
      </g>

      {/* Solid Integration Merge Arrow */}
      <g className="integration-arrow" strokeWidth={2.2}>
        <path d="M10.5 12h3" />
        <path d="m12 10.5 1.5 1.5-1.5 1.5" />
      </g>
    </svg>
  );
};

export default InstantIntegrationIcon;
