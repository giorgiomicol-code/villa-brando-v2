/*
 * Copy for the "Il Giardino" subpage, transcribed from screenshots
 * Giorgio shared on 2026-09-16 of the real ChatGPT-built site.
 */
(() => {
  const s = window.VB_SHARED;
  window.VB_PAGE = {
    base: '../',
    activeKey: 'giardino',
    hero: {
      kicker: 'NATURA · PRIVACY · RELAX',
      title: 'Il Giardino',
      subtitle: 'Un giardino privato e recintato con patii e spazi esterni da condividere.',
      image: s.images[2]
    },
    blocks: [
      {
        type: 'split',
        kicker: "VIVERE ALL'APERTO",
        title: 'Un giardino fatto per essere vissuto',
        text: 'La villa è circondata dal proprio giardino privato. Patii, tavoli e sedute creano ambientazioni diverse per la colazione, il relax e le serate insieme.',
        image: s.images[3],
        imageAlt: 'Tavolo apparecchiato nel giardino'
      },
      {
        type: 'amenities',
        kicker: 'ARREDI',
        title: 'Comfort del giardino',
        items: [
          'Arredi da giardino di qualità', 'Due tavoli e quattordici sedie', 'Tre poltrone da giardino',
          'Due poltrone in vimini', 'Scivolo per bambini', 'Altalena per bambini'
        ]
      },
      {
        type: 'gallery',
        kicker: 'ESTERNI',
        title: 'Il giardino di Villa Brando',
        images: [s.images[4], s.images[5], s.images[6], s.images[7], s.images[8]]
      },
      {
        type: 'ctaBanner',
        title: 'Il tuo spazio esterno privato',
        cta: { href: s.links.booking, label: 'VERIFICA DISPONIBILITÀ', external: true }
      }
    ]
  };
})();
