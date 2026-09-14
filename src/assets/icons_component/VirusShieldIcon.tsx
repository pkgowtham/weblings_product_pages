import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const VirusShieldIcon: React.FC<IconProps> = ({
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
      className={`virusshield-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .virus-core {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .virus-spikes {
          transform-origin: 12px 12px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .virusshield-icon:hover .virus-core,
        .virusshield-icon.is-hovered .virus-core {
          transform: scale(1.18);
        }
        .virusshield-icon:hover .virus-spikes,
        .virusshield-icon.is-hovered .virus-spikes {
          transform: scale(1.12) rotate(15deg);
        }
      `}</style>
      <circle className="virus-core" cx={12} cy={12} r={4} />
      <g className="virus-spikes">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </g>
    </svg>
  );
};

export default VirusShieldIcon;
