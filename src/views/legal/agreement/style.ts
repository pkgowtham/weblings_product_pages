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

  // Page Header
  pageHeader: {
    maxWidth: "820px",
    margin: "0 auto 48px",
    textAlign: "center",
  },

  eyebrow: {
    display: "inline-flex",
    padding: "7px 16px",
    marginBottom: "18px",
    border: `1px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    borderRadius: "24px",
    backgroundColor: theme.light.brand.surface.lighter || "#F0F6FE",
    color: theme.light.brand.surface.darker || "#004B82",
    fontSize: "0.76rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  title: {
    margin: "0 0 16px",
    color: theme.light.brand.surface.darker || "#00325A",
    fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
    lineHeight: 1.14,
    fontWeight: 800,
    fontFamily: "'Open Sans', sans-serif",
    letterSpacing: "-0.02em",
  },

  titleAccent: {
    color: theme.light.brand.surface.medium || "#0072C4",
  },

  intro: {
    margin: 0,
    color: theme.light.neutral.onSurface.medium || "#4A607A",
    fontSize: "1.06rem",
    lineHeight: 1.75,
  },

  // Section label above the pillars
  sectionLabel: {
    fontSize: "0.72rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: theme.light.neutral.onSurface.medium || "#7A90A8",
    textAlign: "center",
    marginBottom: "28px",
  },

  // ─── Trust Pillars — 2-column divider layout, no card backgrounds ───
  trustGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // Hairline crosshair dividers between the 4 cells
    borderTop: `1px solid rgba(0, 114, 196, 0.10)`,
    borderLeft: `1px solid rgba(0, 114, 196, 0.10)`,
    marginBottom: "40px",
    "@media (max-width: 680px)": {
      gridTemplateColumns: "1fr",
    },
  },

  trustItem: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "flex-start",
    gap: "16px",
    padding: "32px 28px",
    borderRight: `1px solid rgba(0, 114, 196, 0.10)`,
    borderBottom: `1px solid rgba(0, 114, 196, 0.10)`,
    boxSizing: "border-box" as const,
    transition: "background-color 0.2s ease",
    // Accent on left edge via left border on the icon wrapper
    "&:hover": {
      backgroundColor: "rgba(0, 114, 196, 0.03)",
    },
    "@media (max-width: 680px)": {
      padding: "24px 0",
    },
  },

  // Colour variants control the icon wrapper tint
  trustItemBlue: {},
  trustItemEmerald: {},
  trustItemPurple: {},
  trustItemCyan: {},

  trustIconWrap: {
    flexShrink: 0,
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2px",
  },

  trustIconBlue: {
    backgroundColor: "rgba(59, 130, 246, 0.10)",
  },

  trustIconEmerald: {
    backgroundColor: "rgba(16, 185, 129, 0.10)",
  },

  trustIconPurple: {
    backgroundColor: "rgba(168, 85, 247, 0.10)",
  },

  trustIconCyan: {
    backgroundColor: "rgba(6, 182, 212, 0.10)",
  },

  trustItemText: {
    flex: 1,
    minWidth: 0,
  },

  trustItemTitle: {
    margin: "0 0 6px",
    fontSize: "1rem",
    fontWeight: 800,
    color: theme.light.brand.surface.darker || "#00325A",
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },

  trustItemBody: {
    margin: 0,
    fontSize: "0.875rem",
    color: theme.light.neutral.onSurface.medium || "#5E718D",
    lineHeight: 1.72,
  },

  // ─── Founder's Note — avatar left, content right ───
  founderCard: {
    backgroundColor: "rgba(0, 114, 196, 0.03)",
    border: `1.5px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    borderRadius: "18px",
    padding: "36px 40px",
    marginBottom: "40px",
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "flex-start",
    gap: "28px",
    "@media (max-width: 680px)": {
      flexDirection: "column" as const,
      alignItems: "center",
      padding: "28px 22px",
      gap: "20px",
    },
  },

  founderAvatar: {
    flexShrink: 0,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: `3px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    boxShadow: "0 4px 16px rgba(0, 114, 196, 0.15)",
    display: "block",
    "@media (max-width: 680px)": {
      width: "64px",
      height: "64px",
    },
  },

  founderContent: {
    flex: 1,
    minWidth: 0,
  },

  founderQuote: {
    margin: "0 0 14px",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: theme.light.brand.surface.darker || "#00325A",
    fontStyle: "italic",
    letterSpacing: "-0.01em",
    lineHeight: 1.4,
  },

  founderText: {
    fontSize: "0.95rem",
    color: theme.light.neutral.onSurface.medium || "#4A607A",
    lineHeight: 1.8,
    margin: "0 0 12px",
  },

  founderDivider: {
    borderTop: `1px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    margin: "20px 0 16px",
  },

  founderSignatureRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    "@media (max-width: 480px)": {
      flexDirection: "column" as const,
      alignItems: "flex-start",
      gap: "12px",
    },
  },

  founderSignature: {
    fontFamily: "'Caveat', cursive",
    fontSize: "2.2rem",
    color: theme.light.brand.surface.darker || "#00325A",
    transform: "rotate(-2deg)",
    display: "inline-block",
    lineHeight: 1,
    marginBottom: "2px",
  },

  founderRole: {
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: theme.light.neutral.onSurface.medium || "#5E718D",
  },

  founderEmailButton: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    padding: "9px 18px",
    borderRadius: "10px",
    backgroundColor: theme.light.brand.surface.lighter || "#EBF4FD",
    border: `1px solid ${theme.light.brand.border.light || "#B0D6FF"}`,
    color: theme.light.brand.surface.darker || "#004B82",
    fontSize: "0.85rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background-color 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      backgroundColor: theme.light.brand.border.light || "#D0E8F8",
      boxShadow: "0 2px 10px rgba(0, 114, 196, 0.15)",
    },
  },

  // ─── Bottom Page Action Section ───
  pageAction: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "14px",
    paddingTop: "8px",
  },

  pageActionNote: {
    margin: 0,
    fontSize: "0.78rem",
    color: theme.light.neutral.onSurface.medium || "#7A90A8",
    textAlign: "center" as const,
  },

  agreeButton: {
    padding: "14px 40px",
    fontSize: "0.98rem",
    fontWeight: 700,
    color: "#FFFFFF",
    backgroundColor: theme.light.brand.surface.medium || "#0072C4",
    background: `linear-gradient(90deg, ${theme.light.brand.surface.medium || "#0072C4"} 0%, ${theme.light.brand.surface.dark || "#005ea6"} 100%)`,
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 22px rgba(0, 114, 196, 0.28)",
    transition: "all 0.25s ease-in-out",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    lineHeight: 1,
    fontFamily: "'Open Sans', sans-serif",
    "&:hover": {
      backgroundColor: theme.light.brand.surface.dark || "#005ea6",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 28px rgba(0, 114, 196, 0.38)",
    },
    "@media (max-width: 680px)": {
      width: "100%",
      padding: "14px 20px",
    },
  },

  teamLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: theme.light.brand.surface.medium || "#0072C4",
    fontSize: "0.875rem",
    fontWeight: 600,
    textDecoration: "none",
    marginTop: "4px",
    transition: "color 0.2s ease",
    "&:hover": {
      color: theme.light.brand.surface.dark || "#004B82",
      textDecoration: "underline",
      "& $teamLinkArrow": {
        transform: "translateX(3px)",
      },
    },
  },

  teamLinkArrow: {
    display: "inline-block",
    transition: "transform 0.2s ease",
  },

}));
