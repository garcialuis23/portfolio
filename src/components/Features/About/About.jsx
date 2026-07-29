import './About.css';
import './Timeline.css';
import { useLanguage } from '../../../context/LanguageContext';
import aboutIllustration from '../../../assets/images/about-illustration.jpg';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const About = () => {
  const { t } = useLanguage();
  const [timelineRef, isTimelineVisible] = useScrollReveal({ threshold: 0.3, rootMargin: '-50px' });
  const [leadRef, isLeadVisible] = useScrollReveal();

  const experience = t('about.timeline.jobs');
  const paragraphs = t('about.paragraphs');
  const highlightIcons = [
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
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
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  ];
  const highlights = t('about.highlights.items').map((item, index) => ({ ...item, icon: highlightIcons[index] }));

  return (
    <section className="about" id="sobre-mi">
      <div className="container">
        <div className="about-eyebrow">
          <span className="about-eyebrow-line"></span>
          {t('about.title')}
        </div>

        <div className={`about-lead-grid ${isLeadVisible ? 'is-revealed' : ''}`} ref={leadRef}>
          <h2 className="about-heading">
            {t('about.headingLine1')}<br />
            <span className="about-heading-accent">{t('about.headingLine2')}</span>
          </h2>
          <p className="about-lead-text">{paragraphs[0]}</p>
        </div>

        <div className="about-body-grid">
          <div className="about-text">
            {paragraphs.slice(1).map((paragraph, index) => (
              <p key={index} className="about-paragraph">{paragraph}</p>
            ))}

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">2+</span>
                <span className="about-stat-label">{t('about.stats.experience')}</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">{t('about.stats.projects')}</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                <span className="about-stat-label">{t('about.stats.technologies')}</span>
              </div>
            </div>
          </div>

          <aside className="about-info-card">
            <img
              src={aboutIllustration}
              alt="Luis García - Data Engineer & Backend Developer"
              className="about-info-photo"
            />
            <span className="about-info-eyebrow">{t('about.details.title')}</span>
            <div className="about-info-list">
              <div className="about-info-item">
                <span className="about-info-label">{t('about.details.currentJob')}</span>
                <span className="about-info-value">{t('about.details.currentJobValue')}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">{t('about.details.experience')}</span>
                <span className="about-info-value">{t('about.details.experienceValue')}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">{t('about.details.education')}</span>
                <span className="about-info-value">{t('about.details.educationValue')}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">{t('about.details.location')}</span>
                <span className="about-info-value">{t('about.details.locationValue')}</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon">{highlight.icon}</div>
              <h4 className="highlight-title">{highlight.title}</h4>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="about-experience">
          <h3 className="experience-title">{t('about.timeline.title')}</h3>
          <div
            ref={timelineRef}
            className={`horizontal-timeline ${isTimelineVisible ? 'timeline-animated' : ''}`}
          >
            <div className="timeline-progress-bar-top">
              <div className={`timeline-progress-top ${isTimelineVisible ? 'progress-animate' : ''}`}></div>
            </div>

            <div className="timeline-items-container">
              {experience.slice().reverse().map((job) => (
                <div key={job.id} className={`horizontal-timeline-item ${isTimelineVisible ? 'item-animate' : ''}`}>
                  <div className="timeline-point">
                    <div className="timeline-point-inner"></div>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="job-period">{job.period}</span>
                      {job.current && (
                        <span className="job-current-badge">
                          <span className="job-current-dot"></span>
                          {t('about.timeline.badges.current')}
                        </span>
                      )}
                    </div>
                    <h4 className="job-title">{job.position}</h4>
                    <div className="job-company-info">
                      <span className="company">{job.company}</span>
                      <span className="location">{job.location.split(' ·')[0]}</span>
                    </div>
                    <p className="job-desc">{job.description}</p>
                    {job.technologies.length > 0 && (
                      <div className="job-tech-list">
                        {job.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-chip">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
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
