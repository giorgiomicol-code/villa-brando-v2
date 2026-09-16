(() => {
  const { esc, img } = window.VB_UTILS;
  const c = window.VB_ELEGANCE_IT;
  const s = window.VB_SHARED;
  const main = document.querySelector('#e-main');

  const FOOTER_LABELS = { brochure: 'Brochure', tours: 'Esperienze', rules: 'Regole della casa', odyssey: 'Guida', instagram: 'Instagram' };

  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V20h3.5a1 1 0 0 0 1-1v-9"/>',
    leaf: '<path d="M20 4c-9 0-16 5-16 14 9 0 14-5 16-14Z"/><path d="M6 18C10 13 14 9 20 4"/>',
    bike: '<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 10 8h4l4.5 9.5M10 8 8 5H6M10 8l3 5h5.5"/>',
    paw: '<ellipse cx="12" cy="16.5" rx="5" ry="4"/><ellipse cx="5.5" cy="9.5" rx="2" ry="2.6"/><ellipse cx="9.5" cy="6" rx="2" ry="2.6"/><ellipse cx="14.5" cy="6" rx="2" ry="2.6"/><ellipse cx="18.5" cy="9.5" rx="2" ry="2.6"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
    phone: '<path d="M6.5 3.5c-1.7 0-3 1.3-3 3 0 8.3 6.7 15 15 15 1.7 0 3-1.3 3-3v-2.3a1 1 0 0 0-.8-1l-3.8-.8a1 1 0 0 0-1 .4l-1.2 1.6a12 12 0 0 1-5.6-5.6l1.6-1.2a1 1 0 0 0 .4-1L10.3 4.3a1 1 0 0 0-1-.8H6.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    whatsapp: '<path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.6-3.6A7.96 7.96 0 0 1 4 12Z"/>'
  };
  const icon = (name, filled) => `<svg class="e-icon" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${ICONS[name]}</svg>`;

  const navLinks = links => links.map(l => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('');

  const roomCard = (name, index, src) => `
    <figure class="e-room">
      ${img(src, name)}
      <figcaption><span class="e-room-index">0${index + 1}</span><span class="e-room-name">${esc(name)}</span></figcaption>
    </figure>`;

  const gardenFigure = (src, caption) => `
    <figure>
      ${img(src, caption)}
      <figcaption>${esc(caption)}</figcaption>
    </figure>`;

  main.innerHTML = `
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
    </section>

    <section class="e-booking" id="prenota">
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
          <p class="e-booking-substay">${esc(c.booking.minStay)} · ${icon('paw', true)} ${esc(c.booking.petNote)}</p>
        </form>
      </div>
    </section>

    <section class="e-features">
      <div class="e-wrap e-feature-strip">
        ${c.features.map(f => `
          <div class="e-feature-item">
            ${icon(f.icon, f.icon === 'paw')}
            <div><p class="e-feature-item-title">${esc(f.title)}</p><p class="e-feature-item-sub">${esc(f.sub)}</p></div>
          </div>`).join('')}
      </div>
    </section>

    <section class="e-section" id="scopri">
      <div class="e-wrap">
        <p class="e-kicker e-kicker-center"><span></span>${esc(c.discover.kicker)}<span></span></p>
        <h2 class="e-title e-title-center">${esc(c.discover.heading)}</h2>
        <p class="e-subtitle e-subtitle-center">${esc(c.discover.subtitle)}</p>
        <div class="e-card-grid">
          ${c.discover.cards.map(card => `
            <a class="e-card" href="${esc(card.href)}">
              ${img(s.images[card.image], card.title)}
              <div class="e-card-body">
                <p class="e-card-title">${esc(card.title)} →</p>
                <p class="e-card-sub">${esc(card.sub)}</p>
              </div>
            </a>`).join('')}
        </div>
        <div class="e-banner-row">
          <div class="e-banner-award">
            <p class="e-banner-award-title">${esc(c.banner.awardsTitle)}</p>
            <p class="e-banner-award-sub">${esc(c.banner.awardsSub)}</p>
          </div>
          <div class="e-banner-film">
            <p class="e-banner-film-text">${esc(c.banner.filmText)}</p>
            <a class="e-btn e-gold" href="${esc(s.links.tours)}" target="_blank" rel="noopener">${esc(c.banner.filmCta)} →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="e-section" id="villa">
      <div class="e-wrap e-split">
        ${img(s.images[9], c.authentic.script)}
        <div>
          <p class="e-hero-script e-script-small">${esc(c.authentic.script)}</p>
          <h3 class="e-title">${esc(c.villa.title)}</h3>
          <div class="e-text"><p>${esc(c.authentic.text)}</p><p>${esc(c.villa.text)}</p></div>
          <div class="e-cta-row" style="margin-top:22px"><a class="e-btn e-gold" href="#prenota">${esc(c.authentic.cta)} →</a></div>
        </div>
      </div>
    </section>

    <section class="e-section" id="camere">
      <div class="e-wrap">
        <p class="e-kicker">${esc(c.camere.kicker)}</p>
        <h2 class="e-title">${esc(c.camere.title)}</h2>
        <div class="e-text"><p>${esc(c.camere.text)}</p></div>
        <div class="e-room-grid">
          ${c.camere.names.map((name, i) => roomCard(name, i, s.images[14 + i])).join('')}
        </div>
      </div>
    </section>

    <section class="e-section" id="giardino">
      <div class="e-wrap">
        <p class="e-kicker">${esc(c.giardino.kicker)}</p>
        <h2 class="e-title">${esc(c.giardino.title)}</h2>
        <div class="e-text"><p>${esc(c.giardino.text)}</p></div>
        <div class="e-cta-row" style="margin-top:22px"><a class="e-btn e-outline-navy" href="${esc(s.links.whatsapp)}" target="_blank" rel="noopener">${esc(c.giardino.cta)}</a></div>
        <div class="e-gallery">
          ${gardenFigure(s.images[2], c.giardino.captions[0])}
          ${gardenFigure(s.images[3], c.giardino.captions[1])}
          ${gardenFigure(s.images[4], c.giardino.captions[2])}
        </div>
      </div>
    </section>

    <section class="e-section" id="galleria">
      <div class="e-wrap">
        <p class="e-kicker">GALLERIA</p>
        <h2 class="e-title">Foto e video di Villa Brando</h2>
        <div class="e-gallery e-gallery-wide">
          ${s.images.slice(19, 27).map((src, i) => `<figure>${img(src, `Villa Brando ${i + 1}`)}</figure>`).join('')}
        </div>
      </div>
    </section>

    <section class="e-section e-section-tint" id="territorio">
      <div class="e-wrap">
        <p class="e-kicker e-kicker-center"><span></span>${esc(c.explore.kicker)}<span></span></p>
        <h2 class="e-title e-title-center">${esc(c.explore.title)}</h2>
        <p class="e-subtitle e-subtitle-center">${esc(c.explore.subtitle)}</p>
        <div class="e-explore-row">
          <div class="e-explore-scroll">
            ${c.explore.destinations.map(d => `
              <figure class="e-explore-card">
                ${img(s.images[d.image], d.label)}
                <figcaption>${esc(d.label)}</figcaption>
              </figure>`).join('')}
          </div>
          <a class="e-btn e-gold e-explore-cta" href="#territorio-text">${esc(c.explore.cta)} →</a>
        </div>
        <div class="e-text" id="territorio-text" style="margin-top:32px"><p>${esc(c.territorio.text)}</p></div>
      </div>
    </section>

    <section class="e-section">
      <div class="e-wrap">
        <p class="e-kicker">${esc(c.tailored.kicker)}</p>
        <h2 class="e-title">${esc(c.tailored.title)}</h2>
        <p class="e-award">${esc(c.tailored.award)}</p>
        <div class="e-feature-grid">
          ${c.tailored.features.map(f => `<div class="e-feature"><p class="e-feature-title">${esc(f.t)}</p><p class="e-feature-desc">${esc(f.d)}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="e-footer" id="contatti">
      <div class="e-wrap">
        <p class="e-kicker">${esc(c.contact.kicker)}</p>
        <h2 class="e-title">${esc(c.contact.title)}</h2>
        <ul class="e-contact-list">
          <li><a href="${esc(s.links.whatsapp)}" target="_blank" rel="noopener">${esc(c.contact.whatsappLabel)} ↗</a></li>
          <li><a href="tel:+393519768732">${esc(c.contact.phone)}</a></li>
          <li><a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></li>
          <li><a href="${esc(s.links.booking)}" target="_blank" rel="noopener">${esc(c.contact.bookLabel)} ↗</a></li>
        </ul>
        <p class="e-address">${esc(c.contact.address)}</p>
        <ul class="e-footer-links">
          ${c.contact.footerLinks.map(key => `<li><a href="${esc(s.links[key])}" target="_blank" rel="noopener">${esc(FOOTER_LABELS[key])}</a></li>`).join('')}
        </ul>
      </div>
    </section>`;

  document.querySelectorAll('[data-e-nav]').forEach(el => { el.innerHTML = navLinks(c.nav.links); });
  const menuToggle = document.querySelector('.e-menu-toggle');
  const mobileNav = document.querySelector('.e-mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
})();
