import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import homeTranslationsEN from '../assets//locales/en/combinedTranslation';
import homeTranslationsFR from '../assets/locales/fr/combinedTranslation';

const resources = {
  en: { translation: homeTranslationsEN},
  fr: { translation: homeTranslationsFR},
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;