'use client';

import React from 'react';
import { useStyles } from './style';
import { getSrc } from '../../utils/getSrc';
import gowthamImg from '../../assets/images/about/gowtham_founder.jpg';

// SVG Icons tailored for the dashboard mockup to match the exact image
const SvgWeblingsLogoMark = () => (
  <svg width="28" height="20" viewBox="10 32 105 66" fill="none">
    <path
      d="M109.697 41.3303C109.971 40.8546 109.808 40.2467 109.333 39.9723L106.32 38.2329C97.1677 32.9488 85.4649 36.0846 80.1807 45.2366L62.7228 75.4747C59.4632 81.1205 61.3976 88.3399 67.0433 91.5996C72.6894 94.8592 79.9086 92.9248 83.1682 87.279L109.697 41.3303Z"
      fill="#0072C4"
    />
    <path
      d="M16.5619 41.3303C16.2874 40.8546 16.4503 40.2467 16.9258 39.9723L19.9388 38.2329C29.0911 32.9488 40.7941 36.0846 46.0782 45.2366L63.5361 75.4747C66.7957 81.1205 64.8613 88.3399 59.2153 91.5996C53.5695 94.8592 46.35 92.9248 43.0904 87.279L16.5619 41.3303Z"
      fill="#0072C4"
    />
    <path
      d="M72.101 56.8956C75.0503 60.5811 75.6094 65.8431 73.1068 70.1775L63.2876 87.1853C63.1628 87.4011 63.0324 87.6112 62.8967 87.8163C62.7949 87.6578 62.6967 87.4966 62.6015 87.3318L52.7823 70.3243C49.5227 64.6786 51.4571 57.4591 57.1029 54.1995C62.1675 51.2753 68.498 52.5309 72.101 56.8956Z"
      fill="#005BA6"
    />
  </svg>
);

const SvgBell = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SvgBriefcase = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const SvgMegaphone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const SvgPresentation = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SvgMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SvgChatBubble = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SvgCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SvgGear = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SvgHelp = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const SvgUsersGroup = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SvgPoll = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

// Gauge progress circle matching the green ring in screenshot
const GaugeRing: React.FC<{ value: number; max?: number }> = ({ value, max = 10 }) => {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div style={{ position: 'relative', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)', position: 'absolute', top: 0, left: 0 }}>
        <circle cx="22" cy="22" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <span style={{ fontSize: '14px', fontWeight: 700, color: '#1F2937' }}>{value}</span>
    </div>
  );
};

// Avatar with image and graceful fallback
interface AvatarProps {
  src?: string;
  alt: string;
  label: string;
  bg?: string;
  color?: string;
}

const AvatarWithFallback: React.FC<AvatarProps> = ({ src, alt, label, bg = '#E0F2FE', color = '#0072C4' }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (!src || imgFailed) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: bg,
          color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '11px',
        }}
      >
        {label}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImgFailed(true)}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
};

