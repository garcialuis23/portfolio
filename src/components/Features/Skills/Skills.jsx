import './Skills.css';
import { useLanguage } from '../../../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <line x1="3" y1="12" x2="21" y2="12"></line>
        </svg>
      ),
      skills: [
        { name: "Snowflake", level: 75, color: "#29B5E8" },
        { name: "ClickHouse", level: 70, color: "#FFCC02" },
        { name: "dbt", level: 65, color: "#FF694B" },
        { name: "Airflow", level: 60, color: "#017CEE" },
        { name: "SQLAlchemy", level: 72, color: "#D71F00" }
      ]
    },
    {
      title: t('skills.categories.backend'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: "Python", level: 88, color: "#3776AB" },
        { name: "SQL", level: 90, color: "#F29111" },
        { name: "Java", level: 70, color: "#007396" },
        { name: "PHP", level: 80, color: "#777BB4" },
        { name: "JavaScript", level: 72, color: "#F7DF1E" }
      ]
    },
    {
      title: t('skills.categories.frameworks'),
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
        { name: "Spring Boot", level: 75, color: "#6DB33F" },
        { name: "Django", level: 75, color: "#092E20" },
        { name: "FastAPI", level: 70, color: "#009688" },
        { name: "Node.js", level: 68, color: "#339933" }
      ]
    },
    {
      title: t('skills.categories.databases'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "MySQL", level: 88, color: "#4479A1" },
        { name: "PostgreSQL", level: 80, color: "#336791" }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: [
        { name: "Git / GitHub", level: 85, color: "#F05032" },
        { name: "Docker", level: 72, color: "#2496ED" },
        { name: "Postman", level: 85, color: "#FF6C37" },
        { name: "Linux", level: 72, color: "#FCC624" }
      ]
    },
    {
      title: t('skills.categories.hardware'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      skills: [
        { name: "Scikit-learn", level: 82, color: "#F7931E" },
        { name: "Pandas", level: 85, color: "#150458" },
        { name: "NumPy", level: 80, color: "#4DABCF" },
        { name: "Jupyter", level: 82, color: "#F37626" }
      ]
    }
  ];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        {/* Header de la sección */}
        <div className="skills-header">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
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
                            backgroundColor: skill.color,
                            color: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
