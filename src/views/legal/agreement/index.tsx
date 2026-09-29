'use client';

import React from 'react';
import Link from 'next/link';
import { useStyles } from './style';
import {
  IsolatedDatabaseIcon,
  ImmutableHistoryIcon,
  BranchPrivacyIcon,
  DoorOpenIcon,
} from '../../../assets/icons_component';
import { getSrc } from '../../../utils/getSrc';
import gowthamPhoto from '../../../assets/images/about/gowtham_founder.jpg';

// Target URL for redirect after agreeing
const REDIRECT_URL = 'https://org.weblings.dev';

// Pre-defined twinkling star coordinates for smooth cosmic starry background
const starsData = [
  { top: '10%', left: '20%', size: 4, delay: '0s' },
  { top: '25%', left: '75%', size: 6, delay: '1s' },
  { top: '40%', left: '15%', size: 4, delay: '2s' },
  { top: '15%', left: '50%', size: 8, delay: '0.5s' },
  { top: '60%', left: '80%', size: 4, delay: '1.5s' },
  { top: '75%', left: '30%', size: 6, delay: '0.2s' },
  { top: '85%', left: '85%', size: 5, delay: '2.5s' },
  { top: '30%', left: '35%', size: 4, delay: '1.8s' },
  { top: '50%', left: '60%', size: 5, delay: '0.8s' },
  { top: '70%', left: '10%', size: 4, delay: '3.0s' },
  { top: '5%', left: '88%', size: 5, delay: '1.2s' },
  { top: '92%', left: '48%', size: 4, delay: '2.2s' },
];

const AgreementView: React.FC = () => {
  const classes = useStyles();

  const handleAgree = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className={classes.pageWrapper}>
      {/* Soft Ambient Background Glow */}
      <div className={classes.ambientGlowTop} aria-hidden="true" />

      {/* Decorative Starry Field */}
      <div className={classes.starCanvas} aria-hidden="true">
        {starsData.map((star, index) => (
          <span
            key={index}
            className={classes.star}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <main className={classes.container}>
        {/* PAGE HEADER */}
        <header className={classes.pageHeader}>
          <span className={classes.eyebrow}>Enterprise Beta Program</span>
          <h1 className={classes.title}>
            Early access to the future of work.{' '}
            <span className={classes.titleAccent}>
              Built on a rock-solid foundation.
            </span>
          </h1>
          <p className={classes.intro}>
            We are actively adding new features, fine-tuning functionalities, and making the
            interface more pleasant based on your daily feedback. But under the hood? Our core
            infrastructure is already built for enterprise scale. Here is our uncompromising promise
            to your team.
          </p>
        </header>

        {/* SECTION LABEL */}
        <div className={classes.sectionLabel}>Our four unbreakable guarantees</div>

        {/* 4 TRUST PILLARS — no cards, 2-column divider layout */}
        <div className={classes.trustGrid} role="list">

          {/* Pillar 1 — Isolated Databases */}
          <div className={`${classes.trustItem} ${classes.trustItemBlue}`} role="listitem">
            <div className={`${classes.trustIconWrap} ${classes.trustIconBlue}`}>
              <IsolatedDatabaseIcon width={22} height={22} stroke="#3B82F6" />
            </div>
            <div className={classes.trustItemText}>
              <h3 className={classes.trustItemTitle}>Isolated Databases</h3>
              <p className={classes.trustItemBody}>
                One company, one database. Your data is strictly private and never pooled with
                other tenants.
              </p>
            </div>
          </div>

          {/* Pillar 2 — Concrete Backups */}
          <div className={`${classes.trustItem} ${classes.trustItemEmerald}`} role="listitem">
            <div className={`${classes.trustIconWrap} ${classes.trustIconEmerald}`}>
              <ImmutableHistoryIcon width={22} height={22} stroke="#10B981" />
            </div>
            <div className={classes.trustItemText}>
              <h3 className={classes.trustItemTitle}>Concrete Backups</h3>
              <p className={classes.trustItemBody}>
                Disaster-proof architecture with continuous, immutable backups to protect your
                operational history.
              </p>
            </div>
          </div>

          {/* Pillar 3 — Absolute Privacy */}
          <div className={`${classes.trustItem} ${classes.trustItemPurple}`} role="listitem">
            <div className={`${classes.trustIconWrap} ${classes.trustIconPurple}`}>
              <BranchPrivacyIcon width={22} height={22} stroke="#A855F7" />
            </div>
            <div className={classes.trustItemText}>
              <h3 className={classes.trustItemTitle}>Absolute Privacy</h3>
              <p className={classes.trustItemBody}>
                You are the customer, not the product. We never sell your data or use it to train
                global AI models.
              </p>
            </div>
          </div>

          {/* Pillar 4 — Zero Lock-In */}
          <div className={`${classes.trustItem} ${classes.trustItemCyan}`} role="listitem">
            <div className={`${classes.trustIconWrap} ${classes.trustIconCyan}`}>
              <DoorOpenIcon width={22} height={22} stroke="#06B6D4" />
            </div>
            <div className={classes.trustItemText}>
              <h3 className={classes.trustItemTitle}>Zero Lock-In</h3>
              <p className={classes.trustItemBody}>
                A clean, &ldquo;no-hostage&rdquo; exit policy. Export your complete data bundle
                anytime without friction.
              </p>
            </div>
          </div>

        </div>

        {/* FOUNDER'S NOTE — avatar left, content right */}
        <div className={classes.founderCard}>
          <img
            src={getSrc(gowthamPhoto)}
            alt="Gowtham, Founder & Architect of Weblings"
            className={classes.founderAvatar}
          />

          <div className={classes.founderContent}>
            <h3 className={classes.founderQuote}>
              &ldquo;Trust isn&rsquo;t given. It&rsquo;s engineered.&rdquo;
            </h3>
            <p className={classes.founderText}>
              We know that migrating your team&rsquo;s workflow is a massive leap of faith. You are
              trusting us with your company&rsquo;s nervous system.
            </p>
            <p className={classes.founderText}>
              That is why we don&rsquo;t hide behind legal jargon. If you experience critical data
              loss due to a flaw in our infrastructure, or if we ever violate the privacy promises
              made on this page, I want you to hold us personally accountable. We built this platform
              to fix the broken enterprise ecosystem, and we stand by our architecture.
            </p>

            <Link href="/about" className={classes.teamLink}>
              <span>Get to know the team and why we built Weblings</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classes.teamLinkArrow}
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <div className={classes.founderDivider} />

            <div className={classes.founderSignatureRow}>
              <div>
                <div className={classes.founderSignature}>Gowtham</div>
                <div className={classes.founderRole}>Founder &amp; Architect</div>
              </div>
              <Link href="/contact" className={classes.founderEmailButton}>
                Email me directly
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION AREA */}
        <div className={classes.pageAction}>
          <button
            type="button"
            id="agree-and-continue-btn"
            className={classes.agreeButton}
            onClick={handleAgree}
          >
            Agree &amp; Continue to Account Setup
          </button>

          <p className={classes.pageActionNote}>
            By proceeding, you acknowledge our beta guarantees and data privacy standards.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AgreementView;
