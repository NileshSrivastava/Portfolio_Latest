import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#hero" className="nav-logo">
            <span className="logo-text">{personalInfo.name}</span>
            <span className="logo-dot"></span>
          </a>
          <p className="footer-tagline">
            DevOps Engineer • Microservices APM • Kubernetes • Observability
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href={personalInfo.resumePath} download="Nilesh_Srivastava_Resume.pdf">Resume PDF</a>
        </div>

        <div className="footer-right">
          <p className="copyright">
            &copy; {currentYear} {personalInfo.name}. Lucknow, India. Built with React.js.
          </p>
        </div>
      </div>
    </footer>
  );
}

