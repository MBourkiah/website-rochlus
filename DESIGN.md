---
name: Fliesenfachbetrieb Rochlus
description: Die Werkbank-Wand des Betriebs – echte Bäder, geklemmt und beschriftet, auf hellem Kalkputz.
colors:
  kreide: "#c4452e"
  kreide-tief: "#a83a26"
  kraft: "#c9a77a"
  kraft-hell: "#ddc39d"
  graphit: "#2b2b29"
  graphit-soft: "#55554f"
  zink: "#9a9fa3"
  zink-hell: "#c8cbcd"
  putz: "#eeece7"
  putz-tief: "#e4e1da"
  linie: "#d3cfc6"
  papier: "#faf9f6"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 82"
  nummer:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 82"
  title:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    fontVariation: "'wdth' 82"
  liste:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    fontVariation: "'wdth' 82"
  lead:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum'"
  notiz:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.25
    fontVariation: "'wdth' 82"
rounded:
  papier: "2px"
  stempel: "3px"
  knopf: "4px"
  punkt: "999px"
spacing:
  rand: "16px"
  rand-sm: "24px"
  spalte: "48px"
  section: "80px"
  section-lg: "112px"
components:
  knopf-anruf:
    backgroundColor: "{colors.kreide}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    rounded: "{rounded.knopf}"
    padding: "0.55rem 1.1rem"
    height: "44px"
  knopf-anruf-hover:
    backgroundColor: "{colors.kreide-tief}"
    textColor: "#ffffff"
  knopf-neutral:
    backgroundColor: "transparent"
    textColor: "{colors.graphit}"
    rounded: "{rounded.knopf}"
    padding: "0.55rem 1.1rem"
    height: "44px"
  knopf-neutral-hover:
    backgroundColor: "{colors.graphit}"
    textColor: "{colors.papier}"
  anhaenger:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.graphit}"
    typography: "{typography.nummer}"
    padding: "2.4rem 1.8rem 1.1rem 3.4rem"
  stempel:
    backgroundColor: "transparent"
    textColor: "{colors.kreide-tief}"
    rounded: "{rounded.stempel}"
    padding: "0.05rem 0.45rem"
  klemmfoto-rahmen:
    backgroundColor: "{colors.papier}"
    rounded: "{rounded.papier}"
    padding: "0.5rem"
  probe:
    backgroundColor: "{colors.papier}"
    rounded: "{rounded.papier}"
    padding: "0.35rem"
  notiz-etikett:
    backgroundColor: "{colors.kraft-hell}"
    textColor: "{colors.graphit}"
    typography: "{typography.notiz}"
    rounded: "{rounded.papier}"
    padding: "0.2rem 0.55rem"
  werkstattzettel:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.graphit}"
    padding: "2.5rem 2.5rem 2rem"
  platzhalter-badge:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.graphit-soft}"
    rounded: "{rounded.knopf}"
    padding: "0.125rem 0.5rem"
---

# Design System: Fliesenfachbetrieb Rochlus

## Overview

**Creative North Star: "Die Werkbank-Wand"**

Die Seite ist die Wand in der Werkstatt des Betriebs. Heller Kalkputz ist der Grund; darauf hängen echte Bäder als Fotos mit schmalem Papierrand, von einer Zinkzwinge gehalten und ein wenig schief geklemmt. Bleistift-Notizen (Punkt, Linie, Kraftpapier-Etikett) zeigen auf das, was man auf dem Foto sieht. Daneben hängen Nahaufnahmen aus denselben Fotos, eine linierte Werkstattliste und ein Kraftpapier-Zettel mit den Fakten. Der Anruf ist ein Kraftpapier-Anhänger mit Ösenring und rotem Stempel.

