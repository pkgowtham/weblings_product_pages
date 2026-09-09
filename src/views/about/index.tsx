'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usestyles } from './style';
import { getSrc } from '../../utils/getSrc';
import gowthamFounderImg from '../../assets/images/about/gowtham_founder.jpg';
import chennaiHqImg from '../../assets/images/about/chennai_hq.jpg';

// Pre-defined twinkling star coordinates for consistency without re-renders
const starsData = [
  { top: '6%', left: '15%', size: 3, delay: '0s' },
  { top: '12%', left: '78%', size: 4, delay: '1.2s' },
  { top: '18%', left: '32%', size: 2.5, delay: '2.4s' },
  { top: '24%', left: '88%', size: 3.5, delay: '0.6s' },
  { top: '35%', left: '10%', size: 2.5, delay: '1.8s' },
  { top: '42%', left: '92%', size: 4, delay: '2.8s' },
  { top: '48%', left: '5%', size: 3, delay: '0.2s' },
  { top: '55%', left: '85%', size: 2.5, delay: '1.5s' },
  { top: '63%', left: '14%', size: 3.5, delay: '2.1s' },
  { top: '72%', left: '88%', size: 3, delay: '0.9s' },
  { top: '80%', left: '8%', size: 2.5, delay: '1.6s' },
  { top: '88%', left: '94%', size: 3.5, delay: '2.5s' },
  { top: '94%', left: '22%', size: 3, delay: '0.4s' },
  { top: '15%', left: '52%', size: 5, delay: '3.1s' },
  { top: '68%', left: '45%', size: 3.5, delay: '1.9s' },
];

