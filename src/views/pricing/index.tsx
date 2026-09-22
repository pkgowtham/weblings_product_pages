'use client';

import React from "react";
import Link from "next/link";
import { useStyles } from "./style";
import { DoneIcon, StarIcon } from "@/assets/icons_component";

const suiteFeatures = [
  ["E-Office HRMS", "Track attendance, manage leave plans, and provision new hires without waiting on IT."],
  ["Streamline", "Custom workflows, sprint tracking, and automated reporting for development teams."],
  ["Team Chat", "Unlimited channels, direct messaging, and quick huddles for focused collaboration."],
  ["Unified Calendar", "Sync schedules, book meetings, and overlay regional holidays with ease."],
  ["Drive", "Secure cloud storage with granular permissions for your project files."],
  ["Inbox", "Full webmail integration with custom domains beside your boards and chat channels."],
];

const aiFeatures = [
  ["Scope Defense Engine", "Turn client calls into structured, actionable tickets without losing meeting context."],
  ["Nightly Code Checks", "Review developer commits overnight against baseline rules to catch scope drift early."],
  ["Vector Document Embeddings", "Ask natural questions about documents in Drive to get exact answers without searching."],
  ["Semantic Search", "Find tickets, emails, or notes using plain language instead of exact keywords or tags."],
  ["Email Summarization", "Collapse long inbox threads into a crisp, one-paragraph summary with a single click."],
];

const milestones = [
  {
    date: "October 1, 2026",
    title: "Web App Beta Live",
    copy: "The core six modules open for approved beta testers on desktop browsers.",
    accent: "blue" as const,
    isLive: true,
  },
  {
    date: "November",
    title: "Mobile Apps Unlocked",
    copy: "The Weblings iOS and Android companion apps put your team and tickets in your pocket.",
    accent: "amber" as const,
    isLive: false,
  },
  {
    date: "December 1, 2026",
    title: "AI Engine Unleashed",
    copy: "Scope Defense, semantic search, and document embeddings go live for beta users.",
    accent: "purple" as const,
    isLive: false,
    hasStar: true,
  },
  {
    date: "January 2027",
    title: "Production Launch",
    copy: "Beta concludes, production billing begins, and the platform enters full stability.",
    accent: "green" as const,
    isLive: false,
  },
];

