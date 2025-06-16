const versions = [
  {
    id: "6.2-2025-06-14",
    url: "https://raw.githubusercontent.com/apple/swift/6.2-snapshot-2025-06-14/include/swift/Basic/Features.def",
  },
  {
    id: "6.1.2",
    url: "https://raw.githubusercontent.com/apple/swift/swift-6.1.2-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "6.0",
    url: "https://raw.githubusercontent.com/apple/swift/release/6.0/include/swift/Basic/Features.def",
  },
  {
    id: "5.10",
    url: "https://raw.githubusercontent.com/apple/swift/swift-5.10-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.9",
    url: "https://raw.githubusercontent.com/apple/swift/swift-5.9.2-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.8",
    url: "https://raw.githubusercontent.com/apple/swift/swift-5.8.1-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.7",
    url: "https://raw.githubusercontent.com/apple/swift/swift-5.7.3-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.6",
    url: "https://raw.githubusercontent.com/apple/swift/swift-5.6.3-RELEASE/include/swift/Basic/Features.def",
  },
];

/// Extra links to be added to specific features
const extraLinks = [
  {
    feature: "StrictConcurrency",
    links: [
      {
        title: "An Introduction to Isolation in Swift",
        url: "https://www.massicotte.org/intro-to-isolation",
      },
      {
        title: "Data-race safety in Swift 5.10",
        url: "https://www.swift.org/blog/swift-5.10-released/#data-race-safety-in-swift-510",
      },
      {
        title: "The Swift Book: Concurrency",
        url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/",
      },
      {
        title: "How to determine where tasks and async functions run in Swift?",
        url: "https://www.donnywals.com/how-to-determine-where-tasks-and-async-functions-run-in-swift/?utm_source=swiftyflags",
      },
    ],
  },
];

const regexLanguageFeature = /(?<=LANGUAGE_FEATURE\()[^,]+(?=,)|"([^"]+)"/gm;
const regexUpcomingFeature = /(?<=UPCOMING_FEATURE\()[^,]+(?=,)/gm;
const regexExperimentalFeature = /(?<=EXPERIMENTAL_FEATURE\()[^,]+(?=,)/gm;

// features from exampels and others we don't want to show up
const blackListedFeatures = [
  '"#if $FeatureName"',
  '"langOpts.<option name>"',
  "FeatureName",
];

export default {
  async load() {
    const remoteFeatures = await Promise.all(
      versions.map(async (v) => {
        const response = await fetch(v.url);
        const text = await response.text();
        // LANGUAGE_FEATURE(...
        const rows = text.split("\n");
        const languageFeatures = rows
          .map((row) => {
            const match = row.match(regexLanguageFeature);
            if (match) {
              return {
                name: match[0].trim(),
                description: (match[1]?.trim() ?? "").replace(/"/g, ""),
                type: "feature",
                version: v.id,
              };
            }
            return null;
          })
          .filter((f) => f !== null)
          .sort((a, b) => a.name.localeCompare(b.name));

        // UPCOMING_FEATURE(...
        const upcomingFeatureMatches = text.match(regexUpcomingFeature);
        const upcomingFeatures = (upcomingFeatureMatches ?? [])
          .map((m) => {
            return {
              name: m.trim(),
              type: "upcoming",
              version: v.id,
            };
          })
          .flat()
          .sort((a, b) => a.name.localeCompare(b.name));

        // EXPERIMENTAL_FEATURE(...
        const experimentalFeatureMatches = text.match(regexExperimentalFeature);
        const experimentalFeatures = (experimentalFeatureMatches ?? [])
          .map((m) => {
            return {
              name: m.trim(),
              type: "experimental",
              version: v.id,
            };
          })
          .flat()
          .sort((a, b) => a.name.localeCompare(b.name));

        return languageFeatures
          .concat(upcomingFeatures)
          .concat(experimentalFeatures);
      })
    );

    const groupedFeatures = remoteFeatures
      .flat()
      .filter((f) => !blackListedFeatures.includes(f.name))
      .reduce((acc, obj) => {
        let key = obj.name;
        if (!acc[key]) {
          acc[key] = {
            name: key,
            types: [],
            versions: [],
            descriptions: [],
            docsUrl: `https://www.swift.org/swift-evolution/#?search=${key}`,
          };
        }
        if (!acc[key].versions.includes(obj.version)) {
          acc[key].versions.push(obj.version);
          acc[key].descriptions.push({
            v: obj.version,
            value: obj.description,
          });
          acc[key].types.push({ v: obj.version, value: obj.type });
        }
        return acc;
      }, {});
    const list = Object.values(groupedFeatures).map((f) => {
      const extraLink = extraLinks.find((el) => el.feature === f.name);
      if (extraLink) {
        f.extraLinks = extraLink.links;
      } else {
        f.extraLinks = [];
      }
      return f;
    });
    return {
      flags: list,
    };
  },
};
