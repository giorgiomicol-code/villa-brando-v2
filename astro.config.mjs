import { defineConfig } from 'astro/config';

// Anteprima non pubblica: il site URL definitivo sarà impostato quando
// verrà scelto e autorizzato un ambiente di anteprima pubblico.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // Redirect provvisorio "/" → "/it/": comodità per l'anteprima, NON la
  // decisione finale. La scelta definitiva (default IT vs selettore lingua
  // in ingresso) va confermata da Giorgio — vedi docs/MIGRATION_PLAN.md.
  redirects: {
    '/': '/it/',
  },
});
