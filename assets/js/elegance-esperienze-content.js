/*
 * Copy for the "Esperienze" subpage, transcribed from screenshots Giorgio
 * shared on 2026-09-16. The "Coast, parks and islands" paragraph and the
 * "Where the coast remembers Ulysses" line match the already-verified
 * copy in content.js almost verbatim, so they're reused as-is.
 */
(() => {
  const s = window.VB_SHARED;
  window.VB_PAGE = {
    base: '../',
    activeKey: 'esperienze',
    hero: {
      kicker: 'COSTA PONTINA · NATURA · STORIA',
      title: 'Esperienze',
      subtitle: 'Mare, laghi costieri, borghi, isole e Roma: itinerari diversi da Villa Brando.',
      image: s.images[22]
    },
    blocks: [
      {
        type: 'destinationRow',
        kicker: 'ESPLORA',
        title: 'Il nostro territorio',
        subtitle: 'Un mix unico di pianure fertili, natura e bellezza senza tempo.',
        destinations: [
          { label: 'Sabaudia e Circeo', sub: 'Mare, dune e laghi', image: s.images[21] },
          { label: 'Terracina e Gaeta', sub: 'Costa e borghi', image: s.images[22] },
          { label: 'Ninfa e i borghi', sub: 'Natura e storia', image: s.images[23] },
          { label: 'Roma', sub: 'Arte e cultura', image: s.images[24] }
        ]
      },
      {
        type: 'split',
        kicker: 'MARE E NATURA',
        title: 'Costa, parchi e isole',
        text: 'Il Lido di Latina, i laghi costieri e le dune formano un paesaggio protetto unico. Sabaudia, San Felice Circeo e Terracina sono le mete balneari più vicine. Esplora il Giardino di Ninfa, le Isole Pontine e il Parco Nazionale del Circeo, oltre a Sermoneta, Cori, Norma, Terracina, Gaeta e Fondi.',
        image: s.images[23],
        imageAlt: 'Borgo costiero vicino a Villa Brando',
        imageFirst: true,
        cta: { href: s.links.tours, label: 'TOUR ED EVENTI', external: true }
      },
      {
        type: 'scriptSplit',
        script: 'Dove la costa ricorda Ulisse.',
        title: 'Una guida da portare con te',
        text: 'Apri la guida di Villa Brando al territorio e scopri tour, attrazioni ed esperienze.',
        image: s.images[7],
        imageAlt: 'Giardino di Ninfa',
        cta: { href: s.links.odyssey, label: 'APRI LA GUIDA', external: true }
      },
      {
        type: 'ctaBanner',
        title: 'La tua base nel Lazio',
        cta: { href: s.links.booking, label: 'VERIFICA LE DATE', external: true }
      }
    ]
  };
})();
