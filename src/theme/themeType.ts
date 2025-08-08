

export type Elevation = {
  s: string;
  m: string;
  l: string;
};

export type Duration = {
  d1:number;
  d2:number;
  d3:number;
  d4:number;
  d5:number;
  d6:number;
};

export type Easing = {
  li:string;
  eIn:string;
  eOut:string;
  einout:string;
  bo:string;
};

export type BorderRadius = {
  b0: number;
  b50: number;
  b100: number;
  b150: number;
  b200: number;
  b250: number;
  b300: number;
  b400: number;
  b500: number;
  b600: number;
  b700: number;
  b900: number;
  b1200: number;
  b2500: number;
};

export type Spacing = {
  s0: string;
  s100: string;
  s150:string;
  s200: string;
  s250: string;
  s300: string;
  s400: string;
  s500: string;
  s600: string;
  s800: string;
  s1000: string;
  s1200: string;
  s1600: string;
  s2000: string;
};

export type Theme = {
  light:LightTheme;
  dark:DarkTheme
  borderRadius: BorderRadius;
  spacing: Spacing;
  elevation: Elevation;
  duration:Duration;
  easing:Easing
}
export type ThemeDark = {
  // light:LightTheme;
  light:DarkTheme
  borderRadius: BorderRadius;
  spacing: Spacing;
  elevation: Elevation;
  
}

export type LightTheme = {
  neutral: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      disabled: string;
      inverse:string
    },
    border: {
      light: string;
      medium: string;
      disabled: string;
      dark:string;
    },
    onSurface: {
      title: string;
      medium:string;
      dark: string;
      caption: string;
      negative: string;
      disabled: string;
      inverse:string
    },
  },
  brand: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
      darker: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      default: string;
    },
  },
  info: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  positive: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  negative: {
    surface: {
      lighter: string;
      light: string;
      medium: string
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  warning: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
}

export type DarkTheme = {
  neutral: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      disabled: string;
      inverse:string
    },
    border: {
      light: string;
      medium: string;
      // dark: string;
      disabled: string
    },
    onSurface: {
      title: string;
      medium: string;
      dark: string;
      caption: string;
      negative: string;
      disabled: string;
      inverse:string
    },
  },
  brand: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      default: string;
    },
  },
  info: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  positive: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  negative: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
  warning: {
    surface: {
      lighter: string;
      light: string;
      medium: string;
      dark: string;
    },
    border: {
      light: string;
      medium: string;
      dark: string;
    },
    onSurface: {
      medium: string;
    },
  },
}

// export type Theme = LightTheme | DarkTheme | Spacing | BorderRadius| Elevation;  