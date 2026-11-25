# Villa Brando V2

Nuovo sito web di **Villa Brando**, sviluppato separatamente dal sito attualmente online.

## Obiettivo

Realizzare e verificare le nuove pagine in un ambiente di prova, per poi sostituire progressivamente quelle esistenti senza interrompere il servizio e senza disperdere il traffico proveniente da Google.

## Stato del progetto

- Repository di sviluppo: questo repository
- Sito pubblico attuale: [villabrando.com](https://villabrando.com)
- Dominio principale: non collegato al nuovo progetto
- Pubblicazione: solo ambiente di anteprima fino ad approvazione esplicita

## Principi operativi

- Una pagina alla volta, con verifica mobile e desktop.
- Mantenere gli URL esistenti quando possibile.
- Documentare ogni URL modificato e il relativo redirect 301.
- Conservare contenuti e metadati SEO utili prima di sostituire una pagina.
- Non modificare DNS, dominio o sito pubblico senza autorizzazione esplicita.
- Non inserire password, token o altre credenziali nel repository.

Le istruzioni dettagliate per Claude sono contenute in `CLAUDE.md`.

## Tecnologia

Il progetto usa **Astro con TypeScript in modalità statica**. La scelta riduce JavaScript e dipendenze sul client, mantiene URL puliti e offre una base SEO-friendly adatta alla migrazione progressiva di un sito prevalentemente informativo.

## Avvio locale

```bash
npm install
npm run dev
```

La prima pagina è disponibile su `http://localhost:4321/book-your-stay`.

Per verificare la versione di produzione:

```bash
npm run check
npm run build
npm run preview
```

## Configurazione SEO dell'anteprima

Il comportamento predefinito è prudenziale:

- meta robots: `noindex, nofollow`;
- `robots.txt`: blocco di tutto il sito;
- canonical omesso quando `PUBLIC_SITE_URL` non è configurato.

Copiare `.env.example` in `.env` solo nell'ambiente appropriato. L'indicizzazione può essere attivata esclusivamente impostando in modo esplicito `PUBLIC_ALLOW_INDEXING=true`. Non usare come `PUBLIC_SITE_URL` l'indirizzo tecnico dell'anteprima.
