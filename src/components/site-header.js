/**
 * <site-header></site-header>
 * Intestazione condivisa: logo, navigazione principale, CTA di prenotazione.
 * Voci di menu e nome/logo sono segnaposto: da confermare prima della pubblicazione.
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="site-header__logo" href="/">Villa Brando</a>

          <button
            class="site-header__toggle"
            type="button"
            aria-expanded="false"
            aria-controls="main-nav"
          >
            <span class="sr-only">Apri menu</span>
            <span aria-hidden="true">&#9776;</span>
          </button>

          <nav id="main-nav" class="site-header__nav" aria-label="Navigazione principale">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">La villa <!-- placeholder: da definire --></a></li>
              <li><a href="#">Camere <!-- placeholder: da definire --></a></li>
              <li><a href="#">Contatti <!-- placeholder: da definire --></a></li>
            </ul>
            <booking-cta label="Prenota" href="#contatti"></booking-cta>
          </nav>
        </div>
      </header>
    `;

    const toggle = this.querySelector(".site-header__toggle");
    const nav = this.querySelector(".site-header__nav");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

customElements.define("site-header", SiteHeader);
