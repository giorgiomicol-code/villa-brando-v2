# QA — Stato attuale (Home + pagine stub)

Aggiornato al: 2026-09-14. Copre solo ciò che è stato implementato finora
(Home in `/it/` + pagine segnaposto dell'IA approvata). Non è una QA finale
di pre-pubblicazione: quella richiede tutte le pagine con contenuto reale.

## Content Preservation Checklist (Home)

- [x] Testi copiati verbatim dal prototipo approvato (nessuna sintesi/riscrittura)
- [x] Nessuna informazione, servizio o caratteristica inventata
- [x] Incongruenze trovate segnalate in DA VERIFICARE (premio Booking.com,
      Bandiere Blu) invece di essere corrette unilateralmente
- [ ] Confronto riga per riga con il sito live (non eseguito: nessun accesso
      diretto al sito attuale in questa sessione, contenuto preso dal
      prototipo già approvato da Giorgio)
- [ ] Title/meta/H1/dati strutturati attuali acquisiti da crawl o Search Console

## Language Purity Check

- [x] Home (`/it/`): IT puro, nessun testo EN mescolato nella pagina
- [x] Pagine stub: IT puro (messaggi di stato, non contenuto editoriale)
- [x] Home inglese (`/en/`): EN puro, nessun testo IT mescolato
- [x] Selettore IT|EN sempre visibile nell'header, non annidato in altri menu,
      funzionante in entrambe le direzioni; `hreflang` reciproci e `<html lang>`
      corretti su ogni pagina
- [!] **Il testo inglese non è stato verificato contro il sito live.** Proviene
      dal riferimento visivo prodotto da ChatGPT, che Giorgio ha indicato come
      tratto dal sito reale, ma questo ambiente non può raggiungere
      villabrando.com per confermarlo parola per parola. Va ricontrollato
      prima della pubblicazione. Punto specifico da verificare: "8 bikes
      available" — il numero 8 non compare nella versione italiana.
- [!] Eccezione nota: nella Home restano in inglese la citazione
      *"Not a typical villa, it's truly a unique experience."* e la didascalia
      *"Enjoy yourself — May is coming, Summer sun"*, entrambe presenti così
      nel prototipo approvato. Sono citazioni/didascalie originali, non
      traduzioni: lasciate invariate per la regola di conservazione dei
      contenuti. Da confermare se vanno mantenute anche nella versione IT.
- [ ] Versione EN: non creata. Nessun testo inglese esistente è stato fornito
      in questa sessione, quindi non c'è ancora nulla da verificare per la
      purezza linguistica lato EN — va prodotta quando il testo reale arriva.

## Verifica link (Home)

| Link | Destinazione | Stato |
|---|---|---|
| Prenota / Prenota direttamente con noi | direct-book.com/properties/villabrando | Verificato (fornito nel prompt) |
| Scrivi su WhatsApp | wa.me/393519768732 | Composto dal numero verificato, formato da confermare |
| Chiama | tel:+393519768732 | Verificato |
| Email | mailto:villabrando.italy@gmail.com | Verificato |
| Indicazioni | `#` | Mancante — serve link Google Maps |
| Cerca disponibilità (card hero) | direct-book.com | **Le date inserite non vengono passate**: servono i parametri URL del motore di prenotazione |
| La Villa / Camere / Gallery / Esperienze / Contatti (nav + footer) | pagine `/it/...` reali | Verificato — tutte risolvono (build statica, nessun 404) |
| Info (nav) | `#` | Da definire, vedi DA VERIFICARE |
| Instagram / Airbnb / Booking.com (footer) | `#` | Mancanti — da recuperare dal sito attuale |
| House Rules (footer) | `#` | Mancante — pagina esterna su Google Sites, link da recuperare |
| Privacy (footer) | `#` | Mancante — pagina non ancora creata |
| Film ed eventi (award banner) | `#` | Mancante — destinazione non specificata nel prompt |

## Resa mobile/desktop

Verificata con screenshot reali a 390px (mobile) e 1440px (desktop) su Home
(IT e EN), Camere, Contatti, La Villa e 404. Menu hamburger mobile testato e
funzionante (apertura/chiusura, `aria-expanded` aggiornato). La striscia dei
fatti chiave, che il prototipo nascondeva su mobile, è ora verificata come
visibile con tutte e 5 le voci a 390px.

## Accessibilità (controlli manuali eseguiti)

- [x] HTML semantico (`header`, `nav`, `main`, `section`, `footer`)
- [x] Landmark `<main id="contenuto">` su tutte le pagine
- [x] Link "Vai al contenuto" (skip link), verificato: è il primo elemento
      raggiunto con Tab e diventa visibile al focus
- [x] Stile di focus visibile (`:focus-visible`) per la navigazione da tastiera
- [x] Tutte le immagini con `alt` descrittivo
- [x] Menu mobile operabile da tastiera/click con stato `aria-expanded`/`aria-controls`
- [x] **Audit automatico axe-core (WCAG 2.0/2.1 A + AA): 0 violazioni**, in
      italiano e in inglese, rieseguito dopo il cambio di palette
- [x] Verifica automatica dei link interni: 24 pagine, nessun link rotto
- [x] Contrasto verificato: axe aveva rilevato un fallimento reale su
      `.eyebrow.navy` (3.94:1, sotto il minimo di 4.5:1) ereditato dal
      prototipo — corretto portando l'opacità da 0.55 a 0.65 (5.46:1) e
      segnalato tra gli "Scostamenti dal prototipo approvato"
- [ ] Audit su tutte le pagine (testate 5 su 12) e con screen reader reale

## Prestazioni

- [x] Build statica, JS minimo (solo il toggle del menu mobile)
- [x] Immagine hero con `fetchpriority="high"` (candidata LCP) e immagini
      sotto la piega con `loading="lazy"`
- [x] Nessun 404 di risorse (favicon provvisoria aggiunta: prima ogni pagina
      generava una richiesta fallita)
- [ ] Core Web Vitals non misurati (richiede ambiente di anteprima pubblico
      o hosting locale con Lighthouse)
- [ ] Immagini ancora hotlinkate dal CDN del sito attuale, non ancora
      ottimizzate/servite localmente

## SEO tecnica

- [x] `title` e `meta description` distinti per pagina
- [x] `canonical` e `hreflang` per pagina (relativi finché non c'è un dominio)
- [x] Open Graph e Twitter Card (titolo, descrizione, foto reale della villa)
- [x] `noindex, nofollow` + `robots.txt` bloccante su tutto l'ambiente di anteprima
- [ ] `og:url` e canonical assoluti: richiedono il dominio definitivo
- [ ] Sitemap: richiede il dominio definitivo
- [ ] Dati strutturati (JSON-LD): tipo e proprietà da confermare con Giorgio
      prima di implementarli, per non dichiarare dati non verificati

## Cosa manca prima di qualunque pubblicazione

1. Contenuto reale per: La Villa, Camere (4), Gallery (5 sezioni),
   Esperienze/Territorio, Recensioni, Contatti (testo descrittivo), Privacy,
   House Rules.
2. Versione EN completa (Home compresa).
3. Risoluzione di tutti i punti in "DA VERIFICARE" (`MIGRATION_PLAN.md`).
4. Scelta e autorizzazione di un ambiente di anteprima pubblico.
5. Approvazione esplicita di Giorgio per ciascuna pagina, come da criteri di
   completamento in CLAUDE.md.
