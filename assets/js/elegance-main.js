(() => {
  const { esc, img } = window.VB_UTILS;
  const E = window.VB_ELEGANCE;
  const c = window.VB_ELEGANCE_IT;
  const s = window.VB_SHARED;

  const heroSection = `
    <section class="e-hero">
      ${img(s.images[0], c.hero.imageAlt, true)}
      <div class="e-wrap e-hero-inner">
        <p class="e-eyebrow">${esc(c.hero.eyebrow)}</p>
        <h1>${esc(c.hero.title)}</h1>
        <p class="e-hero-script">${esc(c.hero.script)}</p>
        <p class="e-hero-location">${esc(c.hero.location)}</p>
        <div class="e-cta-row">
          <a class="e-btn e-gold" href="${esc(s.links.booking)}" target="_blank" rel="noopener">${esc(c.hero.ctaPrimary)} →</a>
        </div>
        <p class="e-hero-quote">★ ${esc(c.hero.quote)}</p>
      </div>
    </section>`;

  const bookingSection = `
    <section class="e-booking" id="prenota-cta">
      <div class="e-wrap">
        <form class="e-booking-card" action="${esc(s.links.booking)}" target="_blank" rel="noopener">
          <h2 class="e-booking-heading">${esc(c.booking.heading)}</h2>
          <div class="e-booking-grid">
            <div class="e-booking-field">
              <label for="e-checkin">${esc(c.booking.checkin)}</label>
              <input type="date" id="e-checkin" name="checkin">
            </div>
            <div class="e-booking-field">
              <label for="e-checkout">${esc(c.booking.checkout)}</label>
              <input type="date" id="e-checkout" name="checkout">
            </div>
            <div class="e-booking-field">
              <label for="e-adults">${esc(c.booking.adults)}</label>
              <select id="e-adults" name="adults">${[1,2,3,4,5,6,7,8,9].map(n => `<option value="${n}"${n===2?' selected':''}>${n}</option>`).join('')}</select>
            </div>
            <div class="e-booking-field">
              <label for="e-children">${esc(c.booking.children)}</label>
              <select id="e-children" name="children">${[0,1,2,3,4,5,6].map(n => `<option value="${n}">${n}</option>`).join('')}</select>
            </div>
          </div>
          <button class="e-booking-submit" type="submit">${esc(c.booking.submit)}</button>
          <p class="e-booking-note">${esc(c.booking.note)}</p>
          <p class="e-booking-substay">${esc(c.booking.minStay)} · ${E.icon('paw', true)} ${esc(c.booking.petNote)}</p>
        </form>
      </div>
    </section>`;

  const featuresSection = `
    <section class="e-features">
      <div class="e-wrap e-feature-strip">
        ${c.features.map(f => `
          <div class="e-feature-item">
            ${E.icon(f.icon, f.icon === 'paw')}
            <div><p class="e-feature-item-title">${esc(f.title)}</p><p class="e-feature-item-sub">${esc(f.sub)}</p></div>
          </div>`).join('')}
      </div>
    </section>`;

  const discoverSection = E.blocks.cardGrid({
    ...c.discover,
    base: './',
    cards: c.discover.cards.map(card => ({ ...card, image: s.images[card.image] }))
  });

  const bannerSection = `
    <section class="e-section">
      <div class="e-wrap e-banner-row">
        <div class="e-banner-award">
          <p class="e-banner-award-title">${esc(c.banner.awardsTitle)}</p>
          <p class="e-banner-award-sub">${esc(c.banner.awardsSub)}</p>
        </div>
        <div class="e-banner-film">
          <p class="e-banner-film-text">${esc(c.banner.filmText)}</p>
          <a class="e-btn e-gold" href="${esc(s.links.tours)}" target="_blank" rel="noopener">${esc(c.banner.filmCta)} →</a>
        </div>
      </div>
    </section>`;

  const authenticSection = E.blocks.scriptSplit({
    script: c.authentic.script,
    title: c.authentic.title,
    text: c.authentic.text,
    image: s.images[9],
    imageAlt: c.authentic.script,
    videoId: s.videos[0].id,
    videoLabel: s.videos[0].label,
    cta: { href: '#prenota-cta', label: c.authentic.cta }
  });

  const exploreSection = E.blocks.destinationRow({
    ...c.explore,
    destinations: c.explore.destinations.map(d => ({ ...d, image: s.images[d.image] })),
    cta: { href: 'esperienze/', label: c.explore.cta }
  });

  document.querySelector('#e-app').innerHTML = `
    ${E.renderHeader('./', 'home')}
    <main id="e-main">
      ${heroSection}
      ${bookingSection}
      ${featuresSection}
      ${discoverSection}
      ${bannerSection}
      ${authenticSection}
      ${exploreSection}
    </main>
    ${E.renderFooter('./', 'home', s)}`;

  E.bindChrome(document);
})();
