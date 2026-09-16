window.VB_UTILS = (() => {
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const resolveImage = src => src && src.includes('lh3.googleusercontent.com') ? `/api/image?url=${encodeURIComponent(src)}` : src;
  const img = (src, alt = '', eager = false) => `<img src="${resolveImage(src)}" alt="${esc(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
  return { esc, resolveImage, img };
})();
