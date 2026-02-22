import { useState } from 'react';
import { categories } from '../data/data';
import { ArrowUpRight, Images } from 'lucide-react';
import Gallery from './Gallery';

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <section 
        style={{
          padding: '6rem 0',
          background: '#000',
          minHeight: '100vh'
        }} 
        id='services'
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4%' }}>
          {/* Header */}
          <div style={{ 
            marginBottom: '5rem',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.6rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px',
              marginBottom: '2rem'
            }}>
              <span style={{
                fontSize: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(255, 255, 255, 0.6)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 500
              }}>
                What We Offer
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 300,
              color: '#fff',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-1px'
            }}>
              Our Services
            </h2>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: "'Montserrat', sans-serif",
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              From intimate pre-wedding moments to grand celebrations,<br/>
              we craft visual stories that last forever
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2rem',
            marginTop: '4rem'
          }}>
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isHovered = hoveredId === category.id;
              
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setHoveredId(category.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    position: 'relative',
                    height: '600px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: '0',
                    background: '#0a0a0a',
                    animation: `fadeInScale 0.6s ease ${index * 0.1}s both`
                  }}
                  className="service-card"
                >
                  {/* Image Container */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }} />
                    
                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                      transition: 'opacity 0.6s ease',
                      opacity: isHovered ? 0.9 : 0.7
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.2rem',
                    zIndex: 2
                  }}>
                    {/* Top Section - Icon & Number */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50%',
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.1) rotate(10deg)' : 'scale(1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        <Icon size={28} color="#fff" strokeWidth={1.5} />
                      </div>

                      <div style={{
                        fontSize: '1rem',
                        fontFamily: "'Montserrat', sans-serif",
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 300,
                        letterSpacing: '1px'
                      }}>
                        0{index + 1}
                      </div>
                    </div>

                    {/* Bottom Section - Title & Description */}
                    <div>
                      <h3 style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#fff',
                        marginBottom: '1rem',
                        letterSpacing: '-0.5px',
                        lineHeight: 1.1,
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                      }}>
                        {category.title}
                      </h3>

                      <p style={{
                        fontSize: '1.05rem',
                        fontFamily: "'Montserrat', sans-serif",
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        marginBottom: '1rem',
                        maxWidth: '400px',
                        fontWeight: 300,
                        transition: 'all 0.5s ease',
                        opacity: isHovered ? 1 : 0.8
                      }}>
                        {category.description}
                      </p>

                      {/* CTA Button */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 0',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.4s ease',
                        transform: isHovered ? 'translateX(10px)' : 'translateX(0)'
                      }}>
                        <span style={{
                          fontSize: '0.95rem',
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#fff',
                          fontWeight: 400,
                          letterSpacing: '0.5px'
                        }}>
                          Explore Gallery
                        </span>
                        <ArrowUpRight 
                          size={20} 
                          color="#fff"
                          style={{
                            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: isHovered ? 'translate(5px, -5px)' : 'translate(0, 0)'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    pointerEvents: 'none',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 3
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Show Gallery Modal */}
      {showGallery && selectedCategory && (
        <Gallery
          category={selectedCategory}
          photos={selectedCategory.photos}
          onClose={closeGallery}
        />
      )}

      {/* CSS */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .service-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          #services > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .service-card {
            height: 500px !important;
          }
        }

        @media (max-width: 480px) {
          .service-card {
            height: 450px !important;
          }
        }
      `}</style>
    </>
  );
}