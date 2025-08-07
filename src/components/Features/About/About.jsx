import './About.css';
import './Timeline.css';
import { useLanguage } from '../../../context/LanguageContext';
import aboutIllustration from '../../../assets/images/Fotografía_personal_about.png';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const { t } = useLanguage();
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  // Intersection Observer para activar animaciones cuando la timeline sea visible
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
        threshold: 0.3, // Se activa cuando el 30% de la timeline es visible
        rootMargin: '-50px' // Se activa un poco antes de que sea completamente visible
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

  const experience = [
    {
      id: 1,
      position: "Desarrollador de software",
      company: "Sexta Dimensión Software",
      location: "Granada, Híbrido",
      period: "mar. 2025 - actualidad · 6 meses",
      type: "Jornada parcial",
      description: "Desarrollador full stack junior con experiencia en aplicaciones web modernas. Trabajo con tecnologías frontend y backend para crear soluciones completas y funcionales.",
      technologies: ["React", "Laravel", "PHP", "JavaScript", "MySQL", "Git"],
      current: true
    },
    {
      id: 2,
      position: "Especialista en ventas",
      company: "Carrefour España",
      location: "Antequera, Andalucía, España · Presencial",
      period: "jun. 2024 - sept. 2024 · 4 meses",
      type: "Contrato temporal",
      description: "Atención al cliente y ventas en entorno dinámico. Desarrollo de habilidades de comunicación y trabajo en equipo.",
      technologies: [],
      current: false
    },
    {
      id: 3,
      position: "Especialista en ventas",
      company: "Carrefour España",
      location: "Antequera, Andalucía, España · Presencial",
      period: "jun. 2023 - sept. 2023 · 4 meses",
      type: "Contrato temporal",
      description: "Experiencia continuada en retail, fortaleciendo competencias en comunicación y trabajo en equipo.",
      technologies: [],
      current: false
    },
    {
      id: 4,
      position: "Técnico de reparación de equipos informáticos",
      company: "TecnoManzana Antequera",
      location: "Antequera, Andalucía, España · Presencial",
      period: "mar. 2022 - jun. 2022 · 4 meses",
      type: "Contrato de prácticas",
      description: "Diagnóstico y reparación de equipos informáticos. Desarrollo de habilidades técnicas y resolución de problemas en hardware y software.",
      technologies: ["Hardware", "Software", "Diagnóstico", "Reparación"],
      current: false
    }
  ];

  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Desarrollo Full Stack",
      description: "Experiencia completa desde bases de datos y APIs hasta interfaces de usuario modernas y responsive."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 9 5.16 1 9-3.45 9-9V7l-10-5z"></path>
        </svg>
      ),
      title: "Aprendizaje Continuo",
      description: "Estudiando Big Data e IA para mantenerme a la vanguardia de la tecnología y ampliar mi stack."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Trabajo en Equipo",
      description: "Experiencia colaborando en equipos multidisciplinarios y aplicando metodologías ágiles en proyectos reales."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Arquitectura Completa",
      description: "Enfocado en crear soluciones escalables y eficientes que abarquen toda la stack tecnológica."
    }
  ];

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
                  
                  // Colores para diferentes tipos de trabajos
                  const getJobTypeColor = (type, isCurrent) => {
                    if (isCurrent) return '#10B981'; // Verde para actual
                    if (type.includes('temporal')) return '#F59E0B'; // Amarillo para temporal
                    if (type.includes('prácticas')) return '#8B5CF6'; // Morado para prácticas
                    return '#3B82F6'; // Azul por defecto
                  };
                  
                  const jobColor = getJobTypeColor(job.type, job.current);
                  
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
                            {job.current ? 'ACTUAL' : job.type.includes('temporal') ? 'TEMPORAL' : job.type.includes('prácticas') ? 'PRÁCTICAS' : 'CONTRATO'}
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
            <h3 className="highlights-title">Lo que me caracteriza</h3>
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
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t('about.cta.downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
