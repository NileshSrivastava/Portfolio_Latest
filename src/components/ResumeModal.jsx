import React, { useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop active"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-window">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3>Resume Preview</h3>
            <span className="modal-sub">{personalInfo.name} — {personalInfo.title}</span>
          </div>
          <div className="modal-actions">
            <button
              onClick={() => window.print()}
              className="btn btn-sm btn-ghost"
              title="Print this resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print</span>
            </button>
            <a
              href={personalInfo.resumePath}
              download="Nilesh_Srivastava_Resume.pdf"
              className="btn btn-sm btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download PDF</span>
            </a>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              &times;
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="modal-body printable-resume" id="printable-resume">
          <div className="resume-sheet-header">
            <div className="resume-sheet-title">
              <h2>Nilesh Srivastava</h2>
              <p className="resume-sheet-role">DevOps Engineer</p>
            </div>
            <div className="resume-sheet-contact">
              <div>Lucknow, Uttar Pradesh</div>
              <div>Phone: +91 7007160452</div>
              <div>Email: nileshsr86@gmail.com</div>
              <div>LinkedIn | GitHub</div>
            </div>
          </div>

          <hr className="resume-hr" />

          {/* Professional Summary */}
          <section className="resume-sheet-section">
            <h4 className="resume-sec-title">PROFESSIONAL SUMMARY</h4>
            <p>
              DevOps Engineer with hands-on experience deploying microservices-based APM platforms using Docker and Docker Compose, alongside local Kubernetes deployments with MicroK8s. Experienced in Linux, NGINX, OpenTelemetry instrumentation, monitoring agents, and troubleshooting telemetry pipelines for Java, .NET, Node.js, and Next.js applications.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="resume-sheet-section">
            <h4 className="resume-sec-title">TECHNICAL SKILLS</h4>
            <p><strong>DevOps:</strong> Linux, Docker, Docker Compose, Kubernetes, MicroK8s, YAML, ConfigMaps, NGINX, systemd, NSSM</p>
            <p><strong>Cloud & CI/CD:</strong> AWS (EC2, VPC, subnets, security groups), Git, GitHub, GitHub Actions, CI/CD fundamentals</p>
            <p><strong>Observability:</strong> CodeXray APM, OpenTelemetry, Prometheus, eBPF, logs, metrics, distributed tracing, Layer 7 tracing</p>
            <p><strong>Technologies:</strong> Java, .NET, Node.js, Next.js, C#, REST APIs, JSON, XML, JBoss, IBM WebSphere</p>
            <p><strong>Other:</strong> ServiceNow ITSM, troubleshooting, synthetic monitoring, functional and regression testing</p>
          </section>

          {/* Professional Experience */}
          <section className="resume-sheet-section">
            <h4 className="resume-sec-title">PROFESSIONAL EXPERIENCE</h4>
            <div className="resume-job">
              <div className="resume-job-header">
                <strong>DevOps Engineer — CodeXray / Codifinary Technologies Private Limited</strong>
                <span>Apr 2026 – Present</span>
              </div>
              <ul>
                <li><strong>Deployment and Networking:</strong> Standardized client-side APM deployment using Docker Compose and NGINX, limiting externally accessible ports to 2 and reducing direct exposure of backend services.</li>
                <li><strong>Instrumentation:</strong> Implemented zero-code instrumentation for Java (JBoss and IBM WebSphere), .NET, Node.js, and Next.js applications, validating telemetry ingestion and dashboard visibility at 1,200 events per minute during client POCs.</li>
                <li><strong>Monitoring Agents:</strong> Supported Node, .NET, Windows, Cluster, and Database Agents across 8 nodes; troubleshot host metrics, container discovery, database telemetry, cluster data, and eBPF-based observability.</li>
                <li><strong>Air-Gapped Deployment:</strong> Packaged and deployed standalone Node and Database Agent binaries on air-gapped Linux VMs, configuring systemd services to run monitoring agents without internet or container-registry access.</li>
                <li><strong>Client POCs and QA:</strong> Orchestrated rigorous validation of telemetry ingestion for Node.js, Java, Python, and Next.js workloads across Karnataka Treasury and Suzuki Digital POCs, achieving 99% data accuracy.</li>
                <li><strong>Knowledge Sharing:</strong> Trained four SRE team members on CodeXray platform workflows and operational procedures.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <strong>Graduate Trainee – L1.5 Technical Support — HCL Technologies (TENET Healthcare Project)</strong>
                <span>Mar 2025 – Feb 2026</span>
              </div>
              <ul>
                <li>Resolved 1,500+ IT support tickets using ServiceNow ITSM, troubleshooting Windows, VPN, printer, driver, password, network-drive, and application connectivity issues.</li>
                <li>Provided remote technical support, documented incident resolutions in ServiceNow, and escalated complex Windows and application issues to the appropriate support teams.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <strong>Software Development Engineer Intern — IT4T Solutions (Mid-Office Operations)</strong>
                <span>Aug 2024 – Nov 2024</span>
              </div>
              <ul>
                <li>Developed reusable C# request and response structures using XML and JSON to support flight API integrations and backend mid-office workflows, improving consistency across API data exchanges.</li>
                <li>Contributed to frontend development and flight API integration using HTML, CSS, and jQuery, leveraging Git/GitHub for version control and collaborative development.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-sheet-section">
            <h4 className="resume-sec-title">PROJECTS</h4>
            <div className="resume-job">
              <div className="resume-job-header">
                <strong>CodeXray APM – Client Deployment | Docker, Docker Compose, NGINX</strong>
              </div>
              <ul>
                <li>Configured Docker Compose networking, service dependencies, and NGINX internal routing for a microservices-based APM platform, keeping backend services internal and limiting external exposure to 2 ports.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <strong>CodeXray APM – Local Kubernetes Deployment | MicroK8s, YAML, Secrets</strong>
              </div>
              <ul>
                <li>Orchestrated individual APM services on MicroK8s using separate Kubernetes manifests and ConfigMaps, configured service dependencies and connectivity, exposed services through NodePort, and managed application secrets using Kubernetes Secrets.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <strong>Web Development Portfolio (React.js) | React, JavaScript, Vite</strong>
              </div>
              <ul>
                <li>Built responsive web pages and React interfaces using useState for state management and useEffect for side effects, improving UI responsiveness and simplifying component-level state handling across multiple interfaces.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-sheet-section">
            <h4 className="resume-sec-title">EDUCATION</h4>
            <div className="resume-job-header">
              <strong>Ambalika Institute of Management and Technology</strong>
              <span>2020 – 2024</span>
            </div>
            <div>B.Tech in Computer Science | Lucknow, Uttar Pradesh</div>
            <br />
            <div className="resume-job-header">
              <strong>St. Dominic Savio College</strong>
              <span>2019 – 2020</span>
            </div>
            <div>Intermediate – ISC | Lucknow, Uttar Pradesh</div>
            <br />
            <div className="resume-job-header">
              <strong>St. Dominic Savio College</strong>
              <span>2017 – 2018</span>
            </div>
            <div>Secondary Education – ICSE | Lucknow, Uttar Pradesh</div>
          </section>
        </div>
      </div>
    </div>
  );
}

