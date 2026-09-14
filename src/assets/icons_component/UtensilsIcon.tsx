import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const UtensilsIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 16,
  height = 16,
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
      className={`utensils-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .utensil-fork {
          transform-origin: 6px 20px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .utensil-knife {
          transform-origin: 16px 20px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .utensils-icon:hover .utensil-fork,
        .utensils-icon.is-hovered .utensil-fork {
          transform: rotate(-12deg) translateY(-1px);
        }
        .utensils-icon:hover .utensil-knife,
        .utensils-icon.is-hovered .utensil-knife {
          transform: rotate(12deg) translateY(-1px);
        }
      `}</style>
      <g className="utensil-fork">
        <path d="M3 2h6v5a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2z" />
        <line x1="6" y1="10" x2="6" y2="22" />
      </g>
      <g className="utensil-knife">
        <path d="M18 2v8a3 3 0 0 1-3 3V2h3z" />
        <line x1="15" y1="13" x2="15" y2="22" />
      </g>
    </svg>
  );
};

export default UtensilsIcon;
