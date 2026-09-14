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

## Stack tecnico

HTML, CSS e JavaScript puri, senza framework né build step obbligatorio. Componenti condivisi (header, footer, CTA) implementati come Web Components nativi. Motivazione tecnica completa in [`docs/ARCHITETTURA.md`](docs/ARCHITETTURA.md).

## Sviluppo locale

Nessuna dipendenza da installare. Serve le pagine con un qualsiasi server statico, ad esempio:

```
python3 -m http.server 8080
```

Poi apri `http://localhost:8080`. Un semplice `open index.html` funziona per una verifica rapida, ma alcuni browser limitano i moduli JS aperti da `file://`: preferire un server locale.

Le pagine attualmente presenti sono uno scaffold di progetto con contenuti segnaposto (vedi meta `robots: noindex`) e non vanno pubblicate.

Le istruzioni dettagliate per Claude sono contenute in `CLAUDE.md`.