Die Haltung ist handwerklich, hell und ruhig: großzügige Putzflächen, wenige Dinge, die jeweils sichtbar „vor der Wand hängen“. Graphit schreibt und zieht Linien, Kraftpapier beschriftet, Zink hält fest, Kreiderot gehört allein der Handlung „Anrufen“. Fotos führen; Typografie und Material ordnen sich ihnen unter. Bestätigte Absagen: keine Stock-Badfotos mit Icon-Kacheln, keine Schilder- oder Editorial-Kulisse (die frühere Welt „Emaille-Schild“ ist verworfen), nichts Dunkles, Verspieltes oder Abgehobenes.

Bewegung ist einmalig und still: Fotos setzen sich beim ersten Sichtkontakt in ihre Neigung, Notizlinien zeichnen sich zum Detail, Bleistiftstriche ziehen einmal durch, der Anhänger pendelt beim Hover kaum merklich. Ohne JavaScript und bei „Bewegung reduzieren“ ist alles sofort sichtbar.

**Key Characteristics:**
- Heller Kalkputz-Grund mit feiner, statischer Rauschstruktur (8 % Deckkraft).
- Echte Fotos im Papierrahmen, mit Zwinge geklemmt, ±0,5–1,4° geneigt.
- Punkt-und-Linie-Notizen auf Kraftpapier-Etiketten, nur zu Sichtbarem.
- Eine Schriftfamilie (Bricolage Grotesque): Display schmal (82 % Breite), Text normal, Ziffern tabellarisch.
- Kreiderot ausschließlich für Anrufen, ein Rot pro Blick.
- Tiefe nur für Dinge, die an der Wand hängen.

## Colors

Eine helle Werkstattpalette aus Putz, Graphit, Kraftpapier und Zink mit genau einem Signalton.

### Primary
- **Kreiderot** (kreide): der einzige Handlungston. Füllung des Anruf-Knopfs (Header ab md, sobald der Hero-Anhänger aus dem Blick ist; mobile Anrufleiste), Rand und Schrift des „Anrufen“-Stempels, Unterstrich der Telefon-Textlinks (`link-anruf`), Textcursor.
- **Kreiderot tief** (kreide-tief): Hover des Anruf-Knopfs. Der Stempel „Anrufen“ auf dem Anhänger steht in #6e2214 (4,9:1 auf Kraftpapier), 0,95rem, um −7° gedreht in einer eigenen Kopfzone oben rechts, nie über der Nummer.

### Secondary
- **Kraftpapier** (kraft): Anhänger und Werkstattzettel, also die Flächen, auf denen der Betrieb sich selbst beschriftet.
- **Kraftpapier hell** (kraft-hell): Notiz-Etiketten an den Fotos.

### Tertiary
- **Zink** (zink): Zwingen, Unterstrich ruhender Textlinks, gestrichelte Platzhalter-Ränder, Scrollbar.
- **Zink hell** (zink-hell): der Ösenring am Anhänger.

### Neutral
- **Kalkputz** (putz): Seitengrund, Header und Anrufleiste (95 % deckend mit Weichzeichner).
- **Putz tief** (putz-tief): abgesetzte Wandabschnitte (Arbeiten, Leistungen, Kontakt) mit 70 % Deckkraft, jeweils zwischen Haarlinien.
- **Bleistiftlinie** (linie): Haarlinien zwischen Abschnitten, Listenzeilen, Header-Unterkante.
- **Papier** (papier): Fotorahmen, Probenrahmen, Mobilmenü, Platzhalter-Grund, Schrift auf Graphit.
- **Graphit** (graphit): Schrift, Bleistiftstriche, Notizpunkte, Fokusring, neutrale Knopfkontur, Textauswahl-Grund.
- **Graphit weich** (graphit-soft): Fließ- und Nebentext auf Putz (≥ 6:1).

