// src/config/site.ts
export const SITE = {
    website: "https://haseebbasad.co.uk/",
    author: "Haseeb Asad",
    desc: "Photography & Quantitative Trading",
    title: "Haseeb Asad",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerPage: 3,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    showArchives: true,
    editPost: {
      url: "https://github.com/yourusername/blog/edit/main/content/blog",
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
      href: "https://github.com/yourusername",
      linkTitle: `${SITE.title} on Github`,
      active: true,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      linkTitle: `${SITE.title} on LinkedIn`,
      active: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      linkTitle: `${SITE.title} on Twitter`,
      active: true,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourusername",
      linkTitle: `${SITE.title} on Instagram`,
      active: true,
    },
  ] as const;