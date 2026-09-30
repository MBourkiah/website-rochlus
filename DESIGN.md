---
name: Fliesenfachbetrieb Rochlus
description: Die Schilderwand am Haus um die Ecke – Emaille-Schilder auf hellem Putz.
colors:
  putz: "#ebe9e3"
  putz-tief: "#e0ded7"
  linie: "#cfccc4"
  emaille: "#fbfbf7"
  kobalt: "#1f3c88"
  kobalt-soft: "#c7d1ea"
  oxid: "#b0512c"
  oxid-tief: "#96431f"
  oxid-kontrast: "#ffffff"
  anthrazit: "#1c1d1f"
  anthrazit-soft: "#4b4e52"
  stahl: "#8d9396"
  stahl-hell: "#c9cdcf"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 9vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  nummer:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  schild:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.025em"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  schild: "14px"
  schild-rand: "8px"
  strasse: "8px"
  mini: "7px"
  rahmen: "8px"
  foto: "4px"
  etikett: "4px"
  klingel: "999px"
spacing:
  seitenrand: "1rem"
  seitenrand-sm: "1.5rem"
  container: "72rem"
  section: "5rem"
  section-lg: "7rem"
  raster-lg: "1.5rem"
  kopf: "4.5rem"
components:
  schild-emaille:
    backgroundColor: "{colors.emaille}"
    textColor: "{colors.anthrazit}"
    rounded: "{rounded.schild}"
  schild-kobalt:
    backgroundColor: "{colors.kobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.schild}"
  schild-anruf:
    backgroundColor: "{colors.oxid}"
    textColor: "{colors.oxid-kontrast}"
    rounded: "{rounded.schild}"
    padding: "2rem 2.5rem"
  schild-anruf-hover:
    backgroundColor: "{colors.oxid-tief}"
    textColor: "{colors.oxid-kontrast}"
  schild-strasse:
    backgroundColor: "{colors.emaille}"
    textColor: "{colors.anthrazit}"
    typography: "{typography.schild}"
    rounded: "{rounded.strasse}"
    padding: "0.875rem 2.25rem"
  schild-mini:
    backgroundColor: "{colors.emaille}"
    textColor: "{colors.anthrazit}"
    rounded: "{rounded.mini}"
    padding: "0 1rem"
    height: "2.75rem"
  hausnummer:
    backgroundColor: "{colors.kobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.schild}"
    size: "6rem"
  klingel-knopf:
    backgroundColor: "{colors.oxid}"
    textColor: "#ffffff"
    rounded: "{rounded.klingel}"
    size: "3.9rem"
  klingel-ring:
    backgroundColor: "{colors.stahl-hell}"
    rounded: "{rounded.klingel}"
    size: "5.5rem"
  platzhalter-etikett:
    backgroundColor: "{colors.emaille}"
    textColor: "{colors.anthrazit-soft}"
    rounded: "{rounded.etikett}"
    padding: "0.125rem 0.5rem"
---

# Design System: Fliesenfachbetrieb Rochlus

## Overview

**Creative North Star: "Die Schilderwand am Haus um die Ecke"**

Die Seite ist eine helle Putzwand, an der Emaille-Schilder hängen: gebrannte Glasur auf Stahl, das Material, das der glasierten Fliese am nächsten ist. Jede tragende Information steht auf einem Schild – die Aussage auf dem großen Kobalt-Schild, die Adresse als Hausnummer und Straßenschild, jede der 13 Leistungen als eigenes Straßenschild, der Ablauf als Hausnummern 1–4, der Kontakt als Türschild mit Klingel. Zwischen den Schildern bleibt Wand: ruhiger Putz, Haarlinien, Fließtext in Anthrazit.

Die Welt ist handfest, lokal und ruhig. Die Schilder haben echte Materialeigenschaften (Radius, eingelegter Rand, vier Schraubköpfe, weicher Wandschatten, sinken beim Drücken ein paar Millimeter an die Wand), aber es gibt keine Inszenierung: keine Scroll-Reveals, keine Laufbänder, keine Parallaxe. Bewegung existiert nur als Antwort auf Hand und Blick – Druck, Hover, Scrollspy, das Ein- und Ausfahren der Anrufleiste.

