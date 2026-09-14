import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * WorkflowConfigIcon
 * Represents Custom Workflow Configuration (states, branching permissions, and custom fields).
 * Features a crystal-clear, branching workflow state diagram with silky-smooth micro-interactions (zero jerk).
 */
export const WorkflowConfigIcon: React.FC<IconProps> = ({
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
      className={`workflow-config-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .workflow-config-icon {
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .wf-node {
          transition: fill 0.25s ease, stroke 0.25s ease;
        }
        .wf-flow-arrow {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .workflow-config-icon:hover,
        .workflow-config-icon.is-hovered {
          transform: translateY(-1.2px);
        }
        .workflow-config-icon:hover .wf-node,
        .workflow-config-icon.is-hovered .wf-node {
          fill: rgba(0, 114, 196, 0.1);
        }
        .workflow-config-icon:hover .wf-node-active,
        .workflow-config-icon.is-hovered .wf-node-active {
          fill: rgba(34, 197, 94, 0.14);
        }
        .workflow-config-icon:hover .wf-flow-arrow,
        .workflow-config-icon.is-hovered .wf-flow-arrow {
          transform: translateX(1px);
        }
      `}</style>

      {/* State Node 1: Initial/To Do State (Top-Left) */}
      <rect className="wf-node" x="3" y="3" width="7" height="7" rx="1.8" />
      <line x1="5.5" y1="6.5" x2="7.5" y2="6.5" strokeWidth={1.6} />

      {/* Main Horizontal Transition Arrow to State Node 2 */}
      <g className="wf-flow-arrow">
        <path d="M10 6.5h4" />
        <path d="m12.5 5 1.5 1.5-1.5 1.5" strokeWidth={1.6} />
      </g>

      {/* State Node 2: In-Progress / Review State (Top-Right) */}
      <rect className="wf-node" x="14" y="3" width="7" height="7" rx="1.8" />
      <line x1="16.5" y1="6.5" x2="18.5" y2="6.5" strokeWidth={1.6} />

      {/* Custom Branching Flow Down to State Node 3 */}
      <path d="M6.5 10v4a3 3 0 0 0 3 3h4.5" />
      <g className="wf-flow-arrow">
        <path d="m12.5 15.5 1.5 1.5-1.5 1.5" strokeWidth={1.6} />
      </g>

      {/* State Node 3: Custom Deployed / Completed State (Bottom-Right) */}
      <rect className="wf-node wf-node-active" x="14" y="14" width="7" height="7" rx="1.8" />
      <path d="m16.2 17.5 1 1 1.8-1.8" strokeWidth={1.6} />
    </svg>
  );
};

export default WorkflowConfigIcon;
