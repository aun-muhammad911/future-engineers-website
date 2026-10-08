import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSaved } from '../context/SavedContext';

export const Header = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedItems } = useSaved();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="header" className="header">
      <div className="container position-relative">
        <div className="top-row">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <h1 className="sitename">FutureEngineers</h1>
            <span>.pk</span>
          </Link>

          <div className="header-actions">
            <button 
              className="search-trigger-btn"
              onClick={onOpenSearch}
              title="Search opportunities"
              aria-label="Search"
            >
              <i className="bi bi-search"></i>
              <span className="d-none d-sm-inline">Search opportunities...</span>
            </button>

            <Link 
              to="/saved" 
              className="saved-btn-badge"
              title="View Bookmarked Opportunities"
              aria-label="Bookmarks"
              onClick={closeMobileMenu}
            >
              <i className="bi bi-bookmark-heart"></i>
              {savedItems.length > 0 && (
                <span className="badge-count">{savedItems.length}</span>
              )}
            </Link>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter" aria-label="Twitter / X">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container position-relative">
          <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" end onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs-internships" onClick={closeMobileMenu}>
                  Jobs &amp; Internships
                </NavLink>
              </li>
              <li>
                <NavLink to="/scholarships" onClick={closeMobileMenu}>
                  Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses-certifications" onClick={closeMobileMenu}>
                  Courses &amp; Certifications
                </NavLink>
              </li>
              <li>
                <NavLink to="/cv-templates" onClick={closeMobileMenu}>
                  CV Templates
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <i 
              className={`mobile-nav-toggle bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
};
