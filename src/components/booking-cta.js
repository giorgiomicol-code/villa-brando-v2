/**
 * <booking-cta label="Prenota ora" href="#contatti"></booking-cta>
 * Pulsante di invito alla prenotazione, riutilizzabile su tutte le pagine.
 */
class BookingCta extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Prenota ora";
    const href = this.getAttribute("href") || "#contatti";

    this.innerHTML = `
      <a class="booking-cta" href="${href}">${label}</a>
    `;
  }
}

customElements.define("booking-cta", BookingCta);
