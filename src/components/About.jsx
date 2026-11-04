import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Professional Profile</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Dedicated DevOps engineer bridging container orchestration, telemetry observability, and cloud infrastructure.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Story & Info */}
          <div className="about-story-col">
            <h3 className="about-heading">
              Deploying scalable platforms, resilient telemetry pipelines, and secure microservices
            </h3>
            {personalInfo.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">{paragraph}</p>
            ))}

            {/* Quick Details Matrix */}
            <div className="about-details-matrix">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-val">{personalInfo.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Role:</span>
                <span className="detail-val">{personalInfo.title}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-val">{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-val">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-val">
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-val text-success">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Resume Action in About */}
            <div className="about-actions">
              <a
                href={personalInfo.resumePath}
                download="Nilesh_Srivastava_Resume.pdf"
                className="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Full Resume (PDF)</span>
              </a>
              <button onClick={onOpenResume} className="btn btn-outline" id="about-resume-preview-btn">
                <span>View Resume Online</span>
              </button>
            </div>
          </div>

          {/* Right: Core Value & Stat Cards */}
          <div className="about-stats-col">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

