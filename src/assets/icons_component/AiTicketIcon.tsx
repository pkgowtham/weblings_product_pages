import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * AiTicketIcon
 * Represents AI Auto-Ticket Creation.
 * Features a structured sprint ticket card with generative AI sparks dynamically generating the ticket.
 */
export const AiTicketIcon: React.FC<IconProps> = ({
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
      className={`ai-ticket-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .ai-ticket-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ai-sparkle-main {
          transform-origin: 19px 5px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ai-sparkle-mini {
          transform-origin: 14px 2px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ticket-body {
          transition: transform 0.3s ease;
        }
        .ai-ticket-icon:hover,
        .ai-ticket-icon.is-hovered {
          transform: translateY(-1px);
        }
        .ai-ticket-icon:hover .ai-sparkle-main,
        .ai-ticket-icon.is-hovered .ai-sparkle-main {
          transform: rotate(45deg) scale(1.2);
        }
        .ai-ticket-icon:hover .ai-sparkle-mini,
        .ai-ticket-icon.is-hovered .ai-sparkle-mini {
          transform: scale(1.3);
        }
        .ai-ticket-icon:hover .ticket-line,
        .ai-ticket-icon.is-hovered .ticket-line {
          animation: lineWrite 0.5s ease forwards;
        }
        @keyframes lineWrite {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Ticket Base Container */}
      <path
        className="ticket-body"
        d="M3 6a2 2 0 0 1 2-2h8.5M3 6v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12"
      />
      <path d="M3 11a2 2 0 0 1 2-2" strokeDasharray="2 2" />

      {/* Structured Ticket Content Lines */}
      <line className="ticket-line" x1="7" y1="9" x2="11" y2="9" strokeWidth={1.8} strokeDasharray="12" />
      <line className="ticket-line" x1="7" y1="13" x2="15" y2="13" strokeWidth={1.8} strokeDasharray="12" />
      <line className="ticket-line" x1="7" y1="17" x2="12" y2="17" strokeWidth={1.8} strokeDasharray="12" />

      {/* AI Generative Sparkles */}
      <path
        className="ai-sparkle-main"
        d="M19 1.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"
        fill="currentColor"
        strokeWidth={1}
      />
      <circle className="ai-sparkle-mini" cx="14" cy="2" r="1" fill="currentColor" />
    </svg>
  );
};

export default AiTicketIcon;
