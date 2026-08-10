import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainSec: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "120px", // Clears 80px navbar
    paddingBottom: "80px",
    overflowX: "hidden",
  },
  contSec: {
    width: "80%",
    maxWidth: "1140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
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
  contDetailMain: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: "60px",
  },
  contDetailAddress: {
    flex: "1",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "24px",
    "& h5": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
      fontSize: "1.125rem",
    },
  },
  contDetail: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
    },
  },
  contDetHeadImg: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& h5": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    "& iframe": {
      width: "100%",
      maxWidth: "380px",
      borderRadius: "8px",
      border: `1px solid ${theme.light.neutral.border.light}`,
    },
  },
  contDetailInput: {
    flex: "1",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    "& h5": {
      color: theme.light.neutral.onSurface.title,
      fontWeight: 600,
      fontSize: "1.125rem",
      margin: 0,
    },
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
      lineHeight: "22px",
      marginBottom: "8px",
    },
  },
  labInpMain: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
    "& button": {
      padding: "10px 24px",
      outline: "none",
      border: "none",
      backgroundColor: theme.light.brand.surface.medium || theme.light.brand.onSurface.default,
      borderRadius: "6px",
      color: "white",
      fontSize: "0.9375rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "8px",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: theme.light.brand.surface.darker || theme.light.brand.surface.dark,
      },
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
      gap: "32px",
    },
    contDetailMain: {
      gap: "40px",
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
      gap: "28px",
    },
    contDetailMain: {
      flexDirection: "column",
      gap: "36px",
    },
    contDetailAddress: {
      width: "100%",
    },
    contDetHeadImg: {
      "& iframe": {
        maxWidth: "100%",
      },
    },
    contDetailInput: {
      width: "100%",
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
      gap: "24px",
    },
    contDetailMain: {
      gap: "28px",
    },
  },
}));