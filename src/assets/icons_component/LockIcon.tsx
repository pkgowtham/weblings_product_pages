import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const LockIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 28,
  height = 28,
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
      className={`lock-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .lock-shackle {
          transform-origin: 9px 12px;
          transition: transform 0.38s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .lock-icon:hover .lock-shackle,
        .lock-icon.is-hovered .lock-shackle {
          transform: translateY(-2px) rotate(-24deg);
        }
      `}</style>
      {/* Left leg anchored as hinge pin, right leg swings open with angle */}
      <path
        className="lock-shackle"
        d="M9 12V8a3 3 0 0 1 6 0v4"
      />
      {/* Body lowered with ample top clearance */}
      <rect x="6" y="12" width="12" height="9" rx="2" ry="2" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
};

export default LockIcon;
