import * as React from "react";
import type { SVGProps } from "react";

const SvgPrincipleBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1280 1323"
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <g clipPath="url(#principle_background_svg__a)">
      <circle cx={637.5} cy={579.5} r={206.5} fill="#FFBF00" />
      <path
        fill="#0072C4"
        d="M-301 247S272.423 415.298 647.5 415.298C1022.58 415.298 1596 247 1596 247v1055s-574.3-151.55-948.5-151.55S-301 1302-301 1302z"
      />
    </g>
    <defs>
      <clipPath id="principle_background_svg__a">
        <rect width={1571} height={1323} fill="#fff" transform="translate(-138)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPrincipleBackground;
