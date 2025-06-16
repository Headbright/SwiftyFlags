---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SwiftyFlags"
  text: "Swift language feature flags"
  # tagline: What are you going to build today?
  actions:
    - theme: brand
      text: Swift 6.1.2
      link: /language-features/6.1.2
    - theme: alt
      text: Swift 6.2-2025-06-14 (unreleased)
      link: /language-features/6.2-2025-06-14
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
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #F05137);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #F05137 50%);
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

<aside data-fbb-feedback="94aba706-e846-4be0-87fe-c1367d069155"
data-fbb-widget:title="Get in touch"
data-fbb-widget:text-placeholder="Message"
data-fbb-widget:primary-color="#F05137"
data-fbb-widget:primary-dark-color="#F05137"
data-fbb-widget:hover-dark-color="#F69787"
data-fbb-widget:hover-color="#F69787"
/>
