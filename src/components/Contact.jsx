import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters)';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter your message (at least 10 characters)';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Interested in discussing DevOps architecture, observability solutions, or new opportunities? Let's talk.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-panel">
            <h3 className="contact-panel-title">Let's connect and build resilient infrastructure</h3>
            <p className="contact-panel-desc">
              I am open to DevOps, SRE, and Cloud Engineering roles. Feel free to reach out directly via email, phone, or by submitting the contact form.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${personalInfo.email}`} className="contact-method-card">
                <div className="method-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Direct Email</span>
                  <span className="method-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="contact-method-card">
                <div className="method-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Call / WhatsApp</span>
                  <span className="method-value">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="contact-method-card no-hover">
                <div className="method-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Location</span>
                  <span className="method-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Resume Download in Contact */}
            <div className="contact-resume-box">
              <div className="resume-box-text">
                <strong>Need my formal resume?</strong>
                <p>Download the official PDF formatted for recruiters and engineering hiring managers.</p>
              </div>
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
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Interactive React Contact Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="form-name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Hiring Manager"
                    required
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="form-email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. recruiter@company.com"
                    required
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                <label htmlFor="form-subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="form-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. DevOps Engineer Opportunity / Discussion"
                  required
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="form-message" className="form-label">Your Message *</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  placeholder="Hi Nilesh, we reviewed your APM & Kubernetes background and would love to connect..."
                  required
                ></textarea>
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`btn btn-primary btn-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">Send Message</span>
                <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <div className="spinner"></div>
              </button>

              {isSuccess && (
                <div className="form-success-banner visible">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you! Your message has been received. I will reply within 24 hours.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

