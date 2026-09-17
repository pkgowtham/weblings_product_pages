'use client';

import React, { useState, useEffect } from 'react';
import { useStyles } from './style';
import { WeblogoIcon } from '../../assets/icons_component';

export const EofficeMockup: React.FC = () => {
  const classes = useStyles();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'attendance' | 'leaves' | 'feed' | 'assets'>('dashboard');

  // Interactive punch in/out and active timer state
  const [isClockedIn, setIsClockedIn] = useState<boolean>(true);
  const [timerSeconds, setTimerSeconds] = useState<number>(4 * 3600 + 32 * 60 + 18); // 04h 32m 18s

  useEffect(() => {
    if (!isClockedIn) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isClockedIn]);

  // Format seconds to HH:MM:SS
  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  };

  // Interactive Poll state
  const [votedOption, setVotedOption] = useState<number | null>(null);
  const [pollVotes, setPollVotes] = useState({ opt1: 42, opt2: 18 });

  const handleVote = (opt: 1 | 2) => {
    if (votedOption === opt) return;
    if (votedOption === 1) {
      setPollVotes({ opt1: pollVotes.opt1 - 1, opt2: pollVotes.opt2 + 1 });
    } else if (votedOption === 2) {
      setPollVotes({ opt1: pollVotes.opt1 + 1, opt2: pollVotes.opt2 - 1 });
    } else {
      if (opt === 1) setPollVotes({ ...pollVotes, opt1: pollVotes.opt1 + 1 });
      else setPollVotes({ ...pollVotes, opt2: pollVotes.opt2 + 1 });
    }
    setVotedOption(opt);
  };

  const totalVotes = pollVotes.opt1 + pollVotes.opt2;
  const pct1 = Math.round((pollVotes.opt1 / totalVotes) * 100);
  const pct2 = 100 - pct1;

  // Interactive Praise/Kudos counter
  const [kudosCount, setKudosCount] = useState<number>(14);
  const [hasLikedKudos, setHasLikedKudos] = useState<boolean>(false);

  const handleKudos = () => {
    if (hasLikedKudos) {
      setKudosCount((c) => c - 1);
      setHasLikedKudos(false);
    } else {
      setKudosCount((c) => c + 1);
      setHasLikedKudos(true);
    }
  };

  // Interactive Manager Approval state
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'declined'>('pending');

  return (
    <div className={classes.mockupFrame}>
      {/* ─────────────────────────────────────────────────────────────
          1. TOP APPLICATION BAR
          ───────────────────────────────────────────────────────────── */}
      <header className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <WeblogoIcon width={28} height={28} />
          <div className={classes.appNameBadge}>
            <span className={classes.appName}>Weblings E-Office</span>
            <span className={classes.appBreadcrumb}>HQ Operations · NY Hub</span>
          </div>
        </div>

        {/* Center Shift Badge */}
        <div className={classes.topBarCenter}>
          <div className={classes.shiftStatusDot} />
          <span className={classes.shiftText}>Active Shift</span>
          <span className={classes.shiftSub}>10:00 AM – 07:00 PM EST</span>
        </div>

        {/* Right Action Bar */}
        <div className={classes.topBarRight}>
          <button
            type="button"
            className={`${classes.punchButton} ${!isClockedIn ? classes.punchButtonOut : ''}`}
            onClick={() => setIsClockedIn(!isClockedIn)}
            title={isClockedIn ? 'Punch Out' : 'Punch In'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{isClockedIn ? 'Clock Out' : 'Clock In'}</span>
          </button>

          <button type="button" className={classes.bellBtn} title="Notifications">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className={classes.bellDot} />
          </button>

          <div className={classes.profileWrap}>
            <div className={classes.topProfileAvatar}>AJ</div>
            <span className={classes.topProfileName}>Alex Johnson</span>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. WORKSPACE BODY (LEFT RAIL + CENTER STAGE + RIGHT SIDEBAR)
          ───────────────────────────────────────────────────────────── */}
      <div className={classes.mainBody}>
        {/* LEFT ICON RAIL */}
        <aside className={classes.leftRail}>
          {/* Dashboard */}
          <button
            type="button"
            className={`${classes.railNavItem} ${activeTab === 'dashboard' ? classes.railNavItemActive : ''}`}
            onClick={() => setActiveTab('dashboard')}
            title="Dashboard Overview"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </button>

          {/* Attendance & Shift */}
          <button
            type="button"
            className={`${classes.railNavItem} ${activeTab === 'attendance' ? classes.railNavItemActive : ''}`}
            onClick={() => setActiveTab('attendance')}
            title="Smart Attendance"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>

          {/* Leaves */}
          <button
            type="button"
            className={`${classes.railNavItem} ${activeTab === 'leaves' ? classes.railNavItemActive : ''}`}
            onClick={() => setActiveTab('leaves')}
            title="Leave Management"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>

          {/* Company Town Square / Feed */}
          <button
            type="button"
            className={`${classes.railNavItem} ${activeTab === 'feed' ? classes.railNavItemActive : ''}`}
            onClick={() => setActiveTab('feed')}
            title="Town Square Feed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>

          {/* Asset Audit */}
          <button
            type="button"
            className={`${classes.railNavItem} ${activeTab === 'assets' ? classes.railNavItemActive : ''}`}
            onClick={() => setActiveTab('assets')}
            title="Asset Audit"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </button>

          <div className={classes.railDivider} />

          {/* Org Tree */}
          <button type="button" className={classes.railNavItem} title="Organization Hierarchy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <rect x="3" y="17" width="6" height="4" rx="1" />
              <rect x="15" y="17" width="6" height="4" rx="1" />
              <path d="M12 7v5m0 0H6v5m6-5h6v5" />
            </svg>
          </button>
        </aside>

        {/* CENTER STAGE CANVAS */}
        <main className={classes.centerStage}>
          {/* Greeting Banner */}
          <div className={classes.greetingBanner}>
            <div>
              <h2 className={classes.greetingTitle}>
                Good morning, Alex
              </h2>
              <p className={classes.greetingSub}>
                HQ Engineering · Senior Staff Engineer · Shift: 10:00 AM – 07:00 PM
              </p>
            </div>
            <div className={classes.locationPill}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Hybrid Mode (NY Office · Fl 4)</span>
            </div>
          </div>

          {/* 3 Metrics Cards Grid */}
          <div className={classes.metricsGrid}>
            {/* Card 1: Today's Shift & Live Clock */}
            <div className={classes.metricCard}>
              <div className={classes.metricCardHeader}>
                <span className={classes.metricLabel}>Today&apos;s Active Time</span>
                <div className={classes.metricIconWrap}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              </div>
              <div className={classes.metricValue}>
                {isClockedIn ? formatTimer(timerSeconds) : 'Clocked Out'}
              </div>
              <div className={classes.progressBarBg}>
                <div className={classes.progressBarFill} style={{ width: isClockedIn ? '58%' : '0%' }} />
              </div>
              <div className={classes.metricFooter}>
                <span>Punch: 09:58 AM (Biometric)</span>
                <span style={{ color: '#0072C4', fontWeight: 700 }}>58% Shift Done</span>
              </div>
            </div>

            {/* Card 2: Leave Balances */}
            <div className={classes.metricCard}>
              <div className={classes.metricCardHeader}>
                <span className={classes.metricLabel}>Leave Balances</span>
                <div className={classes.metricIconWrapGreen}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
              </div>
              <div className={classes.leaveBalanceRow}>
                <div className={classes.leaveBalanceItem}>
                  <div className={classes.leaveBalanceNum}>06</div>
                  <div className={classes.leaveBalanceType}>Casual (CL)</div>
                </div>
                <div className={classes.leaveBalanceItem}>
                  <div className={classes.leaveBalanceNum}>08</div>
                  <div className={classes.leaveBalanceType}>Sick (SL)</div>
                </div>
                <div className={classes.leaveBalanceItem}>
                  <div className={classes.leaveBalanceNum}>12</div>
                  <div className={classes.leaveBalanceType}>Vacation (VL)</div>
                </div>
              </div>
              <div className={classes.metricFooter}>
                <span>Standard Tier 2 Plan</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>26 Total Days</span>
              </div>
            </div>

            {/* Card 3: Monitored Physical Assets */}
            <div className={classes.metricCard}>
              <div className={classes.metricCardHeader}>
                <span className={classes.metricLabel}>Assigned Assets</span>
                <div className={classes.metricIconWrapAmber}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', fontFamily: 'monospace' }}>
                2 Devices
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                <span style={{ fontSize: '0.68rem', backgroundColor: '#F1F5F9', padding: '2px 6px', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>
                  MacBook Pro 16&quot;
                </span>
                <span style={{ fontSize: '0.68rem', backgroundColor: '#F1F5F9', padding: '2px 6px', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>
                  iPhone 15 Pro
                </span>
              </div>
              <div className={classes.metricFooter}>
                <span style={{ color: '#10B981', fontWeight: 700 }}>Audit Verified</span>
                <span>Next Audit: 45 Days</span>
              </div>
            </div>
          </div>

          {/* Culture / Town Square Social Feed */}
          <div className={classes.socialSection}>
            <div className={classes.socialHeader}>
              <div className={classes.socialTitle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Weblings Town Square</span>
              </div>
              <span className={classes.pinnedBadge}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 3 }}>
                  <line x1="12" y1="17" x2="12" y2="22" />
                  <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
                </svg>
                Pinned Announcement
              </span>
            </div>

            {/* Broadcast Announcement */}
            <div className={classes.announcementCard}>
              <div className={classes.announcementIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </div>
              <div className={classes.announcementBody}>
                <div className={classes.announcementHeadline}>
                  Quarterly All-Hands &amp; Product Keynote · Friday 3:00 PM EST
                </div>
                <div className={classes.announcementSnippet}>
                  Join us on Weblings Connect for the live rollout of E-Office mobile and our cross-app search indexing engine. Q&amp;A submissions are now open.
                </div>
              </div>
            </div>

            {/* Interactive Pulse Poll */}
            <div className={classes.pollBox}>
              <div className={classes.pollQuestion}>
                <span>Pulse Poll: What should be the primary focus for the upcoming Hackathon?</span>
                <span className={classes.pollMeta}>{totalVotes} votes cast</span>
              </div>
              <div className={classes.pollOptions}>
                <button
                  type="button"
                  className={`${classes.pollOptionBtn} ${votedOption === 1 ? classes.pollOptionBtnActive : ''}`}
                  onClick={() => handleVote(1)}
                >
                  <div className={classes.pollPctBar} style={{ width: `${pct1}%` }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>AI-Powered Workflow Automations</span>
                  <span style={{ position: 'relative', zIndex: 1, fontWeight: 700 }}>{pct1}%</span>
                </button>
                <button
                  type="button"
                  className={`${classes.pollOptionBtn} ${votedOption === 2 ? classes.pollOptionBtnActive : ''}`}
                  onClick={() => handleVote(2)}
                >
                  <div className={classes.pollPctBar} style={{ width: `${pct2}%` }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>High-Velocity Offline Sync for Mobile</span>
                  <span style={{ position: 'relative', zIndex: 1, fontWeight: 700 }}>{pct2}%</span>
                </button>
              </div>
            </div>

            {/* Public Peer Praise Card */}
            <div className={classes.praiseBox}>
              <div className={classes.praiseLeft}>
                <div className={classes.praiseAvatar}>SJ</div>
                <div className={classes.praiseText}>
                  <strong>Sarah Jenkins</strong> praised <strong>Alex Johnson</strong> for zero-downtime database migration!
                </div>
              </div>
              <button
                type="button"
                className={classes.praiseBtn}
                onClick={handleKudos}
                title="Send Kudos"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>Kudos</span>
                <span>{kudosCount}</span>
              </button>
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR PANEL: TEAM VISIBILITY & APPROVALS */}
        <aside className={classes.rightSidebar}>
          {/* Section 1: Team Leave Visibility (Who's Out) */}
          <div className={classes.sidebarSection}>
            <div className={classes.sidebarHeader}>
              <span>Who&apos;s Out Today</span>
              <span className={classes.sidebarCountBadge}>2 Away</span>
            </div>

            <div className={classes.absenceItem}>
              <div className={classes.absenceLeft}>
                <div className={classes.absenceAvatar}>ER</div>
                <div>
                  <div className={classes.absenceName}>Elena Rostova</div>
                  <div className={classes.absenceType}>Returns Tomorrow</div>
                </div>
              </div>
              <span className={`${classes.absenceBadge} ${classes.badgeSick}`}>Sick Leave</span>
            </div>

            <div className={classes.absenceItem}>
              <div className={classes.absenceLeft}>
                <div className={classes.absenceAvatar}>MV</div>
                <div>
                  <div className={classes.absenceName}>Marcus Vance</div>
                  <div className={classes.absenceType}>Oct 12 – Oct 16</div>
                </div>
              </div>
              <span className={`${classes.absenceBadge} ${classes.badgeVacation}`}>Vacation</span>
            </div>
          </div>

          {/* Section 2: Manager Action Approval Card */}
          <div className={classes.sidebarSection}>
            <div className={classes.sidebarHeader}>
              <span>Pending Action</span>
              <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700 }}>1 Review</span>
            </div>

            <div className={classes.approvalCard}>
              <div className={classes.approvalHeader}>
                <span>Leave Request #1084</span>
                <span>1 Day</span>
              </div>
              <div className={classes.approvalBody}>
                <strong>David Kim</strong> (Frontend Team) requested Casual Leave for personal appointment on Monday.
              </div>

              {approvalStatus === 'pending' ? (
                <div className={classes.approvalActions}>
                  <button
                    type="button"
                    className={classes.approveBtn}
                    onClick={() => setApprovalStatus('approved')}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    1-Click Approve
                  </button>
                  <button
                    type="button"
                    className={classes.declineBtn}
                    onClick={() => setApprovalStatus('declined')}
                  >
                    Decline
                  </button>
                </div>
              ) : approvalStatus === 'approved' ? (
                <div className={classes.approvedStatusNotice}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Request Approved &amp; Calendar Synced
                </div>
              ) : (
                <div style={{ padding: '6px 8px', backgroundColor: '#FEF2F2', border: '1px solid #FECDD3', borderRadius: '6px', color: '#DC2626', fontSize: '0.68rem', fontWeight: 700, textAlign: 'center' }}>
                  Request Declined
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Verified Assets Mini Summary */}
          <div className={classes.sidebarSection}>
            <div className={classes.sidebarHeader}>
              <span>Active Hardware Audit</span>
              <span style={{ fontSize: '0.65rem', color: '#0072C4', fontWeight: 700 }}>2/2 Pass</span>
            </div>

            <div className={classes.assetSummaryBox}>
              <div className={classes.assetInfo}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <div>
                  <div className={classes.assetNameText}>MacBook Pro 16&quot;</div>
                  <div className={classes.assetSerialText}>SN: MBP-84920-X</div>
                </div>
              </div>
              <span className={classes.assetVerifiedBadge}>Verified</span>
            </div>

            <div className={classes.assetSummaryBox}>
              <div className={classes.assetInfo}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                <div>
                  <div className={classes.assetNameText}>iPhone 15 Pro</div>
                  <div className={classes.assetSerialText}>SN: IP-39211-M</div>
                </div>
              </div>
              <span className={classes.assetVerifiedBadge}>Verified</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EofficeMockup;
