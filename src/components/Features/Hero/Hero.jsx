import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '../../icons';
import { GITHUB_URL, LINKEDIN_URL } from '../../../data/links';

const Hero = () => {
  const { t } = useLanguage();
  const rows = t('hero.rows');

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <h1 className="hero__name">{t('hero.name')}</h1>

        <div className="hero__grid">
          <div className="hero__intro">
            <p className="hero__lead">{t('hero.intro')}</p>

            <div className="hero__actions">
              <a href="#proyectos" className="btn btn-primary">{t('hero.verProyectos')}</a>
              <a href="#contacto" className="btn btn-secondary">{t('hero.contactar')}</a>
            </div>

            <div className="hero__social">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hero__social-link">
                <GithubIcon size={17} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hero__social-link">
                <LinkedinIcon size={17} /> LinkedIn
              </a>
            </div>
          </div>

          {/* El registro: entra sucio (mono) y sale tipografiado. Única animación de la página. */}
          <div className="record">
            <div className="record__head" aria-hidden="true">
              <span>{t('hero.rawLabel')}</span>
              <span></span>
              <span>{t('hero.cleanLabel')}</span>
            </div>

            <div className="record__body">
              {rows.map((row, i) => (
                <div className="record__row" key={i} style={{ '--i': i }}>
                  <code className="record__raw" aria-hidden="true">{row.raw}</code>
                  <span className="record__arrow" aria-hidden="true"></span>
                  <span className="record__key">{row.key}</span>
                  <span className="record__value">{row.value}</span>
                </div>
              ))}
            </div>

            <p className="record__summary">{t('hero.summary')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
