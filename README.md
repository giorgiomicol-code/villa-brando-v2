# Villa Brando V2

Nuovo sito web di **Villa Brando**, sviluppato separatamente dal sito attualmente online.

## Obiettivo

Realizzare e verificare le nuove pagine in un ambiente di prova, per poi sostituire progressivamente quelle esistenti senza interrompere il servizio e senza disperdere il traffico proveniente da Google.

## Stato del progetto

- Repository di sviluppo: questo repository
- Sito pubblico attuale: [villabrando.com](https://villabrando.com)
- Dominio principale: non collegato al nuovo progetto
- Pubblicazione: solo ambiente di anteprima fino ad approvazione esplicita

## Come si avvia

Serve [Node.js](https://nodejs.org/) 18 o superiore.

```bash
npm install     # una volta sola
npm run dev     # sviluppo, con ricarica automatica → http://localhost:4321
npm run build   # genera il sito statico nella cartella dist/
npm run preview # guarda il sito generato come sarà online
```

## Dove si modificano testi e foto

Non serve toccare il codice dei componenti:

| Cosa | File |
|---|---|
| Testi della Home italiana | `src/data/home.it.ts` |
| Testi della Home inglese | `src/data/home.en.ts` |
| Menu, footer, contatti, indirizzo, CIN | `src/data/site.it.ts` e `site.en.ts` |
| Colori e font | `src/styles/global.css` (tutto in variabili in cima al file) |
| Nomi delle camere | `src/data/rooms.it.ts` |
| Foto | `public/images/` (`hero/`, `rooms/`, `garden/`, `gallery/`, `experiences/`, `logo/`) |

Le foto oggi sono ancora collegate al CDN del sito attuale su Google Sites.
Per sostituirle: mettere il file in `public/images/...` e cambiare l'indirizzo
nel file dati corrispondente (es. `/images/hero/villa.jpg`).

## Struttura

```
src/
  pages/it/     una cartella per pagina → l'indirizzo del sito segue le cartelle
  layouts/      struttura comune delle pagine (head, header, footer)
  components/   pezzi riusati ovunque (header, footer, contatti, WhatsApp)
  data/         testi e link, separati dalla grafica
  styles/       colori e stili condivisi
public/         file serviti così come sono (immagini, robots.txt, favicon)
```

## Documenti di lavoro

- `docs/MIGRATION_PLAN.md` — matrice di migrazione, punti DA VERIFICARE, asset mancanti
- `docs/CENSIMENTO_CONTENUTI.md` — **modulo da compilare** con i testi delle pagine mancanti
- `docs/QA.md` — stato di contenuti, accessibilità, prestazioni e SEO tecnica
- `docs/ARCHITETTURA.md` — perché è stato scelto Astro

## Stato attuale

- Home italiana (`/it/`) e inglese (`/en/`): fatte, con palette oro e navy
  del riferimento approvato.
- Altre pagine: esistono e sono navigabili in entrambe le lingue, ma segnate
  "contenuto in arrivo" finché non arrivano i testi reali
  (vedi `docs/CENSIMENTO_CONTENUTI.md`).
- **Il testo inglese non è ancora stato verificato contro il sito live**, e
  l'anno del premio Booking.com è diverso tra italiano e inglese: entrambi i
  punti sono aperti in `docs/MIGRATION_PLAN.md`.
- Tutto l'ambiente è impostato per **non essere indicizzato** da Google.

## Principi operativi

- Una pagina alla volta, con verifica mobile e desktop.
- Mantenere gli URL esistenti quando possibile.
- Documentare ogni URL modificato e il relativo redirect 301.
- Conservare contenuti e metadati SEO utili prima di sostituire una pagina.
- Non modificare DNS, dominio o sito pubblico senza autorizzazione esplicita.
- Non inserire password, token o altre credenziali nel repository.

Le istruzioni dettagliate per Claude sono contenute in `CLAUDE.md`.
