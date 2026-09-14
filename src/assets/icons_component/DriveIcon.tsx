import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const DriveIcon: React.FC<IconProps> = ({
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
      className={`drive-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .drive-cloud {
          transform-origin: 12px 13px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .drive-arrow {
          transform-origin: 12px 14px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .drive-icon:hover .drive-cloud,
        .drive-icon.is-hovered .drive-cloud {
          transform: translateY(-1.5px) scale(1.04);
        }
        .drive-icon:hover .drive-arrow,
        .drive-icon.is-hovered .drive-arrow {
          transform: translateY(-2px);
        }
      `}</style>
      <path
        className="drive-cloud"
        d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      />
      <path
        className="drive-arrow"
        d="M12 12v9m0-9-3 3m3-3 3 3"
      />
    </svg>
  );
};

export default DriveIcon;
