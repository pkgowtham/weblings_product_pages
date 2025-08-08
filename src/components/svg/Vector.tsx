import * as React from "react";
import type { SVGProps } from "react";
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#0066D8"
      d="M3.867 7.603 1.534 5.27a.656.656 0 0 0-.934 0 .656.656 0 0 0 0 .933l2.794 2.793c.26.26.68.26.94 0l7.066-7.06a.656.656 0 0 0 0-.933.656.656 0 0 0-.933 0z"
    />
  </svg>
);
export default SvgVector;
