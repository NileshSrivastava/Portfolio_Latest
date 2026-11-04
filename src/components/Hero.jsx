import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Custom Typewriter Effect using React Hooks
  const [displayText, setDisplayText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = personalInfo.roles;
    const currentWord = words[wordIdx];

    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      } else {
        setDisplayText(currentWord.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }

      if (!isDeleting && charIdx === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setWordIdx((wordIdx + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Hero Text Column */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-pulse"></span>
            <span>Available for DevOps & Engineering Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <span className="static-prefix">I am a </span>
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">{personalInfo.bio}</p>

          {/* Hero Action Buttons */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Direct Download Action */}
            <a href={personalInfo.resumePath} download="Nilesh_Srivastava_Resume.pdf" className="btn btn-outline" title="Download Nilesh's Resume">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>

            {/* Interactive Preview Modal Trigger */}
            <button onClick={onOpenResume} className="btn btn-ghost" title="Quick Preview Resume in modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Quick Preview</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href={personalInfo.socials.email} className="social-icon" aria-label="Email Nilesh Srivastava">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href={personalInfo.socials.phone} className="social-icon" aria-label="Call Nilesh Srivastava">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Image Column with Real Photo */}
        <div className="hero-image-wrapper">
          <div className="image-card-container">
            <div className="image-glow-ring"></div>
            <div className="profile-image-box">
              <img
                src={personalInfo.profileImg}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className="profile-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon">☸️</div>
              <div className="badge-info">
                <span className="badge-title">DevOps & K8s</span>
                <span className="badge-sub">APM & Microservices</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon">📊</div>
              <div className="badge-info">
                <span className="badge-title">OpenTelemetry</span>
                <span className="badge-sub">eBPF & Metrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

