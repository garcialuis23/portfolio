import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext';
import profileImage from '../../../assets/images/Fotografía_personal.jpg';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-main">
                    {/* Foto profesional */}
                    <div className="hero-image">
                        <div className="image-container">
                            <img
                                src={profileImage}
                                alt="Luis García - Junior Full Stack Developer"
                                className="profile-image"
                            />
                            <div className="image-decoration"></div>
                        </div>
                    </div>

                    <div className="hero-content">
                        {/* Título principal */}
                        <h1 className="hero-title">
                            {t('hero.greeting')} <span className="hero-name">{t('hero.name')}</span>
                        </h1>

                        {/* Subtítulo */}
                        <p className="hero-subtitle">
                            {t('hero.role')}
                        </p>

                        {/* Descripción */}
                        <p className="hero-description">
                            {t('hero.description')}
                        </p>

                        {/* CTAs */}
                        <div className="hero-actions">
                            <a href="#proyectos" className="btn btn-primary btn-lg">
                                {t('hero.verProyectos')}
                            </a>
                            <a href="#contacto" className="btn btn-secondary btn-lg">
                                {t('hero.contactar')}
                            </a>
                            <a
                                href="/curriculum-luis-garcia.pdf"
                                download="Luis García - Curriculum.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-lg"
                            >
                                {t('hero.descargarCV')}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
