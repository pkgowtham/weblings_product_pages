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
          <h1 className={classes.title}>Terms of Service &amp; Customer Agreement</h1>
          <p className={classes.lastUpdated}>Effective Date: October 1, 2026 &nbsp;|&nbsp; Last Updated: October 1, 2026</p>
        </div>

        <div className={classes.glassPanel}>
          <p className={classes.introParagraph}>
            Welcome to Weblings Suite (accessible via{' '}
            <a href="https://weblings.dev" target="_blank" rel="noopener noreferrer" className={classes.link}>
              https://weblings.dev
            </a>
            ). These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Customer&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and WEBLINGS HUB (&ldquo;Weblings&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), an enterprise registered in Tirupur, Tamil Nadu, India.
          </p>
          <p className={classes.paragraph}>
            By accessing or using our platform, software, APIs, and infrastructure, you agree to be bound by these Terms.
          </p>

          <h2 className={classes.sectionHeading}>1. Acceptance of Terms &amp; Beta Phase Operations</h2>
          <p className={classes.paragraph}>
            Weblings is currently offered under a designated Beta Testing Phase scheduled through December 2026.
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Access is granted solely at our discretion and may require approval.
            </li>
            <li className={classes.listItem}>
              The software is provided strictly on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. WEBLINGS HUB makes no representations or warranties regarding uptime, service continuity, or feature persistence during this period.
            </li>
            <li className={classes.listItem}>
              We reserve the right to modify, suspend, or discontinue any feature, or revoke account access with reasonable notice where practical.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>2. Eligibility &amp; Account Security</h2>
          <p className={classes.paragraph}>
            You represent that you are at least 18 years of age and possess the legal capacity to form a binding contract. You are solely responsible for maintaining the confidentiality of your authentication credentials. WEBLINGS HUB shall not be liable for unauthorized access or losses resulting from your failure to protect your login details.
          </p>

          <h2 className={classes.sectionHeading}>3. Acceptable Use &amp; Resource Governance</h2>
          <p className={classes.paragraph}>
            You agree to use the platform solely for lawful business operations. You shall not reverse-engineer, decompile, extract source code, or deploy automated mechanisms designed to circumvent service constraints. If WEBLINGS HUB determines that your resource consumption exceeds reasonable parameters or compromises platform stability for other tenants, we reserve the right to throttle usage, bill for excessive infrastructure consumption, or suspend access.
          </p>

          <h2 className={classes.sectionHeading}>4. Intellectual Property &amp; Customer Feedback</h2>
          <p className={classes.paragraph}>
            WEBLINGS HUB retains all right, title, and interest in and to Weblings Suite, including proprietary algorithms, interfaces, designs, and code. You retain full ownership of all proprietary data and content you upload to your workspace. Any voluntary suggestions, feedback, or enhancement ideas you submit may be incorporated into the platform without compensation or obligation to you.
          </p>

          <h2 className={classes.sectionHeading}>5. Marketing &amp; Reference Rights</h2>
          <p className={classes.paragraph}>
            Unless otherwise agreed in writing, you grant WEBLINGS HUB a revocable, non-exclusive, royalty-free license to use your organization&rsquo;s business name and logo on our public website and marketing materials solely to identify you as a customer. You may opt out of this license at any time by emailing{' '}
            <a href="mailto:support@weblings.dev" className={classes.link}>
              support@weblings.dev
            </a>
            , and we will remove your brand assets within fourteen (14) business days.
          </p>

          <h2 className={classes.sectionHeading}>6. Email Infrastructure &amp; Prohibited Activities</h2>
          <p className={classes.paragraph}>
            Weblings strictly prohibits using its infrastructure for unsolicited bulk commercial communications (spam), phishing, deceptive marketing, or distribution of malware. You agree to adhere strictly to applicable anti-spam and telecommunication regulations. WEBLINGS HUB reserves the right to immediately suspend accounts engaged in abusive transmission without notice or refund. You are solely liable for the recipient lists and content of communications dispatched from your tenant.
          </p>

          <h2 className={classes.sectionHeading}>7. Third-Party Integrations &amp; Intermediary Protection</h2>
          <p className={classes.paragraph}>
            Under Section 79 of the Information Technology Act, 2000 (India) and comparable intermediary liability protections:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Intermediary Status:</strong> WEBLINGS HUB provides software infrastructure and acts solely as an intermediary with respect to third-party content and communications generated by users. You are exclusively responsible for your business operations and compliance with local and international laws.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Third-Party Domain Registration (Cloudflare):</strong> Any domain search or purchasing features provided within Weblings operate as a frontend client interfacing with Cloudflare&rsquo;s registrar API. WEBLINGS HUB is not an accredited domain registrar and does not warrant domain availability, successful registration, DNS propagation, or automatic renewal. Domain management, registry compliance, and renewal monitoring remain your sole obligation.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Email Transit &amp; Delivery:</strong> Email routing and transit infrastructure are powered by third-party upstream providers (including Cloudflare). WEBLINGS HUB does not guarantee 100% deliverability, inbox placement, or uninterrupted transit, and disclaims liability for delayed, dropped, or filtered communications.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>8. Internal Communication &amp; Collaboration Tools</h2>
          <p className={classes.paragraph}>
            Weblings provides workspaces and chat facilities for collaborative project management. WEBLINGS HUB does not pre-screen or actively monitor internal communication streams. Your organization assumes full operational liability for all content, data, or files shared across your tenant by authorized users.
          </p>

          <h2 className={classes.sectionHeading}>9. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p className={classes.paragraph}>
            To the maximum extent permitted by applicable law:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              WEBLINGS HUB disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </li>
            <li className={classes.listItem}>
              In no event shall WEBLINGS HUB, its proprietors, or affiliates be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, goodwill, business interruption, or data corruption.
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Liability Cap:</strong> The cumulative liability of WEBLINGS HUB arising out of or related to your use of the platform shall not exceed the total fees paid by you to WEBLINGS HUB in the three (3) months immediately preceding the event giving rise to liability.
            </li>
          </ul>

          <h2 className={classes.sectionHeading}>10. Indemnification</h2>
          <p className={classes.paragraph}>
            You agree to indemnify, defend, and hold harmless WEBLINGS HUB, its officers, directors, and employees against any third-party claims, liabilities, damages, losses, or legal costs arising out of: (a) your breach of these Terms; (b) your violation of any third-party rights or applicable regulations; or (c) the operational activities conducted by your organization using the platform.
          </p>

          <h2 className={classes.sectionHeading}>11. Governing Law &amp; Dispute Resolution</h2>
          <p className={classes.paragraph}>
            These Terms are governed by and construed in accordance with the laws of the Republic of India. Any legal action or dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Tiruppur, Tamil Nadu, India.
          </p>

          <h2 className={classes.sectionHeading}>12. Contact Information</h2>
          <p className={classes.paragraph}>
            For legal inquiries, contractual questions, or support notices:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Entity:</strong> WEBLINGS HUB
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Registered Office:</strong> Tirupur, Tamil Nadu &ndash; 641604, India
            </li>
            <li className={classes.listItem}>
              <strong className={classes.strong}>Email:</strong>{' '}
              <a href="mailto:support@weblings.dev" className={classes.link}>
                support@weblings.dev
              </a>{' '}
              (CC:{' '}
              <a href="mailto:founders@weblings.dev" className={classes.link}>
                founders@weblings.dev
              </a>)
            </li>
          </ul>

          <div className={classes.refundBox}>
            <h3 className={classes.refundTitle}>Cancellation &amp; Refund Policy</h3>

            <ul className={classes.list} style={{ marginBottom: 0 }}>
              <li className={classes.listItem}>
                <strong className={classes.strong}>Subscription Billing:</strong> All subscription plans are billed in advance on a recurring monthly or annual basis via authorized payment gateways (e.g., Razorpay). Applicable statutory taxes (such as GST, if applicable) will be added where mandated by law.
              </li>
              <li className={classes.listItem}>
                <strong className={classes.strong}>No Refunds:</strong> All payments made to WEBLINGS HUB are non-refundable. We do not provide prorated refunds or credits for partial subscription periods, unused platform resources, or premature account termination resulting from violations of our Terms of Service.
              </li>
              <li className={classes.listItem}>
                <strong className={classes.strong}>Cancellation:</strong> You may cancel your subscription at any time via your account settings. Upon cancellation, your account will remain active until the conclusion of the current paid billing cycle.
              </li>
              <li className={classes.listItem} style={{ marginBottom: 0 }}>
                <strong className={classes.strong}>Data Portability:</strong> Prior to account closure, you retain the right to export your workspace data using native export features provided within the platform. Data retention following termination is managed according to our published Privacy Policy.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsView;
