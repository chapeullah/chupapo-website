import SelectDropdown from "@ui/select-dropdown/index.js";
import LanguageIcon from "@icons/language/language-icon.jsx";

import { Languages } from "@i18n/languages.js";
import { useLanguage } from "@i18n/use-language.js";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <SelectDropdown
      items={Languages}
      selectedCode={language}
      onChange={setLanguage}
      icon={<LanguageIcon className="footer__selector-icon" />}
      ariaLabel="Select language"
    />
  );
}
