import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
  clearInterval(intervalRef.current);

  if (!isPaused) {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev =>
        prev < testimonials.length - 1 ? prev + 1 : 0
      );
    }, 4000);
  }

  return () => clearInterval(intervalRef.current);
}, [isPaused]);

  // Manual navigation functions
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0',
      overflow: 'hidden',
      background: '#0a0a0a'
    }} id='testimonials'>
      {/* Content */}
      <div style={{ 
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{ padding: '0 5%', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: '0.5rem',
            letterSpacing: 'clamp(3px, 1vw, 6px)',
            color: '#d4af37'
          }}>
            WHAT CLIENTS SAY
          </h2>
          <div style={{
            width: 'clamp(60px, 10vw, 80px)',
            height: '2px',
            background: '#d4af37',
            margin: '1.5rem auto'
          }} />
        </div>

        {/* Slider Container */}
        <div 
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 5%'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseOver={()=>setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="nav-arrow-testimonial nav-left"
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(212, 175, 55, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={26} color="#0a0a0a" strokeWidth={2.5} />
          </button>

          <button
            onClick={handleNext}
            className="nav-arrow-testimonial nav-right"
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(212, 175, 55, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={26} color="#0a0a0a" strokeWidth={2.5} />
          </button>

          {/* Testimonial Card */}
          <div style={{
            padding: '0 clamp(5px, 6vw, 70px)'
          }}>
            <div 
              className="testimonial-card"
              style={{
                position: 'relative',
                height: 'clamp(600px, 50vw, 450px)',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.5s ease'
              }}
            >
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${testimonials[currentIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.4)',
                transition: 'all 0.5s ease'
              }} className="card-bg" />

              {/* Dark Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.85) 20%, rgba(10, 10, 10, 0.3) 100%)',
                zIndex: 1
              }} />

              {/* Content - Positioned at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                padding: 'clamp(2rem, 4vw, 3rem)',
                paddingTop: 'clamp(2.5rem, 5vw, 4rem)'
              }}>
                {/* Quote Icon */}
                <div style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  color: '#d4af37',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: 'clamp(0.8rem, 2vw, 1rem)',
                  fontFamily: 'Georgia, serif'
                }}>
                  "
                </div>

                {/* Review Text */}
                <p style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                  lineHeight: '1.7',
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#f5f5f5',
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                  fontStyle: 'italic',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                  {testimonials[currentIndex].text}
                </p>

                {/* Star Rating */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(0.3rem, 0.8vw, 0.4rem)',
                  marginBottom: 'clamp(1.2rem, 2.5vw, 1.5rem)'
                }}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} style={{ 
                      color: '#d4af37', 
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                      textShadow: '0 0 10px rgba(212, 175, 55, 0.6)'
                    }}>★</span>
                  ))}
                </div>

                {/* Client Info */}
                <div>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                    fontWeight: 600,
                    color: '#d4af37',
                    marginBottom: 'clamp(0.3rem, 0.8vw, 0.4rem)',
                    letterSpacing: 'clamp(1px, 0.3vw, 1.5px)',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}>
                    {testimonials[currentIndex].name}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
                    fontFamily: "'Montserrat', sans-serif",
                    color: 'rgba(245, 245, 245, 0.8)',
                    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                  }}>
                    {testimonials[currentIndex].event}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(0.6rem, 1.2vw, 0.9rem)',
          marginTop: 'clamp(2rem, 4vw, 3rem)'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? 'clamp(30px, 5vw, 38px)' : 'clamp(8px, 1.5vw, 10px)',
                height: 'clamp(8px, 1.5vw, 10px)',
                borderRadius: 'clamp(4px, 0.8vw, 5px)',
                border: 'none',
                background: currentIndex === index ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
                boxShadow: currentIndex === index ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.3)';
                }
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <p style={{
          textAlign: 'center',
          marginTop: 'clamp(1rem, 2vw, 1.5rem)',
          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
          color: 'rgba(212, 175, 55, 0.7)',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: 'clamp(0.8px, 0.2vw, 1.5px)'
        }}>
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>

      {/* CSS */}
      <style>{`
        .testimonial-card:hover .card-bg {
          transform: scale(1.05);
          filter: brightness(0.5);
        }

        /* Desktop - arrows outside */
        @media (min-width: 1000px) {
          .nav-left {
            left: -60px !important;
          }
          .nav-right {
            right: -60px !important;
          }
          .testimonial-card{
          height:450px !important;
          }
        }

        /* Medium screens - arrows closer */
        @media (max-width: 999px) and (min-width: 769px) {
          .nav-left {
            left: 10px !important;
          }
          .nav-right {
            right: 10px !important;
          }
        }

        /* Mobile - smaller buttons */
        @media (max-width: 768px) {
          .nav-arrow-testimonial {
            width: 40px !important;
            height: 40px !important;
          }

          .nav-arrow-testimonial svg {
            width: 22px !important;
            height: 22px !important;
          }

          .nav-left {
            left: 10px !important;
          }

          .nav-right {
            right: 10px !important;
          }
        }

        @media (max-width: 480px) {
          .nav-arrow-testimonial {
            width: 36px !important;
            height: 36px !important;
          }

          .nav-arrow-testimonial svg {
            width: 20px !important;
            height: 20px !important;
          }

          .nav-left {
            left: 5px !important;
          }

          .nav-right {
            right: 5px !important;
          }
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          .nav-arrow-testimonial:active {
            transform: translateY(-50%) scale(0.92) !important;
          }
        }
      `}</style>
    </section>
  );
}