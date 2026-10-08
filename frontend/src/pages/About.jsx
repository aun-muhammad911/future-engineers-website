import React, { useState } from 'react';
import { FAQS } from '../data/opportunities';

export const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-title">
          <h2>About Us</h2>
          <div>
            <span>Empowering Engineers </span>
            <span className="description-title">Across Pakistan</span>
          </div>
        </div>

        {/* Story & Mission Block */}
        <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '26px', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Built by Pakistani Engineers, for Pakistani Engineers
            </h3>
            <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
              Finding legitimate engineering opportunities in Pakistan shouldn't require searching through dozens of disconnected WhatsApp groups, outdated Facebook pages, and unreliable job portals.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>FutureEngineers.pk</strong> was created to give engineering students from UET, NUST, GIKI, NED, FAST, PIEAS, and colleges across Punjab, Sindh, KP, Balochistan, and AJK a single verified platform for jobs, internships, international scholarships, short courses, and career tools.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ fontSize: '28px', color: 'var(--color-primary)', margin: 0 }}>500+</h4>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Opportunities Listed</span>
              </div>
              <div>
                <h4 style={{ fontSize: '28px', color: 'var(--color-primary)', margin: 0 }}>35+</h4>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Partner Universities</span>
              </div>
              <div>
                <h4 style={{ fontSize: '28px', color: 'var(--color-primary)', margin: 0 }}>100%</h4>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Free Access</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/assets/img/blog-post-10.webp"
              alt="FutureEngineers review process"
              style={{ borderRadius: '16px', boxShadow: 'var(--card-shadow)', width: '100%' }}
            />
          </div>
        </div>

        {/* Verification Process Section */}
        <div style={{ background: 'var(--bg-surface)', borderRadius: '20px', padding: '40px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)', marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="post-category">Quality Assurance</span>
            <h3 style={{ fontSize: '24px', marginTop: '8px', color: 'var(--text-primary)' }}>
              How FutureEngineers.pk Reviews Every Listing
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', maxWidth: '600px', margin: '8px auto 0 auto' }}>
              We maintain strict quality criteria before approving any vacancy, scholarship, or course.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid var(--color-primary)' }}>
              <i className="bi bi-patch-check-fill" style={{ fontSize: '24px', color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}></i>
              <h4 style={{ fontSize: '17px', marginBottom: '8px' }}>1. Employer Verification</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                We cross-verify corporate registry, official domain email addresses, and PEC registration to avoid ghost openings and scams.
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #3b82f6' }}>
              <i className="bi bi-clock-history" style={{ fontSize: '24px', color: '#3b82f6', marginBottom: '8px', display: 'block' }}></i>
              <h4 style={{ fontSize: '17px', marginBottom: '8px' }}>2. Active Deadline Monitoring</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                Expired posts are automatically archived weekly so students don't waste time applying to closed openings.
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #22c55e' }}>
              <i className="bi bi-shield-lock-fill" style={{ fontSize: '24px', color: '#22c55e', marginBottom: '8px', display: 'block' }}></i>
              <h4 style={{ fontSize: '17px', marginBottom: '8px' }}>3. Fair Compensation</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                We prioritize paid engineering internships and transparent salary packages that respect students' skills.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>Frequently Asked Questions</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px' }}>Got questions? We've got answers.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <i className={`bi ${openFaq === idx ? 'bi-chevron-up' : 'bi-chevron-down'}`} style={{ color: 'var(--color-primary)' }}></i>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 16px 20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
