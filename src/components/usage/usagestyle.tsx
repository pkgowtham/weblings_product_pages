import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  usageContainer: {
    width: "100%",
    backgroundColor: theme.light.brand.surface.lighter,
    padding: `${theme.spacing.s2000} 32px`,
    boxSizing: "border-box",
    borderTop: `1px solid ${theme.light.brand.border.light}`,
    borderBottom: `1px solid ${theme.light.brand.border.light}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 960px)": {
      padding: `${theme.spacing.s1200} 24px`,
    },
    "@media (max-width: 600px)": {
      padding: `${theme.spacing.s1000} 16px`,
    },
  },
  usageInner: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.s1200,
  },
  usageHeader: {
    textAlign: "center",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.s300,
  },
  usageSubtitle: {
    color: theme.light.brand.onSurface.default,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  usageTitle: {
    color: theme.light.neutral.onSurface.title,
    margin: 0,
  },
  usageDescription: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: 1.6,
    margin: 0,
  },
  usageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: theme.spacing.s600,
    width: "100%",
    boxSizing: "border-box",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      gap: theme.spacing.s400,
    },
  },
  usageCard: {
    backgroundColor: theme.light.neutral.surface.lighter,
    borderRadius: theme.borderRadius.b400,
    padding: theme.spacing.s600,
    border: `1px solid ${theme.light.brand.border.light}`,
    borderTop: `3px solid ${theme.light.brand.surface.medium}`,
    boxShadow: theme.elevation.s,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s300,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.elevation.m,
    },
  },
  usageIconWrapper: {
    width: "48px",
    height: "48px",
    borderRadius: theme.borderRadius.b300,
    backgroundColor: theme.light.brand.surface.lighter,
    color: theme.light.brand.onSurface.default,
    border: `1px solid ${theme.light.brand.border.light}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.s200,
  },
  usageCardTitle: {
    color: theme.light.neutral.onSurface.title,
    margin: 0,
  },
  usageCardDesc: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: 1.6,
    margin: 0,
    flexGrow: 1,
  },
}));
