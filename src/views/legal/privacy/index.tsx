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
          <p className={classes.lastUpdated}>Effective Date: October 1, 2026 &nbsp;|&nbsp; Last Updated: October 1, 2026</p>
        </div>

        <div className={classes.glassPanel}>
          <p className={classes.introParagraph}>
            This Privacy Policy describes how WEBLINGS HUB (&ldquo;Weblings&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating the platform Weblings Suite via{' '}
            <a href="https://weblings.dev" target="_blank" rel="noopener noreferrer" className={classes.link}>
              https://weblings.dev
            </a>
            , collects, uses, processes, and protects your information.
          </p>
          <p className={classes.paragraph}>
            At Weblings, we prioritize transparency. Because our platform serves as an operational infrastructure for your business, we handle sensitive workflows and data. This policy outlines what data we process, how our AI systems interact with your proprietary information, and your legal rights.
          </p>

          <h2 className={classes.sectionHeading}>1. Legal Entity &amp; Scope</h2>
          <p className={classes.paragraph}>
            This platform and all related services are owned and operated by WEBLINGS HUB, an enterprise registered in Tamil Nadu, India. By accessing or using Weblings Suite, you agree to the collection and handling of your data as described in this policy.
          </p>

          <h2 className={classes.sectionHeading}>2. Data Collection &amp; AI System Processing</h2>
          <p className={classes.paragraph}>
            To deliver automated project-tracking, operational analytics, and scope-deviation detection, Weblings Suite utilizes proprietary automated models and algorithms:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Workspace Data Ingestion:</strong> To function as intended, authorized platform features process project files, integrated communication streams (emails/chats), workspace code assets, and operational logs submitted to your tenant.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Consent to Process:</strong> By configuring integrations and onboarding your team, you authorize WEBLINGS HUB to ingest and analyze these inputs solely for executing workspace services and workspace-level model assistance.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Workspace Isolation:</strong> Your proprietary workspace data is logically isolated. We do not use your confidential operational data or proprietary code to train public models or models available to other organizations.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>3. AI Capabilities &amp; Service Limitations</h2>
          <p className={classes.paragraph}>
            While WEBLINGS HUB deploys industry-standard security safeguards, automated intelligence systems operate probabilistically:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Output Verification:</strong> AI-generated suggestions, summaries, or detections are automated outputs and should be reviewed by authorized users prior to critical implementation.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Limitation of Liability:</strong> To the maximum extent permitted by applicable law, WEBLINGS HUB shall not be liable for business disruptions, indirect losses, or unintended data corruption arising from third-party model interruptions, cyber events, or automated outputs beyond our reasonable technical control.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>4. Data Usage &amp; Third-Party Infrastructure</h2>
          <p className={classes.paragraph}>
            We do not sell, rent, or trade your personal or business data to advertisers or third-party data brokers. We share data solely with trusted infrastructure vendors required to host, operate, and secure our SaaS architecture:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Cloud Infrastructure &amp; Compute:</strong> Amazon Web Services (AWS) &mdash; Secure cloud hosting, storage, and processing.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Edge &amp; Network Security:</strong> Cloudflare &mdash; DNS routing, DDoS protection, and SSL transit security.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Payment Processing:</strong> Razorpay &mdash; PCI-DSS-compliant billing, subscription, and transaction processing.
            </li>
          </ul>
          <p className={classes.paragraph}>
            All sub-processors are vetted for strict information security compliance.
          </p>

          <h2 className={classes.sectionHeading}>5. Data Security &amp; Storage</h2>
          <p className={classes.paragraph}>
            WEBLINGS HUB employs robust, industry-standard administrative, physical, and technical safeguards (including TLS/HTTPS transit encryption and encrypted rest storage) to protect against unauthorized access, loss, or alteration.
          </p>

          <h2 className={classes.sectionHeading}>6. Data Ownership, Portability &amp; Deletion</h2>
          <p className={classes.paragraph}>
            You retain complete ownership of all intellectual property and proprietary data uploaded to your workspace.
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Export Rights:</strong> Account administrators may export workspace data at any time via platform controls.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Account Termination:</strong> Upon closure of your account, WEBLINGS HUB will permanently delete your stored proprietary operational data from active production databases in accordance with our system lifecycle and applicable legal retention obligations.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>7. Compliance &amp; Grievance Redressal (DPDP Act)</h2>
          <p className={classes.paragraph}>
            In compliance with the Digital Personal Data Protection Act, 2023 (India) and applicable data protection regulations, WEBLINGS HUB has designated a dedicated Grievance Officer:
          </p>

          <div className={classes.grievanceBox}>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Entity:</strong> WEBLINGS HUB
            </p>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Attention:</strong> Privacy &amp; Data Grievance Officer
            </p>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Registered Location:</strong> Tirupur, Tamil Nadu, India
            </p>
            <p className={classes.grievanceRow}>
              <strong className={classes.strong}>Contact Email:</strong>{' '}
              <a href="mailto:support@weblings.dev" className={classes.link}>
                support@weblings.dev
              </a>{' '}
              (CC:{' '}
              <a href="mailto:founders@weblings.dev" className={classes.link}>
                founders@weblings.dev
              </a>)
            </p>
            <p className={classes.grievanceNote}>
              <strong className={classes.strong}>Response Timeline:</strong> We acknowledge and address legitimate privacy and deletion inquiries within 72 hours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyView;
