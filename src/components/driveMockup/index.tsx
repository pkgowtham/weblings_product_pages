'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import { WeblogoIcon, BellAlertIcon } from '../../assets/icons_component';

interface DriveFile {
  id: string;
  name: string;
  type: 'pdf' | 'xlsx' | 'pptx' | 'docx' | 'code';
  size: string;
  uploadedAt: string;
  author: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  aiSummary: {
    question: string;
    answer: string;
    citation: string;
  };
}

interface ExpiringLink {
  id: string;
  url: string;
  targetFile: string;
  expiresIn: string;
  accessCount: number;
  status: 'Active' | 'Expiring Soon';
}

const initialFiles: DriveFile[] = [
  {
    id: 'f-1',
    name: 'Master_MSA_2026.pdf',
    type: 'pdf',
    size: '4.2 MB',
    uploadedAt: 'Yesterday by Legal Pod',
    author: 'Legal & Compliance',
    tag: '#Legal-MSA',
    tagColor: '#7E22CE',
    tagBg: '#FAF5FF',
    aiSummary: {
      question: 'What is the governing law and liability cap in this MSA?',
      answer: 'Governing law is the State of Delaware (Section 14.1). Total cumulative liability is capped at 12 months of paid subscription fees, excluding gross negligence.',
      citation: 'Page 8, Clause 14.1 • 99.4% Match',
    },
  },
  {
    id: 'f-2',
    name: 'Q3_Technical_Specs_Final.pdf',
    type: 'pdf',
    size: '12.8 MB',
    uploadedAt: 'Today by Alex Smith',
    author: 'Alex Smith',
    tag: '#Q3-Launch',
    tagColor: '#0072C4',
    tagBg: '#EFF6FF',
    aiSummary: {
      question: 'What is the exact API rate limit specified in this document?',
      answer: 'Based on Section 4.2 (Page 12), the API rate limit is 5,000 requests per minute per tenant, with burst capacity up to 8,500 req/min for enterprise tier.',
      citation: 'Page 12, Paragraph 3 • 99.8% Match',
    },
  },
  {
    id: 'f-3',
    name: 'Vendor_Security_Assessment_v4.xlsx',
    type: 'xlsx',
    size: '2.1 MB',
    uploadedAt: 'Sep 10 by DevOps Lead',
    author: 'DevOps Pod',
    tag: '#Vendor-Docs',
    tagColor: '#D97706',
    tagBg: '#FFFBEB',
    aiSummary: {
      question: 'Did the vendor pass the SOC2 Type II audit checklist?',
      answer: 'Yes. All 64 controls across Security, Availability, and Confidentiality passed without exceptions. Zero high-risk findings detected.',
      citation: 'Sheet 2 (Audit Log), Row 68 • 100% Match',
    },
  },
  {
    id: 'f-4',
    name: 'API_Gateway_Architecture_Deck.pptx',
    type: 'pptx',
    size: '18.4 MB',
    uploadedAt: 'Sep 08 by Alex Smith',
    author: 'Alex Smith',
    tag: '#Confidential',
    tagColor: '#DC2626',
    tagBg: '#FEF2F2',
    aiSummary: {
      question: 'What is the p99 latency target for the new API gateway?',
      answer: 'The p99 latency target is sub-15ms for internal routing and sub-45ms for edge token validation across EU and US regions.',
      citation: 'Slide 14, Architecture Benchmark • 98.6% Match',
    },
  },
  {
    id: 'f-5',
    name: 'Customer_Data_Processing_Addendum.pdf',
    type: 'pdf',
    size: '1.9 MB',
    uploadedAt: 'Sep 02 by Compliance',
    author: 'Compliance Lead',
    tag: '#Legal-MSA',
    tagColor: '#7E22CE',
    tagBg: '#FAF5FF',
    aiSummary: {
      question: 'What sub-processors are approved for European customer data?',
      answer: 'Approved sub-processors are AWS Frankfurt (eu-central-1), Cloudflare Edge, and MongoDB Atlas Frankfurt. All cross-border transfers use Standard Contractual Clauses (SCCs).',
      citation: 'Schedule B, Page 6 • 99.1% Match',
    },
  },
];

const initialLinks: ExpiringLink[] = [
  {
    id: 'link-1',
    url: 'weblings.link/share/x89f-alpha',
    targetFile: 'Q3_Technical_Specs_Final.pdf',
    expiresIn: '11h 42m',
    accessCount: 4,
    status: 'Active',
  },
  {
    id: 'link-2',
    url: 'weblings.link/share/q3-audit-doc',
    targetFile: 'Vendor_Security_Assessment_v4.xlsx',
    expiresIn: '4d 18h',
    accessCount: 12,
    status: 'Active',
  },
];

