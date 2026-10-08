import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_CATEGORIES, POPULAR_RESOURCES } from '../data/opportunities';

export const CategorySection = ({ onSelectOpportunity }) => {
  return (
    <section id="category-section" className="category-section section">
      <div className="container section-title">
        <h2>Explore by Category</h2>
        <div>
          <span>Find What You </span>
          <span className="description-title">Need</span>
        </div>
      </div>

      <div className="container">
        {/* Featured Categories (3 Large Cards) */}
        <div className="featured-categories-grid">
          {FEATURED_CATEGORIES.map((cat) => (
            <article key={cat.id} className="featured-post">
              <div className="post-img">
                <img src={cat.image} alt={cat.title} loading="lazy" />
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">{cat.category}</span>
                </div>
                <h2 className="title">
                  <Link to={cat.link}>{cat.title}</Link>
                </h2>
              </div>
            </article>
          ))}
        </div>

        {/* Popular Resources (6 Horizontal List Cards) */}
        <div className="popular-resources-grid">
          {POPULAR_RESOURCES.map((item) => (
            <article key={item.id} className="list-post">
              <div className="post-img">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">{item.category}</span>
                </div>
                <h3 className="title">
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
                </h3>
                <div className="post-meta">
                  <span className="read-time">{item.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