export const WorkspaceDashboardMockup: React.FC = () => {
  const classes = useStyles();
  const [activeSideCol1, setActiveSideCol1] = React.useState(4); // default chat
  const [activeSideCol2, setActiveSideCol2] = React.useState(4); // default gear
  const [clockedIn, setClockedIn] = React.useState(true);
  const [activeMailIndex, setActiveMailIndex] = React.useState(0);
  const [selectedCells, setSelectedCells] = React.useState<number[]>([2, 5]);
  const [notifActive, setNotifActive] = React.useState(true);

  return (
    <div className={classes.dashboardRoot}>
      {/* Top Application Bar */}
      <div className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <div className={classes.weblingsBrandLogo}>
            <SvgWeblingsLogoMark />
          </div>
        </div>
        <div className={classes.topBarRight}>
          <div
            className={classes.iconBtn}
            onClick={() => setNotifActive(!notifActive)}
            title={notifActive ? "Notifications (1 unread)" : "Notifications"}
          >
            <SvgBell />
            {notifActive && <span className={classes.notifDot} />}
          </div>
          <div className={classes.userAvatarCircle} title="Profile Settings">A</div>
        </div>
      </div>

      {/* Main Body */}
      <div className={classes.bodyLayout}>
        {/* Sidebar 1 (Far Left) */}
        <aside className={classes.sidebarCol1}>
          <span className={classes.sideChevron} title="Collapse sidebar">›</span>
          <div className={classes.sideAvatar}>A</div>
          {[
            { icon: <SvgBriefcase />, title: "Workspace" },
            { icon: <SvgMegaphone />, title: "Announcements" },
            { icon: <SvgPresentation />, title: "Presentations" },
            { icon: <SvgMail />, title: "Mail" },
            { icon: <SvgChatBubble />, title: "Team Chat" },
            { icon: <SvgCalendar />, title: "Calendar" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${classes.sideIcon} ${activeSideCol1 === idx ? classes.sideIconActiveBox : ""}`}
              onClick={() => setActiveSideCol1(idx)}
              title={item.title}
            >
              {item.icon}
            </div>
          ))}
          <div className={classes.sidebarSpacer} />
          <div
            className={`${classes.sideIcon} ${activeSideCol1 === 6 ? classes.sideIconActiveBox : ""}`}
            onClick={() => setActiveSideCol1(6)}
            title="Settings"
          >
            <SvgGear />
          </div>
          <div
            className={`${classes.sideIcon} ${activeSideCol1 === 7 ? classes.sideIconActiveBox : ""}`}
            onClick={() => setActiveSideCol1(7)}
            title="Help"
          >
            <SvgHelp />
          </div>
        </aside>

        {/* Sidebar 2 (Inner Left) */}
        <aside className={classes.sidebarCol2}>
          <span className={classes.sideChevron} title="Collapse sub-panel">›</span>
          <div className={classes.sideAvatar}>A</div>
          {[
            { icon: <SvgBriefcase />, title: "Files" },
            { icon: <SvgMail />, title: "Inbox" },
            { icon: <SvgChatBubble />, title: "Channels" },
            { icon: <SvgCalendar />, title: "Schedules" },
            { icon: <SvgGear />, title: "Configurations" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${classes.sideIcon} ${activeSideCol2 === idx ? classes.sideIconActiveBar : ""}`}
              onClick={() => setActiveSideCol2(idx)}
              title={item.title}
            >
              {item.icon}
            </div>
          ))}
          <div className={classes.sidebarSpacer} />
          <div
            className={`${classes.sideIcon} ${activeSideCol2 === 5 ? classes.sideIconActiveBar : ""}`}
            onClick={() => setActiveSideCol2(5)}
            title="Support"
          >
            <SvgHelp />
          </div>
        </aside>

        {/* Content Area */}
        <main className={classes.contentArea}>
          {/* Header Banner */}
          <div className={classes.banner}>
            <div className={classes.bannerCurve} />
            <h2 className={classes.bannerTitle}>
              Quarterly Performance Reviews: Preparing for Success in Q4
            </h2>
            <p className={classes.bannerSubtext}>
              Norem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* 2-Column Dashboard Grid */}
          <div className={classes.dashGrid}>
            {/* Left Column */}
            <div className={classes.colLeft}>
              {/* Holiday & Today Row */}
              <div className={classes.holidayTodayRow}>
                {/* Holiday Card */}
                <div className={classes.holidayCard}>
                  <div className={classes.kickerLabel}>Holiday</div>
                  <div className={classes.holidayContent}>
                    <div className={classes.holidayLeft}>
                      <span className={classes.subSmall}>Today</span>
                      <strong className={classes.holidayBold}>Diwali</strong>
                      <span className={classes.holidayDate}>Tue 11, Nov 2024</span>
                    </div>
                    <div className={classes.holidayDivider} />
                    <div className={classes.holidayRight}>
                      <span className={classes.subSmall}>Next</span>
                      <strong className={classes.holidayNextBold}>Christmas</strong>
                      <span className={classes.holidayDate}>Tue 26, Dec 2024</span>
                    </div>
                  </div>
                </div>

                {/* Today Card */}
                <div className={classes.card}>
                  <div className={classes.kickerLabel}>Today</div>
                  <div className={classes.todayTime}>12:30 PM</div>
                  <div className={classes.todayDate}>
                    Tue 11, Nov<br />2024
                  </div>
                </div>
              </div>

              {/* Attendance Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 className={classes.cardTitle}>Attendance</h3>
                  <button
                    type="button"
                    onClick={() => setClockedIn(!clockedIn)}
                    style={{
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "10px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: clockedIn ? "#EFF6FF" : "#FEF2F2",
                      color: clockedIn ? "#0072C4" : "#EF4444",
                      transition: "all 0.15s ease",
                    }}
                    title="Toggle Clock In / Clock Out"
                  >
                    {clockedIn ? "Clock Out" : "Clock In"}
                  </button>
                </div>
                <div className={classes.attendanceRow}>
                  <div>
                    <span className={classes.subSmall}>Clock In Time</span>
                    <div className={classes.clockTime}>{clockedIn ? "9:00 AM" : "--:--"}</div>
                  </div>
                  <div className={classes.onTimeCol}>
                    <div className={classes.onTimeDash}>{clockedIn ? "-" : "Off"}</div>
                    <div className={classes.onTimeText}>{clockedIn ? "On-Time Arrival" : "Not Clocked In"}</div>
                  </div>
                </div>
                <div>
                  <span className={classes.subSmall}>Not Clocked In</span>
                  <div className={classes.avatarGroup}>
                    <span className={classes.initialCircle} title="Gowtham (Engineering)">G</span>
                    <span className={classes.initialCircle} title="Thomas (Product)">T</span>
                    <span className={classes.initialCircle} title="David (Design)">D</span>
                    <span className={classes.initialCircle} title="Francis (Marketing)">F</span>
                    <span className={classes.plusCircle} title="9 other employees">+9</span>
                  </div>
                </div>
              </div>

              {/* Leave Balance Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <h3 className={classes.cardTitle}>Leave Balance</h3>
                  <div className={classes.leaveLinksContainer}>
                    <span className={classes.cardActionLink}>Apply Leave</span>
                    <span className={classes.cardActionLink}>View more</span>
                  </div>
                </div>
                <div className={classes.gaugesRow}>
                  <div className={classes.gaugeItem}>
                    <GaugeRing value={1} max={10} />
                    <span className={classes.gaugeLabel}>Sick</span>
                  </div>
                  <div className={classes.gaugeItem}>
                    <GaugeRing value={2} max={10} />
                    <span className={classes.gaugeLabel}>Casual</span>
                  </div>
                  <div className={classes.gaugeItem}>
                    <GaugeRing value={6} max={10} />
                    <span className={classes.gaugeLabel}>Paid</span>
                  </div>
                </div>
              </div>

              {/* On Leave Today Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <h3 className={classes.cardTitle}>On leave today</h3>
                </div>
                <div className={classes.teamRow}>
                  <div className={classes.memberItem}>
                    <div className={classes.memberAvatarFrame}>
                      <AvatarWithFallback
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80"
                        alt="Diya"
                        label="D"
                        bg="#FCE7F3"
                        color="#BE185D"
                      />
                    </div>
                    <span className={classes.memberName}>Diya</span>
                  </div>

                  <div className={classes.memberItem}>
                    <div className={classes.memberAvatarFrame}>
                      <AvatarWithFallback
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
                        alt="Herald"
                        label="H"
                        bg="#FEF3C7"
                        color="#B45309"
                      />
                    </div>
                    <span className={classes.memberName}>Herald</span>
                  </div>

                  <div className={classes.memberItem}>
                    <div className={classes.memberAvatarFrame}>
                      <AvatarWithFallback
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80"
                        alt="John"
                        label="J"
                        bg="#D1FAE5"
                        color="#047857"
                      />
                    </div>
                    <span className={classes.memberName}>John</span>
                  </div>

                  <div className={classes.memberItem}>
                    <div className={classes.memberAvatarFrame}>
                      <AvatarWithFallback
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80"
                        alt="Mathew"
                        label="M"
                        bg="#E0E7FF"
                        color="#4338CA"
                      />
                    </div>
                    <span className={classes.memberName}>Mathew...</span>
                  </div>

                  <div className={classes.memberItem}>
                    <div className={classes.memberAvatarFrame}>
                      <AvatarWithFallback
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
                        alt="Hitesh"
                        label="H"
                        bg="#EDE9FE"
                        color="#6D28D9"
                      />
                    </div>
                    <span className={classes.memberName}>Hitesh k...</span>
                  </div>

                  <div className={classes.onLeavePlusCircle}>
                    +8
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={classes.colRight}>
              {/* Mail Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <SvgMail />
                    <h3 className={classes.cardTitle}>Mail</h3>
                    <span style={{ color: '#9CA3AF', fontSize: '11px', margin: '0 2px' }}>·</span>
                    <div className={classes.mailHeaderIcons}>
                      <span className={classes.mailActionIcon} title="Inbox">📥</span>
                      <span className={classes.mailActionIcon} title="Mail">✉</span>
                      <span className={classes.mailActionIcon} title="Calendar">🗂</span>
                      <span className={classes.mailActionIcon} title="Send">↗</span>
                    </div>
                  </div>
                  <span className={classes.cardActionLink}>Open Mail</span>
                </div>

                {/* Mail Item 1 */}
                <div
                  className={classes.mailItem}
                  onClick={() => setActiveMailIndex(0)}
                  style={{
                    backgroundColor: activeMailIndex === 0 ? "#F8FAFC" : undefined,
                    borderLeft: activeMailIndex === 0 ? "2px solid #0072C4" : "2px solid transparent",
                  }}
                  title="Click to view message"
                >
                  <div className={classes.mailAvatarFrame}>
                    <AvatarWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                      alt="Surány Izabella"
                      label="S"
                      bg="#E0F2FE"
                      color="#0284C7"
                    />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailRowTop}>
                      <span className={classes.mailSender}>Surány Izabella</span>
                      <span className={classes.mailDate}>Wed 11, Aug</span>
                    </div>
                    <p className={classes.mailSnippet}>
                      Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Mail Item 2 */}
                <div
                  className={classes.mailItem}
                  onClick={() => setActiveMailIndex(1)}
                  style={{
                    backgroundColor: activeMailIndex === 1 ? "#F8FAFC" : undefined,
                    borderLeft: activeMailIndex === 1 ? "2px solid #0072C4" : "2px solid transparent",
                  }}
                  title="Click to view message"
                >
                  <div className={classes.mailAvatarFrame}>
                    <AvatarWithFallback
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                      alt="Surány Izabella"
                      label="S"
                      bg="#FEF3C7"
                      color="#B45309"
                    />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailRowTop}>
                      <span className={classes.mailSender}>Surány Izabella</span>
                      <span className={classes.mailDate}>Wed 11, Aug</span>
                    </div>
                    <p className={classes.mailSnippet}>
                      Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Mail Item 3 */}
                <div
                  className={classes.mailItem}
                  onClick={() => setActiveMailIndex(2)}
                  style={{
                    backgroundColor: activeMailIndex === 2 ? "#F8FAFC" : undefined,
                    borderLeft: activeMailIndex === 2 ? "2px solid #0072C4" : "2px solid transparent",
                  }}
                  title="Click to view message"
                >
                  <div className={classes.mailAvatarFrame}>
                    <AvatarWithFallback
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                      alt="Surány Izabella"
                      label="S"
                      bg="#D1FAE5"
                      color="#047857"
                    />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailRowTop}>
                      <span className={classes.mailSender}>Surány Izabella</span>
                      <span className={classes.mailDate}>Wed 11, Aug</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Announcement Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <h3 className={classes.cardTitle}>Announcement</h3>
                  <span className={classes.cardActionLink}>Open Announcement</span>
                </div>

                {/* Announcement 1 */}
                <div className={classes.announcementItem}>
                  <div className={classes.announcementAvatarFrame}>
                    <AvatarWithFallback
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                      alt="abirami ramesh"
                      label="A"
                      bg="#FCE7F3"
                      color="#BE185D"
                    />
                  </div>
                  <div className={classes.announcementBody}>
                    <div className={classes.announcementRowTop}>
                      <span className={classes.announcementSender}>abirami ramesh</span>
                      <span className={classes.announcementTime}>06 July 2026 12:01PM</span>
                    </div>
                    <div className={classes.announcementText}>Happy New Year 🎉</div>
                    <p className={classes.announcementSub}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...
                    </p>
                  </div>
                </div>

                {/* Announcement 2 */}
                <div className={classes.announcementItem}>
                  <div className={classes.announcementAvatarFrame}>
                    <AvatarWithFallback
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                      alt="abirami ramesh"
                      label="A"
                      bg="#EDE9FE"
                      color="#6D28D9"
                    />
                  </div>
                  <div className={classes.announcementBody}>
                    <div className={classes.announcementRowTop}>
                      <span className={classes.announcementSender}>abirami ramesh</span>
                      <span className={classes.announcementTime}>06 July 2026 12:01PM</span>
                    </div>
                    <div className={classes.announcementText}>
                      <SvgPoll /> Started poll
                    </div>
                    <p className={classes.announcementSub}>How do you commute to work?</p>
                  </div>
                </div>

                {/* Announcement 3 */}
                <div className={classes.announcementItem}>
                  <div className={classes.announcementAvatarFrame}>
                    <img
                      src={getSrc(gowthamImg)}
                      alt="Gowtham"
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className={classes.announcementBody}>
                    <div className={classes.announcementRowTop}>
                      <span className={classes.announcementSender}>Gowtham</span>
                      <span className={classes.announcementTime}>06 July 2026 12:01PM</span>
                    </div>
                    <div className={classes.announcementText}>Gowtham praised David Chen and Elena.</div>
                    <span className={classes.teamBadge}>
                      <SvgUsersGroup /> Team Work
                    </span>
                  </div>
                </div>
              </div>

              {/* Calendar Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <SvgCalendar />
                    <h3 className={classes.cardTitle}>Calendar</h3>
                    <span style={{ fontSize: '11px', color: '#6B7280' }}>- Schedules Wed, Nov 11</span>
                  </div>
                  <span className={classes.cardActionLink}>Open Calendar</span>
                </div>

                <div className={classes.scheduleGrid}>
                  {Array.from({ length: 8 }).map((_, i) => {
                    const isSelected = selectedCells.includes(i);
                    return (
                      <div
                        key={i}
                        className={classes.scheduleCell}
                        onClick={() =>
                          setSelectedCells((prev) =>
                            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
                          )
                        }
                        style={{
                          backgroundColor: isSelected ? "#DBEAFE" : "#FFFFFF",
                        }}
                        title={isSelected ? "Booked" : "Available"}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkspaceDashboardMockup;
