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
    paddingTop: "120px",
    paddingBottom: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "border-box",
    fontFamily: "'Open Sans', sans-serif",
    "@media (max-width: 768px)": {
      paddingTop: "96px",
      paddingBottom: "60px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },

  // Soft Ambient Glow
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
    maxWidth: "960px",
    margin: "0 auto",
  },

  // Single Unified Card
  unifiedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    border: `1.5px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    boxShadow: "0 24px 70px -15px rgba(0, 68, 140, 0.13), 0 0 0 1px rgba(0, 114, 196, 0.05)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    backdropFilter: "blur(16px)",
  },

  // The scrollable inner content container holding both top content and terms
  scrollContainer: {
    maxHeight: "600px",
    overflowY: "auto",
    padding: "36px 44px 28px 44px",
    boxSizing: "border-box",
    fontFamily: "'Open Sans', sans-serif",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 114, 196, 0.04)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0, 114, 196, 0.25)",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(0, 114, 196, 0.45)",
    },
    "@media (max-width: 768px)": {
      padding: "24px 20px 20px 20px",
      maxHeight: "520px",
    },
  },

  // Top Content Section (seamlessly inside the scroll container)
  topSection: {
    marginBottom: "28px",
  },

  badgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
    flexWrap: "wrap",
  },

  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "rgba(0, 114, 196, 0.08)",
    color: theme.light.brand.surface.darker || "#004B82",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "5px 12px",
    borderRadius: "20px",
    border: "1px solid rgba(0, 114, 196, 0.18)",
  },

  badgeGreen: {
    backgroundColor: "rgba(46, 125, 50, 0.09)",
    color: "#2E7D32",
    borderColor: "rgba(46, 125, 50, 0.22)",
  },

  mainHeading: {
    fontSize: "2.1rem",
    fontWeight: 800,
    color: theme.light.brand.surface.darker || "#00325A",
    margin: "0 0 8px 0",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    fontFamily: "'Open Sans', sans-serif",
    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  },

  mainSubtitle: {
    fontSize: "0.95rem",
    color: theme.light.neutral.onSurface.medium,
    margin: "0 0 20px 0",
    lineHeight: 1.6,
  },

  // Beta & Database Highlight Cards Grid
  highlightGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    "@media (max-width: 720px)": {
      gridTemplateColumns: "1fr",
      gap: "10px",
    },
  },

  highlightItem: {
    backgroundColor: "rgba(245, 250, 255, 0.75)",
    border: "1px solid rgba(0, 114, 196, 0.16)",
    borderRadius: "14px",
    padding: "16px 18px",
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    boxShadow: "0 4px 12px rgba(0, 68, 140, 0.03)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: "rgba(0, 114, 196, 0.35)",
      boxShadow: "0 6px 18px rgba(0, 114, 196, 0.08)",
    },
  },

  highlightIconWrapper: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 114, 196, 0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0072C4",
    flexShrink: 0,
  },

  highlightContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  highlightTitle: {
    margin: 0,
    fontWeight: 700,
    fontSize: "0.92rem",
    color: theme.light.brand.surface.darker,
    letterSpacing: "-0.01em",
  },

  highlightDesc: {
    margin: 0,
    fontSize: "0.84rem",
    color: theme.light.neutral.onSurface.medium,
    lineHeight: 1.5,
  },

  // Subtle divider between top content and terms
  sectionDivider: {
    height: "1px",
    background: `linear-gradient(90deg, transparent 0%, ${theme.light.brand.border.light || "#B0D6FF"} 20%, ${theme.light.brand.border.light || "#B0D6FF"} 80%, transparent 100%)`,
    margin: "24px 0 28px 0",
  },

  // Terms Body Styles
  introParagraph: {
    fontSize: "1.02rem",
    lineHeight: 1.8,
    color: theme.light.neutral.onSurface.title,
    marginBottom: "26px",
    fontWeight: 400,
  },

  sectionHeading: {
    color: theme.light.brand.surface.darker,
    fontSize: "1.2rem",
    fontWeight: 700,
    marginTop: "30px",
    marginBottom: "12px",
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
    marginBottom: "12px",
    "& strong": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
    },
  },

  strong: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 600,
  },

  refundBox: {
    backgroundColor: theme.light.brand.surface.lighter,
    border: `1px solid ${theme.light.brand.border.light}`,
    borderRadius: "16px",
    padding: "26px 28px",
    marginTop: "32px",
    marginBottom: "16px",
    "@media (max-width: 768px)": {
      padding: "20px 16px",
    },
  },

  refundTitle: {
    color: theme.light.brand.surface.darker,
    fontSize: "1.22rem",
    fontWeight: 700,
    margin: "0 0 6px 0",
    letterSpacing: "-0.01em",
  },

  refundSubtitle: {
    fontSize: "0.9rem",
    color: theme.light.neutral.onSurface.medium,
    margin: "0 0 16px 0",
  },

  endDocumentMarker: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "24px 0 12px 0",
    color: "#2E7D32",
    fontSize: "0.88rem",
    fontWeight: 600,
  },

  // Sticky Bottom Action Bar INSIDE THE CARD
  cardStickyFooter: {
    position: "sticky",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderTop: `1.5px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    boxShadow: "0 -8px 24px rgba(0, 40, 100, 0.08)",
    padding: "16px 36px",
    boxSizing: "border-box",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    "@media (max-width: 680px)": {
      flexDirection: "column",
      alignItems: "stretch",
      padding: "14px 18px",
      gap: "12px",
    },
  },

  footerTextGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  footerTitle: {
    margin: 0,
    fontSize: "0.92rem",
    fontWeight: 700,
    color: theme.light.neutral.onSurface.title,
    fontFamily: "'Open Sans', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  footerSubtext: {
    margin: 0,
    fontSize: "0.82rem",
    color: theme.light.neutral.onSurface.medium,
    lineHeight: 1.4,
    fontFamily: "'Open Sans', sans-serif",
  },

  agreeButton: {
    padding: "13px 40px",
    fontSize: "0.98rem",
    fontWeight: 700,
    borderRadius: "12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 22px rgba(0, 114, 196, 0.28)",
    transition: "all 0.25s ease-in-out",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 28px rgba(0, 114, 196, 0.38)",
    },
    "@media (max-width: 680px)": {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      padding: "13px 20px",
    },
  },

  agreeButtonDisabled: {
    opacity: 0.45,
    cursor: "not-allowed !important",
    filter: "grayscale(30%)",
    boxShadow: "none !important",
    transform: "none !important",
    pointerEvents: "none",
  },
}));