Die Welt verweigert zwei Nachbarn ausdrücklich: das Vollbild-Badfoto mit Icon-Kacheln (der 08/15-Handwerker) und das cremefarbene Serifen-Editorial (die Vorgängerwelt dieses Projekts). Sie ist hell, nie dunkel.

**Key Characteristics:**
- Heller Putz als Grund, Emaille-Weiß und Kobalt als Schildfarben, Anthrazit als Schrift.
- Oxidrot gehört allein der Anruf-Handlung, ein aktives Rot pro Blick.
- Barlow Condensed als Schilderschrift, Barlow als Text.
- Das Schild ist die einzige Container-Form; es gibt keine generischen Karten.
- Tiefe entsteht durch Wandschatten und Glasurkanten, nicht durch Ebenen-Stapel.
- Bewegung nur als Zustand (Druck, Hover), nie als Auftritt.

## Colors

Zwei Emaille-Farben auf neutralem Putz, ein Signalrot für genau eine Handlung.

### Primary
- **Emaille-Kobalt** (`kobalt`): Grund der Aussage-Schilder – Hero-Schild, Hausnummer der Adresse, das erste (führende) Leistungs-Straßenschild – und des einzigen vollflächigen Bands: Ablauf. Außerdem Fokusring, Textauswahl, aktiver Nav-Eintrag und Pfeil-Akzente. Weiße Schrift und weißer Rand darauf.
- **Kobalt-Nebentext** (`kobalt-soft`): Fließtext auf Kobalt-Schildern und im Kobalt-Band des Ablaufs (Kontrast ≥ 6.5:1), damit die weiße Headline führt.

### Secondary
- **Oxidrot** (`oxid`): die Terrakotta aus dem Logo, als Emaille gebrannt. Ausschließlich für Anruf-Flächen: rotes Telefonschild im Hero, Klingelknopf, mobile Anrufleiste, Header-Telefon (erst wenn das Hero-Schild aus dem Blick ist), Unterstreichung der Telefon-Links im Text.
- **Oxid tief** (`oxid-tief`): Hover des Anruf-Schilds und des Klingelknopfs; identisch mit der Unterzeile der Logo-Wortmarke.

### Neutral
- **Heller Putz** (`putz`): Seitengrund, auch `theme-color`. Liegt unter einer statischen Rauschstruktur (9 % Deckkraft), die ihn als Wand lesbar macht.
- **Putz tief** (`putz-tief`): Wandabschnitte für Themenwechsel (Komplettsanierung, Der Betrieb), mit 60 % Deckkraft und Haarlinien oben und unten.
- **Fugenlinie** (`linie`): Haarlinien zwischen Sections, Header- und Anrufleisten-Kante, Trenner in Listen.
- **Emaille-Weiß** (`emaille`): Grund der hellen Schilder, Fotorahmen, Platzhalterflächen.
- **Anthrazit** (`anthrazit`): Schrift und Rand der hellen Schilder, Headlines, Fließtext-Betonung.
- **Anthrazit soft** (`anthrazit-soft`): Fließtext, Nebentext, Nav im Ruhezustand.
- **Stahl** (`stahl`) und **Stahl hell** (`stahl-hell`): Metall der Welt – Link-Unterstreichung in Ruhe, Klingelring, gestrichelte Platzhalterrahmen, Scrollbar.

### Named Rules
**The Ein-Rot-pro-Blick Rule.** Oxidrot markiert die eine Handlung „Anrufen“, und im Blickfeld leuchtet immer nur eine rote Anruf-Fläche. Das ist im Code gebaut, nicht nur gemeint: Solange das Hero-Anrufschild sichtbar ist, bleiben Header-Telefon neutral und die mobile Anrufleiste eingefahren; an der Klingel treten beide wieder zurück. Das kleine Terrakotta-Quadrat im Logo ist Marke, keine Handlung, und zählt nicht mit. Kein anderes Element – kein Hinweis, kein Status, keine Dekoration – wird rot.

