'use client';

import React, { useState } from "react";
import { useStyles } from "./style";
import PhoneMockup from "../../../../../components/phoneMockup";
import AppStoreButtons from "../../../../../components/appStoreButtons";
import {
  BrainIcon,
  MicIcon,
  BoltIcon,
  ClipboardCheckIcon,
  CodeSearchIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  GlobeIcon,
  BuildingIcon,
  LockIcon,
  BarChartIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  HandshakeIcon,
  CloudServerIcon,
  ShieldLockIcon,
  DoorOpenIcon,
} from "../../../../../assets/icons_component";

const WorkSuiteFeature: React.FC = () => {
  const classes = useStyles();
  const [activeConsoleModule, setActiveConsoleModule] = useState<string>("Streamline");
  const [hoveredFlowCard, setHoveredFlowCard] = useState<string | null>(null);
  const [hoveredMobileCard, setHoveredMobileCard] = useState<string | null>(null);
  const [hoveredFounderItem, setHoveredFounderItem] = useState<string | null>(null);
  const [hoveredMigrationCard, setHoveredMigrationCard] = useState<string | null>(null);

  const consoleModules = [
    { name: "E-Office", badge: "HRMS", badgeType: "default" },
    { name: "Streamline", badge: "Active", badgeType: "active" },
    { name: "Calendar", badge: "3", badgeType: "default" },
    { name: "Team Chat", badge: "New", badgeType: "red" },
    { name: "Drive", badge: null, badgeType: null },
    { name: "Inbox", badge: null, badgeType: null },
  ];

  return (
    <div className={classes.pageWrapper}>
      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                                  */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.heroSection}>
        <div className={classes.heroGlow} />

        <div className={classes.heroContent}>
          {/* Eyebrow Badge */}
          <div className={classes.eyebrowBadge}>
            <span className={classes.pulseDot} />
            <span>The All-in-One Business Operating System</span>
          </div>

          {/* Heading */}
          <h1 className={classes.heroTitle}>
            One workspace. Six apps. One simple invoice.<br />
            <span className={classes.heroTitleAccent}>
              With built-in AI to manage your client specs<br />and enforce developer code standards.
            </span>
          </h1>

          {/* Paragraph */}
          <p className={classes.heroParagraph}>
            The all-in-one business workspace uniting your HRMS, agile ticketing, team chat, shared calendar, cloud drive, and webmail from a single secure dashboard. We&apos;ve combined enterprise-grade scalability, fraction-of-the-cost pricing, and a built-in AI engine that automatically turns client calls into tickets—ensuring your developers build exactly what was promised.
          </p>

          {/* CTA Buttons */}
          <div className={classes.heroBtnRow}>
            <div className={classes.primaryBtnWrapper}>
              <button className={classes.primaryBtn}>
                <span>Start Free Trial</span>
              </button>
              <span className={classes.primaryBtnSubtext}>No credit card required.</span>
            </div>

            <button className={classes.secondaryBtn}>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* OS CONSOLE MOCKUP */}
          <div className={classes.consoleMockupWrapper}>
            {/* Top Bar with macOS Window Controls */}
            <div className={classes.consoleHeader}>
              <div className={classes.macDots}>
                <div className={classes.dotRed} />
                <div className={classes.dotYellow} />
                <div className={classes.dotGreen} />
              </div>
              <div className={classes.consoleTitleText}>
                Weblings Workspace — <span>Chennai HQ [Sandboxed]</span>
              </div>
              <div className={classes.statusHealthyPill}>
                ● System Healthy
              </div>
            </div>

            {/* Console Body: 3-column Layout */}
            <div className={classes.consoleBodyGrid}>
              {/* Left Sidebar: Modules */}
              <div className={classes.consoleSidebar}>
                <div className={classes.sidebarHeader}>Worksuite Modules</div>
                <div className={classes.sidebarNavList}>
                  {consoleModules.map((module) => {
                    const isActive = activeConsoleModule === module.name;
                    return (
                      <div
                        key={module.name}
                        className={isActive ? classes.sidebarNavItemActive : classes.sidebarNavItem}
                        onClick={() => setActiveConsoleModule(module.name)}
                      >
                        <span>{module.name}</span>
                        {module.badge && (
                          <span
                            className={
                              module.badgeType === "active"
                                ? classes.sidebarPillActive
                                : module.badgeType === "red"
                                ? classes.sidebarPillRed
                                : classes.sidebarPill
                            }
                          >
                            {module.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center Panel: Active Sprint */}
              <div className={classes.consoleCenterPanel}>
                <div className={classes.centerTopRow}>
                  <div>
                    <h3 className={classes.centerSprintTitle}>Active Sprint: Launch v2.0</h3>
                    <p className={classes.centerSprintSub}>Synced with Unified Calendar</p>
                  </div>
                  <button className={classes.createTicketBtn}>
                    + Create Ticket
                  </button>
                </div>

                <div className={classes.sprintColumnsGrid}>
                  {/* Column 1: In Progress */}
                  <div className={classes.sprintColBox}>
                    <div className={classes.colHeaderYellow}>IN PROGRESS (2)</div>
                    <div className={classes.ticketCard}>
                      <span className={classes.ticketTag}>STR-104</span>
                      <div className={classes.ticketTitle}>Auto-provision custom MX via API</div>
                      <div className={classes.ticketAssignee}>Assignee: Gowtham</div>
                    </div>
                  </div>

                  {/* Column 2: Deployed */}
                  <div className={classes.sprintColBox}>
                    <div className={classes.colHeaderGreen}>DEPLOYED (1)</div>
                    <div className={classes.ticketCard}>
                      <span className={classes.ticketTag}>HR-012</span>
                      <div className={classes.ticketTitle}>E-Office biometric sync</div>
                      <div className={classes.ticketVerified}>✓ Verified in Prod</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Live Channel */}
              <div className={classes.consoleRightPanel}>
                <div>
                  <div className={classes.channelHeader}># general-engineering</div>
                  <div className={classes.chatMessagesStack}>
                    <div className={classes.chatMsgCard}>
                      <div className={classes.chatSenderBlue}>E-Office Bot</div>
                      <p className={classes.chatMsgText}>
                        New team lead added. Created workspace email: lead@abc.com
                      </p>
                    </div>

                    <div className={classes.chatMsgCardPurple}>
                      <div className={classes.chatSenderPurple}>AI Scope Engine</div>
                      <p className={classes.chatMsgText}>
                        Change of Request (COR) approved by client. 3 new tickets generated and assigned to team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={classes.chatInputPlaceholder}>
                  Message #general...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 2. TICKER SECTION (REPLACE YOUR FRAGMENTED TOOL STACK)           */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.tickerSection}>
        <div className={classes.tickerKicker}>Replace your fragmented tool stack</div>
        <div className={classes.tickerList}>
          <span className={classes.strikethroughTool}>Slack</span>
          <span className={classes.strikethroughTool}>Jira</span>
          <span className={classes.strikethroughTool}>Google Workspace</span>
          <span className={classes.strikethroughTool}>BambooHR / Keka</span>
          <span className={classes.strikethroughTool}>Dropbox</span>
          <span className={classes.strikethroughTool}>Zoom</span>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 3. DUAL-ENGINE INTELLIGENCE                                      */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.aiSection}>
        <div className={classes.sectionHeaderCenter}>
          <div className={classes.dualEngineBadge}>
            <span className={classes.purpleDot} />
            <span className={classes.cyanDot} />
            <span>Dual-Engine Intelligence</span>
          </div>

          <h2 className={classes.sectionTitle}>
            AI That Protects Your Scope <br />and Enforces Your Code
          </h2>
          <p className={classes.sectionSubtitle}>
            Integrated AI listens to client meetings to catch new requests automatically, then double-checks your team&apos;s code every night to make sure nothing was missed.
          </p>
        </div>

        {/* Part A: The Client Meeting Flow (Purple Theme) */}
        <div className={classes.engineBlock}>
          <div className={classes.engineHeaderRow}>
            <div className={classes.engineBadgeA}>A</div>
            <h3 className={classes.engineHeadingPurple}>The Client Meeting Flow</h3>
          </div>

          <div className={classes.threeCardsGrid}>
            {/* Card 1 */}
            <div
              className={classes.flowCardPurple}
              onMouseEnter={() => setHoveredFlowCard('brain')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><BrainIcon width={28} height={28} isHovered={hoveredFlowCard === 'brain'} /></div>
              <h4 className={classes.flowCardTitle}>1. The Baseline Brain</h4>
              <p className={classes.flowCardText}>
                Upload your initial project PDFs, designs, and requirements. The AI memorizes every detail, converting it into an unshakeable Single Source of Truth (SSOT).
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={classes.flowCardPurple}
              onMouseEnter={() => setHoveredFlowCard('mic')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><MicIcon width={28} height={28} isHovered={hoveredFlowCard === 'mic'} /></div>
              <h4 className={classes.flowCardTitle}>2. Smart Call Tracking</h4>
              <p className={classes.flowCardText}>
                Click a button during your client meeting. The AI transcribes the conversation, compares it against the original project baseline, and instantly flags new feature requests.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={classes.flowCardPurple}
              onMouseEnter={() => setHoveredFlowCard('bolt')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><BoltIcon width={28} height={28} isHovered={hoveredFlowCard === 'bolt'} /></div>
              <h4 className={classes.flowCardTitle}>3. Auto-Create Tickets</h4>
              <p className={classes.flowCardText}>
                Review the changes, approve the Change of Request (COR), and let the AI handle the rest. It automatically creates and assigns the new tasks to your team—zero manual data entry.
              </p>
            </div>
          </div>
        </div>

        {/* Part B: The Developer Code Flow (Cyan Theme) */}
        <div className={classes.engineBlock}>
          <div className={classes.engineHeaderRow}>
            <div className={classes.engineBadgeB}>B</div>
            <h3 className={classes.engineHeadingCyan}>The Developer Code Flow</h3>
          </div>

          <div className={classes.threeCardsGrid}>
            {/* Card 1 */}
            <div
              className={classes.flowCardCyan}
              onMouseEnter={() => setHoveredFlowCard('clipboard')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><ClipboardCheckIcon width={28} height={28} isHovered={hoveredFlowCard === 'clipboard'} /></div>
              <h4 className={classes.flowCardTitle}>1. The Daily Guide</h4>
              <p className={classes.flowCardText}>
                The AI automatically hands your developers the updated client rules every day, right inside their coding tools.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={classes.flowCardCyan}
              onMouseEnter={() => setHoveredFlowCard('codesearch')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><CodeSearchIcon width={28} height={28} isHovered={hoveredFlowCard === 'codesearch'} /></div>
              <h4 className={classes.flowCardTitle}>2. Nightly Code Review</h4>
              <p className={classes.flowCardText}>
                Every night, the AI reviews the code your team wrote that day. It analyzes all daily Git commits—across any language from React to Java or Swift—directly against the client&apos;s latest requirements.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={classes.flowCardCyan}
              onMouseEnter={() => setHoveredFlowCard('shield')}
              onMouseLeave={() => setHoveredFlowCard(null)}
            >
              <div className={classes.flowCardIconBox}><ShieldCheckIcon width={28} height={28} isHovered={hoveredFlowCard === 'shield'} /></div>
              <h4 className={classes.flowCardTitle}>3. Morning Alerts</h4>
              <p className={classes.flowCardText}>
                If a developer misses a client rule, you receive an alert the next morning so you can fix deviations before they become expensive delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 4. AUTOMATIONS SECTION (HOW THE ENGINE RUNS TOGETHER)            */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.automationsSection}>
        <div className={classes.sectionHeaderCenter}>
          <h2 className={classes.sectionTitle}>How the Engine Runs Together</h2>
          <p className={classes.sectionSubtitle}>
            Zero third-party duct tape. Everything works out of the box.
          </p>
        </div>

        <div className={classes.automationsStack}>
          {/* Item 01 */}
          <div className={classes.automationRow}>
            <div className={classes.autoNumberBox}>01</div>
            <div>
              <h3 className={classes.autoTitle}>Zero-Day Onboarding</h3>
              <p className={classes.autoText}>
                Welcome new hires on day one—without the IT wait. Add a new team member in E-Office, and their custom business email is ready in seconds. No more waiting days for Jira access or waiting around for Slack invites just to say hello to teammates. New teammates can jump straight into ongoing projects, join team chats, and start collaborating from their very first hour.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className={classes.automationRow}>
            <div className={classes.autoNumberBox}>02</div>
            <div>
              <h3 className={classes.autoTitle}>Instant Team Alignment</h3>
              <p className={classes.autoText}>
                Start a project, and your workspace builds itself. When you kick off a new project, everything your team needs is created automatically. A dedicated agile board appears in Streamline, and a project channel pops up in Chat right away. You can share tasks, trade updates, and celebrate milestones together without ever copying user lists or setting up permissions by hand.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className={classes.automationRow}>
            <div className={classes.autoNumberBox}>03</div>
            <div>
              <h3 className={classes.autoTitle}>Unified Team Identity</h3>
              <p className={classes.autoText}>
                Update your profile once, and you&apos;re set everywhere. Changed your display name, took a fresh profile picture, or stepped into a new role? Update it once in your account settings, and it instantly refreshes across your company emails, chat messages, ticket assignments, and shared documents. Everyone sees who you are right away—clean, consistent, and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 5. MOBILE APPS SECTION (STAY IN THE LOOP ANYWHERE)               */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.mobileSection}>
        <div className={classes.mobileContainer}>
          <div className={classes.sectionHeaderCenter}>
            <h2 className={classes.sectionTitle}>Stay in the Loop Anywhere</h2>
            <p className={classes.sectionSubtitle}>
              Dedicated mobile apps available on both iOS and Android. Whether you are on the floor, traveling between branches, or stepping away from your desk, critical updates reach you the second they happen.
            </p>
          </div>

          <div className={classes.mobileSplitGrid}>
            {/* Left Column: Mobile Capability Cards & App Store Buttons */}
            <div className={classes.mobileCardsCol}>
              {/* Card 1: Every Employee */}
              <div
                className={classes.mobileCard}
                onMouseEnter={() => setHoveredMobileCard('smartphone')}
                onMouseLeave={() => setHoveredMobileCard(null)}
              >
                <div className={classes.mobileCardIconBox}><SmartphoneIcon width={32} height={32} isHovered={hoveredMobileCard === 'smartphone'} /></div>
                <h3 className={classes.mobileCardTitle}>The Whole Office in Your Pocket</h3>
                <div className={classes.mobileCardAudiencePill}>For Every Employee</div>
                <p className={classes.mobileCardText}>
                  Never miss an urgent ping, new email, or ticket status shift. Team members can approve leave requests, review project timelines, join audio calls, and respond to clients instantly—whether sitting at a workstation or on the move.
                </p>
                <div className={classes.mobileTagRow}>
                  <span className={classes.mobilePlatformTag}>iOS App</span>
                  <span className={classes.mobilePlatformTag}>Android App</span>
                </div>
              </div>

              {/* Card 2: Founders & Executives */}
              <div
                className={classes.mobileCard}
                onMouseEnter={() => setHoveredMobileCard('trending')}
                onMouseLeave={() => setHoveredMobileCard(null)}
              >
                <div className={classes.mobileCardIconBox}><TrendingUpIcon width={32} height={32} isHovered={hoveredMobileCard === 'trending'} /></div>
                <h3 className={classes.mobileCardTitle}>Real-Time Oversight on the Go</h3>
                <div className={classes.mobileCardAudiencePill}>For Founders &amp; Executives</div>
                <p className={classes.mobileCardText}>
                  Stay tuned to your company’s pulse without checking a laptop. Receive instant alerts on high-priority milestones, cross-branch storage limits, critical system alerts, and headcount changes across every location right on your phone.
                </p>
                <div className={classes.mobileTagRow}>
                  <span className={classes.mobilePlatformTag}>iOS App</span>
                  <span className={classes.mobilePlatformTag}>Android App</span>
                </div>
              </div>

              {/* Universal App Store & Play Store Buttons */}
              <AppStoreButtons reviewCountText="Over 45,000+ active enterprise reviews" />
            </div>

            {/* Right Column: Authentic Universal Phone Mockup */}
            <div className={classes.mobilePhoneCol}>
              <PhoneMockup variant="dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 6. FOUNDER CONTROL (BUILT FOR GROWING BUSINESSES)                */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.founderSection}>
        <div className={classes.sectionHeaderCenter}>
          <h2 className={classes.sectionTitle}>
            Built for Growing Businesses <br />with Multiple Locations
          </h2>
          <p className={classes.sectionSubtitle}>
            Manage all your branches and custom domains from the top, while keeping everyday operations completely private.
          </p>
        </div>

        <div className={classes.founderGrid}>
          {/* Item 1 */}
          <div
            className={classes.founderItem}
            onMouseEnter={() => setHoveredFounderItem('globe')}
            onMouseLeave={() => setHoveredFounderItem(null)}
          >
            <div className={classes.founderIcon}><GlobeIcon width={28} height={28} isHovered={hoveredFounderItem === 'globe'} /></div>
            <div>
              <h3 className={classes.founderItemTitle}>Instant Domain Setup in 30 Seconds</h3>
              <p className={classes.founderItemText}>
                Add your company web address or pick up a new one right inside the dashboard. MX records, email security, and DNS configure themselves behind the scenes in under 30 seconds—no tech expertise needed.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className={classes.founderItem}
            onMouseEnter={() => setHoveredFounderItem('building')}
            onMouseLeave={() => setHoveredFounderItem(null)}
          >
            <div className={classes.founderIcon}><BuildingIcon width={28} height={28} isHovered={hoveredFounderItem === 'building'} /></div>
            <div>
              <h3 className={classes.founderItemTitle}>Flexible Web Addresses for Every Office</h3>
              <p className={classes.founderItemText}>
                Use one main company web address across all your offices, or assign different addresses to different locations. Whenever HR adds a new team member, they simply pick the right location address from a dropdown, and the new work email is ready immediately.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className={classes.founderItem}
            onMouseEnter={() => setHoveredFounderItem('lock')}
            onMouseLeave={() => setHoveredFounderItem(null)}
          >
            <div className={classes.founderIcon}><LockIcon width={28} height={28} isHovered={hoveredFounderItem === 'lock'} /></div>
            <div>
              <h3 className={classes.founderItemTitle}>Complete Privacy Between Offices</h3>
              <p className={classes.founderItemText}>
                Keep local branch files, discussions, and tasks strictly within the local team. Employees only see what belongs to their office, so sensitive client work and internal communications stay completely confidential.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            className={classes.founderItem}
            onMouseEnter={() => setHoveredFounderItem('barchart')}
            onMouseLeave={() => setHoveredFounderItem(null)}
          >
            <div className={classes.founderIcon}><BarChartIcon width={28} height={28} isHovered={hoveredFounderItem === 'barchart'} /></div>
            <div>
              <h3 className={classes.founderItemTitle}>Clear Big-Picture Insights for Founders</h3>
              <p className={classes.founderItemText}>
                Keep an eye on company-wide growth without digging into day-to-day clutter. Check team headcounts, storage usage, and active branches at a glance from your executive console.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 7. HESITATION & MIGRATION SECTION (TERRIFIED OF MIGRATING?)      */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className={classes.migrationSection}>
        <div className={classes.sectionHeaderCenter}>
          <h2 className={classes.sectionTitle}>Terrified of Migrating? Don&apos;t Be.</h2>
          <p className={classes.sectionSubtitle}>
            We know migrating enterprise data is scary. That&apos;s why we&apos;ve engineered a zero-friction adoption process built on Fort Knox infrastructure.
          </p>
        </div>

        <div className={classes.migrationGrid}>
          {/* Card 1 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('norip')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><CheckCircleIcon width={22} height={22} isHovered={hoveredMigrationCard === 'norip'} /></span>
              <h4 className={classes.migrationCardTitle}>No &quot;Rip &amp; Replace&quot; Rollout</h4>
            </div>
            <p className={classes.migrationCardText}>
              Start by using just our HRMS or Webmail at absolutely zero cost. Let your team keep using Jira and Teams while they slowly get comfortable with our ecosystem at their own pace.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('teams')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><MessageSquareIcon width={22} height={22} isHovered={hoveredMigrationCard === 'teams'} /></span>
              <h4 className={classes.migrationCardTitle}>MS Teams Embedded</h4>
            </div>
            <p className={classes.migrationCardText}>
              Worried about external clients? We built an embedded MS Teams interface. Authenticate in 5 minutes and host standard Teams calls right from inside our dashboard.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('handshake')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><HandshakeIcon width={22} height={22} isHovered={hoveredMigrationCard === 'handshake'} /></span>
              <h4 className={classes.migrationCardTitle}>White-Glove Migration</h4>
            </div>
            <p className={classes.migrationCardText}>
              Forget buggy import scripts. A real human engineer will connect with you and personally migrate your data from your old platforms into our system at zero cost.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('cloud')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><CloudServerIcon width={22} height={22} isHovered={hoveredMigrationCard === 'cloud'} /></span>
              <h4 className={classes.migrationCardTitle}>Internet-Scale Stability</h4>
            </div>
            <p className={classes.migrationCardText}>
              We run on the exact same backbone that powers the modern internet: AWS and Cloudflare. You get unparalleled global edge performance and stability that scales effortlessly.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('shieldlock')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><ShieldLockIcon width={22} height={22} isHovered={hoveredMigrationCard === 'shieldlock'} /></span>
              <h4 className={classes.migrationCardTitle}>Absolute DB Isolation</h4>
            </div>
            <p className={classes.migrationCardText}>
              You do not share a database with anyone. Every organization gets its own isolated database protected by the highest tier of encryption available.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className={classes.migrationCard}
            onMouseEnter={() => setHoveredMigrationCard('door')}
            onMouseLeave={() => setHoveredMigrationCard(null)}
          >
            <div className={classes.migrationCardTitleRow}>
              <span className={classes.migrationBadgeIcon}><DoorOpenIcon width={22} height={22} isHovered={hoveredMigrationCard === 'door'} /></span>
              <h4 className={classes.migrationCardTitle}>Zero Vendor Lock-In</h4>
            </div>
            <p className={classes.migrationCardText}>
              If you ever leave, we hand over your entire isolated database. Zero residual data is left on our servers. The domains you purchase are 100% yours to keep.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={classes.bottomCtaBanner}>
          <button className={classes.bottomCtaBtn}>
            Deploy Your Custom Workspace Today
          </button>
          <div className={classes.bottomCtaSub}>
            Takes less than 60 seconds. No credit card required.
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkSuiteFeature;
