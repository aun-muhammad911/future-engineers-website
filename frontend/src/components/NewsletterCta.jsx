import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const NewsletterCta = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      addToast('Successfully subscribed to Weekly Engineering Digest!', 'success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="section" style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        <div className="newsletter-gradient-card">
          <div className="newsletter-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>
                <Sparkles size={14} />
                <span>Weekly Career Radar</span>
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.2 }}>
                Never Miss an Engineering Opportunity
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: 1.6, maxWidth: '520px', margin: 0 }}>
                Join 18,500+ Pakistani engineering students and graduates receiving our curated Sunday digest of verified jobs, paid internships, scholarships, and free tools.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.5)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                  <CheckCircle2 size={36} style={{ color: '#10b981', margin: '0 auto 10px auto' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>You're on the list!</h3>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                    Check your inbox this Sunday for the latest engineering opportunities.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="newsletter-input-wrap" style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '14px', padding: '6px', backdropFilter: 'blur(8px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your university or personal email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#ffffff',
                        padding: '12px 14px',
                        fontSize: '14.5px',
                        fontFamily: 'var(--font-sans)',
                        minWidth: 0
                      }}
                      disabled={loading}
                      required
                    />
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ borderRadius: '10px', padding: '10px 22px', fontSize: '14px', whiteSpace: 'nowrap' }}
                      disabled={loading}
                    >
                      {loading ? 'Subscribing...' : (
                        <>
                          <span>Subscribe</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.6)', paddingLeft: '6px' }}>
                    <ShieldCheck size={14} style={{ color: '#10b981' }} />
                    <span>No spam. Unsubscribe anytime with 1 click.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
