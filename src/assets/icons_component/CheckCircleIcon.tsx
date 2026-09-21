import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CheckCircleIcon: React.FC<IconProps> = ({
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
      className={`checkcircle-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .checkcircle-tick {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .checkcircle-icon:hover .checkcircle-tick,
        .checkcircle-icon.is-hovered .checkcircle-tick {
          transform: scale(1.18);
        }
        .checkcircle-ring {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .checkcircle-icon:hover .checkcircle-ring,
        .checkcircle-icon.is-hovered .checkcircle-ring {
          transform: scale(1.04);
        }
      `}</style>
      <circle className="checkcircle-ring" cx="12" cy="12" r="9" />
      <path className="checkcircle-tick" d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default CheckCircleIcon;
