import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
    {...props}
  >
    <g
      stroke="#3C69D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
    >
      <path d="M11.709 6.333c0 3.329-3.693 6.796-4.933 7.866a.67.67 0 0 1-.801 0c-1.24-1.07-4.933-4.537-4.933-7.866a5.333 5.333 0 0 1 10.667 0" />
      <path d="M6.375 8.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </g>
  </svg>
);
export default SvgLocation;
