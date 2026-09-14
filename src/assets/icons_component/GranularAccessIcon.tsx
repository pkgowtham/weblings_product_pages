import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

/**
 * GranularAccessIcon
 * Represents Granular Access Control (Organization, Team, and User Only permission levels).
 * Features a high-contrast Security Padlock paired with 3 distinct Granular Permission Toggle Switches.
 */
export const GranularAccessIcon: React.FC<IconProps> = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`granular-access-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .granular-access-icon {
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .lock-shackle {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 6.75px 9.5px;
        }
        .toggle-knob-org {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .toggle-knob-team {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .toggle-knob-user {
          transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
        }
        .toggle-track-user {
          transition: opacity 0.25s ease, stroke 0.25s ease;
        }

        .granular-access-icon:hover,
        .granular-access-icon.is-hovered {
          transform: translateY(-1.2px);
        }
        .granular-access-icon:hover .lock-shackle,
        .granular-access-icon.is-hovered .lock-shackle {
          transform: translateY(-1.5px);
        }
        .granular-access-icon:hover .toggle-knob-org,
        .granular-access-icon.is-hovered .toggle-knob-org {
          transform: scale(1.08);
          transform-origin: 19.75px 6.75px;
        }
        .granular-access-icon:hover .toggle-knob-team,
        .granular-access-icon.is-hovered .toggle-knob-team {
          transform: scale(1.08);
          transform-origin: 19.75px 12.75px;
        }
        .granular-access-icon:hover .toggle-knob-user,
        .granular-access-icon.is-hovered .toggle-knob-user {
          transform: translateX(4px);
          opacity: 1;
        }
        .granular-access-icon:hover .toggle-track-user,
        .granular-access-icon.is-hovered .toggle-track-user {
          opacity: 1;
        }
      `}</style>

      {/* Security Access Padlock (Left) */}
      <g>
        {/* Shackle */}
        <path className="lock-shackle" d="M4.25 9.5V6a2.5 2.5 0 0 1 5 0v3.5" strokeWidth={1.8} />
        {/* Lock Body */}
        <rect x="2" y="9.5" width="9.5" height="10.5" rx="2" fill="rgba(0, 114, 196, 0.1)" strokeWidth={1.8} />
        {/* Keyhole */}
        <circle cx="6.75" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
        <path d="M6.75 14.6v1.8" strokeWidth={1.6} />
      </g>

      {/* 3 Granular Permission Toggle Switches (Right: Org Level, Team Level, User Only) */}
      <g>
        {/* Toggle 1: Org Level (Active / ON) */}
        <rect
          x="13.5"
          y="4.5"
          width="8.5"
          height="4.5"
          rx="2.25"
          strokeWidth={1.4}
          fill="rgba(0, 114, 196, 0.1)"
        />
        <circle className="toggle-knob-org" cx="19.75" cy="6.75" r="1.35" fill="currentColor" stroke="none" />

        {/* Toggle 2: Team Level (Active / ON) */}
        <rect
          x="13.5"
          y="10.5"
          width="8.5"
          height="4.5"
          rx="2.25"
          strokeWidth={1.4}
          fill="rgba(0, 114, 196, 0.1)"
        />
        <circle className="toggle-knob-team" cx="19.75" cy="12.75" r="1.35" fill="currentColor" stroke="none" />

        {/* Toggle 3: User Only Level (Restricted -> Toggles ON on Hover) */}
        <rect
          className="toggle-track-user"
          x="13.5"
          y="16.5"
          width="8.5"
          height="4.5"
          rx="2.25"
          strokeWidth={1.4}
          fill="rgba(0, 114, 196, 0.04)"
          opacity={0.65}
        />
        <circle className="toggle-knob-user" cx="15.75" cy="18.75" r="1.35" fill="currentColor" stroke="none" opacity={0.7} />
      </g>
    </svg>
  );
};

export default GranularAccessIcon;
