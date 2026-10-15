import './Skills.css';
import { useLanguage } from '../../../context/useLanguage';

// Nivel por herramienta: core = dominio sólido, solid = uso habitual, familiar = familiarizado
const STACK = [
  { key: 'languages', skills: { core: ['SQL', 'Python'], solid: ['PHP', 'JavaScript', 'Java'], familiar: [] } },
  { key: 'frameworks', skills: { core: [], solid: ['Spring Boot', 'Django', 'FastAPI'], familiar: ['Node.js'] } },
  { key: 'databases', skills: { core: ['MySQL'], solid: ['PostgreSQL'], familiar: [] } },
  { key: 'dataEngineering', skills: { core: [], solid: ['Snowflake', 'SQLAlchemy', 'ClickHouse'], familiar: ['dbt', 'Airflow'] } },
  { key: 'ml', skills: { core: ['Pandas', 'Scikit-learn', 'Jupyter'], solid: ['NumPy'], familiar: [] } },
  { key: 'tools', skills: { core: ['Git / GitHub', 'Postman'], solid: ['Docker', 'Linux'], familiar: [] } }
];

const TIERS = ['core', 'solid', 'familiar'];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="section skills" id="habilidades" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="skills-title">{t('skills.heading')}</h2>
          <p className="section-lead">{t('skills.subtitle')}</p>
        </div>

        <table className="stack">
          <thead>
            <tr>
              <td></td>
              {TIERS.map((tier) => (
                <th key={tier} scope="col" className={`stack__tier stack__tier--${tier}`}>
                  {t(`skills.tiers.${tier}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STACK.map((row) => (
              <tr key={row.key}>
                <th scope="row" className="stack__category">{t(`skills.categories.${row.key}`)}</th>
                {TIERS.map((tier) => (
                  <td
                    key={tier}
                    className={`stack__cell stack__cell--${tier}`}
                    data-label={t(`skills.tiers.${tier}`)}
                    data-empty={row.skills[tier].length === 0 || undefined}
                  >
                    {row.skills[tier].length > 0 ? (
                      <ul>
                        {row.skills[tier].map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    ) : (
                      <span className="stack__empty" aria-label="—">–</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Skills;
