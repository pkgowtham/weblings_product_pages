import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyles = createUseStyles((theme: Theme) => ({
  "@keyframes twinkle": {
    "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
    "50%": {
      opacity: 0.65,
      transform: "scale(1.2)",
      boxShadow: `0 0 6px ${theme.light.brand.surface.medium}`,
    },
  },

  pageWrapper: {
    minHeight: "100vh",
    position: "relative",
    background: `linear-gradient(180deg, #F0F6FE 0%, ${theme.light.brand.surface.lighter} 18%, #FAFDFE 45%, ${theme.light.neutral.surface.lighter} 70%, #F0F6FE 100%)`,
    color: theme.light.neutral.onSurface.title,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "140px",
    paddingBottom: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "border-box",
    fontFamily: "'Open Sans', sans-serif",
    "@media (max-width: 768px)": {
      paddingTop: "110px",
      paddingBottom: "60px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },

  // Soft Ambient Glow matching About page
  ambientGlowTop: {
    position: "absolute",
    top: "-120px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "850px",
    height: "550px",
    background: `radial-gradient(ellipse at center, ${theme.light.brand.border.light} 0%, rgba(176, 214, 255, 0.18) 50%, transparent 75%)`,
    filter: "blur(90px)",
    opacity: 0.7,
    pointerEvents: "none",
    zIndex: 0,
  },

  starCanvas: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  },

  star: {
    position: "absolute",
    backgroundColor: theme.light.brand.surface.light,
    borderRadius: "50%",
    opacity: 0.45,
    animation: "$twinkle 4s infinite ease-in-out",
  },

  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "920px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: "44px",
  },

  title: {
    fontSize: "3rem",
    fontWeight: 800,
    color: theme.light.brand.surface.darker,
    letterSpacing: "-0.02em",
    margin: "0 0 12px 0",
    lineHeight: 1.15,
    fontFamily: "'Open Sans', sans-serif",
    "@media (max-width: 768px)": {
      fontSize: "2.15rem",
    },
  },

  lastUpdated: {
    fontSize: "0.95rem",
    color: theme.light.neutral.onSurface.medium,
    margin: 0,
  },

  glassPanel: {
    backgroundColor: theme.light.neutral.surface.lighter,
    backgroundImage: "radial-gradient(rgba(0, 114, 196, 0.07) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    backdropFilter: "blur(16px)",
    borderRadius: `${theme.borderRadius.b500}px`,
    border: `1px solid ${theme.light.brand.border.light}`,
    boxShadow: "0 20px 60px -15px rgba(0, 68, 140, 0.10), 0 0 0 1px rgba(0, 114, 196, 0.06)",
    padding: "48px 56px",
    boxSizing: "border-box",
    fontFamily: "'Open Sans', sans-serif",
    "@media (max-width: 768px)": {
      padding: "32px 20px",
      borderRadius: `${theme.borderRadius.b400}px`,
    },
  },

  introParagraph: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: theme.light.neutral.onSurface.title,
    marginBottom: "28px",
    fontWeight: 400,
  },

  sectionHeading: {
    color: theme.light.brand.surface.darker,
    fontSize: "1.25rem",
    fontWeight: 700,
    marginTop: "36px",
    marginBottom: "14px",
    borderBottom: `1px solid ${theme.light.brand.border.light}`,
    paddingBottom: "10px",
    letterSpacing: "-0.01em",
  },

  paragraph: {
    color: theme.light.neutral.onSurface.medium,
    fontSize: "0.95rem",
    lineHeight: 1.75,
    marginBottom: "16px",
  },

  list: {
    listStyleType: "disc",
    paddingLeft: "24px",
    color: theme.light.neutral.onSurface.medium,
    fontSize: "0.95rem",
    lineHeight: 1.75,
    marginBottom: "16px",
  },

  listItem: {
    marginBottom: "8px",
    "& strong": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
    },
  },

  strong: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 600,
  },

  grievanceBox: {
    backgroundColor: theme.light.brand.surface.lighter,
    border: `1px solid ${theme.light.brand.border.light}`,
    borderRadius: "14px",
    padding: "20px 24px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  grievanceRow: {
    margin: 0,
    fontSize: "0.95rem",
    color: theme.light.neutral.onSurface.medium,
    lineHeight: 1.6,
  },

  grievanceNote: {
    margin: "4px 0 0 0",
    fontSize: "0.85rem",
    color: theme.light.neutral.onSurface.dark,
    lineHeight: 1.5,
  },

  link: {
    color: theme.light.brand.surface.medium,
    textDecoration: "none",
    fontWeight: 600,
    transition: "color 0.2s ease, text-decoration 0.2s ease",
    "&:hover": {
      color: theme.light.brand.surface.darker,
      textDecoration: "underline",
    },
  },
}));
