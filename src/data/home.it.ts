// Contenuti della Home (IT) — testo preso verbatim dal prototipo approvato
// (villa-brando-home-prototype.html), a sua volta basato sui testi reali
// del sito attuale. Non modificare il testo qui senza verifica: vedi
// docs/MIGRATION_PLAN.md, sezione "DA VERIFICARE".

export const hero = {
  bgSrc:
    'https://lh3.googleusercontent.com/sitesv/AG8ngQV7eFs3BtrbHTPFttatfY6nblZuN7D8sxAAeMIvcJiybkbc5x-2UQwgDosqrzFhYAVngBkzVFlyKaLt1bARGZnu3vpRkI2eXU9njSKNpIo4LF2L4Ob-eNzYaPipb6SnwyuQ-IIF8cJsyug4keO5EGgBDQxsGxCXzfcaaYVswCdh_M_4W8wWgP3-aBfp=w1600',
  bgAlt: 'Villa Brando — esterno e giardino',
  eyebrow: 'CASA VACANZE ESCLUSIVA',
  title: 'Villa Brando',
  subtitle: 'Holiday Home con giardino e biciclette',
  locations: 'LATINA · SABAUDIA · CIRCEO · ROMA',
  ctaPrimary: { label: 'Prenota Direttamente Con Noi', href: 'https://direct-book.com/properties/villabrando' },
  // Link WhatsApp diretto da confermare (numero reale già noto, wa.me da comporre): vedi DA VERIFICARE.
  ctaSecondary: { label: 'Scrivi su WhatsApp', href: 'https://wa.me/393519768732' },
  quote: '"Not a typical villa, it\'s truly a unique experience."',
  booking: {
    heading: 'Trova la data perfetta',
    checkin: 'Check-in',
    checkout: 'Check-out',
    placeholder: 'gg/mm/aaaa',
    cta: 'Cerca disponibilità',
    note: 'Indicare il numero esatto di adulti e bambini al momento della prenotazione.',
    stay: 'Soggiorno minimo: 3 notti · 🐾 pet friendly',
  },
};

// markup: contenuto interno del <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6">,
// identico a quello del prototipo approvato (decorativo, aria-hidden nel template).
export const iconStrip = [
  {
    title: 'Fino a 9 ospiti',
    text: '4 camere · 4 bagni',
    markup: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  },
  {
    title: 'Giardino privato',
    text: 'Relax in totale privacy',
    markup: '<path d="M12 3c4 3 4 8 0 11-4-3-4-8 0-11z"/><path d="M12 14v7"/>',
  },
  {
    title: 'Biciclette a disposizione',
    text: 'Per esplorare il territorio',
    markup: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M9 17l3-8 4 0 3 8M9 9h6"/>',
  },
  {
    title: 'Pet friendly',
    text: 'Animali di piccola taglia',
    markup: '<circle cx="12" cy="9" r="3"/><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/>',
  },
  {
    title: 'Posizione strategica',
    text: 'Vicino al mare, natura e Roma',
    markup: '<path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
  },
];

export const discover = {
  eyebrow: 'SCOPRI',
  title: 'Una casa vacanze unica',
  text: 'Interni ampi, un giardino curato e tutto il comfort di cui hai bisogno.',
  cards: [
    {
      id: 'villa-anchor',
      title: 'La Villa',
      sub: 'Interni e spazi',
      href: '/it/la-villa/',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQVPfWtKzn0aB0bzKQx0z_u4GFGRuZs8AIS0UIjnl7BbayPVhpAqeBWQ6koqvY-3Mq9mtjH28wFd9MEd1N9XyFkcXMurdZ3rONJF4eaVsGFBuz_-WytzawfVyuaJNa6j5aQzGEQ1QGDz4cQv-ywS0ebBDMrSqO7441wkzy6RTqQDQJqcWWIWxk0gccRzGXY=w800',
      imgAlt: 'La Villa',
    },
    {
      id: 'garden-anchor',
      title: 'Il Giardino',
      sub: 'Natura e relax',
      href: '/it/la-villa/#giardino',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQVq42Plzk_iNYnrcs_s1u6z6MTxeB_Lv8CMjJF4urFKvGvtXOUyPaHHDNavyVRU1wBjIjKH8C4nYU7_HdbFmmqtcKxBXfGJnS6VwQJS-c3bMF8BvDFfWVpwwCMHvLctbYkXJG_vmxKlTDpcI75oUJzCT92AUvxRgl7VoXePfLuhFtVO4recL7URwD5U=w800',
      imgAlt: 'Il Giardino',
    },
    {
      id: 'camere',
      title: 'Le Camere',
      sub: '4 camere uniche',
      href: '/it/camere/',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQWP7uofOYZnpKqso8ptW0Y4AIw6p15FUVdBwd8u2BpK7tQLSv4_i4Ef95YuIQ4Mie8vITv0u3ieFeCrzUVDPHHvw5y-AOMsjFJpZoxg3LzEtGOJ1d12MJ9oZLTRE3hnv7vwTHjmrXjcropoOQb9mjF5-oPjSrHcVOfZYj-sSiLKWtc595KUFKSiZJjYTfI=w800',
      imgAlt: 'Le Camere',
    },
    {
      id: 'gallery',
      title: 'Gallery',
      sub: 'Foto e video',
      href: '/it/gallery/',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQWSpxkPtOQfY-us2u6SdVnJKZFvTkP6mailSYX3_vNdMM3sbTVY225HZ0uZj1oGuSo7hwWZbG1w990WT4lU8rG1wIQ4yDeT7ACSGlGyK7kPuRkOtaiMv8vU920CbX-S79GTdMcRzipSgLfakGIKPWtVs0wADM3EFm_1IEAkKsrMz2CIeclkVDnhcJ4SPic=w800',
      imgAlt: 'Gallery',
    },
  ],
};

