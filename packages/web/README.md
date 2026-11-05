# @ninicons/web

Every Ninicon as a `<nini-icon>` web component, for plain HTML and for any framework.

## From a CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ninicons/web@1/dist/index.js"></script>

<nini-icon name="rocket"></nini-icon>
<nini-icon name="rocket" weight="bold" size="32"></nini-icon>
<nini-icon name="rocket" weight="duotone" color="#d4502a" label="Launch"></nini-icon>
```

Each icon is fetched once, the first time a page uses it, from the same CDN.

## In a bundled app

```bash
npm i @ninicons/web
```

```js
import { register } from '@ninicons/web';
import rocket from '@ninicons/web/icons/rocket.js';

register(rocket); // drawn straight away, nothing fetched
```

To serve the icons yourself, copy `dist/icons/` and point the element at it with `setBase('/icons/')`.

| Attribute | Default | |
|---|---|---|
| `name` | | the icon's name, e.g. `rocket`, `arrow-right` |
| `weight` | `regular` | `thin` `light` `regular` `semibold` `bold` `fill` `duotone` |
| `size` | `24` | width and height, a number of pixels or any CSS length |
| `color` | `currentColor` | follows the text colour unless set |
| `label` | | a label for screen readers; without one the icon is `aria-hidden` |

Every attribute can change later and the icon redraws. `svg(icon, { weight, size, color, title })` returns the
markup as a string, for server-rendered pages.

Browse every name at [niniglyphs.com](https://niniglyphs.com).

MIT licensed.
