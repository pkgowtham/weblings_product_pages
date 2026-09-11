import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * White-Glove Human Engineer Migration Icon
 * (Replaces distorted hand with a clean Human Engineer / Concierge Support Headset)
 */
export const HandshakeIcon: React.FC<IconProps> = ({
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
      className={`support-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .support-headset {
          transform-origin: 12px 14px;
        }
        .support-icon:hover .support-headset,
        .support-icon.is-hovered .support-headset {
          animation: headsetNod 0.5s ease-in-out;
        }
        @keyframes headsetNod {
          0% { transform: rotate(0deg); }
          30% { transform: rotate(-10deg) scale(1.05); }
          70% { transform: rotate(6deg) scale(1.03); }
          100% { transform: rotate(0deg) scale(1); }
        }
      `}</style>
      <g className="support-headset">
        {/* Headband */}
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        {/* Right earcup */}
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        {/* Left earcup */}
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </g>
    </svg>
  );
};

export default HandshakeIcon;
