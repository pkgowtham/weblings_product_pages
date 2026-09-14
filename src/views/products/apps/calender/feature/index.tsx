'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import AppStoreButtons from '../../../../../components/appStoreButtons';
import calendarDataJson from '../../../../../data/calendar.json';
import {
  CalendarIcon,
  PhoneCallIcon,
  TargetIcon,
  UtensilsIcon,
  PlaneIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  BoltIcon,
} from '../../../../../assets/icons_component';

// Apple & Android Store SVGs
const SvgApple = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.03-.51 2.58-1.18z" />
  </svg>
);

const SvgAndroid = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.551 0 .9993.4478.9993.9993.0001.5515-.4482 1.0001-.9993 1.0001m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0001s.4482-.9993.9993-.9993c.5511 0 .9993.4478.9993.9993 0 .5515-.4482 1.0001-.9993 1.0001m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.1 12 8.1s-3.5902.3126-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
  </svg>
);

const SvgStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const SvgChevronLeft = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const SvgChevronRight = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SvgPlus = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SvgClose = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SvgClock = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SvgVideoCamera = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const SvgArrowRight = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface CalendarEventItem {
  id: string;
  day: number;
  title: string;
  category: 'streamline' | 'call' | 'custom';
  time: string;
  attendees: string[];
  source: string;
  code?: string;
  isEpic?: boolean;
  spanDays?: number;
  isPlane?: boolean;
}

const monthsList = ['August 2026', 'September 2026', 'October 2026'];

const initialEvents: CalendarEventItem[] = [
  {
    id: 'call-1',
    day: 1,
    title: 'Client Huddle',
    category: 'call',
    time: '10:00 AM - 10:45 AM',
    attendees: ['Alex Smith', 'Sarah Jenkins', 'David Kim'],
    source: 'Team Chat Video Room #design',
  },
  {
    id: 'cust-1',
    day: 3,
    title: 'Office Lunch',
    category: 'custom',
    time: '12:30 PM - 01:30 PM',
    attendees: ['All Department Leads'],
    source: 'Company Social Calendar',
  },
  {
    id: 'epic-1',
    day: 7,
    title: 'Backend Migration Epic',
    code: 'STR-104',
    category: 'streamline',
    isEpic: true,
    spanDays: 3,
    time: 'Sep 7 - Sep 9 (All Day)',
    attendees: ['Dev Team (8 members)', 'Alex Smith (Owner)'],
    source: 'Streamline Sprint 14 Board',
  },
  {
    id: 'call-2',
    day: 9,
    title: 'Board Meeting',
    category: 'call',
    time: '02:00 PM - 03:30 PM',
    attendees: ['Executive Board (6 members)'],
    source: 'Team Chat Boardroom',
  },
  {
    id: 'cust-2',
    day: 11,
    title: 'Out of Office',
    category: 'custom',
    isPlane: true,
    time: 'Sep 11 - Sep 12 (All Day)',
    attendees: ['Alex Smith'],
    source: 'HRMS Leave Management',
  },
  {
    id: 'stream-2',
    day: 16,
    title: 'STR-118 Auth Flow',
    code: 'STR-118',
    category: 'streamline',
    time: '11:00 AM - 12:30 PM',
    attendees: ['Security Lead', 'Backend Pod'],
    source: 'Streamline Sprint 14',
  },
  {
    id: 'call-3',
    day: 22,
    title: 'Quarterly Sync',
    category: 'call',
    time: '03:00 PM - 04:30 PM',
    attendees: ['All Hands'],
    source: 'Team Chat Main Channel',
  },
  {
    id: 'stream-3',
    day: 25,
    title: 'STR-122 Release Prep',
    code: 'STR-122',
    category: 'streamline',
    time: '04:00 PM - 05:00 PM',
    attendees: ['DevOps Lead', 'QA Team'],
    source: 'Streamline Deployments',
  },
];

