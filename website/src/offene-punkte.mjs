/**
 * Offene Punkte bis zum Livegang (Quelle: konzept/kunden-checkliste.md).
 * Wird von astro.config.mjs gelesen: Ein Launch-Build (PUBLIC_STAND=launch)
 * listet alle Punkte und bricht ab, solange ein Punkt mit `blockiert: true`
 * offen ist. Erledigte Punkte hier löschen.
 */
export const offenePunkte = [
  { punkt: 'USt-IdNr. im Impressum eintragen (src/pages/impressum.astro)', blockiert: true },
  { punkt: 'Datenschutzerklärung rechtlich prüfen, Hosting-Abschnitt an den finalen Hoster anpassen', blockiert: true },
  { punkt: 'Impressum rechtlich prüfen: „§ 5 TMG“ ist seit Mai 2024 „§ 5 DDG“; der Hinweis auf die EU-OS-Plattform ist seit deren Abschaltung (Juli 2025) überholt', blockiert: true },
  { punkt: 'Originalfotos für „Arbeiten“ (bis dahin im Launch ausgeblendet)', blockiert: false },
  { punkt: 'Foto von Marc Rochlus oder dem Team (bis dahin im Launch ausgeblendet)', blockiert: false },
  { punkt: 'Erreichbarkeitszeiten (bis dahin im Launch ausgeblendet)', blockiert: false },
  { punkt: 'Meisterbetrieb ja/nein, Gründungsjahr, genaues Einzugsgebiet', blockiert: false },
  { punkt: '„Besichtigung unverbindlich“ bestätigen lassen, bevor es auf die Seite kommt', blockiert: false },
];
