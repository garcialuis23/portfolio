import './About.css';
import './Timeline.css';
import { useLanguage } from '../../../context/LanguageContext';
import aboutIllustration from '../../../assets/images/Fotografía_personal_about.png';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const { t } = useLanguage();
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  // Intersection Observer to trigger animations when timeline becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Triggers when 30% of timeline is visible
        rootMargin: '-50px' // Triggers slightly before becoming fully visible
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  // Get experience and highlights data from translations
  const experience = t('about.timeline.jobs');
  const highlights = t('about.highlights.items').map((item, index) => ({
    ...item,
    icon: [
      // Full Stack Development icon
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      // Continuous Learning icon
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 9 5.16 1 9-3.45 9-9V7l-10-5z"></path>
        </svg>
      ),
      // Teamwork icon
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      // Complete Architecture icon
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    ][index]
  }));

  return (
    <section className="about" id="sobre-mi">
      <div className="container">
        {/* Header de la sección */}
        <div className="about-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-content">
          {/* Hero personal con imagen */}
          <div className="about-hero">
            <div className="about-hero-image">
              <img 
                src={aboutIllustration} 
                alt="Luis García - Full Stack Developer"
                className="hero-profile-image"
              />
              <div className="hero-image-decoration"></div>
            </div>
            <div className="about-hero-content">
              <div className="about-personal-info">
                <h3 className="personal-name">{t('about.personalInfo.name')}</h3>
                <p className="personal-role">{t('about.role')}</p>
                <p className="personal-location">{t('about.location')}</p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">{t('about.stats.experience')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('about.stats.projects')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('about.stats.technologies')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información textual */}
          <div className="about-description">
            <div className="about-text">
              {t('about.paragraphs').map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="about-info-card">
              <h3 className="info-card-title">{t('about.details.title')}</h3>
              <div className="info-grid">
              <div className="info-item">
                <span className="info-label">{t('about.details.experience')}</span>
                <span className="info-value">{t('about.details.experienceValue')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.details.currentJob')}</span>
                <span className="info-value">{t('about.details.currentJobValue')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.details.education')}</span>
                <span className="info-value">{t('about.details.educationValue')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.details.location')}</span>
                <span className="info-value">{t('about.details.locationValue')}</span>
              </div>
            </div>
            </div>
          </div>

          {/* Experiencia Profesional - Timeline Horizontal */}
          <div className="about-experience">
            <h3 className="experience-title">{t('about.experience.title')}</h3>
            <div 
              ref={timelineRef}
              className={`horizontal-timeline ${isTimelineVisible ? 'timeline-animated' : ''}`}
            >
              {/* Barra de progreso arriba */}
              <div className="timeline-progress-bar-top">
                <div className={`timeline-progress-top ${isTimelineVisible ? 'progress-animate' : ''}`}></div>
              </div>
              
              <div className="timeline-items-container">
                {/* Invertimos el array para mostrar cronológicamente: más antiguo (izquierda) → más nuevo (derecha) */}
                {experience.slice().reverse().map((job, index) => {
                  // Extraer año del período de forma más robusta
                  const getYear = (period) => {
                    if (period.includes('2025')) return '2025';
                    if (period.includes('2024')) return '2024';
                    if (period.includes('2023')) return '2023';
                    if (period.includes('2022')) return '2022';
                    return period.split(' ')[0];
                  };
                  
                  const year = getYear(job.period);
                  
                  // Colors for different job types - now using index instead of text matching
                  const getJobTypeColor = (jobIndex, isCurrent) => {
                    if (isCurrent) return '#10B981'; // Green for current
                    // Based on job index: 0=current, 1=temporal, 2=temporal, 3=internship
                    const reversedIndex = experience.length - 1 - index; // Since we reverse the array
                    if (reversedIndex === 1 || reversedIndex === 2) return '#F59E0B'; // Yellow for temporary
                    if (reversedIndex === 3) return '#8B5CF6'; // Purple for internship
                    return '#3B82F6'; // Blue by default
                  };
                  
                  const jobColor = getJobTypeColor(index, job.current);
                  
                  // Get badge text based on job characteristics using translations
                  const getBadgeText = (job) => {
                    if (job.current) return t('about.timeline.badges.current');
                    // Use index to determine type since text can be in different languages
                    const reversedIndex = experience.length - 1 - index;
                    if (reversedIndex === 1 || reversedIndex === 2) return t('about.timeline.badges.temporary');
                    if (reversedIndex === 3) return t('about.timeline.badges.internship');
                    return t('about.timeline.badges.contract');
                  };
                  
                  return (
                    <div key={job.id} className={`horizontal-timeline-item ${isTimelineVisible ? 'item-animate' : ''}`}>
                      <div 
                        className="timeline-point" 
                        style={{ background: jobColor }}
                      >
                        <div className="timeline-point-inner"></div>
                      </div>
                      <div className="timeline-card">
                        <div className="timeline-card-header">
                          <span className="job-year" style={{ color: jobColor }}>
                            {year}
                          </span>
                          <span 
                            className="job-type-badge"
                            style={{ 
                              background: `${jobColor}20`,
                              color: jobColor,
                              border: `1px solid ${jobColor}50`
                            }}
                          >
                            {getBadgeText(job)}
                          </span>
                        </div>
                        <h4 className="job-title">{job.position}</h4>
                        <div className="job-company-info">
                          <span className="company">{job.company}</span>
                          <span className="location">{job.location.split(' ·')[0]}</span>
                        </div>
                        <div className="job-period">{job.period}</div>
                        <p className="job-desc">{job.description}</p>
                        {job.technologies.length > 0 && (
                          <div className="job-tech-list">
                            {job.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="tech-chip"
                                style={{ 
                                  background: `${jobColor}15`,
                                  color: jobColor,
                                  border: `1px solid ${jobColor}30`
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Aspectos destacados */}
          <div className="about-highlights">
            <h3 className="highlights-title">{t('about.highlights.title')}</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="about-cta">
            <h3 className="cta-title">{t('about.cta.title')}</h3>
            <p className="cta-description">
              {t('about.cta.description')}
            </p>
            <div className="cta-buttons">
              <a href="#contacto" className="btn btn-primary">
                {t('about.cta.contact')}
              </a>
              <a href="#proyectos" className="btn btn-secondary">
                {t('about.cta.viewProjects')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
