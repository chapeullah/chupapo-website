import { site } from "@config/site.js";

export const footer = {
  themeSelector: {
    light: "Светлая",
    dark: "Тёмная",
    system: "Системная",
  },

  copyright: `${site.copyrightSymbol} ${site.year} ${site.chupapo.brand}. Все права защищены.`,

  pages: {
    title: "Страницы",

    home: "Главная",
    projects: "Проекты",
    about: "Обо мне",
    contacts: "Контакты",
  },
};
