import { useContext } from 'react';

import { LanguageContext } from './language-context.jsx';

export function useLanguage() {
  return useContext(LanguageContext);
}