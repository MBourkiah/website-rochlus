# Checkliste: Was wir vor dem Livegang von Ihnen brauchen

Fliesenfachbetrieb Rochlus GmbH · Website-Neugestaltung (Entwurf)
Alle Punkte sind im Entwurf sichtbar als „Platzhalter" markiert.

## Wichtigster Punkt: Fotos

- [ ] **Fotoshooting** (oder vorhandene Originale): 2–3 fertige Bäder, gern als Vorher/Nachher-Paare, und ein Porträt von Marc Rochlus. Ohne Fotos zeigt die Live-Seite kein einziges Bild; Plätze dafür sind vorbereitet (Anruf-Schild, Komplettsanierung, Der Betrieb, Arbeiten). Eintragen in `website/src/fotos.mjs`. Bis dahin zeigt die Seite lizenzfreie Material-Nahaufnahmen (keine fremden Bäder, keine Personen), die durch eigene Detailfotos ersetzt werden können (`website/src/assets/stimmung/`).

## Entscheidungen

- [ ] **Logo:** Der Entwurf zeigt jetzt ein neu gestaltetes Logo (Wortmarke „Rochlus" + Fugen-Grid-Icon), das exakt auf die Website-Farben und -Schriften abgestimmt ist — als Ablösung des alten Mosaik-Logos. Bitte gegenlesen und freigeben, oder Rückmeldung, falls das bestehende Logo doch erhalten bleiben soll.

## Angaben (kurz, per Telefon oder E-Mail)

- [ ] **Meisterbetrieb ja/nein** — steht erst auf der Seite, wenn Sie es bestätigen
- [ ] **Gründungsjahr** bzw. seit wann der Betrieb am Markt ist
- [ ] **Genaues Einzugsgebiet** (nur Köln? Umland bis wohin?)
- [ ] **Erreichbarkeitszeiten** (wann sind Sie telefonisch am besten erreichbar?)
- [ ] **Umfang „ganze Bäder“:** Die Hauptaussage lautet „Fliesen, Naturstein, ganze Bäder.“ Übernehmen oder koordinieren Sie bei Komplettsanierungen auch Sanitär und Elektro (z. B. mit festen Partnern)? Wenn nicht, formulieren wir die Aussage enger.
- [ ] **Besichtigung unverbindlich?** Dürfen wir schreiben, dass die Besichtigung vor Ort unverbindlich ist (und ggf. kostenlos)?
- [ ] **Umsatzsteuer-Identifikationsnummer** fürs Impressum (war auf der alten Seite ebenfalls nicht ausgefüllt)

## Material

- [ ] **Fotos abgeschlossener Projekte in Originalauflösung** — die vier Arbeitsfotos der alten Seite sind nur 600×420 Pixel groß und dienen im Entwurf als Platzhalter. Ideal: je ein Foto vor und nach der Sanierung (die Referenz-Galerie ist für Vorher/Nachher-Paare vorbereitet)
- [ ] **Foto von Marc Rochlus** (oder vom Team) für den Bereich „Der Betrieb"
- [ ] Falls Logo bleibt: **Logo als Vektordatei** (z. B. aus der Fahrzeugbeschriftung/Druckerei), nicht als Foto/JPG

## Freigaben

- [ ] Freigabe der neu formulierten Texte (alle Leistungen stammen von Ihrer alten Seite, wurden aber neu gruppiert und ergänzt)
- [ ] Rechtliche Prüfung der reduzierten Datenschutzerklärung (die neue Seite nutzt keine Cookies, keine Analyse-Tools, keine Google-Dienste — die Erklärung wurde entsprechend verschlankt)
- [ ] Hosting/Domain-Umzug klären (aktuelle Seite läuft auf ungewartetem WordPress 5.5 von 2020)

## Technisch: Review- und Launch-Stand

- Standard-Build (`npm run build`) = **Review-Stand**: alle Platzhalter sichtbar, `noindex` gesetzt.
- **Launch-Stand**: `PUBLIC_STAND=launch npm run build`. Leere Slots (Galerie ohne Originalfotos, Inhaber-Foto, Erreichbarkeit, Klärungsbox) entfallen, die Seite wird indexierbar.
- Der Launch-Build bricht ab, solange Pflichtpunkte in `website/src/offene-punkte.mjs` offen sind (USt-IdNr., rechtliche Prüfung Datenschutz). Erledigte Punkte dort löschen.
