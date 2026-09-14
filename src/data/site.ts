// Registro dei contenuti condivisi per lingua: i componenti comuni
// (header, footer, contatti) scelgono da qui invece di essere duplicati.
import * as it from './site.it.ts';
import * as en from './site.en.ts';

export type Lang = 'it' | 'en';

export const site = { it, en };
