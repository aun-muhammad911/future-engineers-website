import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../data/opportunities';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';

export const CoursesCertifications = ({ onSelectOpportunity }) => {
  const [search, setSearch] = useState('');
  const [disciplineFilter, setDisciplineFilter] = useState('All');
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();

  const disciplines = ['All', 'Civil', 'Mechanical', 'Electrical', 'Multi-disciplinary'];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.provider.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor?.toLowerCase().includes(search.toLowerCase());

      const matchDiscipline =
        disciplineFilter === 'All' || course.discipline.includes(disciplineFilter);

      return matchSearch && matchDiscipline;
    });
  }, [search, disciplineFilter]);

  return (
    <div className="section" style={{ minHeight: '80vh', background: 'var(--bg-app)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Skill Development</h2>
          <div>
            <span>Courses &amp; </span>
            <span className="description-title">Certifications</span>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '15px' }}>
            High-demand technical and management certifications designed to bridge the gap between engineering academia and industry requirements.
          </p>
        </div>

        {/* Filters */}
        <div className="search-filter-box" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
              SEARCH COURSES
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Search by course name, software (AutoCAD, Python, PLC, PMP)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
              DISCIPLINE
            </label>
            <select
              className="form-control-custom"
              value={disciplineFilter}
              onChange={(e) => setDisciplineFilter(e.target.value)}
            >
              {disciplines.map((d) => (
                <option key={d} value={d}>
                  {d === 'All' ? 'All Disciplines' : `${d} Engineering`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {filteredCourses.map((course) => {
            const saved = isSaved(course.id);
            return (
              <div
                key={course.id}
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 600
                    }}
                  >
                    {course.duration}
                  </span>
                </div>

                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                    <span className="post-category" style={{ fontSize: '11px' }}>
                      {course.discipline}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '8px' }}>
                      {course.fee}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
                    <a
                      href="#view"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectOpportunity(course);
                      }}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {course.title}
                    </a>
                  </h3>

                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <i className="bi bi-person-badge"></i> {course.instructor}
                  </div>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {course.description}
                  </p>

                  <div style={{ background: 'var(--bg-subtle)', padding: '12px', borderRadius: '10px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                      Key Modules:
                    </span>
                    <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      {course.syllabus.slice(0, 3).map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '8px 16px', fontSize: '13.5px' }}
                      onClick={() => onSelectOpportunity(course)}
                    >
                      Enroll / Syllabus
                    </button>
                    <button
                      className="btn"
                      style={{
                        background: saved ? '#fee2e2' : 'var(--bg-subtle)',
                        color: saved ? '#dc2626' : 'var(--text-muted)',
                        padding: '8px 14px',
                        fontSize: '14px',
                        borderRadius: '20px'
                      }}
                      onClick={() => {
                        toggleSave(course);
                        addToast(saved ? 'Removed from saved items' : 'Saved course!', saved ? 'info' : 'success');
                      }}
                      title={saved ? 'Remove Bookmark' : 'Save Course'}
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
