---
name: Fliesenfachbetrieb Rochlus
description: Modern & markant – ein klares Bento-Raster aus abgerundeten Kacheln, große echte Bäder, breite schwere Überschriften, eine tragende Farbfläche.
colors:
  akzent: "#b0512c"
  akzent-tief: "#93421f"
  gruen: "#173f35"
  gruen-tief: "#10302a"
  gruen-soft: "#bcd2c7"
  grund: "#f6f6f3"
  flaeche: "#ecebe6"
  linie: "#dad8d2"
  weiss: "#ffffff"
  tinte: "#121212"
  tinte-soft: "#4a4a46"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 6.6vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.8vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 118"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  kachel: "1.5rem"
  karte: "1rem"
  pille: "999px"
spacing:
  raster-mobil: "1rem"
  raster: "1.5rem"
  kachel-innen: "1.75rem"
  kachel-innen-gross: "3rem"
  section: "4rem"
  section-gross: "6rem"
components:
  knopf-anruf:
    backgroundColor: "{colors.akzent}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.pille}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  knopf-anruf-hover:
    backgroundColor: "{colors.akzent-tief}"
    textColor: "{colors.weiss}"
  knopf-zweit:
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  knopf-zweit-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  kachel-weiss:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.kachel}"
    padding: "1.75rem"
  kachel-gruen:
    backgroundColor: "{colors.gruen}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.kachel}"
    padding: "3rem"
  karte-gruen-tief:
    backgroundColor: "{colors.gruen-tief}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.kachel}"
    padding: "1.75rem"
  foto-etikett:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    typography: "{typography.label}"
    rounded: "{rounded.pille}"
    padding: "0.375rem 0.875rem"
  nav-link:
    textColor: "{colors.tinte-soft}"
    rounded: "{rounded.pille}"
    padding: "0.625rem 1rem"
  nav-link-aktiv:
    backgroundColor: "{colors.flaeche}"
    textColor: "{colors.tinte}"
---

# Design System: Fliesenfachbetrieb Rochlus

## Overview

**Creative North Star: "Modern & markant"**

Eine moderne Handwerker-Website ohne Kostüm. Ordnung, Maßstab und Präzision tragen die Seite, nicht Metaphern oder Dekoration. Die Fläche ist ein klares Bento-Raster aus abgerundeten Kacheln auf hellem Grund; die echten Bäder des Betriebs stehen darin groß, als Foto-Kacheln auf Augenhöhe mit dem Text. Eine Schrift, Archivo, macht beides: breit und schwer für Aussagen, normal für Text.

Farbe arbeitet als Fläche, nicht als Verzierung. Tiefes Flaschengrün trägt die gewichtigen Kacheln und Abschnitte (Kernangebot, Ablauf, Kontakt); Terrakotta aus dem Logo bedeutet ausschließlich „Anrufen“. Alles andere bleibt hell und neutral, damit Fotos und Überschriften wirken.

Bewegung ist ruhig und kurz: Der Hero baut sich beim Laden gestaffelt auf, das Hero-Foto öffnet sich aus der Kachel, Inhalte tauchen beim Scrollen auf, Fotos zoomen bei Hover leicht heran. Bei „Bewegung reduzieren“ ist alles sofort da.

**Key Characteristics:**
- Bento-Raster aus Kacheln mit 1.5rem-Radius, 1.5rem Abstand (mobil 1rem).
- Überschriften Archivo 800 mit 118 % Breite und engem Spurabstand.
- Eine tragende Fläche (Flaschengrün), ein Signal (Terrakotta = Anruf).
- Große echte Fotos des Betriebs, keine Stockbilder, keine Icon-Kacheln.
- Pillen-Knöpfe, groß und eindeutig.

## Colors

Heller, neutraler Grund mit einer tiefgrünen Tragfläche und einem einzigen warmen Signal.

### Primary
- **Logo-Terrakotta** (akzent): ausschließlich für Anrufen: Anruf-Knopf, Anruf-Kachel, aktivierter Header-Anruf, mobile Anrufleiste, Schreibmarke. Identisch mit dem Terrakotta der Logo-Wortmarke.
- **Gebranntes Terrakotta** (akzent-tief): Hover-Zustand jeder Anruf-Fläche.

