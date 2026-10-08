import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BentoGrid } from '../components/BentoGrid';
import { ListingsFeed } from '../components/ListingsFeed';
import { ScholarshipsVault } from '../components/ScholarshipsVault';
import { CourseRoadmap } from '../components/CourseRoadmap';
import { CvShowcase } from '../components/CvShowcase';
import { NewsletterCta } from '../components/NewsletterCta';

export const Home = ({ onSelectOpportunity }) => {
  const handleQuickSearch = (filters) => {
    const el = document.getElementById('listings-feed');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. High Impact Hero with Quick Multi-Filter Search & Partner Marquee */}
      <HeroSection onQuickSearch={handleQuickSearch} />

      {/* 2. Core Pillars Bento Grid */}
      <BentoGrid />

      {/* 3. Dynamic Listings Hub (Jobs, Internships, Scholarships, Courses) */}
      <ListingsFeed onSelectOpportunity={onSelectOpportunity} />

      {/* 4. Scholarships Vault */}
      <ScholarshipsVault onSelectOpportunity={onSelectOpportunity} />

      {/* 5. Industrial Upskilling Roadmaps */}
      <CourseRoadmap onSelectOpportunity={onSelectOpportunity} />

      {/* 6. ATS Engineering CV Showcase */}
      <CvShowcase />

      {/* 7. High Contrast Newsletter Subscription Card */}
      <NewsletterCta />
    </main>
  );
};
