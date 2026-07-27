import './Skills.css';
import { useLanguage } from '../../../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.dataEngineering'),
      slug: 'data_engineering',
      skills: [
        { name: "Snowflake", level: 75 },
        { name: "ClickHouse", level: 70 },
        { name: "dbt", level: 65 },
        { name: "Airflow", level: 60 },
        { name: "SQLAlchemy", level: 72 }
      ]
    },
    {
      title: t('skills.categories.languages'),
      slug: 'languages',
      skills: [
        { name: "Python", level: 88 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 70 },
        { name: "PHP", level: 80 },
        { name: "JavaScript", level: 72 }
      ]
    },
    {
      title: t('skills.categories.frameworks'),
      slug: 'frameworks_apis',
      skills: [
        { name: "Spring Boot", level: 75 },
        { name: "Django", level: 75 },
        { name: "FastAPI", level: 70 },
        { name: "Node.js", level: 68 }
      ]
    },
    {
      title: t('skills.categories.databases'),
      slug: 'databases',
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      slug: 'devops_tools',
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Docker", level: 72 },
        { name: "Postman", level: 85 },
        { name: "Linux", level: 72 }
      ]
    },
    {
      title: t('skills.categories.ml'),
      slug: 'machine_learning',
      skills: [
        { name: "Scikit-learn", level: 82 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Jupyter", level: 82 }
      ]
    }
  ];

  const getTier = (level) => {
    if (level >= 82) return 'core';
    if (level >= 70) return 'solid';
    return 'familiar';
  };

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <div className="skills-eyebrow">
          <span className="about-eyebrow-line"></span>
          {t('skills.title')}
        </div>

        <div className="skills-lead-grid">
          <h2 className="skills-heading">{t('skills.heading')}</h2>
          <p className="skills-lead-text">{t('skills.subtitle')}</p>
        </div>

        <div className="skills-legend">
          <span className="skills-legend-item"><span className="tier-dot tier-dot--core"></span>{t('skills.legend.core')}</span>
          <span className="skills-legend-item"><span className="tier-dot tier-dot--solid"></span>{t('skills.legend.solid')}</span>
          <span className="skills-legend-item"><span className="tier-dot tier-dot--familiar"></span>{t('skills.legend.familiar')}</span>
        </div>

        <div className="skills-table">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-row">
              <span className="skills-row-label">{category.title}</span>
              <div className="skills-row-chips">
                {category.skills
                  .slice()
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => (
                    <span key={skill.name} className={`skill-chip skill-chip--${getTier(skill.level)}`}>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
