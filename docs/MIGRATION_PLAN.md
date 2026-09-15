# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Home (IT) | https://www.villabrando.com/ (Google Sites) | /it/ | Redirect provvisorio "/" → "/it/" attivo in anteprima (non la decisione finale) | In sviluppo | Parziale — title/meta del sito attuale non ancora acquisiti da Search Console/crawl diretto | Sì, testi presi dal prototipo approvato (source of truth dal sito attuale) | Sì (screenshot 390px e 1440px) | Da definire | No |
| 2 | Home (EN) | Da individuare sul sito attuale | /en/ | Da definire | In sviluppo | No | **Parziale — testo preso dal riferimento visivo, NON verificato contro il sito live** | Sì | Da definire | No |
| 2b | Pagine interne EN (The Villa, Rooms + 4, Gallery, Experiences, Reviews, Contact) | Da individuare | /en/… | Da definire | In sviluppo (stub) | No | No | Sì (stub) | Da definire | No |
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

## Vincolo operativo — crawl non eseguibile da Claude Code

L'ambiente in cui gira Claude Code **non può raggiungere `www.villabrando.com`**
né il CDN delle immagini (`lh3.googleusercontent.com`): la policy di rete
blocca entrambi, sia da richiesta diretta sia da fetch lato server. Di
conseguenza title, meta description, H1, testi e dati strutturati delle
pagine attuali non possono essere acquisiti automaticamente: vanno forniti
da Giorgio. Modulo pronto da compilare: `docs/CENSIMENTO_CONTENUTI.md`.

## Asset mancanti

- Logo originale Villa Brando (in attesa: `public/favicon.svg` è un
  **segnaposto provvisorio**, non il logo ufficiale, e va sostituito).
- Foto originali in alta risoluzione (oggi tutte hotlinkate dal CDN di
  Google Sites; cartelle pronte in `public/images/`).

## Cambio di direzione grafica — palette oro + navy

**Decisione di Giorgio (esplicita), che supera la regola precedente.** Il
brief iniziale prescriveva una palette bordeaux con "niente oro, niente
blu/navy". Giorgio ha poi fornito un riferimento visivo (mockup prodotto da
ChatGPT) con palette **oro + navy** e ha indicato di attenersi a quello.
Il sito è stato quindi rivestito su quella direzione:

- oro `#C3A24B` per pulsanti, icone e filetti;
- navy `#1C3557` per titoli, pulsante di ricerca e footer;
- fondo bianco, fascia crema `#FBF8F2` per "Scopri", azzurro `#E9F2F9` per
  "Esplora";
- blu Booking.com `#003580` per il banner premio (colore del marchio
  Booking, non della palette del sito, come il verde di WhatsApp);
- accenti manoscritti (font Caveat) per sottotitolo hero, titolo "Ideale per
  famiglie…", soggiorno minimo e citazione del banner.

La vecchia regola "niente oro, niente blu/navy" in `CLAUDE.md` è quindi
**superata** da questa decisione. Se non era l'intenzione, va detto ora:
tornare indietro costa poco perché i colori sono tutti in variabili CSS.

## Scostamenti dal riferimento (da confermare)

Modifiche minime rispetto al riferimento visivo, ciascuna motivata da una
regola inderogabile di CLAUDE.md. Vanno confermate da Giorgio.

1. **Testo dei pulsanti oro**: nel riferimento è bianco su oro chiaro, che dà
   **2.44:1** — molto sotto il minimo WCAG AA di 4.5:1. Mantenuto lo stesso
   oro, testo navy: **5.06:1**.
2. **Oro delle scritte piccole**: l'oro dei pulsanti usato come colore di
   testo non passa su nessuno dei tre sfondi del sito. Le etichette usano un
   oro più profondo `#806419` (bianco 5.59:1, crema 5.28:1, azzurro 4.94:1).
   L'oro chiaro resta per sfondi, icone e filetti.
3. **Grigio del testo secondario** portato a `#656D72` per passare anche
   sulla sezione azzurra (4.65:1; prima era 4.26:1).
