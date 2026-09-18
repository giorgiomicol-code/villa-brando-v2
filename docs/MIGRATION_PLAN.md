# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Book Your Stay | `https://www.villabrando.com/book-your-stay` | `/book-your-stay` | Mantenere | In revisione | Sì | Sì | Sì, verifica statica 360/390/768/1440 | N/A | No |

## Stati ammessi

- **Da analizzare**
- **In progettazione**
- **In sviluppo**
- **In revisione**
- **Approvata**
- **Pubblicata**
- **Monitoraggio**
- **Completata**

## Scheda pagina — Book Your Stay

### Identificazione e obiettivo

- Nome: Book Your Stay
- URL attuale: `https://www.villabrando.com/book-your-stay`
- URL previsto: `/book-your-stay`
- Obiettivo principale: portare l'utente al motore ufficiale Direct Book senza redirect intermedi.
- Pubblico: potenziali ospiti italiani e internazionali.
- Chiamata all'azione: `CHECK AVAILABILITY` / `VERIFICA DISPONIBILITÀ`.
- Destinazione CTA nuova: `https://direct-book.com/properties/villabrando`.
- Dipendenze: motore esterno Direct Book; pagine non ancora migrate sul sito attuale.
- Data acquisizione contenuti attuali: 27 agosto 2026.

### Inventario della pagina attuale

- Title attuale: `Exclusive holiday home near Sabaudia and Pontine Beaches - Casa Vacanze Esclusiva vicino a Sabaudia e Spiagge pontine - BOOK YOUR STAY`.
- Meta description HTML: assente. Google Sites espone `og:description` e `itemprop="description"` con il testo `Make Your Reservation Here`.
- H1 attuale: assente; non sono presenti heading HTML semantici nella pagina acquisita.
- Testi visibili utili:
  - `Villa Brando Exclusive - "Not a typical villa, it's truly a unique experience."`
  - `Make Your Reservation Here`
  - `DIRECT BOOKING here`
  - `Book with us and Save`
  - `Exclusive Rates, Direct Discounts: Book Now and Save!`
  - `or click on the logo below :`
  - `For special rates or specific requests, feel free to contact us directly at: (+39) 351 976 873 2 and ask Giorgio`
- Pulsanti e CTA: `Offers Directly with Us` e `Book with us and Save`; entrambi passano da un URL di reindirizzamento Google.
- Destinazione finale della prenotazione attuale: `https://direct-book.com/properties/villabrando`.
- Contatto attuale: Giorgio, `(+39) 351 976 873 2` (normalizzato nella nuova pagina come `+39 351 976 8732`).
- Collegamenti di contenuto: Direct Book, Airbnb, Booking.com e homepage Villa Brando, tutti mediati da redirect Google.
- Collegamenti di navigazione inglesi: `/english`, `/english/gallery`, relative sottopagine gallery, `/english/excursions`, relative sottopagine escursioni, `/english/reviews`, `/english/contacts`, `/english/privacy`, `/book-your-stay`, `/house-rules`.
- Collegamenti di navigazione italiani: `/italiano`, `/italiano/gallery`, relative sottopagine gallery, `/italiano/escursioni`, relative sottopagine escursioni, `/italiano/recensioni`, `/italiano/contatti`, `/italiano/riservatezza`.
- Immagini attuali: logo del sito e cinque immagini di contenuto collegate rispettivamente a Direct Book, Airbnb, Direct Book, Booking.com e homepage. Tutte sono servite dall'infrastruttura Google Sites e non vengono riutilizzate né collegate direttamente nel nuovo progetto.

### Preservazione SEO

- URL indicizzato: `https://www.villabrando.com/book-your-stay`.
- Canonical attuale: nessun elemento `link rel="canonical"` rilevato; `og:url` e `itemprop="url"` riportano l'URL attuale.
- Open Graph attuale: title, type `website`, URL, description e immagine Google Sites presenti.
- Dati strutturati attuali: microdata generico `WebPage` sul documento; nessun JSON-LD specifico rilevato.
- Link interni in ingresso: da verificare con Search Console prima della pubblicazione.
- Redirect necessario: no, il percorso viene mantenuto.
- Note Search Console: nessuna attività eseguita; verificare query, impressioni e link interni prima del rilascio.

### Scelte della nuova pagina

- Title SEO: `Book Your Stay at Villa Brando | Direct Booking`.
- Meta description: descrizione bilingue orientata alla disponibilità, alla prenotazione ufficiale e all'assistenza personale.
- Canonical: configurabile tramite `PUBLIC_SITE_URL`; omesso se non configurato, così l'URL tecnico di anteprima non viene usato automaticamente.
- Indicizzazione: `noindex, nofollow` e blocco `robots.txt` per impostazione predefinita; attivazione soltanto con `PUBLIC_ALLOW_INDEXING=true`.
- Dati strutturati: non inseriti in questa fase perché mancano dati completi e verificati sufficienti per un'entità ricettiva.
- Immagini: placeholder grafico dichiarato. Prima dell'approvazione serve almeno una fotografia autentica e autorizzata, preferibilmente esterno o giardino in formato orizzontale.
- Rollback: finché la pagina resta in anteprima non è necessario intervenire sul sito pubblico. Dopo un futuro rilascio, il rollback consiste nel ripristinare il precedente artefatto di pubblicazione mantenendo invariato l'URL.

### Verifiche prima della pubblicazione

- [ ] Contenuti approvati
- [x] Resa mobile verificata staticamente a 360 px e 390 px
- [x] Resa tablet verificata staticamente a 768 px
- [x] Resa desktop verificata staticamente a 1440 px
- [x] Accessibilità strutturale verificata
- [x] Prestazioni verificate: pagina statica, nessuna libreria client, JavaScript minimo per la lingua
- [x] Link e pulsanti verificati
- [x] Form verificati: nessun form presente
- [x] Title e meta description verificati
- [x] Canonical configurabile verificato
- [x] Redirect non necessario
- [ ] Sitemap aggiornata al momento del rilascio complessivo
- [x] Procedura di rollback disponibile

## Regola di rilascio

Nessuna pagina sostituisce la versione pubblica prima dell'approvazione esplicita di Giorgio. Dopo il rilascio, controllare errori 404, redirect, indicizzazione e comportamento mobile.
