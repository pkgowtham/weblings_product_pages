'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usestyles } from './style';
import { getSrc } from '../../utils/getSrc';
import { SvgChevronRight } from '../../components/svg/CustomIcons';
import gowthamFounderImg from '../../assets/images/about/gowtham_founder.jpg';
import data from '../../data/about.json';

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
      {/* Soft Ambient Background Glow */}
      <div className={classes.ambientGlowTop} aria-hidden="true" />

      {/* Decorative Sparkling Accent Field */}
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
          <span>{data.hero.badge}</span>
          <SvgChevronRight width={12} height={12} style={{ marginLeft: '4px' }} />
        </div>

        <h1 className={classes.heroTitle}>
          {data.hero.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </h1>

        <p className={classes.heroSubtitle}>
          {data.hero.subtitle}
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

      {/* Mobile Polaroid (Displayed neatly on small screens) */}
      <div className={classes.mobilePolaroidsRow}>
        <div className={classes.mobilePolaroidCard}>
          <img
            src={getSrc(gowthamFounderImg)}
            alt={data.founder.title}
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>{data.founder.caption}</div>
        </div>
      </div>

      {/* Founder Letter Section with Floating Polaroid */}
      <section id="founder-letter" className={classes.letterWrapper}>
        {/* Floating Polaroid: Founder (Desktop) */}
        <div
          className={classes.polaroidLeft}
          title={data.founder.title}
        >
          <img
            src={getSrc(gowthamFounderImg)}
            alt={data.founder.title}
            className={classes.polaroidImg}
          />
          <div className={classes.polaroidCaption}>{data.founder.caption}</div>
        </div>

        {/* The Paper Letter Card */}
        <div className={classes.paperCard}>
          <div className={classes.paperGradientTop} />

          {/* Letter Opening Quote */}
          <blockquote className={classes.letterQuote}>
            {data.letter.quote}
          </blockquote>

          {/* Letter Content */}
          <div className={classes.letterBody}>
            {data.letter.paragraphs.map((p, idx) => (
              <p key={idx} className={classes.letterParagraph}>
                {p.lead && <span className={classes.boldLead}>{p.lead}</span>}
                {p.text}
              </p>
            ))}

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
                  fill="currentColor"
                />
              </svg>

              <div className={classes.signatureName}>{data.letter.signature.name}</div>
              <div className={classes.signatureRole}>
                {data.letter.signature.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className={classes.ctaSection}>
        <p className={classes.ctaText}>
          {data.cta.text}
        </p>

        <div className={classes.ctaButtons}>
          <button
            className={classes.ctaPrimaryBtn}
            onClick={() => router.push('/contact')}
          >
            <span>{data.cta.primaryBtn.text}</span>
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
        </div>
      </section>
    </div>
  );
};

export default About;
