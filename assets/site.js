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
  const label = isItalian ? 'Infanti' : 'Infants';
  const age = isItalian ? 'meno di 2 anni' : 'under 2';
  wrapper.className = form.matches('[data-direct-book]') ? '' : 'cv-field';
  wrapper.innerHTML = `<label for="${id}">${label}<small>${age}</small></label><select id="${id}" name="infants"><option selected>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>`;
  grid.appendChild(wrapper);
  const childrenLabel = form.querySelector('label[for*="children"], label[for*="bambini"]');
  if (childrenLabel && !childrenLabel.querySelector('small')) {
    childrenLabel.insertAdjacentHTML('beforeend', `<small>${isItalian ? '2–9 anni' : 'ages 2–9'}</small>`);
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
    window.location.href = preserveSelection().toString();
  });

  preserveSelection();
});

const reveals = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
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
  ['/villa-brando-v2/assets/official/hero-terrace-garden.jpeg', 'H01'],
  ['/villa-brando-v2/assets/official/villa-facade.webp', 'V01'],
  ['/villa-brando-v2/assets/official/salone-rosa.webp', 'V02'],
  ['/villa-brando-v2/assets/living-room.webp', 'V03'],
  ['/villa-brando-v2/assets/official/living-white.webp', 'V04'],
  ['/villa-brando-v2/assets/official/living-steps.webp', 'V05'],
  ['/villa-brando-v2/assets/official/kitchen.webp', 'V06'],
  ['/villa-brando-v2/assets/official/game-room.webp', 'V07'],
  ['/villa-brando-v2/assets/official/main-bedroom-official.webp', 'R01'],
  ['/villa-brando-v2/assets/official/sky-bedroom-official.webp', 'R02'],
  ['/villa-brando-v2/assets/sky-bedroom.webp', 'R02'],
  ['/villa-brando-v2/assets/official/white-bedroom-official.webp', 'R03'],
  ['/villa-brando-v2/assets/official/audrey-bedroom-wide.webp', 'R04'],
  ['/villa-brando-v2/assets/hero-garden.webp', 'G01'],
  ['/villa-brando-v2/assets/official/booking-garden.webp', 'G02'],
  ['/villa-brando-v2/assets/garden-loungers.webp', 'G03'],
  ['/villa-brando-v2/assets/patio.webp', 'G04'],
  ['/villa-brando-v2/assets/garden-path.webp', 'G05'],
  ['/villa-brando-v2/assets/official/garden-entrance.webp', 'G06'],
  ['/villa-brando-v2/assets/official/garden-front.webp', 'G07'],
  ['/villa-brando-v2/assets/exterior-front.webp', 'X01'],
  ['/villa-brando-v2/assets/exterior-side.webp', 'X02'],
  ['/villa-brando-v2/assets/gallery-night.webp', 'X03'],
  ['/villa-brando-v2/assets/destination-sabaudia.webp', 'E01'],
  ['/villa-brando-v2/assets/destination-coast.webp', 'E02'],
  ['/villa-brando-v2/assets/destination-ninfa.webp', 'E03'],
  ['/villa-brando-v2/assets/destination-rome.webp', 'E04']
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
  lightbox.querySelector('.cv-lightbox-prev').addEventListener('click', () => showPhoto(activeIndex - 1));
  lightbox.querySelector('.cv-lightbox-next').addEventListener('click', () => showPhoto(activeIndex + 1));
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
    if (Math.abs(distanceX) > 48 && Math.abs(distanceX) > Math.abs(distanceY)) {
      showPhoto(activeIndex + (distanceX < 0 ? 1 : -1));
    }
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPhoto(activeIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(activeIndex + 1);
  });
}