### Named Rules
**Die Ein-Rot-Regel.** Kreiderot bedeutet „Anrufen“ und sonst nichts. Pro Blick ist genau ein rotes Anruf-Element aktiv: Solange der Hero-Anhänger sichtbar ist, bleibt der Header-Knopf neutral (Graphit-Kontur) und die mobile Anrufleiste eingefahren; erst danach wird der Header rot (ab md) bzw. fährt die Leiste ein; am Kontakt-Anhänger treten beide wieder zurück. Seiten ohne Hero-Anhänger zeigen beide sofort.

**Die Logo-Ausnahme.** Die Terrakotta-Fliese und die Unterzeile der verbindlichen Wortmarke gehören zum Logo, nicht zur Palette. Ihre Werte werden nie in die Oberfläche übernommen und zählen nicht als Anruf-Rot.

**Die Neutral-markiert-Regel.** Platzhalter sind nie rot: gestrichelt, Graphit weich auf Papier.

## Typography

**Display Font:** Bricolage Grotesque Variable, schmal geschnitten (font-stretch 82 %), mit Arial Narrow, system-ui
**Body Font:** Bricolage Grotesque Variable in normaler Breite
**Logo-Schriften:** Fraunces Variable und Instrument Sans Variable, self-hosted, ausschließlich für die Wortmarke

**Character:** Eine Werkstattgroteske mit Eigensinn: schmal und schwer in Überschriften, Listen und Nummern wie mit dem Zimmermannsbleistift notiert, im Fließtext breit und freundlich lesbar.

### Hierarchy
- **Display** (700, clamp(2,75–5,25rem), 0,9): nur die Hero-Aussage. Der Kontakt-Abschluss nutzt eine eigene Abstufung (clamp(2,8–4,75rem), 0,92).
- **Headline** (700, clamp(2,4–3,75rem), 0,95): Section-Überschriften, max. ca. 42rem breit, `text-wrap: balance`.
- **Nummer** (700, schmal, clamp(2–2,6rem), 1; groß clamp(2,4–4,2rem)): Telefonnummer im Anhänger; Telefon-Textlinks in Sections 1,5rem fett schmal.
- **Title** (700, schmal, 1,5–1,75rem, 1,25): Ablaufschritte, Schichten, Leistungsgruppen.
- **Liste** (600, schmal, 1,25rem, 1,25): Einträge der Werkstattliste, Navigation (1,125rem).
- **Lead** (400, 1,125rem, 1,625, graphit-soft): Einleitungen unter Headlines, max. 28–36rem; im Hero ab sm 1,25rem.
- **Body** (400, 1,0625rem, 1,6): Grundtext; Ziffern seitenweit tabellarisch.
- **Notiz** (650, schmal, 0,875rem): Etiketten an Fotos.

### Named Rules
**Die Eine-Familie-Regel.** Die Seite spricht nur Bricolage Grotesque. Fraunces und Instrument Sans werden nur geladen, damit die Wortmarke korrekt rendert; sie erscheinen nie in Überschriften oder Text.

**Die Schmal-schreibt-Regel.** Schmal (82–85 %) ist Werkstatt-Auszeichnung: Überschriften, Nummern, Listen, Notizen, Navigation, Knöpfe. Fließtext bleibt in normaler Breite.

**Die Ziffern-stehen-Regel.** Telefonnummern und Schrittnummern stehen in Tabellenziffern und werden nicht umbrochen.

## Layout

Ein Container von 72rem (max-w-6xl) mit 1rem Rand, ab sm 1,5rem. Ab lg (64rem) ein 12-Spalten-Raster mit 3rem Spaltenabstand; Text belegt 5–7 Spalten, Fotos und Material die Gegenseite. Sections atmen mit 5rem vertikalem Innenabstand, ab lg 7rem (Kontakt 8rem). Abschnitte wechseln zwischen nacktem Putz und „Putz tief“, getrennt durch Haarlinien, nie durch Karten.

