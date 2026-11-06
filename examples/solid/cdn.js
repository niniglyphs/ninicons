import { For } from 'solid-js';
import { Dynamic, render } from 'solid-js/web';
import html from 'solid-js/html';
// One module per icon: in a project, import { NiniBell, ... } from '@ninicons/solid' and the bundler keeps only these.
import { NiniBell } from '@ninicons/solid/icons/bell';
import { NiniClock } from '@ninicons/solid/icons/clock';
import { NiniCoffee } from '@ninicons/solid/icons/coffee';
import { NiniGear } from '@ninicons/solid/icons/gear';
import { NiniHeart } from '@ninicons/solid/icons/heart';
import { NiniHome } from '@ninicons/solid/icons/home';
import { NiniLeaf } from '@ninicons/solid/icons/leaf';
import { NiniPlus } from '@ninicons/solid/icons/plus';
import { NiniRocket } from '@ninicons/solid/icons/rocket';
import { NiniSearch } from '@ninicons/solid/icons/search';
import { NiniSparkle } from '@ninicons/solid/icons/sparkle';

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

// Solid's tagged templates stand in for JSX where there is no compiler: <${Component} prop=${value} />
const App = () => html`
  <div class="app">
    <aside class="side">
      <div class="brand"><${NiniSparkle} size=${22} weight="fill" /> Nini Projects</div>
      <${For} each=${nav}>
        ${([icon, label], i) => html`
          <a class="nav" href="#" aria-current=${() => (i() === 0 ? 'page' : undefined)}>
            <${Dynamic} component=${icon} size=${20} /> <span>${label}</span>
          </a>`}
      <//>
    </aside>
    <main class="main">
      <div class="head">
        <h1>Projects</h1>
        <button class="button"><${NiniPlus} size=${18} weight="bold" /> New project</button>
      </div>
      <section class="cards">
        <${For} each=${cards}>
          ${([icon, title, when]) => html`
            <article class="card">
              <div class="mark"><${Dynamic} component=${icon} size=${26} weight="duotone" /></div>
              <h2>${title}</h2>
              <div class="when"><${NiniClock} size=${16} /> ${when}</div>
            </article>`}
        <//>
      </section>
      <section>
        <p class="label">One icon, seven weights</p>
        <div class="weights">
          <${For} each=${weights}>
            ${(w) => html`<div class="weight"><${NiniRocket} size=${32} weight=${w} /> ${w}</div>`}
          <//>
        </div>
      </section>
      <p class="foot">Drawn with @ninicons/solid from a CDN.</p>
    </main>
  </div>`;

render(App, document.getElementById('app'));
