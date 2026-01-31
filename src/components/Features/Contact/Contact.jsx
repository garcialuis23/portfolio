import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
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

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: t('contact.info.email'),
      value: 'garciadiazluis23@gmail.com',
      href: 'mailto:garciadiazluis23@gmail.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      href: null
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'garcialuis23',
      href: 'https://github.com/garcialuis23'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Luis García Díaz',
      href: 'https://www.linkedin.com/in/luis-garc%C3%ADa-d%C3%ADaz-b67175313/'
    }
  ];

  // Función para sanitizar inputs
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Sanitizar el input
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting: Evitar envíos múltiples en menos de 5 segundos
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
      // Validar que las variables de entorno estén configuradas
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured');
      }

      // Configuración de EmailJS con datos sanitizados
      const templateParams = {
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject) || 'Contacto desde Portfolio',
        message: sanitizeInput(formData.message),
        to_email: 'garciadiazluis23@gmail.com'
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
      
      // Fallback al método mailto si falla EmailJS
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
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="contact__content">
          {/* Header */}
          <div className="contact__header">
            <h2 className="contact__title">{t('contact.title')}</h2>
            <p className="contact__subtitle">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="contact__main">
            {/* Contact Info */}
            <div className="contact__info">
              <h3 className="contact__info-title">{t('contact.info.title')}</h3>
              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact__info-item">
                    <div className="contact__info-icon">
                      {info.icon}
                    </div>
                    <div className="contact__info-content">
                      <span className="contact__info-label">{info.label}</span>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                          rel={info.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                          className="contact__info-value"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact__form-container">
              <h3 className="contact__form-title">{t('contact.form.title')}</h3>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact__form-input"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact__form-input"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contact__form-input"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact__form-textarea"
                    rows="5"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`contact__form-button btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="spinning">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2 A10 10 0 0 1 22 12"/>
                      </svg>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                      </svg>
                      {t('contact.form.send')}
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="contact__form-message contact__form-message--success">
                    ✅ {t('contact.form.successMessage')}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="contact__form-message contact__form-message--error">
                    ❌ {t('contact.form.errorMessage')}
                  </div>
                )}
                
                {submitStatus === 'rate-limit' && (
                  <div className="contact__form-message contact__form-message--error">
                    ⚠️ Por favor espera unos segundos antes de enviar otro mensaje.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
