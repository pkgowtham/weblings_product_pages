import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const SimulcastVideoIcon: React.FC<IconProps> = ({
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
      className={`simulcast-video-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .camera-body {
          transition: transform 0.3s ease;
        }
        .stream-layer-1 {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .stream-layer-2 {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .stream-layer-3 {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .simulcast-video-icon:hover .camera-body,
        .simulcast-video-icon.is-hovered .camera-body {
          animation: cameraBounce 0.6s ease-in-out;
        }
        .simulcast-video-icon:hover .stream-layer-1,
        .simulcast-video-icon.is-hovered .stream-layer-1 {
          animation: streamPulse 1.2s infinite 0.1s ease-in-out;
        }
        .simulcast-video-icon:hover .stream-layer-2,
        .simulcast-video-icon.is-hovered .stream-layer-2 {
          animation: streamPulse 1.2s infinite 0.25s ease-in-out;
        }
        .simulcast-video-icon:hover .stream-layer-3,
        .simulcast-video-icon.is-hovered .stream-layer-3 {
          animation: streamPulse 1.2s infinite 0.4s ease-in-out;
        }
        @keyframes cameraBounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        @keyframes streamPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.9); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
      {/* Video Camera Body */}
      <path
        className="camera-body"
        d="M15 10l5-3v10l-5-3v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2z"
      />
      {/* Adaptive Simulcast Signal Streams (High / Med / Low) */}
      <path className="stream-layer-1" d="M6 10v4" strokeWidth={2.5} />
      <path className="stream-layer-2" d="M9 9v6" strokeWidth={2.5} />
      <path className="stream-layer-3" d="M12 11v2" strokeWidth={2.5} />
    </svg>
  );
};

export default SimulcastVideoIcon;
