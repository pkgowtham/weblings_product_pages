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
  variant?: "dashboard" | "attendance" | "light" | "dark" | "mail" | "connect" | "stream" | "streamline" | "drive";
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

// 48 radiating acoustic frequency bars in a circle (matching web app)
const CircularSoundwaveMobile: React.FC<{ active?: boolean; className?: string }> = ({
  active = true,
  className,
}) => {
  const bars = [
    14, 20, 16, 24, 30, 22, 17, 26, 32, 28, 19, 15, 22, 27, 31, 24,
    17, 23, 29, 34, 27, 20, 15, 25, 30, 22, 16, 24, 28, 33, 26, 19,
    14, 21, 27, 31, 23, 17, 24, 29, 32, 26, 18, 14, 22, 28, 30, 23,
  ];
  const innerRadius = 26;
  const cx = 55;
  const cy = 55;

  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" className={className}>
      {bars.map((height, i) => {
        const angle = (i * 360) / bars.length;
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + innerRadius * Math.cos(rad);
        const y1 = cy + innerRadius * Math.sin(rad);
        const dynamicLen = active ? height * 0.48 : height * 0.20;
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
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity={0.88}
          />
        );
      })}
    </svg>
  );
};

const MicSvgMobile: React.FC<{ size?: number; color?: string }> = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

const MicOffSvgMobile: React.FC<{ size?: number; color?: string }> = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    <path d="M5 10v2a7 7 0 0 0 12 5" />
    <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

const PinSvgMobile: React.FC<{ size?: number; color?: string }> = ({ size = 8, color = "#FFFFFF" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
  </svg>
);

const VideoSvgMobile: React.FC<{ size?: number; color?: string }> = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const VideoOffSvgMobile: React.FC<{ size?: number; color?: string }> = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M10.66 5H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
    <path d="M16 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1" />
  </svg>
);

