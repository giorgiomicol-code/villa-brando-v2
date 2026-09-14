// Contenuti condivisi su tutte le pagine IT (header, footer, contatti).
// Fatti verificati (indirizzo, CIN, telefono, email) — nessun testo inventato.
// Vedi docs/MIGRATION_PLAN.md, sezione "DA VERIFICARE" per i link ancora
// da recuperare dal sito attuale.

export const brand = {
  name: 'Villa Brando',
  tagline: 'EXCLUSIVE HOLIDAY HOME',
  // Logo attualmente hotlinkato dal CDN del sito attuale (Google Sites).
  // Sostituire con il file originale in public/images/logo/ quando disponibile.
  logoSrc:
    'https://lh3.googleusercontent.com/sitesv/AG8ngQX28YPVMLnGpJ35Kqjoug_xoFUtPH_T4webj8VmWM91Q-OPKTWSxwTWyQ-4ZTSP4a0wnXTZgMp1Gz6hbDekMqFuE4fLC5ETZZ8PIyaiMdkEi0JnMwOjjcrxPlkODTctHHKMGDCsql_hu6oiABH2K9g7iBKzGfKaeXa7t0o33SaixMQEQUbt6Gh0BtW6K2aF4GG53YgihQbNFTqJcPTeHA39ug',
};

// href a "#" = destinazione non ancora determinata/autorizzata (vedi DA VERIFICARE),
// non un errore di battitura.
export const nav = [
  { label: 'Home', href: '/it/' },
  { label: 'La Villa', href: '/it/la-villa/' },
  { label: 'Camere', href: '/it/camere/' },
  { label: 'Gallery', href: '/it/gallery/' },
  { label: 'Esperienze', href: '/it/esperienze/' },
  // "Info" era un voce distinta da "Esperienze" nel prototipo approvato, ma la
  // IA approvata unifica Info Turistiche + Nelle Vicinanze sotto Esperienze/
  // Territorio. Destinazione da confermare con Giorgio: vedi DA VERIFICARE.
  { label: 'Info', href: '#' },
  { label: 'Contatti', href: '/it/contatti/' },
];

export const bookingHref = 'https://direct-book.com/properties/villabrando';
export const whatsappHref = 'https://wa.me/393519768732';

export const contactStrip = [
  { label: 'Chiama', href: 'tel:+393519768732' },
  { label: 'WhatsApp', href: whatsappHref },
  { label: 'Email', href: 'mailto:villabrando.italy@gmail.com' },
  // Link "Indicazioni" verso Google Maps da confermare (vedi DA VERIFICARE).
  { label: 'Indicazioni', href: '#' },
];

export const footer = {
  address: 'Via Torino, 19 — 04100 Latina, Italia',
  cin: 'CIN — IT059011C27L4KEECL',
  cinCode: 'IT059011C27L4KEECL',
  phone: '+39 351 976 8732',
  phoneHref: 'tel:+393519768732',
  whatsappHref,
  email: 'villabrando.italy@gmail.com',
  navigate: [
    { label: 'Camere', href: '/it/camere/' },
    { label: 'Gallery', href: '/it/gallery/' },
    { label: 'Esperienze', href: '/it/esperienze/' },
    // House Rules è una pagina esterna su Google Sites: link da recuperare.
    { label: 'House Rules', href: '#' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Airbnb', href: '#' },
    { label: 'Booking.com', href: '#' },
    { label: 'Prenotazione diretta', href: bookingHref },
  ],
  copyright: '© Villa Brando Exclusive — Latina (LT)',
  privacyHref: '#',
};
