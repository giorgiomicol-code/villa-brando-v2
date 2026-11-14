(function(){
'use strict';
/* ============================================================
   TRACCIAMENTO: Google tag (GA4 + Google Ads) + Consent Mode v2
   Un solo punto di caricamento per tutto il sito. Non aggiungere
   altri tag gtag.js altrove: se serve modificare il tracciamento,
   si modifica solo questo blocco.
   ============================================================ */
(function () {
  var GA4_ID = 'G-WHW22QQ8HG';
  var ADS_ID = 'AW-16750334483';
  var ADS_CONVERSION_SEND_TO = 'AW-16750334483/WiRiCL2R8IsdEJOkl7M-';
  var CONSENT_KEY = 'vbConsent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag; // esposto per il resto di site.js e per eventuali controlli esterni

  // 1) Stato di consenso di default: negato finché l'ospite non sceglie.
  //    Va impostato PRIMA di caricare gtag.js.
  var stored = null;
  try { stored = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); } catch (e) { stored = null; }
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  if (stored) {
    gtag('consent', 'update', stored);
  }

  // 2) Un solo Google tag, condiviso da GA4 e Google Ads.
  gtag('js', new Date());
  gtag('config', GA4_ID);
  gtag('config', ADS_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);

  window.vbGtag = gtag; // usato più sotto dal resto di site.js

  /* ---------- Banner cookie (accetta / rifiuta) ---------- */
  function grantAll() {
    return { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' };
  }
  function denyAll() {
    return { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
  }
  function setConsent(state) {
    gtag('consent', 'update', state);
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function buildBanner() {
    var lang = document.documentElement.lang === 'en' ? 'en' : 'it';
    var text = lang === 'en'
      ? { msg: 'Cookies?', accept: 'Ok', reject: 'No', more: 'Info' }
      : { msg: 'Cookie?', accept: 'Ok', reject: 'No', more: 'Info' };
    var privacyHref = (location.pathname.indexOf('/en/') === 0 || lang === 'en') ? '/en/privacy/' : '/it/privacy/';
    var bar = document.createElement('div');
    bar.className = 'cv-cookie-bar';
    bar.innerHTML =
      '<p>' + text.msg + ' <a href="' + privacyHref + '">' + text.more + '</a></p>' +
      '<div class="cv-cookie-actions">' +
      '<button type="button" data-cookie-reject>' + text.reject + '</button>' +
      '<button type="button" data-cookie-accept>' + text.accept + '</button>' +
      '</div>';
    document.body.appendChild(bar);
    bar.querySelector('[data-cookie-accept]').addEventListener('click', function () {
      setConsent(grantAll());
      bar.remove();
    });
    bar.querySelector('[data-cookie-reject]').addEventListener('click', function () {
      setConsent(denyAll());
      bar.remove();
    });
  }
  if (!stored) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildBanner);
    } else {
      buildBanner();
    }
  }

  /* ---------- Evento GA4: cambio lingua ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.cv-lang a');
    if (!a) return;
    gtag('event', 'language_change', {
      target_language: (a.textContent || '').trim(),
      page_location: location.href
    });
  });

  /* ---------- Click su Prenota/Book: conversione Google Ads + evento GA4 ----------
     Si applica a qualunque link che porta verso il motore di prenotazione
     (pagina /prenota/ o /book/, oppure direttamente direct-book.com).
     I link verso Airbnb/Booking.com e i contatti (tel/email/WhatsApp) sono
     esclusi di proposito: non sono "il motore di prenotazione". */
  function isBookingHref(href) {
    return /\/prenota\//.test(href) || /\/book\//.test(href) || /direct-book\.com/.test(href);
  }
  function trackBookingIntent(text, href) {
    gtag('event', 'booking_click', {
      button_text: text,
      page_location: location.href,
      language: document.documentElement.lang,
      destination_url: href
    });
  }
  window.vbTrackBookingConversion = function (text, href, navigateCb) {
    trackBookingIntent(text, href);
    if (typeof navigateCb === 'function') {
      var done = false;
      var go = function () { if (!done) { done = true; navigateCb(); } };
      gtag('event', 'conversion', { send_to: ADS_CONVERSION_SEND_TO, event_callback: go });
      setTimeout(go, 300);
    } else {
      gtag('event', 'conversion', { send_to: ADS_CONVERSION_SEND_TO });
    }
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!isBookingHref(href)) {
      var contactEvent = /^tel:/.test(href) ? 'phone_click'
        : /^mailto:/.test(href) ? 'email_click'
        : (/wa\.me\//.test(href) || /api\.whatsapp\.com/.test(href)) ? 'whatsapp_click'
        : null;
      if (contactEvent) {
        gtag('event', contactEvent, {
          page_location: location.href,
          button_text: (a.textContent || '').trim(),
          language: document.documentElement.lang,
          destination_url: href
        });
      }
      return;
    }
    var text = (a.textContent || '').trim();
    if (a.target === '_blank') {
      trackBookingIntent(text, href);
      gtag('event', 'conversion', { send_to: ADS_CONVERSION_SEND_TO });
    } else {
      e.preventDefault();
      window.vbTrackBookingConversion(text, href, function () { window.location.href = href; });
    }
  }, true);
})();

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
}

