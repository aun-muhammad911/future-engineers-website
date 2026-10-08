import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Share2, 
  Bookmark, 
  ArrowRight,
  Filter,
  RotateCcw
} from 'lucide-react';
import { LISTINGS_DATA, ALL_DISCIPLINES, ALL_LOCATIONS } from '../data/opportunities';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

export const JobsInternships = ({ onSelectOpportunity }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [disciplineFilter, setDisciplineFilter] = useState(searchParams.get('discipline') || 'All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();

  const jobsData = useMemo(() => {
    return LISTINGS_DATA.filter(item => item.categoryType === 'Jobs' || item.categoryType === 'Internships');
  }, []);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchSearch =
        !search.trim() ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());

      const matchDiscipline =
        disciplineFilter === 'All' ||
        job.discipline.toLowerCase().includes(disciplineFilter.toLowerCase());

      const matchType = typeFilter === 'All' || job.type === typeFilter;
      const matchLocation = locationFilter === 'All' || job.location.includes(locationFilter);

      return matchSearch && matchDiscipline && matchType && matchLocation;
    });
  }, [jobsData, search, disciplineFilter, typeFilter, locationFilter]);

  const handleShare = (job, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this opening at ${job.company} on FutureEngineers.pk!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Opportunity link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Careers &amp; Placements</span>
          </div>
          <h1 className="section-title">Engineering Jobs &amp; Internships</h1>
          <p className="section-subtitle">
            Verified corporate jobs, graduate trainee programs, and paid summer internships from Pakistan's leading engineering employers.
          </p>
        </div>

        {/* Filters Top Box */}
        <div className="floating-search-card" style={{ maxWidth: '100%', marginBottom: '32px' }}>
          <div className="search-field-group">
            <input
              type="text"
              placeholder="Search by job title, tech tool, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-field-group">
            <select
              value={disciplineFilter}
              onChange={(e) => setDisciplineFilter(e.target.value)}
            >
              <option value="All">All Disciplines</option>
              {ALL_DISCIPLINES.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="search-field-group">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All Job Types</option>
              <option value="Full-time">Full-time GTE</option>
              <option value="Internship">Paid Summer Internship</option>
            </select>
          </div>

          <button
            className="btn btn-secondary"
            onClick={() => { setSearch(''); setDisciplineFilter('All'); setTypeFilter('All'); setLocationFilter('All'); }}
          >
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>
        </div>

        {/* Results Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredJobs.length}</strong> active openings
          </span>
          <span style={{ fontSize: '13px', color: 'var(--color-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CheckCircle2 size={15} /> PEC Accredited Employers
          </span>
        </div>

        {/* Jobs List */}
        {filteredJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-surface)', borderRadius: '18px', border: '1px solid var(--border-subtle)' }}>
            <Briefcase size={44} style={{ color: 'var(--text-faint)', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '6px' }}>No matching openings found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '18px' }}>
              Try loosening your filters or keyword query.
            </p>
            <button className="btn btn-primary" onClick={() => { setSearch(''); setDisciplineFilter('All'); setTypeFilter('All'); }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="listings-grid">
            {filteredJobs.map((job) => {
              const saved = isSaved(job.id);
              return (
                <article
                  key={job.id}
                  className="opportunity-card"
                  onClick={() => onSelectOpportunity(job)}
                >
                  <div className="company-avatar-box">
                    {job.companyLogo || '🏢'}
                  </div>

                  <div className="opportunity-main">
                    <div className="opportunity-meta-top">
                      <span className={`badge-type ${job.categoryType}`}>
                        {job.type}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                        {job.discipline}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--color-amber)', fontWeight: 600 }}>
                        <Clock size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                        Deadline: {job.deadline}
                      </span>
                    </div>

                    <h3 className="opportunity-title">
                      {job.title}
                    </h3>

                    <div className="opportunity-company-row">
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {job.company}
                        {job.verified && <CheckCircle2 size={14} className="verified-icon" />}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-emerald)', fontWeight: 600 }}>
                        <DollarSign size={14} /> {job.stipend}
                      </span>
                    </div>

                    <p className="opportunity-desc">
                      {job.description}
                    </p>

                    <div className="opportunity-footer-row">
                      <div className="opportunity-tags-list">
                        {job.tags?.map((tag) => (
                          <span key={tag} className="opportunity-tag-pill">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="opportunity-actions-row">
                        <button
                          className="icon-btn"
                          style={{ width: '34px', height: '34px' }}
                          onClick={(e) => handleShare(job, e)}
                          title="Share"
                          aria-label="Share"
                        >
                          <Share2 size={15} />
                        </button>
                        <button
                          className="icon-btn"
                          style={{
                            width: '34px',
                            height: '34px',
                            color: saved ? '#ef4444' : 'var(--text-secondary)',
                            background: saved ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-subtle)'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(job);
                            addToast(saved ? 'Removed from saved items' : `Saved "${job.title}"!`, saved ? 'info' : 'success');
                          }}
                          title={saved ? "Remove Bookmark" : "Save Opportunity"}
                          aria-label="Bookmark"
                        >
                          <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} />
                        </button>
                        <button
                          className="btn btn-primary"
                          style={{ padding: '7px 18px', fontSize: '13px' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectOpportunity(job);
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
      </div>
    </div>
  );
};
