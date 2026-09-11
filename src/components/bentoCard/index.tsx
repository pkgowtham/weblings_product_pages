'use client';

import React from "react";
import { useStyles } from "./style";

type ColorScheme = "blue" | "purple" | "rose" | "emerald";

interface BentoCardProps {
  colorScheme: ColorScheme;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  footer: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({
  colorScheme,
  icon,
  badge,
  title,
  description,
  footer,
}) => {
  const classes = useStyles();

  const cardClass = (classes as any)[`card_${colorScheme}`];
  const glowClass = (classes as any)[`glow_${colorScheme}`];
  const iconBoxClass = (classes as any)[`iconBox_${colorScheme}`];
  const badgeClass = (classes as any)[`badge_${colorScheme}`];
  const footerClass = (classes as any)[`footer_${colorScheme}`];

  return (
    <div className={cardClass}>
      {/* Ambient glow */}
      <div className={glowClass} />

      <div className={classes.cardBody}>
        {/* Header: Icon + Badge */}
        <div className={classes.headerRow}>
          <div className={iconBoxClass}>{icon}</div>
          <span className={badgeClass}>{badge}</span>
        </div>

        {/* Title & Description */}
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desc}>{description}</p>
      </div>

      {/* Footer metadata */}
      <div className={footerClass}>{footer}</div>
    </div>
  );
};

export default BentoCard;
