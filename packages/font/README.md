# @ninicons/font

Every Ninicon as an icon font: seven fonts, one per style, and one stylesheet.

```bash
npm i @ninicons/font
```

```js
import '@ninicons/font'; // or <link rel="stylesheet" href="…/@ninicons/font/dist/nini.css">
```

```html
<i class="nini nini-rocket"></i>
<i class="nini-bold nini-rocket"></i>
<i class="nini-duotone nini-rocket" style="color: #d4502a"></i>
```

The first class picks the style: `nini` (regular), `nini-thin`, `nini-light`, `nini-semibold`, `nini-bold`,
`nini-fill` or `nini-duotone`. The second picks the icon. Icons take the text's `font-size` and `color`. Only the
fonts a page uses are downloaded; to ship one style alone, use `nini-<style>.css` in place of `nini.css`.

A font fills shapes, so every stroke is outlined at its style's stroke width when the fonts are built. Prefer the
SVG packages where you can; the font is for places that only take text.

Codepoints live in the Private Use Area (`codepoints.json`) and never change once an icon has one. Duotone's tint is
a second glyph per icon, drawn under the line glyph by the stylesheet. The `.otf` files are there for design apps.

MIT licensed.