**The Kobalt-trägt-Aussage Rule.** Kobalt ist für Schilder, die etwas Wesentliches sagen (die Hauptaussage, die Hausnummer, die Reihenfolge, die führende Leistung). Die übrigen Schilder bleiben Emaille-Weiß; ein Kobalt-Schild pro Gruppe genügt.

## Typography

**Display Font:** Barlow Condensed (mit Arial Narrow, sans-serif) – Gewichte 500, 600, 700
**Body Font:** Barlow (mit system-ui, sans-serif) – Gewichte 400, 500, 600
**Logo-Schriften:** Fraunces und Instrument Sans, nur für die Wortmarke geladen

**Character:** Barlow Condensed ist die Schilderschrift der Welt: schmal, DIN-verwandt, für kurze, klare Zeilen auf Schildern und für Headlines. Barlow ist die gleiche Familie in normaler Breite und trägt den Text ruhig und gut lesbar. Alle Schriften sind self-hosted (Fontsource).

### Hierarchy
- **Display** (`display`): nur die Hero-Aussage auf dem Kobalt-Schild, bewusst mit harten Umbrüchen.
- **Headline** (`headline`): Section-Headlines (h2), max. ca. 42rem breit. Die Kontakt-Headline ist als Schlusspunkt eine Stufe größer (clamp(2.8rem, 6vw, 4.75rem), Zeilenhöhe 0.92).
- **Nummer** (`nummer`): Telefonnummern als Hauptinhalt eines Schilds, immer ohne Umbruch; an der Klingel bis 4rem.
- **Hausnummer** (Barlow Condensed 700, 3.75rem, im Hero bis 7.5rem, Zeilenhöhe 1): Ziffern auf Hausnummern-Schildern.
- **Title** (`title`): h3 der Gruppen und Stationen.
- **Schild** (`schild`): Beschriftung auf Straßenschildern, Kontakt-Labels, Nav (dort 1.125rem, Gewicht 500).
- **Lead** (`lead`): Einleitungstexte neben Headlines, max. ca. 34rem.
- **Body** (`body`): Fließtext, `anthrazit-soft`, auf Legal-Seiten in einer Spalte von max. 48rem.
- **Small** (`small`): Bildunterschriften, Schema-Beschriftungen, Klärungshinweise.

### Named Rules
**The Schilderschrift Rule.** Alles, was auf einem Schild steht oder als Überschrift wirkt, ist Barlow Condensed; alles, was man liest, ist Barlow. Keine dritte Textschrift.

**The Wortmarken-Grenze Rule.** Fraunces und Instrument Sans existieren nur in der verbindlichen Logo-Wortmarke. Sie werden nie für Headlines, Labels oder Text verwendet.

## Layout

Ein zentrierter Container von 72rem (`max-w-6xl`) mit Seitenrand 1rem, ab sm 1.5rem. Ab lg ein 12-Spalten-Raster mit 1.5rem Abstand (Hero, Komplettsanierung, Betrieb, Kontakt); darunter einspaltig, Leistungen ab md dreispaltig, Ablauf sm zwei-, lg vierspaltig, Arbeiten zwei-/vierspaltig mit versetzter zweiter und vierter Kachel (3rem).

Vertikaler Rhythmus: Sections mit 5rem Innenabstand, ab lg 7rem; Kontakt als Schluss ab lg 8rem. Headline zu Inhalt 3.5rem. Sections trennen sich über Haarlinien in `linie` und über den Wechsel zu `putz-tief`. Genau eine Section, der Ablauf, liegt als Kobalt-Band über die volle Breite und setzt den Rhythmuswechsel zwischen den hellen Wandabschnitten; weitere Farbflächen gibt es nicht.

