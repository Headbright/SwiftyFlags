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

# Feature flags `{{ neededVersion }}`

## Upcoming

<div v-for="flag of upcomingFeatures">
    <h3>{{ flag.name }}</h3>
    <a :href="flag.docsUrl" target="_bank">🔍 Mentions in proposals</a>
</div>

## Experimental

<div v-for="flag of experimentalFeatures">
    <h3>{{ flag.name }}</h3>
    <a :href="flag.docsUrl" target="_bank">🔍 Mentions in proposals</a>
</div>

## Stable

<div v-for="flag of languageFeatures">
    <h3>{{ flag.name }}</h3>
    <a :href="flag.docsUrl" target="_bank">🔍 Mentions in proposals</a>
    <p>{{ flag.descriptions.filter(d => d.v === neededVersion)[0]?.value }}</p>
</div>
