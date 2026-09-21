'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import { WeblogoIcon, BellAlertIcon } from '../../assets/icons_component';

interface WorkItem {
  id: string;
  type: 'epic' | 'task' | 'story' | 'bug';
  key: string;
  title: string;
  depth: number;
  hasChildren?: boolean;
  isExpanded?: boolean;
  parentId?: string;
  gantt?: {
    month: 'August' | 'September' | 'October' | 'November';
    startDate: string;
    endDate: string;
    duration: string;
  };
}

interface BacklogItem {
  id: string;
  type: 'task' | 'story' | 'bug';
  key: string;
  title: string;
  epic: string;
  status: 'TO DO' | 'IN PROGRESS' | 'IN REVIEW' | 'DONE';
  checked: boolean;
}

interface MemberItem {
  id: string;
  name: string;
  email: string;
  dateAdded: string;
  avatarColor: string;
  initials: string;
}

interface StatusItem {
  id: string;
  name: string;
}

interface PriorityItem {
  id: string;
  name: string;
  color: string;
}

interface TagItem {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface IssueTypeItem {
  id: string;
  name: string;
  letter: string;
  bgColor: string;
}

export interface StreamlineMockupProps {
  embedded?: boolean;
}

export const StreamlineMockup: React.FC<StreamlineMockupProps> = ({ embedded = false }) => {
  const classes = useStyles();

  // Active top-level view tab
  const [activeTab, setActiveTab] = useState<'timeline' | 'backlog' | 'sprint' | 'board' | 'members' | 'settings'>('timeline');

  // Members View State
  const [memberSearchQuery, setMemberSearchQuery] = useState<string>('');
  const [showNewMemberPopover, setShowNewMemberPopover] = useState<boolean>(false);
  const [newMemberTab, setNewMemberTab] = useState<'invite' | 'add'>('invite');
  const [inviteEmail, setInviteEmail] = useState<string>('');
  const [inviteRole, setInviteRole] = useState<string>('Member');
  const [addName, setAddName] = useState<string>('');
  const [addEmail, setAddEmail] = useState<string>('');
  const [inviteFeedback, setInviteFeedback] = useState<string | null>(null);

  const [membersList, setMembersList] = useState<MemberItem[]>([
    { id: 'm-1', name: 'Sara Cruz', email: 'sara.cruz@example.com', dateAdded: '21 Sep, 2020', avatarColor: '#0D9488', initials: 'SC' },
    { id: 'm-2', name: 'Felicia Reid', email: 'felicia.reid@example.com', dateAdded: '22 Oct, 2020', avatarColor: '#0284C7', initials: 'FR' },
    { id: 'm-3', name: 'Michael Mitchell', email: 'michael.mitc@example.com', dateAdded: '1 Feb, 2020', avatarColor: '#6366F1', initials: 'MM' },
    { id: 'm-4', name: 'Jessica Hanson', email: 'jessica.hanson@example.com', dateAdded: '24 May, 2020', avatarColor: '#EC4899', initials: 'JH' },
    { id: 'm-5', name: 'Michelle Rivera', email: 'michelle.rivera@example.com', dateAdded: '22 Oct, 2020', avatarColor: '#F59E0B', initials: 'MR' },
    { id: 'm-6', name: 'Nevaeh Simmons', email: 'nevaeh.simmons@example.com', dateAdded: '17 Oct, 2020', avatarColor: '#10B981', initials: 'NS' },
    { id: 'm-7', name: 'Jackson Graham', email: 'jackson.graham@example.com', dateAdded: '8 Sep, 2020', avatarColor: '#8B5CF6', initials: 'JG' },
  ]);

  // Settings View State (4 Operations: Status, Priority, Tags, Issues Type)
  const [settingsTab, setSettingsTab] = useState<'status' | 'priority' | 'tags' | 'issues'>('status');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const [statusList, setStatusList] = useState<StatusItem[]>([
    { id: 'st-1', name: 'TO DO' },
    { id: 'st-2', name: 'TO DO' },
    { id: 'st-3', name: 'TO DO' },
    { id: 'st-4', name: 'TO DO' },
    { id: 'st-5', name: 'TO DO' },
  ]);

  const [priorityList, setPriorityList] = useState<PriorityItem[]>([
    { id: 'pr-1', name: 'Urgent', color: '#EF4444' },
    { id: 'pr-2', name: 'High', color: '#D97706' },
    { id: 'pr-3', name: 'Normal', color: '#0072C4' },
    { id: 'pr-4', name: 'Low', color: '#64748B' },
  ]);

  const [tagList, setTagList] = useState<TagItem[]>([
    { id: 'tg-1', name: 'Tag', bgColor: '#EFF6FF', textColor: '#0284C7', borderColor: '#BAE6FD' },
    { id: 'tg-2', name: 'Tag', bgColor: '#FDF2F8', textColor: '#DB2777', borderColor: '#FBCFE8' },
    { id: 'tg-3', name: 'Tag', bgColor: '#FDF2F8', textColor: '#DB2777', borderColor: '#FBCFE8' },
    { id: 'tg-4', name: 'Tag', bgColor: '#FDF2F8', textColor: '#DB2777', borderColor: '#FBCFE8' },
  ]);

  const [issueTypeList, setIssueTypeList] = useState<IssueTypeItem[]>([
    { id: 'it-1', name: 'Epic', letter: 'E', bgColor: '#9333EA' },
    { id: 'it-2', name: 'Story', letter: 'S', bgColor: '#16A34A' },
    { id: 'it-3', name: 'Task', letter: 'T', bgColor: '#0072C4' },
    { id: 'it-4', name: 'Bug', letter: 'B', bgColor: '#DC2626' },
  ]);

  // Handlers for Members and Settings
  const handleRemoveMember = (id: string) => {
    setMembersList((prev) => prev.filter((m) => m.id !== id));
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    const namePart = inviteEmail.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    setMembersList((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        name: formattedName,
        email: inviteEmail.trim(),
        dateAdded: 'Today',
        avatarColor: '#0072C4',
        initials: formattedName.slice(0, 2).toUpperCase(),
      },
    ]);
    setInviteEmail('');
    setInviteFeedback('Invite sent successfully!');
    setTimeout(() => {
      setInviteFeedback(null);
      setShowNewMemberPopover(false);
    }, 1200);
  };

