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
          transform-origin: 11px 13px;
        }
        .checkcircle-icon:hover .checkcircle-tick,
        .checkcircle-icon.is-hovered .checkcircle-tick {
          animation: tickTurnLeft 0.5s ease-in-out;
        }
        @keyframes tickTurnLeft {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      <circle cx="12" cy="12" r="9" />
      <path className="checkcircle-tick" d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default CheckCircleIcon;