Header: sticky, 4.5rem hoch, `putz` mit 95 % Deckkraft und leichtem Blur, Haarlinie unten. Unter md übernimmt die mobile Anrufleiste (fixiert unten, Safe-Area-beachtend, Seite reserviert 4.5rem Platz) das Telefon; die Nav klappt unter lg in ein Menü-Schild. Scroll-Padding 5.5rem, damit Anker nicht unter dem Header landen.

## Elevation & Depth

Die Welt ist flach wie eine Wand, auf der Schilder ein paar Millimeter vorstehen. Tiefe gibt es genau auf einer Ebene: Schild vor Putz. Ein weicher, kurzer Wandschatten plus zwei Glasurkanten (Lichtkante oben, dunkle Kante unten) machen das Schild zum Objekt. Es gibt keine gestapelten Ebenen, keine schwebenden Karten, keine harten Versatzschatten.

### Shadow Vocabulary
- **Wandschatten** (`--schatten-schild`: `0 1px 1px rgb(24 26 32 / 0.12), 0 12px 24px -14px rgb(24 26 32 / 0.45)`): jedes Schild, Fotorahmen, Klingelring.
- **Glasurkanten** (`inset 0 1px 0 rgb(255 255 255 / 0.22), inset 0 -2px 0 rgb(0 0 0 / 0.1)`): zusätzlich auf jedem Schild.
- **Flach** (`schild--flach`): kein Wandschatten. Für reine Beschriftung (Leistungs-Straßenschilder, Firmenschild), damit sie nicht wie drückbare Schilder wirken. Große plastische Schilder sind Hero, Schichtschnitt, Türschild und alles Klickbare.
- **Gedrückt** (`--schatten-schild-gedrueckt`: `0 1px 1px rgb(24 26 32 / 0.14), 0 4px 10px -8px rgb(24 26 32 / 0.4)`): klickbares Schild im Active-Zustand, zusammen mit 2px Versatz nach unten.

### Named Rules
**The Eine-Ebene Rule.** Ein Schild hängt an der Wand, nie auf einem anderen Schild. Schatten beschreiben den Abstand zur Wand und sonst nichts; Druck verkleinert ihn.

## Shapes

Die Grundform ist die Emaille-Platte: Rechteck mit weichem Radius (14px), innen ein eingelegter Rand in Schriftfarbe (9px Abstand, 2.5px stark, 8px Radius) und vier Schraubköpfe aus Stahl mit Lichtkante, je 20px von den Ecken. Farbvarianten tauschen nur Grund, Schrift und Rand.

Formate: **Straßenschild** flach, 8px Radius, Rand 5px/2px, zwei Schrauben seitlich mittig. **Mini** (Header, Etiketten, Anrufleiste) 7px Radius, Rand 3px/1.5px, ohne Schrauben. **Hausnummer** quadratisch, Randabstand und Schraubenabstand werden mit der Größe verkleinert. Rund ist nur die Klingel (Ring und Knopf, 999px).

Außerhalb der Schilder: Fotorahmen aus Emaille mit 8px Radius und 6px Passepartout, Foto darin 4px; Schema-Schichten mit 3px Radius an den Enden. Gestrichelte Ränder bedeuten immer „kommt noch“ (Platzhalter).

## Components

Alle Schild-, Klingel-, Link- und Schema-Klassen liegen in `@layer components`, damit Tailwind-Utilities im Markup Vorrang haben.

### Schild (Grundkomponente)
Das Emaille-Schild ist der einzige Container der Welt. Varianten: **Emaille** (weiß, Anthrazit-Rand), **Kobalt** (weiße Schrift, weißer Rand), **Rot** (nur Anruf, Rand weiß 90 %). Innenabstand großzügig (Hero 4rem seitlich, Türschild 3.5rem, Firmenschild 2.5–3rem), damit die Schrauben nie Text berühren.

