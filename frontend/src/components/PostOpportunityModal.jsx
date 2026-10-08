import React, { useState } from 'react';
import { PlusCircle, X, Building, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { ALL_DISCIPLINES } from '../data/opportunities';
import { useToast } from '../context/ToastContext';

export const PostOpportunityModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    title: '',
    discipline: 'Mechanical Engineering',
    type: 'Full-time Job',
    location: 'Lahore',
    stipend: '',
    deadline: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.email || !formData.title || !formData.description) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      addToast('Opportunity submitted for PEC verification!', 'success');
      setFormData({
        company: '',
        email: '',
        title: '',
        discipline: 'Mechanical Engineering',
        type: 'Full-time Job',
        location: 'Lahore',
        stipend: '',
        deadline: '',
        description: ''
      });
    }, 700);
  };

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div className="cmd-palette-box" style={{ maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto', padding: '32px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
              Post an Opportunity
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
              Reach 50,000+ engineering students and fresh graduates in Pakistan.
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--color-emerald)', margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Listing Submitted!</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '420px', margin: '0 auto 24px auto' }}>
              Our editorial and verification team will review your posting against PEC compliance standards within 24 hours.
            </p>
            <button className="btn btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label className="filter-group-label">Organization / Company *</label>
                <input
                  type="text"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="e.g. Descon, NESPAK, Engro"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="filter-group-label">Official HR Email *</label>
                <input
                  type="email"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="hr@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="filter-group-label">Opportunity Title *</label>
              <input
                type="text"
                className="form-control-custom"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="e.g. Graduate Trainee Electrical Engineer"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label className="filter-group-label">Discipline</label>
                <select
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                >
                  {ALL_DISCIPLINES.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="filter-group-label">Opportunity Type</label>
                <select
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="Full-time Job">Full-time Job (GTE)</option>
                  <option value="Paid Summer Internship">Paid Summer Internship</option>
                  <option value="Site Internship">Site Internship</option>
                  <option value="Scholarship Notice">Scholarship / Fellowship</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label className="filter-group-label">Location / City</label>
                <input
                  type="text"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="e.g. Karachi / Hybrid"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div>
                <label className="filter-group-label">Stipend / Salary (PKR)</label>
                <input
                  type="text"
                  className="form-control-custom"
                  style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="e.g. PKR 65,000 / month"
                  value={formData.stipend}
                  onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="filter-group-label">Detailed Job Description &amp; Requirements *</label>
              <textarea
                rows={4}
                className="form-control-custom"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                placeholder="Include eligibility, PEC criteria, responsibilities, and application link/instructions..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1 }}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Opportunity for Review'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
