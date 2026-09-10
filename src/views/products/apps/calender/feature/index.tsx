'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import ComparisonTemp from '../../../../../components/comparationTemp/index';
import calendarDataJson from '../../../../../data/calendar.json';
import {
  SvgPhoneIcon,
  SvgTarget,
  SvgUtensils,
  SvgSmartphone,
  SvgTrendingUp,
} from '../../../../../components/svg/CustomIcons';

// Calendar icon SVG
const SvgCalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
    <line x1={16} y1={2} x2={16} y2={6} />
    <line x1={8} y1={2} x2={8} y2={6} />
    <line x1={3} y1={10} x2={21} y2={10} />
  </svg>
);

// Plane SVG for Out of Office event
const SvgPlane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 3 }}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-.9 1.1 0 .4.2.8.5 1L6 12l-2 3.5c-.2.3-.1.7.2.9.2.1.4.2.6.2.2 0 .4-.1.5-.2L9 14l4 4 .3 3.6c.1.5.5.9 1.1.9.4 0 .8-.2 1-.5l.4-.8z" />
  </svg>
);

const CalenderFeature = () => {
  const classes = useStyles();
  const hero = calendarDataJson.feature.hero;
  const zeroDoubleEntry = calendarDataJson.feature.zeroDoubleEntry;
  const organization = calendarDataJson.feature.organization;
  const mobile = calendarDataJson.feature.mobile;

  // Calendar Mockup interactive toggles
  const [showStreamline, setShowStreamline] = useState(true);
  const [showCalls, setShowCalls] = useState(true);
  const [showCustom, setShowCustom] = useState(true);

  // Intelligent Organization active view layer interactive toggles
  const [layerStreamline, setLayerStreamline] = useState(true);
  const [layerCalls, setLayerCalls] = useState(false);

  // Interactive tag filters state
  const [activeTags, setActiveTags] = useState<Record<string, boolean>>({
    "Urgent Deliverables": true,
    "Q3 Roadmap": true,
    "HR & Offboarding": true,
    "Internal Syncs (Hidden)": false,
  });

  const toggleTag = (name: string) => {
    setActiveTags((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className={classes.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.heroSection}>
        <div className={classes.heroGlow} />

        <div className={classes.heroContent}>
          {/* Badge */}
          <div className={classes.badge}>
            <span className={classes.badgeIcon}><SvgCalendarIcon /></span>
            <span>{hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className={classes.heroTitle}>
            {hero.title}
            <span className={classes.titleGradient}>{hero.titleGradient}</span>
          </h1>

          {/* Paragraph */}
          <p className={classes.heroParagraph}>{hero.content}</p>

          {/* Action CTA */}
          <button className={classes.heroCtaButton}>
            <span>{hero.cta}</span>
          </button>
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* CALENDAR INTERFACE MOCKUP */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className={classes.mockupContainer}>
          {/* Mockup Window Chrome */}
          <div className={classes.mockupHeader}>
            <div className={classes.windowDots}>
              <div className={classes.dot} />
              <div className={classes.dot} />
              <div className={classes.dot} />
            </div>

            <div className={classes.mockupUrlChip}>
              cal.weblings.com <span className={classes.monthBadge}>September 2026</span>
            </div>

            <div className={classes.avatar}>AS</div>
          </div>

          {/* Smart Filters Toolbar */}
          <div className={classes.filterBar}>
            <div className={classes.filterBarLeft}>
              <h2 className={classes.filterMonthTitle}>September 2026</h2>
              <div className={classes.filterDivider} />

              <div className={classes.toggleGroup}>
                {/* Streamline Tickets Toggle */}
                <div
                  className={classes.toggleItem}
                  onClick={() => setShowStreamline(!showStreamline)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`${classes.toggleSwitch} ${
                      showStreamline ? classes.switchIndigoOn : classes.switchOff
                    }`}
                  >
                    <div className={classes.toggleKnob} />
                  </div>
                  <span>Streamline Tickets</span>
                </div>

                {/* Team Calls Toggle */}
                <div
                  className={classes.toggleItem}
                  onClick={() => setShowCalls(!showCalls)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`${classes.toggleSwitch} ${
                      showCalls ? classes.switchRoseOn : classes.switchOff
                    }`}
                  >
                    <div className={classes.toggleKnob} />
                  </div>
                  <span>Team Calls</span>
                </div>

                {/* Custom Events Toggle */}
                <div
                  className={classes.toggleItem}
                  onClick={() => setShowCustom(!showCustom)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`${classes.toggleSwitch} ${
                      showCustom ? classes.switchAmberOn : classes.switchOff
                    }`}
                  >
                    <div className={classes.toggleKnob} />
                  </div>
                  <span>Custom Events</span>
                </div>
              </div>
            </div>

            <button className={classes.newEventBtn}>+ New Event</button>
          </div>

          {/* Calendar Grid */}
          <div>
            {/* Days Header */}
            <div className={classes.gridHeader}>
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>

            {/* Grid Body */}
            <div className={classes.gridBody}>
              {/* Row 1: Week 1 */}
              <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                <span className={classes.dayNumber}>30</span>
              </div>
              <div className={`${classes.calendarCell} ${classes.cellDimmed}`}>
                <span className={classes.dayNumber}>31</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>1</span>
                {showCalls && (
                  <div className={classes.eventPillRose}>
                    <SvgPhoneIcon width={12} height={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Client Huddle
                  </div>
                )}
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>2</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>3</span>
                {showCustom && (
                  <div className={classes.eventPillAmber}>
                    <SvgUtensils width={12} height={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Office Lunch
                  </div>
                )}
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>4</span>
              </div>
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>5</span>
              </div>

              {/* Row 2: Week 2 */}
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>6</span>
              </div>

              {/* Day 7 (Anchor for Spanning Epic) */}
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>7</span>
                {showStreamline && (
                  <div className={classes.spanningEpicBar}>
                    <span className={classes.epicCodeBadge}>STR-104</span>
                    Backend Migration Epic
                  </div>
                )}
              </div>

              {/* Day 8 */}
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>8</span>
              </div>

              {/* Day 9 (Today Badge & Board Meeting) */}
              <div className={`${classes.calendarCell} ${classes.cellActiveDay}`}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className={classes.todayBadge}>9</span>
                </div>
                {showCalls && (
                  <div
                    className={classes.eventPillRose}
                    style={{ marginTop: '36px', zIndex: 20, position: 'relative' }}
                  >
                    <SvgPhoneIcon width={12} height={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Board Meeting
                  </div>
                )}
              </div>

              {/* Day 10 */}
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>10</span>
              </div>

              {/* Day 11 */}
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>11</span>
                {showCustom && (
                  <div className={classes.eventPillCyan}>
                    <SvgPlane /> Out of Office
                  </div>
                )}
              </div>

              {/* Day 12 */}
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>12</span>
              </div>

              {/* Row 3: Week 3 */}
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>13</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>14</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>15</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>16</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>17</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>18</span>
              </div>
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>19</span>
              </div>

              {/* Row 4: Week 4 */}
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>20</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>21</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>22</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>23</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>24</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>25</span>
              </div>
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>26</span>
              </div>

              {/* Row 5: Week 5 */}
              <div className={`${classes.calendarCell} ${classes.cellWeekend}`}>
                <span className={classes.dayNumber}>27</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>28</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>29</span>
              </div>
              <div className={classes.calendarCell}>
                <span className={classes.dayNumber}>30</span>
              </div>
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
          <div className={`${classes.glassCard} ${classes.cardBorderIndigo}`}>
            <div className={classes.cardIconBox}><SvgTarget width={26} height={26} /></div>
            <h3 className={classes.cardTitle}>{zeroDoubleEntry.cards[0].title}</h3>
            <p className={classes.cardParagraph}>{zeroDoubleEntry.cards[0].description}</p>
            <div className={classes.cardChipContainer}>
              <span className={classes.chipBadgeIndigo}>
                {zeroDoubleEntry.cards[0].badge.code}
              </span>
              <span className={classes.chipTextIndigo}>
                {zeroDoubleEntry.cards[0].badge.label}
              </span>
            </div>
          </div>

          {/* Card 2: Team Chat Calls */}
          <div className={`${classes.glassCard} ${classes.cardBorderRose}`}>
            <div className={classes.cardIconBox}><SvgPhoneIcon width={26} height={26} /></div>
            <h3 className={classes.cardTitle}>{zeroDoubleEntry.cards[1].title}</h3>
            <p className={classes.cardParagraph}>{zeroDoubleEntry.cards[1].description}</p>
            <div className={classes.cardChipContainer}>
              <span className={classes.chipBadgeRose}>
                {zeroDoubleEntry.cards[1].badge.code}
              </span>
              <span className={classes.chipTextRose}>
                {zeroDoubleEntry.cards[1].badge.label}
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
              <div className={classes.graphicAmbientGlow} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className={classes.graphicTitle}>Filter by Tag</div>

                {/* Tag Chips */}
                <div className={classes.tagChipsRow}>
                  <span
                    className={`${classes.tagChip} ${
                      activeTags['Urgent Deliverables']
                        ? classes.tagRose
                        : classes.tagCyanMuted
                    }`}
                    onClick={() => toggleTag('Urgent Deliverables')}
                  >
                    Urgent Deliverables
                  </span>
                  <span
                    className={`${classes.tagChip} ${
                      activeTags['Q3 Roadmap']
                        ? classes.tagIndigo
                        : classes.tagCyanMuted
                    }`}
                    onClick={() => toggleTag('Q3 Roadmap')}
                  >
                    Q3 Roadmap
                  </span>
                  <span
                    className={`${classes.tagChip} ${
                      activeTags['HR & Offboarding']
                        ? classes.tagEmerald
                        : classes.tagCyanMuted
                    }`}
                    onClick={() => toggleTag('HR & Offboarding')}
                  >
                    HR & Offboarding
                  </span>
                  <span
                    className={`${classes.tagChip} ${
                      activeTags['Internal Syncs (Hidden)']
                        ? classes.tagIndigo
                        : classes.tagCyanMuted
                    }`}
                    onClick={() => toggleTag('Internal Syncs (Hidden)')}
                  >
                    Internal Syncs (Hidden)
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
                      className={
                        layerStreamline
                          ? classes.layerSwitchActive
                          : classes.layerSwitchInactive
                      }
                      onClick={() => setLayerStreamline(!layerStreamline)}
                    >
                      <div
                        className={
                          layerStreamline
                            ? classes.layerSwitchKnobActive
                            : classes.layerSwitchKnobInactive
                        }
                      />
                    </div>
                  </div>

                  <div
                    className={`${classes.layerRow} ${
                      !layerCalls ? classes.layerRowMuted : ''
                    }`}
                  >
                    <span className={classes.layerLabel}>Show Team Calls</span>
                    <div
                      className={
                        layerCalls
                          ? classes.layerSwitchActive
                          : classes.layerSwitchInactive
                      }
                      onClick={() => setLayerCalls(!layerCalls)}
                    >
                      <div
                        className={
                          layerCalls
                            ? classes.layerSwitchKnobActive
                            : classes.layerSwitchKnobInactive
                        }
                      />
                    </div>
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
      <section className={classes.sectionContainer}>
        <div className={classes.sectionHeaderCentered}>
          <h2 className={classes.sectionTitle}>{mobile.title}</h2>
          <p className={classes.sectionDescription}>{mobile.description}</p>
        </div>

        <div className={classes.twoCardGrid}>
          {mobile.cards.map((card: any) => (
            <div key={card.id} className={classes.glassCard}>
              <div className={classes.mobileCardIcon}>
                {card.icon === 'mobile' || card.id === 'employee' ? (
                  <SvgSmartphone width={28} height={28} />
                ) : (
                  <SvgTrendingUp width={28} height={28} />
                )}
              </div>
              <h3 className={classes.cardTitle}>{card.title}</h3>
              <div className={classes.mobileKicker}>{card.kicker}</div>
              <p className={classes.cardParagraph}>{card.description}</p>
              <div className={classes.badgeRow}>
                {card.badges.map((b: string) => (
                  <span key={b} className={classes.platformPill}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* COMPARISON SECTION */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <div className={classes.comparisonWrapper}>
        <ComparisonTemp comparisonData={calendarDataJson.comparison} />
      </div>
    </div>
  );
};

export default CalenderFeature;