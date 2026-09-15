import { defineConfig } from 'astro/config';

// Su GitHub Pages il sito vive sotto /villa-brando-v2/, non sulla radice del
// dominio. Il percorso arriva dalla variabile PAGES_BASE, impostata solo dal
// workflow di deploy: in locale, su Vercel e sul futuro dominio definitivo
// resta "/" e non cambia nulla.
const base = process.env.PAGES_BASE || '/';
const baseNoSlash = base.replace(/\/$/, '');

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  base,
  // Redirect provvisorio "/" → "/it/": comodità per l'anteprima, NON la
  // decisione finale. La scelta definitiva (default IT vs selettore lingua
  // in ingresso) va confermata da Giorgio — vedi docs/MIGRATION_PLAN.md.
  redirects: {
    '/': `${baseNoSlash}/it/`,
  },
});
