import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import TranslationsEN from '../assets/locales/en/TranslationsEN';
import TranslationsFR from '../assets/locales/fr/TranslationsFR';

const resources = {
  en: { translation: TranslationsEN },
  fr: { translation: TranslationsFR },
};

i18n
  .use(LanguageDetector) // 👈 enables persistence via localStorage, cookies, etc.
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // use this if language detection fails

    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // 👈 priority for detecting language
      caches: ['localStorage'], // 👈 where to store selected language
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
