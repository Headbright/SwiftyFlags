---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
import { data } from '/flags.data.js'

const neededVersion = params.value.version;

const languageFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "feature")[0]);

const upcomingFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "upcoming")[0]);

const experimentalFeatures = data.flags.filter(f => f.versions.includes(neededVersion) && f.types.filter(t => t.v === neededVersion && t.value === "experimental")[0]);

</script>

# Feature flags `{{ neededVersion }}`

## Upcoming

<div><a href="/howto#upcoming" target="_blank">📖 How to enable</a></div>
<div v-for="flag of upcomingFeatures" class="feature">
    <h3 :id="flag.name">{{ flag.name }}</h3>
    <ul>
        <li><a :href="flag.docsUrl" target="_blank">🔍 Mentions in proposals</a></li>
        <li v-for="link in flag.extraLinks"><a :href="link.url" target="_blank">💡 {{ link.title }}</a></li>
    </ul>
</div>

## Experimental

<div><a href="/howto#experimental" target="_blank">📖 How to enable</a></div>
<div v-for="flag of experimentalFeatures" class="feature">
    <h3 :id="flag.name">{{ flag.name }}</h3>
    <ul>
        <li><a :href="flag.docsUrl" target="_blank">🔍 Mentions in proposals</a></li>
        <li v-for="link in flag.extraLinks"><a :href="link.url" target="_blank">💡 {{ link.title }}</a></li>
    </ul>
</div>

## Stable

<div v-for="flag of languageFeatures" class="feature">
    <h3 :id="flag.name">{{ flag.name }}</h3>
    <p>{{ flag.descriptions.filter(d => d.v === neededVersion)[0]?.value }}</p>
    <a :href="flag.docsUrl" target="_blank">🔍 Mentions in proposals</a>
</div>
