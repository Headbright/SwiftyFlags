import { defineConfig } from "vitepress";

const versions = ["5.9", "5.8", "5.7", "5.6"].map((v) => {
  return { text: v, link: `/language-features/${v}` };
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftyFlags",
  description: "List of Swift meta-programming language features",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // search: {
    //   provider: "local",
    // },
    logo: "/logo.png",
    lastUpdated: true,
    cleanUrls: true,
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '...',
    //     apiKey: '...',
    //     indexName: '...'
    //   }
    // },
    sidebar: [
      {
        text: "by Swift Version",
        items: versions,
      },
    ],

    outline: {
      level: 3,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Headbright/SwiftyFlags" },
    ],
    footer: {
      message: "For feedback, please open a GitHub issue.",
      copyright:
        "Created by <a href='https://github.com/kkostov'>Konstantin</a>",
    },
  },
});
