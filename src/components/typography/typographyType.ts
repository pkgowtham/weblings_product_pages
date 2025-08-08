
export interface LetterSpacing {
    unit: 'PIXELS' | 'EM'; 
    value: number;
  }
  
  export interface TextStyle {
    name: string;
    fontFamily: string;
    fontWeight: number; 
    fontSize: number;
    letterSpacing: LetterSpacing;
    lineHeight: number;
    textCase: 'ORIGINAL' | 'UPPER'; 
  }
  
  export interface TypographyData {
    fileName: string;
    textStyles: TextStyle[];
  }

 export interface TypographyProps {
    variant?: string; 
    component?: React.ElementType;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: any
    className?:string;
    truncate?:boolean;
    truncateLength?: number; 
  }
  