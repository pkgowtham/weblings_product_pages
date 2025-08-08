import React from "react";
import clsx from "clsx";
import useStyle from "./style.ts";
import Typography from "../typography/component.tsx";

interface HelperTextProps {
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  disabled?: boolean;
  style?:any;
}

const HelperText: React.FC<HelperTextProps> = ({ children, className, error, disabled, style, ...props }) => {
  const classes = useStyle();

  return (
    <div
      className={clsx(classes.helperText, className, {
        [classes.helperTextError]: error,
        [classes.disabledText]: disabled
      })}
      style={style}
    >
      <Typography variant="BXS" {...props}>{children}</Typography>
    </div>
  );
};

export default HelperText;

