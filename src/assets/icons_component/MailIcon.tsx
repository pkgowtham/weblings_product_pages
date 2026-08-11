import React, { SVGProps } from "react";

export const MailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7083 4.6665L8.72833 8.4665C8.52251 8.59545 8.28454 8.66384 8.04167 8.66384C7.79879 8.66384 7.56082 8.59545 7.355 8.4665L1.375 4.6665M2.70833 2.6665H13.375C14.1114 2.6665 14.7083 3.26346 14.7083 3.99984V11.9998C14.7083 12.7362 14.1114 13.3332 13.375 13.3332H2.70833C1.97195 13.3332 1.375 12.7362 1.375 11.9998V3.99984C1.375 3.26346 1.97195 2.6665 2.70833 2.6665Z"
      stroke={props.stroke || "currentColor"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MailIcon;
