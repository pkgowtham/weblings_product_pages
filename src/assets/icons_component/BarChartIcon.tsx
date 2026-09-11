import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const BarChartIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 28,
  height = 28,
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
      className={`barchart-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .barchart-bar-1 {
          transform-origin: 7px 19px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .barchart-bar-2 {
          transform-origin: 12px 19px;
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
        }
        .barchart-bar-3 {
          transform-origin: 17px 19px;
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
        }
        .barchart-icon:hover .barchart-bar-1, .barchart-icon.is-hovered .barchart-bar-1 {
          transform: scaleY(1.35);
        }
        .barchart-icon:hover .barchart-bar-2, .barchart-icon.is-hovered .barchart-bar-2 {
          transform: scaleY(1.22);
        }
        .barchart-icon:hover .barchart-bar-3, .barchart-icon.is-hovered .barchart-bar-3 {
          transform: scaleY(1.12);
        }
      `}</style>
      <path className="barchart-bar-1" d="M6 20v-6" />
      <path className="barchart-bar-2" d="M12 20V10" />
      <path className="barchart-bar-3" d="M18 20V4" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
};

export default BarChartIcon;
