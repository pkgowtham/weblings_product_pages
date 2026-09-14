import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * HierarchyTreeIcon
 * Represents Epic & Story Hierarchy with nested, indented branch levels (|_ |_ |_).
 * Features a 3-tier indented hierarchy tree with exact elbow connector branches.
 */
export const HierarchyTreeIcon: React.FC<IconProps> = ({
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
      className={`hierarchy-tree-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .hierarchy-tree-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tree-branch-1, .tree-branch-2 {
          stroke-dasharray: 12;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 0.35s ease;
        }
        .tier-epic, .tier-story, .tier-task {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.2s ease;
        }
        .hierarchy-tree-icon:hover,
        .hierarchy-tree-icon.is-hovered {
          transform: translateY(-1px);
        }
        .hierarchy-tree-icon:hover .tier-epic,
        .hierarchy-tree-icon.is-hovered .tier-epic {
          transform: translateX(1px);
          fill: rgba(168, 85, 247, 0.2);
        }
        .hierarchy-tree-icon:hover .tier-story,
        .hierarchy-tree-icon.is-hovered .tier-story {
          transform: translateX(1px);
          fill: rgba(34, 197, 94, 0.2);
        }
        .hierarchy-tree-icon:hover .tier-task,
        .hierarchy-tree-icon.is-hovered .tier-task {
          transform: translateX(1px);
          fill: rgba(0, 114, 196, 0.2);
        }
        .hierarchy-tree-icon:hover .tree-branch-1,
        .hierarchy-tree-icon.is-hovered .tree-branch-1 {
          animation: drawBranch 0.35s ease forwards;
        }
        .hierarchy-tree-icon:hover .tree-branch-2,
        .hierarchy-tree-icon.is-hovered .tree-branch-2 {
          animation: drawBranch 0.35s 0.15s ease forwards;
        }
        @keyframes drawBranch {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Tier 1: Epic Node (Top Level) */}
      <g className="tier-epic">
        <rect x="3" y="2.5" width="7" height="4.5" rx="1.2" fill="rgba(168, 85, 247, 0.1)" strokeWidth={1.8} />
        <line x1="5" y1="4.8" x2="8" y2="4.8" strokeWidth={1.5} />
      </g>

      {/* First Nested Indent Branch (|_) */}
      <path className="tree-branch-1" d="M6.5 7v4.5h2.5" strokeWidth={2} />

      {/* Tier 2: Story Node (Mid Level Indented) */}
      <g className="tier-story">
        <rect x="9" y="8.5" width="7" height="4.5" rx="1.2" fill="rgba(34, 197, 94, 0.1)" strokeWidth={1.8} />
        <line x1="11" y1="10.8" x2="14" y2="10.8" strokeWidth={1.5} />
      </g>

      {/* Second Nested Indent Branch (|_) */}
      <path className="tree-branch-2" d="M12.5 13v4.5h2.5" strokeWidth={2} />

      {/* Tier 3: Task Node (Deepest Level Indented) */}
      <g className="tier-task">
        <rect x="15" y="14.5" width="7" height="4.5" rx="1.2" fill="rgba(0, 114, 196, 0.1)" strokeWidth={1.8} />
        <line x1="17" y1="16.8" x2="20" y2="16.8" strokeWidth={1.5} />
      </g>
    </svg>
  );
};

export default HierarchyTreeIcon;
