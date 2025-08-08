import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FE4C3F"
      d="M12.2 3.807a.664.664 0 0 0-.94 0L8 7.06 4.74 3.8a.664.664 0 1 0-.94.94L7.06 8 3.8 11.26a.664.664 0 1 0 .94.94L8 8.94l3.26 3.26a.664.664 0 1 0 .94-.94L8.94 8l3.26-3.26a.67.67 0 0 0 0-.933"
    />
  </svg>
);
export default SvgClose;
