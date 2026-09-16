# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Homepage bilingue IT/EN | https://www.villabrando.com/ + `/italiano` + `/english` | `/` con toggle `IT \| EN` | Consolidare in una sola struttura | In sviluppo | Sì | In verifica | Da verificare | Da definire al rilascio | No |
| 2 | Homepage — proposta "Elegance" | https://www.villabrando.com/ (stessa pagina, proposta grafica alternativa) | `/elegance/it/` (anteprima; diventerà `/` solo se approvata) | In valutazione: sostituirebbe la Priorità 1 se approvata | In revisione | Parziale (vedi nota) | Sì (testo IT reale, estratto dalla proiezione live ChatGPT Site del 2026-09-16) | Sì (screenshot mobile 390px e desktop 1440px) | N/A finché non approvata | No |

## Stati ammessi

- **Da analizzare**
- **In progettazione**
- **In sviluppo**
- **In revisione**
- **Approvata**
- **Pubblicata**
- **Monitoraggio**
- **Completata**

## Scheda — Homepage bilingue

### Pagina

- Nome: Homepage Villa Brando V2
- URL attuale: https://www.villabrando.com/ + versioni `/italiano` e `/english`
- URL previsto: `/`
- Obiettivo principale: trasposizione fedele e più leggera della homepage attuale, con un unico layout e toggle IT/EN
- Pubblico: ospiti leisure, famiglie, gruppi, business travellers, produzioni foto/video/eventi
- Chiamata all'azione: prenotazione diretta, WhatsApp, brochure, tour/eventi, guida, Instagram, regole della casa
- Dipendenze: immagini correnti Google Sites da migrare localmente; video YouTube; collegamenti esterni esistenti
- Data acquisizione contenuti attuali: 30/08/2026

### Preservazione SEO

- Title attuale: acquisito dalle pagine correnti
- Meta description attuale: acquisita/riprodotta in forma coerente nella V2
- H1 attuale: preservato per ciascuna lingua
- URL indicizzato: da verificare prima del rilascio
- Canonical: da impostare prima del rilascio
- Dati strutturati: da progettare prima del rilascio
- Link interni in ingresso: da verificare prima del rilascio
- Redirect necessario: da definire per `/italiano` e `/english` solo dopo approvazione
- Note Search Console: nessuna modifica di produzione autorizzata

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
- [ ] Immagini migrate da Google Sites in `assets/images/`
- [ ] Nessuna dipendenza residua non necessaria da Google Sites

## Scheda — Homepage "Elegance" (proposta)

### Pagina

- Nome: Homepage Villa Brando — proposta grafica "Elegance"
- URL attuale: https://www.villabrando.com/ (stessa pagina di destinazione della Priorità 1; questa è una proposta grafica alternativa, non un'altra pagina del sito)
- URL previsto: `/elegance/it/` in anteprima; sostituirebbe `/` solo dopo approvazione esplicita
- Origine: redesign editoriale sviluppato con ChatGPT, pubblicato in anteprima su `villa-brando-new.giorgiomicol.chatgpt.site/elegance/it/`; il sorgente nativo di quel Site non era esportabile, quindi qui è stata fatta una **ricostruzione HTML/CSS/JS vanilla** dello stesso stack già in uso nel repository (nessun nuovo framework introdotto)
- Obiettivo principale: posizionamento più editoriale/premium della stessa homepage, con hero a piena pagina, statistiche della villa, sezioni camere/giardino/territorio e un modulo di ricerca disponibilità
- Pubblico: come Priorità 1
- Chiamata all'azione: verifica disponibilità (rimanda al canale di prenotazione diretta reale), WhatsApp, prenotazione diretta
- Dipendenze: riusa gli stessi link e le stesse 28 immagini reali già presenti in `assets/js/content.js` (nessuna nuova risorsa introdotta); nessuna dipendenza dai mockup provvisori generati da ChatGPT
- Data acquisizione contenuti: 2026-09-16, testo trascritto dalla proiezione live del Site (non dal sorgente, che non era disponibile)

### Preservazione SEO

- Title attuale: non acquisito — la proiezione del Site non espone i tag `<title>`/`<meta description>` originali. Il title/description in questa bozza sono **composti** (non inventati) a partire da testo reale verificato (nome del brand + H1/lead dell'hero) e vanno confermati da Giorgio prima della pubblicazione.
- Meta description attuale: vedi sopra — non verificata, solo composta da copy reale.
- H1 attuale: verificato — "Dove la costa ricorda Ulisse." (identico all'H1 già in uso nella Priorità 1)
- URL indicizzato: N/A, pagina di anteprima con `noindex, nofollow`
- Canonical: non impostato (pagina di anteprima, non ancora una URL di rilascio)
- Dati strutturati: da progettare solo se la proposta viene approvata
- Link interni in ingresso: nessuno (pagina non collegata dalla homepage pubblicata)
- Redirect necessario: nessuno finché resta in anteprima; se approvata, sostituirebbe `/` (stesso trattamento redirect della Priorità 1)
- Note: un riferimento a "TRAVELLER REVIEW AWARDS 2026" visto nella proiezione ChatGPT **non è stato usato** perché non verificabile; è stato mantenuto invece il riconoscimento già verificato "Booking.com Traveller Award 2024 e 2025" già presente nella Priorità 1.

### Contenuti non ancora disponibili

- Versione inglese (`/elegance/en/`): la proiezione ChatGPT non ha restituito il testo EN, quindi non è stata costruita per non inventare traduzioni.
- Abbinamento esatto foto↔didascalia nella sezione Giardino ("Terrazza affacciata sul giardino", "Lettini nel verde", "Patio di Villa Brando"): le didascalie sono testo reale, ma le foto Google Sites usate sono un'assegnazione plausibile (stesso gruppo "prima gallery" già documentato in `docs/SOURCE_SNAPSHOT.md`), non verificata visivamente in questa sessione — da controllare prima dell'approvazione.
- Le varianti A/Editoriale, B/Canva, C/Atelier, D/Glamour viste da ChatGPT non sono state ricostruite: non richieste e senza contenuto verificato.

### Verifiche prima della pubblicazione

- [ ] Contenuti approvati da Giorgio
- [x] Resa mobile verificata (screenshot 390px)
- [x] Resa desktop verificata (screenshot 1440px)
- [ ] Accessibilità verificata (contrasto, tastiera, screen reader)
- [ ] Prestazioni verificate (Core Web Vitals, immagini migrate localmente)
- [x] Link e pulsanti verificati (puntano ai canali reali già in uso: booking diretto, WhatsApp, email)
- [ ] Form verificato end-to-end (il modulo di ricerca disponibilità rimanda al canale di prenotazione diretta, non ha backend proprio)
- [ ] Title e meta description confermati da Giorgio
- [ ] Canonical impostato (solo se approvata)
- [ ] Corrispondenza foto/didascalie verificata
- [ ] Versione EN prodotta (richiede contenuto reale, non ancora disponibile)
- [ ] Procedura di rollback: banale, è una pagina di anteprima separata che non tocca `/`

## Regola di rilascio

Nessuna pagina sostituisce la versione pubblica prima dell'approvazione esplicita di Giorgio. Dopo il rilascio, controllare errori 404, redirect, indicizzazione e comportamento mobile.
