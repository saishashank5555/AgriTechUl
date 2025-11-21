// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ✅ Import only the languages you actually have
import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import te from "./locales/te/translation.json";
// If you add more JSON files later, uncomment below:
// import ta from "./locales/ta/translation.json";
// import mr from "./locales/mr/translation.json";
// import bn from "./locales/bn/translation.json";
// import kn from "./locales/kn/translation.json";
// import ml from "./locales/ml/translation.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  te: { translation: te },
  // ta: { translation: ta },
  // mr: { translation: mr },
  // bn: { translation: bn },
  // kn: { translation: kn },
  // ml: { translation: ml },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false, // React already escapes
    },

    detection: {
      order: [
        "sessionStorage",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["sessionStorage"],

      lookupSessionStorage: "language",
    },
  });

// Load stored session language if exists
const savedLang = sessionStorage.getItem("language");
if (savedLang) {
  i18n.changeLanguage(savedLang);
}

export default i18n;
