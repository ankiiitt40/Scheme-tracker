import React, { createContext, useState, useContext, useEffect } from 'react';
import { schemeTranslations, commonTranslations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ENG');

  useEffect(() => {
    const savedLang = localStorage.getItem('scheme_lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('scheme_lang', newLang);
  };

  // Simple translation helper
  const t = (eng, hin) => {
    if (lang === 'ENG') return eng;
    if (hin) return hin;
    // Fallback to common translations if only eng is provided
    return commonTranslations[eng] || eng;
  };

  // Translate entire scheme object based on the current language
  const translateScheme = (scheme) => {
    if (lang === 'ENG') return scheme;
    
    const translatedData = schemeTranslations[scheme.id];
    
    // Create translated scheme object
    const updated = { ...scheme };
    
    // Translate common fields
    if (commonTranslations[scheme.type]) updated.type = commonTranslations[scheme.type];
    if (commonTranslations[scheme.category]) updated.category = commonTranslations[scheme.category];
    if (commonTranslations[scheme.difficulty]) updated.difficulty = commonTranslations[scheme.difficulty];
    if (commonTranslations[scheme.state]) updated.state = commonTranslations[scheme.state];
    
    if (!translatedData) return updated;

    updated.name = translatedData.name || scheme.name;
    updated.benefits = translatedData.benefits || scheme.benefits;
    updated.eligibility = translatedData.eligibility || scheme.eligibility;
    updated.income_limit = translatedData.income_limit || scheme.income_limit;
    updated.time_estimate = translatedData.time_estimate || scheme.time_estimate;
    
    if (translatedData.documents) {
      updated.documents = translatedData.documents;
    }
    
    if (translatedData.steps && scheme.steps) {
      updated.steps = scheme.steps.map((step, idx) => {
        if (translatedData.steps[idx]) {
          return {
            ...step,
            title: translatedData.steps[idx].title || step.title,
            description: translatedData.steps[idx].description || step.description
          };
        }
        return step;
      });
    }

    return updated;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLang, t, translateScheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
