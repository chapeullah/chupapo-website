import SelectDropdown from "@ui/select-dropdown/index.js";
import ThemeIcon from "@icons/theme/theme-icon.jsx";

import { useLanguage } from "@i18n/use-language.js";
import { useTheme } from "@theme/use-theme.js";
import { getThemes } from "@widgets/footer/get-themes.js";

export default function ThemeSelector() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const i18n = t.footer.themeSelector;

  return (
    <SelectDropdown
      items={getThemes(i18n)}
      selectedCode={theme}
      onChange={setTheme}
      icon={<ThemeIcon className="footer__selector-icon" />}
      ariaLabel="Select theme"
    />
  );
}
