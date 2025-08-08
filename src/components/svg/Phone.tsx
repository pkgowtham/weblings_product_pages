import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#phone_svg__a)">
      <path
        stroke="#3C69D7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M14.709 11.28v2a1.33 1.33 0 0 1-1.453 1.333 13.2 13.2 0 0 1-5.754-2.047 13 13 0 0 1-4-4 13.2 13.2 0 0 1-2.046-5.78 1.333 1.333 0 0 1 1.326-1.453h2A1.33 1.33 0 0 1 6.116 2.48a8.6 8.6 0 0 0 .466 1.873 1.33 1.33 0 0 1-.3 1.407l-.846.846a10.67 10.67 0 0 0 4 4l.846-.846a1.33 1.33 0 0 1 1.407-.3 8.6 8.6 0 0 0 1.873.466 1.333 1.333 0 0 1 1.147 1.354"
      />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <path fill="#fff" d="M.042 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhone;
