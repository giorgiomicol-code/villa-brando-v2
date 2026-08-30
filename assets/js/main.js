(() => {
  const root = document.documentElement;
  const main = document.querySelector('#main');
  const langButtons = [...document.querySelectorAll('[data-lang]')];
  const fallbackLang = navigator.language && navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
  const savedLang = (() => { try { return localStorage.getItem('villaBrandoLang'); } catch (_) { return null; } })();
  let lang = savedLang === 'it' || savedLang === 'en' ? savedLang : fallbackLang;

  const esc = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const paragraphs = items => items.map(text => `<p>${text}</p>`).join('');
  const img = (src, alt = '', cls = '') => `<img ${cls ? `class="${cls}" ` : ''}src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  const gallery = (items, label) => `<div class="gallery" aria-label="${esc(label)}">${items.map((src,i) => `<figure>${img(src, `${label} ${i+1}`)}</figure>`).join('')}</div>`;
  const video = item => `<div class="video-card" data-video="${esc(item.id)}"><button type="button" aria-label="${esc(item.label)}">▶ ${esc(item.label)}</button></div>`;

  function render(nextLang) {
    lang = nextLang;
    const c = window.VB_CONTENT[lang];
    const s = window.VB_SHARED;
    root.lang = lang;
    document.title = c.metaTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', c.metaDescription);

    main.innerHTML = `
      <section class="hero">
        <div class="section-inner hero-grid">
          <div class="hero-media">${img(s.images[0], 'Villa Brando')}</div>
          <div class="hero-copy">
            <p class="eyebrow">Villa Brando Exclusive</p>
            <h1>${c.hero.title}</h1>
            <p>${c.hero.subtitle}</p>
            <p>${c.hero.bookingNote}</p>
            <p>${c.hero.minimumStay}</p>
            <p>${c.hero.film}</p>
            <div class="cta-row">
              <a class="button light" href="${s.links.booking}" target="_blank" rel="noopener">${c.actions.book}</a>
              <a class="button" href="${s.links.odyssey}" target="_blank" rel="noopener">${c.actions.odyssey}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section compact"><div class="section-inner">
        ${gallery(s.images.slice(1,7), c.galleryLabel)}
        <p class="lead">${c.rating}</p>
        <p>${c.linen}</p>
        <div class="link-panel">
          <a class="button dark" href="tel:+393519768732">${c.actions.call}</a>
          <a class="button" href="${s.links.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="button" href="${s.links.brochure}" target="_blank" rel="noopener">Brochure</a>
        </div>
      </div></section>

      <section class="section"><div class="section-inner two-col">
        <div>
          <p class="eyebrow">${c.contact.kicker}</p>
          <h2 class="section-title">${c.contact.title}</h2>
          <div class="copy">${paragraphs(c.contact.lines)}</div>
        </div>
        <div>
          <div class="link-panel"><a class="button dark" href="${s.links.tours}" target="_blank" rel="noopener">${c.actions.tours}</a></div>
          <div class="copy">${paragraphs(c.residenceIntro)}</div>
        </div>
      </div></section>

      <section class="section"><div class="section-inner">
        <h2 class="section-title">${c.landTitle}</h2>
        <div class="two-col">
          ${video(s.videos[0])}
          ${video(s.videos[1])}
        </div>
        <p class="lead">${c.landCaption}</p>
      </div></section>

      <section class="section"><div class="section-inner">
        <p class="eyebrow">${c.rooms.kicker}</p>
        <h2 class="section-title">${c.rooms.title}</h2>
        <p class="lead">${c.rooms.intro}</p>
        <div class="room-grid">${c.rooms.names.map((name,i) => `<figure class="room">${img(s.images[7+i], name)}<figcaption>${name}</figcaption></figure>`).join('')}</div>
        ${gallery(s.images.slice(11,14), c.galleryLabel)}
      </div></section>

      <section class="section"><div class="section-inner">
        <p class="eyebrow">${c.about.kicker}</p>
        <h2 class="section-title">${c.about.title}</h2>
        <div class="copy">${paragraphs(c.about.paragraphs)}</div>
        ${gallery(s.images.slice(14,17), c.galleryLabel)}
        <div class="two-col" style="margin-top:24px">${video(s.videos[2])}<div class="copy">${paragraphs(c.coastIntro)}</div></div>
        ${gallery(s.images.slice(17,19), c.galleryLabel)}
      </div></section>

      <section class="section"><div class="section-inner">
        <p class="eyebrow">${c.surroundings.kicker}</p>
        <h2 class="section-title">${c.surroundings.title}</h2>
        <div class="two-col"><div class="copy">${paragraphs(c.surroundings.paragraphs)}</div>${video(s.videos[3])}</div>
        ${gallery(s.images.slice(19,20), c.galleryLabel)}
        <div class="two-col" style="margin-top:24px">${video(s.videos[4])}${video(s.videos[5])}</div>
      </div></section>

      <section class="section"><div class="section-inner">
        <h2 class="section-title">${c.characteristics.title}</h2>
        <ul class="fact-list">${c.characteristics.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div></section>

      <section class="section"><div class="section-inner">
        <p class="quote">${c.awardQuote}</p>
        <p>${c.award}</p>
        ${gallery(s.images.slice(20,23), c.galleryLabel)}
        <p><a class="button" href="${s.links.instagram}" target="_blank" rel="noopener">Instagram</a></p>
      </div></section>

      <section class="section"><div class="section-inner">
        <h2 class="section-title">${c.beaches.title}</h2>
        <p class="quote">${c.beaches.quote}</p>
        <p>${c.beaches.award}</p>
        ${gallery(s.images.slice(23,25), c.galleryLabel)}
        <div class="copy">${paragraphs(c.beaches.paragraphs)}</div>
        ${video(s.videos[6])}
        <div class="link-panel">
          <a class="button dark" href="${s.links.tours}" target="_blank" rel="noopener">${c.actions.tours}</a>
          <a class="button" href="${s.links.rules}" target="_blank" rel="noopener">${c.actions.rules}</a>
        </div>
        ${gallery(s.images.slice(25), c.galleryLabel)}
        ${c.registration ? `<p>${c.registration}</p>` : ''}
      </div></section>

      <section class="section compact"><div class="section-inner">
        <div class="legacy-keywords" aria-label="Legacy text preserved from current website">${c.legacyKeywords.map(x => `<p>${x}</p>`).join('')}</div>
      </div></section>`;

    document.querySelector('[data-i18n="header.book"]').textContent = c.actions.book;
    document.querySelector('[data-i18n="footer.top"]').textContent = c.actions.top;
    langButtons.forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try { localStorage.setItem('villaBrandoLang', lang); } catch (_) {}
    wireVideos();
  }

  function wireVideos() {
    document.querySelectorAll('.video-card button').forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.video-card');
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

  langButtons.forEach(btn => btn.addEventListener('click', () => render(btn.dataset.lang)));
  render(lang);
})();
