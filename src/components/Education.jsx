import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Academic degrees, computer science foundations, and schooling credentials in Lucknow, Uttar Pradesh.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="edu-card-body">
                <div className="edu-period">{edu.period}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-major">{edu.major}</h4>
                <p className="edu-institution">{edu.institution}</p>
                <div className="edu-grade">
                  <span className="grade-pill">{edu.location}</span>
                </div>
                <p className="edu-desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