// ATTENZIONE — DA VERIFICARE (vedi docs/MIGRATION_PLAN.md):
// il sito attuale riporta formulazioni diverse per anno/punteggio del
// premio Booking.com. Questo testo replica quanto già approvato nel
// prototipo, ma non è stato confermato come definitivo da Giorgio.
export const award = {
  eyebrow: 'RECENSIONI ECCELLENTI',
  title: 'Le tue recensioni ci hanno fatto vincere un premio',
  detail: 'Booking.com Traveller Review Awards 2024 & 2025 · 5★ su Airbnb · 9.9/10 su Booking.com',
  quote: '"Cercate una location per un film? Contattateci per un\'offerta su misura."',
  cta: { label: 'Film ed eventi', href: '#' },
};

export const families = {
  eyebrow: "UN'ESPERIENZA AUTENTICA",
  title: 'Ideale per famiglie, amici e soggiorni indimenticabili',
  text: "Scopri il fascino unico di Villa Brando, un premiato rifugio per le vacanze. Goditi il comfort di interni ampi, camere ben progettate e un giardino lussureggiante — a due passi da Sabaudia, Roma e le celebri spiagge della Costa Laziale e dell'Agro Pontino.",
  cta: { label: 'Scopri la Villa', href: '/it/la-villa/' },
  media: {
    imgSrc:
      'https://lh3.googleusercontent.com/sitesv/AG8ngQXLW2AWGQpY51fGxDbsfhWU2dphztMHmYhr5WDvKBs0wjyYQEoDL-QJn6iOrcU4VftjN0VMV8w8dFbkDBjJOE0im3PjAgKyIsJu4eK7ALvBGud8d_fc8voaULZnNV7uC34DbyZdbeHLeqHh-ZHK1IUd23RzqlbtNPxdsl_F6WZSRhZ_p42Sg7iE-R8vehI=w800',
    imgAlt: 'Giardino Villa Brando',
    tagBig: 'Enjoy yourself',
    tagRest: 'May is coming — Summer sun',
  },
};

export const explore = {
  eyebrow: 'ESPLORA',
  title: 'La costa laziale, natura e storia',
  text: 'Spiagge, borghi, laghi, parchi ed esperienze autentiche a pochi minuti.',
  cards: [
    {
      title: 'Sabaudia & Circeo',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQXxO5FQqEDCnlmX9264KmsaK6KnkYli6saPT2I-g5HBZtgHYxegeI6b1lL3S9n5mkl6FfrBoPvxgrnI-0AYGue41G8OcQv8gVA0af8mZVUlgSsMsXmFfZd-u1b7FSA-pfdxPgG-m-ZupafToWSqhZKJQkEoIBr-DMKif2uK-fYGhBTw5L_g3L7UYjzthhw=w600',
      imgAlt: 'Sabaudia e Circeo',
    },
    {
      title: 'Terracina & Gaeta',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQXDCI3zX3mkeK6IyYp_98J6D-SAwuCRZ_zqyut5G53y_mg5fNnkNGGDKFRPjliGn8n6W7wULMbcyE4fzC7esC_ik4reehr8l1Fdw3z5gbjFCKYLdaCXFLBWDvH3kBzBXEzEsfzqP9sFMP4WWOkp5a8zOo-UrS7J3_j492UcdFccsk2C8gsm17mRTEoN=w600',
      imgAlt: 'Terracina e Gaeta',
    },
    {
      title: 'Giardino di Ninfa',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQUdp6j0kprkEXRF2YamCQ_sw4sduBSWugQuwGTGF80cbhlxNhVBSk8a9LpsQUG_hCq__kkAP3ltnrP6qjZtFFDz2sCQRhYqD5p7-03GklvceeWqd26X4-4hoWtDJEvlLvgbmX0FrprW8x5euNSzFtBhG1HxtkBLnSPR93Un5FCXc9kU_I_fem2zGJ7t=w600',
      imgAlt: 'Giardino di Ninfa',
    },
    {
      title: 'Roma',
      imgSrc:
        'https://lh3.googleusercontent.com/sitesv/AG8ngQV7eFs3BtrbHTPFttatfY6nblZuN7D8sxAAeMIvcJiybkbc5x-2UQwgDosqrzFhYAVngBkzVFlyKaLt1bARGZnu3vpRkI2eXU9njSKNpIo4LF2L4Ob-eNzYaPipb6SnwyuQ-IIF8cJsyug4keO5EGgBDQxsGxCXzfcaaYVswCdh_M_4W8wWgP3-aBfp=w600',
      imgAlt: 'Roma',
    },
  ],
  cta: { label: 'Tutte le esperienze', href: '/it/esperienze/' },
};
