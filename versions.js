/// Toolchain versions listed on the site, newest first.
/// `id` is used in the URL path, `url` points at that toolchain's Features.def.
export const versions = [
  {
    id: "6.4",
    url: "https://raw.githubusercontent.com/swiftlang/swift/swift-6.4.x-DEVELOPMENT-SNAPSHOT-2026-09-01-a/include/swift/Basic/Features.def",
  },
  {
    id: "6.3",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-6.3.3-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "6.2",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-6.2.4-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "6.1",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-6.1.3-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "6.0",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-6.0.3-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.10",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-5.10.1-RELEASE/include/swift/Basic/Features.def",
  },
  {
    id: "5.9",
    url: "https://raw.githubusercontent.com/swiftlang/swift/refs/tags/swift-5.9.2-RELEASE/include/swift/Basic/Features.def",
  },
];

export const versionIds = versions.map((v) => v.id);
