import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/garcialuis23',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/luis-garcia-dev',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitch',
      url: 'https://twitch.tv/luisgarcia_dev',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:luis.garcia.dev@email.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo__text">Luis</span>
              <span className="logo__accent">García</span>
            </div>
            <p className="footer__description">
              Junior Full Stack Developer especializado en crear experiencias web modernas 
              y aplicaciones robustas. Siempre aprendiendo nuevas tecnologías.
            </p>
            <div className="footer__social">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__title">Navegación</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__title">Contacto</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>luis.garcia.dev@email.com</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>España</span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="footer__section">
            <h4 className="footer__title">Tecnologías</h4>
            <div className="footer__tech">
              <span className="footer__tech-item">React</span>
              <span className="footer__tech-item">JavaScript</span>
              <span className="footer__tech-item">Python</span>
              <span className="footer__tech-item">Node.js</span>
              <span className="footer__tech-item">Java</span>
              <span className="footer__tech-item">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Luis García. Todos los derechos reservados.
            </p>
            <div className="footer__bottom-links">
              <span className="footer__made-with">
                Hecho con ❤️ usando React + Vite
              </span>
            </div>
            <button 
              className="footer__scroll-top"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="18,15 12,9 6,15"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
