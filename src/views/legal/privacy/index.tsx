'use client';

import React from 'react';
import Link from 'next/link';
import { useStyles } from './style';

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

const PrivacyPolicyView: React.FC = () => {
  const classes = useStyles();

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
        <div className={classes.header}>
          <h1 className={classes.title}>Privacy Policy</h1>
          <p className={classes.lastUpdated}>Last Updated: September 14, 2026</p>
        </div>

        <div className={classes.glassPanel}>
          <p className={classes.introParagraph}>
            At Weblings, we believe in radical transparency. Because our platform serves as the central nervous system for your business operations, we handle highly sensitive data. This policy outlines exactly what we track, how we use it, and how our AI interacts with your proprietary information.
          </p>

          <h2 className={classes.sectionHeading}>1. Data Collection &amp; AI Access</h2>
          <p className={classes.paragraph}>
            To provide our core project-tracking and scope-deviation features, the Weblings AI requires deep access to your workspace. By using the platform, you explicitly consent that our systems and AI will read, process, and analyze your emails, project files, chat logs, source code, and all other data hosted within your Weblings system.
          </p>

          <h2 className={classes.sectionHeading}>2. AI Omnipresence, Complete Data Access, and Leakage</h2>
          <p className={classes.paragraph}>
            To function as designed, the Weblings AI requires and is granted <strong className={classes.strong}>complete, unrestricted access</strong> to all data within your system. This includes, but is not limited to, private emails, project files, chat logs, source code, and client requirements. You explicitly acknowledge and consent to this deep system access.
          </p>
          <p className={classes.paragraph}>
            While we employ robust security measures, the integration of advanced AI models across all system data introduces inherent experimental risks. In the event that the AI inadvertently exposes sensitive information within your workspace, suffers a hallucination that corrupts data, or if a catastrophic cyberattack results in the leakage of AI-processed data, <strong className={classes.strong}>Weblings is explicitly not responsible for any resulting damages or data loss.</strong> By using this platform, you assume the full risk of granting an AI unrestricted access to your proprietary business data.
          </p>

          <h2 className={classes.sectionHeading}>3. Data Usage &amp; Third-Party Sharing</h2>
          <p className={classes.paragraph}>
            We do not sell your personal or company data to marketers or data brokers. We use your data strictly to operate the platform, train the AI for your specific workspace, and process payments.
          </p>
          <p className={classes.paragraph}>
            We share necessary data with authorized third-party infrastructure providers to keep the platform running. These include, but are not limited to:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Razorpay:</strong> For processing subscription payments and billing.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>AWS (Amazon Web Services):</strong> For core cloud hosting and infrastructure.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Cloudflare:</strong> For domain routing, edge security, and email transit infrastructure.
            </li>
          </ul>
          <p className={classes.paragraph}>
            We are not liable for any data breaches or incidents that occur on the infrastructure of these third-party providers.
          </p>

          <h2 className={classes.sectionHeading}>4. Cyberattacks &amp; Security</h2>
          <p className={classes.paragraph}>
            While we implement industry-standard security measures, no system connected to the internet is impenetrable. In the extreme event of a cyberattack or unauthorized data breach, to the maximum extent permitted by law, Weblings is not financially liable for any resulting damages. Client organizations assume the risk and cost associated with utilizing a cloud-based SaaS platform.
          </p>

          <h2 className={classes.sectionHeading}>5. Data Portability &amp; Deletion</h2>
          <p className={classes.paragraph}>
            You have the absolute right to export your data at any time without hurdles. Upon account termination, we will delete your proprietary data from our active servers in accordance with our data retention policies and applicable law.
          </p>

          <h2 className={classes.sectionHeading}>6. Grievance Officer &amp; Contact Information</h2>
          <p className={classes.paragraph}>
            In compliance with the Digital Personal Data Protection Act, 2023 (DPDP) and other applicable privacy regulations, we have appointed a Grievance Officer to address any privacy concerns, data deletion requests, or security reports.
          </p>

          <div className={classes.grievanceBox}>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Contact:</strong> Privacy &amp; Grievance Officer
            </p>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Email:</strong>{' '}
              <a href="mailto:support@weblings.dev" className={classes.link}>
                support@weblings.dev
              </a>
            </p>
            <p className={classes.grievanceNote}>
              Please allow up to 72 hours for a response to legal or data deletion inquiries.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyView;
