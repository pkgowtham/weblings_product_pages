import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType.ts";

export const usestyles = createUseStyles((theme: Theme) => ({
  Footer: {
    display: "flex",
    marginTop: theme.spacing.s2000,
    flexDirection: "column",
    borderTop: `1px solid ${theme.light.neutral.border.light}`,
    alignItems: "center",
    background: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
  },
  FooterContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "90%",
    padding: theme.spacing.s1200,
    flexWrap: "wrap",
  },
  FirstSection: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
    width: "251px",
    cursor: "pointer",
  },
  SubDiv: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s100,
  },
  weblingslogo: {
    width: "200px",
    height: "auto",
  },
  Title: {
    color: theme.light.brand.surface.medium,
    fontFamily: "Quicksand",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "31px",
  },
  Para: {},
  ThirdSection: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
    width: "251px",
    cursor: "pointer",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
  },
  li: {
    display: "flex",
    alignItems: "start",
    gap: theme.spacing.s400,
  },
  LogoStyle: {
    width: "16px",
    height: "16px",
  },

  Icons: {
    display: "flex",
    gap: theme.spacing.s600,
  },
  SecondSection: {
    display: "flex",
    width: "110px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s400,
    cursor: "pointer",
  },
  ulist: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  list: {
    listStyle: "none",
  },
  footerLink: {
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.2s ease",
    "&:hover": {
      color: theme.light.brand.onSurface.default || "#0072C4",
    },
  },
  SectionTitleColor: {
    color: theme.light.brand.onSurface.default,
  },
}));
