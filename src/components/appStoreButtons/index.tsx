'use client';

import React from "react";
import { useStyles } from "./style";

export const SvgApple: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 24,
  height = 24,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="-52.01 0 560.035 560.035"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
  </svg>
);

export const SvgAndroid: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 24,
  height = 24,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="-29.45 0 466.9 466.9"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="play_store_grad_1" gradientUnits="userSpaceOnUse" y1="112.094" x2="261.746" y2="112.094">
        <stop offset="0" stopColor="#63be6b" />
        <stop offset="0.506" stopColor="#5bbc6a" />
        <stop offset="1" stopColor="#4ab96a" />
      </linearGradient>
      <linearGradient id="play_store_grad_2" gradientUnits="userSpaceOnUse" x1="0.152" y1="223.393" x2="179.896" y2="223.393">
        <stop offset="0" stopColor="#3ec6f2" />
        <stop offset="1" stopColor="#45afe3" />
      </linearGradient>
      <linearGradient id="play_store_grad_3" gradientUnits="userSpaceOnUse" x1="179.896" y1="229.464" x2="407.976" y2="229.464">
        <stop offset="0" stopColor="#faa51a" />
        <stop offset="0.387" stopColor="#fab716" />
        <stop offset="0.741" stopColor="#fac412" />
        <stop offset="1" stopColor="#fac80f" />
      </linearGradient>
      <linearGradient id="play_store_grad_4" gradientUnits="userSpaceOnUse" x1="1.744" y1="345.521" x2="272.296" y2="345.521">
        <stop offset="0" stopColor="#ec3b50" />
        <stop offset="1" stopColor="#e7515b" />
      </linearGradient>
    </defs>
    <path fill="url(#play_store_grad_1)" d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z" />
    <path fill="url(#play_store_grad_2)" d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z" />
    <path fill="url(#play_store_grad_3)" d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z" />
    <path fill="url(#play_store_grad_4)" d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z" />
  </svg>
);

export const SvgPlayStore = SvgAndroid;

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
      {/* {showReviews && (
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
      )} */}
    </div>
  );
};

export default AppStoreButtons;