window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 32), { passive: true });

const addInfantsField = (form) => {
  if (form.elements.namedItem('infants')) return;
  const isItalian = form.dataset.locale === 'it';
  const grid = form.querySelector('.cv-date-row, .cv-book-grid');
  if (!grid) return;
  const wrapper = document.createElement('div');
  const id = `${form.matches('[data-direct-book]') ? 'book' : 'cv'}-infants-${isItalian ? 'it' : 'en'}`;
  const label = isItalian ? 'Neonati' : 'Infants';
  const age = isItalian ? 'meno di 2 anni' : 'under 2';
  wrapper.className = form.matches('[data-direct-book]') ? '' : 'cv-field';
  wrapper.innerHTML = `<label for="${id}">${label}<small>(${age})</small></label><select id="${id}" name="infants"><option selected>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>`;
  grid.appendChild(wrapper);
  const childrenLabel = form.querySelector('label[for*="children"], label[for*="bambini"]');
  if (childrenLabel && !childrenLabel.querySelector('small')) {
    childrenLabel.insertAdjacentHTML('beforeend', `<small>(${isItalian ? '2–9 anni' : 'ages 2–9'})</small>`);
  }
};

document.querySelectorAll('[data-booking-form], [data-direct-book]').forEach(addInfantsField);

document.querySelectorAll('[data-booking-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const destination = form.dataset.bookingUrl;
    if (!destination) {
      window.location.href = 'https://direct-book.com/properties/villabrando';
      return;
    }
    const values = new FormData(form);
    const url = new URL(destination, window.location.origin);
    url.searchParams.set('locale', form.dataset.locale || document.documentElement.lang || 'it');
    url.searchParams.set('checkInDate', values.get('checkin'));
    url.searchParams.set('checkOutDate', values.get('checkout'));
    url.searchParams.set('adults', values.get('adults') || '2');
    url.searchParams.set('children', values.get('children') || '0');
    url.searchParams.set('infants', values.get('infants') || '0');
    window.gtag('event', 'booking_start', {
      page_location: location.href,
      language: document.documentElement.lang,
      destination_url: `${url.pathname}${url.search}`
    });
    window.location.href = `${url.pathname}${url.search}`;
  });
});

document.querySelectorAll('[data-direct-book]').forEach((form) => {
  const isItalian = form.dataset.locale === 'it';
  const bookingSection = form.closest('section');
  const fallback = bookingSection?.querySelector('.cv-book-fallback');
  const fallbackLink = fallback?.querySelector('a');
  fallbackLink?.setAttribute('data-booking-fallback', '');
  const mobileBookingLink = document.querySelector('.cv-mobile-bar a:last-child');
  if (mobileBookingLink) mobileBookingLink.href = isItalian ? '#motore' : '#booking';
  const initialParams = new URLSearchParams(window.location.search);
  const fieldMap = {
    checkin: initialParams.get('checkInDate'),
    checkout: initialParams.get('checkOutDate'),
    adults: initialParams.get('adults'),
    children: initialParams.get('children'),
    infants: initialParams.get('infants')
  };
  Object.entries(fieldMap).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field && value !== null) field.value = value;
  });

  const getBookingUrl = () => {
    const values = new FormData(form);
    const url = new URL('https://direct-book.com/properties/villabrando');
    url.searchParams.set('locale', form.dataset.locale || 'en');
    url.searchParams.set('checkInDate', values.get('checkin'));
    url.searchParams.set('checkOutDate', values.get('checkout'));
    url.searchParams.set('items[0][adults]', values.get('adults'));
    url.searchParams.set('items[0][children]', values.get('children'));
    url.searchParams.set('items[0][infants]', values.get('infants'));
    url.searchParams.set('currency', 'EUR');
    return url;
  };

  const preserveSelection = () => {
    const values = new FormData(form);
    const bookingUrl = getBookingUrl();
    if (fallbackLink) fallbackLink.href = bookingUrl.toString();
    const localUrl = new URL(window.location.href);
    localUrl.searchParams.set('checkInDate', values.get('checkin'));
    localUrl.searchParams.set('checkOutDate', values.get('checkout'));
    localUrl.searchParams.set('adults', values.get('adults'));
    localUrl.searchParams.set('children', values.get('children'));
    localUrl.searchParams.set('infants', values.get('infants'));
    window.history.replaceState({}, '', localUrl);
    return bookingUrl;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookingUrl = preserveSelection().toString();
    const buttonText = (form.querySelector('button[type="submit"]')?.textContent || '').trim();
    window.vbTrackBookingConversion(buttonText, bookingUrl, () => { window.location.href = bookingUrl; });
  });

  preserveSelection();
});

