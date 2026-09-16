(() => {
  const E = window.VB_ELEGANCE;
  const s = window.VB_SHARED;
  const page = window.VB_PAGE;
  const root = document.documentElement;

  const body = page.blocks.map(b => {
    const render = E.blocks[b.type];
    if (!render) return '';
    const params = b.type === 'cardGrid' ? { ...b, base: page.base } : b;
    return render(params);
  }).join('');

  document.querySelector('#e-app').innerHTML = `
    ${E.renderHeader(page.base, page.activeKey)}
    <main id="e-main">
      ${E.blocks.hero(page.hero)}
      ${body}
    </main>
    ${E.renderFooter(page.base, page.activeKey, s)}`;

  root.classList.add('elegance-ready');
  E.bindChrome(document);
})();
