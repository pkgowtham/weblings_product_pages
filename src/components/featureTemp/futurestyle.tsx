import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme:Theme)=>({
  Mainsection: {
    minHeight: "70vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  subtitle: {},
  content: {},
  heading: {
    margin: "auto",
    maxWidth: "500px",
    color:'#262626',
    marginTop:theme.spacing.s1200
  },
  para: {
    maxWidth: "740px",
    color: "#2c2e31",
    margin:`${theme.spacing.s500} ${theme.spacing.s0}`,
  },
  action: {
    display: "flex",
    justifyContent:'center',
    gap: theme.spacing.s500,
  },
  btn: {
    backgroundColor:theme.light.brand.surface.medium
  },
  img: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  imgstyle: {
    width: "100%",
    borderRadius: theme.borderRadius.b200,
    maxWidth: "850px",
    height: "auto",
    margin: `${theme.spacing.s1200} ${theme.spacing.s0}`,
  },
  // featuresection
  Mainfeature: {
    minHeight: "70vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  featureContainer: {
    marginTop: "100px",
    display: "flex",
    flexWrap:'wrap',
    justifyContent:'center',
    gap:'100px'   ,
    "@media (max-width: 1031px)":{
      gap:theme.spacing.s2000
    } 
  },
  featureleftcontainer:{
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s300
  },
 
  subtitleDiv: {},
  ptitle: {
    textAlign: "start",
    color:theme.light.brand.onSurface.default,
  },
  titleDiv: {
    fontSize: "20px",
    maxWidth: "400px",
  },
  htitle: {
    textAlign: "start",
  },
  ulline: {
    textAlign: "start",
  },
  listDiv: {
    maxWidth: "394px",
    lineHeight: "1.7",
    fontSize: "1.2rem",
    color: "#2c2e31",
  },
  imgDiv: {
    position:'relative',
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  featureimg: {
    width: "100%",
    borderRadius:theme.borderRadius.b500,
    maxWidth: "550px",
    height: "auto",
    margin: `${theme.spacing.s1200} ${theme.spacing.s0}`,
    zIndex:'1',
  },
  abstractDiv: {
    position:'absolute',
    maxWidth: "190px",
    top:'20px',
    left:'435px',
    right:'-629px',
    "@media (max-width: 1085px)":{
      position:'absolute',
      maxWidth: "190px",
      top:'-45px',
      left:'435px',
      right:'-629px',
    }
  },
  abstractDiv2: {
    position:'absolute',
    maxWidth: "190px",
    top:'-1px',
    left:'-58px',
    right:'-629px',
    "@media (max-width: 1085px)":{
      position:'absolute',
      maxWidth: "190px",
      top:'-45px',
      left:'-58px',
      right:'-629px',
    }
  },
  abstractimg: {
    width: "100%",
    height: "auto",
    maxWidth: "190px",
    margin:theme.spacing.s0
  },
  button:{
    textAlign:'start',
    color:theme.light.brand.onSurface.default,
    cursor:'pointer'
  }
}))
