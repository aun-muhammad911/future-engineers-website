import React from 'react';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export const SavedOpportunities = ({ onSelectOpportunity }) => {
  const { savedItems, toggleSave } = useSaved();
  const { addToast } = useToast();

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Bookmarks</h2>
          <div>
            <span>Your Saved </span>
            <span className="description-title">Opportunities</span>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '15px' }}>
            Access all your bookmarked jobs, scholarships, courses, and templates in one convenient dashboard.
          </p>
        </div>

        {savedItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-surface)', borderRadius: '16px', border: '1px solid var(--border-subtle)', maxWidth: '600px', margin: '0 auto' }}>
            <i className="bi bi-bookmark-x" style={{ fontSize: '50px', color: 'var(--text-faint)', display: 'block', marginBottom: '16px' }}></i>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>No Saved Opportunities Yet</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '24px' }}>
              Click the bookmark icon on any job, scholarship, or course card to save it for later review and application.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Link to="/jobs-internships" className="btn btn-primary">
                Browse Jobs &amp; Internships
              </Link>
              <Link to="/scholarships" className="btn btn-outline">
                Browse Scholarships
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {savedItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease'
                }}
              >
                {item.image && (
                  <div style={{ height: '160px', overflow: 'hidden' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}

                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="post-category" style={{ fontSize: '11px', alignSelf: 'flex-start', marginBottom: '8px' }}>
                    {item.type || item.category || 'Opportunity'}
                  </span>

                  <h3 style={{ fontSize: '17px', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>

                  {item.company && (
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                      <i className="bi bi-building"></i> {item.company}
                    </p>
                  )}
                  {item.provider && (
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                      <i className="bi bi-award"></i> {item.provider}
                    </p>
                  )}

                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '12px' }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '8px 14px', fontSize: '13px' }}
                      onClick={() => onSelectOpportunity(item)}
                    >
                      View &amp; Apply
                    </button>
                    <button
                      className="btn"
                      style={{ background: '#fee2e2', color: '#dc2626', borderColor: '#fecaca', padding: '8px 14px', fontSize: '13px' }}
                      onClick={() => {
                        toggleSave(item);
                        addToast(`Removed "${item.title}" from saved items`, 'info');
                      }}
                      title="Remove from saved"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
