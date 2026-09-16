/*
 * Copy for the "Le Camere" subpage, transcribed from screenshots Giorgio
 * shared on 2026-09-16. Room 01's own tagline wasn't captured in the
 * screenshots (cropped out), so it's left without an invented caption —
 * see docs/MIGRATION_PLAN.md.
 */
(() => {
  const s = window.VB_SHARED;
  window.VB_PAGE = {
    base: '../',
    activeKey: 'camere',
    hero: {
      kicker: 'QUATTRO AMBIENTI NOTTE',
      title: 'Le Camere',
      subtitle: 'Camere spaziose con Smart Monitor, app di streaming, aria condizionata e ventilatori a soffitto.',
      image: s.images[15]
    },
    blocks: [
      { type: 'split', kicker: 'CAMERA 01', title: 'Ambiente Padronale', text: 'La camera padronale, ampia e luminosa.', image: s.images[14], imageAlt: 'Ambiente Padronale' },
      { type: 'split', kicker: 'CAMERA 02', title: 'Sky Bedroom', text: 'Una camera luminosa con un ampio letto matrimoniale e comfort moderni.', image: s.images[15], imageAlt: 'Sky Bedroom', imageFirst: true },
      { type: 'split', kicker: 'CAMERA 03', title: 'White Bedroom', text: 'Geometrie anni ’70 distintive e una palette di colori chiara.', image: s.images[16], imageAlt: 'White Bedroom' },
      { type: 'split', kicker: 'CAMERA 04', title: 'Audrey Bedroom', text: 'Una camera spaziosa e luminosa dallo spirito cinematografico.', image: s.images[17], imageAlt: 'Audrey Bedroom', imageFirst: true },
      {
        type: 'amenities',
        kicker: 'COMFORT',
        title: 'Comfort della zona notte',
        items: [
          'Quattro letti matrimoniali', 'Due letti singoli aggiuntivi', 'Un lettino per bambini',
          'Quattro bagni', 'Asciugacapelli in ogni bagno', 'Ventilatori a soffitto',
          'Aria condizionata', 'Cabina armadio', 'Balcone',
          'Kit da bagno', 'Una vasca da bagno', 'Quattro docce'
        ]
      },
      {
        type: 'ctaBanner',
        title: 'Scegli le tue date',
        cta: { href: s.links.booking, label: 'PRENOTA DIRETTAMENTE', external: true }
      }
    ]
  };
})();