const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant = "dashboard" }) => {
  const classes = useStyles();
  const isAttendance = variant === "attendance" || variant === "dark";
  const isMail = variant === "mail";
  const isConnect = variant === "connect";
  const isStream = variant === "stream" || variant === "streamline";
  const isDrive = variant === "drive";

  // Interactive local states for high delight
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(
    isConnect ? "connect" : isStream ? "stream" : isDrive ? "drive" : isMail ? "mail" : isAttendance ? "eoffice" : "dash"
  );
  const [activeDay, setActiveDay] = useState<number>(1); // Monday selected
  const [selectedEmail, setSelectedEmail] = useState<number>(0);
  const [isMicOn, setIsMicOn] = useState<boolean>(true);
  const [isVideoOn, setIsVideoOn] = useState<boolean>(false);

  // Mobile Connect participants state (swappable active speaker, matching web)
  const [mobileSpeakerId, setMobileSpeakerId] = useState<string>("speaker-1");
  const [mobileParticipants, setMobileParticipants] = useState([
    { id: "speaker-1", name: "Alex Smith", initials: "A", topPct: "50%", leftPct: "50%" },
    { id: "p-1", name: "Elena Rostova", initials: "A", topPct: "13%", leftPct: "50%" },
    { id: "p-2", name: "Marcus Vance", initials: "A", topPct: "23%", leftPct: "78%" },
    { id: "p-3", name: "Sarah Jenkins", initials: "A", topPct: "50%", leftPct: "85%" },
    { id: "p-4", name: "David Kim", initials: "A", isPinned: true, topPct: "77%", leftPct: "78%" },
    { id: "p-5", name: "Priyah Patel", initials: "A", topPct: "87%", leftPct: "50%" },
    { id: "p-6", name: "Michael Chang", initials: "A", topPct: "77%", leftPct: "22%" },
    { id: "p-7", name: "Jessica Taylor", initials: "A", topPct: "50%", leftPct: "15%" },
    { id: "p-8", name: "Liam O'Connor", initials: "A", topPct: "23%", leftPct: "22%" },
  ]);

  const activeMobileSpeaker = mobileParticipants.find((p) => p.id === mobileSpeakerId) || mobileParticipants[0];
  const mobileSatellites = mobileParticipants.filter((p) => p.id !== mobileSpeakerId);

  return (
    <div className={classes.frame}>
      {/* Physical Hardware Buttons */}
      <div className={classes.volumeButtonTop} />
      <div className={classes.volumeButtonBottom} />
      <div className={classes.powerButton} />

      {/* Smartphone Screen */}
      <div className={`${classes.screen} ${isConnect ? classes.screenWhite : ''}`}>
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

        {isConnect ? (
          /* ─────────────────────────────────────────────────────────────
             SCREEN: WEBLINGS CONNECT CALL SCREEN (Inherited from Desktop)
             ───────────────────────────────────────────────────────────── */
          <div className={classes.connectScreen}>
            {/* Top Navigation Header matching Web App */}
            <div className={classes.connectHeader}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <WeblogoIcon width="16" height="15" />
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A" }}>Weblings Connect</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: "#0072C4", backgroundColor: "#EBF5FF", padding: "2px 6px", borderRadius: 10 }}>
                  HD 4K
                </span>
                <div className={classes.userAvatarCircle} style={{ width: 22, height: 22, fontSize: 8.5, fontWeight: 700 }}>
                  <span>AS</span>
                </div>
              </div>
            </div>

            {/* Main Stage with Rounded Blue Border matching Web Canvas */}
            <div className={classes.connectMainStage}>
              {/* 8 Satellite Participants arranged radially */}
              <div className={classes.connectSatellitesRow}>
                {mobileSatellites.map((participant) => (
                  <div
                    key={participant.id}
                    className={classes.connectSatNode}
                    style={{ top: participant.topPct, left: participant.leftPct }}
                    onClick={() => setMobileSpeakerId(participant.id)}
                    title={`Click to switch active speaker to ${participant.name}`}
                  >
                    {participant.isPinned ? (
                      <div className={classes.connectPinnedSplitAvatar}>
                        <span>{participant.initials}</span>
                        <div className={classes.connectPinnedBottomHalf}>
                          <PinSvgMobile size={7.5} color="#FFFFFF" />
                        </div>
                      </div>
                    ) : (
                      <div className={classes.connectSatAvatar}>
                        {participant.initials}
                      </div>
                    )}
                    <div className={classes.connectSatLabelRow}>
                      <span>{participant.name.split(" ")[0]}</span>
                      <MicOffSvgMobile size={7.5} color="#64748B" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Active Speaker with 48-bar Radiating Soundwave */}
              <div className={classes.connectCenterSpeaker}>
                <div className={classes.connectCenterAvatarWrap}>
                  <CircularSoundwaveMobile
                    active={isMicOn}
                    className={classes.mobileSoundwaveSvg}
                  />
                  <div
                    className={classes.connectCenterAvatar}
                    onClick={() => setIsMicOn(!isMicOn)}
                    title="Click to toggle microphone"
                  >
                    {activeMobileSpeaker.initials}
                  </div>
                </div>
                <div className={classes.connectCenterName}>
                  <span>{activeMobileSpeaker.name}</span>
                  {isMicOn ? (
                    <MicSvgMobile size={10} color="#0F172A" />
                  ) : (
                    <MicOffSvgMobile size={10} color="#E11D48" />
                  )}
                </div>
              </div>
            </div>

            {/* Bottom In-Call Meeting Toolbar matching Web Layout */}
            <div className={classes.connectBottomDockWrapper}>
              <div className={classes.connectMeetingInfoRow}>
                <span className={classes.connectMeetingNameText}>Product Strategy Call</span>
                <div className={classes.connectStatusPill}>
                  <span className={classes.connectRecDot} />
                  <span>REC 24:18</span>
                </div>
              </div>

              {/* Action Buttons Dock */}
              <div className={classes.connectCallDock}>
                {/* Mic Pill Button */}
                <button
                  type="button"
                  className={`${classes.connectDockPillBtn} ${isMicOn ? classes.connectDockPillBlue : ''}`}
                  onClick={() => setIsMicOn(!isMicOn)}
                  title={isMicOn ? "Mute" : "Unmute"}
                >
                  {isMicOn ? (
                    <MicSvgMobile size={11} color="#FFFFFF" />
                  ) : (
                    <MicOffSvgMobile size={11} color="#334155" />
                  )}
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>

                {/* Video Pill Button */}
                <button
                  type="button"
                  className={`${classes.connectDockPillBtn} ${isVideoOn ? classes.connectDockPillBlue : ''}`}
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  title={isVideoOn ? "Turn off camera" : "Turn on camera"}
                >
                  {isVideoOn ? (
                    <VideoSvgMobile size={11} color="#FFFFFF" />
                  ) : (
                    <VideoOffSvgMobile size={11} color="#334155" />
                  )}
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>

                {/* Record Button */}
                <button
                  type="button"
                  className={classes.connectDockIconBtn}
                  title="Record Meeting"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#E11D48" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4.5" fill="#E11D48" />
                  </svg>
                </button>

                {/* Screen Share Button */}
                <button
                  type="button"
                  className={classes.connectDockIconBtn}
                  title="Share Screen"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                    <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </button>

                {/* Red End Call Pill Button */}
                <button
                  type="button"
                  className={classes.connectEndCallBtn}
                  title="End Call"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.8 19.8 0 0 1-3.12-8.68A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                    <line x1="22" y1="2" x2="2" y2="22" stroke="#FFFFFF" strokeWidth={2.5} />
                  </svg>
                </button>

                {/* Participants Badge Button */}
                <button
                  type="button"
                  className={classes.connectDockIconBtn}
                  style={{ position: 'relative' }}
                  title="Participants"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <span style={{ position: 'absolute', top: -3, right: -3, backgroundColor: '#E11D48', color: '#FFFFFF', fontSize: 6.5, fontWeight: 700, borderRadius: 5, padding: '1px 3px' }}>20</span>
                </button>
              </div>
            </div>

            {/* iOS Home Indicator cleanly placed inside connectScreen */}
            <div className={classes.homeIndicator} style={{ alignSelf: 'center', marginTop: 4 }} />
          </div>
        ) : (
          <>
            {/* Scrollable Screen Content */}
            <div className={classes.screenContent}>
              {/* ─────────────────────────────────────────────────────────────
                 SCREEN: WEBLINGS ENTERPRISE MAIL INBOX
                 ───────────────────────────────────────────────────────────── */}
              {isDrive ? (
                <>
                  {/* App Bar */}
                  <div className={classes.mailAppHeader}>
                    <div className={classes.mailHeaderTitleRow}>
                      <h3 className={classes.mailHeaderTitle}>Drive Vault</h3>
                      <span style={{ fontSize: 9.5, fontWeight: 700, backgroundColor: "#EBF5FF", color: "#0072C4", padding: "2px 8px", borderRadius: 10 }}>
                        42.8 / 100 GB
                      </span>
                    </div>
                    <div className={classes.mailUserAvatar} title="Alex Smith">
                      <span>AS</span>
                    </div>
                  </div>

                  {/* Storage Meter Card */}
                  <div style={{ backgroundColor: "#FFFFFF", borderRadius: 12, border: "1px solid #E2E8F0", padding: "10px 12px", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#0F172A" }}>Storage Quota</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#0072C4" }}>42.8%</span>
                    </div>
                    <div style={{ width: "100%", height: 6, backgroundColor: "#F1F5F9", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: "42.8%", height: "100%", backgroundColor: "#0072C4", borderRadius: 3 }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 8.5, color: "#64748B" }}>
                      <span>42,800 Files Synced</span>
                      <span>57.2 GB Available</span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className={classes.mailSearchBar}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span>Search documents, PDFs, contracts...</span>
                  </div>

                  {/* Category Pills */}
                  <div style={{ display: "flex", gap: 5, overflowX: "auto", paddingBottom: 2 }}>
                    <button style={{ backgroundColor: "#0072C4", color: "#FFFFFF", border: "none", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                      All Files (38)
                    </button>
                    <button style={{ backgroundColor: "#FFFFFF", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                      Expiring Links (2)
                    </button>
                    <button style={{ backgroundColor: "#FFFFFF", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                      AI Indexed (14)
                    </button>
                  </div>

                  {/* File List Cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {/* Card 1: Master MSA PDF */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#EF4444", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>PDF</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Master_MSA_2026.pdf</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#9333EA", backgroundColor: "#FAF5FF", padding: "1px 5px", borderRadius: 4 }}>Ask AI ⚡</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#64748B" }}>
                        <span>Legal • 4.2 MB • Updated 2h ago</span>
                        <span style={{ color: "#16A34A", fontWeight: 600 }}>v3.4 Signed</span>
                      </div>
                    </div>

                    {/* Card 2: Technical Specs */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#0072C4", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>DOC</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Q3_Technical_Specs.docx</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#9333EA", backgroundColor: "#FAF5FF", padding: "1px 5px", borderRadius: 4 }}>Ask AI ⚡</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#64748B" }}>
                        <span>Engineering • 12.8 MB • 5h ago</span>
                        <span style={{ color: "#0072C4", fontWeight: 600 }}>4 Contributors</span>
                      </div>
                    </div>

                    {/* Card 3: Brand Assets Zip (Expiring Link) */}
                    <div style={{ backgroundColor: "#FFFBEB", borderRadius: 10, border: "1px solid #FDE68A", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#D97706", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>ZIP</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Brand_Assets_2026.zip</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#D97706", backgroundColor: "#FEF3C7", padding: "1px 5px", borderRadius: 4 }}>11h 42m Left</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#92400E" }}>
                        <span>Marketing • 1.4 GB • Expiring Share Link</span>
                        <span style={{ fontWeight: 600 }}>Revoke Access</span>
                      </div>
                    </div>

                    {/* Card 4: Financial Audit */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#16A34A", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>XLS</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Annual_Audit_2025.xlsx</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#0072C4", backgroundColor: "#EFF6FF", padding: "1px 5px", borderRadius: 4 }}>Internal Only</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#64748B" }}>
                        <span>Finance • 8.5 MB • Yesterday</span>
                        <span style={{ color: "#64748B" }}>E-Vault Encrypted</span>
                      </div>
                    </div>

                    {/* Card 5: Product Roadmap */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#0284C7", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>KEY</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Product_Roadmap_2027.key</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#0072C4", backgroundColor: "#EFF6FF", padding: "1px 5px", borderRadius: 4 }}>Synced ✓</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#64748B" }}>
                        <span>Product • 24.1 MB • 2d ago</span>
                        <span style={{ color: "#10B981", fontWeight: 600 }}>Offline Ready</span>
                      </div>
                    </div>

                    {/* Card 6: Client NDA */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: "#EF4444", color: "#FFF", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>PDF</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>Client_NDA_Template.pdf</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#64748B", backgroundColor: "#F1F5F9", padding: "1px 5px", borderRadius: 4 }}>Shared</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#64748B" }}>
                        <span>Legal • 1.8 MB • 3d ago</span>
                        <span style={{ color: "#64748B" }}>Enterprise Vault</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : isStream ? (
                <>
                  {/* App Bar */}
                  <div className={classes.mailAppHeader}>
                    <div className={classes.mailHeaderTitleRow}>
                      <h3 className={classes.mailHeaderTitle}>Streamline</h3>
                      <span style={{ fontSize: 9.5, fontWeight: 700, backgroundColor: "#EBF5FF", color: "#0072C4", padding: "2px 8px", borderRadius: 10 }}>
                        Sprint 42
                      </span>
                    </div>
                    <div className={classes.mailUserAvatar} title="Alex Smith">
                      <span>AS</span>
                    </div>
                  </div>

                  {/* Sprint Completion Card */}
                  <div style={{ backgroundColor: "#FFFFFF", borderRadius: 12, border: "1px solid #E2E8F0", padding: "10px 12px", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#0F172A" }}>Sprint Completion</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#0072C4" }}>78%</span>
                    </div>
                    <div style={{ width: "100%", height: 6, backgroundColor: "#F1F5F9", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: "78%", height: "100%", backgroundColor: "#0072C4", borderRadius: 3 }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 8.5, color: "#64748B" }}>
                      <span>18 / 23 Tickets Closed</span>
                      <span>4 Days Left</span>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div style={{ display: "flex", gap: 5, overflowX: "auto", paddingBottom: 2 }}>
                    <button style={{ backgroundColor: "#0072C4", color: "#FFFFFF", border: "none", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 700, cursor: "pointer" }}>
                      All Tasks
                    </button>
                    <button style={{ backgroundColor: "#FFFFFF", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 600, cursor: "pointer" }}>
                      In Progress (3)
                    </button>
                    <button style={{ backgroundColor: "#FFFFFF", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 12, padding: "3px 9px", fontSize: 9, fontWeight: 600, cursor: "pointer" }}>
                      Review (2)
                    </button>
                  </div>

                  {/* Ticket Cards List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {/* Card 1: Epic */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#9333EA", color: "#FFF", fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>E</span>
                          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#64748B" }}>STR-1042</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#0072C4", backgroundColor: "#EFF6FF", padding: "1px 5px", borderRadius: 4 }}>In Progress</span>
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A" }}>Payment Gateway Webhooks</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#94A3B8" }}>
                        <span>Due Sep 18</span>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#0072C4" }}>AS</span>
                      </div>
                    </div>

                    {/* Card 2: Story */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#16A34A", color: "#FFF", fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>S</span>
                          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#64748B" }}>STR-1050</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#EA580C", backgroundColor: "#FFF7ED", padding: "1px 5px", borderRadius: 4 }}>Review</span>
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A" }}>Automated Tax Report Export</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#94A3B8" }}>
                        <span>Due Sep 20</span>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#0072C4" }}>MJ</span>
                      </div>
                    </div>

                    {/* Card 3: Bug */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#DC2626", color: "#FFF", fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>B</span>
                          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#64748B" }}>STR-1088</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#16A34A", backgroundColor: "#F0FDF4", padding: "1px 5px", borderRadius: 4 }}>Done ✓</span>
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A", textDecoration: "line-through", opacity: 0.8 }}>Fix Mongo Timeout in Checkout</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#94A3B8" }}>
                        <span>Closed Yesterday</span>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#0072C4" }}>AS</span>
                      </div>
                    </div>

                    {/* Card 4: Story */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#16A34A", color: "#FFF", fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>S</span>
                          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#64748B" }}>STR-1092</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#0072C4", backgroundColor: "#EFF6FF", padding: "1px 5px", borderRadius: 4 }}>In QA</span>
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A" }}>Webhooks Retry Worker Queue</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#94A3B8" }}>
                        <span>Due Sep 22</span>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#0072C4" }}>RK</span>
                      </div>
                    </div>

                    {/* Card 5: Task */}
                    <div style={{ backgroundColor: "#FFFFFF", borderRadius: 10, border: "1px solid #E2E8F0", padding: "8px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#0284C7", color: "#FFF", fontSize: 8, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>T</span>
                          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#64748B" }}>STR-1104</span>
                        </div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "#64748B", backgroundColor: "#F1F5F9", padding: "1px 5px", borderRadius: 4 }}>Backlog</span>
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0F172A" }}>PostgreSQL Read-Replica Sync</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, fontSize: 8, color: "#94A3B8" }}>
                        <span>Due Sep 25</span>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#0072C4" }}>AS</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : isMail ? (
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
            {isDrive ? (
              <>
                {/* Drive Tab 1: Files */}
                <div
                  className={activeTab === "drive" || activeTab === "files" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("files")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Files</span>
                </div>

                {/* Drive Tab 2: Shared */}
                <div
                  className={activeTab === "shared" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("shared")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Shared</span>
                </div>

                {/* Center FAB: Upload New File */}
                <div
                  className={classes.centerFab}
                  title="Upload Document"
                  onClick={() => setActiveTab("files")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>

                {/* Drive Tab 3: Starred */}
                <div
                  className={activeTab === "starred" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("starred")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>Starred</span>
                </div>

                {/* Drive Tab 4: Vault */}
                <div
                  className={activeTab === "vault" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("vault")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Vault</span>
                </div>
              </>
            ) : isStream ? (
              <>
                {/* Stream Tab 1: Sprint */}
                <div
                  className={activeTab === "stream" || activeTab === "sprint" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("sprint")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span>Sprint</span>
                </div>

                {/* Stream Tab 2: Board */}
                <div
                  className={activeTab === "board" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("board")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                  </svg>
                  <span>Board</span>
                </div>

                {/* Center FAB: Add Ticket */}
                <div
                  className={classes.centerFab}
                  title="Create Ticket"
                  onClick={() => setActiveTab("sprint")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>

                {/* Stream Tab 3: Backlog */}
                <div
                  className={activeTab === "backlog" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("backlog")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  <span>Backlog</span>
                </div>

                {/* Stream Tab 4: Roadmap */}
                <div
                  className={activeTab === "roadmap" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("roadmap")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  <span>Roadmap</span>
                </div>
              </>
            ) : isMail ? (
              <>
                {/* Mail Tab 1: Inbox */}
                <div
                  className={activeTab === "mail" || activeTab === "inbox" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("inbox")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Inbox</span>
                </div>

                {/* Mail Tab 2: Sent */}
                <div
                  className={activeTab === "sent" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("sent")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>Sent</span>
                </div>

                {/* Center FAB: Compose */}
                <div
                  className={classes.centerFab}
                  title="Compose Email"
                  onClick={() => setActiveTab("inbox")}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>

                {/* Mail Tab 3: Drafts */}
                <div
                  className={activeTab === "drafts" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("drafts")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Drafts</span>
                </div>

                {/* Mail Tab 4: Starred */}
                <div
                  className={activeTab === "starred" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("starred")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>Starred</span>
                </div>
              </>
            ) : (
              <>
                {/* Default Suite: Home */}
                <div
                  className={activeTab === "dash" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("dash")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
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

                {/* Center FAB */}
                <div
                  className={classes.centerFab}
                  title="Profile / Clock In"
                  onClick={() => setClockedIn(!clockedIn)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Tasks */}
                <div
                  className={activeTab === "stream" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("stream")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Tasks</span>
                </div>

                {/* Office */}
                <div
                  className={activeTab === "eoffice" ? classes.tabItemActive : classes.tabItem}
                  onClick={() => setActiveTab("eoffice")}
                >
                  <svg className={classes.tabIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                  <span>Office</span>
                </div>
              </>
            )}
          </div>

          {/* iOS Home Indicator Bar — safely nested inside tab bar */}
          <div className={classes.homeIndicator} />
        </div>
      </>
    )}
  </div>
</div>
    );
};

export default PhoneMockup;

