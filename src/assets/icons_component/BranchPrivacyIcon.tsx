import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const BranchPrivacyIcon: React.FC<IconProps> = ({
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
      className={`branch-privacy-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .shield-contour {
          transition: transform 0.3s ease;
        }
        .branch-node {
          transition: transform 0.3s ease, fill-opacity 0.3s ease;
        }
        .branch-privacy-icon:hover .shield-contour,
        .branch-privacy-icon.is-hovered .shield-contour {
          animation: shieldGuarded 0.6s ease-in-out;
        }
        .branch-privacy-icon:hover .branch-node,
        .branch-privacy-icon.is-hovered .branch-node {
          animation: nodesGlow 0.8s infinite alternate ease-in-out;
        }
        @keyframes shieldGuarded {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        @keyframes nodesGlow {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
      {/* Outer Security & Privacy Shield */}
      <path
        className="shield-contour"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
      {/* Internal Branch Architecture Tree (Root node + 2 branch nodes) */}
      <circle className="branch-node" cx="12" cy="8" r="1.8" fill="currentColor" />
      <circle className="branch-node" cx="8.5" cy="14" r="1.8" fill="currentColor" />
      <circle className="branch-node" cx="15.5" cy="14" r="1.8" fill="currentColor" />
      {/* Branching Connectors */}
      <path d="M12 9.8v2.2" />
      <path d="M8.5 14a3.5 3.5 0 0 1 3.5-2" />
      <path d="M15.5 14a3.5 3.5 0 0 0-3.5-2" />
    </svg>
  );
};

export default BranchPrivacyIcon;
