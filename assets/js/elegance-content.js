/*
 * Copy for the "Elegance" homepage proposal. Two sources, both real:
 * 1) content_elegance_it.md, transcribed from the live ChatGPT Site text
 *    projection on 2026-09-16 (used for villa/camere/giardino/territorio/tailored/contact).
 * 2) A screenshot Giorgio shared on 2026-09-16 showing the actual hero,
 *    booking card and feature strip design — used as the higher-fidelity
 *    source for those sections since it's a direct visual capture, not a
 *    text transcript. Its "Not a typical villa..." / "Minimum stay: 3
 *    nights" strings match the already-verified copy in content.js, so
 *    they're reused from window.VB_CONTENT.it rather than retyped.
 * The unverified 2026 "Traveller Review Awards" mention seen earlier was
 * dropped in favour of the confirmed 2024/2025 Booking.com award.
 * English copy has not been captured yet — see docs/MIGRATION_PLAN.md.
 */
window.VB_ELEGANCE_IT = {
  nav: {
    tagline: 'CASA VACANZE ESCLUSIVA',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'La Villa', href: '#villa' },
      { label: 'Camere', href: '#camere' },
      { label: 'Giardino', href: '#giardino' },
      { label: 'Territorio', href: '#territorio' },
      { label: 'Contatti', href: '#contatti' }
    ],
    book: 'PRENOTA IL TUO SOGGIORNO'
  },
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
    heading: 'Una villa dalla personalità autentica',
    subtitle: 'Interni spaziosi, un giardino bellissimo e tutto il comfort di cui hai bisogno.',
    cards: [
      { title: 'La Villa', sub: 'Interni e spazi', href: '#villa', image: 18 },
      { title: 'Il Giardino', sub: 'Natura e relax', href: '#giardino', image: 2 },
      { title: 'Le Camere', sub: '4 camere uniche', href: '#camere', image: 14 },
      { title: 'Galleria', sub: 'Foto e video', href: '#galleria', image: 9 }
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
  },
  contactIcons: [
    { icon: 'phone', label: 'Chiamaci', href: 'tel:+393519768732' },
    { icon: 'whatsapp', label: 'WhatsApp', href: null },
    { icon: 'mail', label: 'Email', href: null },
    { icon: 'pin', label: 'Indicazioni', href: null }
  ],
  villa: {
    title: 'Personalità, spazio e quiete.',
    text: 'Villa Brando è un autentico esempio di architettura italiana degli anni Settanta, rinnovato preservandone il carattere originale: una scelta per chi preferisce la personalità alla standardizzazione. Si sviluppa su tre livelli ed è circondata da un giardino riservato. Gli ambienti sono ampi, arredati con cura e dotati di tecnologia smart home e serrature elettroniche.'
  },
  camere: {
    kicker: 'LE CAMERE',
    title: 'Quattro atmosfere, un solo soggiorno.',
    text: 'Zone notte spaziose, tutte dotate di Smart TV con applicazioni streaming, aria condizionata e ventilatori.',
    names: ['Ambiente Padronale', 'Sky Bedroom', 'White Bedroom', 'Audrey Bedroom']
  },
  giardino: {
    kicker: "VIVERE ALL'APERTO",
    title: 'Un giardino tutto intorno.',
    text: 'Un giardino recintato, verde e riservato avvolge la casa. I patii diventano spazi per la colazione, il riposo e le serate all’aperto.',
    cta: 'CHIEDI INFORMAZIONI',
    captions: ['Terrazza affacciata sul giardino', 'Lettini nel verde', 'Patio di Villa Brando']
  },
  territorio: {
    kicker: 'IL TERRITORIO',
    title: 'Dal mare ai borghi, fino a Roma.',
    text: 'A pochi minuti dal Lido di Latina e dal Lago di Fogliano; a circa 20 minuti dalle spiagge di Sabaudia, Terracina e San Felice Circeo. Roma è raggiungibile in treno o in auto.',
    chips: ['Sabaudia', 'Circeo', 'Giardino di Ninfa', 'Sermoneta', 'Isole Pontine', 'Roma']
  },
  tailored: {
    kicker: 'UN SOGGIORNO SU MISURA',
    title: 'Per vacanze, lavoro e progetti creativi.',
    award: 'Vincitore del Booking.com Traveller Award 2024 e 2025',
    features: [
      { t: 'Famiglie e gruppi', d: 'Spazi fino a 9 ospiti' },
      { t: 'Smart home', d: 'Comfort e accessi elettronici' },
      { t: 'Biciclette', d: 'Per esplorare i dintorni' },
      { t: 'Animali ammessi', d: 'Piccoli e ben educati, con supplemento' },
      { t: 'Lavoro e co-working', d: 'Ufficio e ampi ambienti' },
      { t: 'Film ed eventi', d: 'Solo su richiesta' }
    ]
  },
  contact: {
    kicker: 'CONTATTI',
    title: 'Il tuo soggiorno inizia da qui.',
    whatsappLabel: 'Scrivici su WhatsApp',
    phone: '+39 351 976 873 2',
    email: 'villabrando.italy@gmail.com',
    bookLabel: 'Prenota direttamente',
    address: 'Villa Brando · Via Torino 19, 04100 Latina, Italia · CIN IT059011C27L4KEECL',
    footerLinks: ['brochure', 'tours', 'rules', 'odyssey', 'instagram']
  }
};
