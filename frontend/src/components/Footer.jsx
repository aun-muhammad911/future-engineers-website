import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Brand Col */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="logo-icon">
                <Compass size={22} />
              </div>
              <div className="brand-title">
                FutureEngineers<span>.pk</span>
              </div>
            </Link>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Pakistan's premier engineering career &amp; scholarship talent portal. Dedicated to empowering engineering undergraduates, graduates, and researchers with vetted opportunities and ATS career toolkits.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn" aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={{ fontSize: '16px' }}></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="icon-btn" title="WhatsApp Community" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" style={{ fontSize: '16px' }}></i>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer" className="icon-btn" title="Telegram Channel" aria-label="Telegram">
                <i className="bi bi-telegram" style={{ fontSize: '16px' }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon-btn" title="Twitter / X" aria-label="Twitter">
                <i className="bi bi-twitter-x" style={{ fontSize: '16px' }}></i>
              </a>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="footer-heading">Disciplines</h4>
            <ul className="footer-links-list">
              <li><Link to="/jobs-internships?discipline=Mechanical%20Engineering">Mechanical Engineering</Link></li>
              <li><Link to="/jobs-internships?discipline=Electrical%20Engineering">Electrical &amp; Power</Link></li>
              <li><Link to="/jobs-internships?discipline=Civil%20%26%20Structural">Civil &amp; Infrastructure</Link></li>
              <li><Link to="/jobs-internships?discipline=Software%20%2F%20CS">Software &amp; Embedded CS</Link></li>
              <li><Link to="/jobs-internships?discipline=Mechatronics%20%26%20Robotics">Mechatronics &amp; Robotics</Link></li>
              <li><Link to="/jobs-internships?discipline=Chemical%20%26%20Process">Chemical &amp; Process</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-heading">Career Tools</h4>
            <ul className="footer-links-list">
              <li><Link to="/cv-templates">ATS Engineering CV Templates</Link></li>
              <li><Link to="/courses-certifications">PMP &amp; BIM Certifications</Link></li>
              <li><Link to="/scholarships">DAAD &amp; Fulbright Grants</Link></li>
              <li><Link to="/scholarships">HEC Need-Based Aid</Link></li>
              <li><Link to="/saved">Saved Opportunities</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us &amp; Mission</Link></li>
              <li><Link to="/about">PEC Verification Standard</Link></li>
              <li><Link to="/contact">Post a Job (Employers)</Link></li>
              <li><Link to="/contact">Contact &amp; Support</Link></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy: We respect student confidentiality.'); }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} style={{ color: 'var(--color-primary-light)' }} />
            <span>PEC Aligned • Non-commercial Educational Career Directory</span>
          </div>

          <div>
            © {new Date().getFullYear()} <strong>FutureEngineers.pk</strong>. Designed for Pakistan's Engineering Community.
          </div>
        </div>
      </div>
    </footer>
  );
};
