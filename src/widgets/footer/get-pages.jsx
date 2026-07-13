export function getPages(i18n) {
  return [
    {
      id: "home",
      name: i18n.pages.home,
      link: "/",
    },
    {
      id: "projects",
      name: i18n.pages.projects,
      link: "/projects",
    },
    {
      id: "about",
      name: i18n.pages.about,
      link: "/about",
    },
    {
      id: "contacts",
      name: i18n.pages.contacts,
      link: "/contacts",
    },
  ];
}