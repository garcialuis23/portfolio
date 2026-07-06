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
      // Data Engineering icon - database/pipeline
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      // Machine Learning icon - brain/neural
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <circle cx="4" cy="6" r="2"></circle>
          <circle cx="20" cy="6" r="2"></circle>
          <circle cx="4" cy="18" r="2"></circle>
          <circle cx="20" cy="18" r="2"></circle>
          <line x1="6" y1="6" x2="9" y2="11"></line>
          <line x1="18" y1="6" x2="15" y2="11"></line>
          <line x1="6" y1="18" x2="9" y2="13"></line>
          <line x1="18" y1="18" x2="15" y2="13"></line>
        </svg>
      ),
      // Backend/API icon - server
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      // Continuous Learning icon - book/graduation
      (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
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
                alt="Luis García - Data Engineer & Backend Developer"
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
                  <span className="stat-number">2+</span>
                  <span className="stat-label">{t('about.stats.experience')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('about.stats.projects')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
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
                  const getYear = (period) => {
                    if (period.includes('2026')) return '2026';
                    if (period.includes('2025')) return '2025';
                    if (period.includes('2024')) return '2024';
                    if (period.includes('2023')) return '2023';
                    if (period.includes('2022')) return '2022';
                    return period.split(' ')[0];
                  };

                  const year = getYear(job.period);

                  // reversedIndex: 0=current(NaturalSoft), 1=Sexta Dimensión, 2=TecnoManzana
                  const reversedIndex = experience.length - 1 - index;

                  const jobType = job.current ? 'current' : reversedIndex === 2 ? 'internship' : 'temporary';
                  const jobColor = jobType === 'current' ? '#10B981' : jobType === 'internship' ? '#8B5CF6' : '#F59E0B';
                  const badgeText = t(`about.timeline.badges.${jobType}`);

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
                            {badgeText}
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
        </div>
      </div>
    </section>
  );
};


export default About;
