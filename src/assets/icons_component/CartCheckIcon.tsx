import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

export const CartCheckIcon: React.FC<IconProps> = ({
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
      className={`cartcheck-icon ${isHovered ? "is-hovered" : ""} ${className}`}
      {...props}
    >
      <style>{`
        .cart-wrapper {
          transform-origin: 12px 16px;
          transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .cartcheck-icon:hover .cart-wrapper,
        .cartcheck-icon.is-hovered .cart-wrapper {
          transform: rotate(-6deg);
        }
      `}</style>
      <g className="cart-wrapper">
        <circle cx="9" cy="21" r="1" fill="currentColor" />
        <circle cx="20" cy="21" r="1" fill="currentColor" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </g>
    </svg>
  );
};

export default CartCheckIcon;
