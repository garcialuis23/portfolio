import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '../../icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../../data/links';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [lastSubmitTime, setLastSubmitTime] = useState(0); // Rate limiting
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const sanitizeInput = (input) => input.replace(/[<>]/g, '');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;

    if (timeSinceLastSubmit < 5000) {
      setSubmitStatus('rate-limit');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);
    setLastSubmitTime(now);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured');
      }

      const templateParams = {
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject) || 'Contacto desde Portfolio',
        message: sanitizeInput(formData.message),
        to_email: 'garciadiazluis23@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');

      const subject = encodeURIComponent(formData.subject || 'Contacto desde Portfolio');
      const body = encodeURIComponent(
        `Hola Luis,\n\nMi nombre es ${formData.name}.\n\n${formData.message}\n\nSaludos,\n${formData.name}\n${formData.email}`
      );

      window.location.href = `mailto:garciadiazluis23@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <h2 className="contact__title" id="contact-title">{t('contact.heading')}</h2>
          <p className="section-lead contact__lead">{t('contact.subtitle')}</p>

          <div className="contact__email-row">
            <a href={`mailto:${EMAIL}`} className="contact__email">{EMAIL}</a>
            <button type="button" className="contact__copy" onClick={copyEmail}>
              {copied ? t('contact.copied') : t('contact.copy')}
            </button>
            <span className="visually-hidden" aria-live="polite">{copied ? t('contact.copied') : ''}</span>
          </div>

          <div className="contact__social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <GithubIcon /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3 className="contact__form-title">{t('contact.form.title')}</h3>

          <div className="field-row">
            <div className="field">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">{t('contact.form.subject')}</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={t('contact.form.subjectPlaceholder')} />
          </div>

          <div className="field">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleInputChange} placeholder={t('contact.form.messagePlaceholder')} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary contact__submit" disabled={isLoading}>
            {isLoading ? t('contact.form.sending') : t('contact.form.send')}
          </button>

          <div aria-live="polite">
            {submitStatus === 'success' && (
              <p className="contact__status contact__status--success">{t('contact.form.successMessage')}</p>
            )}
            {submitStatus === 'error' && (
              <p className="contact__status contact__status--error">{t('contact.form.errorMessage')}</p>
            )}
            {submitStatus === 'rate-limit' && (
              <p className="contact__status contact__status--error">{t('contact.form.rateLimitMessage')}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
