// Su GitHub Pages il sito non vive sulla radice del dominio ma sotto
// /villa-brando-v2/. Tutti i link interni del progetto sono scritti a partire
// da "/" (es. "/it/camere/"), quindi senza questo prefisso l'anteprima sarebbe
// piena di link rotti.
//
// Quando il sito sta sulla radice (sviluppo locale, Vercel, dominio finale)
// BASE_URL vale "/" e questa funzione restituisce il link invariato: non c'è
// nulla da disattivare quando si passerà al dominio vero.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(href: string): string {
  if (!href) return href;
  // Ancore interne e segnaposto restano com'erano.
  if (href.startsWith('#')) return href;
  // Indirizzi assoluti e non-http (mailto:, tel:, https:) non vanno toccati.
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return href;
  // Link relativi (rari qui) restano relativi.
  if (!href.startsWith('/')) return href;
  return BASE + href;
}
