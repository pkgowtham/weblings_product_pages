import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * StarIcon
 * 4-vertex outlined Star SVG icon for Ask AI button and AI feature highlights.
 */
export const StarIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 16,
  height = 16,
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
      className={`star-svg-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .star-svg-icon {
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .star-svg-icon:hover,
        .star-svg-icon.is-hovered {
          transform: scale(1.15) rotate(15deg);
        }
      `}</style>
      {/* 4-vertex outlined AI Star */}
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    </svg>
  );
};

export default StarIcon;
