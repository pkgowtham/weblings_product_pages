import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#151515"
      d="m6.53 8.56 1.942 1.943a.747.747 0 0 0 1.058 0l1.943-1.943c.472-.472.134-1.282-.533-1.282H7.055c-.668 0-.998.81-.525 1.282"
    />
  </svg>
);
export default SvgArrowDropDown;
