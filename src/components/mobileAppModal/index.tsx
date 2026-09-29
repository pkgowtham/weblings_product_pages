'use client';

import React, { useEffect } from "react";
import { useStyles } from "./style";
import { SvgApple, SvgAndroid } from "../appStoreButtons";

export interface MobileAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform?: 'all' | 'ios' | 'android' | 'iOS' | 'Android' | string;
  productName?: string;
}

export const MobileAppModal: React.FC<MobileAppModalProps> = ({
  isOpen,
  onClose,
  platform = "all",
}) => {
  const classes = useStyles();

  // Close on Escape key & lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-app-modal-title"
    >
      <div
        className={classes.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className={classes.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Badges */}
        <div className={classes.iconRow}>
          <div className={classes.capsule} aria-label="iOS and Android">
            <SvgApple width={15} height={15} />
            <span className={classes.iconDivider} />
            <SvgAndroid width={15} height={15} />
          </div>

          <div className={classes.launchBadge}>
            <span className={classes.dot} />
            November Release
          </div>
        </div>

        {/* Title */}
        <h3 id="mobile-app-modal-title" className={classes.title}>
          Mobile Apps Available from November
        </h3>

        {/* Elaborated Explanation */}
        <p className={classes.bodyText}>
          Our dedicated mobile applications for both <strong>Apple iOS</strong> and <strong>Google Android</strong> will officially be available starting this <strong>November</strong>.
        </p>

        <p className={classes.bodyText}>
          We are currently completing the final release preparations and testing ahead of making the apps available for download on the Apple App Store and Google Play Store to ensure a smooth, dependable experience.
        </p>

        <div className={classes.highlightBox}>
          <strong>Available right now:</strong> In the meantime, you can continue accessing the full platform seamlessly through any mobile or desktop web browser with complete functionality.
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          className={classes.actionBtn}
          onClick={onClose}
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default MobileAppModal;
