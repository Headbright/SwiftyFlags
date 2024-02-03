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

# Flags for Swift {{ neededVersion }}

## Language features

The `LANGUAGE_FEATURE` macro describes each named feature that is introduced in Swift. It allows Swift code to check for a particular feature with `#if $FeatureName` in source code. e.g.

```swift
#if hasFeature(StrictConcurrency)
#endif
```

<div v-for="flag of languageFeatures">
    <h3>{{ flag.name }}</h3>
    <p>{{ flag.descriptions.filter(d => d.v === neededVersion)[0]?.value }}</p>
</div>

## Upcoming features

Can be enabled in a `Package.swift` using the `enableUpcomingFeature` setting.

<div v-for="flag of upcomingFeatures">
        <h3>{{ flag.name }}</h3>
    </div>

## Experimental features

Can be enabled in a `Package.swift` using the `enableExperimentalFeature` setting.

<div v-for="flag of experimentalFeatures">
        <h3>{{ flag.name }}</h3>
    </div>
