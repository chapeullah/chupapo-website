import SelectDropdown from '../select-dropdown/select-dropdown.jsx';
import LanguageIcon from './icons/language-icon.jsx';

import { Languages } from '@i18n/languages.js';
import { useLanguage } from '@i18n/use-language.js';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <SelectDropdown
      items={Languages}
      selectedCode={language}
      onChange={setLanguage}
      icon={<LanguageIcon />}
      ariaLabel="Select language"
    />
  );
}