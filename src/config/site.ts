export const siteConfig = {
  name: 'Villa Brando',
  location: 'Latina, Italia',
  currentSiteUrl: 'https://www.villabrando.com',
  bookingUrl: 'https://direct-book.com/properties/villabrando',
  phoneDisplay: '+39 351 976 8732',
  phoneHref: 'tel:+393519768732',
  whatsappHref: 'https://wa.me/393519768732',
  contactName: 'Giorgio',
  privacy: {
    en: 'https://www.villabrando.com/english/privacy',
    it: 'https://www.villabrando.com/italiano/riservatezza',
  },
} as const;

export const pageSeo = {
  title: 'Book Your Stay at Villa Brando | Direct Booking',
  description:
    'Check availability and book Villa Brando through the official direct booking engine, with personal assistance from Giorgio when needed.',
} as const;