// Calendario di prenotazione proprio (sostituisce il selettore data nativo del browser)
(() => {
  const forms = Array.from(document.querySelectorAll('[data-booking-form], [data-direct-book]'));
  if (!forms.length) return;
  const MIN_NIGHTS = 3;
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = (s) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; };
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const diffDays = (a, b) => Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const single = (n) => n === 1;

  let pop = null, active = null; // popup condiviso e modulo attivo

  const closePop = () => { if (pop) { pop.remove(); pop = null; } if (active) { active.trigIn.setAttribute('aria-expanded', 'false'); active.trigOut.setAttribute('aria-expanded', 'false'); active = null; } };

  forms.forEach((form) => {
    const inEl = form.elements.namedItem('checkin');
    const outEl = form.elements.namedItem('checkout');
    if (!inEl || !outEl) return;
    const it = (form.dataset.locale || document.documentElement.lang) === 'it';
    const loc = it ? 'it-IT' : 'en-GB';
    const L = it
      ? { ph: 'gg/mm/aaaa', nights: ['notte', 'notti'], clear: 'Cancella date', close: 'Chiudi', prev: 'Mese precedente', next: 'Mese successivo', min: `Minimo ${MIN_NIGHTS} notti`, pickOut: 'Scegli la partenza', pickIn: 'Scegli l’arrivo', cal: 'Calendario' }
      : { ph: 'dd/mm/yyyy', nights: ['night', 'nights'], clear: 'Clear dates', close: 'Close', prev: 'Previous month', next: 'Next month', min: `Minimum ${MIN_NIGHTS} nights`, pickOut: 'Choose check-out', pickIn: 'Choose check-in', cal: 'Calendar' };
    const monthFmt = new Intl.DateTimeFormat(loc, { month: 'long', year: 'numeric' });
    const dayFmt = new Intl.DateTimeFormat(loc, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const wdFmt = new Intl.DateTimeFormat(loc, { weekday: 'short' });
    const longFmt = new Intl.DateTimeFormat(loc, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    // stato
    let ci = parse(inEl.value), co = parse(outEl.value);
    if (ci && ci < today) ci = null;
    if (!ci || !co || diffDays(ci, co) < MIN_NIGHTS) co = null;
    if (!ci) co = null;
    let hover = null, view = new Date((ci || today).getFullYear(), (ci || today).getMonth(), 1);

    // i campi nativi restano come contenitori del valore (ISO) ma non sono più visibili
    const mk = (input, label) => {
      input.type = 'hidden';
      input.removeAttribute('required');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'vb-date-trigger';
      b.setAttribute('aria-haspopup', 'dialog');
      b.setAttribute('aria-expanded', 'false');
      const lab = form.querySelector(`label[for="${input.id}"]`);
      if (lab) { lab.removeAttribute('for'); b.setAttribute('aria-label', `${lab.textContent.trim()} – ${L.cal}`); }
      input.insertAdjacentElement('afterend', b);
      return b;
    };
    const trigIn = mk(inEl), trigOut = mk(outEl);
    const sync = () => {
      inEl.value = ci ? iso(ci) : '';
      outEl.value = co ? iso(co) : '';
      [[trigIn, ci], [trigOut, co]].forEach(([t, d]) => { t.textContent = d ? dayFmt.format(d) : L.ph; t.classList.toggle('is-empty', !d); });
      inEl.dispatchEvent(new Event('change', { bubbles: true }));
      outEl.dispatchEvent(new Event('change', { bubbles: true }));
    };
    sync();

    const isDisabled = (d) => {
      if (d < today) return true;
      if (ci && !co) { const n = diffDays(ci, d); return n > 0 && n < MIN_NIGHTS; }
      return false;
    };

    const render = () => {
      if (!pop) return;
      const two = window.innerWidth >= 720;
      const months = two ? [view, new Date(view.getFullYear(), view.getMonth() + 1, 1)] : [view];
      const first = new Date(now.getFullYear(), now.getMonth(), 1);
      const prevOk = view > first;
      const refEnd = co || hover;
      let html = `<div class="vb-cal-head"><button type="button" class="vb-cal-nav" data-nav="-1" aria-label="${L.prev}"${prevOk ? '' : ' disabled'}>‹</button><div class="vb-cal-title">${ci && !co ? L.pickOut : L.pickIn}</div><button type="button" class="vb-cal-nav" data-nav="1" aria-label="${L.next}">›</button></div><div class="vb-cal-months">`;
      months.forEach((m) => {
        const y = m.getFullYear(), mo = m.getMonth();
        const offset = (new Date(y, mo, 1).getDay() + 6) % 7; // lunedì primo
        const len = new Date(y, mo + 1, 0).getDate();
        html += `<div class="vb-cal-month"><div class="vb-cal-mname">${monthFmt.format(m)}</div><div class="vb-cal-grid" role="grid">`;
        for (let i = 0; i < 7; i++) html += `<span class="vb-cal-wd">${wdFmt.format(new Date(2024, 0, 1 + i)).replace('.', '').slice(0, it ? 3 : 3)}</span>`;
        for (let i = 0; i < offset; i++) html += '<span></span>';
        for (let d = 1; d <= len; d++) {
          const day = new Date(y, mo, d);
          const dis = isDisabled(day);
          let cls = 'vb-cal-day';
          if (dis) cls += ' is-off';
          if (ci && +day === +ci) cls += ' is-start';
          if (co && +day === +co) cls += ' is-end';
          if (ci && refEnd && day > ci && day < refEnd) cls += ' is-range';
          if (+day === +today) cls += ' is-today';
          html += `<button type="button" class="${cls}" data-d="${iso(day)}"${dis ? ' disabled' : ''} aria-label="${longFmt.format(day)}">${d}</button>`;
        }
        html += '</div></div>';
      });
      const n = ci && co ? diffDays(ci, co) : 0;
      html += `</div><div class="vb-cal-foot"><span class="vb-cal-info">${n ? `${n} ${L.nights[single(n) ? 0 : 1]}` : L.min}</span><span class="vb-cal-actions"><button type="button" class="vb-cal-clear" data-clear>${L.clear}</button><button type="button" class="vb-cal-done" data-close>${L.close}</button></span></div>`;
      pop.innerHTML = html;
    };

    const place = (anchor) => {
      if (!pop) return;
      if (window.innerWidth < 720) { pop.classList.add('is-sheet'); pop.style.cssText = ''; return; }
      pop.classList.remove('is-sheet');
      const r = anchor.getBoundingClientRect();
      const w = pop.offsetWidth, h = pop.offsetHeight;
      let left = Math.min(Math.max(12, r.left), window.innerWidth - w - 12);
      let top = r.bottom + 8;
      if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 8);
      pop.style.left = `${left}px`; pop.style.top = `${top}px`;
    };

    const open = (anchor) => {
      if (active === api && pop) { return; }
      closePop();
      active = api;
      pop = document.createElement('div');
      pop.className = 'vb-cal';
      pop.setAttribute('role', 'dialog');
      pop.setAttribute('aria-label', L.cal);
      document.body.appendChild(pop);
      anchor.setAttribute('aria-expanded', 'true');
      view = new Date((ci || today).getFullYear(), (ci || today).getMonth(), 1);
      render(); place(anchor);
      pop.addEventListener('click', onClick);
      pop.addEventListener('mouseover', onOver);
      pop.addEventListener('wheel', onWheel, { passive: false });
      pop.addEventListener('mouseleave', () => { if (hover) { hover = null; render(); } });
    };

    const shift = (n) => { const nv = new Date(view.getFullYear(), view.getMonth() + n, 1); if (nv < new Date(now.getFullYear(), now.getMonth(), 1)) return; view = nv; render(); };
    let wheelLock = 0;
    const onWheel = (e) => {
      e.preventDefault();
      const t = Date.now();
      if (t - wheelLock < 220 || Math.abs(e.deltaY) < 4) return;
      wheelLock = t;
      shift(e.deltaY > 0 ? 1 : -1);
    };
    const onOver = (e) => {
      const b = e.target.closest('.vb-cal-day');
      if (!b || b.disabled || !ci || co) return;
      const d = parse(b.dataset.d);
      if (d > ci && (!hover || +hover !== +d)) { hover = d; render(); }
    };
    const onClick = (e) => {
      const nav = e.target.closest('[data-nav]');
      if (nav) { shift(+nav.dataset.nav); return; }
      if (e.target.closest('[data-clear]')) { ci = co = hover = null; sync(); render(); return; }
      if (e.target.closest('[data-close]')) { closePop(); return; }
      const b = e.target.closest('.vb-cal-day');
      if (!b || b.disabled) return;
      const d = parse(b.dataset.d);
      if (!ci || co || d <= ci) { ci = d; co = null; hover = null; sync(); render(); return; }
      co = d; hover = null; sync(); closePop();
    };
    const api = { trigIn, trigOut, view: () => view, render, place };
    trigIn.addEventListener('click', () => open(trigIn));
    trigOut.addEventListener('click', () => { if (!ci) open(trigIn); else open(trigOut); });

    // controllo date prima dell'invio (i campi nativi non sono più "required")
    form.addEventListener('submit', (e) => {
      if (ci && co) return;
      e.preventDefault(); e.stopImmediatePropagation();
      open(ci ? trigOut : trigIn);
    }, true);
  });

  document.addEventListener('mousedown', (e) => { if (pop && !pop.contains(e.target) && !e.target.closest('.vb-date-trigger')) closePop(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && pop) { const t = active && active.trigIn; closePop(); t && t.focus(); } });
  window.addEventListener('resize', () => { if (pop && active) { active.render(); active.place(active.trigIn); } });
  window.addEventListener('scroll', () => { if (pop && active && window.innerWidth >= 720) closePop(); }, { passive: true });
})();

