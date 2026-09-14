/**
 * <site-footer></site-footer>
 * Footer condiviso: contatti e link legali.
 * Recapiti e link sono segnaposto: NON pubblicare finché non sostituiti con dati reali approvati.
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer" id="contatti">
        <div class="container site-footer__inner">
          <div>
            <h2>Contatti</h2>
            <p>
              Telefono: <a href="tel:+390000000000">[numero da confermare]</a><br />
              Email: <a href="mailto:info@villabrando.com">[email da confermare]</a>
            </p>
          </div>
          <p class="site-footer__copy">&copy; ${year} Villa Brando. Tutti i diritti riservati.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
