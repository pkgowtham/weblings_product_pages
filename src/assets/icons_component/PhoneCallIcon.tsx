import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const PhoneCallIcon: React.FC<IconProps> = ({
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
      className={`phonecall-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .phonecall-receiver {
          transform-origin: 12px 12px;
          transition: transform 0.3s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .phonecall-wave-1,
        .phonecall-wave-2 {
          transition: opacity 0.3s ease, transform 0.3s ease;
          transform-origin: 14px 8px;
        }
        .phonecall-icon:hover .phonecall-receiver,
        .phonecall-icon.is-hovered .phonecall-receiver {
          animation: phoneCallRing 0.6s ease-in-out infinite alternate;
        }
        .phonecall-icon:hover .phonecall-wave-1,
        .phonecall-icon.is-hovered .phonecall-wave-1 {
          opacity: 1;
          transform: scale(1.15) translate(1px, -1px);
        }
        .phonecall-icon:hover .phonecall-wave-2,
        .phonecall-icon.is-hovered .phonecall-wave-2 {
          opacity: 1;
          transform: scale(1.25) translate(2px, -2px);
          transition-delay: 0.08s;
        }
        @keyframes phoneCallRing {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-14deg) scale(1.05);
          }
          40% {
            transform: rotate(14deg) scale(1.05);
          }
          60% {
            transform: rotate(-10deg);
          }
          80% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
      {/* Handset Receiver */}
      <path
        className="phonecall-receiver"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
      {/* Sound waves emitting from handset */}
      <path
        className="phonecall-wave-1"
        d="M14 2a8 8 0 0 1 7.2 5.5"
        opacity={0.6}
      />
      <path
        className="phonecall-wave-2"
        d="M14 6a4 4 0 0 1 3.6 2.8"
        opacity={0.8}
      />
    </svg>
  );
};

export default PhoneCallIcon;
