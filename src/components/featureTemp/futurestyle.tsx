import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    "@media (max-width: 1031px)": {
      gap: theme.spacing.s2000
    }
  },
  featureleftcontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.s300,
    maxWidth: "400px",
    alignItems: 'flex-start',
    textAlign: 'start',
  },

  subtitleDiv: {},
  ptitle: {
    textAlign: "start",
    color: theme.light.brand.onSurface.default,
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  sparkleIcon: {
    color: "#FFC107",
    fontSize: "1.1rem",
  },
  titleDiv: {
    fontSize: "20px",
    maxWidth: "400px",
  },
  htitle: {
    textAlign: "start",
  },
  listDiv: {
    maxWidth: "400px",
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
    position: 'relative',
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  featureimg: {
    width: "100%",
    borderRadius: theme.borderRadius.b500,
    maxWidth: "550px",
    height: "auto",
    margin: `${theme.spacing.s1200} ${theme.spacing.s0}`,
    zIndex: '1',
  },
  abstractDiv: {
    position: 'absolute',
    maxWidth: "190px",
    top: '20px',
    left: '435px',
    right: '-629px',
    "@media (max-width: 1085px)": {
      position: 'absolute',
      maxWidth: "190px",
      top: '-45px',
      left: '435px',
      right: '-629px',
    }
  },
  abstractDiv2: {
    position: 'absolute',
    maxWidth: "190px",
    top: '-1px',
    left: '-58px',
    right: '-629px',
    "@media (max-width: 1085px)": {
      position: 'absolute',
      maxWidth: "190px",
      top: '-45px',
      left: '-58px',
      right: '-629px',
    }
  },
  abstractimg: {
    width: "100%",
    height: "auto",
    maxWidth: "190px",
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
    maxWidth: "960px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    alignItems: "stretch",
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
    boxSizing: "border-box",
    border: "2px solid #000000",
    borderRadius: "16px",
    overflow: "hidden",
    padding: "2px",
    backgroundColor: "#000000",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  },
  fullWidthImg: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "14px",
  },
}));