const reveals = document.querySelectorAll('[data-reveal]');
if (typeof window.IntersectionObserver === 'function') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((node) => observer.observe(node));
} else {
  reveals.forEach((node) => node.classList.add('is-visible'));
}

const photoCodes = new Map([
  ['/assets/official/hero-terrace-garden.jpeg', 'H01'],
  ['/assets/official/villa-facade.webp', 'V01'],
  ['/assets/official/salone-rosa.webp', 'V02'],
  ['/assets/living-room.webp', 'V03'],
  ['/assets/official/living-white.webp', 'V04'],
  ['/assets/official/living-steps.webp', 'V05'],
  ['/assets/official/kitchen.webp', 'V06'],
  ['/assets/official/game-room.webp', 'V07'],
  ['/assets/official/main-bedroom-official.webp', 'R01'],
  ['/assets/official/sky-bedroom-official.webp', 'R02'],
  ['/assets/sky-bedroom.webp', 'R02'],
  ['/assets/official/white-bedroom-official.webp', 'R03'],
  ['/assets/official/audrey-bedroom-wide.webp', 'R04'],
  ['/assets/hero-garden.webp', 'G01'],
  ['/assets/official/booking-garden.webp', 'G02'],
  ['/assets/garden-loungers.webp', 'G03'],
  ['/assets/patio.webp', 'G04'],
  ['/assets/official/garden-entrance.webp', 'G06'],
  ['/assets/official/garden-front.webp', 'G07'],
  ['/assets/garden-house-view.webp', 'G08'],
  ['/assets/exterior-front.webp', 'X01'],
  ['/assets/exterior-side.webp', 'X02'],
  ['/assets/gallery-night.webp', 'X03'],
  ['/assets/destination-sabaudia.webp', 'E01'],
  ['/assets/destination-coast.webp', 'E02'],
  ['/assets/destination-ninfa.webp', 'E03'],
  ['/assets/destination-rome.webp', 'E04']
]);