const PricingView: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <div className={classes.glow} aria-hidden="true" />
      <div className={classes.container}>
        <header className={classes.header}>
          <span className={classes.eyebrow}>Phase 1 beta now open</span>
          <h1 className={classes.title}>Transparent pricing. No bloated corporate fees.</h1>
          <p className={classes.intro}>
            Get early-bird access to the entire Weblings Worksuite for $0 until our launch in January 2027.
            Start with the tools your team needs today and grow into the platform as new capabilities arrive.
          </p>
        </header>

        <section className={classes.plans} aria-label="Weblings Worksuite plans">
          <article className={classes.plan}>
            <div className={classes.planHeader}>
              <div>
                <h2 className={classes.planTitle}>Basecamp Suite</h2>
                <p className={classes.planDescription}>The complete six-app workspace for your team.</p>
              </div>
              <span className={classes.badge}>Beta live</span>
            </div>
            <div className={classes.price}>
              <strong className={classes.amount}>$0</strong>
              <span className={classes.perUser}>/ user / month</span>
            </div>
            <div className={classes.pricingRow}>
              <div className={classes.pricingNow}>
                <span className={classes.pricingNowLabel}>Now (Beta)</span>
                <span className={classes.pricingNowValue}>Free</span>
              </div>
              <span className={classes.pricingArrow}>→</span>
              <div className={classes.pricingLater}>
                <span className={classes.pricingLaterLabel}>From Jan 2027</span>
                <span className={classes.pricingLaterValue}>$7 / user / mo</span>
              </div>
            </div>
            <Link className={classes.action} href="/contact">Join Basecamp Beta</Link>
            <p className={classes.featureLabel}>Everything included</p>
            <ul className={classes.features}>
              {suiteFeatures.map(([title, copy]) => (
                <li className={classes.feature} key={title}>
                  <span className={classes.check} aria-hidden="true">
                    <DoneIcon width={16} height={16} fill="currentColor" />
                  </span>
                  <span><strong>{title}</strong>{copy}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${classes.plan} ${classes.aiPlan}`}>
            <div className={classes.planHeader}>
              <div>
                <h2 className={classes.planTitle}>AI Worksuite</h2>
                <p className={classes.planDescription}>Scope defense and intelligent data retrieval.</p>
              </div>
              <span className={`${classes.badge} ${classes.infoBadge}`}>Unlocks Dec 1</span>
            </div>
            <div className={classes.price}>
              <strong className={classes.amount}>$0</strong>
              <span className={classes.perUser}>/ user / month</span>
            </div>
            <div className={classes.pricingRow}>
              <div className={classes.pricingNow}>
                <span className={classes.pricingNowLabel}>Now (Beta)</span>
                <span className={classes.pricingNowValue}>Free from Dec 1</span>
              </div>
              <span className={classes.pricingArrow}>→</span>
              <div className={classes.pricingLater}>
                <span className={classes.pricingLaterLabel}>From Jan 2027</span>
                <span className={classes.pricingLaterValue}>$15 / user / mo</span>
              </div>
            </div>
            <span className={`${classes.action} ${classes.disabledAction}`} aria-disabled="true">AI Engine Disabled</span>
            <p className={classes.featureLabel}>Everything in Basecamp, plus</p>
            <ul className={classes.features}>
              {aiFeatures.map(([title, copy]) => (
                <li className={classes.feature} key={title}>
                  <span className={classes.check} aria-hidden="true">
                    <StarIcon width={16} height={16} fill="currentColor" stroke="none" />
                  </span>
                  <span><strong>{title}</strong>{copy}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className={classes.section}>
          <header className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>The launch roadmap</h2>
            <p className={classes.sectionIntro}>See exactly when each phase of Weblings Worksuite goes live.</p>
          </header>
          <div className={classes.timeline}>
            {/* Vertical center line */}
            <div className={classes.timelineLine} aria-hidden="true" />
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const datePillClass =
                m.accent === 'blue' ? classes.datePillBlue
                  : m.accent === 'amber' ? classes.datePillAmber
                    : m.accent === 'purple' ? classes.datePillPurple
                      : classes.datePillGreen;
              const dotClass =
                m.accent === 'blue' ? classes.dotBlue
                  : m.accent === 'amber' ? classes.dotAmber
                    : m.accent === 'purple' ? classes.dotPurple
                      : classes.dotGreen;

              const renderTitle = (
                <h3 className={classes.milestoneTitle}>
                  {m.title}
                  {'hasStar' in m && m.hasStar && (
                    <span className={classes.milestoneStar} aria-hidden="true">
                      <StarIcon width={16} height={16} fill="currentColor" stroke="none" />
                    </span>
                  )}
                </h3>
              );

              return (
                <div key={m.date} className={classes.milestoneRow}>
                  {/* Left cell */}
                  <div className={`${classes.milestoneCell} ${classes.milestoneCellLeft}`}>
                    {isLeft ? (
                      <div className={classes.milestoneContent}>
                        {renderTitle}
                        <p className={classes.milestoneCopy}>{m.copy}</p>
                      </div>
                    ) : (
                      <time className={`${classes.datePill} ${datePillClass}`}>{m.date}</time>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className={classes.milestoneDotCol}>
                    <span className={`${classes.dot} ${dotClass}`} aria-hidden="true" />
                  </div>

                  {/* Right cell */}
                  <div className={`${classes.milestoneCell} ${classes.milestoneCellRight}`}>
                    {isLeft ? (
                      <time className={`${classes.datePill} ${datePillClass}`}>{m.date}</time>
                    ) : (
                      <div className={classes.milestoneContent}>
                        {renderTitle}
                        <p className={classes.milestoneCopy}>{m.copy}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile: always show date above content */}
                  <div className={classes.milestoneMobile}>
                    <time className={`${classes.datePill} ${datePillClass} ${classes.datePillMobile}`}>{m.date}</time>
                    {renderTitle}
                    <p className={classes.milestoneCopy}>{m.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={classes.details}>
          <h2 className={classes.sectionTitle}>Beta phase details</h2>
          <article className={classes.detail}>
            <h3 className={classes.detailTitle}>What happens when the beta ends in January?</h3>
            <p className={classes.detailCopy}>
              In late December, active beta organizations can transition to the $7 or $15 production tiers.
              Accounts that do not upgrade will be suspended gracefully, with data export available. Custom domains
              can be transferred to another platform without a lock-in.
            </p>
          </article>
          <article className={classes.detail}>
            <h3 className={classes.detailTitle}>Is my data secure during the beta phase?</h3>
            <p className={classes.detailCopy}>
              Yes. Your data is housed in isolated databases protected by enterprise-grade encryption. We never sell
              your data, serve advertisements, or use private workspace data for anything other than running your software.
            </p>
          </article>
          <p className={classes.detailCopy}>
            Questions about plans or eligibility? <Link className={classes.link} href="/contact">Contact our team</Link>.
            Review the <Link className={classes.link} href="/terms-and-conditions">Terms and Conditions</Link> before joining.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PricingView;