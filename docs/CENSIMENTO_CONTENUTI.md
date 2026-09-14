# Censimento contenuti — da compilare

## Perché serve questo file

Il sito attuale (`www.villabrando.com`, Google Sites) **non è raggiungibile
dall'ambiente in cui gira Claude Code**: la policy di rete blocca sia le
richieste dirette sia il CDN delle immagini (`lh3.googleusercontent.com`).
Non posso quindi crawlare le pagine da solo.

Poiché i testi esistenti sono *source of truth* e non vanno riscritti,
sintetizzati o tradotti ex novo, ogni pagina resta segnata "contenuto in
arrivo" finché il testo reale non viene fornito qui.

## Come compilarlo (il modo più veloce)

Per ogni pagina del sito attuale:

1. Aprire la pagina nel browser.
2. Copiare il testo **integrale**, senza riassumerlo e senza correggerlo
   (anche errori o incoerenze vanno lasciati: verranno elencati in
   "DA VERIFICARE", non corretti in autonomia).
3. Incollarlo nella scheda corrispondente qui sotto.
4. Per title e meta description: tasto destro → "Visualizza sorgente pagina"
   e copiare i tag `<title>` e `<meta name="description">`. Se è troppo
   scomodo, saltare questo passaggio: si recupereranno dopo da Search Console.

In alternativa va benissimo anche un export/copia-incolla grezzo in un file
separato per pagina: l'importante è che il testo sia **completo e verbatim**.

---

## Pagine mancanti

Ordine suggerito per priorità (le più viste per prime — se hai i dati di
Search Console/Analytics, meglio seguire quelli).

### 1. La Villa (+ Giardino)

- URL attuale:
- Title:
- Meta description:
- H1:
- Testo integrale IT:
- Testo integrale EN:
- Link presenti nella pagina (etichetta → URL):
- Foto presenti (descrizione o nome file):

### 2. Camere — pagina indice (se esiste)

- URL attuale:
- Title:
- Meta description:
- H1:
- Testo integrale IT:
- Testo integrale EN:

### 3. Camera Main

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Foto:
- Dati (posti letto, bagno privato, ecc.), solo se già presenti sul sito:

### 4. Camera Sky

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Foto:
- Dati già presenti sul sito:

### 5. Camera White

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Foto:
- Dati già presenti sul sito:

### 6. Audrey Bedroom

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Foto:
- Dati già presenti sul sito:

### 7. Gallery — Saloni

- URL attuale:
- Titolo sezione e testo eventuale:
- Elenco foto:

### 8. Gallery — Giardino

- URL attuale:
- Titolo sezione e testo eventuale:
- Elenco foto:

### 9. Gallery — Sala Giochi / Bici

- URL attuale:
- Titolo sezione e testo eventuale:
- Elenco foto:

### 10. Gallery — Animali

- URL attuale:
- Titolo sezione e testo eventuale:
- Elenco foto:

### 11. Touristic Infos

Risulta già crawlata, ma il testo non è stato trasferito in questo repository.

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:

### 12. Nelle Vicinanze

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:

### 13. Recensioni

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Recensioni riportate sul sito (testo, autore, fonte, data):

### 14. Contatti

Recapiti già noti e verificati (indirizzo, CIN, telefono, email): manca solo
il testo descrittivo della pagina, se presente.

- URL attuale:
- Title / Meta description / H1:
- Testo integrale IT:
- Testo integrale EN:
- Modulo di contatto presente? Se sì, quali campi:

### 15. Privacy

- URL attuale:
- Testo integrale IT:
- Testo integrale EN:

### 16. House Rules (pagina esterna)

- URL attuale:
- Resta esterna o va portata nel nuovo sito?
- Testo integrale, se va portata:

---

## Home in inglese

La Home italiana è già implementata con i testi reali. Manca la versione
inglese: serve il **testo inglese già esistente sul sito attuale**, non una
traduzione nuova.

- URL attuale della Home EN:
- Title / Meta description / H1:
- Testo integrale EN (tutte le sezioni della Home):

---

## Asset mancanti

- [ ] Logo Villa Brando in alta risoluzione (serve anche per la favicon:
      adesso c'è un segnaposto provvisorio `public/favicon.svg`, non il logo reale)
- [ ] Foto originali in alta risoluzione (adesso tutte hotlinkate dal CDN di
      Google Sites) — cartelle già pronte in `public/images/`
- [ ] Link reali: Airbnb, Booking.com, Instagram, House Rules, Google Maps

## Risposte che servono (da DA VERIFICARE in MIGRATION_PLAN.md)

- [ ] Premio Booking.com: anno e punteggio corretti **oggi**
- [ ] Bandiere Blu: anno corretto (2023 o 2024)
- [ ] Voce di menu "Info": a cosa deve puntare
- [ ] Pagina Recensioni: da dove si raggiunge
- [ ] URL radice `/`: default italiano o scelta lingua?
- [ ] "Film ed eventi" (banner in Home): destinazione del pulsante
