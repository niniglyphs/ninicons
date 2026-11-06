# @ninicons/vue

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/niniglyphs/ninicons/main/.github/assets/packages/vue-dark.png">
  <img alt="npm i @ninicons/vue, import NiniRocket, and the duotone rocket it draws" src="https://raw.githubusercontent.com/niniglyphs/ninicons/main/.github/assets/packages/vue-light.png">
</picture>

Every Ninicon as a Vue 3 component. One component per icon, seven styles behind one `weight` prop.

```bash
npm i @ninicons/vue
```

```vue
<script setup>
import { NiniRocket } from '@ninicons/vue';
</script>

<template>
  <NiniRocket />
  <NiniRocket weight="bold" :size="32" />
  <NiniRocket weight="duotone" color="#d4502a" title="Launch" />
</template>
```

| Prop | Default | |
|---|---|---|
| `weight` | `regular` | `thin` `light` `regular` `semibold` `bold` `fill` `duotone` |
| `size` | `24` | width and height, a number of pixels or any CSS length |
| `color` | `currentColor` | follows the text colour unless set |
| `title` | | a label for screen readers; without one the icon is `aria-hidden` |

Classes, styles and listeners go to the `<svg>`. Works with Nuxt and server rendering; bundlers keep only the
icons you import, or import one by its path: `import { NiniRocket } from '@ninicons/vue/icons/rocket'`.

Names are the icon's name in PascalCase after `Nini`: `arrow-right` is `NiniArrowRight`. Browse them all at
[niniglyphs.com](https://niniglyphs.com).

MIT licensed.
