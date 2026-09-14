import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const UserIcon: React.FC<IconProps> = ({
  isHovered = false,
  className = "",
  width = 20,
  height = 20,
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
      className={`user-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .user-head {
          transform-origin: 12px 7px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .user-body {
          transform-origin: 12px 18px;
          transition: transform 0.35s cubic-bezier(0.34, 1.45, 0.64, 1);
        }
        .user-icon:hover .user-head,
        .user-icon.is-hovered .user-head {
          transform: translateY(-1.5px) scale(1.1);
        }
        .user-icon:hover .user-body,
        .user-icon.is-hovered .user-body {
          transform: scale(1.04);
        }
      `}</style>
      <circle className="user-head" cx="12" cy="7" r="4" />
      <path className="user-body" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    </svg>
  );
};

export default UserIcon;
