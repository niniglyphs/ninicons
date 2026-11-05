import thin from '@ninicons/core/sprite/thin.svg?url';
import light from '@ninicons/core/sprite/light.svg?url';
import regular from '@ninicons/core/sprite/regular.svg?url';
import semibold from '@ninicons/core/sprite/semibold.svg?url';
import bold from '@ninicons/core/sprite/bold.svg?url';
import fill from '@ninicons/core/sprite/fill.svg?url';
import duotone from '@ninicons/core/sprite/duotone.svg?url';
import './style.css';

// Each style is one sprite file; Vite serves it from this site, which <use href> needs (no cross-origin sprites).
const sprites = { thin, light, regular, semibold, bold, fill, duotone };
for (const use of document.querySelectorAll('use[data-icon]')) {
  const [weight, name] = use.dataset.icon.split(':');
  use.setAttribute('href', `${sprites[weight]}#nini-${name}`);
}
