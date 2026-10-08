import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  User, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { UPSKILL_TRACKS } from '../data/opportunities';
import { useToast } from '../context/ToastContext';

export const CourseRoadmap = ({ onSelectOpportunity }) => {
  const [expandedTrack, setExpandedTrack] = useState(null);
  const { addToast } = useToast();

  const toggleExpand = (id) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  const handleEnroll = (track) => {
    addToast(`Enrolled in free audit track for "${track.title}"! Check your email for syllabus access.`, 'success');
  };

  return (
    <section className="section" id="course-roadmap" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Industrial Upskilling Tracks</span>
          </div>
          <h2 className="section-title">Bridging Academia with Industry 4.0</h2>
          <p className="section-subtitle">
            Curated technical skills requested by Pakistan's top EPC contractors, power utilities, and tech consultancies.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {UPSKILL_TRACKS.map((track) => {
            const isExpanded = expandedTrack === track.id;
            return (
              <div
                key={track.id}
                className="bento-card"
                style={{ padding: '24px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px' }}>{track.icon}</span>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-emerald)', background: 'var(--color-emerald-bg)', padding: '3px 10px', borderRadius: '9999px' }}>
                    {track.freeStatus}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {track.title}
                </h3>

                <div style={{ display: 'flex', gap: '14px', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {track.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Layers size={13} /> {track.modulesCount}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Core Tool Stack:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {track.skills.map((skill) => (
                      <span key={skill} className="opportunity-tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={13} /> {track.instructor}
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '9px 14px', fontSize: '13px' }}
                    onClick={() => handleEnroll(track)}
                  >
                    <span>Free Audit</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
