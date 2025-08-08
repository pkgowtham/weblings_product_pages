import * as React from "react";
import type { SVGProps } from "react";
const SvgIdea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M15 35c0 .917.75 1.667 1.667 1.667h6.666c.917 0 1.667-.75 1.667-1.667v-1.667H15zm5-31.667C13.567 3.333 8.334 8.567 8.334 15c0 3.967 1.983 7.45 5 9.567v3.766c0 .917.75 1.667 1.666 1.667h10c.917 0 1.667-.75 1.667-1.667v-3.766c3.016-2.117 5-5.6 5-9.567 0-6.433-5.234-11.667-11.667-11.667m4.75 18.5-1.416 1v3.834h-6.667v-3.834l-1.417-1A8.33 8.33 0 0 1 11.667 15c0-4.6 3.733-8.333 8.333-8.333S28.334 10.4 28.334 15a8.33 8.33 0 0 1-3.584 6.833"
    />
  </svg>
);
export default SvgIdea;
