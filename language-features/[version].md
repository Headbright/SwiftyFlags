---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
import { data } from '/flags.data.js'

const neededVersion = params.value.version
const languageFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "feature")[0]);
const upcomingFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "upcoming")[0]);
const experimentalFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "experimental")[0]);

</script>

# Feature flags

Swift compiler version `{{ neededVersion }}`

In code, `#if hasFeature(FeatureName)` can be used to evaluate if a specific feature is available:

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

<div v-for="flag of upcomingFeatures">
        <a :href="flag.docsUrl" target="_bank"><h3>{{ flag.name }}</h3></a>
    </div>

## Experimental

A compiler flag is available to enable specific features `-enable-experimental-feature FeatureName`. In SPM, features can be enabled in `Package.swift` using the `enableExperimentalFeature` setting:

```swift
.target(
    name: "TargetName",
    swiftSettings: [
        .enableExperimentalFeature("FeatureName")
        ])
```

<div v-for="flag of experimentalFeatures">
        <a :href="flag.docsUrl" target="_bank"><h3>{{ flag.name }}</h3></a>
    </div>

## Stable

<div v-for="flag of languageFeatures">
    <a :href="flag.docsUrl" target="_bank"><h3>{{ flag.name }}</h3></a>
    <p>{{ flag.descriptions.filter(d => d.v === neededVersion)[0]?.value }}</p>
</div>
