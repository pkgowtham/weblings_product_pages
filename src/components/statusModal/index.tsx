'use client';

import React, { useEffect } from "react";
import clsx from "clsx";
import { useStyles } from "./style";
import PartyBlastAnimation from "./PartyBlastAnimation";

export type StatusModalType = "success" | "warning" | "error";

export interface StatusModalProps {
  isOpen: boolean;
  type: StatusModalType;
  badge?: string;
  title: string;
  message: React.ReactNode;
  primaryBtnText?: string;
  onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  type,
  badge,
  title,
  message,
  primaryBtnText,
  onClose,
}) => {
  const classes = useStyles();

  // Close on Escape key & manage body scroll lock
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

  const defaultBadge =
    type === "success"
      ? "SUCCESS"
      : type === "warning"
      ? "FAVOURITE LIST"
      : "NOTICE";

  const defaultBtnText =
    type === "success" ? "Got It" : type === "warning" ? "Understood" : "Close";

  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="status-modal-title"
    >
      <div
        className={classes.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close "X" Button */}
        <button
          type="button"
          className={classes.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="18"
            height="18"
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

        {/* ─── VISUAL / ICON SECTION ─── */}
        {type === "success" ? (
          /* Celebratory party papers blasting around the success SVG animated icon */
          <PartyBlastAnimation />
        ) : type === "warning" ? (
          /* Static Favorite/Warning Icon (without party papers animation) */
          <div className={classes.warningIconBox}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        ) : (
          /* Static Error Alert Icon (without party papers animation) */
          <div className={classes.errorIconBox}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        )}

        {/* Badge Pill */}
        <div
          className={clsx(
            classes.badgePill,
            type === "success" && classes.badgeSuccess,
            type === "warning" && classes.badgeWarning,
            type === "error" && classes.badgeError
          )}
        >
          {badge || defaultBadge}
        </div>

        {/* Title */}
        <h2 id="status-modal-title" className={classes.title}>
          {title}
        </h2>

        {/* Message */}
        <div className={classes.message}>{message}</div>

        {/* Primary Action Button */}
        <button
          type="button"
          className={clsx(
            classes.actionBtn,
            type === "success" && classes.actionBtnSuccess,
            type === "warning" && classes.actionBtnWarning,
            type === "error" && classes.actionBtnError
          )}
          onClick={onClose}
        >
          {primaryBtnText || defaultBtnText}
        </button>
      </div>
    </div>
  );
};

export default StatusModal;
