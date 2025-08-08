import { createUseStyles } from "react-jss";
import { theme } from "../../theme/theme.ts";

export const usestyles = createUseStyles({
  navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:`${theme.spacing.s200} ${theme.spacing.s800}`,
    backgroundColor: theme.light.brand.surface.lighter
  },
  navDiv:{
    width:'100%',
    height:'40px',
    backgroundColor: theme.light.brand.surface.lighter
  },
  logo: {
    width: "100%",
    maxWidth: "200px",
    height: "auto",
    overflow: "hidden",
    cursor:'pointer'
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    margin: "0",
    cursor:'pointer',
    "@media (max-width: 768px)": {
      flexDirection: "column",
      display: "none",
      top: "50px",
      left: "0",
      backgroundColor: "white",
      width: "100%",
      zIndex: "1",
      position: "absolute",
    },
  },
  li: {
    margin: "0 20px 0 0",
  },
  tooglemenu: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    "@media (max-width:768px)": {
      display: "flex",
    },
  },
  bar: {
    height: "4px",
    width: "25px",
    backgroundColor: "black",
    margin: "3px 0",
  },
  login:{
    cursor:'pointer'
  }
});
