import { defineConfig } from "vitepress";

const versions = ["5.9", "5.8", "5.7", "5.6"].map((v) => {
  return { text: v, link: `/language-features/${v}` };
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftyFlags",
  description: "List of Swift meta-programming language features",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // search: {
    //   provider: "local",
    // },
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

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
