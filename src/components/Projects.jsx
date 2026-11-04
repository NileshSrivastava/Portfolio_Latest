import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Deployments</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Real-world deployments covering container networking, local Kubernetes orchestration, and responsive web UI.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`project-banner ${project.bannerClass}`}>
                <div className="project-preview-mockup">
                  <div className="mockup-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="mockup-url">{project.url}</span>
                  </div>
                  <div className="mockup-body">
                    {project.id === 1 && <div className="mockup-chart"></div>}
                    {project.id === 2 && <div className="mockup-store-items"></div>}
                    {project.id === 3 && <div className="mockup-feed-posts"></div>}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-cat">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech-stack">
                  {project.stack.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#experience" className="project-btn project-btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 14 14"></polyline>
                    </svg>
                    <span>View In Experience</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

