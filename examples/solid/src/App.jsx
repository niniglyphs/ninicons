import { For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { NiniBell, NiniClock, NiniCoffee, NiniGear, NiniHeart, NiniHome, NiniLeaf, NiniPlus, NiniRocket, NiniSearch, NiniSparkle } from '@ninicons/solid';

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

export default function App() {
  return (
    <div class="app">
      <aside class="side">
        <div class="brand">
          <NiniSparkle size={22} weight="fill" /> Nini Projects
        </div>
        <For each={nav}>
          {([icon, label], i) => (
            <a class="nav" href="#" aria-current={i() === 0 ? 'page' : undefined}>
              <Dynamic component={icon} size={20} /> <span>{label}</span>
            </a>
          )}
        </For>
      </aside>
      <main class="main">
        <div class="head">
          <h1>Projects</h1>
          <button class="button">
            <NiniPlus size={18} weight="bold" /> New project
          </button>
        </div>
        <section class="cards">
          <For each={cards}>
            {([icon, title, when]) => (
              <article class="card">
                <div class="mark">
                  <Dynamic component={icon} size={26} weight="duotone" />
                </div>
                <h2>{title}</h2>
                <div class="when">
                  <NiniClock size={16} /> {when}
                </div>
              </article>
            )}
          </For>
        </section>
        <section>
          <p class="label">One icon, seven weights</p>
          <div class="weights">
            <For each={weights}>
              {(w) => (
                <div class="weight">
                  <NiniRocket size={32} weight={w} /> {w}
                </div>
              )}
            </For>
          </div>
        </section>
        <p class="foot">Drawn with @ninicons/solid.</p>
      </main>
    </div>
  );
}
