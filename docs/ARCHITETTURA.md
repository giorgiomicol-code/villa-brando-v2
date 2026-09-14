# Scelta tecnica — Villa Brando V2

## Stack scelto: Astro (static output)

Data: 2026-09-14

### Motivazione

CLAUDE.md richiede: sito statico, mobile-first, performance-first, JS minimo,
contenuti separati dal layout dove possibile, componenti condivisi per header/
nav/footer/contatti/CTA, URL puliti, bilingue IT/EN con URL separati
(`/it/`, `/en/`), hreflang, sitemap, canonical e dati strutturati.

Astro è stato scelto perché:

- **Output statico nativo** (`output: 'static'`): nessun runtime server richiesto,
  ottimo per Core Web Vitals; JavaScript lato client è opt-in per componente
  (di default zero JS spedito).
- **Componenti condivisi** (`.astro`) per Header, Footer, ContactStrip,
  WhatsApp float, Booking card: un solo punto di manutenzione per elemento
  ricorrente, come richiesto.
- **Routing a file system** con cartelle `src/pages/it/` e `src/pages/en/`:
  produce naturalmente URL separati per lingua senza bisogno di un router
  o di un plugin i18n complesso, e permette hreflang/canonical espliciti
  per pagina.
- **Contenuto separabile dal markup**: i testi vivono in file dati
  (`src/data/*.ts`) importati dai template, così un aggiornamento testuale
  non richiede di toccare la struttura HTML/CSS.
- **Immagini**: supporto integrato per ottimizzazione/lazy-loading quando le
  foto verranno spostate da hotlink CDN a file locali in `public/images/`.
- **Nessun nuovo booking engine**: Astro non introduce dipendenze da servizi
  di prenotazione; il collegamento a `direct-book.com/properties/villabrando`
  resta un link esterno invariato.

### Alternative considerate

- **Next.js (static export)**: più pesante per un sito quasi interamente
  statico; il suo runtime React aggiunge JS non necessario per pagine che
  non hanno interattività complessa.
- **HTML statico + build step manuale**: avrebbe richiesto reimplementare a
  mano templating, routing i18n e generazione sitemap — Astro fornisce
  questo out-of-the-box restando comunque "quasi zero JS" a runtime.

### Struttura cartelle

```
src/
  layouts/       layout condivisi (BaseLayout con <head>, meta, hreflang)
  components/    Header, Footer, ContactStrip, WhatsAppFloat, BookingCard, ecc.
  data/          contenuti testuali per pagina/lingua
  pages/
    it/          pagine in italiano
    en/          pagine in inglese (popolate quando il contenuto sarà fornito)
  styles/        design tokens e stili globali (da prototipo approvato)
public/
  images/
    hero/ rooms/ garden/ gallery/ experiences/ logo/
```

Questa struttura consente al proprietario di sostituire testi e immagini in
futuro senza toccare il codice dei componenti.

### Stato attuale

Sono implementate la Home italiana (`/it/`) e quella inglese (`/en/`), più
una pagina per ogni sezione dell'IA approvata in entrambe le lingue, segnata
"contenuto in arrivo" finché non arriva il censimento parola-per-parola.

I contenuti condivisi (menu, footer, contatti) stanno in `site.it.ts` e
`site.en.ts`; i componenti comuni li scelgono tramite `site.ts` in base a una
prop `lang`, così header, footer e striscia contatti non sono duplicati per
lingua. Ogni pagina dichiara `altHref`, cioè la stessa pagina nell'altra
lingua: da lì derivano sia il selettore IT|EN sia gli `hreflang` reciproci.

Il testo inglese proviene dal riferimento visivo approvato e **non è ancora
stato verificato contro il sito live** (non raggiungibile da questo ambiente):
vedi `docs/MIGRATION_PLAN.md`.
