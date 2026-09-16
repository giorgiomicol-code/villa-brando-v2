/*
 * Shared chrome and content blocks reused across every "Elegance" page
 * (home + 6 subpages), so header, footer and section patterns are
 * defined once instead of duplicated per page.
 */
window.VB_ELEGANCE = (() => {
  const { esc, img } = window.VB_UTILS;

  const PAGES = [
    { key: 'home', label: 'Home' },
    { key: 'villa', label: 'La Villa' },
    { key: 'camere', label: 'Camere' },
    { key: 'giardino', label: 'Giardino' },
    { key: 'galleria', label: 'Galleria' },
    { key: 'esperienze', label: 'Esperienze' },
    { key: 'info', label: 'Info' }
  ];

  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V20h3.5a1 1 0 0 0 1-1v-9"/>',
    leaf: '<path d="M20 4c-9 0-16 5-16 14 9 0 14-5 16-14Z"/><path d="M6 18C10 13 14 9 20 4"/>',
    bike: '<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 10 8h4l4.5 9.5M10 8 8 5H6M10 8l3 5h5.5"/>',
    paw: '<ellipse cx="12" cy="16.5" rx="5" ry="4"/><ellipse cx="5.5" cy="9.5" rx="2" ry="2.6"/><ellipse cx="9.5" cy="6" rx="2" ry="2.6"/><ellipse cx="14.5" cy="6" rx="2" ry="2.6"/><ellipse cx="18.5" cy="9.5" rx="2" ry="2.6"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
    phone: '<path d="M6.5 3.5c-1.7 0-3 1.3-3 3 0 8.3 6.7 15 15 15 1.7 0 3-1.3 3-3v-2.3a1 1 0 0 0-.8-1l-3.8-.8a1 1 0 0 0-1 .4l-1.2 1.6a12 12 0 0 1-5.6-5.6l1.6-1.2a1 1 0 0 0 .4-1L10.3 4.3a1 1 0 0 0-1-.8H6.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    whatsapp: '<path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.6-3.6A7.96 7.96 0 0 1 4 12Z"/>',
    play: '<circle cx="12" cy="12" r="9.5"/><path d="M10 8.5 15.5 12 10 15.5Z" fill="currentColor" stroke="none"/>'
  };
  const icon = (name, filled) => `<svg class="e-icon" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${ICONS[name]}</svg>`;

  function renderHeader(base, activeKey) {
    const home = base || './';
    const navLink = p => `<a href="${p.key === 'home' ? esc(home) : esc(home + p.key + '/')}"${p.key === activeKey ? ' class="is-active"' : ''}>${esc(p.label)}</a>`;
    const navHtml = PAGES.map(navLink).join('');
    return `
      <header class="e-header" id="top">
        <div class="e-wrap e-header-inner">
          <a class="e-brand" href="${esc(home)}" aria-label="Villa Brando home">
            <span class="e-brand-script">Villa</span>
            <span class="e-brand-name">BRANDO</span>
            <span class="e-brand-sub">Esclusiva</span>
          </a>
          <nav class="e-nav" aria-label="Sezioni del sito">${navHtml}</nav>
          <div class="e-header-actions">
            <span class="e-lang" aria-current="true">IT</span>
            <a class="e-book-btn" href="#prenota-cta">PRENOTA ORA →</a>
            <button type="button" class="e-menu-toggle" aria-expanded="false" aria-controls="e-mobile-nav" aria-label="Apri il menu">☰</button>
          </div>
        </div>
        <nav class="e-mobile-nav e-wrap" id="e-mobile-nav" aria-label="Sezioni del sito (mobile)">${navHtml}</nav>
      </header>`;
  }

  function renderFooter(base, activeKey, s) {
    const home = base || './';
    const explore = PAGES.filter(p => p.key !== 'home' && p.key !== activeKey && p.key !== 'info').slice(0, 4)
      .map(p => `<li><a href="${esc(home + p.key + '/')}">${esc(p.label)}</a></li>`).join('');
    return `
      <footer class="e-footer-final">
        <div class="e-wrap e-footer-grid">
          <div class="e-footer-brand">
            <a class="e-brand" href="${esc(home)}">
              <span class="e-brand-script">Villa</span>
              <span class="e-brand-name">BRANDO</span>
              <span class="e-brand-sub">Esclusiva</span>
            </a>
            <p class="e-footer-address">Via Torino 19, 04100 Latina, Italia</p>
          </div>
          <div>
            <p class="e-footer-heading">Esplora</p>
            <ul>${explore}</ul>
          </div>
          <div>
            <p class="e-footer-heading">Contatti</p>
            <ul>
              <li><a href="tel:+393519768732">+39 351 976 8732</a></li>
              <li><a href="${esc(s.links.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <p class="e-footer-heading">Informazioni</p>
            <ul>
              <li><a href="${esc(home + 'info/')}">Info e regole</a></li>
              <li><a href="${esc(s.links.booking)}" target="_blank" rel="noopener">Prenota</a></li>
            </ul>
          </div>
        </div>
      </footer>`;
  }

  function bindChrome(root) {
    const menuToggle = root.querySelector('.e-menu-toggle');
    const mobileNav = root.querySelector('.e-mobile-nav');
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
    root.querySelectorAll('.e-video-card button').forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.e-video-card');
        const id = card.dataset.video;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
        iframe.title = button.getAttribute('aria-label') || 'Villa Brando video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        card.replaceChildren(iframe);
      }, { once: true });
    });
  }

  const blocks = {
    hero: ({ kicker, title, subtitle, image, imageAlt }) => `
      <section class="e-page-hero">
        ${img(image, imageAlt || title, true)}
        <div class="e-wrap e-page-hero-inner">
          <p class="e-eyebrow">${esc(kicker)}</p>
          <h1>${esc(title)}</h1>
          <p>${esc(subtitle)}</p>
        </div>
      </section>`,

    split: ({ kicker, title, text, image, imageAlt, cta, imageFirst, stats }) => `
      <section class="e-section">
        <div class="e-wrap e-split${imageFirst ? ' e-split-reverse' : ''}">
          ${imageFirst ? img(image, imageAlt || title) : ''}
          <div>
            ${kicker ? `<p class="e-kicker">${esc(kicker)}</p>` : ''}
            <h2 class="e-title">${esc(title)}</h2>
            <div class="e-text">${(Array.isArray(text) ? text : [text]).map(p => `<p>${esc(p)}</p>`).join('')}</div>
            ${stats ? `<ul class="e-mini-stats">${stats.map(st => `<li><strong>${esc(st.n)}</strong><span>${esc(st.l)}</span></li>`).join('')}</ul>` : ''}
            ${cta ? `<div class="e-cta-row" style="margin-top:22px"><a class="e-btn e-gold" href="${esc(cta.href)}"${cta.external ? ' target="_blank" rel="noopener"' : ''}>${esc(cta.label)} →</a></div>` : ''}
          </div>
          ${imageFirst ? '' : img(image, imageAlt || title)}
        </div>
      </section>`,

    scriptSplit: ({ script, title, text, image, imageAlt, cta, videoId, videoLabel }) => `
      <section class="e-section">
        <div class="e-wrap e-split">
          ${videoId
            ? `<div class="e-video-card" data-video="${esc(videoId)}">${img(image, imageAlt || title)}<button type="button" aria-label="${esc(videoLabel || title)}">${icon('play')}</button></div>`
            : img(image, imageAlt || title)}
          <div>
            <p class="e-hero-script e-script-small">${esc(script)}</p>
            <h2 class="e-title">${esc(title)}</h2>
            <div class="e-text">${(Array.isArray(text) ? text : [text]).map(p => `<p>${esc(p)}</p>`).join('')}</div>
            ${cta ? `<div class="e-cta-row" style="margin-top:22px"><a class="e-btn e-gold" href="${esc(cta.href)}"${cta.external ? ' target="_blank" rel="noopener"' : ''}>${esc(cta.label)} →</a></div>` : ''}
          </div>
        </div>
      </section>`,

    amenities: ({ kicker, title, items, centered }) => `
      <section class="e-section${centered ? '' : ''}">
        <div class="e-wrap">
          <p class="e-kicker e-kicker-center"><span></span>${esc(kicker)}<span></span></p>
          <h2 class="e-title e-title-center">${esc(title)}</h2>
          <div class="e-amenity-grid">
            ${items.map(text => `<div class="e-amenity"><span class="e-amenity-dot"></span>${esc(text)}</div>`).join('')}
          </div>
        </div>
      </section>`,

    cardGrid: ({ kicker, title, subtitle, cards, base }) => `
      <section class="e-section" id="scopri">
        <div class="e-wrap">
          <p class="e-kicker e-kicker-center"><span></span>${esc(kicker)}<span></span></p>
          <h2 class="e-title e-title-center">${esc(title)}</h2>
          ${subtitle ? `<p class="e-subtitle e-subtitle-center">${esc(subtitle)}</p>` : ''}
          <div class="e-card-grid">
            ${cards.map(card => `
              <a class="e-card" href="${esc(base + card.href)}">
                ${img(card.image, card.title)}
                <div class="e-card-body">
                  <p class="e-card-title">${esc(card.title)} →</p>
                  <p class="e-card-sub">${esc(card.sub)}</p>
                </div>
              </a>`).join('')}
          </div>
        </div>
      </section>`,

    destinationRow: ({ kicker, title, subtitle, destinations, cta }) => `
      <section class="e-section e-section-tint">
        <div class="e-wrap">
          <p class="e-kicker e-kicker-center"><span></span>${esc(kicker)}<span></span></p>
          <h2 class="e-title e-title-center">${esc(title)}</h2>
          ${subtitle ? `<p class="e-subtitle e-subtitle-center">${esc(subtitle)}</p>` : ''}
          <div class="e-explore-row">
            <div class="e-explore-scroll">
              ${destinations.map(d => `
                <figure class="e-explore-card">
                  ${img(d.image, d.label)}
                  <figcaption>${esc(d.label)}${d.sub ? `<span>${esc(d.sub)}</span>` : ''}</figcaption>
                </figure>`).join('')}
            </div>
            ${cta ? `<a class="e-btn e-gold e-explore-cta" href="${esc(cta.href)}"${cta.external ? ' target="_blank" rel="noopener"' : ''}>${esc(cta.label)} →</a>` : ''}
          </div>
        </div>
      </section>`,

    gallery: ({ kicker, title, images, columns }) => `
      <section class="e-section">
        <div class="e-wrap">
          <p class="e-kicker e-kicker-center"><span></span>${esc(kicker)}<span></span></p>
          <h2 class="e-title e-title-center">${esc(title)}</h2>
          <div class="e-gallery e-gallery-wide" style="${columns ? `--e-gallery-cols:${columns}` : ''}">
            ${images.map(src => `<figure>${img(src, title)}</figure>`).join('')}
          </div>
        </div>
      </section>`,

    videoGrid: ({ kicker, title, subtitle, videos }) => `
      <section class="e-section">
        <div class="e-wrap">
          <p class="e-kicker e-kicker-center"><span></span>${esc(kicker)}<span></span></p>
          <h2 class="e-title e-title-center">${esc(title)}</h2>
          ${subtitle ? `<p class="e-subtitle e-subtitle-center">${esc(subtitle)}</p>` : ''}
          <div class="e-video-grid">
            ${videos.map(v => `
              <div class="e-video-card" data-video="${esc(v.id)}">
                <div class="e-video-placeholder"></div>
                <button type="button" aria-label="${esc(v.label)}">${icon('play')}<span>${esc(v.label)}</span></button>
              </div>`).join('')}
          </div>
        </div>
      </section>`,

    infoCards: ({ cards }) => `
      <section class="e-section">
        <div class="e-wrap e-info-grid">
          ${cards.map(card => `
            <div class="e-info-card">
              <h3 class="e-info-card-title">${esc(card.title)}</h3>
              ${card.text ? `<p class="e-info-card-text">${esc(card.text)}</p>` : ''}
              ${card.lines ? `<ul class="e-info-card-lines">${card.lines.map(l => l.href ? `<li><a href="${esc(l.href)}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${esc(l.text)}</a></li>` : `<li>${esc(l.text)}</li>`).join('')}</ul>` : ''}
              ${card.cta ? `<div class="e-cta-row" style="margin-top:18px"><a class="e-btn e-gold" href="${esc(card.cta.href)}" target="_blank" rel="noopener">${esc(card.cta.label)}→</a></div>` : ''}
            </div>`).join('')}
        </div>
      </section>`,

    ctaBanner: ({ title, cta, id }) => `
      <section class="e-cta-banner"${id ? ` id="${esc(id)}"` : ''}>
        <div class="e-wrap">
          <h2>${esc(title)}</h2>
          <a class="e-btn e-gold" href="${esc(cta.href)}"${cta.external ? ' target="_blank" rel="noopener"' : ''}>${esc(cta.label)} →</a>
        </div>
      </section>`
  };

  return { PAGES, icon, ICONS, renderHeader, renderFooter, bindChrome, blocks };
})();
