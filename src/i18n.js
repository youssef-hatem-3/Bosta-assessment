import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arabicTranslation from './localJson/ar.json'
import englsihTranslation from './localJson/en.json'
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";


const resources = {
  en: {
    translation: 
      englsihTranslation
  },
  ar: {
    translation: 
      arabicTranslation
    
  }
};

i18n
  .use(initReactI18next)
  .use(i18nextBrowserLanguagedetector)
  .init({
    resources,
    lng: "ar", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;