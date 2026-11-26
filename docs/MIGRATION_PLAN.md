# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Da definire |  |  | Mantenere / Redirect | Da analizzare | No | No | No | N/A | No |

## Stati ammessi

- **Da analizzare**
- **In progettazione**
- **In sviluppo**
- **In revisione**
- **Approvata**
- **Pubblicata**
- **Monitoraggio**
- **Completata**

## Scheda da compilare per ogni pagina

### Pagina

- Nome:
- URL attuale:
- URL previsto:
- Obiettivo principale:
- Pubblico:
- Chiamata all'azione:
- Dipendenze:
- Data acquisizione contenuti attuali:

### Preservazione SEO

- Title attuale:
- Meta description attuale:
- H1 attuale:
- URL indicizzato:
- Canonical:
- Dati strutturati:
- Link interni in ingresso:
- Redirect necessario:
- Note Search Console:

### Verifiche prima della pubblicazione

- [ ] Contenuti approvati
- [ ] Resa mobile verificata
- [ ] Resa desktop verificata
- [ ] Accessibilità verificata
- [ ] Prestazioni verificate
- [ ] Link e pulsanti verificati
- [ ] Form verificati
- [ ] Title e meta description verificati
- [ ] Canonical verificato
- [ ] Redirect predisposto, se necessario
- [ ] Sitemap aggiornata
- [ ] Procedura di rollback disponibile

## Regola di rilascio

Nessuna pagina sostituisce la versione pubblica prima dell'approvazione esplicita di Giorgio. Dopo il rilascio, controllare errori 404, redirect, indicizzazione e comportamento mobile.

## Registro modifiche pubblicate

- **25/11/2026 — Villa intera in uso esclusivo (IT/EN).** Menu "Camere" → "Zona notte" / "Rooms" → "Bedrooms" (URL invariati); Home, Camere, Villa, Prenota e Info chiariscono che la villa si affitta per intero a un solo gruppo e che le camere vengono preparate in base al numero di ospiti; title, meta description e dati strutturati iniziano con "Villa intera". Sorgente: branch `villa-brando-v38` (`elegance/`), generato con `tools/build_live.py` nel branch `gh-pages`. La pubblicazione parte con il workflow "Publish Villa Brando Version E" (push su `main` o avvio manuale). Rollback: ripristinare su `gh-pages` il commit precedente (`ed9d9ab`) e rilanciare il workflow.
- **25/11/2026 — Blocco "Prenota in diretta" nelle pagine di prenotazione (IT/EN).** Scheda con i vantaggi della prenotazione diretta (prezzo più basso, colazione di benvenuto, una giornata di biciclette, check-in tardivo e check-out posticipato, buono 12 mesi), chiusa su telefono; su telefono il modulo precede il contatto; badge Airbnb/Booking spostati in fondo come "Presenti anche su" con link alle recensioni. Sorgente: branch `villa-brando-v38` (commit `6cea276`), pubblicato su `gh-pages` (commit `882f4a5`). Rollback: ripristinare su `gh-pages` il commit `633a5a9` e rilanciare il workflow.
- **25/11/2026 — Home senza badge "Prenota anche su" (IT/EN).** Nel riquadro di ricerca della Home sono stati tolti "Prenota anche su" e i loghi Airbnb/Booking; restano i contatti (WhatsApp, telefono, email). Le OTA restano nella pagina di prenotazione ("Presenti anche su", loghi grigi, link alle recensioni) e nei dati strutturati. Sorgente: branch `villa-brando-v38`. Rollback: ripristinare su `gh-pages` il commit `882f4a5` e rilanciare il workflow.
- **26/11/2026 — Avviso cantiere nella pagina Info (IT/EN).** Aggiunto l'avviso sul cantiere edile di terzi nelle immediate vicinanze, come ultima voce di "Informazioni essenziali" e come "Nota importante" nella scheda "Prenotazione diretta". Sorgente: branch `villa-brando-v38` (commit `fb1bd08`), pubblicato su `gh-pages` (commit `8b72a39`). Rollback: ripristinare su `gh-pages` il commit `e6761aa` e rilanciare il workflow.
- **26/11/2026 — Avviso cantiere nella pagina Prenota (IT/EN).** Aggiunto l'avviso sul cantiere come ultima voce delle condizioni accanto al modulo di prenotazione (pulizie, cauzione). Sorgente: branch `villa-brando-v38`; pubblicato su `gh-pages`. Rollback: rimuovere la voce e rilanciare il workflow.
