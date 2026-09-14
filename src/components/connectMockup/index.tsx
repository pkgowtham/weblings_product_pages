'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import { WeblogoIcon } from '../../assets/icons_component';

interface Participant {
  id: string;
  name: string;
  initials: string;
  isMuted: boolean;
  isHost?: boolean;
  isPinned?: boolean;
  topPct: string;
  leftPct: string;
}

// 48 radiating bars in a circle with varied acoustic heights
const CircularSoundwave: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const bars = [
    14, 20, 16, 24, 30, 22, 17, 26, 32, 28, 19, 15, 22, 27, 31, 24,
    17, 23, 29, 34, 27, 20, 15, 25, 30, 22, 16, 24, 28, 33, 26, 19,
    14, 21, 27, 31, 23, 17, 24, 29, 32, 26, 18, 14, 22, 28, 30, 23,
  ];
  const innerRadius = 38;
  const cx = 75;
  const cy = 75;

  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {bars.map((height, i) => {
        const angle = (i * 360) / bars.length;
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + innerRadius * Math.cos(rad);
        const y1 = cy + innerRadius * Math.sin(rad);
        const dynamicLen = active ? height * 0.8 : height * 0.35;
        const x2 = cx + (innerRadius + dynamicLen) * Math.cos(rad);
        const y2 = cy + (innerRadius + dynamicLen) * Math.sin(rad);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1E293B"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity={0.88}
          />
        );
      })}
    </svg>
  );
};

// Pure Vector Microphone Icon
const MicSvg: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 14,
  color = 'currentColor',
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

// Pure Vector Microphone-Off (Muted with diagonal slash) Icon
const MicOffSvg: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 14,
  color = 'currentColor',
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    <path d="M5 10v2a7 7 0 0 0 12 5" />
    <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

// Pure Vector Pushpin Icon
const PinSvg: React.FC<{ size?: number; color?: string }> = ({ size = 11, color = '#FFFFFF' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
  </svg>
);

// Pure Vector Video Camera Icon
const VideoSvg: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

// Pure Vector Video Camera-Off Icon
const VideoOffSvg: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M10.66 5H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
    <path d="M16 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1" />
  </svg>
);

