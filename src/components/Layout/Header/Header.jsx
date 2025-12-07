import { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const { language, toggleLanguage, t } = useLanguage();

  // Detectar sección actual con scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          
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

  // Aplicar tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <aside className="sidebar">
      {/* Logo / Branding */}
      <div className="sidebar__brand">
        <a 
          href="#inicio" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('inicio');
          }}
          className="sidebar__logo"
        >
          <span className="logo__initials">LG</span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar__nav">
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <a 
              href="#inicio" 
              className={`sidebar__link ${currentSection === 'inicio' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inicio');
              }}
              title={t('header.inicio')}
            >
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="sidebar__label">{t('header.inicio')}</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a 
              href="#sobre-mi" 
              className={`sidebar__link ${currentSection === 'sobre-mi' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sobre-mi');
              }}
              title={t('header.sobreMi')}
            >
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sidebar__label">{t('header.sobreMi')}</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a 
              href="#habilidades" 
              className={`sidebar__link ${currentSection === 'habilidades' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('habilidades');
              }}
              title={t('header.habilidades')}
            >
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span className="sidebar__label">{t('header.habilidades')}</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a 
              href="#proyectos" 
              className={`sidebar__link ${currentSection === 'proyectos' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('proyectos');
              }}
              title={t('header.proyectos')}
            >
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span className="sidebar__label">{t('header.proyectos')}</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a 
              href="#contacto" 
              className={`sidebar__link ${currentSection === 'contacto' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
              title={t('header.contacto')}
            >
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="sidebar__label">{t('header.contacto')}</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Controls at bottom */}
      <div className="sidebar__controls">
        {/* Theme Toggle */}
        <button 
          className="sidebar__control-btn" 
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
          title={isDarkMode ? t('header.modoClaro') : t('header.modoOscuro')}
        >
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Language Toggle */}
        <button 
          className="sidebar__control-btn" 
          onClick={toggleLanguage}
          aria-label={language === 'es' ? 'English' : 'Español'}
          title={language === 'es' ? 'English' : 'Español'}
        >
          <span className="language-text">
            {language === 'es' ? 'EN' : 'ES'}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Header;
