# Ninicons

2,972 icons, drawn by hand with one pen on a 32-unit grid, in seven styles: thin, light, regular, semibold,
bold, fill and duotone. MIT licensed. Browse them all at [niniglyphs.com](https://niniglyphs.com).

| Style | Stroke | |
|---|---|---|
| thin | 0.5 | |
| light | 1.5 | |
| regular | 2 | the drawing every other style comes from |
| semibold | 2.5 | |
| bold | 3 | |
| fill | | solid shapes, with the details knocked out |
| duotone | 2 | the regular drawing over a 20% tint |

## Packages

Every package draws the same drawings and uses one name, `nini`.

| | Package | |
|---|---|---|
| React, Preact, Next.js | [`@ninicons/react`](packages/react) | `<NiniRocket weight="bold" />` |
| Vue, Nuxt | [`@ninicons/vue`](packages/vue) | `<NiniRocket weight="bold" />` |
| Svelte 5, SvelteKit | [`@ninicons/svelte`](packages/svelte) | `<NiniRocket weight="bold" />` |
| Solid | [`@ninicons/solid`](packages/solid) | `<NiniRocket weight="bold" />` |
| Angular 17+ | [`@ninicons/angular`](packages/angular) | `<nini-icon [icon]="rocket" weight="bold" />` |
| HTML, any framework | [`@ninicons/web`](packages/web) | `<nini-icon name="rocket" weight="bold">` |
| Tailwind CSS, UnoCSS, Iconify | [`@ninicons/iconify`](packages/iconify) | `icon-[nini--rocket-bold]`, `i-nini-rocket-bold` |
| SVG files and sprites | [`@ninicons/core`](packages/core) | `svg/bold/rocket.svg` |
| Icon font | [`@ninicons/font`](packages/font) | `<i class="nini-bold nini-rocket">` |

```bash
npm i @ninicons/react
```

```jsx
import { NiniRocket } from '@ninicons/react';

<NiniRocket weight="duotone" size={32} />
```

Every package is checked before each release: every icon, in every style, is drawn through the package and compared
with the SVG files in [`svg/`](svg), 20,804 drawings per package.

## Examples

[`examples/`](examples) builds the same small app with each package: React, Next.js, Vue, Svelte, Solid, Angular,
the web component, Tailwind CSS, UnoCSS, the sprites, the icon font and plain HTML. Each opens on StackBlitz from
its folder, linked in [`examples/README.md`](examples/README.md).

## The files

- [`svg/<style>/<name>.svg`](svg): every icon as a plain SVG, in `currentColor`, with no masks or ids.
- [`icons.json`](icons.json): every icon's name, category, search tags and the release that added it.

## Missing an icon?

[Request one](https://github.com/niniglyphs/ninicons/issues/new?template=request-an-icon.yml). Found something
drawn wrong? [Tell us](https://github.com/niniglyphs/ninicons/issues/new?template=bug.yml).

The icons are drawn in a separate studio and released here, so pull requests to the drawings can't be merged; an
issue is the way to ask for a change. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

MIT. Use the icons in anything, commercial or not; no credit needed, though it is always welcome.

Ninicons is part of [Niniglyphs](https://niniglyphs.com), with the typefaces
[Nini Sans](https://github.com/niniglyphs/nini-sans) and [Nini Mono](https://github.com/niniglyphs/nini-mono).
