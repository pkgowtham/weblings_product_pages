import React from 'react';
import { createUseStyles } from 'react-jss';
import typographyData from './textStyles.json';
import { TypographyProps, TextStyle } from './typographyType';
import clsx from 'clsx';

// Create responsive styles using CSS media queries
const createResponsiveStyles = () => {
  const { desktop, tablet, mobile } = typographyData.textStyles;
  
  const styles: { [key: string]: any } = {};

  // Create styles for each variant with media queries
  desktop.forEach((desktopStyle:any) => {
    const variantName = desktopStyle.name;
    
    styles[variantName] = {
      // Mobile first (base styles)
      ...createStyleObject(mobile.find(m => m.name === variantName) || desktopStyle),
      
      // Tablet styles
      [`@media (min-width: 768px)`]: {
        ...createStyleObject(tablet.find(t => t.name === variantName) || desktopStyle),
      },
      
      // Desktop styles
      [`@media (min-width: 1024px)`]: {
        ...createStyleObject(desktopStyle),
      },
    };
  });

  return createUseStyles(styles);
};

const createStyleObject = (style: TextStyle): React.CSSProperties => ({
  fontFamily: style.fontFamily,
  fontWeight: style.fontWeight,
  fontSize: `${style.fontSize}px`,
  letterSpacing: `${style.letterSpacing.value}px`,
  lineHeight: `${style.lineHeight * 16}px`,
  textTransform: style.textCase === 'UPPER' ? 'uppercase' : 'none',
  margin:0,
  padding:0
});

// Create styles once
const useStyles = createResponsiveStyles();

// Simplified Typography component
const Typography: React.FC<TypographyProps> = ({
  variant = 'BM',
  component: Component = 'p',
  children,
  style,
  className,
  truncateLength,
  truncate = false,
  ...props
}) => {
  const classes = useStyles();

  const variantStyle = classes[variant] || classes['BM'];

  const truncateStyle = truncate
    ? {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        ...(truncateLength !== undefined ? { maxWidth: `${truncateLength}ch` } : {}),
      }
    : {};

  return (
    <Component 
      className={clsx(variantStyle, className)} 
      style={{ ...truncateStyle, ...style }} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;