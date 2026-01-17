import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const projects = [
    {
      id: 1,
      title: "Heart Attack Prediction - ML",
      description: "Sistema de Machine Learning para predicción de enfermedades cardíacas alcanzando 90% de accuracy en Kaggle. Implementación de múltiples modelos (Random Forest, SVM, KNN, Decision Trees) con análisis exploratorio exhaustivo, feature engineering, y optimización de hiperparámetros sobre dataset clínico de 735 pacientes.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Random Forest", "Data Science"],
      category: "Machine Learning",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/heart-attack-prediction",
        live: null
      },
      status: "Completado",
      year: "2025"
    },
    {
      id: 2,
      title: "Hellcorp - Data Engineering",
      description: "Proyecto integral de ingeniería de datos para gestión infernal. Pipeline completo de limpieza y transformación de 27,500+ registros con Pandas, integración en MySQL con integridad referencial perfecta, consultas SQL avanzadas y diseño teórico de sistemas de IA para optimización de operaciones.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
      technologies: ["Python", "Pandas", "MySQL", "SQLAlchemy", "Jupyter", "Data Analysis", "AI Design"],
      category: "Data Science",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/hellcorp",
        live: null
      },
      status: "Completado",
      year: "2025"
    },
    {
      id: 3,
      title: "StemFounding Platform",
      description: "Plataforma completa de crowdfunding para proyectos STEM. Un ecosistema completo con frontend en React y backend en Laravel, permitiendo a usuarios crear proyectos, gestionar perfiles y realizar donaciones de manera segura.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Laravel", "PHP", "JavaScript", "MySQL", "RESTful API"],
      category: "Full Stack",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/stemfounding-react",
        githubBackend: "https://github.com/garcialuis23/stemfounding-php",
        live: null
      },
      status: "Completado",
      year: "2024"
    },
    {
      id: 4,
      title: "Monarch API",
      description: "API RESTful desarrollada con Spring Boot para la gestión de reinos medievales y monarcas. Incluye base de datos MySQL robusta y documentación completa con Postman para facilitar la integración.",
      image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=600&h=400&fit=crop&crop=center",
      technologies: ["Spring Boot", "Java", "MySQL", "REST API", "Postman"],
      category: "Backend",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/monarch-api",
        live: null
      },
      status: "Completado",
      year: "2024"
    },
    {
      id: 5,
      title: "Mini Vehicle Arduino",
      description: "Coche inteligente autónomo desarrollado con Arduino. Incluye control de movimiento, detección de obstáculos y navegación autónoma. Proyecto ideal para iniciarse en robótica y sistemas embebidos.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&crop=center",
      technologies: ["Arduino", "C++", "IoT", "Sensores", "Robótica"],
      category: "IoT/Hardware",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/mini-vehicle",
        live: null
      },
      status: "Completado",
      year: "2024"
    },
    {
      id: 6,
      title: "Cybersecurity Project",
      description: "Proyecto de ciberseguridad enfocado en la seguridad de aplicaciones web mediante el uso de Inteligencia Artificial. Implementa técnicas avanzadas de detección y prevención de amenazas.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      technologies: ["AI/ML", "Python", "Cybersecurity", "Web Security"],
      category: "Seguridad",
      featured: false,
      links: {
        github: "https://github.com/garcialuis23/cybersecurity-project",
        live: null
      },
      status: "Completado",
      year: "2024"
    },
    {
      id: 7,
      title: "SleepSync",
      description: "Aplicación Full Stack para la gestión y monitoreo del sueño. Permite a los usuarios rastrear patrones de sueño, establecer rutinas personalizadas y obtener insights detallados sobre la calidad del descanso mediante análisis de datos avanzados.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST API"],
      category: "Full Stack",
      featured: true,
      links: {
        github: "https://github.com/garcialuis23/sleepsync",
        live: null
      },
      status: "En desarrollo",
      year: "2025"
    },
    {
      id: 8,
      title: "Portfolio Personal",
      description: "Portfolio personal moderno y responsivo desarrollado con React y Vite. Incluye sistema de diseño completo, tema oscuro/claro y arquitectura modular escalable.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Vite", "CSS3", "EmailJS", "Responsive Design"],
      category: "Frontend",
      featured: false,
      links: {
        github: "https://github.com/garcialuis23/portfolio",
        live: null
      },
      status: "En desarrollo",
      year: "2025"
    }
    ,
    {
      id: 9,
      title: "Product Passport",
      description: "Aplicación web desplegada en Vercel para gestión y visualización de información de productos. Interfaz responsiva y acceso público al prototipo en la URL proporcionada.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=600&h=400&fit=crop&crop=center",
      technologies: ["Next.js", "React Native", "Vercel"],
      category: "Frontend",
      featured: true,
      links: {
        github: null,
        live: "https://product-passport-six.vercel.app/"
      },
      status: "En desarrollo",
      year: "2026"
    }
  ];

  const getProjectCount = (category) => {
    if (category === 'Todos') return projects.length;
    return projects.filter(project => project.category === category).length;
  };

  const categories = ["Todos", "Full Stack", "Backend", "Frontend", "IoT/Hardware", "Seguridad", "Data Science", "Machine Learning"];

  // Función para obtener la traducción de la categoría
  const getCategoryTranslation = (category) => {
    const translations = {
      "Todos": t('projects.filters.all'),
      "Full Stack": t('projects.filters.fullStack'),
      "Backend": t('projects.filters.backend'),
      "Frontend": t('projects.filters.frontend'),
      "IoT/Hardware": t('projects.filters.iot'),
      "Seguridad": t('projects.filters.security'),
      "Data Science": t('projects.filters.dataScience'),
      "Machine Learning": t('projects.filters.machineLearning')
    };
    return translations[category] || category;
  };

  const handleCategoryFilter = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectView = (projectId) => {
    // Esta función se implementará para ver detalles del proyecto
    console.log(`Ver proyecto: ${projectId}`);
  };

  return (
    <section className="projects" id="proyectos">
      <div className="container">
        {/* Header de la sección */}
        <div className="projects-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${category === activeFilter ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(category)}
            >
              {getCategoryTranslation(category)} ({getProjectCount(category)})
            </button>
          ))}
        </div>

        {/* Grid de todos los proyectos */}
        <div className="projects-all">
          <h3 className="all-projects-title">
            {activeFilter === 'Todos' ? t('projects.allProjects') : `${t('projects.projectsOf')} ${getCategoryTranslation(activeFilter)}`}
            <span className="project-count">({filteredProjects.length})</span>
          </h3>
          
          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h4>{t('projects.noProjects.title')}</h4>
              <p>{t('projects.noProjects.message')}</p>
            </div>
          ) : (
            <div className="projects-grid all-projects-grid">
              {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title={t('projects.viewCode')}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title={t('projects.viewLive')}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15,3 21,3 21,9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <span className={`project-status ${project.status.replace(/\s+/g, '-').toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
