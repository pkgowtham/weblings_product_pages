import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainSec: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "120px", // Clears floating navbar
    paddingBottom: "80px",
    overflowX: "hidden",
  },
  contSec: {
    width: "80%",
    maxWidth: "1050px",
    display: "flex",
    flexDirection: "column",
    gap: "56px",
  },
  contHeadMain: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    "& h1": {
      color: theme.light.brand.onSurface.default,
      marginBottom: "8px",
    },
  },
  contHead: {
    display: "flex",
    width: "100%",
    maxWidth: "750px",
    flexDirection: "column",
    gap: "8px",
    alignItems: "flex-start",
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      lineHeight: "24px",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1. Top Section: Enquire Card
  // ─────────────────────────────────────────────────────────────────────
  enquireCard: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    backgroundColor: "#FFFFFF",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    borderRadius: "16px",
    padding: "44px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
  },
  enquireHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  enquireTitle: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "1.875rem",
  },
  enquireSubtitle: {
    color: theme.light.neutral.onSurface.medium,
    lineHeight: "1.5",
    maxWidth: "600px",
  },
  enquireForm: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  fieldLabel: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: theme.light.neutral.onSurface.title,
    marginBottom: "6px",
  },

  // Category & Priority Row
  categoryPriorityRow: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    width: "100%",
  },

  categoryWrapper: {
    flex: "1",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  selectTrigger: {
    height: "42px",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    borderRadius: "6px",
    padding: "0 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    userSelect: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      borderColor: theme.light.brand.border.medium,
    },
  },
  selectTriggerActive: {
    borderColor: `${theme.light.brand.border.medium} !important`,
    boxShadow: `0 0 0 1px ${theme.light.brand.border.medium}`,
  },
  selectedCategoryText: {
    color: theme.light.neutral.onSurface.title,
    fontSize: "0.9375rem",
  },
  placeholderCategoryText: {
    color: theme.light.neutral.onSurface.medium || "#595959",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "'Inter', 'Open Sans', sans-serif",
  },
  dropdownMenu: {
    position: "absolute",
    top: "72px",
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    borderRadius: "8px",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.12)",
    zIndex: 100,
    maxHeight: "240px",
    overflowY: "auto",
  },
  dropdownItem: {
    padding: "10px 16px",
    fontSize: "0.875rem",
    color: theme.light.neutral.onSurface.title,
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    "&:hover": {
      backgroundColor: theme.light.brand.surface.lighter || "#E6F2FF",
      color: theme.light.brand.onSurface.default,
    },
  },

  // Priority Selector
  priorityWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  priorityGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    height: "42px",
    alignItems: "center",
  },
  priorityBtn: {
    padding: "8px 18px",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    color: theme.light.neutral.onSurface.medium,
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
    "&:hover": {
      borderColor: theme.light.brand.border.medium,
    },
  },
  priorityActive: {
    borderColor: `${theme.light.brand.onSurface.default || "#0072C4"} !important`,
    boxShadow: `0 0 0 1px ${theme.light.brand.onSurface.default || "#0072C4"}`,
    color: theme.light.brand.onSurface.default || "#0072C4",
    backgroundColor: theme.light.brand.surface.lighter || "#E6F2FF",
    fontWeight: 500,
  },

  // Textarea
  textareaWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  textareaInput: {
    width: "100%",
    padding: "12px 14px",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    borderRadius: "6px",
    fontSize: "0.9375rem",
    fontFamily: "'Inter', 'Open Sans', sans-serif",
    boxSizing: "border-box",
    resize: "vertical",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      borderColor: theme.light.brand.border.medium,
    },
    "&:focus": {
      borderColor: theme.light.brand.border.medium,
      boxShadow: `0 0 0 1px ${theme.light.brand.border.medium}`,
      outline: "none",
    },
    "&::placeholder": {
      fontFamily: "'Inter', 'Open Sans', sans-serif",
      color: theme.light.neutral.onSurface.medium || "#595959",
      fontWeight: 500,
      fontSize: "14px",
    },
  },

  // Attachments Dropzone
  attachmentsWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  dropzone: {
    width: "100%",
    height: "110px",
    border: `1px dashed ${theme.light.neutral.border.medium || "#BFBFBF"}`,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#FAFAFA",
    transition: "border-color 0.2s ease, background-color 0.2s ease",
    "&:hover": {
      borderColor: theme.light.brand.onSurface.default,
      backgroundColor: theme.light.brand.surface.lighter || "#E6F2FF",
    },
  },
  fileInputHidden: {
    display: "none",
  },
  uploadIcon: {
    color: "#8C8C8C",
  },

  // Form Footer Actions
  cardDivider: {
    width: "100%",
    borderTop: `1px solid ${theme.light.neutral.border.light || "#E8E8E8"}`,
    marginTop: "8px",
  },
  formActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "12px",
  },
  submitBtn: {
    padding: "10px 24px",
  },
  cancelBtn: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#F0F0F0",
    borderRadius: "6px",
    color: theme.light.neutral.onSurface.title,
    fontSize: "0.875rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. Middle Section: Our Office Cards
  // ─────────────────────────────────────────────────────────────────────
  officeSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  sectionHeading: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  officeGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "24px",
  },
  officeCard: {
    backgroundColor: "#FFFFFF",
    border: `1px solid ${theme.light.neutral.border.light || "#E6E6E6"}`,
    borderRadius: "12px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "14px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
  },
  officeCardTitle: {
    color: theme.light.neutral.onSurface.title,
    fontWeight: 700,
    fontSize: "1.0625rem",
  },
  officeDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      lineHeight: "1.5",
    },
  },
  quickContactHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  quickContactLink: {
    color: theme.light.brand.onSurface.default,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. Bottom Section: Full-Size Location Map
  // ─────────────────────────────────────────────────────────────────────
  mapSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fullMapWrapper: {
    width: "100%",
    height: "380px",
    borderRadius: "14px",
    overflow: "hidden",
    border: `1px solid ${theme.light.neutral.border.light || "#D9D9D9"}`,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    "& iframe": {
      display: "block",
      width: "100%",
      height: "100%",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Media Queries for Responsiveness
  // ─────────────────────────────────────────────────────────────────────

  // Tablet ≤1024px
  "@media screen and (max-width: 1024px)": {
    mainSec: {
      paddingTop: "110px",
      paddingBottom: "60px",
    },
    contSec: {
      width: "88%",
      gap: "44px",
    },
    enquireCard: {
      padding: "32px",
    },
    officeGrid: {
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
  },

  // Mobile ≤768px (Stack to 1 column)
  "@media screen and (max-width: 768px)": {
    mainSec: {
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    contSec: {
      width: "90%",
      gap: "36px",
    },
    enquireCard: {
      padding: "24px",
    },
    categoryPriorityRow: {
      flexDirection: "column",
      gap: "16px",
    },
    officeGrid: {
      gridTemplateColumns: "1fr",
      gap: "16px",
    },
    fullMapWrapper: {
      height: "300px",
    },
  },

  // Small Mobile ≤480px
  "@media screen and (max-width: 480px)": {
    mainSec: {
      paddingTop: "95px",
      paddingBottom: "32px",
    },
    contSec: {
      width: "92%",
      gap: "28px",
    },
    enquireCard: {
      padding: "18px",
      borderRadius: "10px",
    },
    fullMapWrapper: {
      height: "250px",
    },
  },
}));
