import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

const colorSchemes: Record<string, { from: string; viaTo: string; borderColor: string; hoverBorder: string; iconBg: string; iconColor: string; iconBorder: string; iconShadow: string; badgeBg: string; badgeColor: string; badgeBorder: string; footerBorder: string; footerColor: string; glowBg: string }> = {
  blue: {
    from: "#f0f7ff",
    viaTo: "rgba(59, 130, 246, 0.04)",
    borderColor: "rgba(59, 130, 246, 0.25)",
    hoverBorder: "rgba(59, 130, 246, 0.5)",
    iconBg: "#FFFFFF",
    iconColor: "#2563EB",
    iconBorder: "rgba(59, 130, 246, 0.15)",
    iconShadow: "rgba(59, 130, 246, 0.1)",
    badgeBg: "rgba(59, 130, 246, 0.08)",
    badgeColor: "#2563EB",
    badgeBorder: "rgba(59, 130, 246, 0.2)",
    footerBorder: "rgba(59, 130, 246, 0.15)",
    footerColor: "#1D4ED8",
    glowBg: "rgba(59, 130, 246, 0.12)",
  },
  purple: {
    from: "#f8f5ff",
    viaTo: "rgba(147, 51, 234, 0.04)",
    borderColor: "rgba(147, 51, 234, 0.25)",
    hoverBorder: "rgba(147, 51, 234, 0.5)",
    iconBg: "#FFFFFF",
    iconColor: "#7C3AED",
    iconBorder: "rgba(147, 51, 234, 0.15)",
    iconShadow: "rgba(147, 51, 234, 0.1)",
    badgeBg: "rgba(147, 51, 234, 0.08)",
    badgeColor: "#7C3AED",
    badgeBorder: "rgba(147, 51, 234, 0.2)",
    footerBorder: "rgba(147, 51, 234, 0.15)",
    footerColor: "#6D28D9",
    glowBg: "rgba(147, 51, 234, 0.12)",
  },
  rose: {
    from: "#fff2f0",
    viaTo: "rgba(244, 63, 94, 0.04)",
    borderColor: "rgba(244, 63, 94, 0.25)",
    hoverBorder: "rgba(244, 63, 94, 0.5)",
    iconBg: "#FFFFFF",
    iconColor: "#E11D48",
    iconBorder: "rgba(244, 63, 94, 0.15)",
    iconShadow: "rgba(244, 63, 94, 0.1)",
    badgeBg: "rgba(244, 63, 94, 0.08)",
    badgeColor: "#E11D48",
    badgeBorder: "rgba(244, 63, 94, 0.2)",
    footerBorder: "rgba(244, 63, 94, 0.15)",
    footerColor: "#BE123C",
    glowBg: "rgba(244, 63, 94, 0.12)",
  },
  emerald: {
    from: "#f0fbf5",
    viaTo: "rgba(16, 185, 129, 0.04)",
    borderColor: "rgba(16, 185, 129, 0.25)",
    hoverBorder: "rgba(16, 185, 129, 0.5)",
    iconBg: "#FFFFFF",
    iconColor: "#059669",
    iconBorder: "rgba(16, 185, 129, 0.15)",
    iconShadow: "rgba(16, 185, 129, 0.1)",
    badgeBg: "rgba(16, 185, 129, 0.08)",
    badgeColor: "#059669",
    badgeBorder: "rgba(16, 185, 129, 0.2)",
    footerBorder: "rgba(16, 185, 129, 0.15)",
    footerColor: "#047857",
    glowBg: "rgba(16, 185, 129, 0.12)",
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
      background: `linear-gradient(135deg, ${scheme.from} 0%, #FFFFFF 50%, ${scheme.viaTo} 100%)`,
      border: `1px solid ${scheme.borderColor}`,
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      "&:hover": {
        boxShadow: `0 20px 35px -5px ${scheme.glowBg}, 0 10px 10px -5px rgba(15, 23, 42, 0.04)`,
        borderColor: scheme.hoverBorder,
      },
      "@media (max-width: 768px)": {
        padding: "24px",
        borderRadius: "20px",
      },
    };
    colorClasses[`glow_${key}`] = {
      position: "absolute",
      right: "-40px",
      bottom: "-40px",
      width: "176px",
      height: "176px",
      background: scheme.glowBg,
      borderRadius: "50%",
      filter: "blur(40px)",
      pointerEvents: "none",
    };
    colorClasses[`iconBox_${key}`] = {
      width: "56px",
      height: "56px",
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
      fontFamily: "monospace, sans-serif",
      fontWeight: 700,
      color: scheme.badgeColor,
      backgroundColor: scheme.badgeBg,
      padding: "4px 12px",
      borderRadius: "9999px",
      border: `1px solid ${scheme.badgeBorder}`,
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
      fontFamily: "monospace, sans-serif",
      padding: "4px 12px",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "12px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    },
  };
});
