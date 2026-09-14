import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const PlaneIcon: React.FC<IconProps> = ({
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
      className={`plane-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .plane-fuselage {
          transform-origin: 12px 12px;
          transition: transform 0.4s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .plane-trail {
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.35s ease;
          transform: translate(-2px, 2px);
        }
        .plane-icon:hover .plane-fuselage,
        .plane-icon.is-hovered .plane-fuselage {
          transform: translate(2.5px, -2.5px) rotate(-6deg);
        }
        .plane-icon:hover .plane-trail,
        .plane-icon.is-hovered .plane-trail {
          opacity: 0.8;
          transform: translate(0, 0);
        }
      `}</style>
      {/* Contrail / flight path */}
      <line className="plane-trail" x1="4" y1="20" x2="8" y2="16" strokeDasharray="2 2" strokeWidth={1.5} />
      {/* Airplane */}
      <path
        className="plane-fuselage"
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-.9 1.1 0 .4.2.8.5 1L6 12l-2 3.5c-.2.3-.1.7.2.9.2.1.4.2.6.2.2 0 .4-.1.5-.2L9 14l4 4 .3 3.6c.1.5.5.9 1.1.9.4 0 .8-.2 1-.5l.4-.8z"
      />
    </svg>
  );
};

export default PlaneIcon;
