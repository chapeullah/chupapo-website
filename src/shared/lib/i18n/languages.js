export const Languages = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export const AvailableLanguageCodes = Languages.map((language) => language.code);

export const DefaultLanguageCode = "ru";
export const LanguageStorageKey = "language";