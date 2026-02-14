import { useState } from 'react';
import {testimonials} from '../data/data'
const duplicatedTestimonials=[...testimonials,...testimonials];
export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  return (
            <section style={{
      position: 'relative',
      padding: '8rem 0',
      overflow: 'hidden',
      background: '#0a0a0a'
    }}>
      {/* Content */}
      <div style={{ 
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{ padding: '0 5%', marginBottom: '5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: '1rem',
            letterSpacing: '6px',
            color: '#d4af37'
          }}>
            WHAT CLIENTS SAY
          </h2>
          <div style={{
            width: '80px',
            height: '2px',
            background: '#d4af37',
            margin: '2rem auto'
          }} />
        </div>

        {/* Horizontal Marquee Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
        onMouseOver={() => setIsPaused(!isPaused)}
        onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling Track */}
          <div 
            className="marquee-track"
            style={{
              display: 'flex',
              gap: '2.5rem',
              width: 'max-content',
              animation: 'scroll-left 50s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{
                  position: 'relative',
                  minWidth: '400px',
                  maxWidth: '400px',
                  minHeight: '500px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Background Image */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.4)',
                  transition: 'transform 0.5s ease, filter 0.3s ease'
                }} className="card-bg" />

                {/* Dark Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(10, 10, 10, 0.5) 100%)',
                  zIndex: 1
                }} />

                {/* Content */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2.5rem'
                }}>
                  {/* Quote Icon */}
                  <div style={{
                    fontSize: '3.5rem',
                    color: '#d4af37',
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: '1rem',
                    fontFamily: 'Georgia, serif'
                  }}>
                    "
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.75',
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#f5f5f5',
                    marginBottom: '2rem',
                    fontStyle: 'italic',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}>
                    {testimonial.text}
                  </p>

                  {/* Star Rating */}
                  <div style={{
                    display: 'flex',
                    gap: '0.4rem',
                    marginBottom: '1.5rem'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ 
                        color: '#d4af37', 
                        fontSize: '1.2rem',
                        textShadow: '0 0 8px rgba(212, 175, 55, 0.6)'
                      }}>★</span>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div>
                    <div style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#d4af37',
                      marginBottom: '0.4rem',
                      letterSpacing: '1.5px',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'rgba(245, 245, 245, 0.8)',
                      letterSpacing: '1px',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    }}>
                      {testimonial.event}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pause on Hover Indicator */}
        <p style={{
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: '0.9rem',
          color: isPaused ? 'rgba(212, 175, 55, 0.8)' : 'rgba(245, 245, 245, 0.4)',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '1px',
          transition: 'color 0.3s ease'
        }}>
          {isPaused ? '⏸ Paused' : 'Hover to pause'}
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.3);
        }

        .testimonial-card:hover .card-bg {
          transform: scale(1.1);
          filter: brightness(0.5);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .testimonial-card {
            min-width: 320px !important;
            max-width: 320px !important;
            min-height: 480px !important;
          }

          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </section>
  );
}
