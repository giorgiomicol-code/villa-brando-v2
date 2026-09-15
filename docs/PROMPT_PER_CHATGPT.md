# Prompt da dare a ChatGPT (con navigazione web)

Claude Code non può raggiungere `www.villabrando.com`: la policy di rete del
suo ambiente blocca sia le richieste dirette sia il CDN delle immagini. Questo
prompt fa fare il censimento a un assistente che invece può navigare.

**Novità rispetto alla versione precedente:** chiede l'output in **JSON già
nella forma dei file dati del progetto** (`src/data/*.ts`), così il risultato
si incolla direttamente nel codice invece di dover essere ricopiato a mano.

**Prima di usare il risultato:** controllare a campione che i testi siano
davvero quelli del sito e non ricostruiti a memoria. È il rischio principale.

**Se l'output è troppo lungo** e si interrompe: chiedere una pagina per
messaggio ("ora fai solo la pagina Camere"), il JSON si ricompone dopo.

---

## Prompt da copiare

````text
Devi fare il CENSIMENTO CONTENUTI di un sito esistente e restituirlo in JSON.
È un lavoro di sola lettura e trascrizione: non progettare, non riscrivere,
non migliorare nulla.

SITO: https://www.villabrando.com — Villa Brando, casa vacanze a Latina
(Italia), gira su Google Sites, bilingue italiano/inglese.

CONTESTO: il sito viene ricostruito da un altro sviluppatore. I testi
esistenti sono la fonte di verità e devono finire identici nel nuovo sito.
Il tuo output verrà incollato direttamente nel codice, quindi la fedeltà del
testo conta più di tutto.

=== REGOLE TASSATIVE ===

1. TRASCRIVI VERBATIM: niente riassunti, niente riformulazioni, niente
   correzioni di refusi. Copia il testo esatto, comprese maiuscole, accenti
   ed emoji.
2. NON TRADURRE MAI. Italiano e inglese vanno raccolti separatamente, ognuno
   dalla sua pagina. Se una lingua manca, scrivi null — non produrla tu.
3. NON INVENTARE NULLA. Niente prezzi, servizi, dotazioni, regole,
   disponibilità o caratteristiche che non siano scritti sul sito. Se un dato
   non c'è, scrivi null.
4. SE NON RIESCI AD APRIRE UNA PAGINA, mettila in "notAccessible" con il
   motivo. NON ricostruirla a memoria o per inferenza. È la regola più
   importante: un contenuto inventato è molto peggio di uno mancante, perché
   finirebbe pubblicato senza che nessuno se ne accorga.
5. SEGNALA, NON CORREGGERE: le contraddizioni tra pagine vanno elencate in
   "inconsistencies", riportando entrambe le versioni così come sono.
6. NIENTE CODICE, NIENTE COMMENTI FUORI DAL JSON. Solo il JSON richiesto.

NOTA TECNICA: su Google Sites parte del testo è caricata via JavaScript. Se
vedi la pagina ma non riesci a estrarne il testo, dillo in "notAccessible"
invece di restituire una pagina parziale come se fosse completa.

=== PRIORITÀ ===

Se non riesci a fare tutto, fai PRIMA il blocco "facts" e "externalLinks":
sono i dati che sbloccano subito il lavoro. Poi le pagine, in quest'ordine:
Camere (4), La Villa, Gallery, Touristic Infos, Nelle Vicinanze, Recensioni,
Contatti, Privacy, House Rules.

=== FORMATO DI OUTPUT (JSON, esattamente questa struttura) ===

{
  "facts": {
    "awardIt": "la frase ESATTA sul premio Booking.com nelle pagine italiane, con anno e punteggio",
    "awardEn": "la frase ESATTA sul premio nelle pagine inglesi",
    "awardSourcePages": ["url delle pagine in cui compare"],
    "blueFlags": "la frase esatta sulle Bandiere Blu / Blue Flags, con l'anno",
    "blueFlagsSourcePages": ["url"],
    "bikes": "come è scritta ESATTAMENTE la dotazione biciclette in IT e in EN; se compare un numero, riportalo",
    "guests": "numero ospiti, camere e bagni come scritti sul sito",
    "minimumStay": "la frase esatta sul soggiorno minimo",
    "pets": "la frase esatta sugli animali ammessi",
    "phone": "come è scritto il telefono sul sito",
    "email": "come è scritta l'email sul sito",
    "address": "come è scritto l'indirizzo sul sito",
    "cin": "il codice CIN come compare sul sito"
  },
  "externalLinks": {
    "airbnb": "url completo o null",
    "bookingCom": "url completo o null",
    "instagram": "url completo o null",
    "otherSocial": [{"name": "", "url": ""}],
    "houseRules": "url completo della pagina House Rules o null",
    "maps": "url di Google Maps / indicazioni stradali o null",
    "bookingEngine": "url del motore di prenotazione diretto come linkato sul sito",
    "bookingEngineWithDates": "se il motore accetta date nell'indirizzo, un esempio di url con check-in e check-out già impostati; altrimenti null",
    "logoImage": "url completo del file immagine del logo",
    "guestGuide": "url della guida ospiti se linkata, altrimenti null"
  },
  "pages": [
    {
      "id": "breve-identificativo, es. camera-main",
      "lang": "it",
      "url": "url completo della pagina",
      "title": "contenuto del tag <title>",
      "metaDescription": "contenuto della meta description, o null",
      "h1": "titolo principale visibile",
      "sections": [
        { "heading": "intestazione della sezione o null", "text": "TESTO VERBATIM, a capo mantenuti con \\n" }
      ],
      "images": [ { "alt": "testo alternativo o descrizione", "url": "url completo del file" } ],
      "links": [ { "label": "testo del link", "url": "url completo" } ],
      "notes": "qualsiasi cosa strana o poco chiara, altrimenti null"
    }
  ],
  "hiddenPages": ["url di pagine raggiungibili solo da link interni, non nel menu"],
  "inconsistencies": [
    { "what": "cosa si contraddice", "versions": ["versione A", "versione B"], "pages": ["url"] }
  ],
  "notAccessible": [ { "url": "", "reason": "" } ]
}

Ogni pagina va inserita DUE VOLTE se esiste in entrambe le lingue: una volta
con "lang": "it" e una con "lang": "en", ciascuna con il testo della sua
versione. Non duplicare traducendo.

Inizia dalla home. Restituisci solo il JSON.
````

---

## Cosa succede dopo

Incollando il JSON a Claude Code, questi punti si chiudono in automatico:

| Blocco del JSON | Cosa sblocca |
|---|---|
| `facts.awardIt` / `awardEn` | La contraddizione aperta: oggi l'italiano dice "2024 & 2025", l'inglese "2026" |
| `facts.bikes` | Se "8 bikes" è reale e va messo anche in italiano |
| `facts.*` | Verifica del testo inglese della Home, oggi non confermato |
| `externalLinks.*` | Tutti i link `#` ancora vuoti: Airbnb, Booking, Instagram, House Rules, Maps |
| `externalLinks.bookingEngineWithDates` | Far funzionare davvero le date della card di ricerca |
| `externalLinks.logoImage` | Logo reale al posto del segnaposto, e favicon |
| `pages[]` | Le pagine interne, oggi tutte "contenuto in arrivo" |
| `blueFlags` | Il punto DA VERIFICARE su 2023 vs 2024 |

Le foto in alta risoluzione restano da recuperare a parte: dal sito si
ottengono solo le versioni servite dal CDN di Google.