const About: React.FC = () => {
  const classes = usestyles();
  const router = useRouter();

  const handleScrollToLetter = () => {
    const letterElem = document.getElementById('founder-letter');
    if (letterElem) {
      letterElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.aboutPageWrapper}>
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

      {/* Hero Section */}
      <section className={classes.heroSection}>
        <div
          className={classes.heroBadge}
          onClick={handleScrollToLetter}
          role="button"
          tabIndex={0}
        >
          <span className={classes.pulseDot} />
          <span>Our Story &amp; Mission</span>
          <span style={{ fontSize: '15px', marginLeft: '2px' }}>›</span>
        </div>

        <h1 className={classes.heroTitle}>
          We built the software
          <br />
          we always wished we had.
        </h1>

        <p className={classes.heroSubtitle}>
          No corporate fluff. No exaggerated claims. This is just an honest
          letter from one founder to another about why we exist, who we are, and
          how we treat the people who trust us with their business.
        </p>

        {/* Bouncing Down Arrow Indicator */}
        <div
          className={classes.downArrowWrapper}
          onClick={handleScrollToLetter}
          style={{ cursor: 'pointer' }}
          aria-label="Scroll to founder's letter"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mobile Polaroids (Displayed neatly on small screens) */}
      <div className={classes.mobilePolaroidsRow}>
        <div className={classes.mobilePolaroidCard}>
          <img
            src={getSrc(gowthamFounderImg)}
            alt="Gowtham, Founder"
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>Gowtham</div>
        </div>
        <div className={classes.mobilePolaroidCard}>
          <img
            src={getSrc(chennaiHqImg)}
            alt="Chennai HQ Office"
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>Chennai HQ</div>
        </div>
      </div>

      {/* Founder Letter Section with Floating Polaroids */}
      <section id="founder-letter" className={classes.letterWrapper}>
        {/* Floating Polaroid 1: Founder (Desktop) */}
        <div
          className={classes.polaroidLeft}
          title="Gowtham - Founder, Weblings"
        >
          <img
            src={getSrc(gowthamFounderImg)}
            alt="Gowtham - Founder, Weblings"
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>Gowtham</div>
        </div>

        {/* Floating Polaroid 2: Chennai HQ (Desktop) */}
        <div
          className={classes.polaroidRight}
          title="Weblings Chennai HQ"
        >
          <img
            src={getSrc(chennaiHqImg)}
            alt="Weblings Chennai HQ"
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>Chennai HQ</div>
        </div>

        {/* The Paper Letter Card */}
        <div className={classes.paperCard}>
          <div className={classes.paperGradientTop} />

          {/* Letter Opening Quote */}
          <blockquote className={classes.letterQuote}>
            &ldquo;Why do developers point fingers when a feature breaks? Why
            does a 10-hour task always stretch past 30? Why is the client still
            frustrated after 14-hour workdays?&rdquo;
          </blockquote>

          {/* Letter Content */}
          <div className={classes.letterBody}>
            <p className={classes.letterParagraph}>
              <span className={classes.boldLead}>We Are Developers First.</span>
              Before we were founders, we were developers. We have lived the exact
              frustrations your team deals with every single day. We know
              exactly what it feels like to spend weeks building a feature
              exactly to spec, only for the client to change their mind on a
              Friday afternoon and say, &ldquo;That&rsquo;s not what I
              meant.&rdquo;
            </p>

            <p className={classes.letterParagraph}>
              We know the crushing feeling of unbilled scope creep, vague project
              briefs, and the dreaded &ldquo;telephone game&rdquo; between
              clients and engineers.
            </p>

            <p className={classes.letterParagraph}>
              But apart from undocumented client changes, the real enemy is
              miscommunication. A request passes through three layers of middle
              management, gets twisted, the wrong feature is built, and the
              toxic blame game starts.
            </p>

            <p className={classes.letterParagraph}>
              Loyal, talented people don&rsquo;t leave over paychecks; they leave
              toxic environments. Most developers would happily take a fair
              salary in a peaceful, joyful workspace over a massive paycheck in a
              daily warzone.
            </p>

            <p className={classes.letterParagraph}>
              <span className={classes.boldLead}>The Broken Ecosystem.</span>
              We also got tired of watching small and mid-sized companies get
              bled dry by fragmented software. Paying a &ldquo;per-seat&rdquo;
              tax for Jira, another for Slack, and another for HR software is
              exhausting.
            </p>

            <p className={classes.letterParagraph}>
              But the real nightmare isn&rsquo;t just the monthly
              subscriptions. It is the hidden cost of managing users across half
              a dozen different platforms.
            </p>

            <p className={classes.letterParagraph}>
              Setting up multi-layer sign-ins is an IT nightmare, and migrating
              simple data between them requires expensive middleman tools like
              Zapier just to keep the lights on. It felt completely broken.
            </p>

            <p className={classes.letterParagraph}>
              That frustration is the exact reason we built the AI Scope Engine
              and this unified platform. We didn&rsquo;t build it to jump on an
              AI hype train; we built it to solve a very real, very painful
              problem that we have personally suffered through. We build tools
              that protect your margins and your sanity.
            </p>

            <p className={classes.letterParagraph}>
              <span className={classes.boldLead}>
                Partnerships, Not Support Tickets.
              </span>
              Because we are a smaller, focused team, we value relationships over
              raw profit margins. When you join Weblings, you aren&rsquo;t just
              an account number in a database.
            </p>

            <p className={classes.letterParagraph}>
              If you have an issue, you will never be trapped in a 5-tier support
              hierarchy. You won&rsquo;t be bounced from one middle manager to
              another who views your support request as a mere disturbance in
              their day.
            </p>

            <p className={classes.letterParagraph}>
              If something goes wrong, we take it personally. You get direct
              access to real humans who understand the codebase.
            </p>

            <p className={classes.letterParagraph}>
              If the situation demands it, our founders will intervene directly
              to fix the problem and ensure the architecture is updated so it
              never happens again. We view you as a partner in this ecosystem,
              and your success is directly tied to ours.
            </p>

            {/* Signature Block with Architectural Watermark */}
            <div className={classes.signatureArea}>
              <svg
                className={classes.watermarkSvg}
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 90h20V30H10zM40 90h20V50h-20zM70 90h20V20h-20zM100 90h20V40h-20zM130 90h20V10H130zM160 90h20V60h-20z"
                  fill="#0F172A"
                />
              </svg>

              <div className={classes.signatureName}>Gowtham</div>
              <div className={classes.signatureRole}>
                Founder, Weblings Worksuite
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className={classes.ctaSection}>
        <p className={classes.ctaText}>
          We&rsquo;d love to show you around the platform. Let&rsquo;s grab a
          virtual coffee, chat about your workflow, and see if we can make your
          team&rsquo;s day a little brighter.
        </p>

        <div className={classes.ctaButtons}>
          <button
            className={classes.ctaPrimaryBtn}
            onClick={() => router.push('/contact')}
          >
            <span>Get in touch</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            className={classes.ctaSecondaryBtn}
            onClick={() => router.push('/workSuite/comparison')}
          >
            Compare Plans
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
