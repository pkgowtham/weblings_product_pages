import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

const useStyle = createUseStyles((theme:Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position:'relative',
    width:'100%',
    gap:'4px'
  },

  label: {
    fontSize: "1rem",
    fontWeight: 600,
    color: theme.light.neutral.onSurface.title,
    paddingLeft:'3px '
  },

  inputWidth:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    Width:'100%',
    height:'40px',
  },

  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
    width: '100%',
    borderRadius: theme.borderRadius.b150,
    backgroundColor:theme.light.neutral.surface.lighter
  },


  input: {
    width: '100%',
    height:'40px',
    padding: `${theme.spacing.s200} ${theme.spacing.s300}`,
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b150,
    boxSizing: 'border-box',
    fontSize: '1rem',
    fontWeight:400,
    fontFamily:'Open Sans',
    // transition: 'border-width 0.3s ease',
    '&:focus':{
      border: `2px solid ${theme.light.brand.border.medium}`,
      outline:'none'
    },
    '&:hover': {
      borderWidth: '2px',  
    },
    '&::placeholder':{
      color:theme.light.neutral.onSurface.medium,
      fontWeight:500,
      fontSize:'14px'
     }
  },

  startIconContainer:{
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1rem',
    color: '#333',
    left: '0.5rem',
    '@media (max-width: 500px)': {
      fontSize: '.875rem',
    },
  },

  hasLeftIcon:{
    paddingLeft: '2.5rem',
    '@media (max-width: 500px)': {
      paddingLeft: '2.5rem', 
    },
  },

  hasLeftText:{
    paddingLeft: '2.5rem',
    '@media (max-width: 500px)': {
      paddingLeft: '2.5rem', 
    },
  },

  endIconContainer:{
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1rem',
    color: '#333',
    right: '0.5rem',
    '@media (max-width: 500px)': {
      fontSize: '.875rem',
    },
  },

  hasRightIcon:{
    paddingRight: '2rem', 
    '@media (max-width: 500px)': {
      paddingRight: '1.5rem', 
    },
  },

  
  customPadding:(props:any = {}) =>({
    paddingLeft:`${props.leftTextWidth + 12}px` 
  }),

  leftTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '0.5rem',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#666',
    paddingRight: '0.5rem', // Spacing between left text and input field
    cursor:'pointer'
  },

  rightTextContainer: {
    position: 'absolute',
    top: '50%',
    right: '0.5rem',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#666',
    paddingLeft: '0.5rem', // Spacing between right text and input field
    cursor:'pointer'
  },

  startIcon:{

  },


  helperText: {
    position:'absolute',
    bottom:'-22px',
    left:0,
    display: "block",
    // marginTop: "0.3rem",
    fontSize: "0.875rem",
    fontWeight:400,
    color: theme.light.neutral.onSurface.title,
    paddingLeft:'10px'
  },

  inputError: {
    border: `2px solid ${theme.light.negative.border.medium}`,
    outline:"none",
    '&:focus':{
      border: `2px solid ${theme.light.negative.border.medium}`,
      outline:'none'
    },
  },

  helperTextError: {
    color: theme.light.negative.onSurface.medium,
    fontWeight:400
  },

  disabled: {
    backgroundColor: theme.light.neutral.surface.disabled,
    border: theme.light.neutral.border.disabled,
    color:theme.light.neutral.onSurface.disabled,
    pointerEvents: "none",
    "&:focus": {
      outline: "none",
    },
  },

  disabledText:{
    color:theme.light.neutral.onSurface.disabled
  },

  multiselector:{
    borderRadius: "3px",
    padding: "20px 10px",
    width:'320px',
    border: `1px solid black`,
    fontSize:'14px',
    outline: "none",
  },

  tableInp:{
    height:28,
    color:theme.light.neutral.onSurface.medium,
      fontWeight:400,
      fontSize:'14px',
      lineHeight:1.43,
   
      border: `2px solid ${theme.light.brand.border.medium}`,
      outline:'none',
      boxShadow:theme.elevation.s
    
  }

}));

export default useStyle;