const CalenderFeature = () => {
  const classes = useStyles();
  const hero = calendarDataJson.feature.hero;
  const zeroDoubleEntry = calendarDataJson.feature.zeroDoubleEntry;
  const organization = calendarDataJson.feature.organization;
  const mobile = calendarDataJson.feature.mobile;

  // Calendar Mockup interactive controls
  const [monthIdx, setMonthIdx] = useState<number>(1); // 1 = September 2026
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [selectedDay, setSelectedDay] = useState<number>(9);
  const [showStreamline, setShowStreamline] = useState<boolean>(true);
  const [showCalls, setShowCalls] = useState<boolean>(true);
  const [showCustom, setShowCustom] = useState<boolean>(true);

  // Dynamic user events list
  const [eventsList, setEventsList] = useState<CalendarEventItem[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEventItem | null>(null);

  // Quick event creator modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDay, setNewDay] = useState<number>(9);
  const [newCat, setNewCat] = useState<'streamline' | 'call' | 'custom'>('custom');

  // Intelligent Organization active view layer interactive toggles
  const [layerStreamline, setLayerStreamline] = useState<boolean>(true);
  const [layerCalls, setLayerCalls] = useState<boolean>(false);

  // Card hover states for triggering icon micro-animations on card hover
  const [hoveredZeroCard, setHoveredZeroCard] = useState<string | null>(null);
  const [hoveredMobileCard, setHoveredMobileCard] = useState<string | null>(null);

  // Interactive tag filters state in Section 3
  const [activeTags, setActiveTags] = useState<Record<string, boolean>>({
    'Urgent Deliverables': true,
    'Q3 Roadmap': true,
    'HR & Offboarding': true,
    'Internal Syncs (Hidden)': false,
  });

  const toggleTag = (name: string) => {
    setActiveTags((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Month navigation handlers
  const handlePrevMonth = () => {
    setMonthIdx((prev) => (prev > 0 ? prev - 1 : monthsList.length - 1));
  };

  const handleNextMonth = () => {
    setMonthIdx((prev) => (prev < monthsList.length - 1 ? prev + 1 : 0));
  };

  const handleTodayReset = () => {
    setMonthIdx(1);
    setSelectedDay(9);
    setSelectedEvent(null);
  };

  // Create new event handler
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setIsModalOpen(false);
      return;
    }

    const created: CalendarEventItem = {
      id: `user-evt-${Date.now()}`,
      day: Number(newDay) || 9,
      title: newTitle.trim(),
      category: newCat,
      time: '02:00 PM - 03:00 PM',
      attendees: ['Alex Smith (You)', 'Team Member'],
      source: newCat === 'streamline' ? 'Streamline Ticket' : newCat === 'call' ? 'Team Chat Meeting' : 'Custom Event',
    };

    setEventsList((prev) => [...prev, created]);
    setSelectedDay(created.day);
    setSelectedEvent(null);
    setNewTitle('');
    setIsModalOpen(false);
  };

  // Filter events based on active switches
  const filteredEvents = eventsList.filter((evt) => {
    if (evt.category === 'streamline' && !showStreamline) return false;
    if (evt.category === 'call' && !showCalls) return false;
    if (evt.category === 'custom' && !showCustom) return false;
    return true;
  });

  const streamlineCount = eventsList.filter((e) => e.category === 'streamline').length;
  const callsCount = eventsList.filter((e) => e.category === 'call').length;
  const customCount = eventsList.filter((e) => e.category === 'custom').length;

  return (
    <div className={classes.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION WITH EMBEDDED INTERACTIVE WEB APP MOCKUP */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.heroSection}>
        <div className={classes.heroGlow} />
        <div className={classes.ambientBlobBrand} />
        <div className={classes.ambientBlobInfo} />

        <div className={classes.heroContent}>
          {/* Eyebrow Badge */}
          <div className={classes.eyebrowPill}>
            <CalendarIcon width={16} height={16} />
            <span className={classes.eyebrowText}>WEBLINGS CALENDAR</span>
          </div>

          {/* Heading */}
          <h1 className={classes.heroTitle}>
            {hero.title}{' '}
            <span className={classes.heroTitleAccent}>{hero.titleGradient}</span>
          </h1>

          {/* Paragraph */}
          <p className={classes.heroParagraph}>{hero.content}</p>

          {/* Primary CTA */}
          <button className={classes.heroCtaButton}>
            <span>{hero.cta}</span>
          </button>
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* INTERACTIVE CALENDAR WEB MOCKUP */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className={classes.mockupWrapper}>
          <div className={classes.mockupContainer}>
            {/* Window Chrome Title Bar */}
            <div className={classes.mockupHeader}>
              <div className={classes.windowDots}>
                <span className={classes.dotRed} />
                <span className={classes.dotYellow} />
                <span className={classes.dotGreen} />
              </div>

              <div className={classes.mockupUrlChip}>
                cal.weblings.internal
                <span className={classes.liveSyncBadge}>
                  <span className={classes.liveSyncDot} />
                  LIVE SYNC
                </span>
              </div>

              <div className={classes.userStatusRight}>
                <span className={classes.todayIndicatorText}>Today: Sep 9, 2026</span>
                <div className={classes.avatar}>
                  AS
                  <span className={classes.avatarOnlineDot} />
                </div>
              </div>
            </div>

            {/* Smart Interactive Toolbar */}
            <div className={classes.filterBar}>
              <div className={classes.filterBarLeft}>
                {/* Month Navigator */}
                <div className={classes.monthNavGroup}>
                  <button
                    type="button"
                    aria-label="Previous Month"
                    className={classes.monthNavBtn}
                    onClick={handlePrevMonth}
                  >
                    <SvgChevronLeft width={14} height={14} />
                  </button>
                  <h2 className={classes.filterMonthTitle}>{monthsList[monthIdx]}</h2>
                  <button
                    type="button"
                    aria-label="Next Month"
                    className={classes.monthNavBtn}
                    onClick={handleNextMonth}
                  >
                    <SvgChevronRight width={14} height={14} />
                  </button>
                  <button
                    type="button"
                    className={classes.todayResetBtn}
                    onClick={handleTodayReset}
                  >
                    Today
                  </button>
                </div>

                {/* View Switcher: Month / Week */}
                <div className={classes.viewToggleGroup}>
                  <button
                    type="button"
                    className={viewMode === 'month' ? classes.viewToggleBtnActive : classes.viewToggleBtn}
                    onClick={() => setViewMode('month')}
                  >
                    Month
                  </button>
                  <button
                    type="button"
                    className={viewMode === 'week' ? classes.viewToggleBtnActive : classes.viewToggleBtn}
                    onClick={() => setViewMode('week')}
                  >
                    Week
                  </button>
                </div>

                <div className={classes.filterDivider} />

                {/* Category Toggles with Live Filter Count */}
                <div className={classes.toggleGroup}>
                  {/* Streamline Tickets */}
                  <div
                    className={classes.toggleItem}
                    onClick={() => setShowStreamline(!showStreamline)}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className={`${classes.toggleSwitch} ${showStreamline ? classes.switchStreamlineOn : classes.switchOff
                        }`}
                    >
                      <div className={classes.toggleKnob} />
                    </div>
                    <span>Streamline</span>
                    <span
                      className={classes.toggleCountBadge}
                      style={{
                        backgroundColor: showStreamline ? 'rgba(0, 114, 196, 0.12)' : '#F1F5F9',
                        color: showStreamline ? '#0072C4' : '#64748B',
                      }}
                    >
                      {streamlineCount}
                    </span>
                  </div>

                  {/* Team Calls */}
                  <div
                    className={classes.toggleItem}
                    onClick={() => setShowCalls(!showCalls)}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className={`${classes.toggleSwitch} ${showCalls ? classes.switchCallsOn : classes.switchOff
                        }`}
                    >
                      <div className={classes.toggleKnob} />
                    </div>
                    <span>Calls</span>
                    <span
                      className={classes.toggleCountBadge}
                      style={{
                        backgroundColor: showCalls ? 'rgba(225, 29, 72, 0.12)' : '#F1F5F9',
                        color: showCalls ? '#E11D48' : '#64748B',
                      }}
                    >
                      {callsCount}
                    </span>
                  </div>

                  {/* Custom Events */}
                  <div
                    className={classes.toggleItem}
                    onClick={() => setShowCustom(!showCustom)}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className={`${classes.toggleSwitch} ${showCustom ? classes.switchCustomOn : classes.switchOff
                        }`}
                    >
                      <div className={classes.toggleKnob} />
                    </div>
                    <span>Custom</span>
                    <span
                      className={classes.toggleCountBadge}
                      style={{
                        backgroundColor: showCustom ? 'rgba(245, 158, 11, 0.12)' : '#F1F5F9',
                        color: showCustom ? '#D97706' : '#64748B',
                      }}
                    >
                      {customCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* + New Event Button */}
              <button
                type="button"
                className={classes.newEventBtn}
                onClick={() => {
                  setNewDay(selectedDay);
                  setIsModalOpen(true);
                }}
              >
                <SvgPlus width={13} height={13} />
                <span>New Event</span>
              </button>
            </div>

            {/* ─── CALENDAR BODY: MONTH VIEW ─── */}
            {viewMode === 'month' && (
              <div>
                {/* Days of Week Header */}
                <div className={classes.gridHeader}>
                  <div>SUN</div>
                  <div>MON</div>
                  <div>TUE</div>
                  <div>WED</div>
                  <div>THU</div>
                  <div>FRI</div>
                  <div>SAT</div>
                </div>

                {/* 35-Day Grid */}
                <div className={classes.gridBody}>
                  {/* Previous Month Dimmed Days */}
                  <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                    <span className={classes.dayNumber}>30</span>
                  </div>
                  <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                    <span className={classes.dayNumber}>31</span>
                  </div>

                  {/* Day 1 to 30 of Current Month */}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
                    const isToday = dayNum === 9 && monthIdx === 1;
                    const isSelected = selectedDay === dayNum;
                    const isWeekend = (dayNum + 1) % 7 === 0 || (dayNum + 1) % 7 === 1;
                    const dayEvents = filteredEvents.filter((e) => e.day === dayNum);

                    return (
                      <div
                        key={dayNum}
                        className={`
                          ${classes.calendarCell}
                          ${isToday ? classes.cellActiveDay : ''}
                          ${isSelected ? classes.cellSelectedDay : ''}
                          ${isWeekend ? classes.cellWeekend : ''}
                        `}
                        onClick={() => setSelectedDay(dayNum)}
                      >
                        <div className={classes.cellTopRow}>
                          <span className={classes.dayNumber}>{dayNum}</span>
                          {isToday && <span className={classes.todayBadge}>9</span>}
                        </div>

                        {/* Spanning Epic on Day 7 */}
                        {dayNum === 7 && showStreamline && monthIdx === 1 && (
                          <div
                            className={classes.spanningEpicBar}
                            onClick={(e) => {
                              e.stopPropagation();
                              const epic = eventsList.find((ev) => ev.id === 'epic-1');
                              if (epic) setSelectedEvent(epic);
                            }}
                          >
                            <span className={classes.epicCodeBadge}>STR-104</span>
                            <span>Backend Migration Epic</span>
                          </div>
                        )}

                        {/* Render standard event pills for this day */}
                        {dayEvents.map((evt) => {
                          if (evt.isEpic) return null; // Epic renders via spanning bar
                          let pillStyle = classes.eventPillRose;
                          if (evt.category === 'streamline') pillStyle = classes.eventPillBlue;
                          if (evt.category === 'custom' && evt.isPlane) pillStyle = classes.eventPillCyan;
                          else if (evt.category === 'custom') pillStyle = classes.eventPillAmber;

                          return (
                            <div
                              key={evt.id}
                              className={`${classes.eventPill} ${pillStyle}`}
                              style={{
                                marginTop: dayNum === 9 && showStreamline && monthIdx === 1 ? '36px' : '4px',
                                zIndex: 12,
                                position: 'relative',
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedEvent(evt);
                              }}
                            >
                              {evt.category === 'call' && <PhoneCallIcon width={12} height={12} />}
                              {evt.category === 'streamline' && <TargetIcon width={12} height={12} />}
                              {evt.category === 'custom' && !evt.isPlane && <UtensilsIcon width={12} height={12} />}
                              {evt.isPlane && <PlaneIcon width={12} height={12} />}
                              <span>{evt.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}

                  {/* Next Month Dimmed Days */}
                  <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                    <span className={classes.dayNumber}>1</span>
                  </div>
                  <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                    <span className={classes.dayNumber}>2</span>
                  </div>
                  <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                    <span className={classes.dayNumber}>3</span>
                  </div>
                </div>
              </div>
            )}

            {/* ─── CALENDAR BODY: WEEK VIEW ─── */}
            {viewMode === 'week' && (
              <div className={classes.weekViewContainer}>
                <div className={classes.weekDaysHeader}>
                  <div className={classes.timeLabel}>TIME</div>
                  {[
                    { day: 'Mon', date: 'Sep 7' },
                    { day: 'Tue', date: 'Sep 8' },
                    { day: 'Wed (Today)', date: 'Sep 9' },
                    { day: 'Thu', date: 'Sep 10' },
                    { day: 'Fri', date: 'Sep 11' },
                    { day: 'Sat', date: 'Sep 12' },
                    { day: 'Sun', date: 'Sep 13' },
                  ].map((d, idx) => (
                    <div key={idx}>
                      <div className={classes.weekDayColTitle}>{d.day}</div>
                      <div className={classes.weekDayColSub}>{d.date}</div>
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                {[
                  { label: '09:00 AM', eventTitle: 'STR-104 Sprint Standup', cat: 'streamline', col: 2 },
                  { label: '11:00 AM', eventTitle: 'Client Huddle', cat: 'call', col: 4 },
                  { label: '12:30 PM', eventTitle: 'Office Lunch', cat: 'custom', col: 3 },
                  { label: '02:00 PM', eventTitle: 'Board Meeting', cat: 'call', col: 4 },
                  { label: '04:00 PM', eventTitle: 'STR-118 Code Review', cat: 'streamline', col: 5 },
                ].map((slot, sIdx) => (
                  <div key={sIdx} className={classes.weekSlotRow}>
                    <div className={classes.timeLabel}>{slot.label}</div>
                    {Array.from({ length: 7 }).map((_, cIdx) => (
                      <div key={cIdx} className={classes.weekCell}>
                        {cIdx + 2 === slot.col && (
                          <div
                            className={`${classes.eventPill} ${slot.cat === 'streamline'
                              ? classes.eventPillBlue
                              : slot.cat === 'call'
                                ? classes.eventPillRose
                                : classes.eventPillAmber
                              }`}
                            onClick={() =>
                              setSelectedEvent({
                                id: `week-${sIdx}`,
                                day: 7 + cIdx,
                                title: slot.eventTitle,
                                category: slot.cat as any,
                                time: slot.label,
                                attendees: ['Alex Smith', 'Team Leads'],
                                source: 'Unified Worksuite Calendar',
                              })
                            }
                          >
                            <span>{slot.eventTitle}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ─── EVENT INSPECTOR CARD (FLOATING POPOVER) ─── */}
            {selectedEvent && (
              <div className={classes.eventInspectorModal}>
                <div className={classes.inspectorHeader}>
                  <span
                    className={classes.inspectorCategoryBadge}
                    style={{
                      backgroundColor:
                        selectedEvent.category === 'streamline'
                          ? 'rgba(0, 114, 196, 0.12)'
                          : selectedEvent.category === 'call'
                            ? 'rgba(225, 29, 72, 0.12)'
                            : 'rgba(245, 158, 11, 0.12)',
                      color:
                        selectedEvent.category === 'streamline'
                          ? '#0072C4'
                          : selectedEvent.category === 'call'
                            ? '#E11D48'
                            : '#D97706',
                    }}
                  >
                    {selectedEvent.category === 'streamline'
                      ? 'STREAMLINE TICKET'
                      : selectedEvent.category === 'call'
                        ? 'TEAM CHAT CALL'
                        : 'CUSTOM EVENT'}
                  </span>
                  <button
                    type="button"
                    className={classes.closeBtn}
                    onClick={() => setSelectedEvent(null)}
                    aria-label="Close"
                  >
                    <SvgClose width={14} height={14} />
                  </button>
                </div>

                <h4 className={classes.inspectorTitle}>{selectedEvent.title}</h4>
                <div className={classes.inspectorTimeText}>
                  <SvgClock width={14} height={14} />
                  <span>{selectedEvent.time}</span>
                  <span>• Day {selectedEvent.day}</span>
                </div>

                <div className={classes.inspectorSyncBox}>
                  <BoltIcon width={16} height={16} isHovered={true} style={{ color: '#F59E0B' }} />
                  <div>
                    <strong>Sync Origin:</strong> {selectedEvent.source}
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '14px' }}>
                  <strong>Participants:</strong> {selectedEvent.attendees.join(', ')}
                </div>

                <div className={classes.inspectorActionsRow}>
                  <button
                    type="button"
                    className={classes.actionBtnSecondary}
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className={classes.actionBtnPrimary}
                    onClick={() => {
                      setSelectedEvent(null);
                    }}
                  >
                    {selectedEvent.category === 'streamline' ? (
                      <>
                        <span>Open in Streamline</span>
                        <SvgArrowRight width={13} height={13} />
                      </>
                    ) : (
                      <>
                        <SvgVideoCamera width={14} height={14} />
                        <span>Join Video Call</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ─── QUICK ADD EVENT MODAL ─── */}
            {isModalOpen && (
              <div className={classes.newEventModal}>
                <div className={classes.modalTitle}>
                  <span>Create Calendar Event</span>
                  <button
                    type="button"
                    className={classes.closeBtn}
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close"
                  >
                    <SvgClose width={14} height={14} />
                  </button>
                </div>

                <form onSubmit={handleCreateEvent}>
                  <label htmlFor="calendar-event-title" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Event Title
                  </label>
                  <input
                    id="calendar-event-title"
                    type="text"
                    className={classes.modalInput}
                    placeholder="e.g. Design Review, Client Call, Sprint Demo"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    autoFocus
                  />

                  {/* Quick suggestion chips */}
                  <div className={classes.quickPillOptions}>
                    {['Product Review', 'Sprint Standup', 'Client Demo', 'Design Sync'].map((sug) => (
                      <span
                        key={sug}
                        className={classes.quickPill}
                        onClick={() => setNewTitle(sug)}
                      >
                        <SvgPlus width={10} height={10} />
                        <span>{sug}</span>
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="calendar-event-day" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                        Day in Sep
                      </label>
                      <input
                        id="calendar-event-day"
                        type="number"
                        min={1}
                        max={30}
                        className={classes.modalInput}
                        value={newDay}
                        onChange={(e) => setNewDay(Number(e.target.value))}
                      />
                    </div>
                  </div>

                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Category
                  </label>
                  <div className={classes.categorySelectorRow}>
                    <button
                      type="button"
                      className={newCat === 'streamline' ? classes.categoryBtnActiveStreamline : classes.categoryBtn}
                      onClick={() => setNewCat('streamline')}
                    >
                      Streamline
                    </button>
                    <button
                      type="button"
                      className={newCat === 'call' ? classes.categoryBtnActiveCall : classes.categoryBtn}
                      onClick={() => setNewCat('call')}
                    >
                      Team Call
                    </button>
                    <button
                      type="button"
                      className={newCat === 'custom' ? classes.categoryBtnActiveCustom : classes.categoryBtn}
                      onClick={() => setNewCat('custom')}
                    >
                      Custom
                    </button>
                  </div>

                  <div className={classes.inspectorActionsRow}>
                    <button
                      type="button"
                      className={classes.actionBtnSecondary}
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className={classes.actionBtnPrimary}>
                      Add to Calendar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: ZERO DOUBLE-ENTRY */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.sectionHeaderCentered}>
          <span className={classes.kicker}>{zeroDoubleEntry.kicker}</span>
          <h2 className={classes.sectionTitle}>{zeroDoubleEntry.title}</h2>
          <p className={classes.sectionDescription}>{zeroDoubleEntry.description}</p>
        </div>

        <div className={classes.twoCardGrid}>
          {/* Card 1: Streamline Tickets */}
          <div
            className={`${classes.glassCard} ${classes.cardBorderIndigo}`}
            onMouseEnter={() => setHoveredZeroCard('streamline')}
            onMouseLeave={() => setHoveredZeroCard(null)}
          >
            <div>
              <div className={classes.cardIconBox}>
                <TargetIcon width={26} height={26} isHovered={hoveredZeroCard === 'streamline'} />
              </div>
              <h3 className={classes.cardTitle}>{zeroDoubleEntry.cards[0].title}</h3>
              <p className={classes.cardParagraph}>{zeroDoubleEntry.cards[0].description}</p>
            </div>

            <div className={classes.cardChipContainer}>
              <span className={classes.chipBadgeIndigo}>
                {zeroDoubleEntry.cards[0].badge.code}
              </span>
              <span className={classes.chipTextIndigo}>
                {zeroDoubleEntry.cards[0].badge.label}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
                ● Auto-Synced
              </span>
            </div>
          </div>

          {/* Card 2: Team Chat Calls */}
          <div
            className={`${classes.glassCard} ${classes.cardBorderRose}`}
            onMouseEnter={() => setHoveredZeroCard('calls')}
            onMouseLeave={() => setHoveredZeroCard(null)}
          >
            <div>
              <div className={classes.cardIconBoxRose}>
                <PhoneCallIcon width={26} height={26} isHovered={hoveredZeroCard === 'calls'} />
              </div>
              <h3 className={classes.cardTitle}>{zeroDoubleEntry.cards[1].title}</h3>
              <p className={classes.cardParagraph}>{zeroDoubleEntry.cards[1].description}</p>
            </div>

            <div className={classes.cardChipContainer}>
              <span className={classes.chipBadgeRose}>
                {zeroDoubleEntry.cards[1].badge.code}
              </span>
              <span className={classes.chipTextRose}>
                {zeroDoubleEntry.cards[1].badge.label}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#E11D48', fontWeight: 700 }}>
                ● Live Link
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: INTELLIGENT ORGANIZATION */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.splitSection}>
          {/* Left Column: Numbered List */}
          <div className={classes.splitLeft}>
            <span className={classes.kicker}>{organization.kicker}</span>
            <h2 className={classes.sectionTitle}>
              Filter out the noise.
              <br />
              See only what matters.
            </h2>
            <p className={classes.sectionDescription}>{organization.description}</p>

            <div className={classes.pointsList}>
              {organization.points.map((point: any) => (
                <div key={point.number} className={classes.pointItem}>
                  <div className={classes.pointBadge}>{point.number}</div>
                  <div>
                    <h4 className={classes.pointTitle}>{point.title}</h4>
                    <p className={classes.pointDesc}>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Filter Mockup Graphic */}
          <div className={classes.splitRight}>
            <div className={classes.graphicCard}>
              <div className={classes.graphicTitle}>
                <span>Filter by Custom Tags</span>
                <span style={{ fontSize: '0.75rem', color: '#0072C4', fontWeight: 600 }}>Click to toggle</span>
              </div>

              {/* Tag Chips */}
              <div className={classes.tagChipsRow}>
                <span
                  className={`${classes.tagChip} ${activeTags['Urgent Deliverables'] ? classes.tagRose : classes.tagMuted
                    }`}
                  onClick={() => toggleTag('Urgent Deliverables')}
                >
                  Urgent Deliverables
                </span>
                <span
                  className={`${classes.tagChip} ${activeTags['Q3 Roadmap'] ? classes.tagIndigo : classes.tagMuted
                    }`}
                  onClick={() => toggleTag('Q3 Roadmap')}
                >
                  Q3 Roadmap
                </span>
                <span
                  className={`${classes.tagChip} ${activeTags['HR & Offboarding'] ? classes.tagEmerald : classes.tagMuted
                    }`}
                  onClick={() => toggleTag('HR & Offboarding')}
                >
                  HR & Offboarding
                </span>
                <span
                  className={`${classes.tagChip} ${activeTags['Internal Syncs (Hidden)'] ? classes.tagPurple : classes.tagMuted
                    }`}
                  onClick={() => toggleTag('Internal Syncs (Hidden)')}
                >
                  Internal Syncs
                </span>
              </div>

              {/* Active View Layers */}
              <div className={classes.layersContainer}>
                <div className={classes.graphicTitle} style={{ marginBottom: 0 }}>
                  Active View Layers
                </div>

                <div className={classes.layerRow}>
                  <span className={classes.layerLabel}>Show Streamline Epics</span>
                  <div
                    className={layerStreamline ? classes.layerSwitchActive : classes.layerSwitchInactive}
                    onClick={() => setLayerStreamline(!layerStreamline)}
                  >
                    <div className={layerStreamline ? classes.layerSwitchKnobActive : classes.layerSwitchKnobInactive} />
                  </div>
                </div>

                <div className={`${classes.layerRow} ${!layerCalls ? classes.layerRowMuted : ''}`}>
                  <span className={classes.layerLabel}>Show Team Calls</span>
                  <div
                    className={layerCalls ? classes.layerSwitchActive : classes.layerSwitchInactive}
                    onClick={() => setLayerCalls(!layerCalls)}
                  >
                    <div className={layerCalls ? classes.layerSwitchKnobActive : classes.layerSwitchKnobInactive} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: MOBILE APP */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionFour}>
        <div className={classes.sectionFourContainer}>
          <div className={classes.sectionHeaderCentered}>
            <h2 className={classes.sectionTitle}>{mobile.title}</h2>
            <p className={classes.sectionDescription}>{mobile.description}</p>
          </div>

          {/* <div className={classes.twoCardGrid}>
            {mobile.cards.map((card: any) => {
              const isCardHovered = hoveredMobileCard === card.id;
              return (
                <div
                  key={card.id}
                  className={classes.glassCard}
                  onMouseEnter={() => setHoveredMobileCard(card.id)}
                  onMouseLeave={() => setHoveredMobileCard(null)}
                >
                  <div>
                    <div className={classes.mobileCardIcon}>
                      {card.icon === 'mobile' || card.id === 'employee' ? (
                        <SmartphoneIcon width={28} height={28} isHovered={isCardHovered} />
                      ) : (
                        <TrendingUpIcon width={28} height={28} isHovered={isCardHovered} />
                      )}
                    </div>
                    <h3 className={classes.cardTitle}>{card.title}</h3>
                    <div className={classes.mobileKicker}>{card.kicker}</div>
                    <p className={classes.cardParagraph}>{card.description}</p>
                  </div>

                  <div className={classes.badgeRow}>
                    {card.badges.map((b: string) => (
                      <span key={b} className={classes.platformPill}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Dedicated Centered Mobile Download Area */}
          <div className={classes.mobileDownloadCard}>
            <div className={classes.mobileDownloadHeader}>
              <div className={classes.mobileDownloadIcon}>
                <SmartphoneIcon width={24} height={24} isHovered={true} />
              </div>
              <h3 className={classes.mobileDownloadTitle}>Get Weblings Calendar on Mobile</h3>
              <p className={classes.mobileDownloadSubtitle}>
                Sync your meetings, video calls, and sprint deliverables seamlessly across iOS and Android.
              </p>
            </div>

            <AppStoreButtons
              align="center"
              reviewCountText="Over 45,000+ active enterprise professionals"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalenderFeature;