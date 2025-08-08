import React from "react";
import clsx from "clsx";
import useStyle from "./style.ts";

// type InputFieldProps = {
//   children: ReactNode;
//   className?: string; 
//   gridSpan?:any;
// };

const InputField = ({ children, className, gridSpan, ...props }:any) => {
  const classes = useStyle();
  return <div className={clsx(classes.container, className)} style={{ gridColumn: `span ${gridSpan}` }} {...props}>{children}</div>;
};

export default InputField;

