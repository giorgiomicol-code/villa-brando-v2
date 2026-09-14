// Shared English content (header, footer, contacts).
// Source: reference screenshot approved by Giorgio, which he confirmed was
// taken from the live site. Verified facts (address, CIN, phone, email) are
// the same as the Italian version.

export { brand, bookingHref, whatsappHref } from './site.it.ts';

// href "#" = destination not yet determined (see DA VERIFICARE), not a typo.
export const nav = [
  { label: 'Home', href: '/en/' },
  { label: 'The Villa', href: '/en/the-villa/' },
  { label: 'Rooms', href: '/en/rooms/' },
  { label: 'Gallery', href: '/en/gallery/' },
  { label: 'Experiences', href: '/en/experiences/' },
  { label: 'Info', href: '#' },
  { label: 'Contact', href: '/en/contact/' },
];

export const bookLabel = 'Book Your Stay';

export const contactStrip = [
  { icon: 'phone', label: 'Call Us', href: 'tel:+393519768732' },
  { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/393519768732' },
  { icon: 'email', label: 'Email', href: 'mailto:villabrando.italy@gmail.com' },
  { icon: 'directions', label: 'Get Directions', href: '#' },
];

export const footer = {
  address: 'Via Torino, 19 — 04100 Latina, Italy',
  cin: 'CIN — IT059011C27L4KEECL',
  cinCode: 'IT059011C27L4KEECL',
  phone: '+39 351 976 8732',
  phoneHref: 'tel:+393519768732',
  whatsappHref: 'https://wa.me/393519768732',
  email: 'villabrando.italy@gmail.com',
  navigate: [
    { label: 'Rooms', href: '/en/rooms/' },
    { label: 'Gallery', href: '/en/gallery/' },
    { label: 'Experiences', href: '/en/experiences/' },
    { label: 'House Rules', href: '#' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Airbnb', href: '#' },
    { label: 'Booking.com', href: '#' },
    { label: 'Direct booking', href: 'https://direct-book.com/properties/villabrando' },
  ],
  copyright: '© Villa Brando Exclusive — Latina (LT)',
  privacyHref: '#',
};
