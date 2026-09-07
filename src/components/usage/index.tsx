'use client';

import React from "react";
import { usestyles } from "./usagestyle";
import Typography from "../typography/component";
import {
  SvgSmartphone,
  SvgMic,
  SvgBuilding,
  SvgShieldLock,
  SvgCloud,
  SvgGlobe,
  SvgCodeSearch,
  SvgBolt,
  SvgRefreshCw,
  SvgUsers,
  SvgSliders,
  SvgLayers,
} from "../svg/CustomIcons";

const usageIconMap: Record<string, React.ReactNode> = {
  pip: <SvgSmartphone width={24} height={24} />,
  recording: <SvgMic width={24} height={24} />,
  privacy: <SvgBuilding width={24} height={24} />,
  retention: <SvgShieldLock width={24} height={24} />,
  unlimited: <SvgGlobe width={24} height={24} />,
  attachment: <SvgCloud width={24} height={24} />,
  domain: <SvgBuilding width={24} height={24} />,
  search: <SvgBolt width={24} height={24} />,
  reassignment: <SvgRefreshCw width={24} height={24} />,
  guest: <SvgUsers width={24} height={24} />,
  workflow: <SvgSliders width={24} height={24} />,
  hierarchy: <SvgLayers width={24} height={24} />,
};

interface UsageCard {
  id: string;
  title: string;
  description: string;
}

interface UsageProps {
  usageData?: {
    subtitle?: string;
    title: string;
    description: string;
    cards: UsageCard[];
  };
}

const Usage: React.FC<UsageProps> = ({ usageData }): JSX.Element | null => {
  const classes = usestyles();

  if (!usageData) return null;

  return (
    <div className={classes.usageContainer}>
      <div className={classes.usageInner}>
        <div className={classes.usageHeader}>
          {usageData.subtitle && (
            <Typography variant="TS" className={classes.usageSubtitle}>
              {usageData.subtitle}
            </Typography>
          )}
          <Typography variant="HM" className={classes.usageTitle}>
            {usageData.title}
          </Typography>
          <Typography variant="BM" className={classes.usageDescription}>
            {usageData.description}
          </Typography>
        </div>

        <div className={classes.usageGrid}>
          {usageData.cards.map((card, index) => (
            <div key={card.id || index} className={classes.usageCard}>
              <div className={classes.usageIconWrapper}>
                {usageIconMap[card.id] || <SvgShieldLock width={24} height={24} />}
              </div>
              <Typography variant="LM" className={classes.usageCardTitle}>
                {card.title}
              </Typography>
              <Typography variant="BS" className={classes.usageCardDesc}>
                {card.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usage;
