import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RECENTLY_ADDED } from '../data/opportunities';

const TABS = ['All', 'Jobs', 'Internships', 'Scholarships', 'Courses', 'CV Templates'];

export const RecentlyAddedSection = ({ onSelectOpportunity }) => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? RECENTLY_ADDED 
    : RECENTLY_ADDED.filter(item => item.type === activeTab);

  return (
    <section id="latest-posts" className="latest-posts section">
      <div className="container section-title">
        <h2>Recently Added</h2>
        <div>
          <span>Check Our </span>
          <span className="description-title">Recently Added</span>
        </div>
      </div>

      <div className="container">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="recently-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="recent-card">
              <div className="post-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="recent-card-body">
                <span className="post-category">{item.type}</span>
                <h2 className="title">
                  <Link 
                    to={item.link}
                    onClick={(e) => {
                      if (onSelectOpportunity) {
                        e.preventDefault();
                        onSelectOpportunity(item);
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                </h2>
                <div className="recent-meta">
                  <span><i className="bi bi-geo-alt"></i> {item.location}</span>
                  <span><i className="bi bi-building"></i> {item.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
