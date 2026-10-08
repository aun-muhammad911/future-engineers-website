import React from 'react';
import { Link } from 'react-router-dom';

export const MissionSection = () => {
  return (
    <section id="call-to-action-2" className="call-to-action-2 section">
      <div className="container">
        <div className="advertise-1">
          <div className="content-left">
            <span className="badge">OUR MISSION</span>
            <h2>Helping Pakistan's Future Engineers Build Their Careers</h2>
            <p>
              FutureEngineers.pk brings together job listings, internships, scholarships, courses and CV resources in one place, so engineering students and graduates can focus on building their careers instead of searching endlessly for opportunities.
            </p>

            <div className="features">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>PEC Verified Listings</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>100% Free Resources</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Updated Weekly</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Link className="btn btn-primary" to="/jobs-internships">
                Browse Opportunities
              </Link>
              <Link className="btn btn-outline" to="/about">
                Learn More
              </Link>
            </div>
          </div>

          <div className="content-right">
            <img 
              src="/assets/img/misc-1.webp" 
              alt="Engineering students collaborating in lab" 
            />
            <div className="floating-card">
              <div className="card-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="card-content">
                <span className="stats-number">500+</span>
                <span className="stats-text">Opportunities Listed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
