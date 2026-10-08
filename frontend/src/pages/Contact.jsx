import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'Student Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please fill out all required fields', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      addToast('Message received! Our team will contact you shortly.', 'success');
      setFormData({ name: '', email: '', subject: '', type: 'Student Inquiry', message: '' });
    }, 700);
  };

  const contactItems = [
    { icon: 'bi-geo-alt', title: 'Location', value: 'Islamabad & Lahore, Pakistan' },
    { icon: 'bi-envelope', title: 'Email Us', value: 'info@futureengineers.pk' },
    { icon: 'bi-telephone', title: 'Phone', value: '+92 300 0000000' },
    { icon: 'bi-clock', title: 'Response Time', value: 'Usually within 24 hours' },
  ];

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <div>
            <span>Contact &amp; </span>
            <span className="description-title">Support</span>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '15px' }}>
            Have a question, want to submit a job opening, or need help with a scholarship listing? We are here to assist.
          </p>
        </div>

        <div className="contact-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '36px', alignItems: 'flex-start' }}>
          {/* Info Card */}
          <div style={{ background: 'var(--bg-surface)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {contactItems.map(({ icon, title, value }) => (
                <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-primary-glow)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                    <i className={`bi ${icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', margin: 0, color: 'var(--text-primary)' }}>{title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>Connect with us:</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
                  { icon: 'bi-telegram', href: '#', label: 'Telegram' },
                  { icon: 'bi-whatsapp', href: '#', label: 'WhatsApp' },
                  { icon: 'bi-twitter-x', href: '#', label: 'Twitter/X' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '16px', transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-surface)', borderRadius: '16px', padding: '36px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <i className="bi bi-check-circle-fill" style={{ fontSize: '48px', color: '#22c55e', display: 'block', marginBottom: '16px' }}></i>
                <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>Thank You!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '450px', margin: '0 auto 20px auto' }}>
                  Your message has been received. Our team will review your inquiry and reply via email.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>

                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="form-control-custom"
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control-custom"
                      placeholder="e.g. ali@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Inquiry Type
                    </label>
                    <select
                      className="form-control-custom"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="Student Inquiry">Student Career Inquiry</option>
                      <option value="Post a Job">Employer - Post a Job/Internship</option>
                      <option value="Scholarship Notice">University/Scholarship Notice</option>
                      <option value="Bug Report">Feedback / Technical Issue</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control-custom"
                      placeholder="e.g. Summer Internship Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px', display: 'block' }}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="form-control-custom"
                    placeholder="Write your message or job listing details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '12px 32px' }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
