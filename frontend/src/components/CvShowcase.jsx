import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle, 
  Star, 
  Sparkles, 
  Check, 
  X,
  ShieldCheck
} from 'lucide-react';
import { CV_TEMPLATES, ATS_TIPS } from '../data/opportunities';
import { useToast } from '../context/ToastContext';

export const CvShowcase = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const { addToast } = useToast();

  const disciplines = ['All', 'Universal / All Majors', 'Mechanical / Industrial', 'Electrical / Electronics', 'Civil / Geotechnical'];

  const filteredTemplates = selectedDiscipline === 'All'
    ? CV_TEMPLATES
    : CV_TEMPLATES.filter(t => t.discipline === selectedDiscipline);

  const handleDownload = (tpl, format) => {
    addToast(`Downloading ${tpl.title} in ${format} format...`, 'success');
  };

  return (
    <section className="section" id="cv-showcase" style={{ background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Career Accelerator</span>
          </div>
          <h2 className="section-title">ATS-Ready Engineering CV Templates</h2>
          <p className="section-subtitle">
            Engineered to pass multinational Applicant Tracking Systems with dedicated sections for PEC Registration, FYP, and tool stacks.
          </p>
        </div>

        {/* Discipline Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {disciplines.map((d) => (
            <button
              key={d}
              className={`category-tab-btn ${selectedDiscipline === d ? 'active' : ''}`}
              onClick={() => setSelectedDiscipline(d)}
            >
              {d === 'All' ? 'All Formats' : d}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className="bento-card"
              style={{ padding: '20px' }}
            >
              <div style={{ height: '240px', borderRadius: '14px', overflow: 'hidden', background: 'var(--bg-subtle)', position: 'relative', marginBottom: '16px' }}>
                <img src={tpl.previewImg} alt={tpl.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '9999px', fontSize: '11.5px', fontWeight: 700, color: 'var(--color-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={13} /> {tpl.score}
                </div>
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary-light)', marginBottom: '6px' }}>
                {tpl.discipline}
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                {tpl.title}
              </h3>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '18px', flexGrow: 1 }}>
                {tpl.highlight}
              </p>

              <div style={{ fontSize: '12px', color: 'var(--text-faint)', marginBottom: '16px' }}>
                Formats: <strong>{tpl.format}</strong> • {tpl.downloads} downloads
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '9px 14px', fontSize: '13px' }}
                  onClick={() => handleDownload(tpl, '.DOCX')}
                >
                  <Download size={14} /> Download Free
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ padding: '9px 12px' }}
                  onClick={() => setPreviewTemplate(tpl)}
                  title="Live Preview"
                  aria-label="Preview"
                >
                  <Eye size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ATS Screening Checklist Card */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '36px', boxShadow: 'var(--card-shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>ATS Screening Checklist for Pakistani Engineers</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>Follow these rules to ensure your resume scores in the top 5% of applicant tracking systems.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {ATS_TIPS.map((tip, idx) => (
              <div key={idx} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '18px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{tip.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview Modal */}
        {previewTemplate && (
          <div className="cmd-palette-backdrop" onClick={() => setPreviewTemplate(null)}>
            <div className="cmd-palette-box" style={{ maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', padding: '28px' }} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>{previewTemplate.title}</h3>
                  <span style={{ fontSize: '12.5px', color: 'var(--color-emerald)', fontWeight: 600 }}>
                    <CheckCircle size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                    ATS Verified Layout (98% Pass Score)
                  </span>
                </div>
                <button className="icon-btn" onClick={() => setPreviewTemplate(null)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                <img src={previewTemplate.previewImg} alt={previewTemplate.title} style={{ width: '100%' }} />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  className="btn btn-primary" 
                  style={{ flex: 1 }}
                  onClick={() => {
                    handleDownload(previewTemplate, 'Word .DOCX');
                    setPreviewTemplate(null);
                  }}
                >
                  <Download size={16} /> Download Word (.DOCX)
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    handleDownload(previewTemplate, 'LaTeX / Overleaf');
                    setPreviewTemplate(null);
                  }}
                >
                  LaTeX Template
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
