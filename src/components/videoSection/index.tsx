'use client';

import React, { useState } from "react";
import { useStyles } from "./videoSectionStyle";
import Typography from "../typography/component";

interface VideoSectionProps {
  demoData?: {
    subtitle?: string;
    title?: string;
    description?: string;
  };
}

const VideoSection: React.FC<VideoSectionProps> = ({ demoData }) => {
  const classes = useStyles();

  const subtitle = demoData?.subtitle || "Video Section";
  const title = demoData?.title || "See Weblings Workspace in Action";
  const description =
    demoData?.description ||
    "Watch how organizations simplify operations, improve collaboration, and increase productivity using a single digital workspace built for modern businesses.";

  return (
    <div className={classes.videoSectionContainer}>
      <div className={classes.videoSectionContent}>
        {/* Left Side: Video Card / Thumbnail */}
        <div className={classes.videoBoxWrapper}>
          <div className={classes.playIconWrapper}>
            <div className={classes.playTriangle} />
          </div>
        </div>

        {/* Right Side: Text Content using Typography component */}
        <div className={classes.textWrapper}>
          <Typography variant="TS" component="span" className={classes.subtitle}>
            {subtitle}
          </Typography>
          <Typography variant="HM" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="BL" component="p" className={classes.description}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
