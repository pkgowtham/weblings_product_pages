import * as React from "react";
import type { SVGProps } from "react";
const SvgUserlogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={46}
    fill="none"
    {...props}
  >
    <rect width={45} height={45} y={0.5} fill="#3C69D7" rx={3.571} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.5 32v-2a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75m-3-3.88a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
export default SvgUserlogo;
