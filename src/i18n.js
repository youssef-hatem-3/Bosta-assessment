import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: {
          welcome: 'مرحبا',
          hello: 'اهلا',
        },
      }
    },
    lng: 'ar', // Default language
    fallbackLng: 'ar', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });