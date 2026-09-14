import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const TicketIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 20,
  height = 20,
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
      className={`ticket-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .ticket-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ticket-notch {
          transition: transform 0.25s ease;
        }
        .ticket-icon:hover, .ticket-icon.is-hovered {
          transform: translateY(-1px) rotate(-3deg);
        }
      `}</style>
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path className="ticket-notch" d="M13 5v2" strokeDasharray="2 2" />
      <path className="ticket-notch" d="M13 17v2" strokeDasharray="2 2" />
      <path d="M9 12h6" />
    </svg>
  );
};

export default TicketIcon;
