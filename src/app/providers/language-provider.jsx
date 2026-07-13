import { LanguageContext } from "@i18n/language-context.jsx";
import { AvailableLanguageCodes, DefaultLanguageCode, LanguageStorageKey, } from "@i18n/languages.js";
import { translations } from "@i18n/translations/index.js";

import { useEffect, useState } from "react";

function getBrowserLanguage() {
  const browserLanguages = navigator.languages ?? [navigator.language];

  return browserLanguages
    .map((language) => language.toLowerCase().split("-")[0])
    .find((language) => AvailableLanguageCodes.includes(language));
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(LanguageStorageKey);

  if (AvailableLanguageCodes.includes(savedLanguage)) {
    return savedLanguage;
  }

  return getBrowserLanguage() ?? DefaultLanguageCode;
}

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (!AvailableLanguageCodes.includes(nextLanguage)) {
      return;
    }

    localStorage.setItem(LanguageStorageKey, nextLanguage);
    setLanguageState(nextLanguage);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
