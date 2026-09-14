import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const StreamlineIcon: React.FC<IconProps> = ({
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
      className={`streamline-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .rocket-fuselage {
          transform-origin: 12px 12px;
          transition: transform 0.38s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .rocket-exhaust {
          transform-origin: 4px 20px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.7;
        }
        .streamline-icon:hover .rocket-fuselage,
        .streamline-icon.is-hovered .rocket-fuselage {
          transform: translate(2px, -3px) rotate(-5deg);
        }
        .streamline-icon:hover .rocket-exhaust,
        .streamline-icon.is-hovered .rocket-exhaust {
          transform: scale(1.3) translate(-1px, 1px);
          opacity: 1;
        }
      `}</style>
      {/* Exhaust Flame */}
      <path
        className="rocket-exhaust"
        d="M4.5 19.5c.8-.8 2-2 2-2s-1.2 1.2-2 2M3 21c1.5-1.5 3-3 3-3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* Rocket Ship Body */}
      <g className="rocket-fuselage">
        <path
          d="M17.42 13.65C23.78 7.29 21.66 2.34 21.66 2.34s-4.95-2.12-11.31 4.24L7.86 6.08c-.65-.13-1.33.08-1.81.55L2 10.69l5 2.14 4.17 4.17 2.14 5 4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49z"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="9" r="2" fill="currentColor" />
      </g>
    </svg>
  );
};

export default StreamlineIcon;
