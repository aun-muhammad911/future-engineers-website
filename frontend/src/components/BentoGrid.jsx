import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';

export const BentoGrid = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Core Ecosystem</span>
          </div>
          <h2 className="section-title">Everything Pakistani Engineers Need to Succeed</h2>
          <p className="section-subtitle">
            Curated, vetted, and tailored to bridge the gap between academia and top-tier industrial employers.
          </p>
        </div>

        <div className="bento-grid">
          {/* Bento Card 1: Jobs & Internships Hub (Span 7) */}
          <Link to="/jobs-internships" className="bento-card bento-col-7">
            <div className="bento-icon-box" style={{ background: 'rgba(37, 99, 235, 0.12)', color: 'var(--color-primary-light)' }}>
              <Briefcase size={24} />
            </div>
            <h3 className="bento-title">Jobs &amp; Paid Summer Internships</h3>
            <p className="bento-desc">
              Direct access to entry-level vacancies, Graduate Trainee Engineer (GTE) programs, site internships, and corporate placements from leading Pakistani and multinational enterprises.
            </p>

            <div className="bento-tags">
              <span className="bento-tag">⚡ GTE Programs</span>
              <span className="bento-tag">🏭 Plant &amp; Site Internships</span>
              <span className="bento-tag">💻 Software &amp; Tech</span>
              <span className="bento-tag">💰 Paid Stipends (PKR 45k-95k)</span>
            </div>

            <div className="bento-footer">
              <span>Explore 350+ Open Roles</span>
              <ArrowUpRight size={18} />
            </div>
          </Link>

          {/* Bento Card 2: Scholarships Vault (Span 5) */}
          <Link to="/scholarships" className="bento-card bento-col-5">
            <div className="bento-icon-box" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--color-purple)' }}>
              <GraduationCap size={24} />
            </div>
            <h3 className="bento-title">Scholarships &amp; Grants Vault</h3>
            <p className="bento-desc">
              Fully funded national and study-abroad engineering fellowships with deadlines, stipend coverage, and eligibility criteria.
            </p>

            <div className="bento-tags">
              <span className="bento-tag">🎓 HEC Need &amp; Merit</span>
              <span className="bento-tag">🇩🇪 DAAD Germany</span>
              <span className="bento-tag">🇺🇸 Fulbright USA</span>
              <span className="bento-tag">🇹🇷 Turkiye Burslari</span>
            </div>

            <div className="bento-footer">
              <span>View Scholarships</span>
              <ArrowUpRight size={18} />
            </div>
          </Link>

          {/* Bento Card 3: Skill Upskilling Tracks (Span 5) */}
          <Link to="/courses-certifications" className="bento-card bento-col-5">
            <div className="bento-icon-box" style={{ background: 'rgba(245, 158, 11, 0.12)', color: 'var(--color-amber)' }}>
              <Award size={24} />
            </div>
            <h3 className="bento-title">Industry Technical Upskilling</h3>
            <p className="bento-desc">
              Bridge academic theory with essential industrial toolkits: AutoCAD, Revit BIM, Python numerical modeling, PMP, and SCADA automation.
            </p>

            <div className="bento-tags">
              <span className="bento-tag">📐 CAD &amp; Revit BIM</span>
              <span className="bento-tag">📊 PMP &amp; Agile</span>
              <span className="bento-tag">⚡ PLC / SCADA</span>
              <span className="bento-tag">📜 Certified Tracks</span>
            </div>

            <div className="bento-footer">
              <span>Browse Course Roadmaps</span>
              <ArrowUpRight size={18} />
            </div>
          </Link>

          {/* Bento Card 4: ATS Engineering CV Templates (Span 7) */}
          <Link to="/cv-templates" className="bento-card bento-col-7">
            <div className="bento-icon-box" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--color-emerald)' }}>
              <FileText size={24} />
            </div>
            <h3 className="bento-title">ATS-Scoring Engineering CV Templates</h3>
            <p className="bento-desc">
              Download professionally structured, single-column Word, LaTeX, and Google Docs resume templates designed specifically to pass automated applicant tracking systems (ATS).
            </p>

            <div className="bento-tags">
              <span className="bento-tag">✅ 98% ATS Pass Rate</span>
              <span className="bento-tag">📑 PEC Registration Layout</span>
              <span className="bento-tag">⚡ Word &amp; LaTeX Formats</span>
              <span className="bento-tag">💯 100% Free Downloads</span>
            </div>

            <div className="bento-footer">
              <span>Get Free CV Templates</span>
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
