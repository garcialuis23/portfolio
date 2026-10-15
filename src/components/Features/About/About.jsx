import './About.css';
import { useLanguage } from '../../../context/useLanguage';
import portrait from '../../../assets/images/Fotografía_personal.jpg';

const About = () => {
  const { t } = useLanguage();
  const [lead, ...rest] = t('about.paragraphs');

  return (
    <section className="section about" id="sobre-mi" aria-labelledby="about-title">
      <div className="container about__grid">
        <img
          src={portrait}
          alt={t('about.photoAlt')}
          className="about__photo"
          width="560"
          height="700"
          loading="lazy"
        />

        <div className="about__text">
          <h2 className="section-title about__title" id="about-title">{t('about.heading')}</h2>
          <p className="about__lead">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="about__paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
