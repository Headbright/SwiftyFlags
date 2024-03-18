import { defineConfig } from "vitepress";

const versions = ["6.0", "5.10", "5.9", "5.8", "5.7"].map((v) => {
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
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content: "SwiftyFlags | Swift compiler flags reference",
      },
    ],
    ["meta", { property: "og:site_name", content: "SwiftyFlags" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://flags.swiftythemes.com/opengraph.jpeg",
      },
    ],
    [
      "meta",
      { property: "og:url", content: "https://flags.swiftythemes.com/" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.feedbackbulb.com/packages/web-v1.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.feedbackbulb.com/packages/web-v1.js",
        type: "text/javascript",
        defer: "",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js",
        [`data-app-id`]: "9F801353-5EF3-45BA-B6B7-5493E5841EF9",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "algolia",
      options: {
        appId: "QBSOKNFK8H",
        apiKey: "206be92ec88616940f6722493106cc25",
        indexName: "flags-swiftythemes",
      },
    },
    logo: "/logo.png",
    lastUpdated: true,
    cleanUrls: true,
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: "How-to",
        link: "/howto",
      },
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
      message:
        "For feedback, please open a <a href='https://github.com/Headbright/SwiftyFlags'>GitHub</a> issue.",
      copyright:
        "Created by <a href='https://github.com/kkostov'>Konstantin</a> under BSD 3-Clause License",
    },
  },
  transformPageData(pageData) {
    if (pageData.title === "Feature flags {{ neededVersion }}") {
      pageData.title = `Feature flags ${pageData.params.version}`;
    }
  },
});
