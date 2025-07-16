import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');
  const [isDarkMode, setIsDarkMode] = useState(true); // Por defecto modo oscuro
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  // Detectar scroll y sección actual
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Detectar sección actual basada en scroll
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Offset para el header fijo
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aplicar tema al documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  // Textos según idioma
  const texts = {
    es: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      descargarCV: 'Descargar CV'
    },
    en: {
      inicio: 'Home',
      sobreMi: 'About Me',
      habilidades: 'Skills',
      proyectos: 'Projects',
      contacto: 'Contact',
      descargarCV: 'Download CV'
    }
  };

  const t = texts[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} header--${currentSection}`}>
      <nav className="nav">
        <div className="nav__container">
          {/* Logo */}
          <div className="nav__logo">
            <a 
              href="#inicio" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inicio');
              }}
            >
              <span className="logo__text">Luis</span>
              <span className="logo__accent">García</span>
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="nav__menu">
            <li className="nav__item">
              <a 
                href="#inicio" 
                className={`nav__link ${currentSection === 'inicio' ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inicio');
                }}
              >
                {t.inicio}
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#sobre-mi" 
                className={`nav__link ${currentSection === 'sobre-mi' ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sobre-mi');
                }}
              >
                {t.sobreMi}
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#habilidades" 
                className={`nav__link ${currentSection === 'habilidades' ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('habilidades');
                }}
              >
                {t.habilidades}
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#proyectos" 
                className={`nav__link ${currentSection === 'proyectos' ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('proyectos');
                }}
              >
                {t.proyectos}
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contacto" 
                className={`nav__link ${currentSection === 'contacto' ? 'nav__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                }}
              >
                {t.contacto}
              </a>
            </li>
          </ul>

          {/* Controls */}
          <div className="nav__controls">
            {/* Theme Toggle */}
            <button 
              className="nav__control-btn" 
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDarkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button 
              className="nav__control-btn" 
              onClick={toggleLanguage}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              title={language === 'es' ? 'English' : 'Español'}
            >
              <span className="language-text">
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`nav__toggle ${isMenuOpen ? 'nav__toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="nav__toggle-line"></span>
            <span className="nav__toggle-line"></span>
            <span className="nav__toggle-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav__mobile ${isMenuOpen ? 'nav__mobile--active' : ''}`}>
          <ul className="nav__mobile-menu">
            <li className="nav__mobile-item">
              <a 
                href="#inicio" 
                className="nav__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inicio');
                }}
              >
                {t.inicio}
              </a>
            </li>
            <li className="nav__mobile-item">
              <a 
                href="#sobre-mi" 
                className="nav__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sobre-mi');
                }}
              >
                {t.sobreMi}
              </a>
            </li>
            <li className="nav__mobile-item">
              <a 
                href="#habilidades" 
                className="nav__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('habilidades');
                }}
              >
                {t.habilidades}
              </a>
            </li>
            <li className="nav__mobile-item">
              <a 
                href="#proyectos" 
                className="nav__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('proyectos');
                }}
              >
                {t.proyectos}
              </a>
            </li>
            <li className="nav__mobile-item">
              <a 
                href="#contacto" 
                className="nav__mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                }}
              >
                {t.contacto}
              </a>
            </li>
            
            {/* Mobile Controls */}
            <li className="nav__mobile-item nav__mobile-controls">
              <div className="mobile-controls-row">
                <button 
                  className="nav__control-btn" 
                  onClick={toggleTheme}
                  aria-label={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
                >
                  {isDarkMode ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span>{isDarkMode ? 'Claro' : 'Oscuro'}</span>
                </button>

                <button 
                  className="nav__control-btn" 
                  onClick={toggleLanguage}
                  aria-label={language === 'es' ? 'English' : 'Español'}
                >
                  <span className="language-text">
                    {language === 'es' ? 'EN' : 'ES'}
                  </span>
                  <span>{language === 'es' ? 'English' : 'Español'}</span>
                </button>
              </div>
            </li>
            
            <li className="nav__mobile-item">
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm nav__mobile-cta"
              >
                {t.descargarCV}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
