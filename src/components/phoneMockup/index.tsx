'use client';

import React, { useState } from "react";
import { useStyles } from "./style";
import clsx from "clsx";
import { WeblogoIcon } from "../../assets/icons_component";

interface PhoneNotification {
  icon?: string;
  title?: string;
  subtitle?: string;
  time?: string;
}

interface PhoneFeed {
  text?: string;
  time?: string;
}

interface PhoneMockupProps {
  variant?: "dashboard" | "attendance" | "light" | "dark" | "mail";
  notification?: PhoneNotification;
  feed?: PhoneFeed;
}

/* ─────────────────────────────────────────────────────────────
   PRECISION SVG ASSETS FOR THE WEBLINGS MOBILE APP
   ───────────────────────────────────────────────────────────── */
const CellularIcon: React.FC = () => (
  <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
    <rect x="0" y="7.5" width="2.5" height="3.5" rx="0.8" fill="#0F172A" />
    <rect x="4.5" y="5" width="2.5" height="6" rx="0.8" fill="#0F172A" />
    <rect x="9" y="2.5" width="2.5" height="8.5" rx="0.8" fill="#0F172A" />
    <rect x="13.5" y="0" width="2.5" height="11" rx="0.8" fill="#0F172A" />
  </svg>
);

const WifiIcon: React.FC = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path
      d="M7.5 10.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM3.6 6.5C4.7 5.4 6 4.8 7.5 4.8c1.5 0 2.8.6 3.9 1.7a.8.8 0 101.1-1.1C11.1 4 9.4 3.2 7.5 3.2c-1.9 0-3.6.8-5 2.2a.8.8 0 101.1 1.1zM.8 3.6C2.6 1.8 5 0.8 7.5 0.8c2.5 0 4.9 1 6.7 2.8a.8.8 0 101.1-1.1C13.2.4 10.4-.6 7.5-.6c-2.9 0-5.7 1-7.8 3.1a.8.8 0 101.1 1.1z"
      fill="#0F172A"
    />
  </svg>
);

