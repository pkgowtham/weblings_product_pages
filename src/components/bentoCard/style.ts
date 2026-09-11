import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

const colorSchemes: Record<
  string,
  {
    borderColor: string;
    hoverBorder: string;
    iconBg: string;
    iconColor: string;
    iconBorder: string;
    iconShadow: string;
    badgeBg: string;
    badgeColor: string;
    badgeBorder: string;
    footerBorder: string;
    footerColor: string;
    glowBg: string;
  }
> = {
  blue: {
    borderColor: "#E2E8F0",
    hoverBorder: "rgba(0, 114, 196, 0.45)",
    iconBg: "#FFFFFF",
    iconColor: "#0072C4",
    iconBorder: "rgba(0, 114, 196, 0.15)",
    iconShadow: "rgba(0, 114, 196, 0.08)",
    badgeBg: "rgba(0, 114, 196, 0.06)",
    badgeColor: "#0072C4",
    badgeBorder: "rgba(0, 114, 196, 0.2)",
    footerBorder: "#F1F5F9",
    footerColor: "#0072C4",
    glowBg: "rgba(138, 194, 255, 0.28)", // Mild top-right brand glow matching native card
  },
  purple: {
    borderColor: "#E2E8F0",
    hoverBorder: "rgba(124, 58, 237, 0.45)",
    iconBg: "#FFFFFF",
    iconColor: "#7C3AED",
    iconBorder: "rgba(124, 58, 237, 0.15)",
    iconShadow: "rgba(124, 58, 237, 0.08)",
    badgeBg: "rgba(124, 58, 237, 0.06)",
    badgeColor: "#7C3AED",
    badgeBorder: "rgba(124, 58, 237, 0.2)",
    footerBorder: "#F1F5F9",
    footerColor: "#6D28D9",
    glowBg: "rgba(192, 132, 252, 0.22)", // Mild top-right purple glow
  },
  rose: {
    borderColor: "#E2E8F0",
    hoverBorder: "rgba(225, 29, 72, 0.45)",
    iconBg: "#FFFFFF",
    iconColor: "#E11D48",
    iconBorder: "rgba(225, 29, 72, 0.15)",
    iconShadow: "rgba(225, 29, 72, 0.08)",
    badgeBg: "rgba(225, 29, 72, 0.06)",
    badgeColor: "#E11D48",
    badgeBorder: "rgba(225, 29, 72, 0.2)",
    footerBorder: "#F1F5F9",
    footerColor: "#BE123C",
    glowBg: "rgba(251, 113, 133, 0.2)", // Mild top-right rose glow
  },
  emerald: {
    borderColor: "#E2E8F0",
    hoverBorder: "rgba(5, 150, 105, 0.45)",
    iconBg: "#FFFFFF",
    iconColor: "#059669",
    iconBorder: "rgba(5, 150, 105, 0.15)",
    iconShadow: "rgba(5, 150, 105, 0.08)",
    badgeBg: "rgba(5, 150, 105, 0.06)",
    badgeColor: "#059669",
    badgeBorder: "rgba(5, 150, 105, 0.2)",
    footerBorder: "#F1F5F9",
    footerColor: "#047857",
    glowBg: "rgba(52, 211, 153, 0.22)", // Mild top-right emerald glow
  },
};

// We create dynamic classes for each color scheme
export const useStyles = createUseStyles((_theme: Theme) => {
  const colorClasses: Record<string, any> = {};

  Object.entries(colorSchemes).forEach(([key, scheme]) => {
    colorClasses[`card_${key}`] = {
      position: "relative",
      padding: "32px 36px",
      borderRadius: "24px",
      backgroundColor: "#FFFFFF",
      background: "linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)",
      border: `1px solid ${scheme.borderColor}`,
      boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: `0 16px 32px -6px ${scheme.glowBg}, 0 4px 12px -2px rgba(15, 23, 42, 0.04)`,
        borderColor: scheme.hoverBorder,
      },
      "@media (max-width: 768px)": {
        padding: "24px",
        borderRadius: "20px",
      },
    };
    /* Mild top-right ambient glow — matching the native cards aesthetic */
    colorClasses[`glow_${key}`] = {
      position: "absolute",
      right: "-48px",
      top: "-48px",
      width: "220px",
      height: "220px",
      background: scheme.glowBg,
      borderRadius: "50%",
      filter: "blur(55px)",
      pointerEvents: "none",
    };
    colorClasses[`iconBox_${key}`] = {
      width: "52px",
      height: "52px",
      borderRadius: "16px",
      backgroundColor: scheme.iconBg,
      color: scheme.iconColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 4px 12px -2px ${scheme.iconShadow}`,
      border: `1px solid ${scheme.iconBorder}`,
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    };
    colorClasses[`badge_${key}`] = {
      fontSize: "12px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      fontWeight: 600,
      color: scheme.badgeColor,
      backgroundColor: scheme.badgeBg,
      padding: "4px 12px",
      borderRadius: "9999px",
      border: `1px solid ${scheme.badgeBorder}`,
      letterSpacing: "0.02em",
    };
    colorClasses[`footer_${key}`] = {
      paddingTop: "16px",
      borderTop: `1px solid ${scheme.footerBorder}`,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "8px",
      fontSize: "12px",
      color: scheme.footerColor,
      fontWeight: 600,
    };
  });

  return {
    ...colorClasses,
    headerRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#0F172A",
      letterSpacing: "-0.01em",
      marginBottom: "12px",
      margin: 0,
    },
    desc: {
      fontSize: "15px",
      color: "#475569",
      lineHeight: 1.7,
      marginBottom: "20px",
      margin: 0,
    },
    cardBody: {
      flexGrow: 1,
    },
    footerDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
    },
    footerBadge: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "4px 12px",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "12px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    },
  };
});
