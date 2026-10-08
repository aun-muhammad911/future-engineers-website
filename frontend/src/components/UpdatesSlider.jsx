import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { LATEST_SLIDES } from '../data/opportunities';

export const UpdatesSlider = ({ onSelectOpportunity }) => {
  return (
    <section id="featured-posts" className="featured-posts section">
      <div className="container section-title">
        <h2>Latest Updates</h2>
        <div>
          <span>Stay Informed With Our </span>
          <span className="description-title">Latest Updates</span>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{ paddingBottom: '40px' }}
        >
          {LATEST_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="blog-post-item">
                <img src={slide.image} alt={slide.title} />
                <div className="blog-post-content">
                  <div className="post-meta">
                    <span>
                      <i className={`bi ${slide.categoryIcon || 'bi-mortarboard'}`}></i> {slide.category}
                    </span>
                    <span>
                      <i className="bi bi-clock"></i> {slide.tag}
                    </span>
                  </div>
                  <h2>
                    <Link 
                      to={slide.link}
                      onClick={(e) => {
                        if (onSelectOpportunity) {
                          e.preventDefault();
                          onSelectOpportunity(slide);
                        }
                      }}
                    >
                      {slide.title}
                    </Link>
                  </h2>
                  <p>{slide.description}</p>
                  <Link 
                    to={slide.link} 
                    className="read-more"
                    onClick={(e) => {
                      if (onSelectOpportunity) {
                        e.preventDefault();
                        onSelectOpportunity(slide);
                      }
                    }}
                  >
                    View Details <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