const BatteryIcon: React.FC = () => (
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
    <rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke="#0F172A" strokeWidth="1" />
    <rect x="2" y="2" width="16" height="7" rx="1.5" fill="#0F172A" />
    <path d="M22 3.5v4" stroke="#0F172A" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant = "dashboard" }) => {
  const classes = useStyles();
  const isAttendance = variant === "attendance" || variant === "dark";
  const isMail = variant === "mail";

  // Interactive local states for high delight
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(
    isMail ? "mail" : isAttendance ? "eoffice" : "dash"
  );
  const [activeDay, setActiveDay] = useState<number>(1); // Monday selected
  const [selectedEmail, setSelectedEmail] = useState<number>(0);

  return (
    <div className={classes.frame}>
      {/* Physical Hardware Buttons */}
      <div className={classes.volumeButtonTop} />
      <div className={classes.volumeButtonBottom} />
      <div className={classes.powerButton} />

      {/* Smartphone Screen */}
      <div className={classes.screen}>
        {/* iOS Top Status Bar */}
        <div className={classes.statusBar}>
          <span className={classes.statusTime}>3:39</span>

          {/* Precision Dynamic Island */}
          <div className={classes.dynamicIsland} title="Dynamic Island">
            <div className={classes.islandCenterLens} />
          </div>

          <div className={classes.statusIcons}>
            <CellularIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className={classes.screenContent}>
          {activeTab === "mail" ? (
            /* ─────────────────────────────────────────────────────────────
               SCREEN: WEBLINGS ENTERPRISE MAIL INBOX
               ───────────────────────────────────────────────────────────── */
            <>
              {/* App Bar */}
              <div className={classes.mailAppHeader}>
                <div className={classes.mailHeaderTitleRow}>
                  <h3 className={classes.mailHeaderTitle}>Inbox</h3>
                  <span className={classes.mailUnreadBadge}>3</span>
                </div>
                <div className={classes.mailUserAvatar} title="Alex Smith">
                  <span>AS</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className={classes.mailSearchBar}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Search messages, tags...</span>
              </div>

              {/* Mail list */}
              <div className={classes.mailListWrapper}>
                {/* Email 1 */}
                <div
                  className={selectedEmail === 0 ? classes.mailPhoneCardActive : classes.mailPhoneCard}
                  onClick={() => setSelectedEmail(0)}
                >
                  {selectedEmail === 0 && <div className={classes.mailActiveBar} />}
                  <div className={classes.mailPhoneCardHeader}>
                    <span className={classes.mailPhoneSender}>Sarah Jenkins</span>
                    <span className={classes.mailPhoneTime}>10:42 AM</span>
                  </div>
                  <div className={classes.mailPhoneSubject}>Final 4K Rendering Assets</div>
                  <p className={classes.mailPhoneSnippet}>Here are the final heavy assets for the brand presentation...</p>
                </div>

                {/* Email 2 */}
                <div
                  className={selectedEmail === 1 ? classes.mailPhoneCardActive : classes.mailPhoneCard}
                  onClick={() => setSelectedEmail(1)}
                >
                  {selectedEmail === 1 && <div className={classes.mailActiveBar} />}
                  <div className={classes.mailPhoneCardHeader}>
                    <span className={classes.mailPhoneSender}>HR Automations</span>
                    <span className={classes.mailPhoneTimeMuted}>Yesterday</span>
                  </div>
                  <div className={classes.mailPhoneSubject}>Welcome to the team!</div>
                  <p className={classes.mailPhoneSnippet}>Your custom business email and Worksuite profile are active.</p>
                </div>

                {/* Email 3 */}
                <div
                  className={selectedEmail === 2 ? classes.mailPhoneCardActive : classes.mailPhoneCard}
                  onClick={() => setSelectedEmail(2)}
                >
                  {selectedEmail === 2 && <div className={classes.mailActiveBar} />}
                  <div className={classes.mailPhoneCardHeader}>
                    <span className={classes.mailPhoneSender}>Billing Dept</span>
                    <span className={classes.mailPhoneTimeMuted}>Oct 12</span>
                  </div>
                  <div className={classes.mailPhoneSubject}>Invoice #40291 Paid</div>
                  <p className={classes.mailPhoneSnippet}>Your subscription receipt for Weblings Enterprise Worksuite is ready.</p>
                </div>

                {/* Email 4 */}
                <div
                  className={selectedEmail === 3 ? classes.mailPhoneCardActive : classes.mailPhoneCard}
                  onClick={() => setSelectedEmail(3)}
                >
                  {selectedEmail === 3 && <div className={classes.mailActiveBar} />}
                  <div className={classes.mailPhoneCardHeader}>
                    <span className={classes.mailPhoneSender}>Streamline AI</span>
                    <span className={classes.mailPhoneTimeMuted}>Oct 10</span>
                  </div>
                  <div className={classes.mailPhoneSubject}>Weekly Sprint Summary</div>
                  <p className={classes.mailPhoneSnippet}>All 24 tickets in Sprint 32 were closed without blockers.</p>
                </div>

                {/* Compose FAB */}
                <button className={classes.mailComposeFab} title="Compose New Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </>
          ) : isAttendance ? (
            /* ─────────────────────────────────────────────────────────────
               SCREEN 1: ATTENDANCE & E-OFFICE (From User Image 1)
               ───────────────────────────────────────────────────────────── */
            <>
              {/* App Bar */}
              <div className={classes.appHeader}>
                <div className={classes.headerLeft}>
                  <button className={classes.headerMenuBtn} aria-label="Menu">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </button>
                  <h3 className={classes.headerTitle}>Attendance</h3>
                </div>
                <div className={classes.userAvatarCircle} title="Profile">
                  <span>👨‍💼</span>
                </div>
              </div>

              {/* Clock In / Clock Out Banner */}
              <div className={classes.clockInBanner}>
                <div className={classes.clockInBannerLeft}>
                  <span className={classes.clockInDate}>Fri, Sep 11</span>
                  <span className={classes.clockInTimeBig}>3:39 PM</span>
                </div>
                <button
                  className={classes.clockInActionBtn}
                  onClick={() => setClockedIn(!clockedIn)}
                >
                  {clockedIn ? "Clocked In ✓" : "Clock In"}
                </button>
              </div>

              {/* Shift Details Card */}
              <div className={classes.shiftDetailsCard}>
                <h4 className={classes.shiftTitle}>Shift Details</h4>

                {/* 4 Metric Columns */}
                <div className={classes.shiftMetricsGrid}>
                  <div className={classes.shiftMetricCol}>
                    <span className={classes.shiftMetricLabel}>Shift Start</span>
                    <span className={classes.shiftMetricValue}>1:00 AM</span>
                  </div>
                  <div className={classes.shiftMetricCol}>
                    <span className={classes.shiftMetricLabel}>Shift End</span>
                    <span className={classes.shiftMetricValue}>8:00 AM</span>
                  </div>
                  <div className={classes.shiftMetricCol}>
                    <span className={classes.shiftMetricLabel}>Lunch Time</span>
                    <span className={classes.shiftMetricValue}>00:10:00</span>
                  </div>
                  <div className={classes.shiftMetricCol}>
                    <span className={classes.shiftMetricLabel}>Eff. hours</span>
                    <span className={classes.shiftMetricValue}>7 hours</span>
                  </div>
                </div>

                {/* Shift Name & Weekdays */}
                <h5 className={classes.shiftSubTitle}>Shift Name</h5>
                <div className={classes.weekDaysRow}>
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => {
                    const isWorking = idx === 1 || idx === 2; // M and T working in screenshot
                    const isSelected = activeDay === idx;
                    return (
                      <div
                        key={idx}
                        className={isWorking || isSelected ? classes.dayCircleActive : classes.dayCircle}
                        onClick={() => setActiveDay(idx)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className={classes.legendRow}>
                  <span>
                    <span className={classes.legendDotBlue} /> Working days
                  </span>
                  <span>
                    <span className={classes.legendDotGray} /> Week Offs
                  </span>
                </div>

                {/* Shift Footer Summary */}
                <p className={classes.shiftFooterInfo}>
                  Today 1:00 AM - 8:00 AM (7 HRS)
                  <br />
                  <span className={classes.shiftFooterSub}>Break/Lunch Hours 00:10:00</span>
                </p>
              </div>

              {/* 2x2 Grid of Actions */}
              <div className={classes.actionGrid}>
                {/* Teams Log */}
                <div className={classes.actionGridCard}>
                  <svg className={classes.actionGridIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span className={classes.actionGridLabel}>Teams Log</span>
                </div>

                {/* Attendance Log */}
                <div className={classes.actionGridCard}>
                  <svg className={classes.actionGridIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                  <span className={classes.actionGridLabel}>Attendance Log</span>
                </div>

                {/* Emp. Hierarchy */}
                <div className={classes.actionGridCard}>
                  <svg className={classes.actionGridIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="3" width="6" height="6" rx="1" />
                    <rect x="3" y="15" width="6" height="6" rx="1" />
                    <rect x="15" y="15" width="6" height="6" rx="1" />
                    <path d="M12 9v3m0 0H6v3m6-3h6v3" />
                  </svg>
                  <span className={classes.actionGridLabel}>Emp. Hierarchy</span>
                </div>

                {/* Department */}
                <div className={classes.actionGridCard}>
                  <svg className={classes.actionGridIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                  <span className={classes.actionGridLabel}>Department</span>
                </div>
              </div>
            </>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               SCREEN 2: MAIN DASHBOARD (From User Image 2)
               ───────────────────────────────────────────────────────────── */
            <>
              {/* App Bar */}
              <div className={classes.appHeader}>
                <div className={classes.headerLeft}>
                  <WeblogoIcon width="20" height="18" className={classes.headerLogo} />
                  <h3 className={classes.headerTitle}>Dashboard</h3>
                </div>
              </div>

              {/* Announcement Performance Banner */}
              <div className={classes.announcementCard}>
                <h4 className={classes.announcementTitle}>
                  Quarterly Performance Reviews: Preparing for Success in Q4
                </h4>
                <p className={classes.announcementSub}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* 2-Column KPI Row: Holiday & Today */}
              <div className={classes.kpiRow}>
                {/* Holiday Card */}
                <div className={classes.kpiCard}>
                  <p className={classes.kpiLabel}>HOLIDAY</p>
                  <p className={classes.kpiSubLabel}>Next</p>
                  <p className={classes.kpiValue}>Pongal</p>
                  <p className={classes.kpiDate}>Fri 15, Jan 2027</p>
                </div>

                {/* Today Card */}
                <div className={classes.kpiCard}>
                  <p className={classes.kpiLabel}>TODAY</p>
                  <p className={classes.kpiValue}>3:39 PM</p>
                  <p className={classes.kpiDate}>FRI, SEP 11, 2026</p>
                </div>
              </div>

              {/* Attendance Card */}
              <div className={classes.dashboardAttendanceCard}>
                <div className={classes.cardHeaderRow}>
                  <h4 className={classes.cardHeaderTitle}>Attendance</h4>
                  <span className={classes.viewMoreLink}>View More</span>
                </div>

                <div className={classes.clockInTimeRow}>
                  <span className={classes.clockInLabel}>Clock In Time</span>
                  <span className={classes.clockInValue}>9:00 AM</span>
                </div>

                <div className={classes.arrivalStatsRow}>
                  <span>On-Time Arrival &nbsp; <strong>-</strong></span>
                  <span>Late Arrival &nbsp; <strong>-</strong></span>
                </div>

                {/* Clock Out & Avatar Stack Row */}
                <div className={classes.clockOutRow}>
                  <div className={classes.notClockedInGroup}>
                    <span className={classes.notClockedInLabel}>Not Clocked In</span>
                    <div className={classes.avatarStack}>
                      <span className={classes.avatarPill}>G</span>
                      <span className={classes.avatarPill}>T</span>
                      <span className={classes.avatarPill}>JD</span>
                      <span className={classes.avatarPill}>F</span>
                      <span className={classes.avatarPillCount}>11</span>
                    </div>
                  </div>

                  <button
                    className={classes.clockOutBtn}
                    onClick={() => setClockedIn(!clockedIn)}
                  >
                    {clockedIn ? "Clock In" : "Clock Out"}
                  </button>
                </div>
              </div>

              {/* Leave Balance Card */}
              <div className={classes.leaveBalanceCard}>
                <div className={classes.cardHeaderRow}>
                  <h4 className={classes.cardHeaderTitle}>Leave Balance</h4>
                  <span className={classes.viewMoreLink}>Apply Leave</span>
                </div>

                <div className={classes.gaugeArea}>
                  <div className={classes.gaugeContainer}>
                    {/* SVG Circular Ring Gauge */}
                    <svg className={classes.gaugeRingSvg} viewBox="0 0 44 44">
                      <circle
                        cx="22"
                        cy="22"
                        r="18"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="4"
                      />
                      <circle
                        cx="22"
                        cy="22"
                        r="18"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="4"
                        strokeDasharray="113.1"
                        strokeDashoffset="34"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A", marginTop: "-42px" }}>
                      16
                    </span>
                    <span className={classes.gaugeSubText} style={{ marginTop: "24px" }}>
                      sick leave
                    </span>
                  </div>

                  {/* Calendar FAB Button */}
                  <div className={classes.applyLeaveFab} title="Calendar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                </div>

                <span className={classes.viewMoreLink} style={{ textAlign: "center", marginTop: "2px" }}>
                  View More
                </span>
              </div>
            </>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
           STICKY BOTTOM WORKSUITE NAVIGATION WITH CENTER FAB
           ───────────────────────────────────────────────────────────── */}
        <div className={classes.tabBarFixed}>
          <div className={classes.tabRow}>
            {/* Dashboard */}
            <div
              className={activeTab === "dash" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("dash")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              <span>Dashb...</span>
            </div>

            {/* Chats */}
            <div
              className={activeTab === "chats" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("chats")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span>Chats</span>
            </div>

            {/* Mail */}
            <div
              className={activeTab === "mail" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("mail")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Mail</span>
            </div>

            {/* Center Floating Action Button (FAB) */}
            <div
              className={classes.centerFab}
              title="User Profile / Quick Action"
              onClick={() => setClockedIn(!clockedIn)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Streamline */}
            <div
              className={activeTab === "stream" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("stream")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Strea...</span>
            </div>

            {/* E-Office */}
            <div
              className={activeTab === "eoffice" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("eoffice")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
              </svg>
              <span>Eoffice</span>
            </div>

            {/* Calendar */}
            <div
              className={activeTab === "calendar" ? classes.tabItemActive : classes.tabItem}
              onClick={() => setActiveTab("calendar")}
            >
              <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Calend...</span>
            </div>
          </div>

          {/* iOS Home Indicator Bar — safely nested inside tab bar */}
          <div className={classes.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