### Anruf-Schild (Primäraktion)
- **Form:** rotes Schild, volles Format mit Schrauben; „Anrufen“ mit Telefon-Symbol, darunter die Nummer in `nummer` und ein Satz in Weiß 90 %, ab lg vertikal mittig gruppiert. Direkt darunter auf dem Putz die Rückfall-Zeilen „Niemand erreicht? Mobil: …“ und „Lieber schreiben? …“.
- **Hover:** Grund wechselt zu `oxid-tief`.
- **Active:** sinkt 2px an die Wand, Schatten wird zu „Gedrückt“ (160ms, `cubic-bezier(0.22, 1, 0.36, 1)`).
- **Fokus:** 2px-Ring außen in `anthrazit` (das Schild sitzt auf hellem Putz; ein weißer Ring wäre unsichtbar).

### Header-Telefon und Anrufleiste
- **Header-Telefon:** Mini-Schild, 2.75rem hoch, Nummer ab sm, sonst „Anrufen“. Neutral (Emaille), ab md rot, sobald das Hero-Anrufschild nicht sichtbar ist und die Klingel auch nicht.
- **Anrufleiste (mobil):** fixiert unten, rotes Mini-Schild mit Nummer plus Emaille-Mini-Schild „E-Mail“ im Abstand von 1rem; fährt (260ms) erst ein, wenn das Hero-Schild aus dem Blick ist, und an der Klingel wieder aus. Ohne JavaScript immer sichtbar.

### Straßenschilder (Leistungen)
Drei flache Hinweistafeln (`schild--flach`), eine pro Gruppe, wie das Verzeichnis im Hauseingang: Gruppentitel (h3) und Satz oben, darunter jede Leistung als Zeile in `schild`-Typo, getrennt durch Haarlinien. Reine Beschriftung, keine Links, kein Hover. Die Tafel der führenden Gruppe (Verlegen, mit der Komplettsanierung) ist Kobalt.

### Hausnummern (Ablauf, Adresse)
Quadratisches Schild (6rem) mit Ziffer in Barlow Condensed 700. Adresse im Hero: Kobalt mit weißer Ziffer (ab lg 6.5rem-Schild, Ziffer 4.5rem, bewusst kleiner als die Telefonnummer), „Kranzbinderweg · Köln“ auf eigenem Straßenschild daneben, für Screenreader als eine Adresse gelesen. Ablauf-Stationen im Kobalt-Band invertiert: Emaille-Weiß mit Kobalt-Ziffer und Kobalt-Rand. Die Nummer trägt Information (Reihenfolge, Adresse), nie Dekoration. Unter jeder Station eine Haarlinie (Weiß 25 %) mit Pfeil und „Danach: …“.

### Die Klingel (Signatur)
Anruf-Knopf am Türschild: Stahlring (5.5rem, `stahl-hell`, Stahl-Rand, Wandschatten) mit oxidrotem Drücker (3.9rem) und Telefon-Symbol, daneben die Nummer bis 4rem. Hover: `oxid-tief`. Active: Drücker sinkt 2px und schrumpft auf 97 %, Schatten verschwindet (90ms). Die einzige Signatur-Interaktion der Seite.

### Links
Text-Links sind unterstrichen (1.5px, Abstand 0.3em) in `stahl`, beim Hover in Schriftfarbe. Telefon-Links im Fließtext tragen die Unterstreichung in `oxid` und die Nummer in Barlow Condensed 1.5rem (im Kobalt-Band weiß). Freistehende Links bekommen mit `.ziel` eine Tippfläche von mindestens 2.75rem; Links im Fließtext der Rechtsseiten nutzen denselben Stil über `.rechtstext`.

### Navigation
Barlow Condensed 1.125rem, Gewicht 500, leicht gesperrt, `anthrazit-soft`; Hover `anthrazit`, aktiver Abschnitt (Scrollspy) `kobalt`. Unter lg: Mini-Schild mit drei Strichen öffnet ein Emaille-Schild mit Einträgen in 1.25rem, getrennt durch Fugenlinien; schließt nach Linkklick, mit Esc (Fokus zurück aufs Menü-Schild) und bei Tipp daneben.

### Fotorahmen
Emaille-Passepartout (6px) mit 8px Radius, feiner Anthrazit-Rand (20 %) und Wandschatten; darunter ein Mini-Schild als Etikett.

