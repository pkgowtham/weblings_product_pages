import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyles = createUseStyles((theme: Theme) => ({
  "@keyframes shieldFloat": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-3px)" },
  },

  /* ─────────────────────────────────────────────────────────────
     CONTAINER & BACKGROUND (LIGHT THEME WITH MILD GRADIENT)
     ───────────────────────────────────────────────────────────── */
  section: {
    position: "relative",
    backgroundColor: "#F8FAFC",
    background: "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 50%, #F8FAFC 100%)",
    padding: "96px 24px",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
    borderTop: "1px solid #E2E8F0",
    borderBottom: "1px solid #E2E8F0",
    "@media (max-width: 768px)": {
      padding: "64px 16px",
    },
  },
  ambientGlowTop: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "700px",
    height: "280px",
    background: "radial-gradient(ellipse at top, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)",
    pointerEvents: "none",
  },
  inner: {
    maxWidth: "1240px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  /* ─────────────────────────────────────────────────────────────
     HEADER (LIGHT THEME)
     ───────────────────────────────────────────────────────────── */
  header: {
    textAlign: "center",
    maxWidth: "720px",
    margin: "0 auto 56px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 16px",
    borderRadius: "9999px",
    backgroundColor: "#ECFDF5",
    border: "1px solid #A7F3D0",
    color: "#059669",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.02em",
    marginBottom: "18px",
    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.08)",
  },
  badgeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "$shieldFloat 2.5s ease-in-out infinite",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#0F172A",
    letterSpacing: "-0.02em",
    lineHeight: 1.18,
    margin: 0,
    "@media (max-width: 768px)": {
      fontSize: "1.875rem",
    },
  },
  subtitle: {
    marginTop: "16px",
    fontSize: "1.0625rem",
    color: "#475569",
    lineHeight: 1.6,
    margin: "16px 0 0",
    "@media (max-width: 768px)": {
      fontSize: "0.9375rem",
    },
  },

  /* ─────────────────────────────────────────────────────────────
     4-CARD GRID (LIGHT THEME)
     ───────────────────────────────────────────────────────────── */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    alignItems: "stretch",
    "@media (max-width: 1080px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "18px",
    padding: "28px 24px",
    border: "1px solid #E2E8F0",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: "rgba(16, 185, 129, 0.5)",
      boxShadow: "0 16px 36px -8px rgba(16, 185, 129, 0.15), 0 4px 12px rgba(15, 23, 42, 0.04)",
    },
  },
  iconWrapper: {
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "#0F172A",
    margin: "0 0 10px",
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    fontSize: "0.875rem",
    color: "#64748B",
    lineHeight: 1.62,
    margin: 0,
    flexGrow: 1,
  },
}));
