import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  JOBS_DATA, 
  SCHOLARSHIPS_DATA, 
  COURSES_DATA, 
  CV_TEMPLATES_DATA, 
  RECENTLY_ADDED 
} from '../data/opportunities';

export const SearchModal = ({ isOpen, onClose, onSelectOpportunity }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const allOpportunities = useMemo(() => {
    const list = [];
    JOBS_DATA.forEach(j => list.push({ ...j, categoryType: 'Jobs & Internships', url: '/jobs-internships' }));
    SCHOLARSHIPS_DATA.forEach(s => list.push({ ...s, categoryType: 'Scholarships', url: '/scholarships' }));
    COURSES_DATA.forEach(c => list.push({ ...c, categoryType: 'Courses', url: '/courses-certifications' }));
    CV_TEMPLATES_DATA.forEach(t => list.push({ ...t, categoryType: 'CV Templates', url: '/cv-templates' }));
    return list;
  }, []);

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return allOpportunities.slice(0, 6);
    const query = searchTerm.toLowerCase();
    return allOpportunities.filter(item => 
      item.title?.toLowerCase().includes(query) ||
      item.company?.toLowerCase().includes(query) ||
      item.discipline?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.categoryType?.toLowerCase().includes(query)
    );
  }, [searchTerm, allOpportunities]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Search Opportunities</h3>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            Quickly find jobs, internships, scholarships, certifications, and CV templates.
          </p>
        </div>

        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <i className="bi bi-search" style={{ position: 'absolute', left: '16px', top: '14px', color: '#94a3b8' }}></i>
          <input
            type="text"
            className="form-control-custom"
            style={{ paddingLeft: '44px' }}
            placeholder="Type discipline, title, city, company (e.g. Electrical, Descon, CAD)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>
            {searchTerm ? `Results (${filteredResults.length})` : 'Popular & Recent Opportunities'}
          </div>

          {filteredResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: '#64748b' }}>
              <i className="bi bi-emoji-neutral" style={{ fontSize: '36px', display: 'block', marginBottom: '10px' }}></i>
              No matching opportunities found. Try a different keyword!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredResults.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'background 0.2s',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    onClose();
                    if (onSelectOpportunity) {
                      onSelectOpportunity(item);
                    }
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        background: '#fff1eb', 
                        color: 'var(--accent-color)', 
                        padding: '2px 8px', 
                        borderRadius: '12px' 
                      }}>
                        {item.categoryType}
                      </span>
                      {item.discipline && (
                        <span style={{ fontSize: '12px', color: '#64748b' }}>
                          • {item.discipline}
                        </span>
                      )}
                    </div>
                    <h4 style={{ fontSize: '15px', margin: 0, color: 'var(--heading-color)' }}>
                      {item.title}
                    </h4>
                  </div>

                  <Link 
                    to={item.url} 
                    style={{ color: 'var(--accent-color)', fontSize: '18px', paddingLeft: '12px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                  >
                    <i className="bi bi-arrow-right-circle"></i>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
