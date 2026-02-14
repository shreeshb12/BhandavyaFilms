import {useState} from 'react'
import {categories} from '../data/data'
export default function Services() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <section style={{
        padding: '8rem 5%',
        background: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: '1rem',
            letterSpacing: '6px',
            color: 'var(--gold)'
          }}>
            OUR SERVICES
          </h2>
          <div style={{
            width: '80px',
            height: '2px',
            background: 'var(--gold)',
            margin: '2rem auto 4rem'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginTop: '4rem'
          }}>
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="category-card shine"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  style={{
                    position: 'relative',
                    height: '450px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    background: '#0f0f0f'
                  }}
                >
                  {/* Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                    transform: activeCategory === category.id ? 'scale(1.1)' : 'scale(1)'
                  }} />
                  
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: activeCategory === category.id 
                      ? 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.5) 100%)'
                      : 'linear-gradient(to top, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.3) 100%)',
                    transition: 'background 0.4s ease'
                  }} />

                  {/* Content */}
                  <div style={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2.5rem',
                    zIndex: 1
                  }}>
                    <Icon style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--gold)',
                      marginBottom: '1.5rem',
                      strokeWidth: 1.5
                    }} />
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: 500,
                      marginBottom: '1rem',
                      letterSpacing: '3px',
                      color: 'var(--light)'
                    }}>
                      {category.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      fontFamily: "'Montserrat', sans-serif",
                      color: 'rgba(245, 245, 245, 0.8)',
                      letterSpacing: '1px',
                      lineHeight: '1.6'
                    }}>
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
