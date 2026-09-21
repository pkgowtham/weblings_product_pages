import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const EndToEndEncryptionIcon: React.FC<IconProps> = ({
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
      className={`e2e-encryption-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .lock-arm {
          transform-origin: 6px 11px;
          transition: transform 0.38s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .crypto-key {
          transform-origin: 18px 14px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .e2e-encryption-icon:hover .lock-arm,
        .e2e-encryption-icon.is-hovered .lock-arm {
          transform: translateY(-1.5px) rotate(-18deg);
        }
        .e2e-encryption-icon:hover .crypto-key,
        .e2e-encryption-icon.is-hovered .crypto-key {
          transform: rotate(-15deg) scale(1.08);
        }
      `}</style>
      {/* Padlock Body */}
      <rect x="3" y="11" width="10" height="9" rx="2" />
      
      {/* Keyhole inside lock */}
      <circle cx="8" cy="15" r="0.75" fill="currentColor" />
      <path d="M8 15.75v1.75" strokeWidth="1.5" />

      {/* Lock Shackle */}
      <path
        className="lock-arm"
        d="M5.5 11V7.5a2.5 2.5 0 0 1 5 0V11"
      />

      {/* Cryptographic Key */}
      <g className="crypto-key">
        {/* Key Bow */}
        <circle cx="17.5" cy="7.5" r="2.5" />
        {/* Key Shaft */}
        <path d="M17.5 10v9.5" />
        {/* Key Bits */}
        <path d="M17.5 16h2.5" strokeWidth="1.8" />
        <path d="M17.5 18.5h2" strokeWidth="1.8" />
      </g>
    </svg>
  );
};

export default EndToEndEncryptionIcon;
