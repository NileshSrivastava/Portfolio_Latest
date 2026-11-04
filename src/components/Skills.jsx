import React, { useState } from 'react';
import { skillsData, softSkills } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'devops', label: 'DevOps & Linux' },
    { id: 'observability', label: 'Observability & APM' },
    { id: 'cloud', label: 'Cloud & CI/CD' },
    { id: 'dev', label: 'Development & APIs' }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'docker':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14h16a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-1a2 2 0 0 1 2-2z"></path><rect x="4" y="9" width="3" height="3"></rect><rect x="9" y="9" width="3" height="3"></rect><rect x="14" y="9" width="3" height="3"></rect><rect x="9" y="4" width="3" height="3"></rect></svg>;
      case 'k8s':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>;
      case 'linux':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
      case 'nginx':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>;
      case 'otel':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
      case 'prometheus':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>;
      case 'aws':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>;
      case 'git':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="6" y1="9" x2="6" y2="15"></line><path d="M18 15v-1a5 5 0 0 0-5-5H6"></path></svg>;
      case 'yaml':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>;
      case 'nodejs':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
      case 'java':
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>;
      case 'servicenow':
      default:
        return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
    }
  };

  const getIconClass = (iconType) => {
    switch (iconType) {
      case 'docker': return 'docker-icon';
      case 'k8s': return 'react-icon';
      case 'linux': return 'py-icon';
      case 'nginx': return 'node-icon';
      case 'otel': return 'db-icon';
      case 'prometheus': return 'test-icon';
      case 'aws': return 'css-icon';
      case 'git': return 'git-icon';
      case 'yaml': return 'mongo-icon';
      case 'nodejs': return 'js-icon';
      case 'java': return 'html-icon';
      case 'servicenow':
      default: return 'ts-icon';
    }
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            DevOps orchestration, cloud infrastructure, observability pipelines, and web engineering tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-nav" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`filter-tab ${activeTab === tab.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-card-top">
                <div className={`skill-icon-wrap ${getIconClass(skill.icon)}`}>
                  {getIcon(skill.icon)}
                </div>
                <div className="skill-meta">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
              </div>
              <div className="skill-bar-container">
                <div
                  className="skill-progress-bar"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="skill-percentage">{skill.percentage}%</div>
            </div>
          ))}
        </div>

        {/* Soft Skills Badges */}
        <div className="soft-skills-container">
          <h4 className="soft-skills-title">Operational Strengths & Methodologies</h4>
          <div className="soft-skills-tags">
            {softSkills.map((badge, idx) => (
              <span key={idx} className="soft-tag">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

