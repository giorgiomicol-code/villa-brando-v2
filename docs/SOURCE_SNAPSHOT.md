# Villa Brando V2 — Source snapshot

Acquisition date: 2026-08-30

## Source pages

- Current homepage: https://www.villabrando.com/
- Italian version: https://www.villabrando.com/italiano
- English version: https://www.villabrando.com/english

## Preservation rule

The first V2 implementation must preserve the current website content before editorial changes are considered.

Preserve:

- Italian and English text without summarising or intentionally removing details;
- image sequence from the current homepage;
- seven YouTube videos in their current sequence;
- direct booking link;
- WhatsApp link;
- brochure link;
- Odyssey/guide link;
- Tours & Events link;
- Instagram link;
- House Rules link;
- legacy keyword/text block at the bottom of the current page.

## Language architecture

V2 uses one shared page structure and one visible `IT | EN` toggle. Layout, media and links are shared where appropriate; only language-specific copy changes. The selected language is stored locally in the browser.

## Performance architecture

- Static HTML/CSS/vanilla JavaScript.
- No framework dependency.
- Images use lazy loading outside the initial hero.
- YouTube iframes are not loaded during initial page load; they are created only after the user presses Play.
- Responsive layout for desktop and mobile.

## Media status

The current Google Sites image URLs have been captured in source order and are currently referenced in `assets/js/content.js` as a migration source snapshot.

**Important:** these Google-hosted URLs are temporary source references, not the desired final architecture. Before production release, the corresponding image binaries should be copied into `assets/images/`, renamed consistently, optimised (WebP/AVIF where appropriate), and all Google image dependencies removed.

No production/domain switch is authorised by this snapshot.