### Secondary
- **Flaschengrün** (gruen): die tragende Farbfläche: Kernangebots-Kachel, Ablauf-Abschnitt, Kontakt-Kachel, Textauswahl, Häkchen und Listenpunkte auf hellem Grund.
- **Tiefes Flaschengrün** (gruen-tief): Karten und Unterteilungen innerhalb grüner Flächen (Ablauf-Karten, Schrittleiste der Komplettsanierung).
- **Salbei** (gruen-soft): Nebentext und Ziffern auf Grün (Kontrast ≥ 7:1 auf gruen).

### Neutral
- **Grund** (grund): Seitenhintergrund, Header (90 % deckend mit Blur), mobile Anrufleiste.
- **Weiß** (weiss): Inhalts-Kacheln, Referenzen-Abschnitt, Foto-Etiketten, Text auf Grün und Terrakotta.
- **Fläche** (flaeche): Platzhalter hinter Fotos, Text-Kacheln neben Fotos, Hover und aktiver Zustand der Navigation, Menü-Knopf.
- **Linie** (linie): Haarlinien (Header-Unterkante, Footer, Faktenzeilen im Hero, Trennlinien in Faktenlisten).
- **Tinte** (tinte): Text, Fokusrahmen, Hover-Fläche des Kontur-Knopfs.
- **Tinte weich** (tinte-soft): Nebentext, Labels, Navigation im Ruhezustand (≥ 8:1 auf Grund).

### Named Rules
**The Ein-Rot-pro-Blick Rule.** Terrakotta erscheint nur für Anrufen und höchstens einmal im Blickfeld. Solange der Hero-Anruf sichtbar ist, bleibt der Header-Anruf eine neutrale Kontur und die mobile Anrufleiste eingefahren; erst danach übernehmen sie das Terrakotta. Am Kontakt-Anruf treten beide wieder zurück. Geregelt in Base.astro per IntersectionObserver (`data-anruf-weg`, `data-klingel-da`).

**The Eine-Fläche Rule.** Grün ist die einzige farbige Fläche. Keine weiteren Farbkacheln, keine Verläufe, keine zweite Akzentfarbe.

## Typography

**Display Font:** Archivo Variable mit Breitenachse (Fallback system-ui, sans-serif)
**Body Font:** Archivo Variable (dieselbe Familie, normale Breite)
**Logo-Schriften:** Fraunces und Instrument Sans, nur innerhalb der Logo-Wortmarke

**Character:** Eine Familie in zwei Haltungen. Breit (118 %) und schwer (800) wirkt sie bestimmt und baulich; normal gesetzt bleibt sie ruhig und gut lesbar.

### Hierarchy
- **Display** (800, clamp(2.35rem, 6.6vw, 5.5rem), 0.92, 118 % Breite): nur die H1 im Hero; darf automatisch trennen.
- **Headline** (800, clamp(2.2rem, 4.8vw, 4rem), 0.95, 118 % Breite): Abschnittsüberschriften. Abschluss-Aussage „Einfach anrufen.“ darf bis 5rem gehen.
- **Title** (800, 1.5rem, eng, -0.015em): Kachel- und Kartenüberschriften; die Kernangebots-Kachel skaliert bis 3.25rem.
- **Body** (400, 1.0625rem, 1.6): Fließtext, max. ca. 36rem Zeilenbreite (max-w-lg / max-w-xl).
- **Lead** (400, 1.125–1.25rem, 1.625): Einleitungssätze unter Überschriften, in tinte-soft bzw. gruen-soft.
- **Label** (600, 0.875rem): Begriffe in Faktenlisten, Foto-Etiketten. Kein Versal-Sperrsatz.

### Named Rules
**The Breite-Auszeichnung Rule.** Die breite Lage (`.breit`, 118 %) gehört Überschriften, Telefonnummern als Großzeile und Ziffern. Fließtext bleibt in normaler Breite.

**The Logo-Schriften Rule.** Fraunces und Instrument Sans werden nur für die Logo-Wortmarke geladen. Nie für Überschriften, Text oder Bedienelemente verwenden.

## Layout

