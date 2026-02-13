import React, { useState, useEffect } from 'react';
import { Camera, Heart, Baby, Sparkles, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import videoSrc from '../data/video.mp4';
export default function Hero() {
  return (
    <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.7
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Grey Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(30, 30, 30, 0.7) 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 2rem'
        }}>
          <h1 className="fade-in-up stagger-1" style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            marginBottom: '1.5rem',
            letterSpacing: '8px',
            color: 'var(--light)',
            lineHeight: 1.2
          }}>
            BHANDAVYA FILMS
          </h1>
          <div className="fade-in-up stagger-2" style={{
            width: '120px',
            height: '2px',
            background: 'var(--gold)',
            margin: '2rem auto'
          }} />
          <p className="fade-in-up stagger-3" style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: 300,
            letterSpacing: '4px',
            color: 'var(--light)',
            fontFamily: "'Montserrat', sans-serif",
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Crafting Timeless Stories Through Cinematic Vision
          </p>
          <p className="fade-in-up stagger-4" style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            letterSpacing: '2px',
            color: 'rgba(245, 245, 245, 0.7)',
            fontFamily: "'Montserrat', sans-serif",
            marginTop: '1.5rem',
            fontStyle: 'italic'
          }}>
            Where every frame tells a story, every moment becomes eternal
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="float" style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}>
          <div style={{
            width: '2px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, var(--gold))',
            margin: '0 auto'
          }} />
        </div>
      </section>
  );
}
