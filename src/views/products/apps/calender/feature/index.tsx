'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import AppStoreButtons from '../../../../../components/appStoreButtons';
import WorkspaceDashboardMockup from '../../../../../components/dashboardMockup';
import {
  CalendarOrbitAnimation,
  CalendarScheduleSyncAnimation,
} from '../../../../../components/ambientAnimations';
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

const RevealOnScroll: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, className, delay = 0, style }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const CalenderFeature = () => {
  const classes = useStyles();
  const hero = calendarDataJson.feature.hero;
  const zeroDoubleEntry = calendarDataJson.feature.zeroDoubleEntry;
  const organization = calendarDataJson.feature.organization;
  const mobile = calendarDataJson.feature.mobile;

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
          <WorkspaceDashboardMockup variant="calender" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: ZERO DOUBLE-ENTRY (ANIMATED CENTERPIECE) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={`${classes.sectionContainer} ${classes.sectionContainerAnimated}`}>
        {/* Living Ambient Canvas with Floating Blooms, Pulse Core & Tech Nodes */}
        <div className={classes.chronoAmbientCanvas}>
          <div className={classes.chronoGridOverlay} />
          <div className={classes.chronoBlobBrand} />
          <div className={classes.chronoBlobInfo} />
          <div className={classes.chronoBlobCenter} />
          <div className={classes.chronoTimelineTrack}>
            <div className={classes.chronoTimelineBar} />
          </div>
          <div className={classes.chronoTimelineTrackBottom}>
            <div className={classes.chronoTimelineBarBottom} />
          </div>
          <CalendarOrbitAnimation />
          <CalendarScheduleSyncAnimation />
        </div>
        <div className={classes.sectionInner}>
          <RevealOnScroll>
            <div className={classes.sectionHeaderCentered}>
              <span className={classes.kicker}>{zeroDoubleEntry.kicker}</span>
              <h2 className={classes.sectionTitle}>{zeroDoubleEntry.title}</h2>
              <p className={classes.sectionDescription}>{zeroDoubleEntry.description}</p>
            </div>
          </RevealOnScroll>

          <div className={classes.twoCardGrid}>
            {/* Card 1: Streamline Tickets */}
            <RevealOnScroll delay={100}>
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
            </RevealOnScroll>

            {/* Card 2: Team Chat Calls */}
            <RevealOnScroll delay={220}>
              <div
                className={`${classes.glassCard} ${classes.cardBorderRose}`}
                onMouseEnter={() => setHoveredZeroCard('chat')}
                onMouseLeave={() => setHoveredZeroCard(null)}
              >
                <div>
                  <div className={classes.cardIconBox} style={{ color: '#F43F5E', backgroundColor: '#FFF1F2' }}>
                    <BoltIcon width={26} height={26} isHovered={hoveredZeroCard === 'chat'} />
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
                  <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
                    ● Auto-Synced
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: INTELLIGENT ORGANIZATION */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className={classes.sectionContainer}>
        <div className={classes.sectionInner}>
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