import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ShieldCheckIcon: React.FC<IconProps> = ({
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
      className={`shieldcheck-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .shield-outline {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .shield-check {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .shieldcheck-icon:hover .shield-outline,
        .shieldcheck-icon.is-hovered .shield-outline {
          transform: scale(1.05);
        }
        .shieldcheck-icon:hover .shield-check,
        .shieldcheck-icon.is-hovered .shield-check {
          transform: scale(1.2);
        }
      `}</style>
      <path
        className="shield-outline"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
      <polyline className="shield-check" points="9 12 11 14 15 10" strokeWidth={2.5} />
    </svg>
  );
};

export default ShieldCheckIcon;
