/*
 * Copy for the "La Villa" subpage, transcribed from screenshots Giorgio
 * shared on 2026-09-16 of the real ChatGPT-built site. Cross-checked
 * against the already-verified about/characteristics copy in content.js
 * where they overlap (guest count, levels, living rooms, amenities list).
 */
(() => {
  const s = window.VB_SHARED;
  window.VB_PAGE = {
    base: '../',
    activeKey: 'villa',
    hero: {
      kicker: 'ARCHITETTURA ITALIANA · AUTENTICITÀ · COMFORT',
      title: 'La Villa',
      subtitle: 'Una casa autentica con interni spaziosi, tecnologia contemporanea e un giardino privato.',
      image: s.images[9]
    },
    blocks: [
      {
        type: 'split',
        kicker: 'VILLA BRANDO',
        title: 'Una casa vacanze esclusiva e sostenibile',
        text: [
          'Ideale per famiglie, gruppi di amici, soggiorni business, team aziendali, smart working, location per film e serie TV, servizi fotografici ed eventi su richiesta.',
          'Autentico esempio di architettura italiana anni ’70, la villa è stata rinnovata preservandone il carattere originale. Tecnologia domotica e serrature elettroniche garantiscono un comfort moderno.'
        ],
        image: s.images[10],
        imageAlt: 'Salone di Villa Brando',
        stats: [
          { n: '9', l: 'Ospiti' },
          { n: '3', l: 'Livelli' },
          { n: '3', l: 'Saloni' }
        ]
      },
      {
        type: 'scriptSplit',
        script: 'Spazi autentici. Soggiorni indimenticabili.',
        title: 'Spazi living',
        text: 'Tre ampi e luminosi saloni affacciati sul giardino. La villa include un’area ufficio con stampante, Wi-Fi gratuito, Alexa, Smart TV, Fire Stick, app di streaming, aria condizionata, lavatrice e un organo professionale.',
        image: s.images[11],
        imageAlt: 'Zona living di Villa Brando'
      },
      {
        type: 'amenities',
        kicker: 'COMFORT',
        title: 'Comfort della villa',
        items: [
          'Quattro camere da letto', 'Quattro bagni', 'Sala giochi',
          'Area ufficio', 'Giardino recintato', 'Tre accessi esterni',
          'Tecnologia domotica', 'Serrature elettroniche', 'Adatta ai bambini'
        ]
      },
      {
        type: 'ctaBanner',
        title: 'Vivi l’esperienza di Villa Brando',
        cta: { href: s.links.booking, label: 'VERIFICA DISPONIBILITÀ', external: true }
      }
    ]
  };
})();
