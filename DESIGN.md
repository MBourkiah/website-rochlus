---
name: Fliesenfachbetrieb Rochlus
description: Handwerker-Standard, sauber – bekannter Aufbau einer Handwerker-Website, ruhig und präzise umgesetzt, mit echten Bädern und Terrakotta nur fürs Anrufen.
colors:
  akzent: "#b0512c"
  akzent-tief: "#93421f"
  weiss: "#ffffff"
  hell: "#f5f5f3"
  linie: "#e4e3df"
  tinte: "#1d2125"
  tinte-soft: "#575c61"
  dunkel: "#1d2125"
  dunkel-soft: "#b6bbc0"
typography:
  display:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  wortmarke:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  knopf: "6px"
  karte: "8px"
  rund: "9999px"
spacing:
  rand-mobil: "1rem"
  rand: "1.5rem"
  rand-breit: "2rem"
  raster: "1.5rem"
  karte-innen: "1.75rem"
  abschnitt: "5rem"
  abschnitt-breit: "7rem"
components:
  knopf-anruf:
    backgroundColor: "{colors.akzent}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.knopf}"
    padding: "0.75rem 1.4rem"
    height: "3rem"
  knopf-anruf-hover:
    backgroundColor: "{colors.akzent-tief}"
    textColor: "{colors.weiss}"
  knopf-zweit:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    rounded: "{rounded.knopf}"
    padding: "0.75rem 1.4rem"
    height: "3rem"
  knopf-zweit-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  karte:
    backgroundColor: "{colors.weiss}"
    rounded: "{rounded.karte}"
    padding: "1.75rem"
  schritt-nummer:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.rund}"
    size: "2.75rem"
  platzhalter-badge:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte-soft}"
    rounded: "4px"
    padding: "0.125rem 0.625rem"
---

# Design System: Fliesenfachbetrieb Rochlus

## Overview

**Creative North Star: "Handwerker-Standard, sauber"**

Die Seite folgt bewusst dem Aufbau, den Kunden von Handwerker-Websites kennen: Kontaktleiste, Header mit Anruf-Knopf, Foto-Hero mit klarer Aussage, Vertrauensleiste, Leistungskarten, Bildraster, Ablauf in Schritten, Fakten zum Betrieb, dunkler Kontaktbereich. Die Form ist vertraut; die Qualität liegt in der Ausführung: ruhige weiße und hellgraue Flächen, feine Linien, eine Schrift, klare Größenstufen, moderate Radien und keine billigen Details.

Getragen wird die Seite von echten Fotos der Bäder des Betriebs. Farbe tritt fast nur über diese Fotos auf; die Oberfläche selbst bleibt neutral (Weiß, Hellgrau, Anthrazit). Terrakotta aus dem Firmenlogo ist dem Anrufen vorbehalten, und pro Blick ist nur ein Anruf-Element terrakotta. Bewegung ist auf ein dezentes Einblenden beim Scrollen beschränkt.

Das Logo-Paket (`website/public/logo/`) ist ausgesetzt, bis das neue Logo kommt. Bis dahin steht im Header eine schlichte Text-Wortmarke in der Seitenschrift.

**Key Characteristics:**
- Bekannte Handwerker-Gliederung, sauber und präzise ausgeführt
- Weiß und Hellgrau im Wechsel, Anthrazit für Text, Kontakt und Footer
- Terrakotta nur für Anrufen, ein Anruf-Akzent pro Blick
- Eine Schrift (Figtree), fett in Überschriften, ruhig im Text
- Radien 6–8px, 1px-Linien, Karten mit Bild
- Nur echte Rochlus-Fotos; Lücken als Platzhalter nur im Review-Stand

## Colors

Neutrale, helle Palette mit einem warmen Akzent, der ausschließlich zum Telefon führt.

### Primary
- **Logo-Terrakotta** (`akzent`): Füllung des Anruf-Knopfs (Hero, Komplettsanierung, Kontakt, mobile Anrufleiste) und des Header-Anrufs, sobald der Hero-Anruf aus dem Blick ist. Sonst nirgends.
- **Gebrannte Terrakotta** (`akzent-tief`): Hover-Zustand des Anruf-Knopfs.

