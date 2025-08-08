import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#4F4F4F"
      d="M6.75 5.033a.747.747 0 0 0 0 1.057L9.66 9l-2.91 2.91a.747.747 0 1 0 1.057 1.058l3.443-3.443a.747.747 0 0 0 0-1.057L7.807 5.025a.754.754 0 0 0-1.057.008"
    />
  </svg>
);
export default SvgChevronRight;
