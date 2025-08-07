import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
  ];

  const getProjectCount = (category) => {
    if (category === 'Todos') return projects.length;
    return projects.filter(project => project.category === category).length;
  };

  const categories = ["Todos", "Full Stack", "Backend", "Frontend", "IoT/Hardware", "Seguridad"];

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
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más destacados, desde desarrollo full stack 
            hasta proyectos de IoT y ciberseguridad
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
              {category} ({getProjectCount(category)})
            </button>
          ))}
        </div>

        {/* Grid de todos los proyectos */}
        <div className="projects-all">
          <h3 className="all-projects-title">
            {activeFilter === 'Todos' ? 'Todos los Proyectos' : `Proyectos de ${activeFilter}`}
            <span className="project-count">({filteredProjects.length})</span>
          </h3>
          
          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h4>No hay proyectos en esta categoría</h4>
              <p>Pero estoy trabajando en nuevos proyectos emocionantes. ¡Mantente atento!</p>
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
                          title="Ver código"
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
                          title="Ver proyecto en vivo"
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
