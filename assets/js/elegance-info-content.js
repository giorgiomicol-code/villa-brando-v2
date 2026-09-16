/*
 * Copy for the "Info" subpage, transcribed from screenshots Giorgio
 * shared on 2026-09-16. All contact details, documents and links reuse
 * the already-verified data in window.VB_SHARED (assets/js/content.js).
 * The "Directions" link is a standard Google Maps search built from the
 * verified address, not a separate fact.
 */
(() => {
  const s = window.VB_SHARED;
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Via Torino 19, 04100 Latina, Italia');
  window.VB_PAGE = {
    base: '../',
    activeKey: 'info',
    hero: {
      kicker: 'CONTATTI · REGOLE DELLA CASA · LINK UTILI',
      title: 'Info',
      subtitle: 'Tutto quello che ti serve prima e durante il soggiorno.',
      image: s.images[12]
    },
    blocks: [
      {
        type: 'infoCards',
        cards: [
          {
            title: 'Contatti',
            lines: [
              { text: 'Via Torino 19, 04100 Latina, Italia' },
              { text: '+39 351 976 8732', href: 'tel:+393519768732' },
              { text: 'villabrando.italy@gmail.com', href: 'mailto:villabrando.italy@gmail.com' },
              { text: 'WhatsApp', href: s.links.whatsapp, external: true },
              { text: 'Indicazioni', href: mapsUrl, external: true }
            ]
          },
          {
            title: 'Documenti',
            lines: [
              { text: 'Brochure di Villa Brando', href: s.links.brochure, external: true },
              { text: 'Regole della casa complete', href: s.links.rules, external: true },
              { text: 'Guida del territorio', href: s.links.odyssey, external: true },
              { text: 'CIN IT059011C27L4KEECL' }
            ]
          },
          {
            title: 'Informazioni essenziali',
            lines: [
              { text: 'Soggiorno minimo: 3 notti' },
              { text: 'Fino a 9 ospiti' },
              { text: 'Animali ammessi previo avviso' },
              { text: 'Vietato fumare negli ambienti interni' },
              { text: 'Orario di silenzio: 23:00–8:00' },
              { text: 'Check-out entro le 10:00' }
            ]
          },
          {
            title: 'Seguici e scopri',
            lines: [
              { text: 'Instagram', href: s.links.instagram, external: true },
              { text: 'Tour ed eventi', href: s.links.tours, external: true }
            ],
            text: 'Per produzioni cinematografiche, TV, servizi fotografici ed eventi, contattaci per un’offerta su misura.'
          },
          {
            title: 'Comfort inclusi',
            lines: [
              { text: 'Lenzuola, asciugamani e kit bagno' },
              { text: 'Wi-Fi gratuito' },
              { text: 'Smart TV e app di streaming' },
              { text: 'Aria condizionata e ventilatori' },
              { text: 'Area ufficio con stampante' },
              { text: 'Giardino privato recintato' }
            ]
          },
          {
            title: 'Prenotazione diretta',
            text: 'La ricerca di date e ospiti è integrata nel sito; disponibilità, condizioni e pagamento proseguono nel motore di prenotazione diretta ufficiale.',
            cta: { href: s.links.booking, label: 'APRI LA PRENOTAZIONE' }
          }
        ]
      }
    ]
  };
})();
