import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#B96ED5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.259}
      d="m18 24 4 4 8-8m10 6c0 10-7 15-15.32 17.9a2 2 0 0 1-1.34-.02C15 41 8 36 8 26V12a2 2 0 0 1 2-2c4 0 9-2.4 12.48-5.44a2.34 2.34 0 0 1 3.04 0C29.02 7.62 34 10 38 10a2 2 0 0 1 2 2z"
    />
  </svg>
);
export default SvgShieldCheck;
