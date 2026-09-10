'use client';

import React from 'react';
import { useStyles } from './style';
import { getSrc } from '../../utils/getSrc';
import gowthamImg from '../../assets/images/about/gowtham_founder.jpg';

// SVG Icons tailored for the dashboard mockup
const SvgBell = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SvgBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const SvgMegaphone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const SvgFileText = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const SvgMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SvgChatBubble = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SvgCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SvgGear = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SvgHelp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

// High-resolution avatar faces
const AvatarFace = ({ seed, bg = "#DBEAFE", color = "#1D4ED8", label }: { seed?: string; bg?: string; color?: string; label?: string }) => (
  <div style={{
    width: "100%", height: "100%", borderRadius: "50%",
    backgroundColor: bg, color, display: "flex", alignItems: "center",
    justifyContent: "center", fontWeight: 700, fontSize: "11px",
  }}>
    {label || seed?.[0] || 'U'}
  </div>
);

export const WorkspaceDashboardMockup: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboardRoot}>
      {/* Top Application Bar */}
      <div className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <div className={classes.weblingsBrandLogo}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 5L8 19L12 9L16 19L20 5" stroke="#0072C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>weblings</span>
          </div>
        </div>
        <div className={classes.topBarRight}>
          <div className={classes.iconBtn}>
            <SvgBell />
            <span className={classes.notifDot} />
          </div>
          <div className={classes.userAvatarCircle}>A</div>
        </div>
      </div>

      {/* Main Body */}
      <div className={classes.bodyLayout}>
        {/* Sidebar 1 */}
        <aside className={classes.sidebarCol1}>
          <span style={{ fontSize: "12px", color: "#94A3B8" }}>›</span>
          <div className={classes.sideAvatar}>A</div>
          <div className={classes.sideIcon}><SvgBriefcase /></div>
          <div className={classes.sideIcon}><SvgMegaphone /></div>
          <div className={classes.sideIcon}><SvgFileText /></div>
          <div className={classes.sideIcon}><SvgMail /></div>
          <div className={`${classes.sideIcon} ${classes.sideIconActive}`}><SvgChatBubble /></div>
          <div className={classes.sideIcon}><SvgCalendar /></div>
          <div className={classes.sideIcon}><SvgGear /></div>
          <div className={classes.sideIcon}><SvgHelp /></div>
        </aside>

        {/* Sidebar 2 */}
        <aside className={classes.sidebarCol2}>
          <span style={{ fontSize: "12px", color: "#94A3B8" }}>›</span>
          <div className={classes.sideAvatar}>A</div>
          <div className={classes.sideIcon}><SvgBriefcase /></div>
          <div className={classes.sideIcon}><SvgMail /></div>
          <div className={classes.sideIcon}><SvgChatBubble /></div>
          <div className={classes.sideIcon}><SvgCalendar /></div>
          <div className={`${classes.sideIcon} ${classes.sideIconActive}`}><SvgGear /></div>
          <div className={classes.sideIcon}><SvgHelp /></div>
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
              Review goals, track department milestones, and align team deliverables for the quarter.
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
                  <div className={classes.todayDate}>Tue 11, Nov 2024</div>
                </div>
              </div>

              {/* Attendance Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <h3 className={classes.cardTitle}>Attendance</h3>
                </div>
                <div className={classes.clockRow}>
                  <div>
                    <span className={classes.subSmall}>Clock In Time</span>
                    <div className={classes.clockTime}>9:00 AM</div>
                  </div>
                  <div>
                    <span className={classes.subSmall}>Status</span>
                    <div className={classes.onTimeText}>On-Time Arrival</div>
                  </div>
                </div>
                <div>
                  <span className={classes.subSmall}>Not Clocked In</span>
                  <div className={classes.avatarGroup}>
                    <span className={classes.initialCircle}>G</span>
                    <span className={classes.initialCircle}>T</span>
                    <span className={classes.initialCircle}>D</span>
                    <span className={classes.initialCircle}>F</span>
                    <span className={classes.plusCircle}>+9</span>
                  </div>
                </div>
              </div>

              {/* Leave Balance Card */}
              <div className={classes.card}>
                <div className={classes.cardTitleRow}>
                  <h3 className={classes.cardTitle}>Leave Balance</h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span className={classes.cardActionLink}>Apply Leave</span>
                    <span className={classes.cardActionLink}>View more</span>
                  </div>
                </div>
                <div className={classes.gaugesRow}>
                  <div className={classes.gaugeItem}>
                    <div className={classes.gaugeCircle}>1</div>
                    <span className={classes.gaugeLabel}>Sick</span>
                  </div>
                  <div className={classes.gaugeItem}>
                    <div className={classes.gaugeCircle}>2</div>
                    <span className={classes.gaugeLabel}>Casual</span>
                  </div>
                  <div className={classes.gaugeItem}>
                    <div className={classes.gaugeCircle}>6</div>
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
                    <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden" }}>
                      <AvatarFace bg="#FCE7F3" color="#BE185D" label="D" />
                    </div>
                    <span className={classes.memberName}>Diya</span>
                  </div>
                  <div className={classes.memberItem}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden" }}>
                      <AvatarFace bg="#FEF3C7" color="#B45309" label="H" />
                    </div>
                    <span className={classes.memberName}>Herald</span>
                  </div>
                  <div className={classes.memberItem}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden" }}>
                      <AvatarFace bg="#D1FAE5" color="#047857" label="J" />
                    </div>
                    <span className={classes.memberName}>John</span>
                  </div>
                  <div className={classes.memberItem}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden" }}>
                      <AvatarFace bg="#E0E7FF" color="#4338CA" label="M" />
                    </div>
                    <span className={classes.memberName}>Mathew</span>
                  </div>
                  <div className={classes.memberItem}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden" }}>
                      <AvatarFace bg="#EDE9FE" color="#6D28D9" label="H" />
                    </div>
                    <span className={classes.memberName}>Hitesh</span>
                  </div>
                  <div className={classes.plusCircle} style={{ width: 34, height: 34 }}>
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
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <SvgMail />
                    <h3 className={classes.cardTitle}>Mail</h3>
                  </div>
                  <span className={classes.cardActionLink}>Open Mail</span>
                </div>

                <div className={classes.mailItem}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <AvatarFace bg="#E0F2FE" color="#0284C7" label="S" />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailHeader}>
                      <span className={classes.mailSender}>Surány Izabella</span>
                      <span className={classes.mailDate}>Wed 11, Aug</span>
                    </div>
                    <p className={classes.mailSnippet}>
                      Quarterly presentation slides and marketing collateral ready for review.
                    </p>
                  </div>
                </div>

                <div className={classes.mailItem}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <AvatarFace bg="#FEF3C7" color="#B45309" label="S" />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailHeader}>
                      <span className={classes.mailSender}>Surány Izabella</span>
                      <span className={classes.mailDate}>Wed 11, Aug</span>
                    </div>
                    <p className={classes.mailSnippet}>
                      Updated security policies for remote VPN connections.
                    </p>
                  </div>
                </div>

                <div className={classes.mailItem}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <AvatarFace bg="#D1FAE5" color="#047857" label="S" />
                  </div>
                  <div className={classes.mailBody}>
                    <div className={classes.mailHeader}>
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

                <div className={classes.announcementItem}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <AvatarFace bg="#FCE7F3" color="#BE185D" label="A" />
                  </div>
                  <div className={classes.announcementBody}>
                    <div>
                      <span className={classes.announcementSender}>abirami ramesh</span>
                      <span className={classes.announcementTime}>06 July 2026 12:01PM</span>
                    </div>
                    <div className={classes.announcementText}>Happy New Year 🎉</div>
                    <p className={classes.announcementSub}>
                      Wishing the whole team a productive, joyful, and healthy year ahead!
                    </p>
                  </div>
                </div>

                <div className={classes.announcementItem}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <AvatarFace bg="#EDE9FE" color="#6D28D9" label="A" />
                  </div>
                  <div className={classes.announcementBody}>
                    <div>
                      <span className={classes.announcementSender}>abirami ramesh</span>
                      <span className={classes.announcementTime}>06 July 2026 12:01PM</span>
                    </div>
                    <div className={classes.announcementText}>📊 Started poll</div>
                    <p className={classes.announcementSub}>How do you commute to work?</p>
                  </div>
                </div>

                <div className={classes.announcementItem}>
                  <img
                    src={getSrc(gowthamImg)}
                    alt="Gowtham"
                    className={classes.announcementAvatar}
                  />
                  <div className={classes.announcementBody}>
                    <div>
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
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <SvgCalendar />
                    <h3 className={classes.cardTitle}>Calendar</h3>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>- Schedules Wed, Nov 11</span>
                  </div>
                  <span className={classes.cardActionLink}>Open Calendar</span>
                </div>

                <div className={classes.scheduleGrid}>
                  <div className={classes.scheduleCell}>
                    <span>09:00 AM</span>
                    <div className={classes.scheduleEventBlock}>Daily Standup</div>
                  </div>
                  <div className={classes.scheduleCell}>
                    <span>10:00 AM</span>
                  </div>
                  <div className={classes.scheduleCell}>
                    <span>11:00 AM</span>
                    <div className={classes.scheduleEventBlock} style={{ backgroundColor: "#FEF3C7", borderColor: "#F59E0B", color: "#B45309" }}>
                      Product Sync
                    </div>
                  </div>
                  <div className={classes.scheduleCell}>
                    <span>12:00 PM</span>
                  </div>
                  <div className={classes.scheduleCell}>
                    <span>01:00 PM</span>
                    <div className={classes.scheduleEventBlock} style={{ backgroundColor: "#EDE9FE", borderColor: "#8B5CF6", color: "#6D28D9" }}>
                      Design Review
                    </div>
                  </div>
                  <div className={classes.scheduleCell}>
                    <span>02:00 PM</span>
                  </div>
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
