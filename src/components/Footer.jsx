import { Camera, Heart, Baby, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
      <footer style={{
        background: '#000',
        padding: '5rem 5% 2rem',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)'
      }} id='contact'>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
                letterSpacing: '3px',
                color: 'var(--gold)'
              }}>
                BHANDAVYA FILMS
              </h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'rgba(245, 245, 245, 0.7)',
                marginBottom: '2rem'
              }}>
                We are passionate storytellers dedicated to capturing life's most precious moments with artistry and emotion. Based in Hubballi, Karnataka, we serve clients across India with cinematic excellence.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="https://www.instagram.com/bhandavyafilms/" style={{
                  color: 'var(--gold)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <FaInstagram size={24} color="#E1306C" />
                </a>
                <a href="https://www.instagram.com/bhandavyafilms/" style={{
                  color: 'var(--gold)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <FaFacebook size={24} color="#1877F2"/>
                </a>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
                letterSpacing: '2px',
                color: 'var(--gold)'
              }}>
                CONTACT US
              </h3>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem',
                color: 'rgba(245, 245, 245, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={20} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Dharwad, Karnataka, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span>+91 8904801121</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span>hello@bhandavyafilms.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
                letterSpacing: '2px',
                color: 'var(--gold)'
              }}>
                FIND US
              </h3>
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.3101005294347!2d75.0219176!3d15.467743299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cdb73b91a371%3A0x37913b6ac7cf3bc9!2sU%20-%20FLY!5e0!3m2!1sen!2sin!4v1771013400682!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            paddingTop: '2rem',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(245, 245, 245, 0.5)',
            letterSpacing: '1px'
          }}>
            © 2026 Bhandavya Films. All rights reserved. | Crafted with passion for timeless memories.
          </div>
        </div>
      </footer>
  );
}
