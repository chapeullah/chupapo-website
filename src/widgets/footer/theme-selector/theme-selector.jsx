import SelectDropdown from '../select-dropdown/select-dropdown.jsx';
import ThemeIcon from './icons/theme-icon.jsx';

import { useLanguage } from '@i18n/use-language.js';
import { useTheme } from '@theme/use-theme.js';

export default function ThemeSelector() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const themeSelectorTexts = t.common.footer.themeSelector;

  return (
    <SelectDropdown
      items={themeSelectorTexts.themes}
      selectedCode={theme}
      onChange={setTheme}
      icon={<ThemeIcon />}
      ariaLabel="Select theme"
    />
  );
}