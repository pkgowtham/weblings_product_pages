import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    abtSectionMain: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
      },
      abtSection1: {
        width: "80%",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
      },
      abtSection1Container1: {
        width: "60%",
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
        minWidth: "clamp(330px, 40%, 500px)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "& img": {
          display: "block",
          width: "100%",
          height: "100%",
        },
      },
      abtSection2Main: {
        width: "100%",
        height:'40vh',
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
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
          // fontSize: "clamp(2.6rem, 2.857vw + 2.428rem, 4.5rem)",
        },
      },
      abtSec2: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        gap: theme.spacing.s500,
      },
      abtSec2Con1: {
        flex: "1 1 20%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
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
      },
      abtSec3HeadPara: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: theme.spacing.s800,
        "& h1": {
          color:theme.light.brand.onSurface.default,
          // fontSize: "clamp(2.6rem, 2.857vw + 2.428rem, 4.5rem)",
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
        height: "100%",
        gap: theme.spacing.s500,
      },
      abtCont1ImgText: {
        flex: "1 1 20%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing.s500,
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
      "@media screen and (max-width:500px)": {
        abtSection1: {
          height: "40vh",
          marginTop: "40px",
          padding: "10px",
        },
        abtSection1Container1: {
          width: "100%",
          margin: 0,
        },
        abtSection1Container2: {
          display: "none",
          width: 0,
        },
        abtSection2: {
          gap: "30px",
        },
        abtSection2Main: {
          margin: "80px 0 0 0",
        },
        abtCont1ImgTextMain: {
          height: "30%",
        },
        abtSec3HeadPara: {
          width: "100%",
        },
      },
}))