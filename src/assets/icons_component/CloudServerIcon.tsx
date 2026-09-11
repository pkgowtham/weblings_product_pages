import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CloudServerIcon: React.FC<IconProps> = ({
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
      className={`cloud-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .cloud-body {
          transform-origin: 12px 14px;
        }
        .cloud-icon:hover .cloud-body,
        .cloud-icon.is-hovered .cloud-body {
          animation: cloudTurnTilt 0.5s ease-in-out;
        }
        @keyframes cloudTurnTilt {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(18deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      <path
        className="cloud-body"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  );
};

export default CloudServerIcon;
