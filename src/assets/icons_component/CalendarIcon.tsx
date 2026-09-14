import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CalendarIcon: React.FC<IconProps> = ({
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
      className={`calendar-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .calendar-body {
          transform-origin: 12px 14px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .calendar-pins {
          transform-origin: 12px 4px;
          transition: transform 0.25s ease;
        }
        .calendar-dates {
          transition: opacity 0.25s ease, transform 0.3s ease;
        }
        .calendar-icon:hover .calendar-body,
        .calendar-icon.is-hovered .calendar-body {
          transform: translateY(-1.5px) scale(1.02);
        }
        .calendar-icon:hover .calendar-pins,
        .calendar-icon.is-hovered .calendar-pins {
          transform: translateY(-2px);
        }
        .calendar-icon:hover .calendar-dates,
        .calendar-icon.is-hovered .calendar-dates {
          transform: scale(1.1);
          transform-origin: 12px 16px;
        }
      `}</style>
      <g className="calendar-pins">
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2.5} />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2.5} />
      </g>
      <g className="calendar-body">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <g className="calendar-dates">
          <circle cx="8" cy="14" r="1" fill="currentColor" />
          <circle cx="12" cy="14" r="1" fill="currentColor" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
          <circle cx="8" cy="18" r="1" fill="currentColor" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <circle cx="16" cy="18" r="1" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
};

export default CalendarIcon;
