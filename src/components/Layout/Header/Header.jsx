import { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Header.css';

const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];

const Header = () => {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      for (let section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 140;

          if (rect.top <= offset && rect.bottom >= offset) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: t('header.inicio') },
    { id: 'sobre-mi', label: t('header.sobreMi') },
    { id: 'habilidades', label: t('header.habilidades') },
    { id: 'proyectos', label: t('header.proyectos') },
    { id: 'contacto', label: t('header.contacto') },
  ];

  return (
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a
          href="#inicio"
          className="nav__brand"
          onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
        >
          <span className="nav__brand-mark">LG</span>
          <span className="nav__brand-name">Luis Garc&iacute;a</span>
        </a>

        <nav className="nav__links" aria-label="Secciones">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${currentSection === item.id ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
            title={isDarkMode ? t('header.modoClaro') : t('header.modoOscuro')}
          >
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          <button
            className="nav__icon-btn nav__lang-btn"
            onClick={toggleLanguage}
            aria-label={language === 'es' ? 'English' : 'Español'}
            title={language === 'es' ? 'English' : 'Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <a
            href="/CV%20Luis_García_Díaz.pdf"
            download="CV Luis_García_Díaz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cv-btn"
          >
            {t('header.descargarCV')}
          </a>

          <button
            className={`nav__burger ${isMenuOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <nav className="nav__mobile-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__mobile-link ${currentSection === item.id ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/CV%20Luis_García_Díaz.pdf"
          download="CV Luis_García_Díaz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cv-btn nav__cv-btn--mobile"
        >
          {t('header.descargarCV')}
        </a>
      </div>
    </header>
  );
};

export default Header;
