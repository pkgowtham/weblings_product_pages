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

const TermsAndConditionsView: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageWrapper}>
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
          <h1 className={classes.title}>Terms and Conditions</h1>
          <p className={classes.lastUpdated}>Last Updated: September 14, 2026</p>
        </div>

        <div className={classes.glassPanel}>
          <p className={classes.introParagraph}>
            Welcome to Weblings Worksuite. By accessing or using our platform, you agree to these Terms. Please read them carefully, as they govern your use of our software, APIs, and infrastructure.
          </p>

          <h2 className={classes.sectionHeading}>1. Acceptance of Terms &amp; Beta Phase</h2>
          <p className={classes.paragraph}>
            Currently, Weblings is in a &ldquo;Beta Testing Phase&rdquo; scheduled until December 2026. During this period, access is strictly by our approval only. We provide the software on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. We make no guarantees regarding uptime, stability, or data integrity during this beta phase. We reserve the right to completely shut down the service or revoke your access at any time, for any reason, without prior notice.
          </p>

          <h2 className={classes.sectionHeading}>2. Account Security &amp; Age Restriction</h2>
          <p className={classes.paragraph}>
            You must be at least 18 years of age to use Weblings. You are solely responsible for maintaining the confidentiality of your login credentials. Weblings is not liable for any data loss, corruption, or unauthorized access resulting from compromised passwords or your failure to secure your account.
          </p>

          <h2 className={classes.sectionHeading}>3. Acceptable Use &amp; Resource Exploitation</h2>
          <p className={classes.paragraph}>
            You agree not to reverse-engineer, decompile, or use Weblings for any illegal activities. If we determine, in our sole discretion, that you are exploiting server resources beyond fair use limits, we reserve the right to immediately terminate your account without a refund, or bill your organization separately for the excess usage.
          </p>

          <h2 className={classes.sectionHeading}>4. Intellectual Property &amp; Feedback</h2>
          <p className={classes.paragraph}>
            Weblings retains all intellectual property rights to the platform. If you provide feedback, feature suggestions, or bug reports, you grant us the right to use and implement those ideas without any obligation, royalty, or compensation to you.
          </p>

          <h2 className={classes.sectionHeading}>5. Marketing &amp; Wall of Fame</h2>
          <p className={classes.paragraph}>
            By using Weblings, you grant us the non-exclusive right to use your company name and logo on our website and marketing materials. If you wish to be removed, you may email <strong className={classes.strong}>support@weblings.dev</strong>, and we will process the takedown as our schedule permits.
          </p>

          <h2 className={classes.sectionHeading}>6. Zero Tolerance for Spam &amp; Email Abuse</h2>
          <p className={classes.paragraph}>
            Weblings strictly prohibits the use of our infrastructure to send spam, unsolicited bulk emails, phishing campaigns, or malicious code. You agree to comply with all applicable anti-spam laws. If we detect any email abuse, we will instantly terminate your account without notice or refund. Weblings assumes zero responsibility or liability for the emails you send, the recipients you target, or any domain blacklisting that occurs due to your actions.
          </p>

          <h2 className={classes.sectionHeading}>7. Intermediary Liability &amp; Illegal Business Operations</h2>
          <p className={classes.paragraph}>
            Weblings provides software infrastructure; we do not police your business model. You are solely responsible for how you use our platform. If your organization uses Weblings to conduct illegal activities, violate local or international laws, or cause harm to society, you bear 100% of the legal, civil, and financial responsibility. Weblings explicitly disclaims all liability for the content you store, the nature of your business, or any societal or economic damage caused by your operations.
          </p>

          <h2 className={classes.sectionHeading}>8. Third-Party Domain Registration (Cloudflare)</h2>
          <p className={classes.paragraph}>
            Weblings provides a domain purchase feature that acts purely as a frontend interface for Cloudflare&rsquo;s registrar backend. Weblings is not a domain registrar. We do not guarantee domain availability, successful registration, or auto-renewal execution. You are solely responsible for monitoring your domain&rsquo;s expiration dates and ensuring successful renewals. If your domain expires, fails to renew, or is acquired by a third party for any reason, Weblings bears zero liability for any resulting loss of brand, traffic, or revenue. The risk of domain ownership and management falls entirely on you.
          </p>

          <h2 className={classes.sectionHeading}>9. Third-Party Email Infrastructure &amp; Data Loss</h2>
          <p className={classes.paragraph}>
            Weblings utilizes Cloudflare for email sending, receiving, and routing infrastructure. Weblings does not physically host these email transit servers and cannot guarantee 100% delivery rates. We are completely disclaimed from any liability regarding missing emails, dropped packets, delayed communications, or lost email data. If a critical email fails to send or receive, resulting in business loss or miscommunication, Weblings is not responsible.
          </p>

          <h2 className={classes.sectionHeading}>10. Internal Chat &amp; Communication Misuse</h2>
          <p className={classes.paragraph}>
            Weblings provides internal chat and communication tools for project collaboration. We do not monitor or police the content of your team&rsquo;s internal messages. If your employees or users utilize the chat features for illegal activities, harassment, unauthorized data sharing, or any other unintended purposes, Weblings assumes absolutely zero liability. You are solely responsible for the conduct of your users and the content they transmit through our platform.
          </p>

          <h2 className={classes.sectionHeading}>11. Limitation of Liability &amp; Explicit Waiver</h2>
          <p className={classes.paragraph}>
            To the maximum extent permitted by applicable law, Weblings and its founders shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to lost profits, lost revenue, or data corruption, whether during the beta phase or production. Any bugs, malfunctions, or server downtimes are not our liability.
          </p>
          <p className={classes.paragraph}>
            Under no circumstances shall Weblings be held responsible for any loss of your business revenue, loss of clients, or loss of data resulting from your use of the platform, your inability to use the platform, or your engagement in restricted/illegal activities. Your business outcomes and data security practices are entirely your own responsibility.
          </p>

          <h2 className={classes.sectionHeading}>12. Indemnification</h2>
          <p className={classes.paragraph}>
            You agree to indemnify, defend, and hold harmless Weblings, its founders, and employees from any claims, damages, liabilities, costs, or legal fees arising out of your use of the platform, your violation of these Terms, or your infringement of any third-party rights. If your actions on our platform cause us to get sued, you are fully responsible for covering all our legal costs and damages.
          </p>

          <h2 className={classes.sectionHeading}>13. Governing Law &amp; Jurisdiction</h2>
          <p className={classes.paragraph}>
            These Terms shall be governed by the laws of India. Any disputes arising from the use of Weblings shall be subject to the exclusive jurisdiction of the courts located in <strong className={classes.strong}>Tiruppur, Tamil Nadu</strong>.
          </p>

          <div className={classes.refundBox}>
            <h3 className={classes.refundTitle}>Refund &amp; Cancellation Policy</h3>
            <p className={classes.refundSubtitle}>Please read our payment and cancellation terms carefully.</p>

            <ul className={classes.list} style={{ marginBottom: 0 }}>
              <li className={classes.listItem}>
                <strong className={classes.strong}>No Refunds:</strong> All subscription payments (monthly or annual) made to Weblings are final and non-refundable. We do not provide prorated refunds for mid-cycle cancellations. If your account is terminated due to a violation of our Terms of Service, no refunds will be issued.
              </li>
              <li className={classes.listItem}>
                <strong className={classes.strong}>Tax &amp; Pricing Changes:</strong> All subscription fees are exclusive of taxes. An 18% GST will be applied to all payments as mandated by Indian law. We reserve the right to transition beta users to paid plans or adjust server usage fees with prior notice.
              </li>
              <li className={classes.listItem} style={{ marginBottom: 0 }}>
                <strong className={classes.strong}>Cancellation &amp; Data Export:</strong> You may cancel your subscription at any time. Upon cancellation, you will retain access to the platform until the end of your current paid billing cycle. Weblings guarantees data portability; you may export your data out of our system at any time without hurdles.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsView;
