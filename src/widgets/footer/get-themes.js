import { Themes } from "@theme/themes.js";

export function getThemes(i18n) {
  return Themes.map((code) => ({ code, label: i18n[code] }));
}
