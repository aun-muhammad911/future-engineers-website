import React from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Bookmark, Home, Search, PlusCircle } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export const BottomNav = ({ onOpenCmd, onOpenPostModal }) => {
  const { savedItems } = useSaved();

  return (
    <nav className="mobile-bottom-nav d-lg-none" aria-label="Mobile Navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-nav-icon">
          <Home size={20} />
        </div>
        <span className="bottom-nav-label">Home</span>
      </NavLink>

      <NavLink
        to="/jobs-internships"
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-nav-icon">
          <Briefcase size={20} />
          <span className="bottom-nav-dot" />
        </div>
        <span className="bottom-nav-label">Jobs</span>
      </NavLink>

      <button
        type="button"
        className="bottom-nav-item bottom-nav-search-btn"
        onClick={onOpenCmd}
        aria-label="Search"
      >
        <div className="bottom-nav-search-circle">
          <Search size={18} />
        </div>
        <span className="bottom-nav-label">Search</span>
      </button>

      <NavLink
        to="/scholarships"
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-nav-icon">
          <GraduationCap size={20} />
        </div>
        <span className="bottom-nav-label">Grants</span>
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-nav-icon">
          <Bookmark size={20} />
          {savedItems.length > 0 && (
            <span className="bottom-nav-badge">{savedItems.length}</span>
          )}
        </div>
        <span className="bottom-nav-label">Saved</span>
      </NavLink>
    </nav>
  );
};