Asymmetrie ist gewollt: Fotos in verschiedenen Größen, in Zweierrastern versetzt (zweites Bild 4rem tiefer),  Mobil stapelt alles einspaltig, Fotos bleiben schmaler als die Spalte (88–92 %), damit Neigung und Zwinge lesbar bleiben; Notizen am Foto entfallen unter sm und erscheinen als Zeile unter dem Bild (im Hero ganz weggelassen). Der sticky Header ist 4,5rem hoch; Anker landen mit 5,5rem Abstand. Unter md reserviert die Seite unten Platz für die Anrufleiste.

Breakpoints: sm 40rem, md 48rem (Anrufleiste ↔ roter Header-Knopf), lg 64rem (Raster, Desktop-Navigation).

## Elevation & Depth

Die Wand ist flach; Tiefe bekommt nur, was an ihr hängt. Fotorahmen, Nahaufnahmen, Werkstattzettel und das Mobilmenü tragen denselben „hängenden“ Schatten: ein enger Kontaktschatten plus ein weicher, nach unten versetzter Fallschatten, als stünde das Papier wenige Millimeter vor dem Putz. Der Anhänger nutzt dieselbe Logik als drop-shadow, weil seine Form beschnitten ist. Zwingen werfen einen kleinen eigenen Schatten; Notiz-Etiketten einen hauchdünnen.

### Shadow Vocabulary
- **Hängend** (`--schatten-haengend: 0 1px 1px rgb(30 28 24 / 0.12), 0 14px 26px -16px rgb(30 28 24 / 0.5)`): Fotos, Proben, Zettel, Mobilmenü.
- **Anhänger** (`filter: drop-shadow(0 1px 1px rgb(30 28 24 / 0.18)) drop-shadow(0 10px 12px rgb(30 28 24 / 0.2))`): nur der Anruf-Anhänger.
- **Zwinge** (`filter: drop-shadow(0 2px 2px rgb(30 28 24 / 0.3))`): Zinkzwingen.
- **Etikett** (`box-shadow: 0 1px 2px rgb(30 28 24 / 0.25)`): Notiz-Etiketten.

### Named Rules
**Die Millimeter-vor-der-Wand-Regel.** Schatten sind weich, warmgrau und kurz. Text, Listen, Knöpfe und Abschnitte bekommen keinen Schatten; Zustände werden über Farbe und Neigung gezeigt, nicht über Anheben.

## Shapes

Fast eckig: Papier hat 2px, Stempel 3px, Knöpfe und Platzhalter 4px. Kreise gibt es nur als Notizpunkte, Schrittnummern (mobil) und den Ösenring. Die einzige eigene Silhouette ist der Anhänger: ein Rechteck mit zwei um 1,4rem abgeschrägten linken Ecken (clip-path), dazu der eingestanzte Ösenring. Linien sind Bleistiftstriche von 1,5px in Graphit; Haarlinien 1px in „linie“, innerhalb der Werkstattliste gestrichelt.

**Die Schief-geklemmt-Regel.** Nur Hängendes neigt sich (Fotos ±0,5–1,4°, Zettel 0,8°, Stempel −7°). Text, Raster und Knöpfe stehen gerade.

## Components

### Buttons
Klar und werkzeughaft, nie verspielt.
- **Shape:** leicht gerundet (4px), Mindesthöhe 2,75rem (mobile Anrufleiste 3,25rem), Telefonsymbol als Strich-SVG (Feather „phone“, 2px Strich).
- **Anruf-Knopf:** Kreiderot, weiße Schrift, 650, schmal (85 %). Hover Kreiderot tief, Active 1px nach unten, Fokus Graphit-Ring mit 3px Abstand.
- **Neutraler Knopf:** 1,5px Graphit-Kontur, transparent; Hover füllt Graphit mit Papierschrift. Der Header-Anruf startet neutral und wird nach der Ein-Rot-Regel rot.

