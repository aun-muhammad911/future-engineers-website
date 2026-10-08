import React, { useState } from 'react';
import { CV_TEMPLATES_DATA } from '../data/opportunities';
import { useToast } from '../context/ToastContext';

export const CvTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const { addToast } = useToast();

  const handleDownload = (tpl) => {
    addToast(`Downloading "${tpl.title}" (.DOCX & .PDF package)...`, 'success');
  };

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Career Tools</h2>
          <div>
            <span>Free Engineering </span>
            <span className="description-title">CV &amp; Resume Templates</span>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '15px' }}>
            Professionally designed, ATS-compliant curriculum vitae templates tailored specifically for Pakistani engineering graduates and internships.
          </p>
        </div>

        {/* Templates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          {CV_TEMPLATES_DATA.map((tpl) => (
            <div
              key={tpl.id}
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
              <div style={{ height: '260px', overflow: 'hidden', background: 'var(--bg-subtle)', position: 'relative' }}>
                <img src={tpl.previewImg} alt={tpl.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255, 255, 255, 0.92)', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="bi bi-star-fill"></i> {tpl.rating} ({tpl.downloads})
                </div>
              </div>

              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="post-category" style={{ fontSize: '11px', alignSelf: 'flex-start', marginBottom: '8px' }}>
                  {tpl.discipline}
                </span>

                <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', color: 'var(--text-primary)' }}>
                  {tpl.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
                  {tpl.description}
                </p>

                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="bi bi-file-earmark-code"></i> Formats: <strong>{tpl.format}</strong>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '10px 16px', fontSize: '13.5px' }}
                    onClick={() => handleDownload(tpl)}
                  >
                    <i className="bi bi-download" style={{ marginRight: '6px' }}></i> Download Free
                  </button>
                  <button
                    className="btn"
                    style={{ padding: '10px 16px', fontSize: '13.5px' }}
                    onClick={() => setSelectedTemplate(tpl)}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering CV Best Practices Guide Section */}
        <div style={{ background: 'var(--bg-surface)', borderRadius: '20px', padding: '36px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--text-primary)' }}>
            <i className="bi bi-lightbulb" style={{ color: 'var(--color-primary)', marginRight: '8px' }}></i>
            Essential Tips for Pakistani Engineering Resumes
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>1. Include PEC Registration</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                Always list your PEC (Pakistan Engineering Council) student or graduate registration number at the very top of your CV.
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>2. Highlight Final Year Project (FYP)</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                Detail your FYP objective, software tools used (MATLAB, SolidWorks, Revit, Arduino), and quantifiable results.
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>3. Quantify Internship Impact</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                Instead of just listing tasks, state outcomes: "Reduced pump inspection cycle time by 15% during 6-week plant internship".
              </p>
            </div>
          </div>
        </div>

        {/* Template Preview Modal */}
        {selectedTemplate && (
          <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedTemplate(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-primary)' }}>{selectedTemplate.title} — Preview</h3>
              <div style={{ maxHeight: '420px', overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
                <img src={selectedTemplate.previewImg} alt={selectedTemplate.title} style={{ width: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => {
                    handleDownload(selectedTemplate);
                    setSelectedTemplate(null);
                  }}
                >
                  <i className="bi bi-download" style={{ marginRight: '6px' }}></i> Download (.DOCX &amp; PDF)
                </button>
                <button className="btn" onClick={() => setSelectedTemplate(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
