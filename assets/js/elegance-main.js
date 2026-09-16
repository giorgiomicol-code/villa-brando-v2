(() => {
  const { esc, img } = window.VB_UTILS;
  const c = window.VB_ELEGANCE_IT;
  const s = window.VB_SHARED;
  const main = document.querySelector('#e-main');

  const FOOTER_LABELS = { brochure: 'Brochure', tours: 'Esperienze', rules: 'Regole della casa', odyssey: 'Guida', instagram: 'Instagram' };

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
        <p>${esc(c.hero.lead)}</p>
        <div class="e-cta-row">
          <a class="e-btn e-light" href="#prenota">${esc(c.hero.ctaPrimary)}</a>
          <a class="e-btn" href="#villa">${esc(c.hero.ctaSecondary)}</a>
        </div>
        <a class="e-scroll-cue" href="#prenota">${esc(c.hero.explore)} ↓</a>
      </div>
    </section>

    <section class="e-booking" id="prenota">
      <div class="e-wrap">
        <form class="e-booking-card" action="${esc(s.links.booking)}" target="_blank" rel="noopener">
          <div class="e-booking-field">
            <label for="e-arrivo">${esc(c.booking.arrivo)}</label>
            <input type="date" id="e-arrivo" name="checkin">
          </div>
          <div class="e-booking-field">
            <label for="e-partenza">${esc(c.booking.partenza)}</label>
            <input type="date" id="e-partenza" name="checkout">
          </div>
          <div class="e-booking-field">
            <label for="e-ospiti">${esc(c.booking.ospiti)}</label>
            <select id="e-ospiti" name="guests">
              ${[2,3,4,5,6,7,8,9].map(n => `<option value="${n}">${n}</option>`).join('')}
            </select>
          </div>
          <button class="e-booking-submit" type="submit">${esc(c.booking.cerca)}</button>
        </form>
        <p class="e-booking-note">${esc(c.booking.note)}</p>
      </div>
    </section>

    <section class="e-section">
      <div class="e-wrap">
        <p class="e-statement">${esc(c.stats.statement)}</p>
        <ul class="e-stats">
          ${c.stats.items.map(item => `<li><strong>${esc(item.n)}</strong><span>${esc(item.l)}</span></li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="e-section" id="villa">
      <div class="e-wrap e-split">
        <div>
          <p class="e-kicker">${esc(c.villa.kicker)}</p>
          <h2 class="e-title">${esc(c.villa.title)}</h2>
          <div class="e-text"><p>${esc(c.villa.text)}</p></div>
          <div class="e-cta-row" style="margin-top:22px"><a class="e-btn e-dark" href="#camere">${esc(c.villa.cta)}</a></div>
        </div>
        ${img(s.images[18], c.villa.title)}
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
        <div class="e-cta-row" style="margin-top:22px"><a class="e-btn" href="${esc(s.links.whatsapp)}" target="_blank" rel="noopener">${esc(c.giardino.cta)}</a></div>
        <div class="e-gallery">
          ${gardenFigure(s.images[2], c.giardino.captions[0])}
          ${gardenFigure(s.images[3], c.giardino.captions[1])}
          ${gardenFigure(s.images[4], c.giardino.captions[2])}
        </div>
      </div>
    </section>

    <section class="e-section" id="territorio">
      <div class="e-wrap">
        <p class="e-kicker">${esc(c.territorio.kicker)}</p>
        <h2 class="e-title">${esc(c.territorio.title)}</h2>
        <div class="e-text"><p>${esc(c.territorio.text)}</p></div>
        <ul class="e-chips">${c.territorio.chips.map(chip => `<li>${esc(chip)}</li>`).join('')}</ul>
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
