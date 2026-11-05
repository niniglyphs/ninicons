import { Component } from '@angular/core';
import { NiniBell, NiniClock, NiniCoffee, NiniGear, NiniHeart, NiniHome, NiniIcon, NiniLeaf, NiniPlus, NiniRocket, NiniSearch, NiniSparkle, NiniWeight } from '@ninicons/angular';

@Component({
  selector: 'app-root',
  imports: [NiniIcon],
  template: `
    <div class="app">
      <aside class="side">
        <div class="brand"><nini-icon [icon]="sparkle" [size]="22" weight="fill" /> Nini Projects</div>
        @for (n of nav; track n.label; let i = $index) {
          <a class="nav" href="#" [attr.aria-current]="i === 0 ? 'page' : null"><nini-icon [icon]="n.icon" [size]="20" /> <span>{{ n.label }}</span></a>
        }
      </aside>
      <main class="main">
        <div class="head">
          <h1>Projects</h1>
          <button class="button"><nini-icon [icon]="plus" [size]="18" weight="bold" /> New project</button>
        </div>
        <section class="cards">
          @for (c of cards; track c.title) {
            <article class="card">
              <div class="mark"><nini-icon [icon]="c.icon" [size]="26" weight="duotone" /></div>
              <h2>{{ c.title }}</h2>
              <div class="when"><nini-icon [icon]="clock" [size]="16" /> {{ c.when }}</div>
            </article>
          }
        </section>
        <section>
          <p class="label">One icon, seven weights</p>
          <div class="weights">
            @for (w of weights; track w) {
              <div class="weight"><nini-icon [icon]="rocket" [size]="32" [weight]="w" /> {{ w }}</div>
            }
          </div>
        </section>
        <p class="foot">Drawn with &#64;ninicons/angular.</p>
      </main>
    </div>
  `,
})
export class App {
  sparkle = NiniSparkle;
  plus = NiniPlus;
  clock = NiniClock;
  rocket = NiniRocket;
  nav = [
    { icon: NiniHome, label: 'Home' },
    { icon: NiniSearch, label: 'Search' },
    { icon: NiniBell, label: 'Inbox' },
    { icon: NiniHeart, label: 'Saved' },
    { icon: NiniGear, label: 'Settings' },
  ];
  cards = [
    { icon: NiniRocket, title: 'Launch plan', when: '2 days left' },
    { icon: NiniLeaf, title: 'Garden club', when: 'Next week' },
    { icon: NiniCoffee, title: 'Morning notes', when: 'Today' },
  ];
  weights: NiniWeight[] = ['thin', 'light', 'regular', 'semibold', 'bold', 'fill', 'duotone'];
}