### Der Anhänger (Signatur)
Der Anruf als Kraftpapier-Anhänger: abgeschrägte linke Ecken, Ösenring in Putz mit Zinkring, Telefonnummer groß und schmal, darunter ein Satz in Normalbreite; rechts oben der Stempel „Anrufen“ (2px Kreiderot-Rahmen, Versalien, −7°, multiply). Der ganze Anhänger ist ein `tel:`-Link. Hover: dreht sich um die Öse um −1,2° (400ms, lange Kurve), Active −0,4° und 1px tiefer; bei reduzierter Bewegung keine Drehung. Zwei Größen: Hero und groß im Kontakt.

### Das geklemmte Foto (Signatur)
Echtes Foto in 0,5rem Papierrand (2px Radius, hängender Schatten), über `--neigung` gedreht, Zinkzwinge mittig oben (4,25rem breit, ragt 2,35rem über den Rand). Notizen sitzen in Prozent-Koordinaten des Fotos: Graphit-Punkt mit Papierhof, 2rem Bleistiftlinie, Etikett aus hellem Kraftpapier; Etikett links oder rechts vom Punkt. Bildunterschrift schmal und fett darunter. Bewegung: setzt sich aus 12px tiefer und gerader Lage in die Neigung (800ms), danach zeichnen sich Linien (450ms) und Etiketten (gestaffelt um 220ms) ein.

### Nahaufnahme
Ausschnitt aus demselben Projektfoto (Fuge, Kante, Bordüre) im kleinen Papierrahmen (`probe`), neben der Beschriftung „Nahaufnahme“ und einem Satz zu dem, was zu sehen ist. Steht unter jedem Referenzfoto und als oberste Schicht im Schichtaufbau (fertige Oberfläche).

### Schichtaufbau
Senkrechter Bleistiftstrich mit Punkten, von unten (Untergrund) nach oben (Fliese oder Naturstein); nur die oberste, fertige Schicht trägt ein Foto (echte Nahaufnahme), die übrigen sind Punkte. Keine gezeichneten Materialien.

### Werkstattliste
Leistungen als linierte Liste: 2px Graphit-Oberkante, Gruppen getrennt durch Haarlinien, Einträge durch gestrichelte Haarlinien; Gruppentitel links (13rem), Einträge schmal-fett rechts. Keine Icons, keine Kacheln.

### Werkstattzettel
Kraftpapier-Fläche ohne Radius, 0,8° geneigt, mit Zwinge und hängendem Schatten, für belegte Betriebsfakten als Definitionsliste (Begriff links, Wert rechts, schmal-fett).

### Textlinks
Unterstrichen (1,5px, 0,3em Abstand), ruhend in Zink, bei Hover in Textfarbe. Telefon-Links tragen den Unterstrich in Kreiderot (`link-anruf`). Freistehende Links haben ≥ 2,75rem Tippziel.

### Navigation
Header sticky auf Putz (95 %, Weichzeichner) mit Haarlinie unten. Links die Wortmarke inline (Hintergrundfläche der SVG entfernt, 2–2,75rem hoch), ab lg fünf Anker schmal-fett in Graphit weich; Hover und aktiver Abschnitt in Graphit, aktiv mit 2px Unterstrich (Scrollspy). Darunter ein Menü-Knopf (44px, Graphit-Kontur) mit Papier-Dropdown, das bei Linkklick, Esc und Tipp daneben schließt. Mobil: Anrufleiste unten mit Anruf-Knopf und neutralem E-Mail-Knopf.

### Platzhalter-Badge
Kleines Etikett mit gestricheltem Rand in Graphit weich auf Papier, 0,75rem, halbfett. Freie Platzhalterflächen (Porträt, Klärungskasten) sind gestrichelt in Zink. Rendert nur im Review-Stand.

