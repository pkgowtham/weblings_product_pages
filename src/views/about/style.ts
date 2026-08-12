import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  // ─────────────────────────────────────────────────────────────────────
  // Section 1 – Hero (Our Journey)
  // ─────────────────────────────────────────────────────────────────────
  abtSectionMain: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflowX: "hidden",
  },
  abtSection1: {
    width: "80%",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "120px", // Ensures content clears the 80px absolute navbar with ample spacing
    paddingBottom: "40px",
  },
  abtSection1Container1: {
    flex: "0 0 60%",
    maxWidth: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  abtCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: theme.spacing.s500,
  },
  abtHeadPara: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "& h1": {
      color: theme.light.brand.onSurface.default,
    },
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      lineHeight: "30px",
    },
  },
  abtSection1Container2: {
    flex: "1",
    minWidth: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    "& img": {
      display: "block",
      width: "100%",
      height: "100%",
      maxWidth: "100%",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Section 2 – Our Foundation
  // ─────────────────────────────────────────────────────────────────────
  abtSection2Main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0 80px 0",
  },
  abtSection2: {
    width: "80%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    gap: "60px",
    "& h1": {
      color: theme.light.brand.onSurface.default,
    },
  },
  abtSec2: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: theme.spacing.s500,
  },
  abtSec2Con1: {
    flex: "1 1 20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing.s500,
  },
  abtCon1ImgHead: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 600,
    },
  },
  abtCon1Para: {
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
      textAlign: "left",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Section 3 – Our Team
  // ─────────────────────────────────────────────────────────────────────
  abtSection3Main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  abtSec3: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: theme.spacing.s800,
    paddingBottom: theme.spacing.s1600,
  },
  abtSec3HeadPara: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: theme.spacing.s800,
    "& h1": {
      color: theme.light.brand.onSurface.default,
    },
    "& p": {
      color: theme.light.neutral.onSurface.medium,
      fontWeight: 400,
      textAlign: "left",
    },
  },
  abtCont1ImgTextMain: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: theme.spacing.s500,
  },
  abtCont1ImgText: {
    flex: "1 1 20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: theme.spacing.s500,
    "& img": {
      width: "clamp(100px, 8vw + 60px, 160px)",
      height: "clamp(100px, 8vw + 60px, 160px)",
      maxWidth: "160px",
      maxHeight: "160px",
      minWidth: "80px",
      minHeight: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      flexShrink: 0,
      display: "block",
    },
  },
  abtCont1ImgContainer: {
    width: "clamp(130px, 10vw + 90px, 200px)",
    height: "clamp(130px, 10vw + 90px, 200px)",
    borderRadius: "50%",
    backgroundColor: theme.light.brand.surface.lighter,
  },
  abtCont1Text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.s300,
  },
  abtCont1Para2: {
    color: theme.light.neutral.onSurface.medium,
    fontWeight: 400,
  },
  abtCont1Para: {
    color: theme.light.brand.onSurface.default,
    fontWeight: 400,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Tablet – ≤1024px
  // ─────────────────────────────────────────────────────────────────────
  "@media screen and (max-width: 1024px)": {
    abtSection1: {
      width: "90%",
      minHeight: "auto",
      paddingTop: "110px",
      paddingBottom: "40px",
    },
    abtSection1Container1: {
      flex: "1",
      maxWidth: "100%",
    },
    abtSection1Container2: {
      display: "none",
    },
    abtSection2Main: {
      margin: "24px 0 60px 0",
    },
    abtSection2: {
      width: "90%",
      gap: "40px",
    },
    abtSec2Con1: {
      flex: "1 1 40%",
    },
    abtSec3: {
      width: "90%",
    },
    abtSec3HeadPara: {
      width: "100%",
    },
    abtCont1ImgText: {
      flex: "1 1 40%",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Mobile – ≤768px
  // ─────────────────────────────────────────────────────────────────────
  "@media screen and (max-width: 768px)": {
    abtSection1: {
      width: "92%",
      paddingTop: "110px",
      paddingBottom: "24px",
    },
    abtSection2Main: {
      margin: "16px 0 40px 0",
    },
    abtSection2: {
      width: "92%",
      gap: "32px",
    },
    abtSec2: {
      gap: "24px",
    },
    abtSec2Con1: {
      flex: "1 1 40%",
      gap: theme.spacing.s300,
    },
    abtSec3: {
      width: "92%",
      gap: theme.spacing.s600,
      paddingBottom: theme.spacing.s1200,
    },
    abtSec3HeadPara: {
      width: "100%",
      gap: theme.spacing.s600,
    },
    abtCont1ImgTextMain: {
      gap: "20px",
    },
    abtCont1ImgText: {
      flex: "1 1 40%",
      minWidth: "120px",
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // Small mobile – ≤480px
  // ─────────────────────────────────────────────────────────────────────
  "@media screen and (max-width: 480px)": {
    abtSection1: {
      width: "92%",
      paddingTop: "100px",
      paddingBottom: "16px",
    },
    abtSection2Main: {
      margin: "16px 0 32px 0",
    },
    abtSection2: {
      width: "92%",
      gap: "28px",
    },
    abtSec2: {
      flexDirection: "column",
      gap: "20px",
    },
    abtSec2Con1: {
      flex: "1 1 100%",
      gap: theme.spacing.s200,
    },
    abtSec3: {
      width: "92%",
      gap: theme.spacing.s400,
      paddingBottom: theme.spacing.s800,
    },
    abtSec3HeadPara: {
      width: "100%",
      gap: theme.spacing.s400,
    },
    abtCont1ImgTextMain: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    },
    abtCont1ImgText: {
      flex: "none",
      minWidth: 0,
      width: "100%",
      gap: theme.spacing.s200,
      "& img": {
        width: "100px",
        height: "100px",
        maxWidth: "100px",
        maxHeight: "100px",
      },
    },
    abtCont1Text: {
      gap: theme.spacing.s100,
    },
  },
}));
