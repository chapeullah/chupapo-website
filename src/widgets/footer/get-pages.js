import { navigation } from "@config/navigation.js";

export function getPages(i18n) {
  const footerPageIds = ["home", "projects", "about", "contacts"];

  return footerPageIds.map((id) => ({
    ...navigation[id],
    name: i18n.pages[id],
  }));
}