export const ConnectMockup: React.FC = () => {
  const classes = useStyles();


  // Participants in the meeting
  const [participants, setParticipants] = useState<Participant[]>([
    { id: 'speaker-1', name: 'Alex Smith', initials: 'A', isMuted: false, isHost: true, topPct: '50%', leftPct: '50%' },
    { id: 'p-1', name: 'Elena Rostova', initials: 'A', isMuted: true, topPct: '12%', leftPct: '50%' },
    { id: 'p-2', name: 'Marcus Vance', initials: 'A', isMuted: true, topPct: '22%', leftPct: '74%' },
    { id: 'p-3', name: 'Sarah Jenkins', initials: 'A', isMuted: true, topPct: '50%', leftPct: '84%' },
    { id: 'p-4', name: 'David Kim', initials: 'A', isMuted: true, isPinned: true, topPct: '76%', leftPct: '74%' },
    { id: 'p-5', name: 'Priyah Patel', initials: 'A', isMuted: true, topPct: '86%', leftPct: '50%' },
    { id: 'p-6', name: 'Michael Chang', initials: 'A', isMuted: true, topPct: '76%', leftPct: '26%' },
    { id: 'p-7', name: 'Jessica Taylor', initials: 'A', isMuted: true, topPct: '50%', leftPct: '16%' },
    { id: 'p-8', name: 'Liam O\'Connor', initials: 'A', isMuted: true, topPct: '22%', leftPct: '26%' },
  ]);

  // Interactive meeting controls
  const [isMicMuted, setIsMicMuted] = useState<boolean>(false);
  const [isCamOff, setIsCamOff] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [isSharingScreen, setIsSharingScreen] = useState<boolean>(false);
  const [showRightSidebar, setShowRightSidebar] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inviteInput, setInviteInput] = useState<string>('');
  const [activeNavTab, setActiveNavTab] = useState<string>('chat');

  // Active speaker details (Alex Smith is the permanent host/speaker at the center)
  const activeSpeaker = participants.find((p) => p.id === 'speaker-1') || participants[0];

  // Satellite participants (arranged in the radial circle around Alex)
  const satellites = participants.filter((p) => p.id !== 'speaker-1');

  // Filtered participants in sidebar
  const filteredParticipants = participants.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleMute = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isMuted: !p.isMuted } : p))
    );
  };

  const handleTogglePin = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPinned: !p.isPinned } : p))
    );
  };

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteInput.trim()) return;

    const newPerson: Participant = {
      id: `p-${Date.now()}`,
      name: inviteInput.trim(),
      initials: inviteInput.trim().charAt(0).toUpperCase() || 'A',
      isMuted: true,
      topPct: `${Math.floor(Math.random() * 60 + 20)}%`,
      leftPct: `${Math.floor(Math.random() * 60 + 20)}%`,
    };

    setParticipants((prev) => [...prev, newPerson]);
    setInviteInput('');
  };

  return (
    <div className={classes.mockupFrame}>
      {/* ─────────────────────────────────────────────────────────────
          1. TOP APPLICATION BAR
          ───────────────────────────────────────────────────────────── */}
      <header className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <WeblogoIcon width={30} height={30} />
        </div>

        <div className={classes.topBarRight}>
          <button
            type="button"
            className={classes.bellBtn}
            title="Notifications"
            onClick={() => {}}
          >
            {/* Bell SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className={classes.bellDot} />
          </button>

          <div className={classes.topProfileAvatar} title="Profile (Alex Smith)">
            A
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. WORKSPACE BODY (LEFT RAIL + CENTER STAGE + RIGHT SIDEBAR)
          ───────────────────────────────────────────────────────────── */}
      <div className={classes.mainBody}>
        {/* LEFT ICON RAIL */}
        <aside className={classes.leftRail}>
          <button type="button" className={classes.railChevronBtn} title="Expand menu">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className={classes.railAvatar} title="Workspace Owner">
            A
          </div>

          <div className={classes.railDivider} />

          <nav className={classes.railNavList}>
            {/* Briefcase */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'org' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('org')}
              title="Organization"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>

            {/* Megaphone / Announcements */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'broadcast' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('broadcast')}
              title="Broadcasts"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 11 18-5v12L3 13v-2z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </button>

            {/* Presentations / Boards */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'board' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('board')}
              title="Whiteboards"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </button>

            {/* Mail */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'mail' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('mail')}
              title="Weblings Mail"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>

            {/* Chat Bubble (ACTIVE WITH BLUE BAR) */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'chat' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('chat')}
              title="Weblings Connect (Active)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            {/* Calendar */}
            <button
              type="button"
              className={`${classes.railNavItem} ${activeNavTab === 'calendar' ? classes.railNavItemActive : ''}`}
              onClick={() => setActiveNavTab('calendar')}
              title="Calendar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </button>
          </nav>

          <div className={classes.railBottomGroup}>
            {/* Gear / Settings */}
            <button
              type="button"
              className={classes.railNavItem}
              onClick={() => {}}
              title="Settings"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>

            {/* Help Question mark */}
            <button
              type="button"
              className={classes.railNavItem}
              onClick={() => {}}
              title="Help"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </button>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────────────────────
            CENTER MEETING STAGE
            ───────────────────────────────────────────────────────────── */}
        <main className={classes.centerStageWrapper}>
          <div className={classes.meetingCanvas}>
            {/* Screen Share Overlay (Simulated Toggle) */}
            {isSharingScreen && (
              <div className={classes.screenShareOverlay}>
                <span className={classes.screenShareBadge}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#34D399' }} />
                  You are sharing your screen
                </span>
                <div className={classes.screenShareTitle}>
                  Client-Scope-Spec-v2.pdf (14 Pages)
                </div>
                <div className={classes.screenShareSub}>
                  Live 60fps low-latency simulcast streaming to all 8 participants.
                </div>
                <button
                  type="button"
                  className={classes.stopShareBtn}
                  onClick={() => setIsSharingScreen(false)}
                >
                  Stop Sharing Screen
                </button>
              </div>
            )}

            {/* ACTIVE SPEAKER AT THE CENTER */}
            <div className={classes.centerSpeakerHub}>
              <div className={classes.centerAvatarContainer}>
                {/* Radiating voice soundwave frequency visualizer */}
                <div className={classes.circularSoundwaveSvg}>
                  <CircularSoundwave active={!activeSpeaker.isMuted} />
                </div>

                <div
                  className={classes.centerAvatarCircle}
                  title={`Active Speaker: ${activeSpeaker.name}`}
                  onClick={() => handleToggleMute(activeSpeaker.id)}
                >
                  {activeSpeaker.initials}
                </div>
              </div>

              <div className={classes.centerSpeakerNameTag}>
                <span>{activeSpeaker.name}</span>
                {activeSpeaker.isMuted ? (
                  <MicOffSvg size={13} color="#E11D48" />
                ) : (
                  <MicSvg size={13} color="#0F172A" />
                )}
              </div>
            </div>

            {/* SATELLITE PARTICIPANTS ARRANGED IN RADIAL CIRCLE */}
            {satellites.map((participant) => (
              <div
                key={participant.id}
                className={classes.satelliteNode}
                style={{ top: participant.topPct, left: participant.leftPct }}
                onClick={(e) => handleTogglePin(participant.id, e)}
                title={`Click to ${participant.isPinned ? 'unpin' : 'pin'} ${participant.name}`}
              >
                {participant.isPinned ? (
                  /* Special Pinned Split Avatar (as seen on bottom-right participant in screenshot) */
                  <div className={classes.pinnedSplitAvatar}>
                    <span>{participant.initials}</span>
                    <div className={classes.pinnedBottomHalf}>
                      <PinSvg size={10} color="#FFFFFF" />
                    </div>
                  </div>
                ) : (
                  <div className={classes.satelliteAvatar}>
                    {participant.initials}
                  </div>
                )}

                <div className={classes.satelliteLabelRow}>
                  <span>{participant.name.split(' ')[0]}</span>
                  {participant.isMuted ? (
                    <MicOffSvg size={12} color="#64748B" />
                  ) : (
                    <MicSvg size={12} color="#0072C4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* ─────────────────────────────────────────────────────────────
            3. RIGHT SIDEBAR: PARTICIPANTS PANEL
            ───────────────────────────────────────────────────────────── */}
        {showRightSidebar && (
          <aside className={classes.rightSidebar}>
            {/* Sidebar Header */}
            <div className={classes.sidebarHeader}>
              <h3 className={classes.sidebarTitle}>Participants</h3>
              <button
                type="button"
                className={classes.closeBtn}
                onClick={() => setShowRightSidebar(false)}
                title="Close sidebar"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={classes.sidebarBody}>
              {/* Add / Invite Participant Form */}
              <form onSubmit={handleAddParticipant} className={classes.inviteRow}>
                {/* User Plus SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                <input
                  type="text"
                  className={classes.inviteInput}
                  placeholder="Invite by name or email..."
                  value={inviteInput}
                  onChange={(e) => setInviteInput(e.target.value)}
                />
              </form>

              {/* Accordion: In meeting */}
              <button
                type="button"
                className={classes.accordionToggle}
                onClick={() => {}}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span>In meeting ({participants.length})</span>
              </button>

              {/* Search Box */}
              <div className={classes.searchBox}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  className={classes.searchInput}
                  placeholder="Search participants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', padding: 0 }}
                    onClick={() => setSearchQuery('')}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Peoples section header */}
              <div className={classes.sectionSubheading}>
                Peoples
              </div>

              {/* List of participants */}
              <div className={classes.peoplesList}>
                {filteredParticipants.map((p) => (
                  <div key={p.id} className={classes.peopleItem}>
                    <div className={classes.peopleLeft}>
                      <div className={classes.peopleAvatar}>{p.initials}</div>
                      <span className={classes.peopleName}>
                        {p.name} {p.isHost && ' (Host)'}
                      </span>
                    </div>

                    <div className={classes.peopleActions}>
                      <button
                        type="button"
                        className={classes.actionMicBtn}
                        onClick={(e) => handleToggleMute(p.id, e)}
                        title={p.isMuted ? "Unmute participant" : "Mute participant"}
                      >
                        {p.isMuted ? (
                          <MicOffSvg size={15} color="#64748B" />
                        ) : (
                          <MicSvg size={15} color="#0F172A" />
                        )}
                      </button>

                      {!p.isHost && (
                        <button
                          type="button"
                          className={classes.actionDotsBtn}
                          onClick={(e) => handleTogglePin(p.id, e)}
                          title={p.isPinned ? "Unpin participant" : "Pin participant"}
                        >
                          <PinSvg size={13} color={p.isPinned ? "#0072C4" : "#94A3B8"} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. BOTTOM CONTROL DOCK / TOOLBAR
          ───────────────────────────────────────────────────────────── */}
      <footer className={classes.bottomDock}>
        {/* Left info */}
        <div className={classes.dockLeft}>
          <div className={classes.meetingTitleRow}>
            <span className={classes.meetingTitleText}>
              Meeting name
            </span>
            <div
              className={classes.recordingBadge}
              onClick={() => setIsRecording(!isRecording)}
              title="Click to toggle recording state"
            >
              {isRecording ? (
                <>
                  <span className={classes.recordingDotPulsing} />
                  <span>Rec</span>
                </>
              ) : (
                <span style={{ color: '#94A3B8' }}>⏸ Paused</span>
              )}
            </div>
          </div>
        </div>

        {/* Center action pills */}
        <div className={classes.dockCenterGroup}>
          {/* Microphone with Dropdown Caret */}
          <button
            type="button"
            className={`${classes.controlPillBtn} ${isMicMuted ? classes.controlPillMuted : classes.controlPillBlue}`}
            onClick={() => setIsMicMuted(!isMicMuted)}
            title={isMicMuted ? "Unmute microphone" : "Mute microphone"}
          >
            {isMicMuted ? (
              <MicOffSvg size={16} color="currentColor" />
            ) : (
              <MicSvg size={16} color="currentColor" />
            )}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>

          {/* Camera with Dropdown Caret */}
          <button
            type="button"
            className={`${classes.controlPillBtn} ${isCamOff ? classes.controlPillMuted : classes.controlPillBlue}`}
            onClick={() => setIsCamOff(!isCamOff)}
            title={isCamOff ? "Turn on camera" : "Turn off camera"}
          >
            {isCamOff ? (
              <VideoOffSvg size={16} color="currentColor" />
            ) : (
              <VideoSvg size={16} color="currentColor" />
            )}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>

          {/* Screen Recording Button (red bullseye inside white square) */}
          <button
            type="button"
            className={classes.recordControlBtn}
            onClick={() => setIsRecording(!isRecording)}
            title="Toggle Cloud Recording"
          >
            <div className={classes.recordDotInner} />
          </button>

          {/* Screen Share Button */}
          <button
            type="button"
            className={classes.controlPillBtn}
            style={isSharingScreen ? { backgroundColor: '#EBF5FF', color: '#0072C4', borderColor: '#0072C4' } : {}}
            onClick={() => setIsSharingScreen(!isSharingScreen)}
            title={isSharingScreen ? "Stop screen sharing" : "Share your screen"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>

          {/* End Call Button (Red Pill) */}
          <button
            type="button"
            className={classes.endCallBtn}
            onClick={() => {}}
            title="Leave Meeting"
          >
            {/* Phone Off SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
              <line x1="22" y1="2" x2="2" y2="22" />
            </svg>
          </button>

          {/* Fullscreen Expand Button */}
          <button
            type="button"
            className={classes.controlPillBtn}
            onClick={() => {}}
            title="Fullscreen"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>

        {/* Right utility buttons */}
        <div className={classes.dockRightGroup}>
          {/* Info Circle */}
          <button
            type="button"
            className={classes.dockUtilBtn}
            onClick={() => {}}
            title="Meeting Details"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>

          {/* Chat Bubble */}
          <button
            type="button"
            className={classes.dockUtilBtn}
            onClick={() => {}}
            title="In-meeting Chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Participants Toggle with Red Badge '20' */}
          <button
            type="button"
            className={classes.dockUtilBtn}
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            title={showRightSidebar ? "Hide participants" : "Show participants"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className={classes.dockBadgeCount}>20</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ConnectMockup;