const photoContainerSelector = [
  '.cv-hero-bg',
  '.cv-page-hero',
  '.cv-card-media',
  '.cv-feature-video',
  '.cv-destination-image',
  '.cv-editorial-media',
  '.cv-photo',
  '.cv-room-media'
].join(', ');

const lightboxPhotos = Array.from(document.querySelectorAll('body.elegance main img:not([data-no-lightbox])'));

lightboxPhotos.forEach((photo) => {
  if (photo.dataset.photoCode) return; // i codici attuali sono già nell'HTML: la vecchia tabella non va applicata
  const sourcePath = new URL(photo.getAttribute('src'), window.location.origin).pathname;
  const code = photoCodes.get(sourcePath);
  if (!code) return;
  photo.dataset.photoCode = code;
  const container = photo.closest(photoContainerSelector) || photo.parentElement;
  if (!container || container.querySelector(':scope > .cv-photo-code')) return;
  container.classList.add('cv-coded-photo');
  const badge = document.createElement('span');
  badge.className = 'cv-photo-code';
  badge.textContent = code;
  badge.setAttribute('aria-hidden', 'true');
  container.appendChild(badge);
});

if (lightboxPhotos.length) {
  const isItalian = document.documentElement.lang === 'it';
  const labels = isItalian
    ? { close: 'Chiudi foto', previous: 'Foto precedente', next: 'Foto successiva', enlarge: 'Ingrandisci foto' }
    : { close: 'Close photo', previous: 'Previous photo', next: 'Next photo', enlarge: 'Enlarge photo' };
  const lightbox = document.createElement('div');
  let activeIndex = 0;
  let singleMode = false; // true: mostra solo la foto cliccata, senza frecce né scorrimento verso le altre
  let hideTimer;

  lightbox.className = 'cv-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="cv-lightbox-dialog" role="dialog" aria-modal="true" aria-label="${labels.enlarge}">
      <button class="cv-lightbox-close" type="button" aria-label="${labels.close}">×</button>
      <button class="cv-lightbox-nav cv-lightbox-prev" type="button" aria-label="${labels.previous}">‹</button>
      <figure class="cv-lightbox-figure">
        <img class="cv-lightbox-image" alt="">
        <figcaption class="cv-lightbox-caption"></figcaption>
      </figure>
      <button class="cv-lightbox-nav cv-lightbox-next" type="button" aria-label="${labels.next}">›</button>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('.cv-lightbox-image');
  const lightboxCaption = lightbox.querySelector('.cv-lightbox-caption');
  const closeButton = lightbox.querySelector('.cv-lightbox-close');
  let touchStartX = 0;
  let touchStartY = 0;

  const showPhoto = (index) => {
    activeIndex = (index + lightboxPhotos.length) % lightboxPhotos.length;
    const photo = lightboxPhotos[activeIndex];
    lightboxImage.src = photo.currentSrc || photo.src;
    lightboxImage.alt = photo.alt || '';
    const code = photo.dataset.photoCode;
    lightboxCaption.textContent = [code, photo.alt].filter(Boolean).join(' · ');
    lightboxCaption.hidden = !code && !photo.alt;
  };

  const openLightbox = (index) => {
    window.clearTimeout(hideTimer);
    singleMode = lightboxPhotos[index].hasAttribute('data-lightbox-single');
    lightbox.classList.toggle('is-single', singleMode);
    showPhoto(index);
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    window.requestAnimationFrame(() => lightbox.classList.add('is-open'));
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    hideTimer = window.setTimeout(() => {
      lightbox.hidden = true;
      lightboxImage.removeAttribute('src');
    }, 180);
    lightboxPhotos[activeIndex]?.focus({ preventScroll: true });
  };

  lightboxPhotos.forEach((photo, index) => {
    photo.classList.add('cv-lightbox-trigger');
    photo.tabIndex = 0;
    photo.setAttribute('role', 'button');
    photo.setAttribute('aria-label', `${labels.enlarge}${photo.alt ? `: ${photo.alt}` : ''}`);
    photo.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(index);
    });
    photo.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.querySelector('.cv-lightbox-prev').addEventListener('click', () => { if (!singleMode) showPhoto(activeIndex - 1); });
  lightbox.querySelector('.cv-lightbox-next').addEventListener('click', () => { if (!singleMode) showPhoto(activeIndex + 1); });
  lightbox.addEventListener('click', (event) => {
    if (!event.target.closest('.cv-lightbox-image, .cv-lightbox-close, .cv-lightbox-nav')) closeLightbox();
  });
  lightboxImage.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });
  lightboxImage.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStartX;
    const distanceY = touch.clientY - touchStartY;
    if (!singleMode && Math.abs(distanceX) > 48 && Math.abs(distanceX) > Math.abs(distanceY)) {
      showPhoto(activeIndex + (distanceX < 0 ? 1 : -1));
    }
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (singleMode) return;
    if (event.key === 'ArrowLeft') showPhoto(activeIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(activeIndex + 1);
  });
}

