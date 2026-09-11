import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const MessageSquareIcon: React.FC<IconProps> = ({
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
      className={`message-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .dot-1 {
          transform-origin: 8px 12px;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .dot-2 {
          transform-origin: 12px 12px;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) 0.08s;
        }
        .dot-3 {
          transform-origin: 16px 12px;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) 0.16s;
        }
        .message-icon:hover .dot-1, .message-icon.is-hovered .dot-1 {
          transform: translateY(-2.5px);
        }
        .message-icon:hover .dot-2, .message-icon.is-hovered .dot-2 {
          transform: translateY(-2.5px);
        }
        .message-icon:hover .dot-3, .message-icon.is-hovered .dot-3 {
          transform: translateY(-2.5px);
        }
      `}</style>
      <path
        d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
      {/* Smaller dots with the same wave bounce animation */}
      <circle className="dot-1" cx="8" cy="12" r="0.75" fill="currentColor" />
      <circle className="dot-2" cx="12" cy="12" r="0.75" fill="currentColor" />
      <circle className="dot-3" cx="16" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
};

export default MessageSquareIcon;
