import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ShieldLockIcon: React.FC<IconProps> = ({
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
      className={`shieldlock-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .shield-shackle {
          transform-origin: 10px 13px;
          transition: transform 0.38s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .shieldlock-icon:hover .shield-shackle,
        .shieldlock-icon.is-hovered .shield-shackle {
          transform: translateY(-1.5px) rotate(-22deg);
        }
      `}</style>
      {/* Outer shield */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      {/* Shackle: Left leg anchored as hinge, right leg swings out with angle */}
      <path
        className="shield-shackle"
        d="M10 13V10a2 2 0 0 1 4 0v3"
      />
      {/* Lock body centered with ample roof headroom */}
      <rect x="9" y="13" width="6" height="4.5" rx="1" />
    </svg>
  );
};

export default ShieldLockIcon;