// work-shared: unified Italian footer and rooms coverflow
const initRoomCoverflow = () => {
  const root = document.querySelector('[data-coverflow]');
  if (!root) return;
  const cards = Array.from(root.querySelectorAll('[data-coverflow-card]'));
  const dots = root.querySelector('[data-coverflow-dots]');
  let active = 0;
  const render = () => {
    cards.forEach((card, index) => {
      card.classList.remove('is-active','is-prev','is-next','is-far-prev','is-far-next');
      const raw = (index - active + cards.length) % cards.length;
      const diff = raw > cards.length / 2 ? raw - cards.length : raw;
      card.classList.add(diff === 0 ? 'is-active' : diff === -1 ? 'is-prev' : diff === 1 ? 'is-next' : diff < 0 ? 'is-far-prev' : 'is-far-next');
      card.setAttribute('aria-current', diff === 0 ? 'true' : 'false');
    });
    if (dots) Array.from(dots.children).forEach((dot, index) => dot.classList.toggle('is-active', index === active));
  };
  if (dots) cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.className = 'cv-coverflow-dot'; dot.setAttribute('aria-label', 'Mostra camera ' + (index + 1));
    dot.addEventListener('click', () => { active = index; render(); });
    dots.appendChild(dot);
  });
  root.querySelector('[data-coverflow-prev]')?.addEventListener('click', () => { active = (active - 1 + cards.length) % cards.length; render(); });
  root.querySelector('[data-coverflow-next]')?.addEventListener('click', () => { active = (active + 1) % cards.length; render(); });
  cards.forEach((card,index)=>card.addEventListener('click',()=>{ if(index!==active){active=index;render();} }));
  render();
};
initRoomCoverflow();

const installUnifiedItalianFooter = () => {
  if (document.documentElement.lang !== 'it' || !document.body.classList.contains('elegance')) return;
  const oldFooter = document.querySelector('footer');
  if (!oldFooter) return;
  const path = window.location.pathname;
  let explore = [
    ['La villa','/villa-brando-v2/elegance/it/villa/'],
    ['Camere','/villa-brando-v2/elegance/it/camere/'],
    ['Giardino','/villa-brando-v2/elegance/it/giardino/']
  ];
  if (path.includes('/camere/')) explore = [
    ['La villa','/villa-brando-v2/elegance/it/villa/'],
    ['Giardino','/villa-brando-v2/elegance/it/giardino/'],
    ['Sala giochi, bici e altri spazi','/villa-brando-v2/elegance/it/gallery/']
  ];
  if (path.includes('/villa/')) explore = [
    ['Camere','/villa-brando-v2/elegance/it/camere/'],
    ['Giardino','/villa-brando-v2/elegance/it/giardino/'],
    ['Sala giochi, bici e altri spazi','/villa-brando-v2/elegance/it/gallery/']
  ];
  const exploreLinks = explore.map(([label,href]) => `<a href="${href}">${label}</a>`).join('');
  const footer = document.createElement('footer');
  footer.className = 'cv-full-footer';
  footer.innerHTML = `<div class="cv-wrap">
    <div class="cv-footer-grid">
      <div><img class="cv-footer-logo" src="/villa-brando-v2/assets/official/villa-brando-logo.png" alt="Villa Brando"><p>Via Torino 19, 04100 Latina, Italia</p><p>CIN IT059011C27L4KEECL</p></div>
      <div><h3>Esplora</h3>${exploreLinks}</div>
      <div><h3>Contatti</h3><a href="tel:+393519768732">+39 351 976 8732</a><a href="mailto:villabrando.italy@gmail.com">villabrando.italy@gmail.com</a><a href="https://wa.me/393519768732" target="_blank" rel="noopener">WhatsApp</a><a href="https://maps.google.com/?q=Via+Torino+19+Latina" target="_blank" rel="noopener">Indicazioni</a></div>
      <div><h3>Informazioni</h3><a href="/villa-brando-v2/elegance/it/info/">Informazioni e regole</a><a href="/villa-brando-v2/elegance/it/prenota/">Prenota</a><a href="https://guide.villabrando.com/" target="_blank" rel="noopener">Guida ospiti</a><a href="https://drive.google.com/file/d/12Sb9yfmVtWZ-HYHYjI4fLyYtEV_YEAKT/view?usp=sharing" target="_blank" rel="noopener">Brochure</a><a href="https://www.instagram.com/villabrando.holidayhome/" target="_blank" rel="noopener">Instagram</a></div>
    </div>
    <div class="cv-legal">Aut. Reg. Lazio 15547 del 23/11/2021 · Villa Brando · Latina</div>
  </div>`;
  oldFooter.replaceWith(footer);
};
installUnifiedItalianFooter();
