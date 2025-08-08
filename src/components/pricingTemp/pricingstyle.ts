import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme:Theme)=>({
    MainPricing: {
        marginTop: theme.spacing.s2000,
      },
      h1: {
        textAlign: "center",
        marginBottom: theme.spacing.s1200,
      },
      table: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: theme.spacing.s500,
      },
      TableStyle: {
        width: "100%",
        maxWidth: "352px",
        border: "1px solid #D1D1D1",
        backgroundColor: "#FFF",
        borderRadius: theme.borderRadius.b200,
        padding: theme.spacing.s500,
      },
      title: {
        padding: `${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s500} ${theme.spacing.s0}`,
      },
      value: {
        padding: `${theme.spacing.s600} ${theme.spacing.s200}`,
      },
      btn: {},
      subtext: {
        padding: `${theme.spacing.s100} ${theme.spacing.s0} ${theme.spacing.s500} ${theme.spacing.s0}`,
      },
      dollar: {
        padding: `${theme.spacing.s300} ${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s0}`,
      },
      actionSubtext: {
        // fontSize: "12px",
        padding: `${theme.spacing.s300} ${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s0}`,
        color: "gray",
      },
      featuretitle: {},
      li: {
        lineHeight: "1.7",
        padding: `${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s400}`,
      },
}))
  

