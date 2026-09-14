import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const FolderZipIcon: React.FC<IconProps> = ({
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
      className={`folderzip-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .folder-wrapper {
          transform-origin: 12px 14px;
          transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .folderzip-icon:hover .folder-wrapper,
        .folderzip-icon.is-hovered .folder-wrapper {
          transform: rotate(-6deg);
        }
      `}</style>
      <g className="folder-wrapper">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </g>
    </svg>
  );
};

export default FolderZipIcon;
