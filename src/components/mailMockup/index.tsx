'use client';

import React, { useState } from 'react';
import { useStyles } from './style';

// Clean SVG Icons matching webcode/src/components/icons
const SvgEmail = ({ color = 'currentColor', width = 16, height = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill={color} />
  </svg>
);

const SvgSend = ({ color = 'currentColor', width = 16, height = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill={color} />
  </svg>
);

const SvgError = ({ color = 'currentColor', width = 16, height = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <line x1="12" y1="8" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1" fill={color} />
  </svg>
);

const SvgTrash = ({ color = 'currentColor', width = 16, height = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const SvgArchive = ({ color = 'currentColor', width = 16, height = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const SvgStar = ({ filled = false, color = '#EAB308', width = 15, height = 15 }: { filled?: boolean; color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SvgEditPen = ({ color = 'currentColor', width = 14, height = 14 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const SvgSearch = ({ color = 'currentColor', width = 13, height = 13 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SvgPaperclip = ({ color = 'currentColor', width = 14, height = 14 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const SvgTag = ({ color = 'currentColor', width = 14, height = 14 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const SvgReply = ({ color = 'currentColor', width = 14, height = 14 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 17 4 12 9 7" />
    <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  </svg>
);

const SvgForward = ({ color = 'currentColor', width = 14, height = 14 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 17 20 12 15 7" />
    <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
  </svg>
);

const SvgDownload = ({ color = 'currentColor', width = 13, height = 13 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const SvgCloudZip = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

interface EmailItem {
  id: string;
  sender: string;
  senderEmail: string;
  avatarLabel: string;
  avatarBg: string;
  avatarColor: string;
  subject: string;
  snippet: string;
  date: string;
  fullDate: string;
  unread: boolean;
  starred: boolean;
  tags: { name: string; bg: string; color: string }[];
  hasAttachment: boolean;
  attachmentInfo?: {
    name: string;
    size: string;
    type: string;
    storage: string;
  };
  body: string[];
}

const SAMPLE_EMAILS: EmailItem[] = [
  {
    id: '1',
    sender: 'Sarah Jenkins (Lead Creative)',
    senderEmail: 'sarah.jenkins@acme-studio.com',
    avatarLabel: 'SJ',
    avatarBg: '#EFF6FF',
    avatarColor: '#0072C4',
    subject: 'Final 4K Rendering Assets for Product Launch',
    snippet: 'Hi Team, As agreed, I have prepared and attached the complete high-resolution 4K asset package...',
    date: '10:42 AM',
    fullDate: 'Today, 10:42 AM (2 hours ago)',
    unread: true,
    starred: true,
    tags: [
      { name: 'Q4 Assets', bg: '#EFF6FF', color: '#0072C4' },
      { name: 'Client Review', bg: '#FFF7ED', color: '#B15600' },
    ],
    hasAttachment: true,
    attachmentInfo: {
      name: 'Project_Assets_Final_v2.zip',
      size: '4.2 GB',
      type: 'Archive',
      storage: 'Weblings Drive Direct Link',
    },
    body: [
      'Hi Team,',
      "Great sync this morning! As agreed, I've prepared and attached the complete high-resolution 4K asset package and brand guidelines for the Q4 product release.",
      'Since the archive is over 4GB, it has been automatically routed through Weblings Drive with high-speed direct edge downloading enabled for your workspace.',
      'Please review the enclosed deliverables and let me know if any adjustments are needed before our Thursday staging deployment.',
      'Best regards,\nSarah Jenkins\nLead Creative Producer, Acme Studio',
    ],
  },
  {
    id: '2',
    sender: 'HR Automations',
    senderEmail: 'hrms@weblings.com',
    avatarLabel: 'HR',
    avatarBg: '#F3E8FF',
    avatarColor: '#7E22CE',
    subject: 'Welcome to the team, Alex! - Corporate Credentials',
    snippet: 'Your single sign-on profile and enterprise inbox have been allocated across all Weblings services...',
    date: '09:15 AM',
    fullDate: 'Today, 09:15 AM',
    unread: true,
    starred: false,
    tags: [{ name: 'Internal Team', bg: '#F3E8FF', color: '#7E22CE' }],
    hasAttachment: false,
    body: [
      'Hello Alex,',
      'Welcome to the company! Your corporate mailbox (alex@ny-branch.com) has been provisioned automatically via E-Office with zero-day access.',
      'Your account is synchronized with Team Chat, Streamline, and Document Cloud.',
    ],
  },
  {
    id: '3',
    sender: 'Billing & Operations',
    senderEmail: 'billing@cloud-services.io',
    avatarLabel: 'BO',
    avatarBg: '#DCFCE7',
    avatarColor: '#15803D',
    subject: 'Monthly Cloud Infrastructure Invoice #INV-2026-08',
    snippet: 'Your statement for August 2026 is attached. All enterprise domains and mailboxes are active...',
    date: 'Yesterday',
    fullDate: 'Sep 09, 04:30 PM',
    unread: false,
    starred: false,
    tags: [{ name: 'Invoices', bg: '#DCFCE7', color: '#15803D' }],
    hasAttachment: true,
    attachmentInfo: {
      name: 'Invoice_Aug_2026.pdf',
      size: '142 KB',
      type: 'PDF Document',
      storage: 'Encrypted PDF',
    },
    body: [
      'Dear Customer,',
      'Please find enclosed your monthly statement for August 2026. Your unlimited mailboxes, DNS routing, and spam perimeter defense remain active with 100% uptime.',
    ],
  },
  {
    id: '4',
    sender: 'Alex Rivera (Dev Team)',
    senderEmail: 'alex.rivera@internal.dev',
    avatarLabel: 'AR',
    avatarBg: '#FEE2E2',
    avatarColor: '#DC2626',
    subject: 'API Integration update: Webhook listeners active',
    snippet: 'The edge listener services have been deployed. Ready for staging security audit...',
    date: 'Nov 09',
    fullDate: 'Nov 09, 02:15 PM',
    unread: false,
    starred: true,
    tags: [{ name: 'Urgent', bg: '#FEE2E2', color: '#DC2626' }],
    hasAttachment: false,
    body: [
      'Team,',
      'The edge listener services for inbound webhook processing have passed latency tests and are ready for the security review.',
    ],
  },
];

export const WeblingsMailMockup: React.FC = () => {
  const classes = useStyles();

  const [activeFolder, setActiveFolder] = useState<string>('inbox');
  const [selectedEmailId, setSelectedEmailId] = useState<string>('1');
  const [emails, setEmails] = useState<EmailItem[]>(SAMPLE_EMAILS);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isComposeOpen, setIsComposeOpen] = useState<boolean>(false);

  const selectedEmail = emails.find((e) => e.id === selectedEmailId) || emails[0];

  const toggleStar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmails((prev) =>
      prev.map((item) => (item.id === id ? { ...item, starred: !item.starred } : item))
    );
  };

  const filteredEmails = emails.filter((item) => {
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        item.subject.toLowerCase().includes(q) ||
        item.sender.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q)
      );
    }
    if (activeFolder === 'starred') return item.starred;
    if (activeFolder === 'inbox') return true;
    return true;
  });

  return (
    <div className={classes.mockupFrame}>
      {/* ── Top Window Bar (macOS Style Chrome) ──────────────────────────── */}
      <div className={classes.windowBar}>
        <div className={classes.windowDots}>
          <span className={classes.dotRed} />
          <span className={classes.dotYellow} />
          <span className={classes.dotGreen} />
        </div>

        <div className={classes.addressBar}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>mail.weblings.com/inbox</span>
          <span className={classes.authenticatedBadge}>● AUTHENTICATED</span>
        </div>

        <div className={classes.windowActionBadge}>Weblings Mail</div>
      </div>

      {/* ── 3-Pane Body Layout (Sidebar, List, Reader) ─────────────────────── */}
      <div className={classes.bodyLayout}>
        {/* ── Left Sidebar (Navigation & Folders) ─────────────────────────── */}
        <aside className={classes.sidebar}>
          <div className={classes.sidebarHeader}>
            <span className={classes.sidebarTitle}>Mail</span>
            <span className={classes.collapseBtn}>‹</span>
          </div>

          <button
            className={classes.composeButton}
            onClick={() => setIsComposeOpen((prev) => !prev)}
          >
            <SvgEditPen color="#FFFFFF" width={14} height={14} />
            <span>Compose</span>
          </button>

          {/* Mailboxes */}
          <div className={classes.categoryGroup}>
            <div className={classes.categoryLabel}>Mailboxes</div>
            <div
              className={`${classes.categoryItem} ${activeFolder === 'inbox' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('inbox')}
            >
              <div className={classes.itemLeft}>
                <SvgEmail color={activeFolder === 'inbox' ? '#0072C4' : '#64748B'} width={15} height={15} />
                <span>Inbox</span>
              </div>
              <span className={classes.unreadBadge}>12</span>
            </div>

            <div
              className={`${classes.categoryItem} ${activeFolder === 'sent' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('sent')}
            >
              <div className={classes.itemLeft}>
                <SvgSend color={activeFolder === 'sent' ? '#0072C4' : '#64748B'} width={15} height={15} />
                <span>Sent</span>
              </div>
            </div>

            <div
              className={`${classes.categoryItem} ${activeFolder === 'spam' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('spam')}
            >
              <div className={classes.itemLeft}>
                <SvgError color={activeFolder === 'spam' ? '#0072C4' : '#64748B'} width={15} height={15} />
                <span>Spam</span>
              </div>
            </div>

            <div
              className={`${classes.categoryItem} ${activeFolder === 'trash' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('trash')}
            >
              <div className={classes.itemLeft}>
                <SvgTrash color={activeFolder === 'trash' ? '#0072C4' : '#64748B'} width={15} height={15} />
                <span>Trash</span>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className={classes.categoryGroup}>
            <div className={classes.categoryLabel}>Labels</div>
            <div
              className={`${classes.categoryItem} ${activeFolder === 'archive' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('archive')}
            >
              <div className={classes.itemLeft}>
                <SvgArchive color={activeFolder === 'archive' ? '#0072C4' : '#64748B'} width={15} height={15} />
                <span>Archive</span>
              </div>
            </div>

            <div
              className={`${classes.categoryItem} ${activeFolder === 'starred' ? classes.categoryItemActive : ''}`}
              onClick={() => setActiveFolder('starred')}
            >
              <div className={classes.itemLeft}>
                <SvgStar filled={activeFolder === 'starred'} color={activeFolder === 'starred' ? '#EAB308' : '#64748B'} width={15} height={15} />
                <span>Important</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className={classes.categoryGroup}>
            <div className={classes.categoryLabel}>
              <span>Tags</span>
              <span style={{ cursor: 'pointer', fontSize: '13px' }}>+</span>
            </div>
            <div className={classes.categoryItem}>
              <div className={classes.itemLeft}>
                <span className={classes.tagDot} style={{ backgroundColor: '#E00028' }} />
                <span>Urgent</span>
              </div>
            </div>
            <div className={classes.categoryItem}>
              <div className={classes.itemLeft}>
                <span className={classes.tagDot} style={{ backgroundColor: '#B15600' }} />
                <span>Client Review</span>
              </div>
            </div>
            <div className={classes.categoryItem}>
              <div className={classes.itemLeft}>
                <span className={classes.tagDot} style={{ backgroundColor: '#36A040' }} />
                <span>Invoices</span>
              </div>
            </div>
            <div className={classes.categoryItem}>
              <div className={classes.itemLeft}>
                <span className={classes.tagDot} style={{ backgroundColor: '#0072C4' }} />
                <span>Q4 Assets</span>
              </div>
            </div>
            <div className={classes.categoryItem}>
              <div className={classes.itemLeft}>
                <span className={classes.tagDot} style={{ backgroundColor: '#9E29FE' }} />
                <span>Internal Team</span>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Middle Pane: Mail List ──────────────────────────────────────── */}
        <div className={classes.mailListPane}>
          <div className={classes.searchBarWrap}>
            <input type="checkbox" className={classes.selectAllCheckbox} defaultChecked aria-label="Select all" />
            <div className={classes.searchBox}>
              <span className={classes.searchIcon}>
                <SvgSearch width={13} height={13} />
              </span>
              <input
                className={classes.searchInput}
                placeholder="Search Inbox..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={classes.mailRowsScroll}>
            {filteredEmails.map((item) => {
              const isSelected = item.id === selectedEmailId;
              return (
                <div
                  key={item.id}
                  className={`${classes.mailRow} ${isSelected ? classes.mailRowSelected : ''}`}
                  onClick={() => setSelectedEmailId(item.id)}
                >
                  <div className={classes.mailRowTop}>
                    <div className={classes.mailRowSenderWrap}>
                      <span
                        onClick={(e) => toggleStar(item.id, e)}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      >
                        <SvgStar filled={item.starred} color={item.starred ? '#EAB308' : '#CBD5E1'} width={13} height={13} />
                      </span>
                      <div
                        className={classes.rowAvatar}
                        style={{ backgroundColor: item.avatarBg, color: item.avatarColor }}
                      >
                        {item.avatarLabel}
                      </div>
                      <span className={`${classes.rowSender} ${item.unread ? classes.rowSenderUnread : ''}`}>
                        {item.sender}
                      </span>
                    </div>
                    <span className={classes.rowDate}>{item.date}</span>
                  </div>

                  <div className={`${classes.rowSubject} ${item.unread ? classes.rowSubjectUnread : ''}`}>
                    {item.subject}
                  </div>

                  <div className={classes.rowSnippet}>{item.snippet}</div>

                  <div className={classes.rowBadgesWrap}>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={classes.tagPill}
                        style={{ backgroundColor: tag.bg, color: tag.color }}
                      >
                        {tag.name}
                      </span>
                    ))}
                    {item.hasAttachment && (
                      <span className={classes.attachmentIconSmall} title="Has attachment">
                        <SvgPaperclip width={11} height={11} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Pane: Mail Content / Reader ─────────────────────────────── */}
        <main className={classes.readerPane}>
          {/* Action Toolbar */}
          <div className={classes.readerActionsBar}>
            <div className={classes.actionIconGroup}>
              <button className={classes.actionBtn} title="Assign Tag">
                <SvgTag width={13} height={13} />
              </button>
              <button
                className={classes.actionBtn}
                title="Star / Important"
                onClick={(e) => toggleStar(selectedEmail.id, e)}
              >
                <SvgStar filled={selectedEmail.starred} color={selectedEmail.starred ? '#EAB308' : '#64748B'} width={13} height={13} />
              </button>
              <button className={classes.actionBtn} title="Spam">
                <SvgError width={13} height={13} />
              </button>
              <button className={classes.actionBtn} title="Delete">
                <SvgTrash width={13} height={13} />
              </button>
            </div>

            <div className={classes.actionIconGroup}>
              <button className={classes.actionBtn} title="Reply">
                <SvgReply width={13} height={13} />
              </button>
              <button className={classes.actionBtn} title="Forward">
                <SvgForward width={13} height={13} />
              </button>
            </div>
          </div>

          {/* Email Subject Title */}
          <h2 className={classes.readerSubject}>{selectedEmail.subject}</h2>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
            {selectedEmail.tags.map((tag, idx) => (
              <span
                key={idx}
                className={classes.tagPill}
                style={{ backgroundColor: tag.bg, color: tag.color, padding: '3px 8px', fontSize: '10px' }}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Sender Information Card */}
          <div className={classes.readerSenderCard}>
            <div className={classes.senderCardLeft}>
              <div
                className={classes.senderAvatarLarge}
                style={{ backgroundColor: selectedEmail.avatarBg, color: selectedEmail.avatarColor }}
              >
                {selectedEmail.avatarLabel}
              </div>
              <div className={classes.senderDetails}>
                <span className={classes.senderName}>{selectedEmail.sender}</span>
                <span className={classes.senderAddress}>
                  &lt;{selectedEmail.senderEmail}&gt; · <span style={{ color: '#0072C4' }}>to me</span>
                </span>
              </div>
            </div>
            <span className={classes.readerTime}>{selectedEmail.fullDate}</span>
          </div>

          {/* Email Body */}
          <div className={classes.emailBody}>
            {selectedEmail.body.map((para, i) => (
              <p key={i} style={{ whiteSpace: 'pre-line' }}>{para}</p>
            ))}
          </div>

          {/* Large Attachment Card (Matching Weblings Drive integration) */}
          {selectedEmail.attachmentInfo && (
            <div className={classes.attachmentBox}>
              <div className={classes.attachmentHeader}>Attachments (1 file · {selectedEmail.attachmentInfo.size})</div>
              <div className={classes.attachmentCard}>
                <div className={classes.attachmentLeft}>
                  <div className={classes.attachmentFileIcon}>
                    <SvgCloudZip />
                  </div>
                  <div>
                    <div className={classes.attachmentFileName}>{selectedEmail.attachmentInfo.name}</div>
                    <div className={classes.attachmentFileSize}>
                      {selectedEmail.attachmentInfo.size} · Hosted via {selectedEmail.attachmentInfo.storage}
                    </div>
                  </div>
                </div>

                <button className={classes.downloadBtn}>
                  <SvgDownload width={12} height={12} />
                  Download Securely
                </button>
              </div>

              <div className={classes.driveBypassNote}>
                ✓ Standard 20MB email limit bypassed using Drive smart-linking.
              </div>
            </div>
          )}
        </main>

        {/* ── Floating Compose Modal (Toggled via Compose button) ─────────── */}
        {isComposeOpen && (
          <div className={classes.composeModal}>
            <div className={classes.composeHeader}>
              <span>New Message</span>
              <span className={classes.composeClose} onClick={() => setIsComposeOpen(false)}>✕</span>
            </div>
            <div className={classes.composeFields}>
              <div className={classes.composeRow}>
                <span style={{ width: 50 }}>To:</span>
                <input className={classes.composeInput} defaultValue="sarah.jenkins@acme-studio.com" />
              </div>
              <div className={classes.composeRow}>
                <span style={{ width: 50 }}>Subject:</span>
                <input className={classes.composeInput} defaultValue="Re: Final 4K Rendering Assets for Product Launch" />
              </div>
            </div>
            <textarea
              className={classes.composeTextarea}
              defaultValue={"Hi Sarah,\n\nDownloaded the package cleanly via Drive. The render resolutions and assets look phenomenal. We will proceed with Thursday deployment.\n\nBest,\nDev Operations"}
            />
            <div className={classes.composeFooter}>
              <button className={classes.composeSendBtn} onClick={() => setIsComposeOpen(false)}>
                <SvgSend color="#FFFFFF" width={13} height={13} />
                Send
              </button>
              <div style={{ display: 'flex', gap: '8px', color: '#64748B' }}>
                <SvgPaperclip width={14} height={14} />
                <SvgTag width={14} height={14} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeblingsMailMockup;
