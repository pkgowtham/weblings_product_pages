'use client';

import React from "react";
import Link from "next/link";
import { useStyles } from "./style";

const suiteFeatures = [
  ["E-Office HRMS", "Track attendance, manage leave plans, and provision new hires without waiting on IT."],
  ["Streamline", "Custom workflows, sprint tracking, and automated reporting for development teams."],
  ["Team Chat", "Unlimited channels, direct messaging, and quick huddles for focused collaboration."],
  ["Unified Calendar", "Sync schedules, book meetings, and overlay regional holidays with ease."],
  ["Drive", "Secure cloud storage with granular permissions for your project files."],
  ["Inbox", "Full webmail integration with custom domains beside your boards and chat channels."],
];

const aiFeatures = [
  ["Scope Defense Engine", "Turn client calls into exact requirement tickets."],
  ["Nightly Code Checks", "Review developer commits against client baseline rules."],
  ["Vector Document Embeddings", "Ask natural questions about documents stored in Drive."],
  ["Semantic Search", "Find tickets or emails using human language, not exact tags."],
  ["Email Summarization", "Summarize large thread chains instantly."],
];

const milestones = [
  ["October 1, 2026", "Web App Beta Live", "The core six modules open for approved beta testers on desktop browsers."],
  ["November 2026", "Mobile Apps Unlocked", "The Weblings iOS and Android companion apps put your team and tickets in your pocket."],
  ["December 1, 2026", "AI Engine Unleashed", "Scope Defense, semantic search, and document embeddings go live for beta users."],
  ["January 2027", "Production Launch", "Beta concludes, production billing begins, and the platform enters full stability."],
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
            <p className={classes.priceNote}>Standard price: $7 · Free until January 2027</p>
            <Link className={classes.action} href="/contact">Join Basecamp Beta</Link>
            <p className={classes.featureLabel}>Everything included</p>
            <ul className={classes.features}>
              {suiteFeatures.map(([title, copy]) => (
                <li className={classes.feature} key={title}>
                  <span className={classes.check} aria-hidden="true">✓</span>
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
            <p className={classes.priceNote}>Standard price: $15 · Free starting December 1</p>
            <span className={`${classes.action} ${classes.disabledAction}`} aria-disabled="true">AI Engine Disabled</span>
            <p className={classes.featureLabel}>Everything in Basecamp, plus</p>
            <ul className={classes.features}>
              {aiFeatures.map(([title, copy]) => (
                <li className={classes.feature} key={title}>
                  <span className={classes.check} aria-hidden="true">✦</span>
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
            {milestones.map(([date, title, copy]) => (
              <article className={classes.milestone} key={date}>
                <time className={classes.date}>{date}</time>
                <span className={classes.dot} aria-hidden="true" />
                <div>
                  <h3 className={classes.milestoneTitle}>{title}</h3>
                  <p className={classes.milestoneCopy}>{copy}</p>
                </div>
              </article>
            ))}
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