/**
 * Echte Fotos vom Betrieb (Pfade relativ zu public/). Solange ein Eintrag
 * leer ist, zeigt der Review-Stand an dieser Stelle einen markierten
 * Platzhalter und der Launch-Stand nichts. Sobald ein Foto eingetragen ist,
 * erscheint es in beiden Ständen, ohne Platzhalter-Etikett.
 *
 * Form eines Eintrags: { src: '/bilder/datei.jpg', alt: 'Was zu sehen ist', breite: 1600, hoehe: 1200 }
 * Referenzen zusätzlich mit `etikett` (kurze Bildunterschrift).
 */
export const fotos = {
  /** Porträt Marc Rochlus (oder Team): Betrieb-Section und kleines Bild am Anruf-Schild. */
  inhaber: null,
  /** Ein fertiges Bad aus einer Komplettsanierung, neben dem Schichtschnitt. */
  bad: null,
  /** Originalfotos abgeschlossener Projekte, gern als Vorher/Nachher-Paare. */
  referenzen: [],
};
