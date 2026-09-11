'use client';

import React from "react";
import { useStyles } from "./style";
import clsx from "clsx";

interface PipelineStepProps {
  stepNumber: string;
  title: string;
  description: string;
  statusBadge?: string;
  statusBadgeColor?: "emerald" | "sky" | "indigo";
  footerItems?: string[];
}

const statusIcons: Record<string, React.ReactNode> = {
  emerald: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  sky: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  indigo: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

const PipelineStep: React.FC<PipelineStepProps> = ({
  stepNumber,
  title,
  description,
  statusBadge,
  statusBadgeColor = "emerald",
  footerItems = [],
}) => {
  const classes = useStyles();

  const badgeColorClass =
    statusBadgeColor === "emerald"
      ? classes.statusBadgeEmerald
      : statusBadgeColor === "sky"
      ? classes.statusBadgeSky
      : classes.statusBadgeIndigo;

  const dotClass =
    statusBadgeColor === "emerald"
      ? classes.liveDotEmerald
      : statusBadgeColor === "sky"
      ? classes.liveDotSky
      : classes.liveDotIndigo;

  const highlightClass =
    statusBadgeColor === "emerald"
      ? classes.footerHighlightEmerald
      : statusBadgeColor === "sky"
      ? classes.footerHighlightSky
      : classes.footerHighlightIndigo;

  return (
    <div className={classes.step}>
      <div className={classes.stepInner}>
        {/* Step Number Badge */}
        <div className={classes.stepBadge}>{stepNumber}</div>

        {/* Content */}
        <div className={classes.stepContent}>
          <div className={classes.stepHeader}>
            <h3 className={classes.stepTitle}>{title}</h3>
            {statusBadge && (
              <div className={clsx(classes.statusBadge, badgeColorClass)}>
                <span className={classes.statusIcon}>
                  {statusIcons[statusBadgeColor]}
                </span>
                <span>{statusBadge}</span>
              </div>
            )}
          </div>
          <p className={classes.stepDesc}>{description}</p>

          {/* Footer metadata */}
          {footerItems.length > 0 && (
            <div className={classes.stepFooter}>
              {footerItems.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <span className={classes.footerLive}>
                      <span className={dotClass} />
                      {item}
                    </span>
                  ) : index === footerItems.length - 1 ? (
                    <span className={highlightClass}>{item}</span>
                  ) : (
                    <span className={classes.footerItem}>{item}</span>
                  )}
                  {index < footerItems.length - 1 && (
                    <span className={classes.footerDot}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PipelineStep;
