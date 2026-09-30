/**
 * Review- oder Launch-Stand der Seite.
 *
 * - review (Standard): alle Platzhalter sichtbar, damit der Kunde sieht, was
 *   fehlt; noindex gesetzt.
 * - launch (PUBLIC_STAND=launch): leere Slots entfallen komplett (kein leerer
 *   Fotorahmen, keine Klärungsbox, keine Zeiten-Zeile, keine Galerie ohne
 *   Originalfotos); die Seite ist indexierbar.
 *
 * Launch-Build: `PUBLIC_STAND=launch npm run build`
 */
export const istLaunch = import.meta.env.PUBLIC_STAND === 'launch';
export const istReview = !istLaunch;
