'use client';

import React from "react";
import { useStyles } from "./style";
import clsx from "clsx";

interface PhoneNotification {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
}

interface PhoneFeed {
  text: string;
  time: string;
}

interface PhoneMockupProps {
  variant?: "light" | "dark";
  notification?: PhoneNotification;
  feed?: PhoneFeed;
}

/* Micro SVGs for realistic iOS status & navigation */
const CellularIcon: React.FC<{ isDark?: boolean }> = ({ isDark }) => (
  <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
    <rect x="0" y="7.5" width="2.5" height="3.5" rx="0.8" fill={isDark ? "#FFFFFF" : "#0F172A"} />
    <rect x="4.5" y="5" width="2.5" height="6" rx="0.8" fill={isDark ? "#FFFFFF" : "#0F172A"} />
    <rect x="9" y="2.5" width="2.5" height="8.5" rx="0.8" fill={isDark ? "#FFFFFF" : "#0F172A"} />
    <rect x="13.5" y="0" width="2.5" height="11" rx="0.8" fill={isDark ? "#FFFFFF" : "#0F172A"} />
  </svg>
);

const WifiIcon: React.FC<{ isDark?: boolean }> = ({ isDark }) => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path
      d="M7.5 10.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM3.6 6.5C4.7 5.4 6 4.8 7.5 4.8c1.5 0 2.8.6 3.9 1.7a.8.8 0 101.1-1.1C11.1 4 9.4 3.2 7.5 3.2c-1.9 0-3.6.8-5 2.2a.8.8 0 101.1 1.1zM.8 3.6C2.6 1.8 5 0.8 7.5 0.8c2.5 0 4.9 1 6.7 2.8a.8.8 0 101.1-1.1C13.2.4 10.4-.6 7.5-.6c-2.9 0-5.7 1-7.8 3.1a.8.8 0 101.1 1.1z"
      fill={isDark ? "#FFFFFF" : "#0F172A"}
    />
  </svg>
);

