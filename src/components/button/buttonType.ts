import { ElementType, ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    focusOutline?: boolean;
    div?: boolean;
    className?: string;
    fontSize?:any;
    onClick?: () => void;
    primary?: boolean;
    brand?: boolean;
    small?:boolean;
    medium?:boolean;
    textColor?:any;
    large?:Boolean;
    outline?:boolean;
    leftIcon?: string;
    rightIcon?: string;
    badgedot?:boolean;
    badgeBrand?:boolean;
    badgeAbsolute?:Boolean;
    badge?:string;
    href?: string;
    style?: React.CSSProperties;
    element: ElementType;
    [key: string]: any;
  }