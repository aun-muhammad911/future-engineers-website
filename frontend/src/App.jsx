import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SavedProvider } from './context/SavedContext';
import { ToastProvider } from './context/ToastContext';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CommandPalette } from './components/CommandPalette';
import { PostOpportunityModal } from './components/PostOpportunityModal';
import { OpportunityDetailModal } from './components/OpportunityDetailModal';
import { BottomNav } from './components/BottomNav';

// Pages
import { Home } from './pages/Home';
import { JobsInternships } from './pages/JobsInternships';
import { Scholarships } from './pages/Scholarships';
import { CoursesCertifications } from './pages/CoursesCertifications';
import { CvTemplates } from './pages/CvTemplates';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SavedOpportunities } from './pages/SavedOpportunities';

export const App = () => {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const handleSelectOpportunity = (item) => {
    setSelectedOpportunity(item);
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <SavedProvider>
          <BrowserRouter>
            <div className="app-shell">
              {/* Glassmorphic Navbar */}
              <Navbar 
                onOpenCmd={() => setIsCmdOpen(true)} 
                onOpenPostModal={() => setIsPostModalOpen(true)}
              />

              {/* App Page Routes */}
              <Routes>
                <Route path="/" element={<Home onSelectOpportunity={handleSelectOpportunity} />} />
                <Route path="/jobs-internships" element={<JobsInternships onSelectOpportunity={handleSelectOpportunity} />} />
                <Route path="/scholarships" element={<Scholarships onSelectOpportunity={handleSelectOpportunity} />} />
                <Route path="/courses-certifications" element={<CoursesCertifications onSelectOpportunity={handleSelectOpportunity} />} />
                <Route path="/cv-templates" element={<CvTemplates />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/saved" element={<SavedOpportunities onSelectOpportunity={handleSelectOpportunity} />} />
              </Routes>

              {/* Modern Footer */}
              <Footer />

              {/* Mobile App-style Bottom Navigation Bar */}
              <BottomNav
                onOpenCmd={() => setIsCmdOpen(true)}
                onOpenPostModal={() => setIsPostModalOpen(true)}
              />

              {/* Back to top smooth button */}
              <ScrollToTop />

              {/* Universal Command Palette (Ctrl+K) */}
              <CommandPalette
                isOpen={isCmdOpen}
                onClose={() => setIsCmdOpen(false)}
                onSelectOpportunity={handleSelectOpportunity}
                onOpenPostModal={() => {
                  setIsCmdOpen(false);
                  setIsPostModalOpen(true);
                }}
              />

              {/* Employer / University Post Opportunity Modal */}
              <PostOpportunityModal
                isOpen={isPostModalOpen}
                onClose={() => setIsPostModalOpen(false)}
              />

              {/* Full Opportunity Details & 1-Click Application Modal */}
              <OpportunityDetailModal
                item={selectedOpportunity}
                onClose={() => setSelectedOpportunity(null)}
              />
            </div>
          </BrowserRouter>
        </SavedProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
