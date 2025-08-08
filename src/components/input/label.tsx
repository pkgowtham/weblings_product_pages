import React from "react";
import clsx from "clsx";
import useStyle from "./style.ts";
import Typography from "../typography/component.tsx";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  style?:any;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className, disabled,...props }) => {
  const classes = useStyle();

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(classes.label, className, {
        [classes.disabledText]: disabled,
      })}
      {...props}
    >
     <Typography variant="LM">{children}</Typography> 
    </label>
  );
};

export default Label;
