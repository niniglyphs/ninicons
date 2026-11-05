# @ninicons/react

Every Ninicon as a React component. One component per icon, seven styles behind one `weight` prop.

```bash
npm i @ninicons/react
```

```jsx
import { NiniRocket } from '@ninicons/react';

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

Any other prop (`className`, `style`, `onClick`, a `ref`) goes to the `<svg>`.

Icons are plain ES modules with no hooks or context, so they work in React 18 and 19, Preact (`preact/compat`),
server rendering and React Server Components. Bundlers keep only the icons you import. To skip the barrel file
entirely, import one icon by its path:

```jsx
import { NiniRocket } from '@ninicons/react/icons/rocket';
```

Names are the icon's name in PascalCase after `Nini`: `arrow-right` is `NiniArrowRight`. Browse them all at
[niniglyphs.com](https://niniglyphs.com).

MIT licensed.