Zentrierter Container (max. 80rem, Seitenrand 1rem / 1.5rem / 2rem) mit 12-Spalten-Raster ab lg. Abschnitte atmen mit 4rem vertikal, ab lg 6rem. Kacheln stehen im Bento: ungleich breite Spalten (7/5, 4/4/4, 7/5), teils über zwei Zeilen; Abstand 1rem mobil, 1.5rem ab lg. Innenabstand der Kacheln 1.75rem bis 3.5rem je nach Gewicht.

Abschnitte wechseln die Grundfläche (grund → weiß → grün → grund), statt Trennlinien zu setzen. Der Kontakt ist selbst eine große grüne Kachel innerhalb des Containers. Mobil stapelt alles einspaltig; Knöpfe werden volle Breite. Unten reserviert die Seite Platz für die mobile Anrufleiste (unter md). Sprungziele berücksichtigen den Sticky-Header (scroll-padding 5.5rem).

**The Bento Rule.** Neue Inhalte kommen als Kachel ins Raster, nicht als freischwebender Block. Text-Kacheln und Foto-Kacheln sind gleichrangig und teilen Radius und Abstand.

## Elevation & Depth

Flach. Tiefe entsteht durch Flächenwechsel (Grund, Weiß, Fläche, Grün, tiefes Grün) und Haarlinien, nicht durch Schatten. Einzige Ausnahme ist das aufgeklappte Mobilmenü, das über dem Inhalt schwebt; der Header nutzt halbtransparenten Grund mit Hintergrund-Blur.

### Shadow Vocabulary
- **Menü-Schweben** (`box-shadow: 0 20px 40px -20px rgb(0 0 0 / 0.35)`): nur das aufgeklappte Mobilmenü.

**The Flach-bleibt-flach Rule.** Kacheln, Karten und Knöpfe haben keinen Schatten. Hierarchie kommt aus Farbe, Größe und Position.

## Shapes

Weich abgerundete Rechtecke und Pillen, sonst keine Formen. Kacheln, Foto-Kacheln und das Mobilmenü tragen 1.5rem; kleinere Karten (Faktenzeilen, Klärungshinweis, Schrittleiste) 1rem; Knöpfe, Navigations-Links, Foto-Etiketten und Badges sind Pillen. Fotos werden immer von ihrer Kachel beschnitten (overflow hidden), nie freigestellt. Ränder sind Haarlinien (1px linie) oder bei Kontur-Knöpfen 1.5px in der Textfarbe; gestrichelt nur für Platzhalter.

## Components

### Buttons
- **Shape:** Pille (999px), mind. 3rem hoch, im Hero 3.5rem, im Kontakt 4rem.
- **Anruf (knopf-anruf):** Terrakotta mit weißer Schrift, 700, Telefon-Symbol vor der Nummer. Hover: gebranntes Terrakotta.
- **Kontur (knopf-zweit):** 1.5px Rand in currentColor, transparent. Hover: Tinte gefüllt mit weißer Schrift; auf Grün umgekehrt (weiß gefüllt, grüne Schrift).
- **Hover / Focus / Active:** Farbwechsel 160ms; Pfeil rückt 3px nach rechts; beim Drücken 1px nach unten und 99 %. Fokus: 2px Tinte, 3px Abstand; auf Grün weiß.

### Cards / Containers
- **Kachel:** 1.5rem Radius, overflow hidden, Weiß, Fläche oder Grün; ohne Schatten, ohne Rand.
- **Karte auf Grün:** tiefes Grün, Ziffer groß in Salbei (50 %), Titel weiß, Text Salbei.
- **Faktenzeile:** 1rem Radius, Haarlinie, grünes Häkchen, 600.

### Navigation
- **Desktop (ab lg):** Pillen-Links in tinte-soft, 600, 0.95rem; Hover und aktueller Abschnitt (Scroll-Spy, aria-current) auf Fläche mit Tinte.
- **Mobil:** runder Menü-Knopf auf Fläche, Menü als weiße 1.5rem-Kachel mit großen Zeilen; schließt bei Linkklick, Esc und Tipp daneben.
- **Header:** sticky, grund 90 % mit Blur, Haarlinie unten, Logo links, Header-Anruf rechts (siehe Ein-Rot-pro-Blick).

