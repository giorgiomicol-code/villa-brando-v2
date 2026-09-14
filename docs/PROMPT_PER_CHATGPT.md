# Prompt da dare a ChatGPT (con navigazione web)

Claude Code non può raggiungere `www.villabrando.com` (bloccato dalla policy
di rete del suo ambiente). Questo prompt serve a far fare il censimento
contenuti a un assistente che invece può navigare.

L'output va poi salvato in `docs/CENSIMENTO_CONTENUTI.md` (o incollato in
chat a Claude Code), che riprenderà da lì per costruire le pagine.

**Prima di usare il risultato:** controllare a campione che i testi siano
davvero quelli del sito e non ricostruiti a memoria. È il rischio principale
di questo passaggio.

---

## Prompt da copiare

````text
Sei un assistente che deve fare un CENSIMENTO CONTENUTI di un sito web
esistente. Il lavoro è di sola lettura e trascrizione: non devi progettare,
riscrivere o migliorare nulla.

SITO DA CENSIRE: https://www.villabrando.com (Villa Brando, casa vacanze a
Latina, Italia — gira su Google Sites, è bilingue italiano/inglese).

CONTESTO: il sito verrà ricostruito da zero da un altro sviluppatore. I testi
esistenti sono la fonte di verità e non vanno toccati. Il tuo unico compito è
trascriverli in modo completo e fedele, così che possano essere riportati
identici nel nuovo sito.

=== REGOLE TASSATIVE ===

1. TRASCRIVI VERBATIM. Non riassumere, non accorciare, non riformulare, non
   correggere errori di ortografia o di punteggiatura. Copia il testo esatto,
   parola per parola, comprese maiuscole, accenti ed emoji.
2. NON TRADURRE MAI. Se una pagina esiste in italiano e in inglese, riporta
   entrambe le versioni così come sono, separate. Se una delle due versioni
   non esiste, scrivi "VERSIONE NON TROVATA" — non produrla tu traducendo.
3. NON INVENTARE NULLA. Niente prezzi, servizi, dotazioni, regole,
   disponibilità, recensioni o caratteristiche che non siano scritti sul
   sito. Se un dato non c'è, scrivi "NON PRESENTE".
4. SE NON RIESCI AD APRIRE UNA PAGINA, scrivi "PAGINA NON ACCESSIBILE" e
   spiega perché. NON ricostruire il contenuto a memoria o per inferenza.
   Questa è la regola più importante di tutte: un contenuto inventato è
   molto peggio di un contenuto mancante.
5. SEGNALA, NON CORREGGERE. Se trovi informazioni che si contraddicono tra
   pagine diverse (per esempio due anni diversi per lo stesso premio),
   riportale entrambe così come sono e annotale nella sezione finale
   "INCONGRUENZE TROVATE".
6. NON SCRIVERE CODICE. Non produrre HTML, CSS, JavaScript o file di
   progetto. Serve solo testo trascritto.

NOTA TECNICA: il sito è su Google Sites e parte del testo può essere
caricato via JavaScript. Se vedi la pagina ma non riesci a estrarne il testo,
dillo esplicitamente invece di restituire una pagina vuota o parziale
spacciata per completa.

=== PAGINE DA CENSIRE ===

Parti dalla home e segui il menu di navigazione, in entrambe le lingue.
Le pagine attese (i nomi possono essere leggermente diversi):

- Home (IT e EN)
- La Villa
- Le Camere: pagina indice + le 4 camere (Main, Sky, White, Audrey Bedroom)
- Gallery e le sue sotto-pagine: Saloni, Giardino, Sala Giochi / Bici, Animali
- Touristic Infos (info turistiche)
- Nelle Vicinanze
- Recensioni
- Contatti
- Privacy
- House Rules (potrebbe essere una pagina esterna, su un altro indirizzo)

Se trovi pagine che non sono in questo elenco, censiscile comunque e
segnalale. Se una pagina dell'elenco non esiste, scrivilo.

=== FORMATO DI OUTPUT ===

Un unico documento Markdown. Per OGNI pagina, esattamente questo blocco:

---
## [Nome pagina]

- **URL:**
- **Lingua:** IT / EN
- **Title (dal tag <title>):**
- **Meta description:**
- **H1:**
- **Altre intestazioni (H2/H3), in ordine:**

**TESTO INTEGRALE:**
```
(qui il testo completo della pagina, verbatim, mantenendo gli a capo)
```

- **Link presenti nella pagina** (etichetta → indirizzo completo):
- **Immagini** (descrizione o testo alternativo → indirizzo completo del file):
- **Pulsanti / inviti all'azione** (testo → destinazione):
- **Note:** (qualsiasi cosa strana, incoerente o poco chiara)
---

=== DOMANDE SPECIFICHE A CUI RISPONDERE ===

Alla fine del documento, una sezione "RISPOSTE" con questi punti. Per
ciascuno indica la pagina esatta da cui hai preso l'informazione:

1. PREMIO BOOKING.COM — come è scritto ESATTAMENTE oggi sul sito, e in quali
   pagine? Riporta ogni formulazione trovata, con l'anno e il punteggio
   esatti (per esempio "Traveller Review Awards 2024", "9.9/10").
2. BANDIERE BLU — il sito cita delle "Blue Flags" con un anno. Quale anno,
   e in quali pagine? Riporta ogni occorrenza.
3. LINK ESTERNI REALI — trova e riporta gli indirizzi completi di:
   profilo Airbnb, scheda Booking.com, profilo Instagram (e altri social),
   pagina House Rules, link a Google Maps o indicazioni stradali,
   e qualunque altro sistema di prenotazione collegato.
4. NUMERO DI TELEFONO ED EMAIL — come sono scritti sul sito, e in che
   formato è il link WhatsApp, se presente.
5. LOGO — l'indirizzo completo del file immagine del logo.
6. PAGINE NASCOSTE — esistono pagine raggiungibili solo da link interni e
   non presenti nel menu? Elencale.

=== SEZIONE FINALE OBBLIGATORIA ===

"INCONGRUENZE TROVATE": elenco di tutte le contraddizioni, informazioni
doppie o poco chiare incontrate. Non risolverle: solo elencarle, indicando
in quali pagine si trovano.

"PAGINE NON ACCESSIBILI": elenco delle pagine che non sei riuscito a leggere,
con il motivo.

Inizia dalla home e procedi pagina per pagina. Se il documento diventa lungo,
va benissimo: la completezza conta più della sintesi.
````

---

## Cosa farne dopo

1. Salvare la risposta in `docs/CENSIMENTO_CONTENUTI.md` (sostituendo il
   modulo vuoto) oppure incollarla direttamente a Claude Code.
2. Verificare a campione due o tre pagine confrontandole col sito vero.
3. Da lì Claude Code può costruire le pagine con i testi reali, e le
   risposte alla sezione "RISPOSTE" chiudono buona parte dei punti aperti in
   `MIGRATION_PLAN.md` (anno del premio, Bandiere Blu, link social e House
   Rules, logo).

Le foto in alta risoluzione restano comunque da recuperare a parte: dal
sito si ottengono solo le versioni servite dal CDN di Google.
