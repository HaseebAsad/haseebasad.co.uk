// src/config/site.ts
export const SITE = {
    website: "https://haseebbasad.co.uk/",
    author: "Haseeb Asad",
    desc: "Photography & Quant",
    title: "Haseeb Asad",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerPage: 3,
    scheduledPostMargin: 24 * 60 * 60 * 1000, // 24 hours, allows for testing
    showArchives: true,
    editPost: {
      url: "https://github.com/haseebasad",
      text: "Suggest Changes",
      appendFilePath: true,
    },
  } as const;
  
  export const LOCALE = {
    lang: "en",
    langTag: ["en-EN"],
  } as const;
  
  export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
  } as const;
  
  export type SocialObjects = {
    name: string;
    href: string;
    active: boolean;
    linkTitle: string;
  }[];
  
  export const SOCIALS: SocialObjects = [
    {
      name: "Github",
      href: "https://github.com/haseebasad",
      linkTitle: `${SITE.title} on Github`,
      active: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/haseeb-asad-535862177/",
      linkTitle: `${SITE.title} on LinkedIn`,
      active: true,
    },
  ] as const;