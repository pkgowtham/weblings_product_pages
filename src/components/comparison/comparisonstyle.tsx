import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType.ts";

export const usestyles = createUseStyles((theme: Theme) => ({
  MainComparisontemp: {
    marginTop: theme.spacing.s2000,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
  },
  para: {
    textAlign: "center",
    color: theme.light.brand.onSurface.default,
  },
  title: {
    textAlign: "center",
    margin: theme.spacing.s0,
  },
  featureShort: {
    marginTop: theme.spacing.s500,
    minHeight: "35px",
  },
  titleheading: {
    verticalAlign: "center",
  },
  titleText: {
    color: theme.light.brand.onSurface.default,
  },
  weblingslogo: {
    position: "absolute",
    top: theme.spacing.s100,
    left: "40px",
  },
  text: {
    textAlign: "center",
    color: theme.light.neutral.onSurface.medium,
    marginTop: theme.spacing.s200,
  },
  textDiv: {
    maxWidth: "551px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    maxWidth: "80%",
    margin: "auto",
    marginTop:theme.spacing.s2000,
  },
  th: {
    borderBottom: `1px solid${theme.light.neutral.border.light}`,
    padding:`${theme.spacing.s0} ${theme.spacing.s500}`,
    height: "auto",
    textAlign: "center",
    minWidth: "350px",
    verticalAlign: "center",
    position: "relative",
  },
  popupDiv: {
    position: "absolute",
    top: "-66px",
    right: "80px",
  },
  SpanDiv: {
    minHeight: "100px",
    color: theme.light.neutral.onSurface.title,
    marginTop: theme.spacing.s300,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.s200,
    height: "auto",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "200px",
  },

  headingColor: {
    backgroundColor: "#F7FBFE",
  },

  td: {
    borderBottom: `1px solid${theme.light.neutral.border.light}`,
    padding: theme.spacing.s200,
    textAlign: "centere",
    height: "30px",
    position: "relative",
  },
  tooltipimg: {
    width: "100%",
    padding: `${theme.spacing.s500} ${theme.spacing.s0}${theme.spacing.s0}${theme.spacing.s0}`,
    maxWidth: "200px",
    marginRight: theme.spacing.s500,
  },
  btn: {
    marginTop: theme.spacing.s600,
    cursor: "pointer",
  },
  accordioncontent: {
    display: "none",
    padding: theme.spacing.s200,
    backgroundColor: "gray",
  },
  accordionbutton: {
    cursor: "pointer",
    color: theme.light.neutral.onSurface.title,
    border: "none",
    padding: theme.spacing.s200,
    textAlign: "left",
    width: "100%",
    outline: "none",
    transition: "backgroundColor 0.2s",
  },
  accordionimg: {
    width: "20px",
    height: "auto",
    marginRight: theme.spacing.s200,
    transition: "transform 0.3s ease",
    position: "absolute",
    top: "12px",
    left: "-12px",
  },
  rotate: {
    transform: "rotate(90deg)",
  },
  value: {},

  subtext: {},
  subtextColor: {
    color: theme.light.brand.onSurface.default,
  },
  actionSubtext: {
    color: theme.light.neutral.onSurface.dark,
    marginTop: theme.spacing.s200,
    marginBottom: theme.spacing.s400,
  },
  titleTextMiddle: {
    verticalAlign: "center",
  },
}));
