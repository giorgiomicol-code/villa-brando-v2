# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Home (IT) | https://www.villabrando.com/ (Google Sites) | /it/ | Redirect da definire (root → /it/ o selettore lingua) | In sviluppo | Parziale — title/meta del sito attuale non ancora acquisiti da Search Console/crawl diretto | Sì, testi presi dal prototipo approvato (source of truth dal sito attuale) | No | Da definire | No |
| 2 | Home (EN) | Da individuare sul sito attuale | /en/ | Da definire | Da analizzare | No | No — testo inglese esistente non ancora fornito, non tradurre ex novo | No | Da definire | No |

## DA VERIFICARE (non risolto autonomamente)

1. **Premio Booking.com**: formulazioni diverse trovate sul sito attuale —
   "Traveller Award 2024", "Traveller Review Awards 2024 & 2025" — e nel
   riferimento visivo del proprietario "Traveller Review Awards 2026, 10 su
   10". Il prototipo Home usa "Traveller Review Awards 2024 & 2025" come da
   riferimento approvato, ma anno e punteggio esatti vanno confermati da
   Giorgio prima della pubblicazione.
2. **Bandiere Blu**: "10 Blue Flags (FEE) in 2024" vs "...in 2023" in punti
   diversi del sito attuale — non presente nel prototipo Home, ma da
   verificare prima di usarlo in altre pagine (es. La Villa, Territorio).
3. **Title/meta description/H1 attuali della Home** e dati strutturati non
   ancora acquisiti da crawl diretto del sito live o da Search Console —
   necessari per completare la scheda SEO sotto prima dell'approvazione.
4. **Link reali** da recuperare (attualmente placeholder `#` nel prototipo):
   Airbnb, Booking.com, Instagram, House Rules (pagina esterna Google
   Sites), pagina "Indicazioni"/Google Maps, link WhatsApp diretto
   (`https://wa.me/...`).

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

---

## Scheda — Home (IT)

### Pagina

- Nome: Home
- URL attuale: https://www.villabrando.com/ (Google Sites)
- URL previsto: /it/ (e probabile redirect di `/` verso `/it/` o verso una
  pagina di scelta lingua — da decidere con Giorgio)
- Obiettivo principale: presentare Villa Brando e portare l'utente alla
  prenotazione (diretta, WhatsApp, Airbnb/Booking.com)
- Pubblico: famiglie e gruppi in cerca di una casa vacanze premium a Latina/Sabaudia/Circeo/Roma
- Chiamata all'azione: "Prenota direttamente con noi" / "Scrivi su WhatsApp" / ricerca disponibilità
- Dipendenze: booking engine esterno (direct-book.com), WhatsApp, Google Maps (indicazioni), pagine interne (La Villa, Camere, Gallery, Esperienze, Contatti)
- Data acquisizione contenuti attuali: testi verificati nel prototipo fornito da Giorgio (allegato al prompt di progetto), non ricrawlati direttamente in questa sessione

### Preservazione SEO

- Title attuale: da acquisire (crawl diretto o Search Console)
- Meta description attuale: da acquisire
- H1 attuale: da acquisire
- URL indicizzato: da confermare
- Canonical: da impostare su `/it/` una volta pubblicata
- Dati strutturati: da definire (probabile `LodgingBusiness`/`VacationRental` — da confermare prima di implementare, nessun dato inventato)
- Link interni in ingresso: da mappare
- Redirect necessario: da definire (dipende da decisione su URL radice `/`)
- Note Search Console: nessun accesso disponibile in questa sessione

### Verifiche prima della pubblicazione

- [ ] Contenuti approvati
- [ ] Resa mobile verificata
- [ ] Resa desktop verificata
- [ ] Accessibilità verificata
- [ ] Prestazioni verificate
- [ ] Link e pulsanti verificati (diversi sono ancora placeholder `#`, vedi DA VERIFICARE)
- [ ] Form verificati (campo ricerca disponibilità è statico nel prototipo, da collegare al booking engine)
- [ ] Title e meta description verificati
- [ ] Canonical verificato
- [ ] Redirect predisposto, se necessario
- [ ] Sitemap aggiornata
- [ ] Procedura di rollback disponibile (rollback: la Home attuale su Google Sites resta online e invariata finché questa pagina non è approvata e pubblicata)
