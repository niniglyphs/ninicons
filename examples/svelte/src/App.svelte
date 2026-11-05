<script>
  import { NiniBell, NiniClock, NiniCoffee, NiniGear, NiniHeart, NiniHome, NiniLeaf, NiniPlus, NiniRocket, NiniSearch, NiniSparkle } from '@ninicons/svelte';

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
</script>

<div class="app">
  <aside class="side">
    <div class="brand"><NiniSparkle size={22} weight="fill" /> Nini Projects</div>
    {#each nav as [Icon, label], i (label)}
      <a class="nav" href="#top" aria-current={i === 0 ? 'page' : undefined}><Icon size={20} /> <span>{label}</span></a>
    {/each}
  </aside>
  <main class="main">
    <div class="head">
      <h1>Projects</h1>
      <button class="button"><NiniPlus size={18} weight="bold" /> New project</button>
    </div>
    <section class="cards">
      {#each cards as [Icon, title, when] (title)}
        <article class="card">
          <div class="mark"><Icon size={26} weight="duotone" /></div>
          <h2>{title}</h2>
          <div class="when"><NiniClock size={16} /> {when}</div>
        </article>
      {/each}
    </section>
    <section>
      <p class="label">One icon, seven weights</p>
      <div class="weights">
        {#each weights as w (w)}
          <div class="weight"><NiniRocket size={32} weight={w} /> {w}</div>
        {/each}
      </div>
    </section>
    <p class="foot">Drawn with @ninicons/svelte.</p>
  </main>
</div>