### Neutral
- **Weiß** (`weiss`): Seitengrund, Karten, Header (95 % deckend mit Weichzeichner), mobile Anrufleiste.
- **Kalkgrau** (`hell`): Wechselgrund der Abschnitte Leistungen und Ablauf, Kontaktleiste oben, Bildgrund, Hover im Mobilmenü.
- **Fugenlinie** (`linie`): alle 1px-Linien – Kartenrand, Header- und Leistenunterkante, Trenner in Vertrauensleiste und Faktenliste.
- **Anthrazit** (`tinte` / `dunkel`, derselbe Wert): Fließtext, Überschriften, Fokusring, Schritt-Nummern, Hover-Füllung des Zweitknopfs; als `dunkel` der Grund von Hero-Abdunklung, Kontaktbereich und Footer.
- **Schiefergrau** (`tinte-soft`): Nebentext, Einleitungen, Navigation im Ruhezustand, Platzhalter-Etikett (≥ 6.5:1 auf Weiß und Kalkgrau).
- **Helles Schiefergrau** (`dunkel-soft`): Nebentext auf Anthrazit (≥ 8:1).

### Named Rules
**The Anruf-Only Rule.** Terrakotta bedeutet „hier anrufen“ und nichts anderes. Keine terrakottafarbenen Flächen, Linien, Überschriften, Häkchen oder Symbole ohne Telefonfunktion.

**The Ein-Rot-pro-Blick Rule.** Gleichzeitig ist höchstens ein Anruf-Element terrakotta. Solange der Hero-Anruf sichtbar ist, bleibt der Header-Anruf neutral (Umrandung) und die mobile Anrufleiste eingefahren; erreicht der Besucher den Kontaktbereich, treten beide wieder zurück. Seiten ohne Hero (Rechtsseiten) zeigen beide sofort.

## Typography

**Display Font:** Figtree Variable (mit system-ui, sans-serif)
**Body Font:** Figtree Variable (mit system-ui, sans-serif)

**Character:** Eine freundliche, klare Groteske für alles. Hierarchie entsteht über Größe und Gewicht (Text 400, Knöpfe 650, Überschriften 700, Wortmarke 800), nicht über eine zweite Schrift. Überschriften laufen mit leicht engerer Laufweite (-0.02em) und ausbalancierten Zeilen.

### Hierarchy
- **Display**: nur die H1 im Hero, weiß auf abgedunkeltem Foto, max. ~42rem breit.
- **Headline**: Abschnittsüberschriften (H2). Der Kontaktbereich darf größer werden (bis `clamp(2rem, 4vw, 3.25rem)`).
- **Title**: Karten- und Schrittüberschriften (H3); der Komplettsanierungs-Block nutzt eine größere Stufe (`clamp(1.6rem, 2.6vw, 2.2rem)`).
- **Lead**: Einleitungssatz unter jeder H2 und im Hero, in Schiefergrau, max. ~36–42rem breit.
- **Body**: Fließtext und Listen; Listenpunkte in Karten bei 0.98rem.
- **Label**: Kontaktleiste, `dt`-Beschriftungen im Kontakt, Nebenzeilen.
- **Wortmarke**: „Rochlus“ im Header; darunter „Fliesenfachbetrieb“ in 0.7rem, 600, Versalien, 0.14em Laufweite, Schiefergrau. Das ist Teil der Wortmarke, kein Stilmittel für andere Stellen.

### Named Rules
**The Eine-Schrift Rule.** Figtree trägt die ganze Seite, self-hosted über Fontsource. Keine zweite Familie, keine Systemschrift als Display-Ersatz.

**The Keine-Dachzeile Rule.** Überschriften stehen ohne Dachzeilen, Eyebrows oder Versal-Kicker darüber. Die H2 sagt selbst, worum es geht.

## Layout

