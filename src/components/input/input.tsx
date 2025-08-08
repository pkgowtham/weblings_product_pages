import React, { forwardRef, useEffect, useRef, useState } from "react";
import useStyle from "./style.ts";
import clsx from "clsx";
import HelperText from "./helperText.tsx";
import Label from "./label.tsx";
export interface Option {
  id: number;
  option: string;
  path: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  helperText?: string;
  className?: string;
  error?: boolean;
  checkbox?: boolean;
  tableInp?:boolean;
  placeholder?:string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  leftText?:any;
  rightText?:any;
  label?: string;
  readOnly?: boolean;
  selectedOptions?:any;
  rightClick?:any;
  rightIconClassName?: string;
  width?: string;
  leftTextClick?:any;
  borderRadius?: string;
  rightTextColor?:any;
  onRemove?: () => void;
  onOptionChange?:any;
  multiSelect?:any;
  options?: any;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      helperText,
      className,
      error=false,
      checkbox,
      leftIcon,
      rightIcon,
      onRemove,
      disabled,
      tableInp,
      placeholder,
      selectedOptions,
      label,
      readOnly,
      rightTextColor,
      rightClick,
      leftText,
      rightText,
      width,
      leftTextClick,
      rightIconClassName,
      onOptionChange,
      borderRadius,
      multiSelect,
      options,
      onLeftIconClick,
      onRightIconClick,
      ...props
    },
    ref
  ) => {
    const [leftTextWidth, setLeftTextWidth] = useState<number>(0);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const leftTextRef = useRef<HTMLDivElement | null>(null);
    const classes = useStyle({leftTextWidth}as any);

    // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    // const handleOptionChange = (option: Option) => {
    //   if (selectedOptions.some(item => item.id === option.id)) {
    //     setSelectedOptions(selectedOptions.filter(item => item.id !== option.id));
    //   } else {
    //     setSelectedOptions([...selectedOptions, option]);
    //   }
    // };

    useEffect(() => {
      if (leftTextRef.current) {
        setLeftTextWidth(leftTextRef.current.offsetWidth);
      }
    }, [leftText]);

    return (
      <>
        {label && <Label disabled={disabled}>{label}</Label>}
        <div className={classes.inputWidth}>
          <div
            className={clsx(classes.inputWrapper)}
            style={{ width: width, borderRadius: borderRadius }}
            ref={dropdownRef}
          >
            {leftIcon && (
              <div className={classes.startIconContainer}  onClick={(e) => {
                e.stopPropagation(); 
                onLeftIconClick && onLeftIconClick();
              }}>
                {leftIcon} 
              </div>
            )}
             {leftText && (
              <div className={classes.leftTextContainer} onClick={leftTextClick} ref={leftTextRef} >{leftText}</div>
            )}
            
              <input
                type={type}
                className={clsx(classes.input, className,{
                  [classes.disabled]: disabled,
                  [classes.inputError]: error,
                  [classes.hasLeftIcon]:leftIcon, 
                  [classes.hasLeftText]:leftText,
                  [classes.hasRightIcon]:rightIcon || rightText,
                  [classes.customPadding]:leftText,
                  [classes.tableInp]:tableInp
                })}
                
                ref={ref as React.RefObject<HTMLInputElement>}
                readOnly={readOnly}
                placeholder={placeholder}
                {...props}
              />
            {rightText && (
              <div className={clsx(classes.rightTextContainer)} style={{color:rightTextColor}} onClick={rightClick}>{rightText}</div>
            )}

            {rightIcon && (
              <div className={classes.endIconContainer} onClick={(e) => {
                e.stopPropagation(); 
                onRightIconClick && onRightIconClick();
              }}>
                {rightIcon } 
              </div>
            )}
          </div>
        </div>
        {helperText && error && (
          <HelperText error={error} disabled={disabled}>
            {helperText}
          </HelperText>
        )}
      
      </>
    );
  }
);

export default Input;
