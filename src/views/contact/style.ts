import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  "@keyframes floatSlow": {
    "0%, 100%": {
      transform: "translate(0, 0) scale(1)",
    },
    "50%": {
      transform: "translate(30px, -25px) scale(1.08)",
    },
  },
  "@keyframes floatReverse": {
    "0%, 100%": {
      transform: "translate(0, 0) scale(1)",
    },
    "50%": {
      transform: "translate(-25px, 30px) scale(0.95)",
    },
  },
  "@keyframes pulseDot": {
    "0%, 100%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 0.4,
      transform: "scale(0.8)",
    },
  },

  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    paddingTop: "140px",
    paddingBottom: "100px",
    boxSizing: "border-box",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "@media (max-width: 768px)": {
      paddingTop: "110px",
      paddingBottom: "60px",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Animated Ambient Background (Clean light theme matching Drive/Calendar)
  // ─────────────────────────────────────────────────────────────────────
  ambientCanvas: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 0,
  },

  dotGridOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(#E2E8F0 1.2px, transparent 1.2px)",
    backgroundSize: "28px 28px",
    opacity: 0.6,
  },

  ambientBlob1: {
    position: "absolute",
    top: "-80px",
    left: "15%",
    width: "550px",
    height: "550px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(0, 114, 196, 0.10) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 75%)",
    filter: "blur(70px)",
    animation: "$floatSlow 16s ease-in-out infinite",
  },

  ambientBlob2: {
    position: "absolute",
    top: "200px",
    right: "8%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.09) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 75%)",
    filter: "blur(70px)",
    animation: "$floatReverse 20s ease-in-out infinite",
  },

  ambientBlob3: {
    position: "absolute",
    bottom: "80px",
    left: "30%",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
    filter: "blur(80px)",
    animation: "$floatSlow 18s ease-in-out infinite",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Content Container
  // ─────────────────────────────────────────────────────────────────────
  contentContainer: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1120px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 16px",
    borderRadius: "9999px",
    backgroundColor: "#EFF6FF",
    border: "1px solid #BFDBFE",
    color: "#0072C4",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.04em",
    marginBottom: "20px",
    cursor: "default",
    boxShadow: "0 2px 6px rgba(0, 114, 196, 0.06)",
  },

  badgePulseDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#0072C4",
    boxShadow: "0 0 8px rgba(0, 114, 196, 0.8)",
    animation: "$pulseDot 2s infinite ease-in-out",
  },

  heroTitle: {
    fontSize: "2.85rem",
    fontWeight: 800,
    color: "#0F172A",
    textAlign: "center",
    lineHeight: 1.2,
    marginBottom: "16px",
    maxWidth: "780px",
    letterSpacing: "-0.025em",
    "@media (max-width: 768px)": {
      fontSize: "2.1rem",
      lineHeight: 1.25,
    },
    "@media (max-width: 480px)": {
      fontSize: "1.75rem",
    },
  },

  heroSubtitle: {
    fontSize: "1.05rem",
    color: "#64748B",
    fontWeight: 400,
    maxWidth: "700px",
    textAlign: "center",
    lineHeight: 1.65,
    marginBottom: "52px",
    "@media (max-width: 768px)": {
      fontSize: "0.9375rem",
      marginBottom: "36px",
    },
  },

  mainGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "36px",
    alignItems: "start",
    boxSizing: "border-box",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      gap: "32px",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Left Column: Founder Promise
  // ─────────────────────────────────────────────────────────────────────
  founderColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  founderCard: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderTop: "3px solid #0072C4",
    borderRadius: "24px",
    padding: "36px",
    boxShadow: "0 16px 40px -12px rgba(0, 114, 196, 0.08), 0 4px 16px rgba(0, 0, 0, 0.02)",
    boxSizing: "border-box",
  },

  mailIconBox: {
    width: "48px",
    height: "48px",
    backgroundColor: "#EFF6FF",
    border: "1px solid #DBEAFE",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0, 114, 196, 0.08)",
  },

  founderCardTitle: {
    fontSize: "1.35rem",
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: "16px",
  },

  quoteContainer: {
    position: "relative",
    paddingLeft: "10px",
    marginBottom: "22px",
  },

  quoteMark: {
    position: "absolute",
    left: "-8px",
    top: "-14px",
    fontSize: "3.5rem",
    fontFamily: "'Playfair Display', Georgia, serif",
    color: "#CBD5E1",
    lineHeight: 1,
    userSelect: "none",
    opacity: 0.6,
  },

  quoteText: {
    color: "#334155",
    fontSize: "0.9375rem",
    lineHeight: "1.65",
    fontStyle: "italic",
    marginBottom: "14px",
    position: "relative",
    zIndex: 2,
  },

  emailLink: {
    color: "#0072C4",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontStyle: "normal",
    fontWeight: 600,
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#005696",
    },
  },

  founderFooter: {
    borderTop: "1px solid #F1F5F9",
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  founderAvatar: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #E2E8F0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },

  founderName: {
    fontFamily: "'Caveat', cursive",
    fontSize: "1.85rem",
    color: "#0F172A",
    lineHeight: 1,
    transform: "rotate(-2deg)",
  },

  founderRole: {
    fontSize: "0.75rem",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginTop: "4px",
    fontWeight: 600,
  },

  // Guarantees Card
  guaranteesCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: "20px",
    border: "1px solid #E2E8F0",
    padding: "22px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
  },

  guaranteeRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },

  checkBadge: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    backgroundColor: "#ECFDF5",
    border: "1px solid #A7F3D0",
    color: "#059669",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    flexShrink: 0,
    marginTop: "1px",
  },

  guaranteeText: {
    fontSize: "0.875rem",
    color: "#334155",
    lineHeight: 1.5,
    fontWeight: 500,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Right Column: Form Card
  // ─────────────────────────────────────────────────────────────────────
  formCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: "24px",
    padding: "38px 42px",
    boxShadow: "0 16px 40px -12px rgba(0, 114, 196, 0.08), 0 4px 16px rgba(0, 0, 0, 0.02)",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      padding: "24px 20px",
    },
  },

  formTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: "8px",
    lineHeight: 1.3,
  },

  formSubtitle: {
    fontSize: "0.9375rem",
    color: "#64748B",
    marginBottom: "28px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      gap: "18px",
    },
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  fieldLabel: {
    fontSize: "11px",
    fontWeight: 700,
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  painpointLabel: {
    fontSize: "11px",
    fontWeight: 700,
    color: "#0072C4",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#F8FAFC",
    border: "1px solid #E2E8F0",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "#0F172A",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    "&::placeholder": {
      color: "#94A3B8",
    },
    "&:focus": {
      borderColor: "#0072C4",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 0 0 3px rgba(0, 114, 196, 0.12)",
    },
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#F8FAFC",
    border: "1px solid #E2E8F0",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "#0F172A",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    resize: "none",
    minHeight: "130px",
    "&::placeholder": {
      color: "#94A3B8",
    },
    "&:focus": {
      borderColor: "#0072C4",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 0 0 3px rgba(0, 114, 196, 0.12)",
    },
  },

  fieldHint: {
    fontSize: "11px",
    color: "#94A3B8",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "4px",
  },

  submitButton: {
    width: "100%",
    backgroundColor: "#0072C4",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "15px",
    padding: "15px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 8px 20px -4px rgba(0, 114, 196, 0.35)",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#0062A8",
      transform: "translateY(-1px)",
      boxShadow: "0 12px 24px -4px rgba(0, 114, 196, 0.45)",
      "& $submitArrow": {
        transform: "translateX(4px)",
      },
    },
    "&:active": {
      transform: "translateY(0)",
    },
  },

  submitArrow: {
    transition: "transform 0.2s ease",
    display: "flex",
    alignItems: "center",
  },

  // Submission Confirmation View
  successBox: {
    padding: "36px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
  },

  successIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#ECFDF5",
    border: "1px solid #A7F3D0",
    color: "#059669",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  successTitle: {
    fontSize: "1.4rem",
    fontWeight: 700,
    color: "#0F172A",
  },

  successMessage: {
    fontSize: "0.9375rem",
    color: "#475569",
    maxWidth: "420px",
    lineHeight: 1.6,
  },

  resetBtn: {
    marginTop: "12px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "1px solid #CBD5E1",
    color: "#475569",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#0072C4",
      borderColor: "#0072C4",
      backgroundColor: "#EFF6FF",
    },
  },
}));
