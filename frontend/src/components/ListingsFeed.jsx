import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Bookmark,
  Share2,
  CheckCircle2,
  DollarSign,
  Calendar,
  Sparkles,
  ArrowRight,
  Filter,
  RotateCcw,
  Building2,
  Navigation
} from 'lucide-react';
import { LISTINGS_DATA, ALL_DISCIPLINES, ALL_LOCATIONS, PARTNER_COMPANIES } from '../data/opportunities';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

const CATEGORY_TABS = ['All', 'Jobs', 'Internships', 'Scholarships', 'Courses', 'CV Templates'];
const EXPERIENCE_LEVELS = ['All', 'Fresh Graduate (0-1 yr)', 'Student / Final Year', '0-2 years'];
const COMPENSATION_OPTIONS = ['All', 'Paid', 'Fully Funded', 'Free'];

export const ListingsFeed = ({ onSelectOpportunity }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedComp, setSelectedComp] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleTabChange = (tab) => {
    setLoading(true);
    setSelectedCategory(tab);
    setTimeout(() => setLoading(false), 200);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedDiscipline('All');
    setSelectedLocation('All');
    setSelectedCompany('All');
    setSelectedExperience('All');
    setSelectedComp('All');
    setSearchQuery('');
  };

  const handleShare = (item, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out ${item.title} at ${item.company} on FutureEngineers.pk!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/#${item.id}`);
      addToast('Opportunity link copied to clipboard!', 'info');
    }
  };

  const filteredListings = useMemo(() => {
    return LISTINGS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.categoryType === selectedCategory;

      const matchDiscipline =
        selectedDiscipline === 'All' ||
        item.discipline?.toLowerCase().includes(selectedDiscipline.toLowerCase()) ||
        item.discipline === 'All Engineering Majors' ||
        item.discipline === 'Multi-disciplinary';

      const matchLocation =
        selectedLocation === 'All' ||
        item.location?.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchCompany =
        selectedCompany === 'All' ||
        item.company?.toLowerCase().includes(selectedCompany.toLowerCase());

      const matchExperience =
        selectedExperience === 'All' ||
        item.experience?.toLowerCase().includes(selectedExperience.toLowerCase());

      const matchComp =
        selectedComp === 'All' ||
        item.compensationType?.toLowerCase().includes(selectedComp.toLowerCase());

      const matchSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchDiscipline && matchLocation && matchCompany && matchExperience && matchComp && matchSearch;
    });
  }, [selectedCategory, selectedDiscipline, selectedLocation, selectedCompany, selectedExperience, selectedComp, searchQuery]);

  return (
    <section className="section" id="listings-feed" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Dynamic Discovery Feed</span>
          </div>
          <h2 className="section-title">Explore Verified Engineering Opportunities</h2>
          <p className="section-subtitle">
            Filter by discipline, career stage, compensation, and urgency to find the perfect match.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="category-tabs-bar">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab}
              className={`category-tab-btn ${selectedCategory === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="mobile-filter-bar d-lg-none" style={{ marginBottom: '16px' }}>
          <button
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px' }}
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
              <Filter size={16} style={{ color: 'var(--color-primary)' }} />
              <span>Filters &amp; Search ({filteredListings.length} results)</span>
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 700 }}>
              {mobileFilterOpen ? 'Hide Filters ▲' : 'Show Filters ▼'}
            </span>
          </button>
        </div>

        {/* Main Feed Layout */}
        <div className="feed-layout">
          {/* Filter Sidebar */}
          <aside className={`filter-sidebar ${mobileFilterOpen ? 'mobile-filters-open' : 'mobile-filters-closed'}`}>
            <div className="filter-sidebar-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={16} style={{ color: 'var(--color-primary-light)' }} />
                <span>Filters</span>
              </div>
              <button className="filter-reset-link" onClick={handleResetFilters}>
                <RotateCcw size={12} style={{ marginRight: '4px', verticalAlign: '-1px' }} />
                Reset
              </button>
            </div>

            {/* Discipline Filter */}
            <div className="filter-group">
              <label className="filter-group-label">Engineering Discipline</label>
              <div className="filter-select-wrapper">
                <Filter size={14} className="select-icon" />
                <select
                  className="form-control-custom"
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                >
                  <option value="All">All Disciplines</option>
                  {ALL_DISCIPLINES.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Filter */}
            <div className="filter-group">
              <label className="filter-group-label">Location / City</label>
              <div className="filter-select-wrapper">
                <Navigation size={14} className="select-icon" />
                <select
                  className="form-control-custom"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="All">All Locations</option>
                  {ALL_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Company Filter */}
            <div className="filter-group">
              <label className="filter-group-label">Company / Partner</label>
              <div className="filter-select-wrapper">
                <Building2 size={14} className="select-icon" />
                <select
                  className="form-control-custom"
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                >
                  <option value="All">All Companies</option>
                  {PARTNER_COMPANIES.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="filter-group">
              <label className="filter-group-label">Career Stage</label>
              <div className="filter-select-wrapper">
                <Briefcase size={14} className="select-icon" />
                <select
                  className="form-control-custom"
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                >
                  {EXPERIENCE_LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Compensation Filter */}
            <div className="filter-group">
              <label className="filter-group-label">Compensation</label>
              <div className="filter-select-wrapper">
                <DollarSign size={14} className="select-icon" />
                <select
                  className="form-control-custom"
                  value={selectedComp}
                  onChange={(e) => setSelectedComp(e.target.value)}
                >
                  {COMPENSATION_OPTIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Filter Input */}
            <div className="filter-group" style={{ marginBottom: 0 }}>
              <label className="filter-group-label">Keywords</label>
              <input
                type="text"
                className="form-control-custom"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="e.g. Descon, Substation, DAAD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </aside>

          {/* Listings Column */}
          <main className="listings-column">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Showing <strong>{filteredListings.length}</strong> vetted opportunities
              </span>
              <span style={{ fontSize: '12.5px', color: 'var(--color-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={14} /> PEC Verified Active Openings
              </span>
            </div>

            {/* Skeleton Loading Simulation */}
            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[1, 2, 3].map((n) => (
                  <div key={n} style={{ height: '140px', background: 'var(--bg-subtle)', borderRadius: '18px', animation: 'pulse 1.5s infinite' }} />
                ))}
              </div>
            ) : filteredListings.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-subtle)', borderRadius: '18px', border: '1px solid var(--border-subtle)' }}>
                <Briefcase size={42} style={{ color: 'var(--text-faint)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>No matching opportunities found</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>
                  Try resetting your filters or search keywords.
                </p>
                <button className="btn btn-secondary" onClick={handleResetFilters}>
                  <RotateCcw size={14} /> Reset All Filters
                </button>
              </div>
            ) : (
              <div className="listings-grid">
                {filteredListings.map((item) => {
                  const saved = isSaved(item.id);
                  return (
                    <article 
                      key={item.id} 
                      className="opportunity-card"
                      onClick={() => onSelectOpportunity(item)}
                    >
                      {/* Avatar */}
                      <div className="company-avatar-box">
                        {item.companyLogo || '🏢'}
                      </div>

                      {/* Main Info */}
                      <div className="opportunity-main">
                        <div className="opportunity-meta-top">
                          <span className={`badge-type ${item.categoryType}`}>
                            {item.categoryType}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                            {item.discipline}
                          </span>
                          {item.urgency === 'closing-soon' && (
                            <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-amber)', background: 'var(--color-amber-bg)', padding: '2px 8px', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '6px' }}>
                              Closing Soon
                            </span>
                          )}
                        </div>

                        <h3 className="opportunity-title">
                          {item.title}
                        </h3>

                        <div className="opportunity-company-row">
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {item.company}
                            {item.verified && <CheckCircle2 size={14} className="verified-icon" />}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={14} /> {item.location}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-emerald)', fontWeight: 600 }}>
                            <DollarSign size={14} /> {item.stipend}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-faint)' }}>
                            <Calendar size={14} /> {item.deadline}
                          </span>
                        </div>

                        <p className="opportunity-desc">
                          {item.description}
                        </p>

                        <div className="opportunity-footer-row">
                          <div className="opportunity-tags-list">
                            {item.tags?.map((tag) => (
                              <span key={tag} className="opportunity-tag-pill">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="opportunity-actions-row">
                            {/* Share button */}
                            <button
                              className="icon-btn"
                              style={{ width: '34px', height: '34px' }}
                              onClick={(e) => handleShare(item, e)}
                              title="Share Opportunity"
                              aria-label="Share"
                            >
                              <Share2 size={15} />
                            </button>

                            {/* Bookmark button */}
                            <button
                              className="icon-btn"
                              style={{ 
                                width: '34px', 
                                height: '34px', 
                                color: saved ? '#ef4444' : 'var(--text-secondary)',
                                borderColor: saved ? 'rgba(239, 68, 68, 0.4)' : 'var(--border-subtle)',
                                background: saved ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-subtle)'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSave(item);
                                addToast(saved ? 'Removed from saved items' : `Saved "${item.title}"!`, saved ? 'info' : 'success');
                              }}
                              title={saved ? 'Remove Bookmark' : 'Save Opportunity'}
                              aria-label="Bookmark"
                            >
                              <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} />
                            </button>

                            {/* Apply Button */}
                            <button
                              className="btn btn-primary"
                              style={{ padding: '7px 16px', fontSize: '13px' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectOpportunity(item);
                              }}
                            >
                              <span>Apply Now</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
