import React, { forwardRef, ReactNode, ElementType } from "react";
import useStyle from "./style.ts";
import clsx from "clsx";
import { ButtonProps } from "./buttonType.ts";
import Typography from "../typography/component.tsx";


const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      disabled,
      focusOutline,
      textColor,
      fontSize,
      div,
      className,
      onClick,
      primary,
      brand,
      danger,
      leftIcon,
      rightIcon,
      badge,
      badgeBrand,
      badgedot,
      badgeAbsolute,
      text,
      icon,
      small,
      large,
      outline,
      href,
      style,
      element: Element = "div",
      ...props
    },
    ref
  ) => {
    const classes = useStyle();

    const commonProps: React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & 
                      React.RefAttributes<HTMLButtonElement | HTMLAnchorElement> & {
      href?: string;
      style?: React.CSSProperties;
    } = {
      className: clsx(classes.button, className, {
        [classes.brand]:
          brand && (Element === "button" || "a" || "div" || "span"),
        [classes.primary]:
          primary && (Element === "button" || "a" || "div" || "span"),
          [classes.danger]:
          danger && (Element === "button" || "a" || "div" || "span"),
        [classes.disabled]: disabled,
        [classes.Large]: large,
        [classes.small]: small,
        [classes.outline]: outline,
        [classes.icon]: icon
      }),
      ...props,
    };

    if (href) {
      Element = "a";
      commonProps.href = href;
    }
    if (ref) commonProps.ref = ref;
    if (onClick) commonProps.onClick = onClick;

    return React.createElement(
      Element,
      commonProps,
      <div className={classes.buttonContainer}>
        { leftIcon && <span className={classes.buttonIcon}>{leftIcon}</span> }
         <Typography variant="LM"  style={{color:textColor, fontSize:fontSize}}>{icon || children}</Typography>
        { rightIcon && <span className={classes.buttonIcon}>{rightIcon}</span> }
        {/* {badgedot && <Badge dot brand={badgeBrand}/>}
        {badge && <Badge brand={badgeBrand} badgeAbsolute={badgeAbsolute}>{text}</Badge>} */}
      </div>
    );
  }
);

export default Button;
