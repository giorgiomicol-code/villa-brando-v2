# Architettura tecnica — Villa Brando V2

Documento richiesto da `CLAUDE.md` ("Prima di scegliere o cambiare framework, documentare la motivazione tecnica"). Va aggiornato ogni volta che la scelta tecnica cambia.

## Decisione

Stack: **HTML, CSS e JavaScript puri**, senza framework front-end e senza build step obbligatorio.

- Componenti condivisi (header, navigazione, footer, CTA di prenotazione) implementati come **Web Components nativi** (`customElements.define`), renderizzati in light DOM (senza Shadow DOM) per ereditare gli stili globali definiti nei design token.
- Nessun bundler, transpiler o package manager obbligatorio: le pagine si aprono direttamente o si servono con un semplice server statico.
- Nessuna dipendenza da runtime lato client oltre alle API native del browser.

## Motivazione

- **Natura del sito**: sito vetrina orientato al contenuto e alla prenotazione, non un'applicazione con stato complesso. Non servono routing lato client, gestione stato globale o data fetching articolato.
- **Prestazioni e Core Web Vitals**: zero JavaScript di framework da scaricare, parsare ed eseguire significa meno lavoro per il thread principale e caricamenti più prevedibili su mobile, in linea con la regola 9 di `CLAUDE.md`.
- **Reversibilità e controllo**: nessuna pipeline di build da mantenere; ogni pagina è ispezionabile e modificabile direttamente, coerente con la regola di migrazione progressiva e reversibile.
- **Manutenzione**: stack semplice, senza rischio di dipendenze deprecate o breaking change di framework, adatto a un progetto che verrà mantenuto nel tempo con aggiornamenti occasionali.
- **Componenti condivisi**: i Web Components nativi soddisfano il requisito di CLAUDE.md di riutilizzare header, navigazione, footer, contatti e CTA senza introdurre un framework.

## Compromessi accettati

- Nessuna ottimizzazione automatica a build-time (minificazione, image processing): la compressione e il dimensionamento delle immagini vanno fatti manualmente prima del commit.
- Il templating dei componenti condivisi è scritto a mano in JavaScript (stringhe di template), senza un motore di templating dedicato.
- Se il volume di pagine o la complessità dei contenuti dovessero crescere in modo significativo, si potrà valutare l'introduzione di un generatore di siti statici leggero (es. 11ty), documentando qui la nuova motivazione prima del cambio.

## Struttura cartelle

```
/
├── index.html                 # Homepage (scaffold, contenuti provvisori)
├── robots.txt                 # Blocca l'indicizzazione dell'ambiente di anteprima
├── src/
│   ├── components/            # Web Components condivisi
│   │   ├── site-header.js
│   │   ├── site-footer.js
│   │   └── booking-cta.js
│   └── styles/
│       ├── tokens.css         # Design token (colori, tipografia, spaziature) — provvisori
│       └── base.css           # Reset e stili di base, mobile-first
└── docs/
    ├── MIGRATION_PLAN.md
    └── ARCHITETTURA.md
```

## Stato

Impalcatura iniziale del progetto. Nessuna pagina reale è ancora stata analizzata o approvata secondo il flusso descritto in `CLAUDE.md` § "Flusso di lavoro per ogni pagina". I contenuti presenti in `index.html` sono segnaposto, chiaramente segnalati, e non devono essere pubblicati.