const BatteryIcon: React.FC<{ isDark?: boolean }> = ({ isDark }) => (
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
    <rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke={isDark ? "#FFFFFF" : "#0F172A"} strokeWidth="1" />
    <rect x="2" y="2" width="16" height="7" rx="1.5" fill="#10B981" />
    <path d="M22 3.5v4" stroke={isDark ? "#FFFFFF" : "#0F172A"} strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  variant = "light",
  notification,
  feed,
}) => {
  const classes = useStyles();
  const isDark = variant === "dark";

  return (
    <div className={classes.frame}>
      {/* Physical Hardware Buttons */}
      <div className={classes.volumeButtonTop} />
      <div className={classes.volumeButtonBottom} />
      <div className={classes.powerButton} />

      {/* Internal Phone Screen */}
      <div className={isDark ? classes.screenDark : classes.screenLight}>
        {/* iOS Status Bar with Dynamic Island */}
        <div className={classes.statusBar}>
          <span className={isDark ? classes.statusTimeDark : classes.statusTime}>
            9:41
          </span>

          {/* Dynamic Island */}
          <div className={classes.dynamicIsland}>
            <div className={classes.islandCamera} />
            {isDark ? (
              <div className={classes.islandIndicatorGreen} />
            ) : (
              <div className={classes.islandSensor} />
            )}
          </div>

          <div className={isDark ? classes.statusIconsDark : classes.statusIcons}>
            <CellularIcon isDark={isDark} />
            <WifiIcon isDark={isDark} />
            <BatteryIcon isDark={isDark} />
          </div>
        </div>

        {/* In-App Screen Content */}
        <div className={classes.appContent}>
          {isDark ? (
            /* ─────────────────────────────────────────────────────────────
               EXECUTIVE TELEMETRY CONSOLE (Dark Variant)
               ───────────────────────────────────────────────────────────── */
            <>
              {/* App Bar */}
              <div className={classes.appHeader}>
                <div className={classes.userProfile}>
                  <div className={classes.avatarDark}>EX</div>
                  <div>
                    <p className={classes.userNameDark}>Executive Telemetry</p>
                    <p className={classes.userRoleDark}>4 Branches Operational</p>
                  </div>
                </div>
                <div className={classes.headerActionBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                </div>
              </div>

              {/* Main Notification Card */}
              {notification && (
                <div className={classes.notifCardDark}>
                  <div className={classes.notifLeft}>
                    <div className={classes.notifIconDark}>
                      {notification.icon || "⚡"}
                    </div>
                    <div>
                      <p className={classes.notifTitleDark}>{notification.title}</p>
                      <p className={classes.notifSubDark}>{notification.subtitle}</p>
                    </div>
                  </div>
                  <span className={classes.notifBadgeDark}>
                    {notification.time}
                  </span>
                </div>
              )}

              {/* Real-Time Telemetry Grid */}
              <div className={classes.telemetryGrid}>
                <div className={classes.telemetryBox}>
                  <span className={classes.telemetryLabel}>Latency</span>
                  <span className={classes.telemetryValue}>18ms</span>
                  <span className={classes.telemetryStatus}>Global CDN Fast</span>
                </div>
                <div className={classes.telemetryBox}>
                  <span className={classes.telemetryLabel}>Cluster Load</span>
                  <span className={classes.telemetryValue}>24%</span>
                  <span className={classes.telemetryStatus}>Optimal Across Nodes</span>
                </div>
              </div>

              {/* Multi-Branch Live Health List */}
              <div className={classes.branchHealthList}>
                <div className={classes.branchHeader}>
                  <span>Branch Health</span>
                  <span style={{ color: "#10B981" }}>99.99% Uptime</span>
                </div>
                <div className={classes.branchRow}>
                  <span><span className={classes.branchDot} />New York HQ</span>
                  <span style={{ color: "#94A3B8" }}>142 online</span>
                </div>
                <div className={classes.branchRow}>
                  <span><span className={classes.branchDot} />London Studio</span>
                  <span style={{ color: "#94A3B8" }}>68 online</span>
                </div>
                <div className={classes.branchRow}>
                  <span><span className={classes.branchDot} />Singapore Hub</span>
                  <span style={{ color: "#94A3B8" }}>95 online</span>
                </div>
              </div>

              {/* Live Metric / Feed Item */}
              {feed && (
                <div className={classes.feedCardDark}>
                  <span className={classes.feedTextDark}>{feed.text}</span>
                  <span className={classes.feedValueDark}>{feed.time}</span>
                </div>
              )}
            </>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               EMPLOYEE WORKSPACE APP (Light Variant)
               ───────────────────────────────────────────────────────────── */
            <>
              {/* App Bar */}
              <div className={classes.appHeader}>
                <div className={classes.userProfile}>
                  <div className={classes.avatarLight}>AM</div>
                  <div>
                    <p className={classes.userName}>Alex Miller</p>
                    <p className={classes.userRole}>Engineering • Weblings HQ</p>
                  </div>
                </div>
                <div className={classes.headerActionBtn}>
                  <div className={classes.notifBadgeDot} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
              </div>

              {/* Main Notification Card */}
              {notification && (
                <div className={classes.notifCardLight}>
                  <div className={classes.notifLeft}>
                    <div className={classes.notifIconLight}>
                      {notification.icon || "✓"}
                    </div>
                    <div>
                      <p className={classes.notifTitleLight}>{notification.title}</p>
                      <p className={classes.notifSubLight}>{notification.subtitle}</p>
                    </div>
                  </div>
                  <span className={classes.notifBadgeLight}>
                    {notification.time}
                  </span>
                </div>
              )}

              {/* Quick Actions Bar */}
              <div className={classes.quickActionsRow}>
                <div className={classes.quickActionItem}>
                  <svg className={classes.quickActionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <span className={classes.quickActionLabel}>Chat (3)</span>
                </div>
                <div className={classes.quickActionItem}>
                  <svg className={classes.quickActionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className={classes.quickActionLabel}>Calendar</span>
                </div>
                <div className={classes.quickActionItem}>
                  <svg className={classes.quickActionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                  <span className={classes.quickActionLabel}>Tasks (4)</span>
                </div>
                <div className={classes.quickActionItem}>
                  <svg className={classes.quickActionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                  </svg>
                  <span className={classes.quickActionLabel}>Drive</span>
                </div>
              </div>

              {/* Upcoming Meeting Card */}
              <div className={classes.meetingCard}>
                <div className={classes.meetingHeader}>
                  <span className={classes.meetingTitle}>#sprint-retro scheduled</span>
                  <span className={classes.meetingTimeTag}>2:30 PM</span>
                </div>
                <div className={classes.meetingSub}>
                  <span>Audio Room 2 • 6 attending</span>
                  <button className={classes.joinBtn}>Join Call</button>
                </div>
              </div>

              {/* Recent Activity / Feed */}
              {feed && (
                <div className={classes.feedCard}>
                  <span className={classes.feedTextLight}>Sprint 14 Target</span>
                  <span className={classes.feedValueLight}>84% Completed</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom In-App Tab Bar */}
        <div className={isDark ? classes.tabBarDark : classes.tabBar}>
          <div className={clsx(classes.tabItem, isDark ? classes.tabItemActiveDark : classes.tabItemActive)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{isDark ? "Telemetry" : "Home"}</span>
          </div>
          <div className={classes.tabItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span>{isDark ? "Nodes" : "Chat"}</span>
          </div>
          <div className={classes.tabItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{isDark ? "Logs" : "Calendar"}</span>
          </div>
          <div className={classes.tabItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Profile</span>
          </div>
        </div>

        {/* iOS Home Indicator Bar */}
        <div className={classes.homeIndicatorContainer}>
          <div className={isDark ? classes.homeIndicatorDark : classes.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
