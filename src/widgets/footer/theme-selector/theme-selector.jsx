import SelectDropdown from "../select-dropdown/select-dropdown.jsx";
import ThemeIcon from "./icons/theme-icon.jsx";

import { useLanguage } from "@i18n/use-language.js";
import { useTheme } from "@theme/use-theme.js";

export default function ThemeSelector() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const i18n = t.footer.themeSelector;

  const themeItems = [
    {
      code: "light",
      label: i18n.light,
    },
    {
      code: "dark",
      label: i18n.dark,
    },
    {
      code: "system",
      label: i18n.system,
    },
  ];

  return (
    <SelectDropdown
      items={themeItems}
      selectedCode={theme}
      onChange={setTheme}
      icon={<ThemeIcon className="footer__selector-icon" />}
      ariaLabel="Select theme"
    />
  );
}
