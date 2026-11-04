import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Hands-on DevOps engineering, microservices APM deployment, enterprise IT support, and software integration.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <div className="timeline-badge-group">
                    <span className="timeline-date">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <p className="timeline-description">{exp.desc}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

