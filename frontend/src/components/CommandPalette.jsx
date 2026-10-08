import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Sun, 
  Moon, 
  PlusCircle, 
  Bookmark,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LISTINGS_DATA, ALL_DISCIPLINES } from '../data/opportunities';
import { useTheme } from '../context/ThemeContext';

export const CommandPalette = ({ isOpen, onClose, onSelectOpportunity, onOpenPostModal }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return {
        quickActions: [
          { id: 'act-1', title: 'Browse All Jobs & Internships', icon: Briefcase, action: () => navigate('/jobs-internships') },
          { id: 'act-2', title: 'Explore HEC & Study Abroad Scholarships', icon: GraduationCap, action: () => navigate('/scholarships') },
          { id: 'act-3', title: 'Download ATS-Ready Engineering CV Templates', icon: FileText, action: () => navigate('/cv-templates') },
          { id: 'act-4', title: 'Technical Upskilling & Certifications', icon: Award, action: () => navigate('/courses-certifications') },
          { id: 'act-5', title: isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme', icon: isDark ? Sun : Moon, action: toggleTheme },
          { id: 'act-6', title: 'Post an Engineering Job or Notice', icon: PlusCircle, action: onOpenPostModal }
        ],
        opportunities: LISTINGS_DATA.slice(0, 4)
      };
    }

    const q = query.toLowerCase();
    const opportunities = LISTINGS_DATA.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.discipline.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );

    const disciplines = ALL_DISCIPLINES.filter(d => d.toLowerCase().includes(q)).map(d => ({
      id: `disc-${d}`,
      title: `${d} Opportunities`,
      icon: Sparkles,
      action: () => navigate(`/jobs-internships?discipline=${encodeURIComponent(d)}`)
    }));

    return {
      quickActions: disciplines,
      opportunities
    };
  }, [query, navigate, toggleTheme, isDark, onOpenPostModal]);

  if (!isOpen) return null;

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div className="cmd-palette-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="cmd-input-bar">
          <Search size={20} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Type a command, company, or engineering discipline..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <kbd className="kbd-shortcut">ESC</kbd>
        </div>

        {/* Results List */}
        <div className="cmd-results-list">
          {/* Quick Actions / Disciplines */}
          {filteredItems.quickActions.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-faint)', padding: '6px 14px' }}>
                Navigation &amp; Actions
              </div>
              {filteredItems.quickActions.map((act) => {
                const IconComponent = act.icon;
                return (
                  <div
                    key={act.id}
                    className="cmd-result-item"
                    onClick={() => {
                      onClose();
                      act.action();
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <IconComponent size={16} style={{ color: 'var(--color-primary-light)' }} />
                      <span>{act.title}</span>
                    </div>
                    <ArrowRight size={14} style={{ color: 'var(--text-faint)' }} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Opportunities */}
          {filteredItems.opportunities.length > 0 && (
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-faint)', padding: '6px 14px' }}>
                Matching Opportunities
              </div>
              {filteredItems.opportunities.map((item) => (
                <div
                  key={item.id}
                  className="cmd-result-item"
                  onClick={() => {
                    onClose();
                    onSelectOpportunity(item);
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '18px' }}>{item.companyLogo}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {item.company} • {item.location}
                      </div>
                    </div>
                  </div>
                  <span className={`badge-type ${item.categoryType}`}>
                    {item.categoryType}
                  </span>
                </div>
              ))}
            </div>
          )}

          {filteredItems.quickActions.length === 0 && filteredItems.opportunities.length === 0 && (
            <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
              No results found for "{query}". Try searching for Mechanical, DAAD, Systems Ltd, or CV templates.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
