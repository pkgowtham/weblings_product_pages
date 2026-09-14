import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const MailIcon: React.FC<IconProps> = ({
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
      className={`mail-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .mail-wrapper {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .mail-flap {
          transform-origin: 12px 7px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .mail-icon:hover .mail-wrapper,
        .mail-icon.is-hovered .mail-wrapper {
          transform: translateY(-2px) scale(1.04);
        }
        .mail-icon:hover .mail-flap,
        .mail-icon.is-hovered .mail-flap {
          transform: translateY(-1px);
        }
      `}</style>
      <g className="mail-wrapper">
        {/* Crisp envelope body */}
        <rect x="2" y="4" width="20" height="16" rx="2" />
        {/* Envelope fold flap */}
        <path className="mail-flap" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </g>
    </svg>
  );
};

export default MailIcon;