// Cover Flow 3D: galleria fotografica con effetto prospettico (bagni, camere, sala giochi & bici)
const initializeCoverflow = (coverflowGallery) => {
  const slides = Array.from(coverflowGallery.querySelectorAll(':scope > .cv-photo'));
  if (!slides.length) return;

  const isItalian = document.documentElement.lang === 'it';
  const coverflowKind = coverflowGallery.dataset.coverflow;
  const hasGroups = slides.some((slide) => slide.dataset.coverflowGroup);
  let activeSlide = 0;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let didSwipe = false;

  coverflowGallery.classList.add('cv-coverflow');
  coverflowGallery.tabIndex = 0;
  coverflowGallery.setAttribute('role', 'region');
  coverflowGallery.setAttribute('aria-roledescription', 'carousel');
  const ariaLabels = {
    bathrooms: ['Galleria fotografica dei bagni', 'Bathroom photo gallery'],
    rooms: ['Galleria fotografica delle camere', 'Room photo gallery'],
    leisure: ['Galleria fotografica sala giochi e bici', 'Games room and bikes photo gallery'],
  };
  const [labelIt, labelEn] = ariaLabels[coverflowKind] || ['Galleria fotografica della villa', 'Villa photo gallery'];
  coverflowGallery.setAttribute('aria-label', isItalian ? labelIt : labelEn);

  slides.forEach((slide, index) => {
    slide.dataset.coverflowIndex = String(index);
    slide.querySelector('img')?.setAttribute('data-no-lightbox', '');
  });

  const controls = document.createElement('div');
  controls.className = 'cv-coverflow-controls';
  const groupKeys = [...new Set(slides.map((slide) => slide.dataset.coverflowGroup).filter(Boolean))];
  controls.innerHTML = `
    <div class="cv-coverflow-navigation">
    <button class="cv-coverflow-button cv-coverflow-previous" type="button" aria-label="${isItalian ? 'Foto precedente' : 'Previous photo'}">‹</button>
    <span class="cv-coverflow-status" aria-live="polite"></span>
    <button class="cv-coverflow-button cv-coverflow-next" type="button" aria-label="${isItalian ? 'Foto successiva' : 'Next photo'}">›</button>
    </div>`;
  coverflowGallery.after(controls);

  const status = controls.querySelector('.cv-coverflow-status');
  const groupButtons = Array.from(controls.querySelectorAll('.cv-coverflow-group'));
  const normalize = (index) => (index + slides.length) % slides.length;
  const shortestOffset = (index) => {
    let offset = index - activeSlide;
    if (offset > slides.length / 2) offset -= slides.length;
    if (offset < -slides.length / 2) offset += slides.length;
    return offset;
  };

  const renderCoverflow = () => {
    slides.forEach((slide, index) => {
      const offset = shortestOffset(index);
      const distance = Math.abs(offset);
      const visible = distance <= 2;
      slide.classList.toggle('is-previous-one', offset === -1);
      slide.classList.toggle('is-next-one', offset === 1);
      slide.classList.toggle('is-previous-two', offset === -2);
      slide.classList.toggle('is-next-two', offset === 2);
      slide.style.zIndex = String(20 - distance);
      slide.classList.toggle('is-active', offset === 0);
      slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      slide.tabIndex = visible ? 0 : -1;
      slide.style.pointerEvents = visible ? 'auto' : 'none';
    });
    const active = slides[activeSlide];
    if (hasGroups) {
      status.textContent = active.dataset.groupName || active.dataset.groupLabel || '';
    } else {
      status.textContent = `${isItalian ? 'Foto' : 'Photo'} ${activeSlide + 1}/${slides.length}`;
    }
  };

  const goTo = (index) => {
    activeSlide = normalize(index);
    renderCoverflow();
  };

  slides.forEach((slide, index) => {
    slide.addEventListener('click', (event) => {
      if (didSwipe) {
        event.preventDefault();
        didSwipe = false;
        return;
      }
      goTo(index);
    });
    slide.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goTo(index);
      }
    });
  });
  controls.querySelector('.cv-coverflow-previous').addEventListener('click', () => goTo(activeSlide - 1));
  controls.querySelector('.cv-coverflow-next').addEventListener('click', () => goTo(activeSlide + 1));
  groupButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetIndex = slides.findIndex((slide) => slide.dataset.coverflowGroup === button.dataset.coverflowTarget);
      if (targetIndex >= 0) goTo(targetIndex);
    });
  });
  coverflowGallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goTo(activeSlide - 1);
    if (event.key === 'ArrowRight') goTo(activeSlide + 1);
  });
  // Mouse / penna: eventi pointer
  coverflowGallery.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') return;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
  });
  coverflowGallery.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'touch') return;
    const distanceX = event.clientX - pointerStartX;
    const distanceY = event.clientY - pointerStartY;
    if (Math.abs(distanceX) > 45 && Math.abs(distanceX) > Math.abs(distanceY)) {
      didSwipe = true;
      goTo(activeSlide + (distanceX < 0 ? 1 : -1));
    }
  });
  // Dito: eventi touch. A differenza dei pointer non vengono annullati quando il
  // browser inizia a scorrere la pagina (succede spesso col telefono in orizzontale).
  let touchX = 0, touchY = 0, touchLock = null;
  coverflowGallery.addEventListener('touchstart', (event) => {
    const t = event.touches[0];
    touchX = t.clientX; touchY = t.clientY; touchLock = null;
  }, { passive: true });
  coverflowGallery.addEventListener('touchmove', (event) => {
    const t = event.touches[0];
    const dx = t.clientX - touchX, dy = t.clientY - touchY;
    if (touchLock === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      touchLock = Math.abs(dx) > Math.abs(dy) * 0.7 ? 'x' : 'y';
    }
    if (touchLock === 'x' && event.cancelable) event.preventDefault();
  }, { passive: false });
  coverflowGallery.addEventListener('touchend', (event) => {
    const t = event.changedTouches[0];
    const dx = t.clientX - touchX, dy = t.clientY - touchY;
    if (touchLock === 'x' && Math.abs(dx) > 30) {
      didSwipe = true;
      goTo(activeSlide + (dx < 0 ? 1 : -1));
    }
    touchLock = null;
  });

  renderCoverflow();
};

