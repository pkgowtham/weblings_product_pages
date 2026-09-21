'use client';

import React, { useState } from 'react';
import { useStyles } from './style';
import {
  IsolatedDatabaseIcon,
  EdgeThreatProtectionIcon,
  EndToEndEncryptionIcon,
  DpdpComplianceIcon,
  ShieldCheckIcon,
} from '../../assets/icons_component';

/* ─────────────────────────────────────────────────────────────
   SECURITY CARDS DATA (Using outlined icons from icons_component)
   ───────────────────────────────────────────────────────────── */
const securityCards = [
  {
    id: 'isolated-db',
    title: 'Isolated Databases',
    description:
      "Your organization gets a completely dedicated, isolated global edge database. Your data never mingles with another company's records.",
    IconComponent: IsolatedDatabaseIcon,
    color: '#0284C7',
    bgColor: 'rgba(2, 132, 199, 0.08)',
    borderColor: 'rgba(2, 132, 199, 0.18)',
  },
  {
    id: 'edge-threat',
    title: 'Edge Threat Protection',
    description:
      "Protected by the same global edge network that secures the world's largest banks, stopping DDoS and phishing attacks before they reach you.",
    IconComponent: EdgeThreatProtectionIcon,
    color: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.18)',
  },
  {
    id: 'e2e-encryption',
    title: 'End-to-End Encryption',
    description:
      'All chat messages, HR documents, and Drive files are heavily encrypted both in transit (TLS 1.3) and at rest.',
    IconComponent: EndToEndEncryptionIcon,
    color: '#7C3AED',
    bgColor: 'rgba(124, 58, 237, 0.08)',
    borderColor: 'rgba(124, 58, 237, 0.18)',
  },
  {
    id: 'dpdp-compliance',
    title: 'DPDP Compliant & Zero Selling',
    description:
      'Fully compliant with strict data protection laws. We absolutely do not sell, rent, or monetize your company data. Period.',
    IconComponent: DpdpComplianceIcon,
    color: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.08)',
    borderColor: 'rgba(217, 119, 6, 0.18)',
  },
];

export const SecurityComplianceSection: React.FC = () => {
  const classes = useStyles();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={classes.section}>
      <div className={classes.centerGradient} />
      <div className={classes.inner}>
        {/* Section Header */}
        <div className={classes.header}>
          <div className={classes.badge}>
            <span className={classes.badgeIcon}>
              <ShieldCheckIcon width={14} height={14} />
            </span>
            Security First
          </div>
          <h2 className={classes.title}>Enterprise-Grade Security &amp; Compliance</h2>
          <p className={classes.subtitle}>
            We safeguard your data with military-grade encryption and an ironclad privacy policy. We don&apos;t mine your data, and we certainly don&apos;t sell it.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={classes.grid}>
          {securityCards.map((card) => {
            const isHovered = hoveredCard === card.id;
            const Icon = card.IconComponent;
            return (
              <div
                key={card.id}
                className={classes.card}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={classes.iconWrapper}
                  style={{
                    color: card.color,
                    backgroundColor: card.bgColor,
                    borderColor: card.borderColor,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                >
                  <Icon width={24} height={24} isHovered={isHovered} />
                </div>
                <h3 className={classes.cardTitle}>{card.title}</h3>
                <p className={classes.cardDesc}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityComplianceSection;
