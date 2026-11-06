import { createRoot } from 'react-dom/client';
import { html } from 'htm/react';
// One module per icon: in a project, import { NiniBell, ... } from '@ninicons/react' and the bundler keeps only these.
import { NiniBell } from '@ninicons/react/icons/bell';
import { NiniClock } from '@ninicons/react/icons/clock';
import { NiniCoffee } from '@ninicons/react/icons/coffee';
import { NiniGear } from '@ninicons/react/icons/gear';
import { NiniHeart } from '@ninicons/react/icons/heart';
import { NiniHome } from '@ninicons/react/icons/home';
import { NiniLeaf } from '@ninicons/react/icons/leaf';
import { NiniPlus } from '@ninicons/react/icons/plus';
import { NiniRocket } from '@ninicons/react/icons/rocket';
import { NiniSearch } from '@ninicons/react/icons/search';
import { NiniSparkle } from '@ninicons/react/icons/sparkle';

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

// htm stands in for JSX where there is no compiler: <${Component} prop=${value} /> is <Component prop={value} />
function App() {
  return html`
    <div className="app">
      <aside className="side">
        <div className="brand"><${NiniSparkle} size=${22} weight="fill" /> Nini Projects</div>
        ${nav.map(([Icon, label], i) => html`
          <a key=${label} className="nav" href="#" aria-current=${i === 0 ? 'page' : undefined}>
            <${Icon} size=${20} /> <span>${label}</span>
          </a>`)}
      </aside>
      <main className="main">
        <div className="head">
          <h1>Projects</h1>
          <button className="button"><${NiniPlus} size=${18} weight="bold" /> New project</button>
        </div>
        <section className="cards">
          ${cards.map(([Icon, title, when]) => html`
            <article key=${title} className="card">
              <div className="mark"><${Icon} size=${26} weight="duotone" /></div>
              <h2>${title}</h2>
              <div className="when"><${NiniClock} size=${16} /> ${when}</div>
            </article>`)}
        </section>
        <section>
          <p className="label">One icon, seven weights</p>
          <div className="weights">
            ${weights.map((w) => html`<div key=${w} className="weight"><${NiniRocket} size=${32} weight=${w} /> ${w}</div>`)}
          </div>
        </section>
        <p className="foot">Drawn with @ninicons/react from a CDN.</p>
      </main>
    </div>`;
}

createRoot(document.getElementById('root')).render(html`<${App} />`);
