'use client';

import React from "react";
import { useStyles } from "./style";

export const SvgApple: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 22,
  height = 22,
  className,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.03-.51 2.58-1.18z" />
  </svg>
);

export const SvgAndroid: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 22,
  height = 22,
  className,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.551 0 .9993.4478.9993.9993.0001.5515-.4482 1.0001-.9993 1.0001m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.5511 0 .9993.4478.9993.9993 0 .5515-.4482 1.0001-.9993 1.0001m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.1 12 8.1s-3.5902.3126-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
  </svg>
);

export const SvgStar: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 18,
  height = 18,
  className,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export interface AppStoreButtonsProps {
  align?: 'left' | 'center';
  iosHref?: string;
  androidHref?: string;
  showReviews?: boolean;
  rating?: string;
  reviewCountText?: string;
  className?: string;
  buttonsClassName?: string;
  reviewsClassName?: string;
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  align = 'left',
  iosHref = "#ios",
  androidHref = "#android",
  showReviews = true,
  rating = "4.9",
  reviewCountText = "Over 45,000+ active enterprise reviews",
  className,
  buttonsClassName,
  reviewsClassName,
}) => {
  const classes = useStyles();
  const isCenter = align === 'center';

  return (
    <div className={`${classes.container} ${isCenter ? classes.containerCenter : ''} ${className || ""}`}>
      {/* Equal-Sized Universal App Store Buttons */}
      <div className={`${classes.downloadButtonsRow} ${isCenter ? classes.downloadButtonsRowCenter : ''} ${buttonsClassName || ""}`}>
        {/* iOS Button */}
        <a href={iosHref} className={classes.storeButton} aria-label="Download on iOS">
          <div className={classes.storeIcon}>
            <SvgApple />
          </div>
          <div className={classes.storeTextCol}>
            <span className={classes.storeSubtitle}>DOWNLOAD ON</span>
            <span className={classes.storeTitle}>Download iOS</span>
          </div>
        </a>

        {/* Android Button */}
        <a href={androidHref} className={classes.storeButton} aria-label="Download on Android">
          <div className={classes.storeIcon}>
            <SvgAndroid />
          </div>
          <div className={classes.storeTextCol}>
            <span className={classes.storeSubtitle}>GET IT ON</span>
            <span className={classes.storeTitle}>Download Android</span>
          </div>
        </a>
      </div>

      {/* Optional Social Proof Reviews Line */}
      {showReviews && (
        <div className={`${classes.reviewsRow} ${isCenter ? classes.reviewsRowCenter : ''} ${reviewsClassName || ""}`}>
          <div className={classes.starRatingGroup}>
            <div className={classes.starsGroup}>
              <SvgStar />
              <SvgStar />
              <SvgStar />
              <SvgStar />
              <SvgStar />
            </div>
            <span className={classes.ratingNumber}>{rating}</span>
          </div>
          <span className={classes.reviewsCountText}>{reviewCountText}</span>
        </div>
      )}
    </div>
  );
};

export default AppStoreButtons;
