# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Homepage bilingue IT/EN | https://www.villabrando.com/ + `/italiano` + `/english` | `/` con toggle `IT \| EN` | Consolidare in una sola struttura | In sviluppo | Sì | In verifica | Da verificare | Da definire al rilascio | No |
| 2 | Homepage — proposta "Elegance" | https://www.villabrando.com/ (stessa pagina, proposta grafica alternativa) | `/elegance/it/` (anteprima; diventerà `/` solo se approvata) | In valutazione: sostituirebbe la Priorità 1 se approvata | In revisione | Parziale (vedi nota) | Sì (screenshot reali del 2026-09-16 dell'intero sito ChatGPT) | Sì (screenshot mobile 390px e desktop 1280px) | N/A finché non approvata | No |
| 2a | Elegance — La Villa | (nessuna, è una scheda della homepage attuale) | `/elegance/it/villa/` | Nuova pagina, non ha equivalente diretto | In revisione | Composti da copy reale | Sì (screenshot reali) | Sì | N/A | No |
| 2b | Elegance — Camere | (nessuna) | `/elegance/it/camere/` | Nuova pagina | In revisione | Composti | Sì, tranne Camera 01 (vedi nota) | Sì | N/A | No |
| 2c | Elegance — Giardino | (nessuna) | `/elegance/it/giardino/` | Nuova pagina | In revisione | Composti | Sì | Sì | N/A | No |
| 2d | Elegance — Galleria | (nessuna) | `/elegance/it/galleria/` | Nuova pagina | In revisione | Composti | Sì (foto e 7 video reali già verificati) | Sì | N/A | No |
| 2e | Elegance — Esperienze | (nessuna) | `/elegance/it/esperienze/` | Nuova pagina | In revisione | Composti | Sì | Sì | N/A | No |
| 2f | Elegance — Info | (nessuna) | `/elegance/it/info/` | Nuova pagina | In revisione | Composti | Sì | Sì | N/A | No |

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

- Nome: Sito "Elegance" — Home + 6 sottopagine (La Villa, Camere, Giardino, Galleria, Esperienze, Info)
- URL attuale: https://www.villabrando.com/ (stessa struttura informativa della Priorità 1, redistribuita su più pagine invece che su una sola)
- URL previsto: `/elegance/it/` + `/elegance/it/{villa,camere,giardino,galleria,esperienze,info}/` in anteprima; sostituirebbe `/` solo dopo approvazione esplicita
- Origine: redesign sviluppato con ChatGPT (`villa-brando-new.giorgiomicol.chatgpt.site`). Il sorgente nativo di quel Site non era esportabile: prima versione ricostruita dal solo testo, poi **rifatta da zero il 2026-09-16 sulla base di ~25 screenshot reali** che Giorgio ha condiviso (homepage completa + tutte le sottopagine), che è la fonte di verità attuale per struttura, palette (navy/oro), tipografia e copy.
- Stack: HTML/CSS/JS vanilla, coerente con il resto del repository. Header, footer e i blocchi di sezione (hero, split testo/immagine, griglia comfort, galleria, banner CTA) sono componenti condivisi in `assets/js/elegance-shared.js`, riusati da tutte le 7 pagine — nessun nuovo framework introdotto.
- Font: aggiunta un'unica richiesta a Google Fonts (Playfair Display + Caveat) per riprodurre la coppia serif/corsivo vista negli screenshot; nessun'altra risorsa esterna.
- Dipendenze: riusa gli stessi link e le stesse 28 immagini + 7 video reali già presenti in `assets/js/content.js`; nessuna dipendenza dai mockup provvisori generati da ChatGPT.
- Data acquisizione contenuti: 2026-09-16, tramite screenshot diretti della proiezione live (non del sorgente, mai stato disponibile).

### Preservazione SEO

- Title/meta: non acquisiti dal Site originale (non esposti dalla proiezione). Composti per ciascuna pagina a partire da copy reale verificata; da confermare con Giorgio prima della pubblicazione.
- H1 per pagina: verificati dagli screenshot (es. "Villa Brando" in home, "La Villa", "Le Camere", "Il Giardino", "Galleria", "Esperienze", "Info").
- URL indicizzati: N/A, tutte le pagine hanno `noindex, nofollow`.
- Canonical: non impostato su nessuna delle 7 pagine (anteprima, non ancora URL di rilascio).
- Redirect necessario: nessuno finché restano in anteprima.
- Nota: il premio "Booking.com Traveller Review Awards 2024 e 2025" visto negli screenshot coincide con quello già verificato nella Priorità 1 — nessuna discrepanza residua.

### Contenuti non ancora disponibili

- **Versione inglese**: nessuna delle 7 pagine Elegance ha una versione `/en/`. Gli screenshot ricevuti includevano testo sia IT sia EN nelle pagine originali (nav in inglese, alcuni contenuti in italiano), ma senza un run coerente in una sola lingua non è stato possibile ricostruire un EN completo senza inventare traduzioni: prossimo passo se Giorgio conferma la direzione.
- **Camera 01 (Ambiente Padronale)**: lo screenshot con la sua didascalia specifica non è stato ricevuto (tagliato); il testo attuale è generico e va sostituito con quello reale.
- **Abbinamento foto↔sezione**: le foto usate su ogni sottopagina sono assegnate dal pool di 28 immagini reali già nel repo in base al gruppo tematico più plausibile (es. "prima gallery" per il giardino), non verificate pixel-per-pixel contro gli screenshot — da controllare prima dell'approvazione.
- Le varianti A/Editoriale, B/Canva, C/Atelier, D/Glamour viste durante lo sviluppo con ChatGPT non sono state ricostruite: non richieste e senza contenuto verificato.

### Verifiche prima della pubblicazione

- [ ] Contenuti approvati da Giorgio (tutte le 7 pagine)
- [x] Resa mobile verificata (screenshot 390px, home)
- [x] Resa desktop verificata (screenshot 1280–1440px, tutte le pagine)
- [ ] Accessibilità verificata (contrasto, tastiera, screen reader)
- [ ] Prestazioni verificate (Core Web Vitals, immagini migrate localmente invece che da Google Sites)
- [x] Link e pulsanti verificati (puntano ai canali reali già in uso: booking diretto, WhatsApp, email, guida, tour)
- [ ] Form verificato end-to-end (il modulo di ricerca disponibilità rimanda al canale di prenotazione diretta, non ha backend proprio)
- [ ] Title e meta description confermati da Giorgio, per ciascuna delle 7 pagine
- [ ] Canonical impostato (solo se approvata)
- [ ] Corrispondenza foto/sezione verificata contro gli screenshot originali
- [ ] Caption reale di Camera 01 recuperata
- [ ] Versione EN prodotta (richiede contenuto reale, non ancora disponibile)
- [ ] Procedura di rollback: banale, è un cluster di pagine di anteprima separato che non tocca `/`

## Regola di rilascio

Nessuna pagina sostituisce la versione pubblica prima dell'approvazione esplicita di Giorgio. Dopo il rilascio, controllare errori 404, redirect, indicizzazione e comportamento mobile.
