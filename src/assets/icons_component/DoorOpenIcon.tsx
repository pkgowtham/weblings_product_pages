import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const DoorOpenIcon: React.FC<IconProps> = ({
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
      className={`dooropen-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .door-shackle {
          transform-origin: 8px 12px;
          transition: transform 0.38s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .dooropen-icon:hover .door-shackle,
        .dooropen-icon.is-hovered .door-shackle {
          transform: translateY(-1.5px) rotate(-24deg);
        }
      `}</style>
      {/* Left leg anchored as hinge pin, right leg swings open with angle */}
      <path
        className="door-shackle"
        d="M8 12V8a4 4 0 0 1 8 0v4"
      />
      {/* Lock body lowered with ample ceiling headroom */}
      <rect x="6" y="12" width="12" height="9" rx="2" ry="2" />
      <path d="M12 15v3" />
    </svg>
  );
};

export default DoorOpenIcon;
