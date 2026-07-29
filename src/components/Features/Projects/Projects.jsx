import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './Projects.css';

const CATEGORY_SLUGS = {
  "Data Engineering": "data_engineering",
  "Machine Learning": "machine_learning",
  "Data Science": "data_science",
  "Backend": "backend",
  "Full Stack": "full_stack",
  "Frontend": "frontend",
  "IoT/Hardware": "iot_hardware",
  "Seguridad": "security"
};

const CATEGORY_ICONS = {
  "Data Engineering": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  "Machine Learning": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  "Backend": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  "Full Stack": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  "Frontend": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="14" rx="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="18" x2="12" y2="21"></line>
    </svg>
  ),
  "IoT/Hardware": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <path d="M9 9h6v6H9z"></path>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
    </svg>
  ),
  "Seguridad": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4z"></path>
    </svg>
  )
};

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [leadRef, isLeadVisible] = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "Heart Attack Prediction - ML",
      description: "Sistema de Machine Learning para predicción de enfermedades cardíacas con ~90% de accuracy. EDA completo, feature engineering, e imputación de variables clínicas. Comparativa de SVM, KNN y Árboles de Decisión con validación cruzada.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "EDA"],
      category: "Machine Learning",
      links: { github: "https://github.com/garcialuis23/heart-attack-prediction", live: null },
      status: "Completado",
      year: "2026"
    },
    {
      id: 2,
      title: "Hellcorp - Data Engineering",
      description: "Pipeline completo de ingeniería de datos: limpieza y transformación de 27.500+ registros con Pandas, integración en MySQL con integridad referencial, consultas SQL avanzadas y diseño teórico de sistemas de IA.",
      technologies: ["Python", "Pandas", "MySQL", "SQLAlchemy", "ETL"],
      category: "Data Engineering",
      links: { github: "https://github.com/garcialuis23/hellcorp", live: null },
      status: "Completado",
      year: "2025"
    },
    {
      id: 10,
      title: "Granada Smart City - Energy Forecast",
      description: "Sistema de predicción energética para el Ayuntamiento de Granada. Limpieza exhaustiva de datos históricos, ingeniería de features, benchmark de algoritmos y aplicación web con FastAPI y PostgreSQL.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Scikit-learn", "Pandas"],
      category: "Data Engineering",
      links: { github: "https://github.com/garcialuis23/granada-energy-forecast", live: null },
      status: "Completado",
      year: "2025"
    },
    {
      id: 3,
      title: "StemFounding Platform",
      description: "Plataforma de crowdfunding para proyectos STEM. Ecosistema completo con frontend en React y backend en Laravel: creación de proyectos, gestión de perfiles y donaciones seguras.",
      technologies: ["React", "Laravel", "PHP", "MySQL", "REST API"],
      category: "Full Stack",
      links: { github: "https://github.com/garcialuis23/stemfounding-react", live: null },
      status: "Completado",
      year: "2024"
    },
    {
      id: 7,
      title: "SleepSync",
      description: "Aplicación Full Stack para gestión y monitoreo del sueño. Rastreo de patrones, rutinas personalizadas e insights sobre la calidad del descanso mediante análisis de datos.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      category: "Full Stack",
      links: { github: "https://github.com/garcialuis23/sleepsync", live: null },
      status: "En desarrollo",
      year: "2025"
    },
    {
      id: 4,
      title: "Monarch API",
      description: "API RESTful con Spring Boot para la gestión de reinos medievales y monarcas. Base de datos MySQL robusta y documentación completa con Postman.",
      technologies: ["Spring Boot", "Java", "MySQL", "Postman"],
      category: "Backend",
      links: { github: "https://github.com/garcialuis23/monarch-api", live: null },
      status: "Completado",
      year: "2024"
    },
    {
      id: 6,
      title: "Cybersecurity Project",
      description: "Seguridad de aplicaciones web mediante Inteligencia Artificial. Implementa técnicas de detección y prevención de amenazas.",
      technologies: ["AI/ML", "Python", "Web Security"],
      category: "Seguridad",
      links: { github: "https://github.com/garcialuis23/cybersecurity-project", live: null },
      status: "Completado",
      year: "2024"
    },
    {
      id: 5,
      title: "Mini Vehicle Arduino",
      description: "Coche inteligente autónomo con Arduino. Control de movimiento, detección de obstáculos y navegación autónoma para iniciarse en robótica.",
      technologies: ["Arduino", "C++", "IoT", "Robótica"],
      category: "IoT/Hardware",
      links: { github: "https://github.com/garcialuis23/mini-vehicle", live: null },
      status: "Completado",
      year: "2024"
    },
    {
      id: 9,
      title: "Product Passport",
      description: "Aplicación web para gestión y visualización de información de productos. Interfaz responsiva desplegada en Vercel con acceso público al prototipo.",
      technologies: ["Next.js", "React Native", "Vercel"],
      category: "Frontend",
      links: { github: null, live: "https://product-passport-six.vercel.app/" },
      status: "En desarrollo",
      year: "2026"
    },
    {
      id: 8,
      title: "Portfolio Personal",
      description: "Este mismo portfolio: React y Vite, sistema de diseño propio, tema oscuro/claro, i18n y arquitectura modular escalable.",
      technologies: ["React", "Vite", "CSS3", "EmailJS"],
      category: "Frontend",
      links: { github: "https://github.com/garcialuis23/portfolio", live: null },
      status: "En desarrollo",
      year: "2025"
    }
  ];

  const categories = ["Todos", "Data Engineering", "Machine Learning", "Backend", "Full Stack", "Frontend", "IoT/Hardware", "Seguridad"];

  const getProjectCount = (category) =>
    category === 'Todos' ? projects.length : projects.filter((p) => p.category === category).length;

  const getCategoryTranslation = (category) => {
    const translations = {
      "Todos": t('projects.filters.all'),
      "Full Stack": t('projects.filters.fullStack'),
      "Backend": t('projects.filters.backend'),
      "Frontend": t('projects.filters.frontend'),
      "IoT/Hardware": t('projects.filters.iot'),
      "Seguridad": t('projects.filters.security'),
      "Machine Learning": t('projects.filters.machineLearning'),
      "Data Engineering": t('projects.filters.dataEngineering')
    };
    return translations[category] || category;
  };

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="projects-eyebrow">
          <span className="about-eyebrow-line"></span>
          {t('projects.title')}
        </div>

        <div className={`projects-lead-grid ${isLeadVisible ? 'is-revealed' : ''}`} ref={leadRef}>
          <h2 className="projects-heading">{t('projects.heading')}</h2>
          <p className="projects-lead-text">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-pill ${category === activeFilter ? 'filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {getCategoryTranslation(category)}
              <span className="filter-pill-count">{getProjectCount(category)}</span>
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="no-projects">
            <h4>{t('projects.noProjects.title')}</h4>
            <p>{t('projects.noProjects.message')}</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-top">
                  <span className="project-schema-tag">
                    {CATEGORY_ICONS[project.category]}
                    {CATEGORY_SLUGS[project.category] || project.category}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge tech-badge--more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <span className={`project-status project-status--${project.status === 'Completado' ? 'done' : 'progress'}`}>
                    <span className="project-status-dot"></span>
                    {project.status === 'Completado' ? t('projects.status.completado') : t('projects.status.enProgreso')}
                  </span>

                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link" title={t('projects.viewCode')} aria-label={t('projects.viewCode')}>
                        <GithubIcon />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link" title={t('projects.viewLive')} aria-label={t('projects.viewLive')}>
                        <LiveIcon />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
