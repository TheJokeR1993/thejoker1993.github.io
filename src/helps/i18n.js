import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


const apiKey = "f2oNPQCaXVrTYBnuQ2fvDg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    language: 'first' ,
    first:'first',
    debug :false,
    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","uk","ru"],
    
    backend: {
      loadPath: loadPath
    }
  })


  export default i18n