Ein zentrierter Container (max. 80rem) mit Seitenrand 1rem / 1.5rem (sm) / 2rem (lg). Abschnitte sind volle Breite mit Grundwechsel Weiß – Kalkgrau – Weiß – Kalkgrau – Weiß – Anthrazit und vertikal 5rem, ab lg 7rem Innenabstand. Raster haben 1.5rem Abstand (Bildraster 1rem, ab lg 1.5rem).

Gliederung: Kontaktleiste (ab md, 2.5rem hoch, Kalkgrau) → Sticky-Header (4.5rem) → Foto-Hero → Vertrauensleiste (4 Punkte, 1/2/4 Spalten mit Trennlinien) → Leistungen (3 Karten, darunter ein breiter Komplettsanierungs-Block Bild/Text) → Unsere Bäder (2/4-Spalten-Bildraster, große Bilder über 2×2) → Ablauf (4 Karten, 1/2/4 Spalten) → Über uns (Text links, Faktenkarte rechts) → Kontakt (7/12 Text, 4/12 Kontaktdaten) → Footer.

Mobil reserviert die Seite unten 4.5rem für die Anrufleiste. Ankerziele haben 5.5rem Scroll-Padding wegen des Sticky-Headers.

### Named Rules
**The Bekannte-Form Rule.** Die Reihenfolge und die Bausteine einer Handwerker-Seite bleiben lesbar. Neue Flächen ordnen sich in diese Gliederung ein, statt eigene Inszenierungen zu erfinden.

## Elevation & Depth

Flach. Tiefe entsteht durch den Grundwechsel Weiß/Kalkgrau, 1px-Linien und das abgedunkelte Hero-Foto (Verlauf von links, Anthrazit 95 % → 75 % → 20 %). Karten haben keinen Schatten, nur eine Linie.

### Shadow Vocabulary
- **Menü-Schatten** (`0 16px 32px -16px rgb(0 0 0 / 0.3)`): nur das aufgeklappte Mobilmenü, weil es über Inhalt liegt.

### Named Rules
**The Linie-statt-Schatten Rule.** Flächen grenzen sich über die Fugenlinie ab. Schatten gibt es nur für schwebende Ebenen (Mobilmenü).

## Shapes

Moderate, gleichmäßige Radien: Knöpfe und kleine Bedienelemente 6px, Karten, Bilder und Menü 8px. Kreise nur für Schritt-Nummern und das Inhaber-Porträt. Linien immer 1px; gestrichelt nur für Platzhalter. Bilder in Karten laufen randlos bis an die Kartenkante (16:10, Bildraster 4:5 und 1:1).

## Components

### Buttons
Klar, groß, eindeutig: der Knopf sagt, was passiert.
- **Shape:** sanft gerundet (6px), mind. 3rem hoch; in Hero, Kontakt und Anrufleiste 3.25–3.5rem bei größerem Text.
- **Anruf (`knopf-anruf`):** Terrakotta, weiße Schrift 650, Telefon-Symbol (Feather „phone“, Strich 2) vor der Nummer. Beschriftung ist die Nummer selbst oder eine Handlung („Sanierung besprechen“).
- **Zweitknopf (`knopf-zweit`):** 1px-Rand in Textfarbe, transparent; Hover füllt Anthrazit mit weißer Schrift, auf Dunkel/Foto umgekehrt (weiß mit Anthrazit).
- **Header-Anruf:** startet als Zweitknopf und wird terrakotta, sobald der Hero-Anruf aus dem Blick ist (ab md).
- **Hover / Focus:** Farbwechsel 160ms mit `--kurve`; Fokus als 2px-Anthrazit-Ring, 3px Abstand (auf Dunkel/Foto weiß).

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Weiß, auch auf Kalkgrau-Abschnitten.
- **Shadow Strategy:** keiner, siehe Elevation.
- **Border:** 1px Fugenlinie.
- **Internal Padding:** 1.5rem, ab lg 1.75rem; Komplettsanierungs-Block bis 3rem.

