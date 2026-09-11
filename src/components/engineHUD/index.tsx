'use client';

import React from "react";
import { useStyles } from "./style";
import clsx from "clsx";

interface HUDSystem {
  abbr: string;
  name: string;
  status: string;
  color: "sky" | "indigo" | "blue" | "teal";
}

interface HUDEvent {
  color: "sky" | "indigo" | "teal";
  text: string;
}

interface EngineHUDProps {
  systems: HUDSystem[];
  events: HUDEvent[];
}

const iconColorMap: Record<string, string> = {
  sky: "systemIconSky",
  indigo: "systemIconIndigo",
  blue: "systemIconBlue",
  teal: "systemIconTeal",
};

const arrowColorMap: Record<string, string> = {
  sky: "arrowSky",
  indigo: "arrowIndigo",
  teal: "arrowTeal",
};

const EngineHUD: React.FC<EngineHUDProps> = ({ systems, events }) => {
  const classes = useStyles();

  return (
    <div className={classes.hud}>
      {/* Ambient glows */}
      <div className={classes.glowTopRight} />
      <div className={classes.glowBottomLeft} />

      {/* HUD Header */}
      <div className={classes.hudHeader}>
        <div className={classes.hudHeaderLeft}>
          <span className={classes.pingContainer}>
            <span className={classes.pingRing} />
            <span className={classes.pingDot} />
          </span>
          <span className={classes.hudLabel}>Weblings Engine Core</span>
        </div>
        <span className={classes.syncBadge}>SYNC STATUS: 100%</span>
      </div>

      {/* Systems Grid */}
      <div className={classes.systemsGrid}>
        {systems.map((sys, i) => (
          <div key={i} className={classes.systemNode}>
            <div
              className={clsx(
                classes.systemIcon,
                classes[iconColorMap[sys.color] as keyof typeof classes]
              )}
            >
              {sys.abbr}
            </div>
            <div className={classes.systemInfo}>
              <div className={classes.systemName}>{sys.name}</div>
              <div className={classes.systemStatus}>{sys.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Event Stream */}
      <div className={classes.streamContainer}>
        <div className={classes.streamHeader}>
          <span>Live Orchestration Stream</span>
          <span className={classes.streamLabel}>Realtime feed</span>
        </div>
        <div className={classes.streamEvents}>
          {events.map((event, i) => (
            <div key={i} className={classes.streamEvent}>
              <span
                className={
                  classes[arrowColorMap[event.color] as keyof typeof classes] as string
                }
              >
                ›
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatEvent(event.text) }} />
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry bar */}
      <div className={classes.telemetry}>
        <span>PIPELINE HEALTH: OPTIMAL</span>
        <span className={classes.telemetryGreen}>99.999% INTEGRATION UPTIME</span>
      </div>
    </div>
  );
};

// Simple formatter to highlight emails, hashtags, and names
function formatEvent(text: string): string {
  return text
    .replace(
      /([\w.]+@[\w.]+)/g,
      '<span style="color: #34D399">$1</span>'
    )
    .replace(
      /(#[\w-]+)/g,
      '<span style="color: #FFFFFF">$1</span>'
    )
    .replace(
      /(Jane Doe)/g,
      '<span style="color: #7DD3FC">$1</span>'
    );
}

export default EngineHUD;