export const DriveMockup: React.FC = () => {
  const classes = useStyles();

  // Active navigation folder
  const [activeFolder, setActiveFolder] = useState<'workspace' | 'project' | 'shared' | 'expiring' | 'trash'>('project');

  // Selected file for Document AI interaction
  const [selectedFileId, setSelectedFileId] = useState<string>('f-2');

  // Search query in file browser
  const [searchQuery, setSearchQuery] = useState<string>('');

  // View mode switcher: List vs Grid
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // AI chat question and conversation history
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; citation?: string }>>([
    {
      sender: 'user',
      text: 'What is the exact API rate limit specified in this document?',
    },
    {
      sender: 'ai',
      text: 'Based on Section 4.2 (Page 12), the API rate limit is 5,000 requests per minute per tenant, with burst capacity up to 8,500 req/min for enterprise tier.',
      citation: 'Page 12, Paragraph 3 • 99.8% Match',
    },
  ]);

  // Upload feedback notification
  const [showUploadToast, setShowUploadToast] = useState<boolean>(false);

  const selectedFile = initialFiles.find((f) => f.id === selectedFileId) || initialFiles[1];

  const handleSelectFile = (file: DriveFile) => {
    setSelectedFileId(file.id);
    setChatMessages([
      {
        sender: 'user',
        text: file.aiSummary.question,
      },
      {
        sender: 'ai',
        text: file.aiSummary.answer,
        citation: file.aiSummary.citation,
      },
    ]);
  };

  const handleSendQuestion = (questionText?: string) => {
    const q = questionText || chatInput;
    if (!q.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: q },
      {
        sender: 'ai',
        text: `Based on ${selectedFile.name} analysis: ${selectedFile.aiSummary.answer}`,
        citation: selectedFile.aiSummary.citation,
      },
    ]);
    setChatInput('');
  };

  const handleUploadClick = () => {
    setShowUploadToast(true);
    setTimeout(() => setShowUploadToast(false), 3000);
  };

  // Filter files by search query
  const filteredFiles = initialFiles.filter(
    (file) =>
      !searchQuery.trim() ||
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.mockupFrame}>
      {/* ─────────────────────────────────────────────────────────────
         TOP APPLICATION BAR
         ───────────────────────────────────────────────────────────── */}
      <header className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <WeblogoIcon width={24} height={24} />
          <span className={classes.brandTitle}>Weblings Drive</span>
          <div className={classes.workspacePill}>
            <span>📁</span>
            <span>Alpha Launch / Vendor Docs</span>
          </div>
        </div>

        {/* Live Search Box */}
        <div className={classes.topSearchBox}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search files, metadata, or document contents..."
            className={classes.topSearchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={classes.topBarRight}>
          {/* Storage Meter Pill */}
          <div className={classes.storageMeterPill} title="Cloud Quota: 48.2 GB of 1 TB used">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            </svg>
            <span>48.2 GB / 1 TB</span>
          </div>

          {/* Notification Bell with interactive animation */}
          <button className={classes.bellBtn} title="Notifications">
            <BellAlertIcon width={20} height={20} />
          </button>

          {/* User Profile Avatar */}
          <div className={classes.topProfileAvatar} title="Account: Alex Smith (Tenant Admin)">
            <span>A</span>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
         MAIN BODY: SUITE RAIL + DRIVE SIDEBAR + STAGE + AI PANEL
         ───────────────────────────────────────────────────────────── */}
      <div className={classes.mainBody}>
        {/* OUTER SUITE RAIL */}
        <aside className={classes.outerRail}>
          <button className={classes.railCollapseBtn} title="Collapse Rail">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className={classes.railAvatarCircle} title="Workspace: Alpha">
            <span>A</span>
          </div>

          {/* Briefcase (eOffice) */}
          <div className={classes.railItem} title="eOffice">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>

          {/* Streamline */}
          <div className={classes.railItem} title="Streamline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>

          {/* Mail */}
          <div className={classes.railItem} title="Mail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          {/* Chat */}
          <div className={classes.railItem} title="Team Chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          {/* Calendar */}
          <div className={classes.railItem} title="Calendar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          {/* Drive (Active with Blue Left Indicator) */}
          <div className={classes.railItemActive} title="Weblings Drive (Active)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M12 12v9m0-9-3 3m3-3 3 3" />
            </svg>
          </div>

          <div style={{ flex: 1 }} />

          {/* Settings */}
          <div className={classes.railItem} title="Settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </aside>

        {/* INNER DRIVE SIDEBAR */}
        <aside className={classes.driveSidebar}>
          {/* Upload Button */}
          <button className={classes.uploadBtn} onClick={handleUploadClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Upload File</span>
          </button>

          {/* Navigation Section */}
          <div>
            <div className={classes.sidebarSectionTitle}>Folders</div>
            <div className={classes.sidebarNavList}>
              <div
                className={activeFolder === 'workspace' ? classes.sidebarNavItemActive : classes.sidebarNavItem}
                onClick={() => setActiveFolder('workspace')}
              >
                <div className={classes.navItemLabel}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>My Workspace</span>
                </div>
                <span className={classes.navCountBadge}>42</span>
              </div>

              <div
                className={activeFolder === 'project' ? classes.sidebarNavItemActive : classes.sidebarNavItem}
                onClick={() => setActiveFolder('project')}
              >
                <div className={classes.navItemLabel}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  <span>Project Files</span>
                </div>
                <span className={classes.navCountBadge}>18</span>
              </div>

              <div
                className={activeFolder === 'shared' ? classes.sidebarNavItemActive : classes.sidebarNavItem}
                onClick={() => setActiveFolder('shared')}
              >
                <div className={classes.navItemLabel}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Shared with Me</span>
                </div>
                <span className={classes.navCountBadge}>12</span>
              </div>

              <div
                className={activeFolder === 'expiring' ? classes.sidebarNavItemActive : classes.sidebarNavItem}
                onClick={() => setActiveFolder('expiring')}
              >
                <div className={classes.navItemLabel}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Expiring Links</span>
                </div>
                <span className={classes.activePillBadge}>2 Active</span>
              </div>
            </div>
          </div>

          {/* Custom Tags Section */}
          <div>
            <div className={classes.sidebarSectionTitle}>Custom Tags</div>
            <div className={classes.tagsList}>
              <div className={classes.tagItem} onClick={() => setSearchQuery('#Confidential')}>
                <span className={classes.tagColorDot} style={{ backgroundColor: '#DC2626' }} />
                <span>#Confidential</span>
              </div>
              <div className={classes.tagItem} onClick={() => setSearchQuery('#Vendor-Docs')}>
                <span className={classes.tagColorDot} style={{ backgroundColor: '#D97706' }} />
                <span>#Vendor-Docs</span>
              </div>
              <div className={classes.tagItem} onClick={() => setSearchQuery('#Q3-Launch')}>
                <span className={classes.tagColorDot} style={{ backgroundColor: '#0072C4' }} />
                <span>#Q3-Launch</span>
              </div>
              <div className={classes.tagItem} onClick={() => setSearchQuery('#Legal-MSA')}>
                <span className={classes.tagColorDot} style={{ backgroundColor: '#9333EA' }} />
                <span>#Legal-MSA</span>
              </div>
            </div>
          </div>

          {/* Bottom Storage Meter */}
          <div className={classes.sidebarStorageArea}>
            <div className={classes.storageTextRow}>
              <span>Storage Quota</span>
              <strong>48.2 GB / 1 TB</strong>
            </div>
            <div className={classes.storageBarTrack}>
              <div className={classes.storageBarFill} />
            </div>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────────────────────
           CENTER FILES WORKSPACE STAGE
           ───────────────────────────────────────────────────────────── */}
        <main className={classes.filesStage}>
          {/* Header Action Bar */}
          <div className={classes.filesHeaderRow}>
            <div className={classes.breadcrumbRow}>
              <span>Weblings Drive</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className={classes.breadcrumbCurrent}>
                {activeFolder === 'workspace' && 'My Workspace'}
                {activeFolder === 'project' && 'Alpha Launch / Vendor Docs'}
                {activeFolder === 'shared' && 'Shared with Me'}
                {activeFolder === 'expiring' && 'Expiring External Links (Time-Bomb)'}
              </span>
            </div>

            <div className={classes.stageActionsRow}>
              <button className={classes.filterBtn}>
                <span>All Types</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <button className={classes.filterBtn}>
                <span>Sort by Date</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className={classes.viewToggleGroup}>
                <button
                  className={viewMode === 'list' ? classes.viewToggleBtnActive : classes.viewToggleBtn}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
                <button
                  className={viewMode === 'grid' ? classes.viewToggleBtnActive : classes.viewToggleBtn}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Upload Toast Feedback */}
          {showUploadToast && (
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', color: '#15803D', padding: '8px 12px', borderRadius: 6, fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>✓</span>
              <span>Encrypted file chunk uploaded to isolated tenant storage vault. Document AI indexing initiated.</span>
            </div>
          )}

          {/* VIEW: EXPIRING LINKS */}
          {activeFolder === 'expiring' ? (
            <div>
              <div style={{ marginBottom: 12, fontSize: 12, color: '#64748B' }}>
                Links automatically self-destruct after their expiration timestamp. No orphaned external access.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {initialLinks.map((link) => (
                  <div
                    key={link.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: 8,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span>🔗</span>
                        <span>{link.url}</span>
                      </div>
                      <div style={{ fontSize: 11, color: '#64748B', marginTop: 3 }}>
                        Target: <strong>{link.targetFile}</strong> • Accessed {link.accessCount} times
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#D97706', backgroundColor: '#FFFBEB', padding: '3px 8px', borderRadius: 4 }}>
                        Expires in {link.expiresIn}
                      </span>
                      <button
                        style={{
                          backgroundColor: '#FFF',
                          border: '1px solid #CBD5E1',
                          color: '#DC2626',
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          padding: '4px 8px',
                          cursor: 'pointer',
                        }}
                      >
                        Revoke Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* VIEW: FILES LIST */
            <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className={classes.filesTable}>
                <thead>
                  <tr className={classes.filesTableHeader}>
                    <th className={classes.filesTableHeaderCell} style={{ width: '45%' }}>Name</th>
                    <th className={classes.filesTableHeaderCell}>Size</th>
                    <th className={classes.filesTableHeaderCell}>Uploaded</th>
                    <th className={classes.filesTableHeaderCell}>Tag</th>
                    <th className={classes.filesTableHeaderCell} style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file) => {
                    const isSelected = selectedFileId === file.id;

                    return (
                      <tr
                        key={file.id}
                        className={`${classes.fileRowItem} ${isSelected ? classes.fileRowItemActive : ''}`}
                        onClick={() => handleSelectFile(file)}
                      >
                        <td className={classes.fileCell}>
                          <div className={classes.filePrimaryCol}>
                            <div className={classes.fileIconWrapper}>
                              {file.type === 'pdf' && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                </svg>
                              )}
                              {file.type === 'xlsx' && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                                  <rect x="3" y="3" width="18" height="18" rx="2" />
                                  <line x1="3" y1="9" x2="21" y2="9" />
                                  <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                              )}
                              {file.type === 'pptx' && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
                                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                  <polyline points="2 17 12 22 22 17" />
                                  <polyline points="2 12 12 17 22 12" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <span className={classes.fileNameText} title={file.name}>
                                {file.name}
                              </span>
                              <div className={classes.fileSubtext}>
                                <span>{file.author}</span>
                                <span>•</span>
                                <span>{file.uploadedAt}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={classes.fileCell} style={{ color: '#64748B' }}>{file.size}</td>
                        <td className={classes.fileCell} style={{ color: '#64748B' }}>{file.uploadedAt}</td>
                        <td className={classes.fileCell}>
                          <span
                            className={classes.fileTagPill}
                            style={{
                              backgroundColor: `${file.tagColor}15`,
                              color: file.tagColor,
                              border: `1px solid ${file.tagColor}30`,
                            }}
                          >
                            {file.tag}
                          </span>
                        </td>
                        <td className={classes.fileCell} style={{ textAlign: 'right' }}>
                          <button
                            className={classes.askAiMiniBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectFile(file);
                            }}
                            title="Ask Document AI about this file"
                          >
                            <span>🪄</span>
                            <span>Ask AI</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </main>

        {/* ─────────────────────────────────────────────────────────────
           RIGHT DOCUMENT AI ASSISTANT DRAWER PANEL
           ───────────────────────────────────────────────────────────── */}
        <aside className={classes.aiDrawer}>
          <div className={classes.aiDrawerHeader}>
            <div className={classes.aiHeaderTitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
              </svg>
              <span>Document AI</span>
            </div>
            <span className={classes.aiActiveFileBadge} title={selectedFile.name}>
              {selectedFile.name}
            </span>
          </div>

          {/* Interactive Chat Stream */}
          <div className={classes.aiChatStream}>
            {chatMessages.map((msg, index) =>
              msg.sender === 'user' ? (
                <div key={index} className={classes.userQuestionBubble}>
                  {msg.text}
                </div>
              ) : (
                <div key={index} className={classes.aiAnswerBubble}>
                  <div>{msg.text}</div>
                  {msg.citation && (
                    <div className={classes.citationBadge}>
                      <span>📄</span>
                      <span>{msg.citation}</span>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Suggested Quick Question Pills */}
          <div className={classes.suggestedPromptsSection}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#94A3B8' }}>
              Suggested Inquiries
            </div>
            <button
              className={classes.promptPill}
              onClick={() => handleSendQuestion('What are the data retention and compliance terms?')}
            >
              • What are the data retention terms?
            </button>
            <button
              className={classes.promptPill}
              onClick={() => handleSendQuestion('Summarize the top 3 deliverables in this file')}
            >
              • Summarize the top deliverables
            </button>
          </div>

          {/* Interactive Question Input */}
          <form
            className={classes.aiInputContainer}
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion();
            }}
          >
            <input
              type="text"
              placeholder="Ask a question about this document..."
              className={classes.aiInputField}
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className={classes.aiSendBtn} title="Send question">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default DriveMockup;
