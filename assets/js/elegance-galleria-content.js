/*
 * Copy for the "Galleria" subpage, transcribed from screenshots Giorgio
 * shared on 2026-09-16. Video list reuses the already-verified 7 real
 * YouTube videos from window.VB_SHARED (assets/js/content.js).
 */
(() => {
  const s = window.VB_SHARED;
  window.VB_PAGE = {
    base: '../',
    activeKey: 'galleria',
    hero: {
      kicker: 'INTERNI · CAMERE · GIARDINO',
      title: 'Galleria',
      subtitle: 'Fotografie reali di ogni angolo della proprietà.',
      image: s.images[13]
    },
    blocks: [
      { type: 'gallery', kicker: 'SPAZI LIVING', title: 'La Villa', images: s.images.slice(9, 13) },
      { type: 'gallery', kicker: 'ZONA NOTTE', title: 'Le Camere', images: s.images.slice(14, 18) },
      { type: 'gallery', kicker: 'NATURA E RELAX', title: 'Il Giardino', images: s.images.slice(2, 8) },
      { type: 'gallery', kicker: 'ALTRI SPAZI', title: 'Sala giochi ed esterni', images: s.images.slice(19, 21) },
      {
        type: 'videoGrid',
        kicker: 'VIDEO ORIGINALI',
        title: 'Villa Brando in video',
        subtitle: 'Sette video della villa, del giardino e dei dintorni.',
        videos: s.videos
      },
      {
        type: 'ctaBanner',
        title: 'Riesci a immaginarti qui?',
        cta: { href: s.links.booking, label: 'PRENOTA DIRETTAMENTE', external: true }
      }
    ]
  };
})();