### Logo-Wortmarke (verbindlich)
Das Logo aus `public/logo/` ist verbindlich und wird nicht nachgebaut oder umgefärbt. Im Header wird `logo-lockup-light.svg` inline eingebunden (damit Fraunces und Instrument Sans greifen), die Papier-Hintergrundfläche entfernt und der viewBox auf die Marke beschnitten. Der Footer nutzt die Bildmarke `icon-verband.svg`. Das Terrakotta der Wortmarke ist die Anruf-Farbe der Seite.

### Foto-Kachel
Echtes Foto, object-cover in einer Kachel auf Fläche; Etikett als weiße Pille (90 %, Blur) unten links mit sachlichem Motivtext („Detail: …“). Hover: Foto zoomt in 700ms auf 104 %.

### Platzhalter-Badge
Kleine Pille mit gestricheltem Rand in tinte-soft auf Weiß, 0.75rem, 600; bewusst neutral, kein Terrakotta. Nur im Review-Stand.

### Mobile Anrufleiste
Unter md fest am unteren Rand: Anruf-Knopf plus Kontur-Knopf „E-Mail“ auf grund 95 % mit Blur, Safe-Area beachtet. Fährt (260ms) erst ein, wenn der Hero-Anruf aus dem Blick ist; eingefahren nicht fokussierbar; ohne JS immer sichtbar.

### Bewegung
- **Kurve:** `--kurve` cubic-bezier(0.22, 1, 0.36, 1) für alle Übergänge.
- **Hero-Aufbau:** Teile tauchen gestaffelt auf (800ms, 110ms je `--i`), das Foto öffnet sich aus einem eingerückten Ausschnitt (1200ms).
- **Scroll-Auftauchen:** `.auftauchen` über CSS-Scroll-Timeline (`view()`, entry 0–55 %); leichte Parallaxe am Hero-Foto. Nur mit `@supports (animation-timeline: view())`.
- **Longhands-Pflicht:** Scroll-getriebene Animationen werden als Longhands geschrieben (`animation-name`, `-timing-function`, `-fill-mode`, `-timeline`, `-range`). Der Minifier zerlegt die Kurzschreibweise zusammen mit `animation-timeline` falsch und setzt die Timeline zurück.
- **Reduzierte Bewegung:** alle Animationen aus, Übergänge 1ms, kein Smooth-Scroll.

## Do's and Don'ts

### Do:
- **Do** nur echte Fotos des Betriebs und daraus beschnittene Nahaufnahmen verwenden; jede Datei mit Herkunft in `website/src/assets/QUELLEN.md` eintragen und über `src/fotos.mjs` einbinden.
- **Do** Terrakotta ausschließlich für Anrufen einsetzen und die Ein-Rot-pro-Blick-Logik respektieren.
- **Do** Neues als Kachel ins Bento-Raster setzen (1.5rem Radius, 1rem/1.5rem Abstand).
- **Do** Überschriften in Archivo 800 mit 118 % Breite und Fließtext in normaler Breite setzen.
- **Do** fehlende Kundeninhalte im Review-Stand mit dem Platzhalter-Badge kennzeichnen und im Launch-Stand (`PUBLIC_STAND=launch`) ganz entfallen lassen: kein leerer Fotorahmen, keine Klärungsbox, keine Galerie ohne Originalfotos.
- **Do** Scroll-Animationen als Longhands schreiben und hinter `@supports (animation-timeline: view())` und `prefers-reduced-motion: no-preference` stellen.
- **Do** Tippziele ab 44px halten (`.ziel`, Knöpfe ab 3rem).

### Don't:
- **Don't** Stockbilder, KI-Bilder oder fremde Referenzfotos verwenden.
- **Don't** Metaphern oder Kulissen bauen (Schilder, Werkstatt-Requisiten, Papier-Anmutung); die Welt ist Raster, Maßstab und Fläche.
- **Don't** Icon-Kacheln mit Glyphen als Leistungsdarstellung; Symbole nur funktional (Telefon, Pfeil, Häkchen) in einer Strichstärke.
- **Don't** eine zweite Akzentfarbe, Verläufe oder Schatten auf Kacheln einführen.
- **Don't** Fraunces oder Instrument Sans außerhalb der Logo-Wortmarke verwenden; das Logo nicht nachsetzen oder umfärben.
- **Don't** Kicker oder Eyebrow-Zeilen über Überschriften setzen.
- **Don't** `animation`-Kurzschreibweise zusammen mit `animation-timeline` verwenden.
