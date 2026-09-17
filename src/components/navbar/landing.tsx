'use client';

import React, { useEffect, useRef, useState } from "react";
import Typography from "../typography/component";
import Button from "../button/button";
import { usestyles } from "./landingstyle";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { getSrc } from "../../utils/getSrc";
import weblingslogo from "../../assets/images/weblings_logo.svg";
import SvgArrowDropDown from "../svg/ArrowDropDown";
import SvgChevronRight from "../svg/ChevronRight";
import SvgMenu from "../svg/Menu";

// Import React SVG Icon components from src/assets/icons_component/
import {
  MailIcon,
  CalendarIcon,
  ConnectIcon,
  StreamlineIcon,
  EOfficeIcon,
  WorksuiteIcon,
  SearchIcon,
  ShieldLockIcon,
  FolderIcon,
  ClipboardCheckIcon,
  SettingsIcon,
} from "../../assets/icons_component/index";
import { SvgCloud } from "../svg/CustomIcons";

// Minimal inline SVG icons for micro-preview use
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const SearchMiniIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ShieldMiniIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const FolderMiniIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const GearMiniIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0072C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface ProductItem {
  key: string;
  label: string;
  category: string;
  title: string;
  description: string;
  path: string;
  url: string;
  statusBadge: string;
  accentColor: string;
  tags: string[];
  icon: React.ReactNode;
}

const productsList: ProductItem[] = [
  {
    key: "Worksuite",
    label: "Worksuite",
    category: "Unified Suite",
    title: "All-in-One Smart Workspace",
    description:
      "Manage projects, tasks, team communications, digital office, and daily operations from a single unified platform.",
    path: "/",
    url: "app.weblings.com/workspace",
    statusBadge: "LIVE OS",
    accentColor: "#0070E8",
    tags: ["6 Unified Apps", "Built-in AI", "Single Invoice"],
    icon: <WorksuiteIcon />,
  },
  {
    key: "Mail",
    label: "Mail",
    category: "Enterprise Email",
    title: "Fast & Secure Business Email",
    description:
      "Connect with your team through business email with built-in spam protection, smart folders, and seamless workspace integration.",
    path: "/mail/feature",
    url: "mail.weblings.internal",
    statusBadge: "99.9% UPTIME",
    accentColor: "#0284C7",
    tags: ["Unlimited Inboxes", "10GB Attachments", "Zero-Spam Edge"],
    icon: <MailIcon />,
  },
  {
    key: "Calender",
    label: "Calender",
    category: "Smart Scheduling",
    title: "Smart Calendar & Scheduling",
    description:
      "Manage meetings, tasks, and team schedules in one centralized view with soft deadlines and timeline tracking.",
    path: "/calender/feature",
    url: "cal.weblings.internal",
    statusBadge: "LIVE SYNC",
    accentColor: "#0EA5E9",
    tags: ["Auto-Synced Sprints", "Live Meeting Sync", "Soft Deadlines"],
    icon: <CalendarIcon />,
  },
  {
    key: "Connect",
    label: "Connect",
    category: "Team Communication",
    title: "Team Messaging & Video Huddles",
    description:
      "Instant one-on-one and group messaging, voice calls, and video meetings to keep teams aligned everywhere.",
    path: "/connect/feature",
    url: "connect.weblings.internal",
    statusBadge: "HD CALLS",
    accentColor: "#10B981",
    tags: ["Conversation to Ticket", "4K Simulcast Video", "Unlimited History"],
    icon: <ConnectIcon />,
  },
  {
    key: "Streamline",
    label: "Streamline",
    category: "Agile Project Boards",
    title: "Agile Project & Sprint Boards",
    description:
      "Design project workflows, sprint backlogs, task timelines, and track progress from start to finish.",
    path: "/streamline/feature",
    url: "streamline.weblings.internal",
    statusBadge: "SPRINT 14",
    accentColor: "#6366F1",
    tags: ["AI Ticket Extraction", "Semantic Search", "Zero-Bloat Boards"],
    icon: <StreamlineIcon />,
  },
  {
    key: "Eoffice",
    label: "E-Office",
    category: "Digital HRMS",
    title: "Digital Attendance & HR Portal",
    description:
      "Track employee attendance, leave requests, organization hierarchy, and team structures in one portal.",
    path: "/eoffice/feature",
    url: "eoffice.weblings.internal",
    statusBadge: "IN PREVIEW",
    accentColor: "#EC4899",
    tags: ["Geo-Attendance", "Leave Hierarchy", "Content in Progress"],
    icon: <EOfficeIcon />,
  },
  {
    key: "Drive",
    label: "Drive",
    category: "Cloud File Vault",
    title: "AI-Powered Enterprise Cloud Storage",
    description:
      "Store, share, and understand your files with granular permissions, expiring links, and built-in document intelligence.",
    path: "/drive",
    url: "drive.weblings.internal",
    statusBadge: "ENCRYPTED",
    accentColor: "#F59E0B",
    tags: ["AI Document Summaries", "Expiring Links", "Granular Access"],
    icon: <SvgCloud />,
  },
];

