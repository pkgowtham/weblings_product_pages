'use client';

import React from 'react';

const WorkSuiteFeature = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 80px', color: '#e5eef9' }}>
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, background: 'rgba(124, 92, 255, 0.12)', border: '1px solid rgba(124, 92, 255, 0.25)', color: '#b9c7ff', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Weblings Worksuite
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', lineHeight: 1.1, margin: '20px 0 16px' }}>
          One workspace for the work your business actually runs on.
        </h1>
        <p style={{ maxWidth: 780, margin: '0 auto', fontSize: 18, lineHeight: 1.7, color: '#b7c3d9' }}>
          Bring chat, email, projects, HR workflows, and operations into one connected platform without paying extra for every feature.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {[
          ['Team Collaboration', 'Keep conversations, tasks, approvals, and daily work flowing in one place.'],
          ['Unified Inbox', 'Manage email, requests, and internal updates without bouncing between apps.'],
          ['Operational Visibility', 'Track milestones, dependencies, and execution in real time across departments.'],
          ['Built-in AI', 'Turn meetings, tickets, and requests into actionable work without extra tools.'],
        ].map(([title, description]) => (
          <div key={title} style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 20, padding: 24 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(124,92,255,0.3), rgba(34,211,238,0.2))', marginBottom: 16, fontSize: 22 }}>✓</div>
            <h3 style={{ margin: '0 0 10px', fontSize: 22 }}>{title}</h3>
            <p style={{ margin: 0, color: '#b7c3d9', lineHeight: 1.7 }}>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkSuiteFeature;
