import React, { useState, useMemo } from 'react';
import { SCHOLARSHIPS_DATA } from '../data/opportunities';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

export const Scholarships = ({ onSelectOpportunity }) => {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');
  const [countryFilter, setCountryFilter] = useState('All');
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();

  const levels = ['All', 'Undergraduate', 'Master’s', 'Ph.D.'];
  const countries = ['All', 'Pakistan', 'Germany', 'United States', 'Turkey'];

  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS_DATA.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.provider.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.eligibility.toLowerCase().includes(search.toLowerCase());

      const matchLevel = levelFilter === 'All' || item.level.includes(levelFilter);
      const matchCountry = countryFilter === 'All' || item.country === countryFilter;

      return matchSearch && matchLevel && matchCountry;
    });
  }, [search, levelFilter, countryFilter]);

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Funding &amp; Grants</h2>
          <div>
            <span>Engineering </span>
            <span className="description-title">Scholarships &amp; Fellowships</span>
          </div>
          <p style={{ color: '#64748b', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '15px' }}>
            Fully funded and partial scholarships for Pakistani students to study undergraduate, MS, and PhD in Pakistan and globally.
          </p>
        </div>

        {/* Filter Section */}
        <div className="search-filter-box">
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '6px', display: 'block' }}>
              SEARCH SCHOLARSHIPS
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Search by name, institution, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '6px', display: 'block' }}>
              STUDY LEVEL
            </label>
            <select
              className="form-control-custom"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl === 'All' ? 'All Degree Levels' : lvl}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '6px', display: 'block' }}>
              DESTINATION COUNTRY
            </label>
            <select
              className="form-control-custom"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Countries' : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {filteredScholarships.map((sch) => {
            const saved = isSaved(sch.id);
            return (
              <div 
                key={sch.id}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={sch.image} alt={sch.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span 
                    style={{ 
                      position: 'absolute', 
                      top: '12px', 
                      left: '12px', 
                      background: 'var(--accent-color)', 
                      color: '#ffffff', 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      fontSize: '11px', 
                      fontWeight: 700 
                    }}
                  >
                    {sch.country}
                  </span>
                </div>

                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-glow)', padding: '2px 8px', borderRadius: '8px' }}>
                      {sch.level}
                    </span>
                    <span style={{ fontSize: '12px', color: '#dc2626', fontWeight: 600 }}>
                      <i className="bi bi-calendar-event"></i> {sch.deadline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    <a 
                      href="#view" 
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectOpportunity(sch);
                      }}
                      style={{ color: 'var(--heading-color)' }}
                    >
                      {sch.title}
                    </a>
                  </h3>

                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                    <i className="bi bi-award"></i> <strong>{sch.provider}</strong>
                  </div>

                  <div style={{ background: 'var(--bg-subtle)', padding: '10px 14px', borderRadius: '10px', marginBottom: '14px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    <strong>Coverage:</strong> {sch.coverage}
                  </div>

                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
                    {sch.description}
                  </p>

                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '8px 16px', fontSize: '13.5px' }}
                      onClick={() => onSelectOpportunity(sch)}
                    >
                      View Details &amp; Apply
                    </button>
                    <button
                      className="btn"
                      style={{
                        background: saved ? '#fee2e2' : '#f1f5f9',
                        color: saved ? '#dc2626' : '#64748b',
                        padding: '8px 14px',
                        fontSize: '14px',
                        borderRadius: '20px'
                      }}
                      onClick={() => {
                        toggleSave(sch);
                        addToast(saved ? 'Removed from saved items' : 'Saved scholarship!', saved ? 'info' : 'success');
                      }}
                      title={saved ? 'Remove Bookmark' : 'Save Scholarship'}
                    >
                      <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
