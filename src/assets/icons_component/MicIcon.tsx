import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const MicIcon: React.FC<IconProps> = ({
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
      className={`mic-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .mic-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .mic-capsule {
          transform-origin: 12px 7px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .mic-wave {
          transform-origin: 12px 11px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), stroke-width 0.2s ease;
        }
        .mic-icon:hover .mic-capsule, .mic-icon.is-hovered .mic-capsule {
          transform: translateY(-1.5px) rotate(-6deg);
        }
        .mic-icon:hover .mic-wave, .mic-icon.is-hovered .mic-wave {
          transform: scale(1.08);
          stroke-width: 2.3;
        }
      `}</style>
      <path className="mic-capsule" d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path className="mic-wave" d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1={12} x2={12} y1={19} y2={22} />
    </svg>
  );
};

export default MicIcon;
