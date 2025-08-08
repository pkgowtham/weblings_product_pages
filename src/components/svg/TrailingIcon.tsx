import * as React from "react";
import type { SVGProps } from "react";
const SvgTrailingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M9.5 6.71a.996.996 0 0 0 0 1.41L13.38 12 9.5 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.91 6.7c-.38-.38-1.02-.38-1.41.01"
    />
  </svg>
);
export default SvgTrailingIcon;
