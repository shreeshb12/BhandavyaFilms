import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="grain" />
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.5s ease',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          zIndex: 102
        }}>
          <img 
            src="https://res.cloudinary.com/dcxnayxgx/image/upload/v1770925772/Bhandavya_Films_c_crop_w_700_h_240_jckexm.png"
            alt="Bhandavya Films" 
            style={{
              height: 'clamp(50px, 8vw, 80px)', // Responsive logo size
              width: 'auto',
              filter: 'brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(445%) hue-rotate(7deg) brightness(93%) contrast(87%)',
              transition: 'transform 0.3s ease, filter 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.08)';
              e.target.style.filter = 'brightness(0) saturate(100%) invert(79%) sepia(55%) saturate(445%) hue-rotate(7deg) brightness(100%) contrast(87%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.filter = 'brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(445%) hue-rotate(7deg) brightness(93%) contrast(87%)';
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.9rem',
          fontWeight: 400,
          letterSpacing: '1px'
        }}
        className="desktop-nav"
        >
          {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              style={{
                color: '#f5f5f5',
                textDecoration: 'none',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#d4af37'}
              onMouseLeave={(e) => e.target.style.color = '#f5f5f5'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#d4af37',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 102
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 101,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        opacity: mobileMenuOpen ? 1 : 0,
        transition: 'all 0.4s ease',
        pointerEvents: mobileMenuOpen ? 'auto' : 'none'
      }}
      className="mobile-menu"
      >
        {['Portfolio', 'Services', 'About', 'Contact'].map((item, index) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            onClick={handleLinkClick}
            style={{
              color: '#f5f5f5',
              textDecoration: 'none',
              fontSize: '2rem',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              letterSpacing: '2px',
              transition: 'all 0.3s ease',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#d4af37';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#f5f5f5';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CSS for Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }

        /* Prevent body scroll when mobile menu is open */
        body.mobile-menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}