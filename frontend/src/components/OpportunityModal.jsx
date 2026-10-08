import React, { useState } from 'react';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

export const OpportunityModal = ({ item, onClose }) => {
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState(null);

  if (!item) return null;

  const saved = isSaved(item.id);

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicantEmail) {
      addToast('Please enter your email address', 'error');
      return;
    }
    setApplied(true);
    addToast(`Application successfully submitted for "${item.title}"!`, 'success');
  };

  const handleSave = () => {
    toggleSave(item);
    addToast(
      saved ? `Removed from saved items` : `Added "${item.title}" to saved items!`,
      saved ? 'info' : 'success'
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="bi bi-x-lg"></i>
        </button>

        {item.image && (
          <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="post-category" style={{ fontSize: '11px' }}>
                {item.type || item.category || item.level || 'Engineering Opportunity'}
              </span>
              {item.location && (
                <span style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="bi bi-geo-alt"></i> {item.location}
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '22px', marginBottom: '6px', color: 'var(--heading-color)' }}>
              {item.title}
            </h2>
            {item.company && (
              <p style={{ fontWeight: 600, color: 'var(--accent-color)', margin: '0 0 16px 0' }}>
                {item.company}
              </p>
            )}
            {item.provider && (
              <p style={{ fontWeight: 600, color: 'var(--accent-color)', margin: '0 0 16px 0' }}>
                {item.provider}
              </p>
            )}
          </div>

          <button 
            onClick={handleSave}
            className="btn"
            style={{ 
              background: saved ? '#fee2e2' : '#f1f5f9', 
              color: saved ? '#dc2626' : '#475569',
              padding: '8px 14px',
              borderRadius: '20px',
              fontSize: '13px'
            }}
            title={saved ? 'Remove Bookmark' : 'Save Opportunity'}
          >
            <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
            <span style={{ marginLeft: '6px' }}>{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', margin: '16px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
          {item.stipend && (
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Stipend / Salary</span>
              <strong style={{ fontSize: '14px', color: '#0f172a' }}>{item.stipend}</strong>
            </div>
          )}
          {item.coverage && (
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Scholarship Value</span>
              <strong style={{ fontSize: '14px', color: '#0f172a' }}>{item.coverage}</strong>
            </div>
          )}
          {item.deadline && (
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Deadline</span>
              <strong style={{ fontSize: '14px', color: '#dc2626' }}>{item.deadline}</strong>
            </div>
          )}
          {item.duration && (
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Duration</span>
              <strong style={{ fontSize: '14px', color: '#0f172a' }}>{item.duration}</strong>
            </div>
          )}
          {item.experience && (
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Experience</span>
              <strong style={{ fontSize: '14px', color: '#0f172a' }}>{item.experience}</strong>
            </div>
          )}
        </div>

        <div style={{ margin: '18px 0' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Description &amp; Scope</h4>
          <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: 1.6 }}>
            {item.description || 'Verified engineering opening for Pakistani university students and fresh engineering graduates.'}
          </p>
        </div>

        {item.requirements && item.requirements.length > 0 && (
          <div style={{ margin: '18px 0' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Requirements &amp; Qualifications</h4>
            <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {item.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {item.syllabus && (
          <div style={{ margin: '18px 0' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Course Modules &amp; Topics</h4>
            <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {item.syllabus.map((syl, idx) => (
                <li key={idx}>{syl}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Form */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          {applied ? (
            <div style={{ background: '#dcfce7', color: '#166534', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <i className="bi bi-check-circle-fill" style={{ fontSize: '24px', display: 'block', marginBottom: '6px' }}></i>
              <strong>Application Submitted!</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13.5px' }}>
                Your details have been registered. The employer or review committee will reach out via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontSize: '16px', margin: 0 }}>Instant Application / Express Interest</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="form-control-custom"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control-custom"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  Upload CV / Resume (Optional, PDF or DOCX)
                </label>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  className="form-control-custom"
                  onChange={(e) => setApplicantResume(e.target.files[0])}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  <i className="bi bi-send-fill" style={{ marginRight: '8px' }}></i> Submit Application
                </button>
                <button type="button" className="btn" style={{ background: '#f1f5f9', color: '#475569' }} onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
