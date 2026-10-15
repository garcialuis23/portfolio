import { useLanguage } from '../../../context/useLanguage';
import { CV_URL, CV_FILENAME, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../../data/links';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Luis García Díaz</p>
        <nav className="footer__links" aria-label="Footer">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={CV_URL} download={CV_FILENAME}>{t('footer.downloadCV')}</a>
          <a
            href="#inicio"
            className="footer__top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            {t('footer.backToTop')}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
