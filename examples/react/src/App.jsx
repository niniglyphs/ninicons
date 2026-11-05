import { NiniBell, NiniClock, NiniCoffee, NiniGear, NiniHeart, NiniHome, NiniLeaf, NiniPlus, NiniRocket, NiniSearch, NiniSparkle } from '@ninicons/react';

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
    <div className="app">
      <aside className="side">
        <div className="brand">
          <NiniSparkle size={22} weight="fill" /> Nini Projects
        </div>
        {nav.map(([Icon, label], i) => (
          <a key={label} className="nav" href="#" aria-current={i === 0 ? 'page' : undefined}>
            <Icon size={20} /> <span>{label}</span>
          </a>
        ))}
      </aside>
      <main className="main">
        <div className="head">
          <h1>Projects</h1>
          <button className="button">
            <NiniPlus size={18} weight="bold" /> New project
          </button>
        </div>
        <section className="cards">
          {cards.map(([Icon, title, when]) => (
            <article key={title} className="card">
              <div className="mark">
                <Icon size={26} weight="duotone" />
              </div>
              <h2>{title}</h2>
              <div className="when">
                <NiniClock size={16} /> {when}
              </div>
            </article>
          ))}
        </section>
        <section>
          <p className="label">One icon, seven weights</p>
          <div className="weights">
            {weights.map((w) => (
              <div key={w} className="weight">
                <NiniRocket size={32} weight={w} /> {w}
              </div>
            ))}
          </div>
        </section>
        <p className="foot">Drawn with @ninicons/react.</p>
      </main>
    </div>
  );
}
