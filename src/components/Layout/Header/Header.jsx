import { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/useLanguage';
import { SunIcon, MoonIcon } from '../../icons';
import { CV_URL, CV_FILENAME } from '../../../data/links';
import './Header.css';

const NAV = [
  { id: 'sobre-mi', key: 'perfil' },
  { id: 'experiencia', key: 'experiencia' },
  { id: 'habilidades', key: 'stack' },
  { id: 'proyectos', key: 'proyectos' },
  { id: 'contacto', key: 'contacto' }
];

const readTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

const Header = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [theme, setTheme] = useState(readTheme);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      let active = null;
      for (const { id } of NAV) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 140) active = id;
      }
      setCurrentSection(active);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0F1411' : '#F3F5EE');
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Sin almacenamiento disponible: el tema solo dura esta visita
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <>
    <a href="#main" className="skip-link">{t('header.skipToContent')}</a>
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''} ${isMenuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a
          href="#inicio"
          className="nav__brand"
          aria-label={t('header.inicio')}
          onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
        >
          Luis García Díaz
        </a>

        <nav className="nav__links" aria-label="Secciones">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav__link"
              aria-current={currentSection === item.id ? 'location' : undefined}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            >
              {t(`header.nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            onClick={toggleLanguage}
            aria-label={t('header.cambiarIdioma')}
            title={t('header.cambiarIdioma')}
          >
            <span className="nav__lang">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <button
            className="nav__icon-btn"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? t('header.modoClaro') : t('header.modoOscuro')}
            title={isDark ? t('header.modoClaro') : t('header.modoOscuro')}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href={CV_URL} download={CV_FILENAME} className="nav__cv">
            {t('header.descargarCV')}
          </a>

          <button
            className="nav__burger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t('header.cerrarMenu') : t('header.abrirMenu')}
            aria-expanded={isMenuOpen}
            aria-controls="nav-mobile"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div id="nav-mobile" className="nav__mobile" hidden={!isMenuOpen}>
        <nav aria-label="Secciones">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav__mobile-link"
              aria-current={currentSection === item.id ? 'location' : undefined}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            >
              {t(`header.nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <a href={CV_URL} download={CV_FILENAME} className="btn btn-primary nav__mobile-cv">
          {t('header.descargarCV')}
        </a>
      </div>
    </header>
    </>
  );
};

export default Header;
