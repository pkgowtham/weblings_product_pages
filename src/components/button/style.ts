import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

const useStyle = createUseStyles((theme:Theme) => ({
  button: {
    width:'100%',
    whiteSpace:'nowrap',
    height:'32px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.25rem",
    fontWeight: "600",
    fontSize: "14px",
    border: 0,
    position:'relative',
    backgroundColor: "transparent",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
  },

  buttonContainer:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    minWidth:'100%',
    height:'100%',
    gap:'8px',
  },

  buttonIcon:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },


  brand: {
    padding:'0 12px',
    backgroundColor: theme.light.brand.surface.medium,
    color: theme.light.neutral.onSurface.negative,
    border: 0,
    "&:hover": {
      backgroundColor: theme.light.brand.surface.dark,
      color: theme.light.neutral.onSurface.negative,
    },
    "&:focus": {
      backgroundColor: theme.light.brand.surface.lighter,
      color: theme.light.brand.onSurface.default,
    },
  },

  icon:{
      padding:theme.spacing.s200
  },

  Large:{
    minHeight:'40px',
    maxHeight:'40px'
  },

  small:{
    minHeight:'24px'
  },

  primary: {
    padding:'0 12px',
    backgroundColor: theme.light.neutral.surface.light,
    color: theme.light.neutral.onSurface.medium,
    border: 0,
    "&:hover": {
      backgroundColor: theme.light.neutral.surface.medium,
      color: theme.light.neutral.onSurface.medium,
    },
    "&:focus": {
      backgroundColor: theme.light.brand.surface.lighter,
      color: theme.light.brand.onSurface.default,
    },
  },

  danger: {
    backgroundColor: theme.light.negative.surface.medium,
    color: theme.light.neutral.onSurface.negative,
    padding: "6px 12px",
    border: 0,
    "&:hover": {
      backgroundColor: theme.light.negative.surface.medium,
      color: theme.light.neutral.onSurface.negative,
    },
    "&:focus": {
      backgroundColor: theme.light.negative.surface.lighter,
      color: theme.light.negative.onSurface.medium,
    },
  },

  outline:{
    // backgroundColor: theme.light.negative.surface.medium,
    color: theme.light.brand.onSurface.default,
    padding: "6px 12px",
    border: `1px solid ${theme.light.brand.border.medium}`,
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.10)',
      color: theme.light.brand.onSurface.default,
    },
    "&:focus": {
      backgroundColor: 'rgba(0, 0, 0, 0.10)',
      color: theme.light.brand.onSurface.default,
    },
  },

  disabled: {
    backgroundColor: theme.light.neutral.surface.disabled,
    color: theme.light.neutral.onSurface.disabled,
    padding: "6px 12px",
    // border:`1px solid ${theme.light.neutral.border.disabled}`,
    // border: 0,
  },



  
}));

export default useStyle;
