import * as React from "react";
import type { SVGProps } from "react";
const SvgWeblogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={54}
    fill="none"
    {...props}
  >
    <path
      fill="#3395FF"
      d="M52.237 13.681a.473.473 0 0 0-.173-.647l-1.435-.828a9.11 9.11 0 0 0-12.447 3.335l-8.314 14.4a5.621 5.621 0 0 0 9.736 5.62z"
    />
    <path
      fill="#3395FF"
      d="M7.887 13.681a.473.473 0 0 1 .173-.647l1.435-.828a9.11 9.11 0 0 1 12.447 3.335l8.313 14.4a5.621 5.621 0 0 1-9.736 5.62z"
    />
    <path
      fill="#326BDC"
      fillRule="evenodd"
      d="M34.334 21.093a5.62 5.62 0 0 1 .48 6.325l-4.677 8.099q-.089.155-.186.3a6 6 0 0 1-.14-.23l-4.676-8.1a5.621 5.621 0 0 1 9.2-6.394"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWeblogo;