  const handleAddMemberDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addName.trim() || !addEmail.trim()) return;
    setMembersList((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        name: addName.trim(),
        email: addEmail.trim(),
        dateAdded: 'Today',
        avatarColor: '#0D9488',
        initials: addName.slice(0, 2).toUpperCase(),
      },
    ]);
    setAddName('');
    setAddEmail('');
    setShowNewMemberPopover(false);
  };

  const handleNewStatus = () => {
    setStatusList((prev) => [...prev, { id: `st-${Date.now()}`, name: 'NEW STATUS' }]);
  };

  const handleNewPriority = () => {
    setPriorityList((prev) => [...prev, { id: `pr-${Date.now()}`, name: 'Custom', color: '#8B5CF6' }]);
  };

  const handleNewTag = () => {
    setTagList((prev) => [...prev, { id: `tg-${Date.now()}`, name: 'Tag', bgColor: '#F0FDF4', textColor: '#16A34A', borderColor: '#BBF7D0' }]);
  };

  const handleNewIssueType = () => {
    setIssueTypeList((prev) => [...prev, { id: `it-${Date.now()}`, name: 'Feature', letter: 'F', bgColor: '#F59E0B' }]);
  };

  const handleDeleteItem = (type: 'status' | 'priority' | 'tags' | 'issues', id: string) => {
    if (type === 'status') setStatusList((prev) => prev.filter((i) => i.id !== id));
    if (type === 'priority') setPriorityList((prev) => prev.filter((i) => i.id !== id));
    if (type === 'tags') setTagList((prev) => prev.filter((i) => i.id !== id));
    if (type === 'issues') setIssueTypeList((prev) => prev.filter((i) => i.id !== id));
    setActiveMenuId(null);
  };

  const filteredMembers = membersList.filter(
    (m) =>
      m.name.toLowerCase().includes(memberSearchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(memberSearchQuery.toLowerCase())
  );

  // View mode switcher in timeline
  const [viewMode, setViewMode] = useState<'today' | 'week' | 'month' | 'quarter'>('month');

  // Search filter query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Expand / collapse state for tree rows in Timeline
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'row-1': true,
    'row-2': false,
    'row-3': true,
    'row-3-1': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Work items for Timeline view with realistic mock data (no PRJ Key / Title)
  const initialItems: WorkItem[] = [
    {
      id: 'row-1',
      type: 'epic',
      key: 'STR-E01',
      title: 'Authentication & Tenant Identity',
      depth: 0,
      hasChildren: true,
    },
    {
      id: 'row-1-1',
      parentId: 'row-1',
      type: 'task',
      key: 'STR-102',
      title: 'OAuth2 PKCE token exchange implementation',
      depth: 1,
    },
    {
      id: 'row-2',
      type: 'epic',
      key: 'STR-E02',
      title: 'Real-Time Collaboration Canvas',
      depth: 0,
      hasChildren: true,
      gantt: {
        month: 'September',
        startDate: '08/09/2026',
        endDate: '20/09/2026',
        duration: '12d',
      },
    },
    {
      id: 'row-3',
      type: 'epic',
      key: 'STR-E03',
      title: 'Scope-to-Sprint AI Pipeline',
      depth: 0,
      hasChildren: true,
    },
    {
      id: 'row-3-1',
      parentId: 'row-3',
      type: 'story',
      key: 'STR-105',
      title: 'Speech-to-text ticket extraction parser',
      depth: 1,
      hasChildren: true,
    },
    {
      id: 'row-3-1-1',
      parentId: 'row-3-1',
      type: 'bug',
      key: 'STR-108',
      title: 'Fix token truncation on audio payloads over 25MB',
      depth: 2,
    },
    {
      id: 'row-4',
      type: 'epic',
      key: 'STR-E04',
      title: 'Semantic Vector Search Index',
      depth: 0,
    },
    {
      id: 'row-5',
      type: 'epic',
      key: 'STR-E05',
      title: 'External Guest Access & Permissions',
      depth: 0,
    },
    {
      id: 'row-6',
      type: 'epic',
      key: 'STR-E06',
      title: 'Cryptographic Audit Trail Engine',
      depth: 0,
    },
    {
      id: 'row-7',
      type: 'epic',
      key: 'STR-E07',
      title: 'Mobile iOS & Android Hybrid Sync',
      depth: 0,
    },
  ];

  // Backlogs mock data (8 issues) with realistic keys & titles
  const [backlogList, setBacklogList] = useState<BacklogItem[]>([
    { id: 'b-1', type: 'task', key: 'STR-101', title: 'Implement OAuth2 Single Sign-On flow', epic: 'Auth & Security', status: 'TO DO', checked: false },
    { id: 'b-2', type: 'task', key: 'STR-102', title: 'SAML 2.0 XML metadata generation service', epic: 'Enterprise SSO', status: 'TO DO', checked: false },
    { id: 'b-3', type: 'story', key: 'STR-103', title: 'Multi-factor authentication with TOTP', epic: 'Auth & Security', status: 'TO DO', checked: false },
    { id: 'b-4', type: 'task', key: 'STR-104', title: 'Rate limiter middleware for login endpoints', epic: 'API Security', status: 'TO DO', checked: false },
    { id: 'b-5', type: 'bug', key: 'STR-105', title: 'Session token expiry race condition on tab focus', epic: 'Auth & Security', status: 'TO DO', checked: false },
    { id: 'b-6', type: 'task', key: 'STR-106', title: 'Tenant workspace subdomain routing & SSL', epic: 'Multi-tenancy', status: 'TO DO', checked: false },
    { id: 'b-7', type: 'story', key: 'STR-107', title: 'Role-based access control matrix UI', epic: 'Permissions', status: 'TO DO', checked: false },
    { id: 'b-8', type: 'task', key: 'STR-108', title: 'Audit log event emission for login failures', epic: 'Security & Audit', status: 'TO DO', checked: false },
  ]);

  // Sprint 2 mock data (8 issues) with realistic keys & titles
  const [sprint2List, setSprint2List] = useState<BacklogItem[]>([
    { id: 's2-1', type: 'task', key: 'STR-109', title: 'Real-time collaborative canvas sync', epic: 'Architecture', status: 'TO DO', checked: false },
    { id: 's2-2', type: 'task', key: 'STR-110', title: 'Database migration for encrypted fields', epic: 'Database', status: 'TO DO', checked: false },
    { id: 's2-3', type: 'story', key: 'STR-111', title: 'Multi-tenant workspace isolation rules', epic: 'Core Security', status: 'IN PROGRESS', checked: false },
    { id: 's2-4', type: 'bug', key: 'STR-112', title: 'Memory leak in WebSocket client stream', epic: 'Performance', status: 'IN REVIEW', checked: false },
    { id: 's2-5', type: 'task', key: 'STR-113', title: 'SAML 2.0 XML metadata service integration', epic: 'Enterprise SSO', status: 'TO DO', checked: false },
    { id: 's2-6', type: 'task', key: 'STR-114', title: 'Automated burndown metrics and export', epic: 'Reporting', status: 'DONE', checked: true },
    { id: 's2-7', type: 'story', key: 'STR-115', title: 'Webhook delivery retries with backoff', epic: 'Webhooks', status: 'TO DO', checked: false },
    { id: 's2-8', type: 'bug', key: 'STR-116', title: 'Cursor offset mismatch on high-DPI displays', epic: 'Frontend', status: 'TO DO', checked: false },
  ]);

  // Sprint 1 mock data (8 issues)
  const [sprint1List, setSprint1List] = useState<BacklogItem[]>([
    { id: 's1-1', type: 'task', key: 'STR-91', title: 'Initial repository scaffold & architecture', epic: 'Infrastructure', status: 'DONE', checked: true },
    { id: 's1-2', type: 'task', key: 'STR-92', title: 'CI/CD pipeline configuration with automated tests', epic: 'DevOps', status: 'DONE', checked: true },
    { id: 's1-3', type: 'task', key: 'STR-93', title: 'PostgreSQL database cluster setup & replication', epic: 'Database', status: 'DONE', checked: true },
    { id: 's1-4', type: 'task', key: 'STR-94', title: 'Redis cluster setup for session caching', epic: 'Infrastructure', status: 'DONE', checked: true },
    { id: 's1-5', type: 'story', key: 'STR-95', title: 'Core design system tokens & component library', epic: 'Design System', status: 'DONE', checked: true },
    { id: 's1-6', type: 'task', key: 'STR-96', title: 'User authentication baseline & hashing', epic: 'Auth & Security', status: 'DONE', checked: true },
    { id: 's1-7', type: 'task', key: 'STR-97', title: 'REST API gateway & request validation layer', epic: 'API Gateway', status: 'DONE', checked: true },
    { id: 's1-8', type: 'bug', key: 'STR-98', title: 'Fix liveness probe timeout under cold start', epic: 'Monitoring', status: 'DONE', checked: true },
  ]);

  // Sprint Accordion expand/collapse states
  const [sprint1Expanded, setSprint1Expanded] = useState<boolean>(false);
  const [sprint2Expanded, setSprint2Expanded] = useState<boolean>(true);

  // Show Sprint Dropdown state (open like the screenshot)
  const [showSprintDropdown, setShowSprintDropdown] = useState<boolean>(true);
  const [sprintSelection, setSprintSelection] = useState({
    all: true,
    sprint1: true,
    sprint2: true,
  });

  const toggleSprintCheckbox = (key: 'all' | 'sprint1' | 'sprint2') => {
    if (key === 'all') {
      const next = !sprintSelection.all;
      setSprintSelection({ all: next, sprint1: next, sprint2: next });
    } else {
      const updated = { ...sprintSelection, [key]: !sprintSelection[key] };
      updated.all = updated.sprint1 && updated.sprint2;
      setSprintSelection(updated);
    }
  };

  const toggleBacklogCheck = (id: string) => {
    setBacklogList((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const toggleSprint2Check = (id: string) => {
    setSprint2List((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const toggleSprint1Check = (id: string) => {
    setSprint1List((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  // Filter items for Timeline view
  const visibleItems = initialItems.filter((item) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.key.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    }
    if (item.parentId) {
      if (!expandedIds[item.parentId]) return false;
      const parent = initialItems.find((p) => p.id === item.parentId);
      if (parent?.parentId && !expandedIds[parent.parentId]) return false;
    }
    return true;
  });

  // Filter backlog & sprint items by search query
  const filteredBacklogs = backlogList.filter(
    (item) =>
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.epic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSprint2 = sprint2List.filter(
    (item) =>
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.epic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSprint1 = sprint1List.filter(
    (item) =>
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.epic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBadge = (type: WorkItem['type']) => {
    switch (type) {
      case 'epic':
        return <span className={classes.badgeEpic}>E</span>;
      case 'task':
        return <span className={classes.badgeTask}>T</span>;
      case 'story':
        return <span className={classes.badgeStory}>S</span>;
      case 'bug':
        return <span className={classes.badgeBug}>B</span>;
    }
  };

  const renderIssueRow = (item: BacklogItem, onToggle: (id: string) => void) => (
    <div key={item.id} className={classes.issueItemRow}>
      <div className={classes.issueItemLeft}>
        <input
          type="checkbox"
          className={classes.issueCheckbox}
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        {item.type === 'task' && <span className={classes.badgeTask}>T</span>}
        {item.type === 'story' && <span className={classes.badgeStory}>S</span>}
        {item.type === 'bug' && <span className={classes.badgeBug}>B</span>}
        <span className={classes.issueKeyText}>{item.key}</span>
        <span className={classes.issueTitleText} title={item.title}>
          {item.title}
        </span>
      </div>
      <div className={classes.issueItemRight}>
        <div className={classes.epicPill}>
          <span className={classes.epicMiniBadge}>E</span>
          <span>{item.epic}</span>
        </div>
        <button className={classes.statusPill} title="Change status">
          <span>{item.status}</span>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );

  // Sprints Pane component (reused in both Backlog two-pane and Sprint full-width views)
  const renderSprintsPane = (isFullWidth: boolean = false) => (
    <div className={classes.paneCard} style={{ width: isFullWidth ? '100%' : 'auto' }}>
      {/* Sprints Header Row */}
      <div className={classes.paneHeaderRow}>
        <div className={classes.paneHeaderLeft}>
          <input
            type="checkbox"
            className={classes.issueCheckbox}
            checked={sprint2List.every((i) => i.checked)}
            onChange={() => {
              const allChecked = sprint2List.every((i) => i.checked);
              setSprint2List((prev) => prev.map((i) => ({ ...i, checked: !allChecked })));
            }}
          />
          <span>Sprints</span>
          <span className={classes.paneHeaderCount}>
            ({(sprintSelection.sprint1 ? 1 : 0) + (sprintSelection.sprint2 ? 1 : 0)})
          </span>
        </div>

        <div className={classes.paneHeaderRight}>
          {/* Show sprint dropdown toggle */}
          <button
            className={classes.filterDropdownBtn}
            onClick={() => setShowSprintDropdown(!showSprintDropdown)}
            title="Filter visible sprints"
          >
            <span>Show sprint</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Show sprint popup menu */}
          {showSprintDropdown && (
            <div className={classes.showSprintDropdownMenu}>
              <label className={classes.showSprintMenuItem}>
                <input
                  type="checkbox"
                  checked={sprintSelection.all}
                  onChange={() => toggleSprintCheckbox('all')}
                  className={classes.issueCheckbox}
                />
                <span>All</span>
              </label>
              <label className={classes.showSprintMenuItem}>
                <input
                  type="checkbox"
                  checked={sprintSelection.sprint1}
                  onChange={() => toggleSprintCheckbox('sprint1')}
                  className={classes.issueCheckbox}
                />
                <span>Sprint 1</span>
              </label>
              <label className={classes.showSprintMenuItem}>
                <input
                  type="checkbox"
                  checked={sprintSelection.sprint2}
                  onChange={() => toggleSprintCheckbox('sprint2')}
                  className={classes.issueCheckbox}
                />
                <span>Sprint 2</span>
              </label>
            </div>
          )}

          {/* New Sprint Button */}
          <button className={classes.paneActionLink}>New Sprint</button>

          {/* Expand icon button */}
          <button className={classes.paneIconBtn} title="Expand View">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sprints Accordion List */}
      <div className={classes.sprintAccordion}>
        {/* Sprint 1 Accordion Item */}
        {sprintSelection.sprint1 && (
          <div>
            <div
              className={classes.sprintHeaderBox}
              onClick={() => setSprint1Expanded(!sprint1Expanded)}
            >
              <div className={classes.sprintHeaderTitleRow}>
                <input
                  type="checkbox"
                  className={classes.issueCheckbox}
                  onClick={(e) => e.stopPropagation()}
                  checked={sprint1List.every((i) => i.checked)}
                  onChange={() => {
                    const allChecked = sprint1List.every((i) => i.checked);
                    setSprint1List((prev) => prev.map((i) => ({ ...i, checked: !allChecked })));
                  }}
                />
                <button className={classes.sprintChevronBtn}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ transform: sprint1Expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s ease' }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <span>Sprint 1</span>
                <span className={classes.sprintMetaText}>({filteredSprint1.length} issues) Dec 11 - Dec 24</span>
              </div>

              <div className={classes.sprintActionGroup} onClick={(e) => e.stopPropagation()}>
                <button className={classes.sprintGhostBtn}>Complete Sprint</button>
                <button className={classes.paneIconBtn} title="Sprint Options">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sprint 1 Issues List (Collapsible) */}
            {sprint1Expanded && (
              <div className={classes.issuesList} style={{ marginTop: 8 }}>
                {filteredSprint1.map((item) => renderIssueRow(item, toggleSprint1Check))}
              </div>
            )}
          </div>
        )}

        {/* Sprint 2 Accordion Item (Expanded by default as in screenshot) */}
        {sprintSelection.sprint2 && (
          <div>
            <div
              className={classes.sprintHeaderBox}
              onClick={() => setSprint2Expanded(!sprint2Expanded)}
            >
              <div className={classes.sprintHeaderTitleRow}>
                <input
                  type="checkbox"
                  className={classes.issueCheckbox}
                  onClick={(e) => e.stopPropagation()}
                  checked={sprint2List.every((i) => i.checked)}
                  onChange={() => {
                    const allChecked = sprint2List.every((i) => i.checked);
                    setSprint2List((prev) => prev.map((i) => ({ ...i, checked: !allChecked })));
                  }}
                />
                <button className={classes.sprintChevronBtn}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ transform: sprint2Expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s ease' }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <span>Sprint 2</span>
                <span className={classes.sprintMetaText}>({filteredSprint2.length} issues) Dec 11 - Dec 24</span>
              </div>

              <div className={classes.sprintActionGroup} onClick={(e) => e.stopPropagation()}>
                <button className={classes.sprintGhostBtn}>Complete Sprint</button>
                <button className={classes.paneIconBtn} title="Sprint Options">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sprint 2 Issues List (Expanded by default as shown in screenshot) */}
            {sprint2Expanded && (
              <div className={classes.issuesList} style={{ marginTop: 8 }}>
                {filteredSprint2.map((item) => renderIssueRow(item, toggleSprint2Check))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={embedded ? classes.mockupFrameEmbedded : classes.mockupFrame}>
      {/* ─────────────────────────────────────────────────────────────
         TOP APPLICATION BAR
         ───────────────────────────────────────────────────────────── */}
      {!embedded && (
        <header className={classes.topBar}>
          <div className={classes.topBarLeft}>
            <WeblogoIcon width={24} height={24} />
          </div>

          <div className={classes.topBarRight}>
            {/* Notification Bell with interactive alert animation */}
            <button className={classes.bellBtn} title="Notifications">
              <BellAlertIcon width={20} height={20} />
            </button>

            {/* User Profile Circle A */}
            <div className={classes.topProfileAvatar} title="Account: Alex Smith">
              <span>A</span>
            </div>
          </div>
        </header>
      )}

      {/* ─────────────────────────────────────────────────────────────
         MAIN WORKSPACE: DUAL LEFT RAILS + STAGE
         ───────────────────────────────────────────────────────────── */}
      <div className={classes.mainBody}>
        {/* OUTER SUITE RAIL (Leftmost) */}
        {!embedded && (
          <aside className={classes.outerRail}>
            {/* Collapse Chevron Button */}
            <button className={classes.railCollapseBtn} title="Collapse Rail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* User Circle A in light blue */}
            <div className={classes.railAvatarCircle} title="Workspace: Alpha">
              <span>A</span>
            </div>

            {/* Suite Icons with interactive hover animations */}
            {/* Briefcase */}
            <div className={classes.railItem} title="eOffice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>

            {/* Megaphone / Announcements */}
            <div className={classes.railItem} title="Announcements">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.6 16.8L3 13V7l8.6-3.8A1 1 0 0 1 13 4.1v11.8a1 1 0 0 1-1.4.9z" />
                <path d="M13 8c1.5 0 3 1.5 3 3s-1.5 3-3 3" />
              </svg>
            </div>

            {/* Diagram / Split */}
            <div className={classes.railItem} title="Architecture">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>

            {/* Mail */}
            <div className={classes.railItem} title="Mail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            {/* Chat (Active with Left Blue Bar) */}
            <div className={classes.railItemActive} title="Team Chat (Active)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            {/* Calendar */}
            <div className={classes.railItem} title="Calendar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Settings */}
            <div className={classes.railItem} title="Settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>

            {/* Help ? */}
            <div className={classes.railItem} title="Help & Support">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
          </aside>
        )}

        {/* INNER SECONDARY RAIL (Project shortcuts) */}
        <aside className={classes.innerRail}>
          {/* Collapse Chevron Button */}
          <button className={classes.railCollapseBtn} title="Collapse Secondary Rail">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* User Circle A */}
          <div className={classes.railAvatarCircle} title="Project Lead">
            <span>A</span>
          </div>

          {/* Briefcase */}
          <div className={classes.railItem} title="Project Docs">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>

          {/* Mail */}
          <div className={classes.railItem} title="Project Emails">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          {/* Chat */}
          <div className={classes.railItem} title="Project Channel">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          {/* Calendar */}
          <div className={classes.railItem} title="Project Milestones">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Settings */}
          <div className={classes.railItem} title="Project Settings">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>

          {/* Help ? */}
          <div className={classes.railItem} title="Help">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────────────────────
           CENTER STAGE
           ───────────────────────────────────────────────────────────── */}
        <main className={classes.stageContent}>
          {/* PROJECT HEADER & TABS */}
          <div className={classes.projectHeaderBar}>
            {/* Top row: Breadcrumb + Create button */}
            <div className={classes.headerTopRow}>
              <div className={classes.breadcrumb}>
                <span className={classes.breadcrumbLink}>Projects</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span className={classes.breadcrumbCurrent}>Project name</span>
              </div>
              <button className={classes.createBtn}>Create</button>
            </div>

            {/* Horizontal Tabs Row */}
            <div className={classes.tabsRow}>
              {/* Timeline */}
              <button
                className={activeTab === 'timeline' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('timeline')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Timeline</span>
              </button>

              {/* Backlogs (Active tab matching user screenshot) */}
              <button
                className={activeTab === 'backlog' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('backlog')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                <span>Backlogs</span>
              </button>

              {/* Sprint */}
              <button
                className={activeTab === 'sprint' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('sprint')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
                <span>Sprint</span>
              </button>

              {/* Board */}
              <button
                className={activeTab === 'board' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('board')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                </svg>
                <span>Board</span>
              </button>

              {/* Members */}
              <button
                className={activeTab === 'members' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('members')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Members</span>
              </button>

              {/* Settings */}
              <button
                className={activeTab === 'settings' ? classes.tabBtnActive : classes.tabBtn}
                onClick={() => setActiveTab('settings')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* FILTER BAR FOR BACKLOGS AND SPRINTS */}
          {(activeTab === 'backlog' || activeTab === 'sprint') && (
            <div className={classes.filterBarRow}>
              <div className={classes.filterSearchBox}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search task, story or Epic"
                  className={classes.filterSearchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className={classes.filterSelectGroup}>
                <button className={classes.filterDropdownBtn}>
                  <span>Epic</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <button className={classes.filterDropdownBtn}>
                  <span>Priority</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <button className={classes.filterDropdownBtn}>
                  <span>Tag</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
             TAB CONTENT RENDERER
             ───────────────────────────────────────────────────────────── */}
          {activeTab === 'backlog' ? (
            /* BACKLOGS VIEW: TWO COLUMNS (BACKLOGS + SPRINTS) */
            <div className={classes.backlogSplitLayout}>
              {/* LEFT PANE: Backlogs (8 issues) */}
              <div className={classes.paneCard}>
                <div className={classes.paneHeaderRow}>
                  <div className={classes.paneHeaderLeft}>
                    <input
                      type="checkbox"
                      className={classes.issueCheckbox}
                      checked={backlogList.every((i) => i.checked)}
                      onChange={() => {
                        const allChecked = backlogList.every((i) => i.checked);
                        setBacklogList((prev) => prev.map((i) => ({ ...i, checked: !allChecked })));
                      }}
                    />
                    <span>Backlogs</span>
                    <span className={classes.paneHeaderCount}>({filteredBacklogs.length} issues)</span>
                  </div>

                  <div className={classes.paneHeaderRight}>
                    <button className={classes.paneActionLink}>Create Sprint</button>
                    <button className={classes.paneIconBtn} title="Expand Pane">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Backlog Issues List */}
                <div className={classes.issuesList}>
                  {filteredBacklogs.map((item) => renderIssueRow(item, toggleBacklogCheck))}
                </div>

                {/* Create Issue Row Link */}
                <button className={classes.createIssueRowBtn}>
                  <span>+</span>
                  <span>Create issue</span>
                </button>
              </div>

              {/* RIGHT PANE: Sprints (2) */}
              {renderSprintsPane(false)}
            </div>
          ) : activeTab === 'sprint' ? (
            /* SPRINT VIEW: SINGLE FULL-WIDTH COLUMN (WITHOUT BACKLOG) */
            <div className={classes.sprintFullLayout}>
              {renderSprintsPane(true)}
            </div>
          ) : activeTab === 'timeline' ? (
            /* TIMELINE / GANTT ROADMAP CARD */
            <div className={classes.timelineCard}>
              <div className={classes.timelineCardHeader}>
                <div className={classes.timelineTitleArea}>
                  <h3 className={classes.timelineHeading}>Timeline</h3>

                  <div className={classes.searchInputWrapper}>
                    <span className={classes.searchIcon}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search Timeline"
                      className={classes.searchInput}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className={classes.viewModeSwitcher}>
                  <button
                    className={viewMode === 'today' ? classes.viewModeBtnActive : classes.viewModeBtn}
                    onClick={() => setViewMode('today')}
                  >
                    Today
                  </button>
                  <button
                    className={viewMode === 'week' ? classes.viewModeBtnActive : classes.viewModeBtn}
                    onClick={() => setViewMode('week')}
                  >
                    Week
                  </button>
                  <button
                    className={viewMode === 'month' ? classes.viewModeBtnActive : classes.viewModeBtn}
                    onClick={() => setViewMode('month')}
                  >
                    Month
                  </button>
                  <button
                    className={viewMode === 'quarter' ? classes.viewModeBtnActive : classes.viewModeBtn}
                    onClick={() => setViewMode('quarter')}
                  >
                    Quater
                  </button>
                </div>
              </div>

              <div className={classes.ganttContainer}>
                <div className={classes.todayHandle} />
                <div className={classes.todayLine} />

                <table className={classes.ganttTable}>
                  <thead>
                    <tr className={classes.ganttHeaderRow}>
                      <th className={classes.ganttTreeHeaderCol}>Work items</th>
                      <th className={classes.ganttMonthCol}>August</th>
                      <th className={classes.ganttMonthColCurrent}>September</th>
                      <th className={classes.ganttMonthCol}>October</th>
                      <th className={classes.ganttMonthCol}>November</th>
                    </tr>
                  </thead>

                  <tbody>
                    {visibleItems.map((item) => {
                      const paddingLeft = 14 + item.depth * 20;

                      return (
                        <tr key={item.id} className={classes.ganttRow}>
                          <td className={classes.ganttTreeCell}>
                            <div className={classes.ganttCellContent} style={{ paddingLeft }}>
                              {item.hasChildren ? (
                                <button
                                  className={classes.expandChevron}
                                  onClick={() => toggleExpand(item.id)}
                                  title={expandedIds[item.id] ? 'Collapse' : 'Expand'}
                                >
                                  {expandedIds[item.id] ? (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  ) : (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                  )}
                                </button>
                              ) : (
                                <div className={classes.chevronPlaceholder} />
                              )}

                              {renderBadge(item.type)}

                              <span className={classes.itemTitle}>
                                <span className={classes.itemKey}>{item.key}</span>
                                {item.title}
                              </span>
                            </div>
                          </td>

                          <td className={classes.ganttMonthCell} />

                          <td className={classes.ganttMonthCellCurrent}>
                            {item.gantt && (
                              <div className={classes.ganttBarWrapper}>
                                <span className={classes.dateLabel}>{item.gantt.startDate}</span>
                                <div className={classes.ganttBar} title={`${item.title} (${item.gantt.duration})`}>
                                  <div className={classes.ganttBarHandleLeft} />
                                  <div className={classes.ganttBarHandleRight} />
                                </div>
                                <span className={classes.durationPill}>{item.gantt.duration}</span>
                              </div>
                            )}
                          </td>

                          <td className={classes.ganttMonthCell} />
                          <td className={classes.ganttMonthCell} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : activeTab === 'board' ? (
            /* KANBAN BOARD VIEW */
            <div className={classes.kanbanArea}>
              <div className={classes.kanbanCol}>
                <div className={classes.kanbanColHeader}>
                  <span>To Do</span>
                  <span className={classes.tabCountBadge}>{filteredBacklogs.length}</span>
                </div>
                <div className={classes.kanbanCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className={classes.badgeTask}>T</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B' }}>STR-101</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>OAuth2 Single Sign-On flow</div>
                </div>
                <div className={classes.kanbanCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className={classes.badgeTask}>T</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B' }}>STR-104</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>Rate limiter middleware</div>
                </div>
              </div>

              <div className={classes.kanbanCol}>
                <div className={classes.kanbanColHeader}>
                  <span>In Progress</span>
                  <span className={classes.tabCountBadge}>2</span>
                </div>
                <div className={classes.kanbanCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className={classes.badgeStory}>S</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B' }}>STR-111</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>Multi-tenant workspace isolation</div>
                </div>
              </div>

              <div className={classes.kanbanCol}>
                <div className={classes.kanbanColHeader}>
                  <span>Review</span>
                  <span className={classes.tabCountBadge}>1</span>
                </div>
                <div className={classes.kanbanCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className={classes.badgeBug}>B</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B' }}>STR-112</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>Memory leak in WebSocket client stream</div>
                </div>
              </div>

              <div className={classes.kanbanCol}>
                <div className={classes.kanbanColHeader}>
                  <span>Done</span>
                  <span className={classes.tabCountBadge}>8</span>
                </div>
                <div className={classes.kanbanCard} style={{ opacity: 0.85 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className={classes.badgeTask}>T</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A' }}>STR-114 ✓</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', textDecoration: 'line-through' }}>
                    Automated burndown metrics and export
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'members' ? (
            /* ─────────────────────────────────────────────────────────────
               MEMBERS VIEW (MATCHING USER IMAGE 1)
               ───────────────────────────────────────────────────────────── */
            <div className={classes.membersContainer}>
              {/* Header with Title and '+ New member' popover */}
              <div className={classes.membersHeaderRow}>
                <h2 className={classes.membersTitle}>Members</h2>

                <div style={{ position: 'relative' }}>
                  <button
                    className={classes.newMemberBtn}
                    onClick={() => setShowNewMemberPopover(!showNewMemberPopover)}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="17" y1="11" x2="23" y2="11" />
                    </svg>
                    <span>New member</span>
                  </button>

                  {/* Popover displaying 'Invite member' and 'Add member' tabs */}
                  {showNewMemberPopover && (
                    <div className={classes.newMemberPopover}>
                      <div className={classes.popoverNavRow}>
                        <div className={classes.popoverTabs}>
                          <button
                            className={newMemberTab === 'invite' ? classes.popoverTabBtnActive : classes.popoverTabBtn}
                            onClick={() => setNewMemberTab('invite')}
                          >
                            Invite member
                          </button>
                          <button
                            className={newMemberTab === 'add' ? classes.popoverTabBtnActive : classes.popoverTabBtn}
                            onClick={() => setNewMemberTab('add')}
                          >
                            Add member
                          </button>
                        </div>
                        <button
                          className={classes.popoverCloseBtn}
                          onClick={() => setShowNewMemberPopover(false)}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>

                      {inviteFeedback && (
                        <div style={{ fontSize: 12, color: '#16A34A', fontWeight: 600, backgroundColor: '#F0FDF4', padding: '6px 10px', borderRadius: 6 }}>
                          ✓ {inviteFeedback}
                        </div>
                      )}

                      {newMemberTab === 'invite' ? (
                        <form onSubmit={handleSendInvite} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <div className={classes.popoverInputGroup}>
                            <label className={classes.popoverLabel}>Email Address</label>
                            <input
                              type="email"
                              className={classes.popoverInput}
                              placeholder="name@company.com"
                              value={inviteEmail}
                              onChange={(e) => setInviteEmail(e.target.value)}
                              required
                            />
                          </div>

                          <div className={classes.popoverInputGroup}>
                            <label className={classes.popoverLabel}>Role</label>
                            <select
                              className={classes.popoverSelect}
                              value={inviteRole}
                              onChange={(e) => setInviteRole(e.target.value)}
                            >
                              <option value="Member">Member</option>
                              <option value="Admin">Admin</option>
                              <option value="Viewer">Viewer</option>
                            </select>
                          </div>

                          <button type="submit" className={classes.popoverSubmitBtn}>
                            Send Invite
                          </button>
                        </form>
                      ) : (
                        <form onSubmit={handleAddMemberDirect} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <div className={classes.popoverInputGroup}>
                            <label className={classes.popoverLabel}>Full Name</label>
                            <input
                              type="text"
                              className={classes.popoverInput}
                              placeholder="e.g. Liam Foster"
                              value={addName}
                              onChange={(e) => setAddName(e.target.value)}
                              required
                            />
                          </div>

                          <div className={classes.popoverInputGroup}>
                            <label className={classes.popoverLabel}>Email Address</label>
                            <input
                              type="email"
                              className={classes.popoverInput}
                              placeholder="e.g. liam@example.com"
                              value={addEmail}
                              onChange={(e) => setAddEmail(e.target.value)}
                              required
                            />
                          </div>

                          <button type="submit" className={classes.popoverSubmitBtn}>
                            Add Member
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Member Input Bar */}
              <div className={classes.membersSearchBox}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Member"
                  className={classes.membersSearchInput}
                  value={memberSearchQuery}
                  onChange={(e) => setMemberSearchQuery(e.target.value)}
                />
              </div>

              {/* Table List of Members */}
              <div className={classes.membersTableCard}>
                <table className={classes.membersTable}>
                  <thead>
                    <tr>
                      <th className={classes.membersTh} style={{ width: '25%' }}>Name</th>
                      <th className={classes.membersTh} style={{ width: '40%' }}>Email</th>
                      <th className={classes.membersTh} style={{ width: '25%' }}>Date Added</th>
                      <th className={classes.membersTh} style={{ width: '10%', textAlign: 'center' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className={classes.membersTr}>
                        <td className={classes.membersTd}>
                          <div className={classes.membersAvatarCell}>
                            <div className={classes.membersAvatarCircle} style={{ backgroundColor: member.avatarColor }}>
                              {member.initials}
                            </div>
                            <span className={classes.membersNameText}>{member.name}</span>
                          </div>
                        </td>
                        <td className={classes.membersTd}>
                          <span className={classes.membersEmailText}>{member.email}</span>
                        </td>
                        <td className={classes.membersTd}>
                          <span className={classes.membersDateText}>{member.dateAdded}</span>
                        </td>
                        <td className={classes.membersTd} style={{ textAlign: 'center' }}>
                          <button
                            className={classes.membersDeleteBtn}
                            onClick={() => handleRemoveMember(member.id)}
                            title="Remove member"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               SETTINGS VIEW (MATCHING USER IMAGES 2, 3, 4, 5)
               ───────────────────────────────────────────────────────────── */
            <div>
              {/* Secondary Sub-navigation Bar */}
              <div className={classes.settingsSubTabsBar}>
                {/* Status */}
                <button
                  className={settingsTab === 'status' ? classes.settingsSubTabBtnActive : classes.settingsSubTabBtn}
                  onClick={() => { setSettingsTab('status'); setActiveMenuId(null); }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                  <span>Status</span>
                </button>

                {/* Priority */}
                <button
                  className={settingsTab === 'priority' ? classes.settingsSubTabBtnActive : classes.settingsSubTabBtn}
                  onClick={() => { setSettingsTab('priority'); setActiveMenuId(null); }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                  <span>Priority</span>
                </button>

                {/* Tags */}
                <button
                  className={settingsTab === 'tags' ? classes.settingsSubTabBtnActive : classes.settingsSubTabBtn}
                  onClick={() => { setSettingsTab('tags'); setActiveMenuId(null); }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  <span>Tags</span>
                </button>

                {/* Issues Type */}
                <button
                  className={settingsTab === 'issues' ? classes.settingsSubTabBtnActive : classes.settingsSubTabBtn}
                  onClick={() => { setSettingsTab('issues'); setActiveMenuId(null); }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="15" y1="3" x2="15" y2="21" />
                  </svg>
                  <span>Issues Type</span>
                </button>
              </div>

              {/* Centered Settings Card */}
              <div className={classes.settingsCardWrap}>
                <div className={classes.settingsCard}>
                  {/* Card Header */}
                  <div className={classes.settingsCardHeader}>
                    <h3 className={classes.settingsCardTitle}>
                      {settingsTab === 'status' && 'Status'}
                      {settingsTab === 'priority' && 'Priority'}
                      {settingsTab === 'tags' && 'Tags'}
                      {settingsTab === 'issues' && 'Issues Type'}
                    </h3>

                    {settingsTab === 'status' && (
                      <button className={classes.settingsNewBtn} onClick={handleNewStatus}>
                        New Status
                      </button>
                    )}
                    {settingsTab === 'priority' && (
                      <button className={classes.settingsNewBtn} onClick={handleNewPriority}>
                        New Status
                      </button>
                    )}
                  </div>

                  {settingsTab === 'status' && (
                    <p className={classes.settingsSubtitle}>
                      Drag to rearrange : issues will be executed in the following order
                    </p>
                  )}

                  {/* Settings Content Rows */}
                  <div className={classes.settingsList}>
                    {settingsTab === 'status' &&
                      statusList.map((st, idx) => (
                        <div key={st.id} className={classes.settingsRow}>
                          <div className={classes.settingsRowLeft}>
                            {idx === statusList.length - 1 && (
                              <span className={classes.settingsDragHandle} title="Drag handle">
                                ⋮⋮
                              </span>
                            )}
                            <span className={classes.settingsStatusBadge}>{st.name}</span>
                          </div>

                          <div style={{ position: 'relative' }}>
                            <button
                              className={classes.settingsMoreBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === st.id ? null : st.id);
                              }}
                            >
                              ⋮
                            </button>

                            {activeMenuId === st.id && (
                              <div className={classes.settingsActionMenu}>
                                <button
                                  className={classes.settingsActionMenuItem}
                                  onClick={() => setActiveMenuId(null)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={classes.settingsActionMenuDelete}
                                  onClick={() => handleDeleteItem('status', st.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                    {settingsTab === 'priority' &&
                      priorityList.map((pr) => (
                        <div key={pr.id} className={classes.settingsRow}>
                          <div className={classes.settingsRowLeft}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={pr.color} strokeWidth="2.5" strokeLinecap="round">
                              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                              <line x1="4" y1="22" x2="4" y2="15" />
                            </svg>
                            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: pr.color }}>
                              {pr.name}
                            </span>
                          </div>

                          <div style={{ position: 'relative' }}>
                            <button
                              className={classes.settingsMoreBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === pr.id ? null : pr.id);
                              }}
                            >
                              ⋮
                            </button>

                            {activeMenuId === pr.id && (
                              <div className={classes.settingsActionMenu}>
                                <button
                                  className={classes.settingsActionMenuItem}
                                  onClick={() => setActiveMenuId(null)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={classes.settingsActionMenuDelete}
                                  onClick={() => handleDeleteItem('priority', pr.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                    {settingsTab === 'tags' &&
                      tagList.map((tg) => (
                        <div key={tg.id} className={classes.settingsRow}>
                          <div className={classes.settingsRowLeft}>
                            <span
                              className={classes.settingsTagBadge}
                              style={{
                                backgroundColor: tg.bgColor,
                                color: tg.textColor,
                                borderColor: tg.borderColor,
                              }}
                            >
                              {tg.name}
                            </span>
                          </div>

                          <div style={{ position: 'relative' }}>
                            <button
                              className={classes.settingsMoreBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === tg.id ? null : tg.id);
                              }}
                            >
                              ⋮
                            </button>

                            {activeMenuId === tg.id && (
                              <div className={classes.settingsActionMenu}>
                                <button
                                  className={classes.settingsActionMenuItem}
                                  onClick={() => setActiveMenuId(null)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={classes.settingsActionMenuDelete}
                                  onClick={() => handleDeleteItem('tags', tg.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                    {settingsTab === 'issues' &&
                      issueTypeList.map((it, idx) => (
                        <div key={it.id} className={classes.settingsRow}>
                          <div className={classes.settingsRowLeft}>
                            {idx === issueTypeList.length - 1 && (
                              <span className={classes.settingsDragHandle} title="Drag handle">
                                ⋮⋮
                              </span>
                            )}
                            <div className={classes.settingsIssueTypeBadge} style={{ backgroundColor: it.bgColor }}>
                              {it.letter}
                            </div>
                          </div>

                          <div style={{ position: 'relative' }}>
                            <button
                              className={classes.settingsMoreBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === it.id ? null : it.id);
                              }}
                            >
                              ⋮
                            </button>

                            {activeMenuId === it.id && (
                              <div className={classes.settingsActionMenu}>
                                <button
                                  className={classes.settingsActionMenuItem}
                                  onClick={() => setActiveMenuId(null)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={classes.settingsActionMenuDelete}
                                  onClick={() => handleDeleteItem('issues', it.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div>
                    {settingsTab === 'status' && (
                      <button className={classes.settingsBottomAddBtn} onClick={handleNewStatus}>
                        New status
                      </button>
                    )}
                    {settingsTab === 'priority' && (
                      <button className={classes.settingsBottomAddBtn} onClick={handleNewPriority}>
                        New priority
                      </button>
                    )}
                    {settingsTab === 'tags' && (
                      <button className={classes.settingsBottomAddBtn} onClick={handleNewTag}>
                        New tag
                      </button>
                    )}
                    {settingsTab === 'issues' && (
                      <button className={classes.settingsBottomAddBtn} onClick={handleNewIssueType}>
                        New issue type
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StreamlineMockup;
