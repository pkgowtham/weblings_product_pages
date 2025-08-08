import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import typographyData from './textStyles.json'; 
import { TypographyProps, TextStyle } from './typographyType';
import clsx from 'clsx';

// Define breakpoints for desktop, tablet, and mobile
const breakpoints = {
  desktop: 1024,
  tablet: 768,
};

// Function to get styles based on screen size
const getStylesForScreenSize = (screenSize) => {
  if (screenSize >= breakpoints.desktop) {
    return typographyData.textStyles.desktop;
  } else if (screenSize >= breakpoints.tablet) {
    return typographyData.textStyles.tablet;
  } else {
    return typographyData.textStyles.mobile;
  }
};

const createStylesFromJson = (styles: TextStyle[]): { [key: string]: React.CSSProperties } => {
  const jssStyles: { [key: string]: React.CSSProperties } = {};
  styles.forEach(style => {
    jssStyles[style.name] = {
      fontFamily: style.fontFamily,
      fontWeight: style.fontWeight,
      fontSize: `${style.fontSize}px`,
      letterSpacing: `${style.letterSpacing.value}px`,
      lineHeight: `${style.lineHeight}rem`,
      textTransform: style.textCase === 'UPPER' ? 'uppercase' : 'none',
    };
  });
  return jssStyles;
};

// Main Typography component
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
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStylesForScreenSize(screenSize);
  const useStyles = createUseStyles(createStylesFromJson(styles as TextStyle[]));
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
    <Component className={clsx(variantStyle, className)} style={{ ...style, ...truncateStyle }} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