4. **Menu mobile funzionante**: nel prototipo l'hamburger era decorativo e su
   mobile la navigazione risultava irraggiungibile. Ora apre e chiude il menu,
   con stato `aria-expanded` per screen reader.
5. **Selettore lingua reale**: il riferimento mostra un menu a tendina
   "English ⌄". Realizzato come selettore **IT | EN** sempre visibile, che
   porta alla stessa pagina nell'altra lingua; se una pagina esiste in una
   sola lingua, l'altra resta visibile ma non cliccabile invece di portare a
   un indirizzo inesistente.
6. **Striscia dei fatti chiave visibile su mobile**: il prototipo la nascondeva
   del tutto sotto i 980px (`display: none`). Ma sono le informazioni che un
   ospite cerca per prime — posti letto, giardino, biciclette, animali ammessi,
   posizione — e il sito è mobile-first: nasconderle proprio sul dispositivo
   più usato va contro l'obiettivo. Ora restano visibili su due colonne (una
   sola sotto i 420px).
7. **Campi data reali**: check-in e check-out erano campi di testo con
   scritta "gg/mm/aaaa". Nel riferimento hanno l'icona del calendario, cioè
   sono selettori data nativi: ora sono `<input type="date">`, quindi su
   telefono si apre il calendario di sistema. **Resta aperto**: le date
   scelte non vengono ancora passate al motore di prenotazione, perché non
   conosciamo i parametri URL di direct-book.com. Oggi il pulsante porta al
   motore ignorando le date inserite.
8. **Pagina 404 bilingue**: è l'unica pagina fuori da `/it/` e `/en/`, quindi
   non si può sapere in che lingua sia chi ci arriva. Mostra entrambe le
   lingue affiancate invece di indovinare.
9. **Hero più luminoso** (richiesta esplicita di Giorgio): il velo scuro sopra
   la foto era ereditato dal prototipo bordeaux e copriva il lato sinistro al
   72%. Portato a 58% → 24% → 0% a due terzi della larghezza, con tinta navy
   invece che nera, più un'ombra sul testo che ne regge la leggibilità senza
   riscurire la foto. **Da ricontrollare con la foto vera**: la verifica è
   stata fatta simulando un'immagine molto più chiara del reale, perché il CDN
   delle foto non è raggiungibile da questo ambiente.

Tutte le pagine verificate con axe-core (WCAG 2.1 AA) dopo il cambio di
palette: **0 violazioni**, in italiano e in inglese.

## Elementi del riferimento non ancora realizzati

- **Video** nella sezione "Ideale per famiglie": nel riferimento c'è un player
  YouTube. Manca l'indirizzo del video — da fornire.
- **Carosello** con frecce nella sezione "Esplora": oggi è una griglia fissa
  di 4 card. Da decidere se serve davvero il carosello (su desktop le 4 card
  si vedono comunque tutte).
- **Foto del riferimento**: sono diverse da quelle attualmente hotlinkate dal
  sito Google Sites. Non conosciamo gli indirizzi originali di quelle nuove.
- **Logo**: nel riferimento è un logotipo oro con disegno della villa. Quello
  attuale è hotlinkato dal sito vecchio e la favicon è ancora un segnaposto.

## DA VERIFICARE (non risolto autonomamente)

1. **Premio Booking.com — PRIORITÀ ALTA, oggi il sito si contraddice.**
   Le due lingue riportano anni diversi, perché riportano fedelmente due
   fonti diverse:
   - Home **italiana**: "Booking.com Traveller Review Awards 2024 & 2025 ·
     5★ su Airbnb · 9.9/10 su Booking.com" (dal prototipo approvato);
   - Home **inglese**: "Booking.com Traveller Review Awards 2026" (dal
     riferimento visivo).

   Non è stato scelto un anno in autonomia: sarebbe stato inventare un dato.
   Serve la formulazione corretta **di oggi**, che poi va allineata su
   entrambe le lingue. Finché non arriva, il sito non può essere pubblicato
   così.
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
