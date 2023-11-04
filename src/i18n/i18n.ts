import i18n from 'i18next'
import homeTranslations from '../assets/en/combinedTranslation';

i18n.init({
  resources: {
    en: { translation: homeTranslations},
    fr: { translation: homeTranslations}
  },
  lng: 'en',
  // Other i18n configurations...
});

export default i18n;