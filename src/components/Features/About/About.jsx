import './About.css';
import aboutIllustration from '../../../assets/images/Fotografía_personal_about.png';

const About = () => {
  const personalInfo = {
    name: "Luis García Díaz",
    role: "Junior Full Stack Developer",
    location: "España",
    experience: "1+ años de experiencia",
    currentJob: "Sexta Dimensión",
    education: "Estudiando Big Data e IA"
  };

  const aboutText = [
    "Soy un desarrollador Full Stack apasionado por la tecnología y el aprendizaje continuo. Mi viaje en el desarrollo comenzó con curiosidad por entender cómo funcionan las aplicaciones completas, desde la base de datos hasta la interfaz de usuario.",
    "Actualmente trabajo en Sexta Dimensión, donde he tenido la oportunidad de colaborar en proyectos reales trabajando tanto en el backend como en el frontend. Esta experiencia me ha enseñado la importancia del trabajo en equipo y las buenas prácticas de desarrollo en todo el stack tecnológico.",
    "Mi enfoque está en crear soluciones completas y escalables, trabajando desde la arquitectura de la base de datos hasta la experiencia de usuario final. Manejo tecnologías tanto del lado del servidor como del cliente, y estoy ampliando mis conocimientos hacia el mundo de Big Data e Inteligencia Artificial.",
    "Cuando no estoy programando, disfruto explorando nuevas tecnologías de todo el ecosistema de desarrollo, contribuyendo a proyectos open source y manteniéndome al día con las últimas tendencias tanto en backend como en frontend."
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
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce más sobre mi trayectoria, experiencia y lo que me motiva como desarrollador
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
                <h3 className="personal-name">{personalInfo.name}</h3>
                <p className="personal-role">{personalInfo.role}</p>
                <p className="personal-location">{personalInfo.location}</p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Años de experiencia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Proyectos completados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Tecnologías dominadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información textual */}
          <div className="about-description">
            <div className="about-text">
              {aboutText.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="about-info-card">
              <h3 className="info-card-title">Detalles Profesionales</h3>
              <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Experiencia:</span>
                <span className="info-value">{personalInfo.experience}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Empresa Actual:</span>
                <span className="info-value">{personalInfo.currentJob}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Formación:</span>
                <span className="info-value">{personalInfo.education}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Ubicación:</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
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
            <h3 className="cta-title">¿Trabajamos juntos?</h3>
            <p className="cta-description">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes
            </p>
            <div className="cta-buttons">
              <a href="#contacto" className="btn btn-primary">
                Contactar
              </a>
              <a href="#proyectos" className="btn btn-secondary">
                Ver Proyectos
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
