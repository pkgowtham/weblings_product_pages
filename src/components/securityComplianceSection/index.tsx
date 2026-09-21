'use client';

import React, { useState } from 'react';
import { useStyles } from './style';

/* ─────────────────────────────────────────────────────────────
   ANIMATED SVG ICONS (Matching Image 1)
   ───────────────────────────────────────────────────────────── */

// 1. Isolated Databases Icon: File cabinet with drawers & green status LED
const IsolatedDbIcon: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    {/* Cabinet Frame */}
    <rect x="6" y="4" width="24" height="28" rx="3.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
    
    {/* Top Drawer */}
    <g style={{
      transform: isHovered ? "translateY(-1.5px)" : "none",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <rect x="8.5" y="7" width="19" height="10" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
      {/* Handle */}
      <rect x="14.5" y="11" width="7" height="2" rx="1" fill="#64748B" />
      {/* Green Status LED */}
      <circle
        cx="11"
        cy="12"
        r="1.2"
        fill="#10B981"
        style={{
          filter: isHovered ? "drop-shadow(0 0 4px #10B981)" : "none",
          transition: "filter 0.3s ease",
        }}
      />
    </g>

    {/* Bottom Drawer */}
    <g style={{
      transform: isHovered ? "translateY(0.5px)" : "none",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <rect x="8.5" y="19" width="19" height="10" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
      {/* Handle */}
      <rect x="14.5" y="23" width="7" height="2" rx="1" fill="#64748B" />
      {/* Green Status LED */}
      <circle
        cx="11"
        cy="24"
        r="1.2"
        fill="#10B981"
        style={{
          filter: isHovered ? "drop-shadow(0 0 4px #10B981)" : "none",
          transition: "filter 0.3s ease",
        }}
      />
    </g>
  </svg>
);

// 2. Edge Threat Protection Icon: Earth Globe with orbital shield
const EdgeThreatProtectionIcon: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    {/* Blue Ocean Globe */}
    <circle cx="18" cy="18" r="13" fill="#0284C7" />
    
    {/* Continents (Green/Yellow) */}
    <g style={{
      transformOrigin: "18px 18px",
      transform: isHovered ? "rotate(15deg) scale(1.04)" : "none",
      transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      {/* Africa & Europe */}
      <path
        d="M17 9c2 1 3 0 4 2s-1 3 0 4 3 2 2 4-2 3-3 4-2-1-2-3 1-2 0-4-2-1-1-3 0-4z"
        fill="#84CC16"
        opacity="0.95"
      />
      {/* Americas outline */}
      <path
        d="M10 11c1-1 3-1 3 1s-1 3-2 4 1 2 0 4-3 1-2-1 0-3 1-4-1-2 0-4z"
        fill="#EAB308"
        opacity="0.9"
      />
      {/* Asia outline */}
      <path
        d="M22 10c2 0 4 2 4 4s-2 3-3 4-2-1-2-3 1-2 0-3 1-2 1-2z"
        fill="#22C55E"
        opacity="0.9"
      />
    </g>

    {/* Atmospheric Glow */}
    <circle cx="18" cy="18" r="13" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.2" fill="none" />

    {/* Deflection Shield Orbit */}
    <ellipse
      cx="18"
      cy="18"
      rx="15.5"
      ry="6.5"
      transform="rotate(-25 18 18)"
      stroke={isHovered ? "#38BDF8" : "rgba(56, 189, 248, 0.4)"}
      strokeWidth={isHovered ? "1.8" : "1.2"}
      strokeDasharray="4 2"
      fill="none"
      style={{
        transition: "stroke 0.3s ease, stroke-width 0.3s ease",
      }}
    />
  </svg>
);

// 3. End-to-End Encryption Icon: Golden Padlock & Key
const EndToEndEncryptionIcon: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    {/* Lock Shackle */}
    <g style={{
      transformOrigin: "15px 14px",
      transform: isHovered ? "translateY(-2px)" : "none",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <path
        d="M10.5 14V10a4.5 4.5 0 0 1 9 0v4"
        stroke="#E2E8F0"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* Lock Body */}
    <rect x="7" y="14" width="16" height="14" rx="2.5" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.2" />
    
    {/* Keyhole */}
    <circle cx="15" cy="19.5" r="1.5" fill="#713F12" />
    <path d="M15 21v3" stroke="#713F12" strokeWidth="1.2" strokeLinecap="round" />

    {/* Golden Key */}
    <g style={{
      transformOrigin: "26px 21px",
      transform: isHovered ? "rotate(-12deg) scale(1.08)" : "none",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <circle cx="26" cy="19" r="3" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
      <path d="M26 22v7" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 25h2m-2 2h2" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 4. DPDP Compliant & Zero Selling Icon: Certified Rolled Parchment Scroll
const DpdpComplianceIcon: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    {/* Rolled Scroll Body */}
    <g style={{
      transformOrigin: "18px 18px",
      transform: isHovered ? "scale(1.06)" : "none",
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      {/* Scroll Cylinder Top */}
      <ellipse cx="18" cy="8" rx="8" ry="2.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
      {/* Scroll Column */}
      <rect x="10" y="8" width="16" height="19" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      {/* Scroll Lines (Text Representation) */}
      <line x1="13" y1="12" x2="23" y2="12" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="15.5" x2="21" y2="15.5" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="19" x2="23" y2="19" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="22.5" x2="19" y2="22.5" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      {/* Scroll Cylinder Bottom */}
      <ellipse cx="18" cy="27" rx="8" ry="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
      
      {/* Red/Gold Ribbon & Wax Seal */}
      <circle cx="18" cy="21" r="3.2" fill="#DC2626" stroke="#991B1B" strokeWidth="0.8" />
      <path d="M16 23l-2 5 3-1.5 3 1.5-2-5" fill="#DC2626" />
      {/* Checkmark in Seal */}
      <polyline points="16.5,21 17.5,22 19.5,20" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   SECURITY CARDS DATA
   ───────────────────────────────────────────────────────────── */
const securityCards = [
  {
    id: 'isolated-db',
    title: 'Isolated Databases',
    description:
      "Your organization gets a completely dedicated, isolated global edge database. Your data never mingles with another company's records.",
    IconComponent: IsolatedDbIcon,
  },
  {
    id: 'edge-threat',
    title: 'Edge Threat Protection',
    description:
      "Protected by the same global edge network that secures the world's largest banks, stopping DDoS and phishing attacks before they reach you.",
    IconComponent: EdgeThreatProtectionIcon,
  },
  {
    id: 'e2e-encryption',
    title: 'End-to-End Encryption',
    description:
      'All chat messages, HR documents, and Drive files are heavily encrypted both in transit (TLS 1.3) and at rest.',
    IconComponent: EndToEndEncryptionIcon,
  },
  {
    id: 'dpdp-compliance',
    title: 'DPDP Compliant & Zero Selling',
    description:
      'Fully compliant with strict data protection laws. We absolutely do not sell, rent, or monetize your company data. Period.',
    IconComponent: DpdpComplianceIcon,
  },
];

export const SecurityComplianceSection: React.FC = () => {
  const classes = useStyles();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={classes.section}>
      <div className={classes.ambientGlowTop} />
      <div className={classes.inner}>
        {/* Section Header */}
        <div className={classes.header}>
          <div className={classes.badge}>
            <span className={classes.badgeIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
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
                <div className={classes.iconWrapper}>
                  <Icon isHovered={isHovered} />
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
