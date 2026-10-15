import './Experience.css';
import { useLanguage } from '../../../context/useLanguage';

const Experience = () => {
  const { t } = useLanguage();
  const jobs = t('experience.jobs');
  const education = t('experience.education');

  return (
    <section className="section experience" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="experience-title">{t('experience.title')}</h2>
          <p className="section-lead">{t('experience.lead')}</p>
        </div>

        <ol className="jobs">
          {jobs.map((job) => (
            <li key={job.id} className={`job ${job.current ? 'job--current' : ''}`}>
              <div className="job__period">
                {job.current && <span className="job__now">{t('experience.current')}</span>}
                <span className="mono">{job.period}</span>
              </div>

              <div className="job__role">
                <h3 className="job__title">{job.position}</h3>
                <p className="job__meta">
                  {job.company}
                  <span className="job__meta-sep">{job.location}</span>
                  <span className="job__meta-sep">{job.type}</span>
                </p>
              </div>

              <div className="job__detail">
                <p className="job__desc">{job.description}</p>
                <p className="job__tech mono">{job.technologies.join(', ')}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="experience__subtitle">{t('experience.educationTitle')}</h3>
        <ol className="jobs jobs--education">
          {education.map((item) => (
            <li key={item.id} className="job">
              <div className="job__period">
                <span className="mono">{item.period}</span>
              </div>
              <div className="job__role">
                <h4 className="job__title">{item.title}</h4>
                <p className="job__meta">{item.school}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
