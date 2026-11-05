<script setup>
import { NiniBell, NiniClock, NiniCoffee, NiniGear, NiniHeart, NiniHome, NiniLeaf, NiniPlus, NiniRocket, NiniSearch, NiniSparkle } from '@ninicons/vue';

const nav = [
  [NiniHome, 'Home'],
  [NiniSearch, 'Search'],
  [NiniBell, 'Inbox'],
  [NiniHeart, 'Saved'],
  [NiniGear, 'Settings'],
];
const cards = [
  [NiniRocket, 'Launch plan', '2 days left'],
  [NiniLeaf, 'Garden club', 'Next week'],
  [NiniCoffee, 'Morning notes', 'Today'],
];
const weights = ['thin', 'light', 'regular', 'semibold', 'bold', 'fill', 'duotone'];
</script>

<template>
  <div class="app">
    <aside class="side">
      <div class="brand"><NiniSparkle :size="22" weight="fill" /> Nini Projects</div>
      <a v-for="([icon, label], i) in nav" :key="label" class="nav" href="#" :aria-current="i === 0 ? 'page' : undefined">
        <component :is="icon" :size="20" /> <span>{{ label }}</span>
      </a>
    </aside>
    <main class="main">
      <div class="head">
        <h1>Projects</h1>
        <button class="button"><NiniPlus :size="18" weight="bold" /> New project</button>
      </div>
      <section class="cards">
        <article v-for="[icon, title, when] in cards" :key="title" class="card">
          <div class="mark"><component :is="icon" :size="26" weight="duotone" /></div>
          <h2>{{ title }}</h2>
          <div class="when"><NiniClock :size="16" /> {{ when }}</div>
        </article>
      </section>
      <section>
        <p class="label">One icon, seven weights</p>
        <div class="weights">
          <div v-for="w in weights" :key="w" class="weight"><NiniRocket :size="32" :weight="w" /> {{ w }}</div>
        </div>
      </section>
      <p class="foot">Drawn with @ninicons/vue.</p>
    </main>
  </div>
</template>
