import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        { name: "HTML5", level: 90, color: "#E34F26" },
        { name: "CSS3", level: 85, color: "#1572B6" },
        { name: "JavaScript", level: 80, color: "#F7DF1E" }
      ]
    },
    {
      title: "Backend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <circle cx="8" cy="8" r="2"></circle>
          <path d="M14 8h6"></path>
          <path d="M14 12h6"></path>
        </svg>
      ),
      skills: [
        { name: "PHP", level: 85, color: "#777BB4" },
        { name: "Python", level: 75, color: "#3776AB" },
        { name: "Java", level: 65, color: "#007396" }
      ]
    },
    {
      title: "Frameworks",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L3.09 8.26l1.78 1.78L12 4.6l7.13 5.44 1.78-1.78L12 2z"></path>
          <path d="M12 22l8.91-6.26-1.78-1.78L12 19.4l-7.13-5.44-1.78 1.78L12 22z"></path>
          <path d="M12 2v20"></path>
          <path d="M3.09 8.26v7.48"></path>
          <path d="M20.91 8.26v7.48"></path>
        </svg>
      ),
      skills: [
        { name: "React", level: 75, color: "#61DAFB" },
        { name: "Laravel", level: 80, color: "#FF2D20" },
        { name: "Django", level: 70, color: "#092E20" },
        { name: "Node.js", level: 70, color: "#339933" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "MySQL", level: 85, color: "#4479A1" },
        { name: "PostgreSQL", level: 70, color: "#336791" },
        { name: "MongoDB", level: 65, color: "#47A248" },
        { name: "SQLite", level: 75, color: "#003B57" }
      ]
    },
    {
      title: "Herramientas & DevOps",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: [
        { name: "Git", level: 85, color: "#F05032" },
        { name: "GitHub", level: 80, color: "#181717" },
        { name: "VS Code", level: 90, color: "#007ACC" },
        { name: "Docker", level: 60, color: "#2496ED" },
        { name: "Linux", level: 70, color: "#FCC624" }
      ]
    },
    {
      title: "IA & Tecnologías Emergentes",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 9 5.16 1 9-3.45 9-9V7l-10-5z"></path>
          <circle cx="12" cy="11" r="3"></circle>
        </svg>
      ),
      skills: [
        { name: "ChatGPT", level: 85, color: "#74AA9C" },
        { name: "Machine Learning", level: 60, color: "#FF6F00" },
        { name: "Big Data", level: 65, color: "#E97627" },
        { name: "TensorFlow", level: 55, color: "#FF6F00" },
        { name: "Python AI", level: 70, color: "#3776AB" }
      ]
    }
  ];

  const personalValues = [
    "⚙️ Desarrollo Backend sólido",
    "🎨 Frontend moderno y responsive", 
    "🏗️ Arquitectura escalable",
    "📚 Aprendizaje continuo",
    "🚀 Pasión por la tecnología",
    "⚡ Performance y optimización"
  ];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        {/* Header de la sección */}
        <div className="skills-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Mi stack tecnológico y las herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="skills-content">
          {/* Categorías de habilidades */}
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Valores y filosofía */}
          <div className="skills-values">
            <h3 className="values-title">Mi Enfoque de Desarrollo</h3>
            <div className="values-grid">
              {personalValues.map((value, index) => (
                <div key={index} className="value-item">
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas de experiencia */}
          <div className="skills-stats">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tecnologías Dominadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