### Platzhalter-Etikett
Kennzeichnet unbestätigte Inhalte: kleines Emaille-Etikett, gestrichelter `anthrazit-soft`-Rand, 0.75rem halbfett, bewusst neutral (kein Kobalt, kein Rot). Größere Lücken als gestrichelter Kasten in `stahl`. Ein Arbeitsmittel bis zur Kundenfreigabe, kein Gestaltungselement: Es erscheint nur im Review-Stand. Im Launch-Stand (`PUBLIC_STAND=launch`, `src/stand.ts`) entfallen Etiketten und leere Slots komplett.

### Fotoplätze
Echte Fotos stehen zentral in `src/fotos.mjs` (Porträt, fertiges Bad, Referenzen). Ist ein Eintrag leer, zeigt der Review-Stand einen gestrichelten Platzhalter und der Launch-Stand nichts. Mit Porträt zeigt das Anruf-Schild ein kleines Bild und „Sie sprechen direkt mit Marc Rochlus.“; das Badfoto steht im Emaille-Rahmen unter dem Text der Komplettsanierung. Keine Stock- oder Ersatzfotos.

### Schichtaufbau (Schema)
Querschnitt durch einen Badboden: fünf Schichtstreifen (Fliese, Kleber, Heizmatte, Abdichtung, Untergrund) mit eigenen Materialmustern, rechts die Beschriftung mit gestrichelten Trennern. Die Schichtfarben gehören nur diesem Schema und sind keine System-Tokens.

### Marke
Die Logo-Wortmarke (`public/logo/`: „Rochlus“ in Fraunces, „FLIESENFACHBETRIEB“ in Instrument Sans, zwei versetzte Fliesen-Quadrate in Anthrazit und Terrakotta) ist verbindlich und wird unverändert inline eingebunden, nur ohne ihre Papierfläche, damit sie direkt auf dem Putz steht. Im Footer steht die Bildmarke (versetzte Fliesen) mit 20px.

## Do's and Don'ts

### Do:
- **Do** jede tragende Information auf ein Schild setzen: Emaille-Platte mit 14px Radius, eingelegtem Rand und Schrauben (bzw. Straßen- oder Mini-Format).
- **Do** Oxidrot nur für „Anrufen“ nutzen und die Ein-Rot-pro-Blick-Logik aus `Base.astro` auf jeder neuen Seite mitnehmen.
- **Do** Kobalt-Schilder für Aussage, Hausnummer und Reihenfolge reservieren, sonst Emaille-Weiß.
- **Do** Barlow Condensed für Schild- und Überschriftentext, Barlow für Lesetext.
- **Do** Tiefe nur über Wandschatten und Glasurkanten; klickbare Schilder sinken beim Drücken 2px an die Wand.
- **Do** Sections über Haarlinien in `linie` und den Wechsel zu `putz-tief` gliedern.
- **Do** unbestätigte Inhalte mit dem neutralen, gestrichelten Platzhalter-Etikett kennzeichnen.

### Don't:
- **Don't** Vollbild-Badfotos mit Icon-Kacheln – der 08/15-Handwerker ist die abgelehnte Nachbarwelt.
- **Don't** Creme-Editorial mit Serifen und keine dunklen Flächen oder Kapitel; die Welt ist heller Putz.
- **Don't** Fraunces oder Instrument Sans außerhalb der Logo-Wortmarke.
- **Don't** Rot für Hinweise, Status, Hervorhebungen oder Dekoration, und nie zwei aktive Anruf-Flächen gleichzeitig im Blick.
- **Don't** Scroll-Reveals, Laufbänder oder Auftritts-Animationen; Bewegung nur als Druck-, Hover- oder Leisten-Zustand (160ms, 260ms für die Leiste).
- **Don't** Schilder auf Schilder stapeln oder Schilder schweben lassen; harte Versatzschatten gehören nicht zu dieser Welt.
- **Don't** reine Beschriftungs-Schilder (Leistungen) wie Buttons aussehen oder reagieren lassen.
