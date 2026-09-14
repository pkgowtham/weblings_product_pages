import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const TargetIcon: React.FC<IconProps> = ({
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
      className={`target-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .target-center {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .target-middle {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .target-outer {
          transform-origin: 12px 12px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .target-icon:hover .target-center,
        .target-icon.is-hovered .target-center {
          transform: scale(1.4);
        }
        .target-icon:hover .target-middle,
        .target-icon.is-hovered .target-middle {
          transform: scale(1.15);
        }
        .target-icon:hover .target-outer,
        .target-icon.is-hovered .target-outer {
          transform: scale(1.05);
          opacity: 0.9;
        }
      `}</style>
      <circle className="target-outer" cx="12" cy="12" r="10" />
      <circle className="target-middle" cx="12" cy="12" r="6" />
      <circle className="target-center" cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
};

export default TargetIcon;
