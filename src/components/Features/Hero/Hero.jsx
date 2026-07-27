import './Hero.css';
import { useLanguage } from '../../../context/LanguageContext';
import profileImage from '../../../assets/images/Fotografía_personal.jpg';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <span className="hero-status">
                            <span className="hero-status-dot"></span>
                            {t('hero.role')}
                        </span>
                    </div>

                    <h1 className="hero-title">
                        {t('hero.greeting')}
                        <br />
                        <span className="hero-name">{t('hero.name')}</span>
                    </h1>

                    <p className="hero-description">
                        {t('hero.description')}
                    </p>

                    <div className="hero-actions">
                        <a href="#proyectos" className="btn btn-primary btn-lg">
                            {t('hero.verProyectos')}
                        </a>
                        <a href="#contacto" className="btn btn-secondary btn-lg">
                            {t('hero.contactar')}
                        </a>
                    </div>

                    <div className="hero-links">
                        <a href="https://github.com/garcialuis23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hero-icon-link">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/luis-garc%C3%ADa-d%C3%ADaz-b67175313/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hero-icon-link">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a
                            href="/CV%20Luis_García_Díaz.pdf"
                            download="CV Luis_García_Díaz.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cv-link"
                        >
                            {t('hero.descargarCV')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 3v13m0 0-4-4m4 4 4-4M5 21h14"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-portrait">
                        <img
                            src={profileImage}
                            alt="Luis García - Data Engineer & Backend Developer"
                            className="hero-portrait-img"
                        />
                    </div>
                    <div className="hero-tag hero-tag--stack">
                        <span className="hero-tag-dot"></span>
                        Python &middot; SQL &middot; ETL
                    </div>
                    <div className="hero-tag hero-tag--location">
                        Granada, Espa&ntilde;a
                    </div>
                </div>
            </div>

            <a
                href="#sobre-mi"
                className="hero-scroll"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Scroll down"
            >
                <span className="hero-scroll-line"></span>
            </a>
        </section>
    );
};

export default Hero;
