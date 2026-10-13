/**
 * Echte Fotos vom Betrieb. Bilder liegen in src/assets/projekte/ und werden
 * importiert, damit Astro sie als WebP in passenden Größen ausliefert
 * (ohne Metadaten). Dateinamen beschreiben das Motiv (SEO), Alt-Texte
 * beschreiben, was zu sehen ist – ohne Ort oder Kunden zu nennen.
 *
 * Solange ein Eintrag leer ist, zeigt der Review-Stand an dieser Stelle einen
 * markierten Platzhalter (bzw. ein Material-Stimmungsbild) und der
 * Launch-Stand nichts. Eingetragene Fotos erscheinen in beiden Ständen.
 *
 * Form eines Eintrags: { bild: <Import>, alt: 'Was zu sehen ist' }
 * Referenzen zusätzlich mit `etikett` (kurze Bildunterschrift).
 */
import badBetonoptik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-walk-in-dusche-grossformat-fliesen-betonoptik.jpg';
import badHolzoptik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-fliesen-holzoptik-walk-in-dusche.jpg';
import badWanneMosaik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-badewanne-weisse-wandfliesen-mosaikborduere.jpg';

const holzoptik = {
  bild: badHolzoptik,
  alt: 'Fertiges Bad mit Bodenfliesen in Holzoptik, bodengleicher Dusche mit Glaswand, Aufsatzwaschbecken und Wand-WC',
  etikett: 'Bad in Holzoptik, bodengleiche Dusche',
};

export const fotos = {
  /** Porträt Marc Rochlus (oder Team): Betrieb-Section und kleines Bild am Anruf-Schild. */
  inhaber: null,
  /** Ein fertiges Bad aus einer Komplettsanierung, neben dem Schichtschnitt. */
  bad: holzoptik,
  /** Originalfotos abgeschlossener Projekte (ohne das Bad oben, damit kein Foto doppelt steht). */
  referenzen: [
    {
      bild: badBetonoptik,
      alt: 'Bad mit großformatigen Fliesen in Betonoptik, Walk-in-Dusche mit schwarzen Armaturen und Waschbecken aus Naturstein',
      etikett: 'Großformat in Betonoptik, Walk-in-Dusche',
    },
    {
      bild: badWanneMosaik,
      alt: 'Bad mit weißen Wandfliesen, Mosaikbordüre und anthrazitfarbenem Boden, eingeflieste Badewanne vor dem Fenster, vor der Endmontage',
      etikett: 'Wanne mit Mosaikbordüre, vor der Endmontage',
    },
  ],
};
