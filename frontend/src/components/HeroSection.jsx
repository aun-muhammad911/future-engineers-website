import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Layers, 
  Filter, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { 
  ALL_DISCIPLINES, 
  ALL_LOCATIONS, 
  PARTNER_COMPANIES, 
  LIVE_METRICS 
} from '../data/opportunities';

export const HeroSection = ({ onQuickSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [discipline, setDiscipline] = useState('All');
  const [oppType, setOppType] = useState('All');
  const [location, setLocation] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onQuickSearch) {
      onQuickSearch({ keyword, discipline, oppType, location });
    } else {
      navigate(`/jobs-internships?q=${encodeURIComponent(keyword)}&discipline=${encodeURIComponent(discipline)}`);
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-glow-bg"></div>

      <div className="container">
        <div className="hero-content">
          {/* Live Metric Pill */}
          <div className="hero-pill-badge">
            <span className="pulse-dot"></span>
            <span>{LIVE_METRICS.activeListings}+ Verified Listings Active This Week</span>
            <span style={{ color: 'var(--color-primary-light)', fontWeight: 700 }}>• PEC Verified</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Launch Your Engineering Career Across{' '}
            <span className="gradient-text">Pakistan &amp; Beyond</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc">
            The premier talent ecosystem connecting Pakistan's engineering students &amp; fresh graduates with vetted corporate jobs, paid summer internships, fully funded scholarships, and ATS-ready CV templates.
          </p>

          {/* Multi-Filter Floating Quick Search Card */}
          <form className="floating-search-card" onSubmit={handleSearch}>
            {/* Keyword Input */}
            <div className="search-field-group">
              <Search size={18} />
              <input
                type="text"
                placeholder="Job title, tech skill (e.g. AutoCAD, Power Grid)..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            {/* Discipline Dropdown */}
            <div className="search-field-group">
              <Layers size={18} />
              <select value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                <option value="All">All Disciplines</option>
                {ALL_DISCIPLINES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="search-field-group">
              <MapPin size={18} />
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="All">All Cities / Remote</option>
                {ALL_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Search Action Button */}
            <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <span>Search</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Trust Value Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--color-emerald)' }} />
              <strong>100% Free</strong> for All Students
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: 'var(--color-primary-light)' }} />
              <strong>PEC &amp; HR Vetted</strong> Opportunities
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} style={{ color: 'var(--color-amber)' }} />
              <strong>{PARTNER_COMPANIES.length}+</strong> Hiring Partners
            </span>
          </div>

          {/* Marquee Partner Logos */}
          <div className="marquee-wrapper">
            <div className="marquee-label">Trusted by Leading Pakistani Engineering &amp; Tech Employers</div>
            <div className="marquee-track-container">
              <div className="marquee-track">
                {/* Double array for seamless loop */}
                {[...PARTNER_COMPANIES, ...PARTNER_COMPANIES].map((company, idx) => (
                  <div key={idx} className="marquee-card">
                    <span className="company-emoji">{company.logo}</span>
                    <span>{company.name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-faint)', marginLeft: '4px' }}>• {company.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
