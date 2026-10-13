/**
 * Echte Fotos vom Betrieb (nur diese; keine Stockbilder). Bilder liegen in
 * src/assets/projekte/ und werden importiert, damit Astro sie als WebP in
 * passenden Größen ausliefert (ohne Metadaten). Dateinamen beschreiben das
 * Motiv (SEO), Alt-Texte beschreiben, was zu sehen ist – ohne Ort oder Kunden.
 *
 * Solange ein Eintrag leer ist, zeigt der Review-Stand an dieser Stelle einen
 * markierten Platzhalter und der Launch-Stand nichts.
 *
 * Eintrag: { bild, alt, etikett?, notizen?, ausschnitt?, detail? }
 * - notizen: Punkt-Notizen am Foto (x/y in Prozent des ganzen Fotos). Nur
 *   Sichtbares beschreiben, keine Maße oder Materialien erfinden.
 * - ausschnitt: Tailwind-Klassen für den Bildausschnitt (z. B. um Rohbau-Reste
 *   am Rand wegzuschneiden).
 * - detail: Nahaufnahme aus demselben Foto ({ bild, alt, text }).
 */
import badBetonoptik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-walk-in-dusche-grossformat-fliesen-betonoptik.jpg';
import badHolzoptik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-fliesen-holzoptik-walk-in-dusche.jpg';
import detailNische from './assets/projekte/fliesenfachbetrieb-rochlus-bad-detail-ablagenische-betonoptik.jpg';
import detailMosaik from './assets/projekte/fliesenfachbetrieb-rochlus-bad-detail-mosaikborduere.jpg';
import detailHolzFuge from './assets/projekte/fliesenfachbetrieb-rochlus-bad-detail-bodenfliesen-holzoptik-fuge.jpg';

/** Nahaufnahme aus dem Bad mit Wanne (das Gesamtfoto ist vor der Endmontage entstanden und wird nicht gezeigt). */
export const detailMosaikborduere = {
  bild: detailMosaik,
  alt: 'Nahaufnahme: Mosaikbordüre zwischen weißen Wandfliesen, über die Ecke weitergeführt',
  text: 'Mosaikbordüre, über die Ecke weitergeführt',
};

export const fotos = {
  /** Porträt Marc Rochlus (oder Team): Betrieb-Section und kleines Bild am Anruf-Schild. */
  inhaber: null,
  /** Das Hero-Bad: ein fertiges Bad aus einer Komplettsanierung. */
  bad: {
    bild: badHolzoptik,
    alt: 'Fertiges Bad mit Bodenfliesen in Holzoptik, bodengleicher Dusche mit Glaswand, Aufsatzwaschbecken und Wand-WC',
    etikett: 'Bad in Holzoptik, bodengleiche Dusche',
    notizen: [
      { text: 'Wandfliesen in Holzoptik', x: 77, y: 21, seite: 'links' },
      { text: 'Bodengleiche Dusche', x: 62, y: 63, seite: 'links' },
      { text: 'Boden in Holzoptik', x: 48, y: 86, seite: 'rechts' },
    ],
    detail: {
      bild: detailHolzFuge,
      alt: 'Nahaufnahme: Bodenfliesen in Holzoptik mit schmalen Fugen, im Verband verlegt',
      text: 'Bodenfliesen in Holzoptik, im Verband verlegt',
    },
  },
  /** Weitere abgeschlossene Projekte (ohne das Hero-Bad, damit kein Foto doppelt steht). */
  referenzen: [
    {
      bild: badBetonoptik,
      alt: 'Bad mit großformatigen Fliesen in Betonoptik, Walk-in-Dusche mit schwarzen Armaturen und Waschbecken aus Naturstein',
      etikett: 'Großformat in Betonoptik, Walk-in-Dusche',
      ausschnitt: 'aspect-3/5 object-cover object-[50%_50%]',
      // Fixpunkt der Lupe (transform-origin) in Prozent des Ausschnitts; die Nische liegt am rechten Rand, 100% hält sie im Bild
      lupe: { x: 100, y: 40 },
      notizen: [
        { text: 'Großformat in Betonoptik', x: 62, y: 27, seite: 'links' },
        { text: 'Boden im selben Format', x: 55, y: 88, seite: 'rechts' },
      ],
      detail: {
        bild: detailNische,
        alt: 'Nahaufnahme: geflieste Ablagenische in der Duschwand',
        text: 'Geflieste Ablagenische in der Duschwand',
      },
    },
  ],
};
