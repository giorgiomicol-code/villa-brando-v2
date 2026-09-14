import { defineConfig } from 'astro/config';

// Anteprima non pubblica: il site URL definitivo sarà impostato quando
// verrà scelto e autorizzato un ambiente di anteprima pubblico.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
});
