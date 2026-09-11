import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const BoltIcon: React.FC<IconProps> = ({
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
      className={`bolt-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .bolt-path {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.3s ease;
        }
        .bolt-icon:hover .bolt-path, .bolt-icon.is-hovered .bolt-path {
          transform: scale(1.15) rotate(-5deg);
          fill: currentColor;
          fill-opacity: 0.15;
        }
      `}</style>
      <path className="bolt-path" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
};

export default BoltIcon;
