# CLAUDE.md — Villa Brando V2

## Missione

Costruire il nuovo sito di Villa Brando con un'immagine premium, accogliente e contemporanea, mentre il sito attuale resta operativo. La migrazione deve essere progressiva, controllata e reversibile.

## Regole inderogabili

1. Non modificare DNS, dominio, hosting o sito pubblico senza autorizzazione esplicita di Giorgio.
2. Non pubblicare direttamente su `villabrando.com`: usare inizialmente solo un ambiente di anteprima.
3. Prima di ricostruire una pagina, registrare URL attuale, title, meta description, intestazioni, testo utile, link interni e dati strutturati.
4. Mantenere lo stesso URL quando possibile. Se cambia, documentare un redirect HTTP 301 nella matrice `docs/MIGRATION_PLAN.md`.
5. Non inventare prezzi, servizi, regole, disponibilità, recensioni o caratteristiche della struttura. Utilizzare soltanto informazioni approvate.
6. Non inserire nel codice password, token, chiavi API, dati degli ospiti o altri dati riservati.
7. Lavorare mobile-first, senza trascurare desktop e tablet.
8. Garantire accessibilità, HTML semantico, navigazione da tastiera, contrasto adeguato e testi alternativi per le immagini.
9. Ottimizzare prestazioni e Core Web Vitals: immagini compresse e dimensionate, caricamento differito e JavaScript essenziale.
10. Le pagine di anteprima devono essere escluse dall'indicizzazione finché non vengono approvate.

## Direzione grafica

- Posizionamento: villa italiana premium, elegante ma non rigida.
- Esperienza: luminosa, rassicurante, semplice da navigare e orientata alla prenotazione.
- Priorità mobile: pulsanti chiari, testi leggibili, contatti e prenotazione facilmente raggiungibili.
- Evitare layout generici, sovraccarichi o simili a portali immobiliari.
- Usare fotografie reali di Villa Brando; eventuali immagini provvisorie devono essere chiaramente segnalate.

## Architettura e contenuti

- Prima di scegliere o cambiare framework, documentare la motivazione tecnica.
- Separare contenuti, componenti e stile quando la tecnologia adottata lo consente.
- Utilizzare componenti condivisi per intestazione, navigazione, footer, contatti e inviti alla prenotazione.
- Predisporre URL puliti e coerenti.
- Gestire correttamente canonical, Open Graph, sitemap, robots e dati strutturati applicabili.
- Non eliminare contenuti esistenti che generano traffico prima di averne verificato il valore SEO.

## Flusso di lavoro per ogni pagina

1. Inserire la pagina nella matrice di migrazione.
2. Analizzare la pagina attuale e le sue dipendenze.
3. Proporre struttura, contenuti e obiettivo di conversione.
4. Implementare la nuova pagina su un branch dedicato, preferibilmente `page/nome-pagina`.
5. Verificare mobile, tablet e desktop.
6. Verificare accessibilità, prestazioni, link, form e metadati.
7. Presentare un'anteprima a Giorgio.
8. Pubblicare o sostituire la pagina soltanto dopo approvazione esplicita.
9. Dopo la pubblicazione, verificare redirect, canonical, sitemap e assenza di errori 404.

## Criteri di completamento

Una pagina è pronta solo quando:

- il contenuto è stato approvato;
- il confronto con la pagina attuale è documentato;
- la resa mobile e desktop è verificata;
- link e pulsanti funzionano;
- SEO tecnica e accessibilità sono controllate;
- l'eventuale redirect è indicato;
- esiste una procedura semplice di rollback.
