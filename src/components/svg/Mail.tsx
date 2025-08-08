import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mail_svg__a)">
      <path
        stroke="#3C69D7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="m14.708 4.667-5.98 3.8a1.29 1.29 0 0 1-1.373 0l-5.98-3.8m1.333-2h10.667c.736 0 1.333.596 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H2.708A1.333 1.333 0 0 1 1.375 12V4c0-.737.597-1.333 1.333-1.333"
      />
    </g>
    <defs>
      <clipPath id="mail_svg__a">
        <path fill="#fff" d="M.042 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMail;