### Navigation
- **Header:** Sticky, Weiß 95 % mit Weichzeichner, Unterkante 1px. Links Wortmarke, Mitte Ankernavigation (ab lg), rechts Anruf.
- **Links:** 0.95rem, 600, Schiefergrau; Hover und aktiver Abschnitt (Scroll-Spy, `aria-current`) in Anthrazit.
- **Mobil:** Menü-Knopf 2.75rem mit Linienrand; Menü als 16rem-Karte mit Menü-Schatten, Links 1.125rem, schließt bei Klick, Esc und Tipp daneben.

### Mobile Anrufleiste
Unten fest, Weiß 95 % mit Weichzeichner, Linie oben, Safe-Area beachtet: Anruf-Knopf mit Nummer plus Zweitknopf „E-Mail“. Fährt in 260ms ein, sobald der Hero-Anruf weg ist; eingefahren nicht fokussierbar; ohne JS immer sichtbar.

### Schritt-Nummer
Anthrazit-Kreis (2.75rem) mit weißer Ziffer 1.125rem/700 über der Schrittüberschrift; die Nummer trägt die Reihenfolge, für Screenreader steht „Schritt n:“ in der H3.

### Platzhalter-Badge
Kleines Etikett (0.75rem, 600), gestrichelter Rand in Schiefergrau, weißer Grund, bewusst ohne Akzentfarbe. Erscheint nur im Review-Stand; im Launch-Stand rendert es nichts. Fehlende Inhalte als gestrichelte Box (8px, Schiefergrau 40 %) mit Badge und kurzer Erklärung.

### Text-Link
Unterstrichen, 1px, 0.25em Abstand, Unterstreichung in 45 % der Textfarbe, beim Hover volle Farbe. Kontaktdaten-Links mind. 2.75rem hoch.

## Do's and Don'ts

### Do:
- **Do** Terrakotta (`akzent`) ausschließlich für Anruf-Knöpfe nutzen und pro Blick nur einen davon zeigen (Logik in `Base.astro`).
- **Do** ausschließlich echte Fotos von Rochlus-Bädern zeigen; jede Datei steht mit Herkunft in `website/src/assets/QUELLEN.md` und wird über `website/src/fotos.mjs` eingebunden.
- **Do** fehlende Inhalte im Review-Stand mit dem Platzhalter-Badge kennzeichnen und im Launch-Stand (`PUBLIC_STAND=launch`) ganz weglassen – kein leerer Rahmen, keine Klärungsbox.
- **Do** im Header die Text-Wortmarke „Rochlus / Fliesenfachbetrieb“ verwenden, bis das neue Logo freigegeben ist.
- **Do** Scroll-Animationen als Longhands schreiben (`animation-name`, `animation-timing-function`, `animation-fill-mode`, `animation-timeline`, `animation-range`), weil der Minifier die Kurzform mit `animation-timeline` zerlegt; immer hinter `@supports (animation-timeline: view())` und `prefers-reduced-motion: no-preference`.
- **Do** Bewegung auf das Einblenden (`einblenden`: 16px hoch, Deckkraft 0 → 1, Bereich `entry 0% entry 45%`) und kurze Zustandswechsel (160ms, Anrufleiste 260ms, `--kurve`) begrenzen.
- **Do** Abschnitte im Wechsel Weiß/Kalkgrau setzen und mit dem dunklen Kontaktbereich abschließen.

### Don't:
- **Don't** das Logo-Paket aus `website/public/logo/` einbinden, solange es ausgesetzt ist.
- **Don't** Stockbilder, KI-Bilder oder fremde Referenzfotos zeigen.
- **Don't** Terrakotta für Häkchen, Symbole, Linien, Überschriften oder Flächen ohne Anruffunktion einsetzen.
- **Don't** Dachzeilen/Eyebrows über Überschriften, Pillen-Etiketten oder eine zweite Schriftfamilie einführen.
- **Don't** Karten mit Schatten absetzen; Abgrenzung läuft über die 1px-Linie.
- **Don't** Radien über 8px (außer Kreisen) oder Kachel-/Bento-Raster einführen.
