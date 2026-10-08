import React from 'react';
import { 
  GraduationCap, 
  Globe2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { LISTINGS_DATA } from '../data/opportunities';

export const ScholarshipsVault = ({ onSelectOpportunity }) => {
  const scholarships = LISTINGS_DATA.filter(item => item.categoryType === 'Scholarships');

  return (
    <section className="section" id="scholarships-vault" style={{ background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Fully Funded Fellowships</span>
          </div>
          <h2 className="section-title">National &amp; Global Scholarships Vault</h2>
          <p className="section-subtitle">
            Merit and need-based engineering scholarships across Pakistan, Germany, the United States, and Europe.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {scholarships.map((sch) => (
            <div
              key={sch.id}
              className="bento-card"
              style={{ padding: '24px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ fontSize: '32px' }}>{sch.companyLogo}</div>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-purple)', background: 'rgba(139, 92, 246, 0.12)', padding: '3px 10px', borderRadius: '9999px' }}>
                  {sch.compensationType}
                </span>
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary-light)', marginBottom: '6px' }}>
                {sch.company}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {sch.title}
              </h3>

              <div style={{ display: 'flex', gap: '14px', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Globe2 size={13} /> {sch.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-amber)' }}>
                  <Calendar size={13} /> {sch.deadline}
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px', flexGrow: 1 }}>
                {sch.description}
              </p>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '9px 14px', fontSize: '13px' }}
                  onClick={() => onSelectOpportunity(sch)}
                >
                  <span>View Eligibility &amp; Apply</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
