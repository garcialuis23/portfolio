import { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  // Idioma guardado leído en el primer render, sin pasar antes por español
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-language');
      if (['es', 'en'].includes(saved)) return saved;
    } catch {
      // Sin almacenamiento disponible: idioma por defecto
    }
    return 'es';
  });

  // Guardar idioma y actualizar idioma del documento, título y descripción
  useEffect(() => {
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // Sin almacenamiento disponible: el idioma solo dura esta visita
    }
    const { meta } = translations[language];
    document.documentElement.lang = language;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const switchToLanguage = (lang) => {
    if (['es', 'en'].includes(lang)) {
      setLanguage(lang);
    }
  };

  // Función para obtener texto traducido
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Si no encuentra la traducción, devuelve la clave
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return value || key;
  };

  const value = {
    language,
    toggleLanguage,
    switchToLanguage,
    t,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

