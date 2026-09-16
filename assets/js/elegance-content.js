/*
 * Copy for the "Elegance" homepage. Sourced from screenshots Giorgio shared
 * on 2026-09-16 of the real ChatGPT-built site (direct visual capture, not
 * a text transcript), cross-checked against the already-verified copy in
 * content.js where the two overlap (award text, hero quote, minimum stay).
 * See docs/MIGRATION_PLAN.md for what's still unverified.
 */
window.VB_ELEGANCE_IT = {
  hero: {
    eyebrow: 'CASA VACANZE ESCLUSIVA',
    title: 'Villa Brando',
    script: 'Casa vacanze con giardino e biciclette',
    location: 'LATINA · SABAUDIA · CIRCEO · ROMA',
    ctaPrimary: 'PRENOTA DIRETTAMENTE CON NOI',
    quote: 'Non è la solita villa, è davvero un’esperienza unica.',
    imageAlt: 'Tavola apparecchiata nel giardino di Villa Brando'
  },
  booking: {
    heading: 'Trova la data perfetta',
    checkin: 'CHECK-IN',
    checkout: 'CHECK-OUT',
    adults: 'ADULTI',
    children: 'BAMBINI',
    submit: 'CERCA',
    note: 'Le date e il numero di ospiti inseriti verranno riportati nel motore di prenotazione ufficiale.',
    minStay: 'Soggiorno minimo: 3 notti',
    petNote: 'animali ammessi'
  },
  features: [
    { icon: 'home', title: 'Fino a 9 ospiti', sub: '4 camere · 4 bagni' },
    { icon: 'leaf', title: 'Giardino privato', sub: 'Relax in totale privacy' },
    { icon: 'bike', title: '8 biciclette disponibili', sub: 'Per esplorare i dintorni' },
    { icon: 'paw', title: 'Pet friendly', sub: 'Animali piccoli e ben educati' },
    { icon: 'pin', title: 'Posizione strategica', sub: 'Vicino al mare, alla natura e a Roma' }
  ],
  discover: {
    kicker: 'SCOPRI',
    title: 'Una villa dalla personalità autentica',
    subtitle: 'Interni spaziosi, un giardino bellissimo e tutto il comfort di cui hai bisogno.',
    cards: [
      { title: 'La Villa', sub: 'Interni e spazi', href: 'villa/', image: 18 },
      { title: 'Il Giardino', sub: 'Natura e relax', href: 'giardino/', image: 2 },
      { title: 'Le Camere', sub: '4 camere uniche', href: 'camere/', image: 14 },
      { title: 'Galleria', sub: 'Foto e video', href: 'galleria/', image: 9 }
    ]
  },
  banner: {
    awardsTitle: 'Le tue recensioni eccellenti hanno ottenuto questi riconoscimenti',
    awardsSub: 'Booking.com · Traveller Review Awards 2024 e 2025',
    filmText: 'Cerchi una location per un film? Contattaci per un’offerta personalizzata.',
    filmCta: 'FILM ED EVENTI'
  },
  authentic: {
    script: 'Spazi autentici. Soggiorni indimenticabili.',
    title: 'Personalità, spazio e quiete.',
    text: 'Villa Brando è una casa vacanze vicina a Sabaudia, Roma e alle rinomate spiagge della Costa Laziale. Offre interni spaziosi, camere curate nei dettagli e un rigoglioso giardino, preservando il carattere autentico della sua architettura anni ’70.',
    cta: 'VERIFICA DISPONIBILITÀ'
  },
  explore: {
    kicker: 'ESPLORA',
    title: 'La costa italiana, tra natura e storia',
    subtitle: 'Spiagge, borghi, laghi, parchi ed esperienze autentiche a pochi minuti.',
    destinations: [
      { label: 'Sabaudia e Circeo', image: 21 },
      { label: 'Terracina e Gaeta', image: 22 },
      { label: 'Giardino di Ninfa', image: 23 },
      { label: 'Roma', image: 24 }
    ],
    cta: 'TUTTE LE ESPERIENZE'
  }
};
