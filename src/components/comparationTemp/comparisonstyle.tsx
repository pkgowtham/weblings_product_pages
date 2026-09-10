import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  MainComparisontemp: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "0 24px 80px 24px",
    boxSizing: "border-box",
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    maxWidth: "750px",
  },
  subtitle: {
    color: "#0072C4",
    fontSize: "0.8125rem",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  title: {
    color: "#1F2937",
    fontSize: "2.5rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: 0,
    lineHeight: 1.2,
    "@media (max-width: 768px)": {
      fontSize: "1.875rem",
    },
  },
  titleDescription: {
    color: "#3A3A3A",
    fontSize: "1.125rem",
    lineHeight: 1.7,
    margin: 0,
    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Table Outer Wrapper & Responsiveness
  // ─────────────────────────────────────────────────────────────────────
  tableWrapper: {
    width: "100%",
    maxWidth: "1100px",
    marginTop: "40px",
    paddingTop: "24px", // Ensures top badge tooltip is never clipped!
    overflowX: "auto",
    boxSizing: "border-box",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    minWidth: "750px",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Column 1 (Left Feature Titles)
  // ─────────────────────────────────────────────────────────────────────
  thPriceLabel: {
    width: "28%",
    textAlign: "left",
    verticalAlign: "middle",
    padding: "24px 16px",
    color: "#1F2937",
    fontSize: "1.25rem",
    fontWeight: 700,
    borderBottom: "1px solid #ECECEC",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Column 2 (Weblings Worksuite - Highlighted Column)
  // ─────────────────────────────────────────────────────────────────────
  thHighlight: {
    width: "36%",
    backgroundColor: "#F4F9FD",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    padding: "36px 20px 24px 20px",
    textAlign: "center",
    verticalAlign: "top",
    position: "relative",
    borderBottom: "1px solid #ECECEC",
  },
  badgeTooltip: {
    position: "absolute",
    top: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#0072C4",
    color: "#FFFFFF",
    fontSize: "0.8125rem",
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: "8px",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 12px rgba(0, 114, 196, 0.25)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    zIndex: 10,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-6px",
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: "6px solid #0072C4",
    },
  },
  weblingsHeaderTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#0072C4",
    fontSize: "1.25rem",
    fontWeight: 700,
    height: "32px",
    marginBottom: "12px",
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "6px",
    margin: "12px 0 8px 0",
    whiteSpace: "nowrap",
  },
  priceLarge: {
    fontSize: "2.35rem",
    fontWeight: 700,
    color: "#1F2937",
    lineHeight: 1,
    whiteSpace: "nowrap",
  },
  pricePeriod: {
    fontSize: "0.875rem",
    color: "#555555",
    whiteSpace: "nowrap",
  },
  includesNote: {
    fontSize: "0.875rem",
    color: "#555555",
    lineHeight: 1.5,
    margin: "8px 0 16px 0",
    padding: "0 10px",
    minHeight: "42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  includesKey: {
    color: "#0072C4",
    fontWeight: 700,
    marginRight: "4px",
  },
  btnGetTrial: {
    width: "90%",
    maxWidth: "260px",
    padding: "10px 20px",
    backgroundColor: "#FFFFFF",
    border: "1.5px solid #0072C4",
    borderRadius: "8px",
    color: "#0072C4",
    fontSize: "0.9375rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#E6F2FF",
    },
  },
  actionSubtext: {
    fontSize: "0.8125rem",
    color: "#777777",
    margin: "8px 0 0 0",
  },
  badgeSpacer: {
    height: "31px",
    marginBottom: "4px",
  },
  actionPlaceholder: {
    height: "43px",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Column 3 (Other Workspaces)
  // ─────────────────────────────────────────────────────────────────────
  thNormal: {
    width: "36%",
    padding: "36px 20px 24px 20px",
    textAlign: "center",
    verticalAlign: "top",
    position: "relative",
    borderBottom: "1px solid #ECECEC",
  },
  otherHeaderTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    color: "#1F2937",
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "12px",
  },

  // ─────────────────────────────────────────────────────────────────────
  // Table Body Rows & Accordion Indentation
  // ─────────────────────────────────────────────────────────────────────
  categoryRow: {
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    "&:hover": {
      backgroundColor: "#FAFAFA",
    },
  },
  tdFeatureName: {
    padding: "16px 16px",
    textAlign: "left",
    fontSize: "0.9375rem",
    fontWeight: 600,
    color: "#374151",
    borderBottom: "1px solid #F0F0F0",
    verticalAlign: "middle",
    userSelect: "none",
  },
  tdSubFeatureName: {
    padding: "14px 16px 14px 44px", // Stairs-like indent!
    textAlign: "left",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#4B5563",
    borderBottom: "1px solid #F0F0F0",
    verticalAlign: "middle",
  },
  chevron: {
    display: "inline-block",
    marginRight: "8px",
    color: "#6B7280",
    fontSize: "0.75rem",
    transition: "transform 0.2s ease",
  },
  chevronRotated: {
    transform: "rotate(90deg)",
  },
  tdHighlight: {
    backgroundColor: "#F4F9FD",
    padding: "16px 20px",
    textAlign: "center",
    verticalAlign: "middle",
    borderBottom: "1px solid #ECECEC",
  },
  tdNormal: {
    padding: "16px 20px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "0.9375rem",
    color: "#4B5563",
    fontWeight: 500,
    borderBottom: "1px solid #F0F0F0",
  },
  tdHighlightLast: {
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  },
}));
