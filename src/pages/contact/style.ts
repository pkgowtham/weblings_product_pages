import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
  mainSec: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "30px 0",
  },
  contSec: {
    width: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  contHeadMain: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    "& h1": {
      color: "var(--brand-onSurface-default)",
    },
    "& h6": {
      fontWeight: 400,
      color: "var(--neutral-onSurface-title)",
    },
  },
  contHead: {
    display: "flex",
    width:'100%',
    flexDirection: "column",
    gap:theme.spacing.s400,
    alignItems: "flex-start",
  },
  contDetailMain: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap-reverse",
    gap: "130px",
    "@media screen and (max-width:1200px)": {
      justifyContent: "flex-start",
    },
    "@media screen and (min-width:500px)": {
      gap: "40px",
    },
    "@media screen and (max-width:930px)": {
      gap: "40px",
    },
  },
  contDetailAddress: {
    minWidth: "clamp(250px, 30%, 400px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "24px",
    "& h5": {
      color: "var(--neutral-onSurface-title)",
      fontWeight: 600,
    },
    "@media screen and (max-width:930px)": {
      flex: 1,
    },
  },
  contDetail: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "15px",
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
      lineHeight: "30px",
    },
  },
  contDetHeadImg: {
    width: "100%",
    "& h5": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  contDetailInput: {
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    paddingLeft: "27px",
    "& h5": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
    },
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
    },
    // "& input": {
    //   padding: "12px 16px",
    //   borderRadius: "4px",
    //   border: `1px solid ${theme.light.neutral.border.light}`,
    //   outline: "none",
    //   width: "clamp(19rem, 11.43vw + 14.714rem, 30rem)",
    // },
    "& button": {
      padding: "clamp(0.5rem, 1vw + 0.3rem, 0.5rem) clamp(1rem, 2vw + 0.5rem, 1.5rem)",
      outline: "none",
      border: "none",
      backgroundColor: theme.light.brand.onSurface.default,
      borderRadius: "4px",
      color: "white",
      fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.25rem)",
      fontWeight: 600,
      "&:hover": {
        backgroundColor:theme.light.brand.surface.dark,
      },
      "&:focus": {
        backgroundColor: theme.light.brand.surface.lighter,
        color: theme.light.brand.onSurface.default,
      },
    },
    "@media screen and (max-width:930px)": {
      flex: 1,
      padding: 0,
    },
  },
  labInpMain: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
  },
  labInp: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  labInpLabel: {
    fontSize: "clamp(0.875rem, 0.5357vw + 0.768rem, 1.25rem)",
    color: theme.light.neutral.onSurface.medium,
    marginBottom: "10px",
  },
  mainSecAdjustments: {
    "@media screen and (max-width:930px)": {
      marginTop: "10px",
    },
  },
  contHeadMainAdjustments: {
    "@media screen and (max-width:930px)": {
      margin: 0,
    },
  },
}))