document.querySelectorAll('.cv-villa-gallery, [data-coverflow="bathrooms"], [data-coverflow="rooms"], [data-coverflow="leisure"], [data-coverflow="features"], [data-coverflow="home"]').forEach(initializeCoverflow);

// Collegamento tra la mini-gallery sotto il Cover Flow e i pulsanti di gruppo del Cover Flow stesso
document.querySelectorAll('[data-jump-to-group]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.jumpToGroup;
    const groupBtn = document.querySelector(`.cv-coverflow-group[data-coverflow-target="${target}"]`);
    if (groupBtn) {
      groupBtn.click();
      document.querySelector('.cv-coverflow[data-coverflow="rooms"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Overlay dei codici foto (H1, V2, C9...) — visibile solo con ?codici=1 nell'URL, per riferimento interno
if (new URLSearchParams(location.search).has('codici')) {
  document.querySelectorAll('img[data-photo-code]').forEach((img) => {
    const parent = img.parentElement;
    if (parent && getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    const badge = document.createElement('span');
    badge.className = 'cv-photocode-badge';
    badge.textContent = img.dataset.photoCode;
    parent.appendChild(badge);
  });
}

// Indicatore di scorrimento (principio generale)
(() => {
  const isScroller = (el) => {
    if (el.closest('[data-coverflow], .cv-coverflow')) return false;
    const ox = getComputedStyle(el).overflowX;
    return (ox === 'auto' || ox === 'scroll') && el.scrollWidth > el.clientWidth + 8;
  };
  const setup = () => {
    document.querySelectorAll('main *, .cv-benefits *').forEach((el) => {
      if (el.dataset.scrollHint === 'done' || el.classList.contains('vg-scroll-wrap')) return;
      if (!isScroller(el)) return;
      el.dataset.scrollHint = 'done';
      const wrap = document.createElement('div');
      wrap.className = 'vg-scroll-wrap';
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vg-scroll-hint';
      btn.setAttribute('aria-label', document.documentElement.lang === 'it' ? 'Scorri a destra' : 'Scroll right');
      btn.innerHTML = '<span aria-hidden="true">›</span>';
      wrap.appendChild(btn);
      let bgEl = wrap, bg = 'rgb(255, 255, 255)';
      while (bgEl && bgEl !== document.documentElement) {
        const c = getComputedStyle(bgEl).backgroundColor;
        if (c && c !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(c)) { bg = c; break; }
        bgEl = bgEl.parentElement;
      }
      wrap.style.setProperty('--vg-hint-bg', bg);
      const update = () => {
        const more = el.scrollLeft + el.clientWidth < el.scrollWidth - 8 && el.scrollWidth > el.clientWidth + 8;
        wrap.classList.toggle('has-more', more);
      };
      btn.addEventListener('click', () => el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' }));
      el.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });
  };
  const run = () => requestAnimationFrame(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(setup, 200); });
})();

})();
