import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  // Cargar idioma guardado del localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
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

export default LanguageContext;
