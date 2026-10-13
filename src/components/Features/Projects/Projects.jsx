import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Projects.css';

const PROJECTS = [
  {
    id: 'heart', title: 'Heart Attack Prediction', category: 'machineLearning', year: 2026, done: true,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    links: { github: 'https://github.com/garcialuis23/heart-attack-prediction' }
  },
  {
    id: 'passport', title: 'Product Passport', category: 'frontend', year: 2026, done: false,
    technologies: ['Next.js', 'React Native', 'Vercel'],
    links: { live: 'https://product-passport-six.vercel.app/' }
  },
  {
    id: 'hellcorp', title: 'Hellcorp', category: 'dataEngineering', year: 2025, done: true,
    technologies: ['Python', 'Pandas', 'MySQL', 'SQLAlchemy'],
    links: { github: 'https://github.com/garcialuis23/hellcorp' }
  },
  {
    id: 'energy', title: 'Granada Smart City Energy Forecast', category: 'dataEngineering', year: 2025, done: true,
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Scikit-learn'],
    links: { github: 'https://github.com/garcialuis23/granada-energy-forecast' }
  },
  {
    id: 'sleepsync', title: 'SleepSync', category: 'fullStack', year: 2025, done: false,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: { github: 'https://github.com/garcialuis23/sleepsync' }
  },
  {
    id: 'portfolio', title: 'Portfolio', category: 'frontend', year: 2025, done: false,
    technologies: ['React', 'Vite', 'CSS', 'EmailJS'],
    links: { github: 'https://github.com/garcialuis23/portfolio' }
  },
  {
    id: 'stemfounding', title: 'StemFounding', category: 'fullStack', year: 2024, done: true,
    technologies: ['React', 'Laravel', 'PHP', 'MySQL'],
    links: { github: 'https://github.com/garcialuis23/stemfounding-react' }
  },
  {
    id: 'monarch', title: 'Monarch API', category: 'backend', year: 2024, done: true,
    technologies: ['Spring Boot', 'Java', 'MySQL', 'Postman'],
    links: { github: 'https://github.com/garcialuis23/monarch-api' }
  },
  {
    id: 'cyber', title: 'Cybersecurity Project', category: 'security', year: 2024, done: true,
    technologies: ['Python', 'Machine Learning', 'Web Security'],
    links: { github: 'https://github.com/garcialuis23/cybersecurity-project' }
  },
  {
    id: 'arduino', title: 'Mini Vehicle Arduino', category: 'iot', year: 2024, done: true,
    technologies: ['Arduino', 'C++'],
    links: { github: 'https://github.com/garcialuis23/mini-vehicle' }
  }
];

const CATEGORIES = ['all', 'backend', 'fullStack', 'dataEngineering', 'machineLearning', 'frontend', 'security', 'iot'];

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const countFor = (category) =>
    category === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === category).length;

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const labelFor = (category) => (category === 'all' ? t('projects.all') : t(`projects.categories.${category}`));

  return (
    <section className="section projects" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="projects-title">{t('projects.heading')}</h2>
          <p className="section-lead">{t('projects.subtitle')}</p>
        </div>

        <div className="filters" role="group" aria-label={t('projects.filterLabel')}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className="filter"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {labelFor(category)}
              <span className="filter__count">{countFor(category)}</span>
            </button>
          ))}
        </div>

        {/* Hoja de papel continuo: bandas verdes y perforaciones de arrastre */}
        <div className="sheet">
          <table className="ledger">
            <thead>
              <tr>
                <th scope="col" className="ledger__year">{t('projects.columns.year')}</th>
                <th scope="col">{t('projects.columns.project')}</th>
                <th scope="col" className="ledger__stack-col">{t('projects.columns.stack')}</th>
                <th scope="col" className="ledger__status-col">{t('projects.columns.status')}</th>
                <th scope="col"><span className="visually-hidden">Links</span></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((project) => (
                <tr key={project.id}>
                  <td className="ledger__year mono">{project.year}</td>
                  <td className="ledger__project">
                    <h3 className="ledger__title">{project.title}</h3>
                    <span className="ledger__category">{t(`projects.categories.${project.category}`)}</span>
                    <p className="ledger__desc">{t(`projects.descriptions.${project.id}`)}</p>
                  </td>
                  <td className="ledger__stack mono">{project.technologies.join(', ')}</td>
                  <td className="ledger__status">
                    <span className={`status ${project.done ? 'status--done' : 'status--progress'}`}>
                      {project.done ? t('projects.status.done') : t('projects.status.progress')}
                    </span>
                  </td>
                  <td className="ledger__links">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                        aria-label={`${t('projects.viewCode')}: ${project.title}`}
                      >
                        {t('projects.viewCode')}
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                        aria-label={`${t('projects.viewLive')}: ${project.title}`}
                      >
                        {t('projects.viewLive')}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="sheet__footer mono" aria-live="polite">
            {t('projects.count').replace('{shown}', visible.length).replace('{total}', PROJECTS.length)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
