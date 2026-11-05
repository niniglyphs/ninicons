import { defineConfig, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    // Icons as classes: i-nini-rocket, i-nini-rocket-bold, … (only the ones used are generated).
    presetIcons({ collections: { nini: () => import('@ninicons/iconify').then((m) => m.icons) } }),
  ],
});