### Logo
Die Wortmarke aus `website/public/logo/` ist verbindlich: Verband-Bildmarke (Graphit- und Terrakotta-Fliese), „Rochlus“ in Fraunces, „FLIESENFACHBETRIEB“ in Instrument Sans. Im Header inline eingebunden (damit die self-hosted Schriften greifen), im Footer die Bildmarke `icon-verband.svg` mit 20px. Das Logo wird nicht nachgezeichnet, umgefärbt oder in der Seitenschrift gesetzt.


### Bewegung (kräftig)
- **Einschwingen (Hero, beim Laden):** Das Foto schwingt an der Zwinge ein (1,4 s, gedämpft), danach zeichnen sich die Notizen; der Anhänger pendelt am Ösenring aus.
- **Lupe (Unsere Bäder, Signatur):** Die Section ist 240vh hoch, die Bühne klebt; beim Scrollen fährt das Foto auf 2,2× an die Nische heran (Fixpunkt `lupe` in `fotos.mjs`), der Text „Nahaufnahme“ blendet ein. CSS-Scroll-Timeline (`view-timeline`); ohne Unterstützung oder bei „Bewegung reduzieren“ normale Höhe ohne Zoom.
- **Mitwachsen:** Bleistiftstriche in Komplettsanierung und Ablauf wachsen mit dem Scrollen; Verzeichniszeilen, Schichten und Schritte schieben sich herein.
- Scroll-Animationen immer als Longhands schreiben (`animation-name` usw. plus `animation-timeline`), weil der Minifier ein Shorthand mit Timeline ungültig zusammenzieht.
- **Graphit-Abschnitt:** Der Ablauf liegt als einziger Abschnitt auf Graphit, Ziffern als Kraftpapier-Kontur.

## Do's and Don'ts

### Do:
- **Do** zuerst echte Rochlus-Fotos zeigen (`src/fotos.mjs`); sie führen jeden Abschnitt, in dem sie vorkommen.
- **Do** nur echte Fotos des Betriebs zeigen (Projektfotos und Nahaufnahmen daraus, `src/fotos.mjs`), jede Quelle in `src/assets/QUELLEN.md`. Zwinge und Papierrahmen markieren ausschließlich echte Rochlus-Arbeit.
- **Do** Notizen nur zu dem schreiben, was auf dem Foto sichtbar ist, ohne erfundene Maße oder Materialien.
- **Do** Fehlendes im Review-Stand sichtbar und neutral markieren (`PlatzhalterBadge`, gestrichelte Flächen) und im Launch-Stand (`PUBLIC_STAND=launch`) den ganzen Slot entfallen lassen: kein leerer Rahmen, keine Klärungsbox, keine Galerie ohne Originalfotos.
- **Do** jede Section mit einem Weg zum Telefon schließen; die Nummer ist ein `tel:`-Link in Tabellenziffern ohne Umbruch.
- **Do** Bewegung einmalig an `data-bewegung` binden und bei „Bewegung reduzieren“ sowie ohne JS alle Inhalte sofort zeigen.

### Don't:
- **Don't** Kreiderot für etwas anderes als Anrufen verwenden, und nie zwei rote Anruf-Elemente gleichzeitig zeigen.
- **Don't** Stockfotos jeglicher Art (auch keine Material-Nahaufnahmen) und keine nachgemalten Materialproben in CSS.
- **Don't** Leistungen als Icon-Kacheln oder Karten setzen; sie stehen in der Werkstattliste.
- **Don't** eine zweite Seitenschrift einführen oder die Logo-Schriften außerhalb der Wortmarke nutzen.
- **Don't** Schilder-, Emaille- oder Editorial-Kulisse zurückholen; die Welt ist die Werkbank-Wand.
- **Don't** harte Versatzschatten, dunkle Flächen oder Schatten auf Text und Knöpfe setzen.
- **Don't** Versalien-Kennzeilen über Überschriften setzen; Versalien gibt es nur im Stempel (und in der Logo-Unterzeile).
- **Don't** Unbelegtes zeigen (Bewertungen, Zertifikate, Meistertitel, Gründungsjahr, Zahlen).