// High-fidelity, authentic miniature preview renderer for each product
const ProductMicroPreview: React.FC<{
  product: ProductItem;
  classes: ReturnType<typeof usestyles>;
}> = ({ product, classes }) => {
  switch (product.key) {
    case "Worksuite":
      return (
        <div className={classes.WorksuitePreview}>
          <div className={classes.MicroRowBetween}>
            <span className={classes.MicroTextMuted}>Chennai HQ • Sandboxed</span>
            <span className={classes.MicroBadgeGreen}>All Systems Healthy</span>
          </div>
          <div className={classes.WorksuiteModulesGrid}>
            <div className={classes.WorksuiteModuleCard}>
              <span className={classes.WorksuiteModuleIcon}><MailIcon width={14} height={14} stroke="#0072C4" /></span>
              <div>
                <div className={classes.MicroTitle}>Mail</div>
                <div className={classes.MicroSubtitle}>3 unread threads</div>
              </div>
            </div>
            <div className={classes.WorksuiteModuleCard}>
              <span className={classes.WorksuiteModuleIcon} style={{ color: "#0072C4" }}><StreamlineIcon width={14} height={14} /></span>
              <div>
                <div className={classes.MicroTitle}>Streamline</div>
                <div className={classes.MicroSubtitle}>12 active tickets</div>
              </div>
            </div>
            <div className={classes.WorksuiteModuleCard}>
              <span className={classes.WorksuiteModuleIcon}><CalendarIcon width={14} height={14} stroke="#0072C4" /></span>
              <div>
                <div className={classes.MicroTitle}>Calendar</div>
                <div className={classes.MicroSubtitle}>Sprint Review @ 2 PM</div>
              </div>
            </div>
            <div className={classes.WorksuiteModuleCard}>
              <span className={classes.WorksuiteModuleIcon}><ConnectIcon width={14} height={14} stroke="#0072C4" /></span>
              <div>
                <div className={classes.MicroTitle}>Connect</div>
                <div className={classes.MicroSubtitle}>4 in video huddle</div>
              </div>
            </div>
          </div>
          <div className={classes.WorksuiteProgressBar}>
            <div className={classes.WorksuiteProgressTrack}>
              <div className={classes.WorksuiteProgressFill} />
            </div>
            <span className={classes.MicroProgressText}>Unified Workspace: 98% Synchronized</span>
          </div>
        </div>
      );

    case "Mail":
      return (
        <div className={classes.MailPreview}>
          <div className={classes.MicroSearchBar}>
            <SearchMiniIcon />
            <span className={classes.MicroSearchPlaceholder}>Search threads with semantic AI...</span>
          </div>
          <div className={classes.MailItemActive}>
            <span className={classes.MailDotBlue} />
            <div className={classes.MailTextCol}>
              <div className={classes.MicroRowBetween}>
                <span className={classes.MailSender}>Founders Office</span>
                <span className={classes.MailTime}>10:45 AM</span>
              </div>
              <div className={classes.MailSubject}>Q3 Scope Review &amp; Dev Standards</div>
            </div>
            <span className={classes.MailPillBlue}>10 GB</span>
          </div>
          <div className={classes.MailItem}>
            <span className={classes.MailDotGrey} />
            <div className={classes.MailTextCol}>
              <div className={classes.MicroRowBetween}>
                <span className={classes.MailSender}>Cloudflare DNS Edge</span>
                <span className={classes.MailTime}>09:12 AM</span>
              </div>
              <div className={classes.MailSubject}>Custom domain SPF &amp; DKIM verified</div>
            </div>
            <span className={classes.MailPillGreen}>Active</span>
          </div>
        </div>
      );

    case "Calender":
      return (
        <div className={classes.CalendarPreview}>
          <div className={classes.CalendarDaysRow}>
            <div className={classes.CalendarDayItem}>
              <span className={classes.CalendarDayName}>MON</span>
              <span className={classes.CalendarDayNum}>14</span>
            </div>
            <div className={classes.CalendarDayItem}>
              <span className={classes.CalendarDayName}>TUE</span>
              <span className={classes.CalendarDayNum}>15</span>
            </div>
            <div className={`${classes.CalendarDayItem} ${classes.CalendarDayToday}`}>
              <span className={classes.CalendarDayName}>WED</span>
              <span className={classes.CalendarDayNum}>16</span>
            </div>
            <div className={classes.CalendarDayItem}>
              <span className={classes.CalendarDayName}>THU</span>
              <span className={classes.CalendarDayNum}>17</span>
            </div>
            <div className={classes.CalendarDayItem}>
              <span className={classes.CalendarDayName}>FRI</span>
              <span className={classes.CalendarDayNum}>18</span>
            </div>
          </div>
          <div className={classes.CalendarEventsList}>
            <div className={classes.CalendarEventBlue}>
              <span className={classes.CalendarEventDotBlue} />
              <span className={classes.CalendarEventTitle}>STR-104: Payment Gateway Migration</span>
              <span className={classes.CalendarEventTime}>All Day</span>
            </div>
            <div className={classes.CalendarEventIndigo}>
              <span className={classes.CalendarEventDotIndigo} />
              <span className={classes.CalendarEventTitle}>Client UI Review Huddle</span>
              <span className={classes.CalendarEventTime}>2:00 PM</span>
            </div>
          </div>
        </div>
      );

    case "Connect":
      return (
        <div className={classes.ConnectPreview}>
          <div className={classes.ConnectAvatarsRow}>
            <div className={classes.ConnectAvatarCardActive}>
              <div className={classes.ConnectAvatarCircleActive}>GW</div>
              <div className={classes.ConnectAudioWave}>
                <span className={classes.ConnectWaveBar1} />
                <span className={classes.ConnectWaveBar2} />
                <span className={classes.ConnectWaveBar3} />
              </div>
              <span className={classes.ConnectAvatarLabel}>Gowtham (Speaking)</span>
            </div>
            <div className={classes.ConnectAvatarCard}>
              <div className={classes.ConnectAvatarCircle}>BL</div>
              <span className={classes.ConnectAvatarLabel}>Blessing</span>
            </div>
            <div className={classes.ConnectAvatarCard}>
              <div className={classes.ConnectAvatarCircle}>AR</div>
              <span className={classes.ConnectAvatarLabel}>Arun</span>
            </div>
          </div>
          <div className={classes.ConnectChatSnippet}>
            <span className={classes.ConnectChannelTag}>#core-dev</span>
            <span className={classes.ConnectChatMsg}>
              Blessing: &quot;Approved COR #402. AI already generated ticket.&quot;
            </span>
          </div>
        </div>
      );

    case "Streamline":
      return (
        <div className={classes.StreamlinePreview}>
          <div className={classes.KanbanBoard}>
            <div className={classes.KanbanCol}>
              <div className={classes.KanbanColHeader}>
                <span>IN PROGRESS</span>
                <span className={classes.KanbanCount}>2</span>
              </div>
              <div className={classes.KanbanCard}>
                <div className={classes.KanbanCardTitle}>STR-108: Auto-Scope Pipeline</div>
                <div className={classes.MicroRowBetween}>
                  <span className={classes.KanbanTagAi}>AI Core</span>
                  <span className={classes.KanbanPriority}>P1</span>
                </div>
              </div>
            </div>
            <div className={classes.KanbanCol}>
              <div className={classes.KanbanColHeader}>
                <span>DONE</span>
                <span className={classes.KanbanCount}>6</span>
              </div>
              <div className={classes.KanbanCardDone}>
                <div className={classes.KanbanCardTitle}>STR-102: Edge DNS Routing</div>
                <div className={classes.MicroRowBetween}>
                  <span className={classes.KanbanTagDone}>Infra</span>
                  <span className={classes.KanbanCheck}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "Drive":
      return (
        <div className={classes.DrivePreview}>
          <div className={classes.MicroRowBetween}>
            <span className={classes.MicroTextMuted}>2.4 TB Stored • Infinite Retention</span>
            <span className={classes.DriveVaultShield}><ShieldMiniIcon /> AES-256</span>
          </div>
          <div className={classes.DriveFileList}>
            <div className={classes.DriveFileItem}>
              <span className={classes.DriveFileIconPdf}>PDF</span>
              <div className={classes.DriveFileInfo}>
                <span className={classes.DriveFileName}>Vendor_SLA_Master_2026.pdf</span>
                <span className={classes.DriveFileSize}>2.4 MB • Analyzed by Document AI</span>
              </div>
              <span className={classes.DriveAiPill}>AI Summary</span>
            </div>
            <div className={classes.DriveFileItem}>
              <span className={classes.DriveFileIconFolder}><FolderMiniIcon /></span>
              <div className={classes.DriveFileInfo}>
                <span className={classes.DriveFileName}>Engineering Architecture SSOT</span>
                <span className={classes.DriveFileSize}>14 files • Shared with Team</span>
              </div>
              <span className={classes.DriveExpiringPill}>Shared Link</span>
            </div>
          </div>
        </div>
      );

    case "Eoffice":
    default:
      return (
        <div className={classes.EofficePreview}>
          <div className={classes.EofficeHeaderBadge}>
            <span className={classes.EofficePulseDot} />
            <span>Digital HRMS &amp; Attendance Portal</span>
          </div>
          <div className={classes.EofficeCardsRow}>
            <div className={classes.EofficeCard}>
              <span className={classes.EofficeIcon}><ClockIcon /></span>
              <div>
                <div className={classes.MicroTitle}>Attendance</div>
                <div className={classes.MicroSubtitle}>Checked in at 09:30 AM</div>
              </div>
            </div>
            <div className={classes.EofficeCard}>
              <span className={classes.EofficeIcon}><ClipboardCheckIcon width={14} height={14} stroke="#0072C4" /></span>
              <div>
                <div className={classes.MicroTitle}>Leave Balance</div>
                <div className={classes.MicroSubtitle}>18 days available</div>
              </div>
            </div>
          </div>
          <div className={classes.EofficeNoteBanner}>
            <GearMiniIcon />
            <span style={{ marginLeft: 4 }}>Full module in active progress</span>
          </div>
        </div>
      );
  }
};

const Navbar = () => {
  const classes = usestyles();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname || "/";

  // Determine current active product based on the current page route
  const getActiveProduct = () => {
    if (currentPath === "/") {
      return productsList.find((p) => p.path === "/") || productsList[0];
    }
    return (
      productsList.find(
        (p) =>
          p.path !== "/" &&
          (currentPath === p.path ||
            currentPath.startsWith(p.path) ||
            currentPath.includes(p.key.toLowerCase()))
      ) || null
    );
  };

  const currentProduct = getActiveProduct();
  const [previewItem, setPreviewItem] = useState<ProductItem>(
    currentProduct || productsList[0]
  );
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLInputElement>(null);

  // Sync preview item when navigating or opening dropdown
  useEffect(() => {
    const active = getActiveProduct();
    if (active) {
      setPreviewItem(active);
    }
  }, [currentPath, isDropDownOpen]);

  // Handle responsive screen width check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 860);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Click Outside Listener to close dropdown on touch / click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsDropDownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropDownOpen((prev) => !prev);
  };

  const handleProductNavigate = (path: string) => {
    setIsDropDownOpen(false);
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <nav
      className={`${classes.NavBar} ${isMenuOpen ? classes.NavBarOpen : ""
        }`}
      ref={navRef}
    >
      <div className={classes.NavText}>
        <Link href="/" onClick={() => setIsDropDownOpen(false)}>
          <img className={classes.NavBarLogo} src={getSrc(weblingslogo)} alt="Weblings Logo" />
        </Link>

        {/* Desktop Links */}
        <div className={classes.DesktopOnly}>
          <ul className={classes.NavBarLinks}>
            {/* Product with Dropdown */}
            <li className={classes.NavBarItem}>
              <div
                className={`${classes.NavBarLink} ${isDropDownOpen || (currentPath !== "/" && productsList.some((p) => p.path !== "/" && currentPath.startsWith(p.path))) ? classes.ActiveLink : ""
                  }`}
                onClick={toggleDropdown}
                onMouseEnter={() => setIsDropDownOpen(true)}
              >
                <span>Product</span>
                <div
                  className={`${classes.DropdownArrowIcon} ${isDropDownOpen ? classes.ArrowRotated : ""
                    }`}
                >
                  <SvgArrowDropDown />
                </div>
              </div>

              {/* Desktop Dropdown Menu */}
              {isDropDownOpen && (
                <div
                  className={classes.DropdownMenu}
                  onMouseLeave={() => setIsDropDownOpen(false)}
                >
                  {/* Left Column: Product Options */}
                  <div
                    className={classes.SectionOne}
                    onMouseLeave={() => {
                      const active = getActiveProduct();
                      if (active) {
                        setPreviewItem(active);
                      }
                    }}
                  >
                    {productsList.map((product) => {
                      // Only mark as selected if the user has navigated to this page
                      const isCurrentPage = currentProduct?.key === product.key;
                      return (
                        <div
                          key={product.key}
                          className={`${classes.ProductLinkCard} ${isCurrentPage ? classes.ActiveProductCard : ""
                            }`}
                          onMouseEnter={() => setPreviewItem(product)}
                          onClick={() => handleProductNavigate(product.path)}
                        >
                          <div className={classes.ProductItemContent}>
                            <span
                              className={`${classes.ProductIcon} ${isCurrentPage ? classes.ActiveProductIcon : ""
                                }`}
                            >
                              {product.icon}
                            </span>
                            <span
                              className={`${classes.ProductLabel} ${isCurrentPage ? classes.ActiveProductLabel : ""
                                }`}
                            >
                              {product.label}
                            </span>
                          </div>
                          <SvgChevronRight />
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Active Preview Card */}
                  <div className={classes.SectionTwo}>
                    <div className={classes.PreviewHeader}>
                      <span
                        className={classes.PreviewEyebrow}
                        style={{
                          borderColor: `${previewItem.accentColor}33`,
                          backgroundColor: `${previewItem.accentColor}0D`,
                          color: previewItem.accentColor,
                        }}
                      >
                        <span
                          className={classes.PreviewEyebrowDot}
                          style={{ backgroundColor: previewItem.accentColor }}
                        />
                        {previewItem.category}
                      </span>
                      <Typography variant="TS" className={classes.PreviewTitle}>
                        {previewItem.title}
                      </Typography>
                      <Typography variant="BM" className={classes.PreviewDescription}>
                        {previewItem.description}
                      </Typography>
                      <div className={classes.PreviewTagList}>
                        {previewItem.tags.map((tag, idx) => (
                          <span key={idx} className={classes.PreviewTag}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={previewItem.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Miniature App Window */}
                    <div className={classes.MiniWindow}>
                      <div className={classes.MiniWindowHeader}>
                        <div className={classes.MiniWindowDots}>
                          <span className={classes.MiniWindowDotRed} />
                          <span className={classes.MiniWindowDotYellow} />
                          <span className={classes.MiniWindowDotGreen} />
                        </div>
                        <span className={classes.MiniWindowUrl}>{previewItem.url}</span>
                        <span
                          className={classes.MiniWindowBadge}
                          style={{
                            color: previewItem.accentColor,
                            backgroundColor: `${previewItem.accentColor}12`,
                            borderColor: `${previewItem.accentColor}2E`,
                          }}
                        >
                          ● {previewItem.statusBadge}
                        </span>
                      </div>
                      <div className={classes.MiniWindowBody}>
                        <ProductMicroPreview product={previewItem} classes={classes} />
                      </div>
                    </div>

                    <div className={classes.PreviewFooter}>
                      <button
                        type="button"
                        className={classes.PreviewExploreBtn}
                        onClick={() => handleProductNavigate(previewItem.path)}
                      >
                        <span>Explore {previewItem.label}</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                      <span className={classes.PreviewShortcut}>
                        <span>Weblings Suite</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Docs */}
            <li className={classes.NavBarItem}>
              <Link
                href="#"
                className={`${classes.NavBarLink} ${currentPath === "/docs" ? classes.ActiveLink : ""
                  }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                Docs
              </Link>
            </li>

            {/* Pricing */}
            <li className={classes.NavBarItem}>
              <Link
                href="/price"
                className={`${classes.NavBarLink} ${currentPath === "/price" || currentPath === "/workSuite/comparison" ? classes.ActiveLink : ""
                  }`}
                onClick={() => setIsDropDownOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Action Button */}
      <div className={classes.DesktopOnly}>
        <Button element="button" brand onClick={() => router.push("/contact")}>
          Try Now
        </Button>
      </div>

      {/* Mobile Screen Hamburger Toggle */}
      <div className={classes.MobileOnly}>
        <button
          className={classes.MobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <SvgMenu />
        </button>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {isMenuOpen && (
        <div className={`${classes.MobileDrawer} ${classes.MobileOnly}`}>
          <div className={classes.MobileNavItem}>
            <div
              className={classes.MobileNavLink}
              onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
            >
              <span>Product</span>
              <div
                className={`${classes.DropdownArrowIcon} ${isMobileProductOpen ? classes.ArrowRotated : ""
                  }`}
              >
                <SvgArrowDropDown />
              </div>
            </div>

            {/* Expanded Product Accordion in Mobile Drawer */}
            {isMobileProductOpen && (
              <div className={classes.MobileAccordion}>
                {productsList.map((product) => (
                  <div
                    key={product.key}
                    className={classes.MobileAccordionItem}
                    onClick={() => handleProductNavigate(product.path)}
                  >
                    <span>{product.icon}</span>
                    <span>{product.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={classes.MobileNavItem}>
            <Link
              href="#"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
          </div>

          <div className={classes.MobileNavItem}>
            <Link
              href="/price"
              className={classes.MobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          <div className={classes.MobileActionWrapper}>
            <Button
              element="button"
              brand
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
              }}
            >
              Try Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
