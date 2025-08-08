import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#youtube_svg__a)">
      <path
        fill="#3A3A3A"
        d="M17.915 4.88c-.204-.746-.813-1.327-1.597-1.52C14.924 3 9.292 3 9.292 3s-5.632 0-7.026.36C1.482 3.552.873 4.133.67 4.88.292 6.235.292 9 .292 9s0 2.793.377 4.12c.204.746.813 1.327 1.597 1.52C3.66 15 9.292 15 9.292 15s5.632 0 7.026-.36c.784-.193 1.393-.774 1.596-1.52.378-1.327.378-4.12.378-4.12s0-2.765-.378-4.12M7.492 11.571V6.43L12.166 9z"
      />
    </g>
    <defs>
      <clipPath id="youtube_svg__a">
        <path fill="#fff" d="M.292 0h18v18h-18z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYoutube;
