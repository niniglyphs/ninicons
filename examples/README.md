# Ninicons examples

The same small screen, a projects app with a sidebar, three cards and one icon in all seven weights, built once for
every way there is to use Ninicons. Each folder stands on its own: open it, install, run. Or open it in the browser
from the Install page: the ones with a `cdn.html` open on CodePen with no build, the rest on StackBlitz with
only their own files to install. Next.js and UnoCSS open from this repository on StackBlitz.

| Example | Package | Run | In the browser |
|---|---|---|---|
| [html](html/) | none: SVG pasted from niniglyphs.com | open `index.html` | |
| [web-component](web-component/) | `@ninicons/web` | `npm i && npm run dev` (or open `cdn.html`: one script tag, no build) | [CodePen](https://niniglyphs.com/use/#web) |
| [react](react/) | `@ninicons/react` | `npm i && npm run dev` (or open `cdn.html`: an import map, no build) | [CodePen](https://niniglyphs.com/use/#react) |
| [next](next/) | `@ninicons/react` in a server component | `npm i && npm run dev` | [StackBlitz](https://stackblitz.com/github/niniglyphs/ninicons/tree/main/examples/next) |
| [vue](vue/) | `@ninicons/vue` | `npm i && npm run dev` (or open `cdn.html`: an import map, no build) | [CodePen](https://niniglyphs.com/use/#vue) |
| [svelte](svelte/) | `@ninicons/svelte` | `npm i && npm run dev` | [StackBlitz](https://niniglyphs.com/use/#svelte) |
| [solid](solid/) | `@ninicons/solid` | `npm i && npm run dev` (or open `cdn.html`: an import map, no build) | [CodePen](https://niniglyphs.com/use/#solid) |
| [angular](angular/) | `@ninicons/angular` | `npm i && npm run dev` | [StackBlitz](https://niniglyphs.com/use/#angular) |
| [tailwind](tailwind/) | `@ninicons/iconify` with `@iconify/tailwind4` | `npm i && npm run dev` | [StackBlitz](https://niniglyphs.com/use/#iconify) |
| [unocss](unocss/) | `@ninicons/iconify` with UnoCSS `presetIcons` | `npm i && npm run dev` | [StackBlitz](https://stackblitz.com/github/niniglyphs/ninicons/tree/main/examples/unocss) |
| [sprite](sprite/) | `@ninicons/core` sprites and `<use href>` | `npm i && npm run dev` | [StackBlitz](https://niniglyphs.com/use/#core) |
| [icon-font](icon-font/) | `@ninicons/font` | `npm i && npm run dev` (or open `cdn.html`: one stylesheet, no build) | [CodePen](https://niniglyphs.com/use/#font) |

Every example draws the same icons: `home`, `search`, `bell`, `heart`, `gear`, `plus`, `clock`, `sparkle`, `rocket`,
`leaf` and `coffee`, with the rocket in `thin`, `light`, `regular`, `semibold`, `bold`, `fill` and `duotone`.

Which to pick:

- **A framework app**: its component package. Bundles keep only the icons you import.
- **Plain HTML or a CMS**: the web component from a CDN, or paste the SVG.
- **Utility CSS**: the Tailwind or UnoCSS plugin with `@ninicons/iconify`. Icons become classes, generated only for
  the ones you use.
- **Places that only take text**: the icon font.
- **The sprites** carry every icon (1.5 MB per style), so they suit prototypes and internal tools.

MIT licensed, like the icons.
