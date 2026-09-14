import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const ProjectChannelsIcon: React.FC<IconProps> = ({
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
      className={`project-channels-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .channel-bubble {
          transition: transform 0.25s ease;
        }
        .channel-hash {
          transition: opacity 0.25s ease;
        }
        .project-channels-icon:hover .channel-bubble,
        .project-channels-icon.is-hovered .channel-bubble {
          transform: translateY(-1.5px);
        }
        .project-channels-icon:hover .channel-hash,
        .project-channels-icon.is-hovered .channel-hash {
          opacity: 0.85;
        }
      `}</style>
      {/* Real-time Project Chat Bubble Container */}
      <path
        className="channel-bubble"
        d="M21 14a2 2 0 0 1-2 2H7l-4 4V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      />
      {/* Perfectly Proportioned 1:1 Channel Hashtag '#' */}
      <g className="channel-hash">
        {/* Vertical Bars */}
        <line x1="10.5" y1="5.5" x2="9.5" y2="12.5" strokeWidth={1.8} />
        <line x1="14.5" y1="5.5" x2="13.5" y2="12.5" strokeWidth={1.8} />
        {/* Horizontal Bars */}
        <line x1="7.5" y1="7.5" x2="16" y2="7.5" strokeWidth={1.8} />
        <line x1="7" y1="10.5" x2="15.5" y2="10.5" strokeWidth={1.8} />
      </g>
    </svg>
  );
};

export default ProjectChannelsIcon;
