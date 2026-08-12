import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  Mainsection: {
    minHeight: "70vh",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "@media (max-width: 960px)": {
      padding: "0 24px",
    },
    "@media (max-width: 600px)": {
      padding: "0 16px",
    },
  },
  subtitle: {},
  content: {},
  heading: {
    margin: "auto",
    maxWidth: "500px",
    color: '#262626',
    marginTop: theme.spacing.s1200
  },
  para: {
    maxWidth: "740px",
    color: "#2c2e31",
    margin: `${theme.spacing.s500} ${theme.spacing.s0}`,
  },
  action: {
    display: "flex",
    justifyContent: 'center',
    gap: theme.spacing.s500,
  },
  btn: {
    backgroundColor: theme.light.brand.surface.medium
  },
  img: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  imgstyle: {
    width: "100%",
    maxWidth: "850px",
    height: "auto",
    margin: `${theme.spacing.s1200} ${theme.spacing.s0}`,
  },

  // featuresection
  Mainfeature: {
    minHeight: "70vh",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 32px",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "@media (max-width: 960px)": {
      padding: "0 24px",
    },
    "@media (max-width: 600px)": {
      padding: "0 16px",
    },
  },
  featureContainer: {
    marginTop: "100px",
    width: "100%",
    maxWidth: "1100px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
    "@media (max-width: 960px)": {
      flexDirection: "column", // Mobile/Tablet: Text FIRST (top), Image SECOND (bottom)
      gap: "36px",
      marginTop: "60px",
    },
  },
  featureContainerOdd: {
    flexDirection: "row-reverse", // Desktop web view: Image LEFT, Text RIGHT
    "@media (max-width: 960px)": {
      flexDirection: "column", // Mobile/Tablet: Text FIRST (top), Image SECOND (bottom)
    },
  },
  featureleftcontainer: {
    flex: "1 1 45%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s300,
    maxWidth: "480px",
    width: "100%",
    alignItems: "flex-start",
    textAlign: "start",
  },

  subtitleDiv: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  ptitle: {
    textAlign: "start",
    color: theme.light.brand.onSurface.default,
    display: "inline-flex",
    alignItems: "center",
  },
  floatingStarsWrapper: {
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: "50px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    pointerEvents: "none",
    zIndex: 1,
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  floatingLargeStar: {
    width: "45px",
    height: "auto",
    objectFit: "contain",
  },
  floatingSmallStar: {
    width: "26px",
    height: "auto",
    objectFit: "contain",
    marginTop: "14px",
    marginLeft: "-8px",
  },
  titleDiv: {
    fontSize: "20px",
    maxWidth: "480px",
  },
  htitle: {
    textAlign: "start",
  },
  listDiv: {
    maxWidth: "480px",
    lineHeight: "1.6",
    fontSize: "1rem",
    color: "#2c2e31",
    textAlign: "start",
  },
  paraLine: {
    margin: "4px 0",
    lineHeight: "1.6",
    color: "#434343",
    textAlign: "start",
  },
  imgDiv: {
    flex: "1 1 45%",
    maxWidth: "520px",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureimg: {
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    position: "relative",
    zIndex: 2,
  },
  abstractDiv: {
    position: "absolute",
    top: "-50px",
    right: "-90px",
    width: "220px",
    height: "auto",
    zIndex: 1,
    pointerEvents: "none",
    transition: "right 0.3s ease, width 0.3s ease",
    "& svg": {
      width: "100%",
      height: "auto",
      display: "block",
    },
    "@media (max-width: 1100px)": {
      right: "-90px",
    },
    "@media (max-width: 960px)": {
      right: "-90px",
      width: "220px",
    },
  },
  abstractDiv2: {
    position: "absolute",
    top: "-50px",
    left: "-20px",
    width: "220px",
    height: "auto",
    zIndex: 1,
    pointerEvents: "none",
    transition: "left 0.3s ease, width 0.3s ease",
    "& svg": {
      width: "100%",
      height: "auto",
      display: "block",
    },
    "@media (max-width: 1100px)": {
      left: "-30px",
    },
    "@media (max-width: 960px)": {
      left: "-10px",
      width: "220px",
    },
  },
  abstractimg: {
    width: "100%",
    height: "auto",
    maxWidth: "160px",
    margin: theme.spacing.s0
  },
  button: {
    textAlign: 'start',
    color: theme.light.brand.onSurface.default,
    cursor: 'pointer'
  },

  // ─────────────────────────────────────────────────────────────────────
  // 4th Item: Full Width Container & Framed Device Card
  // ─────────────────────────────────────────────────────────────────────
  fullWidthContainer: {
    marginTop: "100px",
    width: "100%",
    maxWidth: "1100px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    alignItems: "stretch",
    "@media (max-width: 960px)": {
      marginTop: "60px",
    },
  },
  fullWidthHeaderRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "48px",
    width: "100%",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "16px",
    },
  },
  fullWidthLeftCol: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "start",
  },
  fullWidthRightCol: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "start",
  },
  fullWidthFrameCard: {
    width: "100%",
    overflow: "hidden",
    padding: "2px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  },
  fullWidthImg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
}));
