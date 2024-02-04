---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SwiftyFlags"
  text: "Swift language features flags"
  # tagline: What are you going to build today?
  actions:
    - theme: brand
      text: Swift 5.9
      link: /language-features/5.9
    - theme: alt
      text: Swift 5.8
      link: /language-features/5.8
    - theme: alt
      text: Swift 5.7
      link: /language-features/5.7
  image:
    src: /swiftyflags.webp
    alt: SwiftyFlags
features:
  - title: About
    details: This page was created as a reference listing all available compiler flags for upcoming and experimental features. Stable features are also listed per toolchain version.
  - title: Updates
    details: The Swift source repository is checked for changes once a day.
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
