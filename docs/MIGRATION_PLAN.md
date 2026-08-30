# Piano di migrazione — Villa Brando V2

Questa tabella governa la sostituzione progressiva delle pagine. Compilarla prima di sviluppare ciascuna nuova pagina.

| Priorità | Pagina | URL attuale | URL nuovo | Azione URL | Stato | Title e meta acquisiti | Contenuti verificati | Mobile verificato | Redirect 301 | Approvazione |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Homepage bilingue IT/EN | https://www.villabrando.com/ + `/italiano` + `/english` | `/` con toggle `IT \| EN` | Consolidare in una sola struttura | In sviluppo | Sì | In verifica | Da verificare | Da definire al rilascio | No |

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

## Regola di rilascio

Nessuna pagina sostituisce la versione pubblica prima dell'approvazione esplicita di Giorgio. Dopo il rilascio, controllare errori 404, redirect, indicizzazione e comportamento mobile.
