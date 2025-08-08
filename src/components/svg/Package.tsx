import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#00812B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.259}
      d="M24 44V24m0 0c-.7 0-1.387-.183-1.994-.532L6.6 14M24 24c.7 0 1.387-.183 1.994-.532L41.4 14M15 8.54l18 10.3M22 43.46a4 4 0 0 0 4 0l14-8A4 4 0 0 0 42 32V16a4 4 0 0 0-2-3.46l-14-8a4 4 0 0 0-4 0l-14 8A4 4 0 0 0 6 16v16a4 4 0 0 0 2 3.46z"
    />
  </svg>
);
export default SvgPackage;
