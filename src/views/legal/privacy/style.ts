import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyles = createUseStyles((theme: Theme) => ({
  "@keyframes twinkle": {
    "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
    "50%": { opacity: 0.85, transform: "scale(1.2)", filter: "drop-shadow(0 0 4px #FFFFFF)" },
  },

  pageWrapper: {
    minHeight: "100vh",
    position: "relative",
    background: "linear-gradient(to bottom, #070b19 0%, #172c5a 50%, #2e5c9a 100%)",
    color: "#F8FAFC",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "120px",
    paddingBottom: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      paddingTop: "100px",
      paddingBottom: "60px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
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
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
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
    color: "#FFFFFF",
    letterSpacing: "-0.02em",
    margin: "0 0 12px 0",
    lineHeight: 1.15,
    "@media (max-width: 768px)": {
      fontSize: "2.15rem",
    },
  },

  lastUpdated: {
    fontSize: "0.95rem",
    color: "#94A3B8",
    margin: 0,
  },

  glassPanel: {
    backgroundColor: "rgba(15, 23, 42, 0.82)",
    backdropFilter: "blur(16px)",
    borderRadius: "28px",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 114, 196, 0.15)",
    padding: "48px 56px",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      padding: "32px 24px",
      borderRadius: "20px",
    },
  },

  introParagraph: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#E2E8F0",
    marginBottom: "28px",
  },

  sectionHeading: {
    color: "#F8FAFC",
    fontSize: "1.25rem",
    fontWeight: 700,
    marginTop: "36px",
    marginBottom: "14px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "10px",
    letterSpacing: "-0.01em",
  },

  paragraph: {
    color: "#CBD5E1",
    fontSize: "0.95rem",
    lineHeight: 1.75,
    marginBottom: "16px",
  },

  list: {
    listStyleType: "disc",
    paddingLeft: "24px",
    color: "#CBD5E1",
    fontSize: "0.95rem",
    lineHeight: 1.75,
    marginBottom: "16px",
  },

  listItem: {
    marginBottom: "8px",
    "& strong": {
      color: "#F8FAFC",
      fontWeight: 600,
    },
  },

  strong: {
    color: "#F8FAFC",
    fontWeight: 600,
  },

  grievanceBox: {
    backgroundColor: "rgba(2, 6, 23, 0.65)",
    border: "1px solid rgba(51, 65, 85, 0.85)",
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
    color: "#CBD5E1",
    lineHeight: 1.6,
  },

  grievanceNote: {
    margin: "4px 0 0 0",
    fontSize: "0.85rem",
    color: "#64748B",
    lineHeight: 1.5,
  },

  link: {
    color: "#38BDF8",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s ease, text-decoration 0.2s ease",
    "&:hover": {
      color: "#60A5FA",
      textDecoration: "underline",
    },
  },
}));
