'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import {
  PhoneCallIcon,
  TargetIcon,
  UtensilsIcon,
  PlaneIcon,
  BoltIcon,
} from '../../assets/icons_component';

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

const SvgArrowRight = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SvgVideoCamera = ({ width = 14, height = 14 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

export interface CalendarEvent {
  id: string;
  day: number;
  title: string;
  category: 'streamline' | 'call' | 'custom';
  time: string;
  attendees: string[];
  source: string;
  isEpic?: boolean;
  isPlane?: boolean;
}

export interface CalendarMockupProps {
  embedded?: boolean;
}

export const CalendarMockup: React.FC<CalendarMockupProps> = ({ embedded = false }) => {
  const classes = useStyles();

  // Calendar Mockup interactive controls
  const [selectedDay, setSelectedDay] = useState<number>(9);
  const [monthIdx, setMonthIdx] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');

  // Multi-app sync category toggles
  const [showStreamline, setShowStreamline] = useState<boolean>(true);
  const [showCalls, setShowCalls] = useState<boolean>(true);
  const [showCustom, setShowCustom] = useState<boolean>(true);

  // Selected event inspection popover
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // Quick Add Event Modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDay, setNewDay] = useState<number>(9);
  const [newCat, setNewCat] = useState<'streamline' | 'call' | 'custom'>('call');

  const monthsList = ['August 2026', 'September 2026', 'October 2026'];

  // Master events data
  const [eventsList, setEventsList] = useState<CalendarEvent[]>([
    {
      id: 'epic-1',
      day: 7,
      title: 'STR-104 Backend Migration Epic',
      category: 'streamline',
      time: 'Sep 7 – Sep 9 (All Day)',
      attendees: ['Alex Smith', 'Dev Team', 'Architects'],
      source: 'Streamline Sync Engine',
      isEpic: true,
    },
    {
      id: 'evt-1',
      day: 3,
      title: 'Sprint Kickoff Call',
      category: 'call',
      time: '10:00 AM – 10:45 AM',
      attendees: ['Alex Smith', 'Product Org'],
      source: 'Weblings Connect Huddle',
    },
    {
      id: 'evt-2',
      day: 5,
      title: 'Design Review: Dark Mode',
      category: 'streamline',
      time: '02:00 PM – 03:00 PM',
      attendees: ['Sarah Jenkins', 'Alex Smith'],
      source: 'Streamline Ticket #402',
    },
    {
      id: 'evt-3',
      day: 8,
      title: '1:1 Sync with VP Product',
      category: 'call',
      time: '11:00 AM – 11:30 AM',
      attendees: ['Alex Smith', 'VP Engineering'],
      source: 'Unified Worksuite Directory',
    },
    {
      id: 'evt-4',
      day: 9,
      title: 'Team Retrospective',
      category: 'call',
      time: '03:30 PM – 04:30 PM',
      attendees: ['Core Engineering (8 members)'],
      source: 'Weblings Connect Call',
    },
    {
      id: 'evt-5',
      day: 9,
      title: 'STR-118 Code Freeze',
      category: 'streamline',
      time: '05:00 PM',
      attendees: ['Release Guild'],
      source: 'Streamline Sprint Automations',
    },
    {
      id: 'evt-6',
      day: 12,
      title: 'Team Offsite Lunch',
      category: 'custom',
      time: '12:30 PM – 02:00 PM',
      attendees: ['Entire Floor'],
      source: 'Worksuite Social Calendar',
    },
    {
      id: 'evt-7',
      day: 15,
      title: 'Investor Demo Walkthrough',
      category: 'call',
      time: '04:00 PM – 05:00 PM',
      attendees: ['Alex Smith', 'Founders'],
      source: 'Connect Meeting Room Alpha',
    },
    {
      id: 'evt-8',
      day: 18,
      title: 'SF Tech Flight Depart',
      category: 'custom',
      time: '08:15 AM',
      attendees: ['Alex Smith'],
      source: 'Personal Gmail Sync',
      isPlane: true,
    },
    {
      id: 'evt-9',
      day: 22,
      title: 'Security Compliance Audit',
      category: 'streamline',
      time: '11:00 AM – 12:00 PM',
      attendees: ['Alex Smith', 'Infra Sec'],
      source: 'Streamline Compliance Task',
    },
    {
      id: 'evt-10',
      day: 25,
      title: 'Customer Advisory Board',
      category: 'call',
      time: '01:00 PM – 02:30 PM',
      attendees: ['Key Enterprise Clients (12)'],
      source: 'Weblings Connect Room #Enterprise',
    },
  ]);

  // Dynamic filter matching
  const filteredEvents = eventsList.filter((e) => {
    if (e.category === 'streamline' && !showStreamline) return false;
    if (e.category === 'call' && !showCalls) return false;
    if (e.category === 'custom' && !showCustom) return false;
    return true;
  });

  const streamlineCount = eventsList.filter((e) => e.category === 'streamline').length;
  const callsCount = eventsList.filter((e) => e.category === 'call').length;
  const customCount = eventsList.filter((e) => e.category === 'custom').length;

  const handlePrevMonth = () => {
    setMonthIdx((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setMonthIdx((prev) => (prev < monthsList.length - 1 ? prev + 1 : prev));
  };

  const handleTodayReset = () => {
    setMonthIdx(1);
    setSelectedDay(9);
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: CalendarEvent = {
      id: `custom-${Date.now()}`,
      day: newDay,
      title: newTitle.trim(),
      category: newCat,
      time: '02:00 PM – 03:00 PM',
      attendees: ['Alex Smith', 'Invitees'],
      source: 'Weblings Calendar Direct',
    };

    setEventsList((prev) => [...prev, created]);
    setSelectedDay(newDay);
    setNewTitle('');
    setIsModalOpen(false);
  };

  const content = (
    <div className={embedded ? classes.mockupContainerEmbedded : classes.mockupContainer}>
      {/* Window Chrome Title Bar (only in standalone mode) */}
      {!embedded && (
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
      )}

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
                className={`${classes.toggleSwitch} ${
                  showStreamline ? classes.switchStreamlineOn : classes.switchOff
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
                className={`${classes.toggleSwitch} ${
                  showCalls ? classes.switchCallsOn : classes.switchOff
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
                className={`${classes.toggleSwitch} ${
                  showCustom ? classes.switchCustomOn : classes.switchOff
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
                          marginTop: dayNum === 8 && showStreamline && monthIdx === 1 ? '34px' : '4px',
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
                      className={`${classes.eventPill} ${
                        slot.cat === 'streamline'
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
  );

  if (embedded) {
    return content;
  }

  return (
    <div className={classes.mockupWrapper}>
      {content}
    </div>
  );
};

export default CalendarMockup;
