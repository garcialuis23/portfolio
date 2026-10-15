import { useLanguage } from '../../../context/useLanguage';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Luis García Díaz</p>
        <a
          href="#inicio"
          className="footer__top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
