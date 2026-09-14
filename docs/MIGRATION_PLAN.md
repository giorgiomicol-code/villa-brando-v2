# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Home (IT) | https://www.villabrando.com/ (Google Sites) | /it/ | Redirect provvisorio "/" → "/it/" attivo in anteprima (non la decisione finale) | In sviluppo | Parziale — title/meta del sito attuale non ancora acquisiti da Search Console/crawl diretto | Sì, testi presi dal prototipo approvato (source of truth dal sito attuale) | Sì (screenshot 390px e 1440px) | Da definire | No |
| 2 | Home (EN) | Da individuare sul sito attuale | /en/ | Da definire | Da analizzare | No | No — testo inglese esistente non ancora fornito, non tradurre ex novo | No | Da definire | No |
| 3 | La Villa (IT) | Da individuare sul sito attuale (include sezione Giardino) | /it/la-villa/ | Mantenere concetto, URL nuovo pulito | In sviluppo (stub "contenuto in arrivo") | No | No — in attesa di censimento parola per parola | Sì (stub) | Da definire | No |
| 4 | Camere — indice (IT) | Da individuare (probabilmente 4 pagine distinte sul sito attuale) | /it/camere/ | Consolidare in 1 indice + 4 pagine camera | In sviluppo (stub, elenco camere) | No | No | Sì (stub) | Da definire | No |
| 5 | Camera Main (IT) | Da individuare (pagina camera dedicata) | /it/camere/main/ | Mantenere concetto, URL nuovo pulito | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
| 6 | Camera Sky (IT) | Da individuare | /it/camere/sky/ | Mantenere concetto, URL nuovo pulito | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
| 7 | Camera White (IT) | Da individuare | /it/camere/white/ | Mantenere concetto, URL nuovo pulito | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
| 8 | Audrey Bedroom (IT) | Da individuare | /it/camere/audrey/ | Mantenere concetto, URL nuovo pulito | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
| 9 | Gallery (IT) | 5 sotto-pagine attuali: Saloni, Giardino, Sala Giochi/Bici, Animali (+ pagina indice) | /it/gallery/ | Consolidare 5 pagine in 1 con sezioni, come da IA approvata | In sviluppo (stub) | No | No — nessuna delle 5 sotto-pagine ancora censita | Sì (stub) | Da definire per ciascun URL sorgente | No |
| 10 | Esperienze/Territorio (IT) | "Touristic Infos" (crawlata dal proprietario, testo non ancora trasferito) + "Nelle Vicinanze" (da censire) | /it/esperienze/ | Unificare le due pagine attuali, come da IA approvata | In sviluppo (stub) | No | Parziale — Touristic Infos crawlata ma testo non ricevuto in questa sessione | Sì (stub) | Da definire per entrambi gli URL sorgente | No |
| 11 | Recensioni (IT) | Da individuare sul sito attuale | /it/recensioni/ | Da definire — non presente nel nav del prototipo approvato, vedi DA VERIFICARE | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
| 12 | Contatti (IT) | Da individuare sul sito attuale | /it/contatti/ | Mantenere concetto, URL nuovo pulito | In sviluppo (dati verificati: indirizzo, CIN, telefono, email; testo descrittivo mancante) | No | Parziale — solo i dati di contatto già noti e verificati | Sì (stub) | Da definire | No |
| 13 | Privacy (IT) | Da individuare sul sito attuale | /it/privacy/ | Da definire | Da analizzare | No | No | No | Da definire | No |
| 14 | House Rules (IT) | Pagina esterna su Google Sites (link da recuperare) | Da definire — resta esterna o si porta in questo sito? | Da definire | Da analizzare | No | No | No | N/A se resta esterna | No |

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
4. **Link reali** da recuperare (attualmente placeholder `#`): Airbnb,
   Booking.com, Instagram, House Rules (pagina esterna Google Sites — resta
   esterna o si porta nel nuovo sito?), pagina "Indicazioni"/Google Maps.
   Il link WhatsApp diretto è stato composto come `https://wa.me/393519768732`
   a partire dal numero verificato — da confermare che sia il formato corretto.
5. **Voce di nav "Info"**: presente come voce distinta da "Esperienze" nel
   design approvato, ma la IA unifica Info Turistiche + Nelle Vicinanze sotto
   Esperienze/Territorio. Non è chiaro a cosa debba puntare oggi "Info":
   lasciata come placeholder `#`, non rimossa né reindirizzata a Esperienze
   senza conferma (il design approvato non va cambiato senza autorizzazione).
6. **Pagina Recensioni**: prevista dalla IA approvata ma non presente come
   voce di nav nel prototipo Home approvato. Creata come pagina raggiungibile
   via URL diretto (/it/recensioni/) ma non ancora collegata da nessun punto
   del sito — da decidere dove linkarla (nav, footer, banner premio).
7. **Redirect "/" → "/it/"**: attivo in questo ambiente di anteprima solo per
   comodità di navigazione durante la revisione; non è la decisione finale
   su root URL/selettore lingua richiesta dal prompt di progetto.
8. **Pagina Privacy**: prevista dal footer del prototipo (link "Privacy") ma
   non ancora creata: manca sia l'URL attuale sia il testo.

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
