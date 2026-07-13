import previewEnDark from "@assets/projects/chupapo-website/preview-en-dark.webp";
import previewEnLight from "@assets/projects/chupapo-website/preview-en-light.webp";
import previewRuDark from "@assets/projects/chupapo-website/preview-ru-dark.webp";
import previewRuLight from "@assets/projects/chupapo-website/preview-ru-light.webp";

export const chupapoWebsite = {
  id: "chupapo-website",

  previews: {
    ru: {
      dark: previewRuDark,
      light: previewRuLight,
    },
    en: {
      dark: previewEnDark,
      light: previewEnLight,
    },
  },

  owner: {
    name: "Chupapo",
    link: "https://github.com/chapeullah",
  },

  link: "https://github.com/chapeullah/website",

  tags: [
    {
      id: "react",
      name: "React",
    },
    {
      id: "vite",
      name: "Vite",
    },
    {
      id: "javascript",
      name: "JavaScript",
    },
    {
      id: "html",
      name: "HTML",
    },
    {
      id: "css",
      name: "CSS",
    },
  ],

  releaseDate: "2026-06-24",
};