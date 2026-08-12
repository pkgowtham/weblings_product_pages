import { createUseStyles } from "react-jss";
import { Theme } from "../../../../../theme/themeType";

export const useStyles = createUseStyles((theme: Theme) => ({
  pageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "120px", // Clears header
    paddingBottom: "80px",
    overflowX: "hidden",
  },
  contentWrapper: {
    width: "80%",
    maxWidth: "1050px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "80px",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Hero / Top Header
  // ─────────────────────────────────────────────────────────────────────
  heroHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
    maxWidth: "750px",
  },
  heroTitle: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  heroDescription: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: "1.6",
    fontSize: "1.0625rem",
  },
  heroActions: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    marginTop: "8px",
  },
  pillBtn: {
    padding: "10px 24px",
    borderRadius: "20px",
    fontSize: "0.9375rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
  },
  pillSecondary: {
    backgroundColor: "#F0F0F0",
    color: theme.light.neutral.onSurface.title,
    "&:hover": {
      backgroundColor: "#E4E4E4",
    },
  },
  pillPrimary: {
    backgroundColor: theme.light.brand.surface.medium || "#0072C4",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.light.brand.surface.darker || "#00448c",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Feature Sections
  // ─────────────────────────────────────────────────────────────────────
  featuresContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "96px",
  },
  featureRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "56px",
  },
  featureRowReverse: {
    flexDirection: "row-reverse",
  },
  featureTextCol: {
    flex: "1",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  },
  featureCategory: {
    color: theme.light.brand.onSurface.default || "#0072C4",
    fontWeight: 600,
    fontSize: "0.9375rem",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  sparkleIcon: {
    color: "#FFC107",
    fontSize: "1rem",
  },
  featureHeading: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "1.25",
  },
  featureParagraph: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: "1.6",
    fontSize: "1rem",
  },
  featureImgCol: {
    flex: "1.1",
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  featureImage: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "contain",
    borderRadius: "12px",
  },

  // Full-width feature row (for Members)
  featureFullWidthRow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "28px",
  },
  featureFullImage: {
    width: "100%",
    height: "auto",
    borderRadius: "14px",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Video / Demo Section
  // ─────────────────────────────────────────────────────────────────────
  demoSection: {
    width: "100%",
    backgroundColor: "#F7F8FA",
    borderRadius: "16px",
    padding: "48px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "48px",
    boxSizing: "border-box",
  },
  demoVideoBox: {
    flex: "1",
    minWidth: 0,
    height: "260px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    border: `1px solid ${theme.light.neutral.border.light || "#E0E0E0"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
    position: "relative",
  },
  playButton: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#F0F0F0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, background-color 0.2s ease",
    "&:hover": {
      transform: "scale(1.08)",
      backgroundColor: "#E4E4E4",
    },
  },
  playIconTriangle: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: `16px solid ${theme.light.neutral.onSurface.medium || "#595959"}`,
    marginLeft: "4px",
  },
  demoTextCol: {
    flex: "1",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  },
  demoCategory: {
    color: theme.light.brand.onSurface.default || "#0072C4",
    fontWeight: 600,
    fontSize: "0.875rem",
  },
  demoTitle: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "1.875rem",
  },
  demoDescription: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: "1.6",
    fontSize: "1rem",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Media Queries for Responsiveness
  // ─────────────────────────────────────────────────────────────────────
  "@media screen and (max-width: 1024px)": {
    pageContainer: {
      paddingTop: "110px",
    },
    contentWrapper: {
      width: "88%",
      gap: "64px",
    },
    featuresContainer: {
      gap: "72px",
    },
    featureHeading: {
      fontSize: "1.625rem",
    },
  },

  "@media screen and (max-width: 768px)": {
    pageContainer: {
      paddingTop: "100px",
    },
    contentWrapper: {
      width: "90%",
      gap: "48px",
    },
    featureRow: {
      flexDirection: "column",
      gap: "28px",
    },
    featureRowReverse: {
      flexDirection: "column",
    },
    featureImgCol: {
      width: "100%",
    },
    demoSection: {
      flexDirection: "column",
      padding: "28px",
      gap: "28px",
    },
    demoVideoBox: {
      width: "100%",
      height: "200px",
    },
  },
}));
