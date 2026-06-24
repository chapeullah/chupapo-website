export const Languages = [
  { code: 'ru', title: 'Русский' },
  { code: 'en', title: 'English' },
];

export const AvailableLanguageCodes = Languages.map((language) => language.code);

export const DefaultLanguageCode = 'ru';
export const LanguageStorageKey = 'language';