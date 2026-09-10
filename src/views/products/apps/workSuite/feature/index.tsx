'use client';

import React from 'react';
import {
  SvgUsers, SvgMailIcon, SvgTrendingUp, SvgBrain, SvgCheckIcon,
} from '../../../../../components/svg/CustomIcons';


const features = [
  { title: 'Team Collaboration', description: 'Keep conversations, tasks, approvals, and daily work flowing in one place.', icon: <SvgUsers width={22} height={22} /> },
  { title: 'Unified Inbox', description: 'Manage email, requests, and internal updates without bouncing between apps.', icon: <SvgMailIcon width={22} height={22} /> },
  { title: 'Operational Visibility', description: 'Track milestones, dependencies, and execution in real time across departments.', icon: <SvgTrendingUp width={22} height={22} /> },
  { title: 'Built-in AI', description: 'Turn meetings, tickets, and requests into actionable work without extra tools.', icon: <SvgBrain width={22} height={22} /> },
];

const WorkSuiteFeature = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #CFDEF9 0%, #ffffff 100%)',
        minHeight: '100vh',
        width: '100%',
        fontFamily: "'Open Sans', -apple-system, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 56px', textAlign: 'center' }}>

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px',
            borderRadius: 999, background: 'rgba(0, 114, 196, 0.1)', border: '1px solid rgba(0, 114, 196, 0.3)',
            color: '#0072C4', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase' as const, marginBottom: 28,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0072C4', display: 'inline-block' }} />
          Weblings Worksuite
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.12, fontWeight: 700,
            color: '#0a1f44', margin: '0 auto 20px', maxWidth: 820,
          }}
        >
          One workspace for the work your{' '}
          <span style={{ color: '#0072C4' }}>business actually runs on.</span>
        </h1>

        {/* Subtext */}
        <p style={{ maxWidth: 700, margin: '0 auto 48px', fontSize: 18, lineHeight: 1.75, color: '#3a5278', fontWeight: 400 }}>
          Bring chat, email, projects, HR workflows, and operations into one connected platform without paying extra for every feature.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const, marginBottom: 64 }}>
          <button
            style={{
              padding: '13px 32px', borderRadius: 10,
              background: 'linear-gradient(135deg, #0072C4, #005fa3)', color: '#fff',
              fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,114,196,0.35)', transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'translateY(-2px)'; b.style.boxShadow = '0 8px 28px rgba(0,114,196,0.45)'; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'translateY(0)'; b.style.boxShadow = '0 4px 20px rgba(0,114,196,0.35)'; }}
          >
            Get Free Trial
          </button>
          <button
            style={{
              padding: '13px 32px', borderRadius: 10, background: 'transparent',
              color: '#0072C4', fontWeight: 600, fontSize: 16, border: '2px solid rgba(0,114,196,0.45)',
              cursor: 'pointer', transition: 'border-color 0.15s ease, background 0.15s ease',
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(0,114,196,0.07)'; b.style.borderColor = '#0072C4'; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'rgba(0,114,196,0.45)'; }}
          >
            Watch Demo
          </button>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, textAlign: 'left' }}>
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              style={{
                background: '#ffffff', border: '1px solid rgba(0, 114, 196, 0.15)',
                borderRadius: 20, padding: '28px 24px',
                boxShadow: '0 2px 16px rgba(0, 114, 196, 0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 32px rgba(0,114,196,0.16)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 16px rgba(0, 114, 196, 0.08)'; }}
            >
              <div
                style={{
                  width: 46, height: 46, borderRadius: 14, display: 'grid', placeItems: 'center',
                  background: 'linear-gradient(135deg, #e6f2ff, #CFDEF9)',
                  marginBottom: 18, color: '#0072C4', border: '1px solid rgba(0,114,196,0.2)',
                }}
              >
                {icon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#0072C4', color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <SvgCheckIcon width={10} height={10} />
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>{title}</h3>
              </div>
              <p style={{ margin: 0, color: '#4a6080', lineHeight: 1.7, fontSize: 15 }}>{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Band */}
      <div style={{ background: 'linear-gradient(135deg, #0072C4, #005fa3)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { value: '10+', label: 'Built-in Tools' },
            { value: '50%', label: 'Less App Switching' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1, marginBottom: 8 }}>{value}</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSuiteFeature;
