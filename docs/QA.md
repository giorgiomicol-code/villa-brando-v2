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
| La Villa / Camere / Gallery / Esperienze / Contatti (nav + footer) | pagine `/it/...` reali | Verificato — tutte risolvono (build statica, nessun 404) |
| Info (nav) | `#` | Da definire, vedi DA VERIFICARE |
| Instagram / Airbnb / Booking.com (footer) | `#` | Mancanti — da recuperare dal sito attuale |
| House Rules (footer) | `#` | Mancante — pagina esterna su Google Sites, link da recuperare |
| Privacy (footer) | `#` | Mancante — pagina non ancora creata |
| Film ed eventi (award banner) | `#` | Mancante — destinazione non specificata nel prompt |

## Resa mobile/desktop

Verificata con screenshot reali a 390px (mobile) e 1440px (desktop) su Home,
Camere, Contatti, La Villa. Menu hamburger mobile testato e funzionante
(apertura/chiusura, `aria-expanded` aggiornato).

## Accessibilità (controlli manuali eseguiti)

- [x] HTML semantico (`header`, `nav`, `section`, `footer`)
- [x] Tutte le immagini con `alt` descrittivo
- [x] Menu mobile operabile da tastiera/click con stato `aria-expanded`/`aria-controls`
- [x] Contrasto testo su sfondo bordeaux/bianco coerente col design approvato
- [ ] Audit automatico (Lighthouse/axe) non eseguito in questa sessione

## Prestazioni

- [x] Build statica, JS minimo (solo il toggle del menu mobile)
- [ ] Core Web Vitals non misurati (richiede ambiente di anteprima pubblico
      o hosting locale con Lighthouse)
- [ ] Immagini ancora hotlinkate dal CDN del sito attuale, non ancora
      ottimizzate/servite localmente

## Cosa manca prima di qualunque pubblicazione

1. Contenuto reale per: La Villa, Camere (4), Gallery (5 sezioni),
   Esperienze/Territorio, Recensioni, Contatti (testo descrittivo), Privacy,
   House Rules.
2. Versione EN completa (Home compresa).
3. Risoluzione di tutti i punti in "DA VERIFICARE" (`MIGRATION_PLAN.md`).
4. Scelta e autorizzazione di un ambiente di anteprima pubblico.
5. Approvazione esplicita di Giorgio per ciascuna pagina, come da criteri di
   completamento in CLAUDE.md.
