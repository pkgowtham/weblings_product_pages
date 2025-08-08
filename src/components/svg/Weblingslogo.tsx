import * as React from "react";
import type { SVGProps } from "react";
const SvgWeblingslogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#weblingslogo_svg__a)">
      <path
        fill="#3395FF"
        d="M34.183 3.026a.366.366 0 0 0-.134-.5l-1.109-.64a7.04 7.04 0 0 0-9.618 2.578L16.898 15.59a4.343 4.343 0 1 0 7.523 4.344z"
      />
      <path
        fill="#3395FF"
        d="M-.088 3.026a.366.366 0 0 1 .134-.5l1.109-.64a7.04 7.04 0 0 1 9.618 2.578l6.424 11.126a4.344 4.344 0 0 1-7.523 4.344z"
      />
      <path
        fill="#0070E8"
        fillRule="evenodd"
        d="M20.35 8.754a4.345 4.345 0 0 1 .37 4.887L17.106 19.9q-.068.118-.143.232a4 4 0 0 1-.109-.179l-3.613-6.258a4.344 4.344 0 0 1 7.108-4.941"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="weblingslogo_svg__a">
        <path fill="#fff" d="M0 .182h34v21.636H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeblingslogo;
