// English Home content, transcribed from the reference screenshot Giorgio
// approved and confirmed as taken from the live site.
//
// ATTENZIONE: questo testo NON è stato verificato contro il sito live (non
// raggiungibile da questo ambiente). Va ricontrollato parola per parola prima
// della pubblicazione — vedi docs/MIGRATION_PLAN.md.
//
// Le immagini restano quelle della Home italiana: il riferimento usa foto
// diverse, ma non ne conosciamo gli indirizzi originali.

import { hero as heroIt, discover as discoverIt, families as familiesIt, explore as exploreIt } from './home.it.ts';

export const hero = {
  bgSrc: heroIt.bgSrc,
  bgAlt: 'Villa Brando — garden and pergola',
  eyebrow: 'EXCLUSIVE HOLIDAY HOME',
  title: 'Villa Brando',
  subtitle: 'Holiday Home with garden & bikes',
  locations: 'LATINA · SABAUDIA · CIRCEO · ROME',
  ctaPrimary: { label: 'Book Directly With Us', href: 'https://direct-book.com/properties/villabrando' },
  ctaSecondary: { label: 'Message us on WhatsApp', href: 'https://wa.me/393519768732' },
  quote: '🐾 Not a typical villa, it\'s truly a unique experience.',
  booking: {
    heading: 'Find Your Perfect Date',
    checkin: 'Check-in',
    checkout: 'Check-out',
    placeholder: 'gg/mm/aaaa',
    cta: 'Search',
    note: 'Please ensure the exact number of adults and children is specified at the time of booking.',
    stay: 'Minimum Stay: 3 nights · 🐾 animal friendly',
  },
};

export const iconStrip = [
  {
    title: 'Up to 9 guests',
    text: '4 bedrooms · 4 bathrooms',
    markup: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  },
  {
    title: 'Private garden',
    text: 'Relax in total privacy',
    markup: '<path d="M12 3c4 3 4 8 0 11-4-3-4-8 0-11z"/><path d="M12 14v7"/>',
  },
  {
    // Il riferimento dice "8 bikes available": il numero non compare nella
    // versione italiana, che dice solo "Biciclette a disposizione". Da
    // confermare prima di aggiungerlo anche all'italiano.
    title: '8 bikes available',
    text: 'Explore the area',
    markup: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M9 17l3-8 4 0 3 8M9 9h6"/>',
  },
  {
    title: 'Pet friendly',
    text: 'Small, well-behaved pets',
    markup: '<circle cx="12" cy="9" r="3"/><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/>',
  },
  {
    title: 'Strategic location',
    text: 'Close to the sea, nature & Rome',
    markup: '<path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
  },
];

export const discover = {
  eyebrow: 'DISCOVER',
  title: 'A Unique Holiday Home',
  text: 'Spacious interiors, beautiful garden and all the comfort you need.',
  cards: [
    { title: 'The Villa', sub: 'INTERIORS & SPACES', href: '/en/the-villa/', imgSrc: discoverIt.cards[0].imgSrc, imgAlt: 'The Villa' },
    { title: 'The Garden', sub: 'NATURE & RELAX', href: '/en/the-villa/#garden', imgSrc: discoverIt.cards[1].imgSrc, imgAlt: 'The Garden' },
    { title: 'Our Rooms', sub: '4 UNIQUE BEDROOMS', href: '/en/rooms/', imgSrc: discoverIt.cards[2].imgSrc, imgAlt: 'Our Rooms' },
    { title: 'Gallery', sub: 'PHOTOS & VIDEOS', href: '/en/gallery/', imgSrc: discoverIt.cards[3].imgSrc, imgAlt: 'Gallery' },
  ],
};

// ATTENZIONE — il riferimento inglese dice "Traveller Review Awards 2026",
// mentre il testo italiano attualmente in uso dice "2024 & 2025". È la
// discrepanza già aperta in DA VERIFICARE: non risolta, riportata com'è in
// ciascuna lingua finché Giorgio non conferma l'anno corretto.
export const award = {
  eyebrow: 'OUTSTANDING REVIEWS',
  title: 'Your outstanding reviews won us an award this year',
  detail: 'Booking.com Traveller Review Awards 2026',
  quote: 'Looking for a film location? ... Contact Us for a tailored offer',
  cta: { label: 'Film & Events', href: '#' },
};

export const families = {
  eyebrow: 'AN AUTHENTIC EXPERIENCE',
  title: 'Ideal for Families, Friends and Unforgettable Stays',
  text: 'Discover the unique charm of Villa Brando, a premier holiday retreat. Enjoy the comfort of spacious interiors, beautifully designed rooms, and a lush garden. Villa Brando is conveniently close to Sabaudia, Rome, and the renowned beaches of the Lazio Coast and Pontine Plain.',
  cta: { label: 'Discover the Villa', href: '/en/the-villa/' },
  media: {
    imgSrc: familiesIt.media.imgSrc,
    imgAlt: 'Villa Brando garden',
    tagBig: 'Enjoy yourself',
    tagRest: 'MAY IS COMING — SUMMER SUN',
  },
};

export const explore = {
  eyebrow: 'EXPLORE',
  title: 'The Italian Coast, Nature & History',
  text: 'Beaches, villages, lakes, parks and authentic experiences just minutes away.',
  cards: [
    { title: 'Sabaudia & Circeo', imgSrc: exploreIt.cards[0].imgSrc, imgAlt: 'Sabaudia and Circeo' },
    { title: 'Terracina & Gaeta', imgSrc: exploreIt.cards[1].imgSrc, imgAlt: 'Terracina and Gaeta' },
    { title: 'Ninfa Garden', imgSrc: exploreIt.cards[2].imgSrc, imgAlt: 'Ninfa Garden' },
    { title: 'Rome', imgSrc: exploreIt.cards[3].imgSrc, imgAlt: 'Rome' },
  ],
  cta: { label: 'All Experiences', href: '/en/experiences/' },
};
