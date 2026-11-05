# @ninicons/svelte

Every Ninicon as a Svelte 5 component. One component per icon, seven styles behind one `weight` prop.

```bash
npm i @ninicons/svelte
```

```svelte
<script>
  import { NiniRocket } from '@ninicons/svelte';
</script>

<NiniRocket />
<NiniRocket weight="bold" size={32} />
<NiniRocket weight="duotone" color="#d4502a" title="Launch" />
```

| Prop | Default | |
|---|---|---|
| `weight` | `regular` | `thin` `light` `regular` `semibold` `bold` `fill` `duotone` |
| `size` | `24` | width and height, a number of pixels or any CSS length |
| `color` | `currentColor` | follows the text colour unless set |
| `title` | | a label for screen readers; without one the icon is `aria-hidden` |

Any other attribute goes to the `<svg>`. The components ship as `.svelte` source, compiled by your app (SvelteKit,
Vite), and bundlers keep only the icons you import. Or import one by its path:
`import NiniRocket from '@ninicons/svelte/icons/rocket.svelte'`.

Names are the icon's name in PascalCase after `Nini`: `arrow-right` is `NiniArrowRight`. Browse them all at
[niniglyphs.com](https://niniglyphs.com).

MIT licensed.
