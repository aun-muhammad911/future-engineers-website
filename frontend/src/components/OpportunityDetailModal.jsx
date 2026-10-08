import React, { useState } from 'react';
import { 
  X, 
  Building, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  Send, 
  Upload, 
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

export const OpportunityDetailModal = ({ item, onClose }) => {
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();
  
  const [applied, setApplied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pecNumber, setPecNumber] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!item) return null;

  const saved = isSaved(item.id);

  const handleApply = (e) => {
    e.preventDefault();
    if (!name || !email) {
      addToast('Please enter your full name and email.', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setApplied(true);
      addToast(`Application successfully sent for "${item.title}"!`, 'success');
    }, 600);
  };

  const handleSaveToggle = () => {
    toggleSave(item);
    addToast(saved ? 'Removed from saved items' : `Saved "${item.title}"!`, saved ? 'info' : 'success');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out this opening at ${item.company} on FutureEngineers.pk!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Opportunity link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div 
        className="cmd-palette-box" 
        style={{ maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto', padding: '32px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div className="company-avatar-box" style={{ width: '56px', height: '56px', fontSize: '26px' }}>
              {item.companyLogo || '🏢'}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className={`badge-type ${item.categoryType}`}>
                  {item.categoryType}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {item.discipline}
                </span>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                {item.title}
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="icon-btn" onClick={handleShare} title="Share" aria-label="Share">
              <Share2 size={16} />
            </button>
            <button 
              className="icon-btn" 
              onClick={handleSaveToggle}
              style={{
                color: saved ? '#ef4444' : 'var(--text-secondary)',
                background: saved ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-subtle)'
              }}
              title={saved ? "Remove Bookmark" : "Save Opportunity"}
              aria-label="Bookmark"
            >
              <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
            </button>
            <button className="icon-btn" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '24px' }}>
          <div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-faint)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Company / Org</span>
            <strong style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {item.company}
              {item.verified && <CheckCircle2 size={13} style={{ color: 'var(--color-primary-light)' }} />}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-faint)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Location</span>
            <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{item.location}</strong>
          </div>

          <div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-faint)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Stipend / Value</span>
            <strong style={{ fontSize: '14px', color: 'var(--color-emerald)' }}>{item.stipend || 'Competitive'}</strong>
          </div>

          <div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-faint)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Deadline</span>
            <strong style={{ fontSize: '14px', color: 'var(--color-amber)' }}>{item.deadline}</strong>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Opportunity Overview
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {item.description}
          </p>
        </div>

        {/* Requirements */}
        {item.requirements && item.requirements.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Eligibility &amp; Requirements
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.requirements.map((req, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Application Form */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
          {applied ? (
            <div style={{ background: 'var(--color-emerald-bg)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
              <FileCheck size={40} style={{ color: 'var(--color-emerald)', margin: '0 auto 10px auto' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Application Dispatched!
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                Your resume and credentials have been forwarded directly to the HR portal at <strong>{item.company}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Instant Application</h4>
                <span style={{ fontSize: '12px', color: 'var(--text-faint)' }}>1-Click Express Apply</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="PEC Graduate / Student Reg # (e.g. ELECT/12345)"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  value={pecNumber}
                  onChange={(e) => setPecNumber(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', border: '1px dashed var(--border-strong)', borderRadius: '12px', cursor: 'pointer', background: 'var(--bg-subtle)', color: 'var(--text-muted)', fontSize: '13px' }}>
                  <Upload size={16} />
                  <span>{resumeFile ? resumeFile.name : 'Upload Engineering CV (PDF / DOCX, Max 5MB)'}</span>
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    style={{ display: 'none' }}
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />
                </label>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  disabled={submitting}
                >
                  <Send size={15} />
                  <span>{submitting ? 'Transmitting...' : 'Submit Application Now'}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
