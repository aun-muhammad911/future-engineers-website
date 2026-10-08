import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSaved } from '../context/SavedContext';
import {
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Info,
  Bookmark,
  Sun,
  Moon,
  Search,
  PlusCircle,
  Menu,
  X,
  Compass,
  Phone,
  ChevronDown
} from 'lucide-react';

const NAV_ITEMS = [
  {
    to: '/jobs-internships',
    icon: <Briefcase size={15} />,
    label: 'Jobs & Internships',
    badge: { text: 'HOT', className: 'nav-badge-hot' },
  },
  {
    to: '/scholarships',
    icon: <GraduationCap size={15} />,
    label: 'Scholarships',
    badge: { text: 'HEC/Global', className: 'nav-badge-hec' },
  },
  {
    to: '/courses-certifications',
    icon: <Award size={15} />,
    label: 'Courses',
    badge: null,
  },
  {
    to: '/cv-templates',
    icon: <FileText size={15} />,
    label: 'CV Templates',
    badge: null,
  },
  {
    to: '/about',
    icon: <Info size={15} />,
    label: 'About',
    badge: null,
  },
];

export const Navbar = ({ onOpenCmd, onOpenPostModal }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { savedItems } = useSaved();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const location = useLocation();

  /* Close drawer on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Prevent body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="navbar-sticky"
        style={{ boxShadow: scrolled ? '0 2px 20px rgba(15,23,42,0.08)' : 'none' }}
      >
        <div className="container">
          <div className="nav-container">

            {/* ── Brand Logo ─────────────────────────────── */}
            <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
              <div className="logo-icon">
                <Compass size={20} strokeWidth={2.2} />
              </div>
              <div className="brand-name-block">
                <div className="brand-title">
                  FutureEngineers<span>.pk</span>
                </div>
                <div className="brand-subtitle">Pakistan's Engineering Hub 🇵🇰</div>
              </div>
            </Link>

            {/* ── Desktop Nav Links ──────────────────────── */}
            <nav style={{ display: 'flex', alignItems: 'center' }}>
              <ul className="nav-links d-none d-lg-flex" style={{ margin: 0 }}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.to} style={{ listStyle: 'none' }}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className={item.badge.className}>{item.badge.text}</span>
                      )}
                    </NavLink>
                  </li>
                ))}
                <li style={{ listStyle: 'none' }}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  >
                    <Phone size={15} />
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* ── Right Action Group ─────────────────────── */}
            <div className="nav-actions">

              {/* Search / Command Palette Trigger */}
              <button
                className="cmd-trigger d-none d-lg-flex"
                onClick={onOpenCmd}
                title="Search (Ctrl+K)"
                aria-label="Open search"
              >
                <Search size={14} style={{ color: 'var(--color-primary)' }} />
                <span>Search...</span>
                <kbd className="kbd-shortcut">⌘K</kbd>
              </button>

              {/* Mobile Search Icon */}
              <button
                className="icon-btn d-lg-none"
                onClick={onOpenCmd}
                title="Search"
                aria-label="Search"
              >
                <Search size={17} />
              </button>

              {/* Post Opportunity */}
              <button
                className="nav-post-btn d-none d-xl-inline-flex"
                onClick={onOpenPostModal}
                aria-label="Post an Opportunity"
              >
                <PlusCircle size={15} />
                <span>Post Opportunity</span>
              </button>

              {/* Bookmarks */}
              <Link
                to="/saved"
                className="icon-btn"
                title={`Saved (${savedItems.length})`}
                aria-label="Saved opportunities"
              >
                <Bookmark size={17} />
                {savedItems.length > 0 && (
                  <span className="saved-pill-badge">{savedItems.length}</span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={isDark ? 'Light Mode' : 'Dark Mode'}
                aria-label="Toggle theme"
              >
                {isDark
                  ? <Sun size={17} style={{ color: '#f59e0b' }} />
                  : <Moon size={17} style={{ color: '#6366f1' }} />
                }
              </button>

              {/* Mobile Hamburger */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Top Accent Bar ───────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 40%, #10b981 80%, #2563eb 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      </header>

      {/* ── Mobile Drawer ─────────────────────────────── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', inset: 0, top: 'var(--nav-h)',
              background: 'rgba(15,23,42,0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 198,
            }}
          />

          {/* Drawer Panel */}
          <div className="mobile-drawer" style={{ zIndex: 199 }}>

            {/* Search in drawer */}
            <button
              className="cmd-trigger"
              style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '16px', padding: '12px 16px' }}
              onClick={() => { setMobileOpen(false); onOpenCmd(); }}
            >
              <Search size={17} style={{ color: 'var(--color-primary)' }} />
              <span style={{ flex: 1 }}>Search opportunities...</span>
              <kbd className="kbd-shortcut">⌘K</kbd>
            </button>

            <div className="mobile-drawer-links">
              <NavLink
                to="/"
                className={({ isActive }) => `mobile-drawer-link${isActive ? ' active' : ''}`}
                end
              >
                <Compass size={18} /> Home
              </NavLink>

              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-drawer-link${isActive ? ' active' : ''}`}
                >
                  {React.cloneElement(item.icon, { size: 18 })}
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span className={item.badge.className}>{item.badge.text}</span>
                  )}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                className={({ isActive }) => `mobile-drawer-link${isActive ? ' active' : ''}`}
              >
                <Phone size={18} /> Contact & Support
              </NavLink>

              <NavLink
                to="/saved"
                className={({ isActive }) => `mobile-drawer-link${isActive ? ' active' : ''}`}
              >
                <Bookmark size={18} />
                <span style={{ flex: 1 }}>Saved Opportunities</span>
                {savedItems.length > 0 && (
                  <span
                    style={{
                      background: 'var(--color-primary)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    {savedItems.length}
                  </span>
                )}
              </NavLink>
            </div>

            <hr className="mobile-divider" />

            {/* Theme Toggle in drawer */}
            <button
              className="mobile-drawer-link"
              style={{ width: '100%' }}
              onClick={toggleTheme}
            >
              {isDark
                ? <><Sun size={18} style={{ color: '#f59e0b' }} /> Switch to Light Mode</>
                : <><Moon size={18} style={{ color: '#6366f1' }} /> Switch to Dark Mode</>
              }
            </button>

            <hr className="mobile-divider" />

            {/* Post CTA */}
            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '15px', borderRadius: '14px', marginTop: '4px' }}
              onClick={() => { setMobileOpen(false); onOpenPostModal(); }}
            >
              <PlusCircle size={18} />
              Post an Opportunity
            </button>

            {/* Footer tagline */}
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-faint)', marginTop: '24px' }}>
              🇵🇰 Empowering Pakistan's Engineering Talent
            </p>
          </div>
        </>
      )}
    </>
  );
};
