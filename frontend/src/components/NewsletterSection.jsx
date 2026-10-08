import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    setTimeout(() => {
      setLoading(false);
      setStatus({ 
        type: 'success', 
        message: 'Your subscription request has been sent. Thank you for joining!' 
      });
      setEmail('');
      addToast('Subscribed to weekly career updates!', 'success');
    }, 700);
  };

  return (
    <section id="call-to-action" className="call-to-action section">
      <div className="container">
        <div className="newsletter-box">
          <div className="cta-content">
            <h2>Get Weekly Career Updates</h2>
            <p>
              Subscribe to receive the latest engineering jobs, internships, scholarships and course listings straight to your inbox, every week.
            </p>

            <form onSubmit={handleSubmit} className="cta-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
                <button 
                  className="btn btn-primary" 
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {status.message && (
                <div className={`newsletter-alert ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          <div className="cta-image">
            <img 
              src="/assets/img/cta-1.webp" 
              alt="Subscribe for engineering career updates" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
