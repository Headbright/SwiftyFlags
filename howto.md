# How-to

`#if hasFeature(FeatureName)` can be used to evaluate if a specific feature is available:

```swift
#if hasFeature(StrictConcurrency)
#endif
```

Upcoming and experimental features can be enabled individually as build settings.

See [Proposa SE-0362](https://github.com/apple/swift-evolution/blob/main/proposals/0362-piecemeal-future-features.md) for more details.

## Upcoming

A compiler flag is available to enable specific features `-enable-upcoming-feature FeatureName`. In SPM, features can be enabled in `Package.swift` using the `enableUpcomingFeature` setting:

```swift
.target(
    name: "TargetName",
    swiftSettings: [
        .enableUpcomingFeature("FeatureName")
        ])
```

## Experimental

A compiler flag is available to enable specific features `-enable-experimental-feature FeatureName`. In SPM, features can be enabled in `Package.swift` using the `enableExperimentalFeature` setting:

```swift
.target(
    name: "TargetName",
    swiftSettings: [
        .enableExperimentalFeature("FeatureName")
        ])
```
