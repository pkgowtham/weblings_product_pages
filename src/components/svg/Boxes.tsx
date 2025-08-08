import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#BF392F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.259}
      d="m24 38-7.94 4.76a4 4 0 0 1-4.12 0l-6-3.6A4 4 0 0 1 4 35.74v-6.48a4 4 0 0 1 1.94-3.42L14 21m10 17V27m0 11 7.94 4.76a4 4 0 0 0 4.12 0l6-3.6A4 4 0 0 0 44 35.74v-6.48a4 4 0 0 0-1.94-3.42L34 21m-10 6-10-6m10 6-10 6m10-6 10-6m-10 6 10 6m-10-6V16m-10 5v-8.74a4 4 0 0 1 1.94-3.42l6-3.6a4 4 0 0 1 4.12 0l6 3.6A4 4 0 0 1 34 12.26V21M14 33l-9.48-5.7M14 33v10.34M34 33l9.48-5.7M34 33v10.34M24 16l-9.48-5.7M24 16l9.48-5.7"
    />
  </svg>
);
export default SvgBoxes;
