# Design-Konzept — Fliesenfachbetrieb Rochlus GmbH

Stand: 2026-07-06 · Basis: Ist-Analyse vom 2026-07-06 (`analyse/daten/ist-analyse.json`)

## Leitidee & Formensprache

Das Handwerk selbst liefert die Gestaltungssprache: **das Fliesenraster mit Fuge**.

- **Fugen-Grid:** Feine 1px-Linien strukturieren Sections und Bildrahmen — wie Fugen zwischen Fliesen. Kein dekoratives Ornament, sondern das sichtbare Ordnungsprinzip der Seite.
- **Verband statt Zentrierung:** Layout-Elemente sind versetzt angeordnet wie Fliesen im Läuferverband (halbversetzt). Das erzeugt die bewusste Asymmetrie — Hero-Text links, Bild rechts überlappend; Referenzkacheln versetzt statt in Reih und Glied.
- **Flächen statt Effekte:** Farbe kommt als satte, ruhige Fläche (wie eine Fliese), nie als Gradient, Blob oder Glassmorphism.
- Dieses Motiv funktioniert **unabhängig vom Logo** — es zitiert das Mosaik-Logo, ohne es zu brauchen.

## Farbrichtungen

### Variante A — Warme Materialtöne (Terrakotta / Kalkstein / Anthrazit)

| Rolle | Farbe | Wert |
|---|---|---|
| Akzent / CTA | Terrakotta (gebrannter Ton) | `#B85C38` |
| Hintergrund hell | Kalkstein-Weiß | `#F5F1EA` |
| Hintergrund-Wechselfläche | Sandstein | `#E8E0D3` |
| Text / dunkle Flächen | Anthrazit (Schiefer) | `#26251F` |
| Sekundär / Linien (Fugen) | Steingrau | `#A79E90` |

**Warum sie zur Branche passt:** Fliesen *sind* gebrannter Ton und Naturstein — die Palette ist buchstäblich das Material des Gewerks. Sie transportiert das Hochwertige (Bad-Komplettsanierung, edle Materialien, Naturstein) und hebt sich deutlich vom Handwerker-Blau ab, das 80 % der Branche nutzt. Wirkt wie ein Interieur-Magazin, nicht wie ein Gewerbeeintrag.

**Wann sinnvoller:** Wenn das Logo ohnehin überarbeitet wird (oder zumindest einfarbig neu gezeichnet werden darf) und der Kunde sich stärker Richtung hochwertiger Bad-/Komplettsanierung positionieren will. Mit dem bestehenden bunten Mosaik-Logo beißt sich Terrakotta leicht.

### Variante B — Mosaik modernisiert (gedämpftes Rot / Tiefblau / Ocker)

| Rolle | Farbe | Wert |
|---|---|---|
| Primär / dunkle Flächen | Tiefblau (aus Logo-Blau abgedunkelt) | `#2E4A62` |
| Akzent / CTA | Ziegelrot (Logo-Rot entsättigt) | `#A6392E` |
| Mikro-Akzent (sparsam) | Ocker (Logo-Gelb gedämpft) | `#C9A227` |
| Hintergrund hell | Warmes Off-White | `#F6F4EF` |
| Text | Fast-Schwarz warm | `#22211D` |

**Warum sie zur Branche passt:** Die drei Logofarben bleiben erkennbar, werden aber von Signalfarben zu Materialfarben heruntergestimmt (Ziegel, blauer Stein, Ocker-Pigment — alles reale Baustoff-Töne). Blau trägt Seriosität/Handwerkstradition, das Rot bleibt als CTA-Farbe aktiv.

**Wann sinnvoller:** Wenn das Logo unverändert bleibt (Fahrzeugbeschriftung, Briefpapier, Arbeitskleidung existieren vermutlich) und Wiedererkennung bei Bestandskunden wichtiger ist als Neupositionierung. Die Website wirkt dann wie eine Evolution, nicht wie ein Bruch.

**Empfehlung:** Variante A als Primärvorschlag präsentieren, Variante B als Sicherheitsoption — die Logo-Entscheidung (noch offen) gibt den Ausschlag. Beide Varianten nutzen dieselben Layouts, nur die Token wechseln.

## Typografie-Paarung

**Headlines: Fraunces** (SIL OFL, self-hostable, variable)
Eine Serifenschrift mit fühlbarem Charakter — weiche, fast tonartige Rundungen, optische Größen für große Displays. Fraunces taucht in Interieur-, Manufaktur- und Food-Branding auf, aber praktisch nie in Tech-Templates oder KI-Baukästen. Sie gibt der Seite das „von Hand gemacht, aber präzise", das zum Gewerk passt — und unterscheidet sich radikal vom austauschbaren Grotesk-Einerlei (Inter/Montserrat/Poppins).

**Fließtext: Instrument Sans** (SIL OFL, self-hostable, variable)
Ruhige, gut lesbare Grotesk mit leicht technischem Unterton — sie hält sich zurück, hat aber genug Eigenheiten (offene Punzen, markantes „a"), um nicht nach System-Font auszusehen. Klare Rollentrennung: Fraunces spricht, Instrument Sans erklärt.

**Hierarchie statt Gleichmacherei:** H1 sehr groß (clamp ~2.5–4.5rem) und eng gesetzt, H2 deutlich abgestuft, Eyebrow-Labels in Instrument Sans Versalien mit Sperrung, Fließtext max. ~65 Zeichen Zeilenlänge. Zahlen (Jahre, Telefonnummer) dürfen groß in Fraunces stehen — Typografie ersetzt Icons.

Fallback-Alternative, falls Fraunces dem Kunden zu editorial ist: **Archivo** (Semi-Expanded, fett) für Headlines + **Source Sans 3** — solider, handwerklich-direkter, immer noch nicht generisch.

## Seitenkonzept (Onepager mit Ankernavigation + Impressum/Datenschutz als Unterseiten)

| # | Section | Inhalt | Neu ggü. Ist-Zustand |
|---|---|---|---|
| 0 | **Header** (kompakt, sticky) | Logo-Slot (funktioniert mit Bild-Logo *oder* typografischer Wortmarke „ROCHLUS" in Fraunces als Interim), Ankernav, **klickbare Telefonnummer als CTA rechts oben** (`tel:`-Link) | Neu — bisher kein CTA, Nummer nur im Footer als Text |
| 1 | **Hero** (asymmetrisch) | Links: Aussage-Headline (z. B. „Fliesen, Naturstein, komplette Bäder. Seit [XX] Jahren in Köln.") + 1–2 Sätze + zwei Aktionen: „Projekt anfragen" (Anker zu Kontakt) und `tel:`-Link. Rechts versetzt: echtes Arbeits-/Referenzfoto im Fugen-Rahmen | Ersetzt Stock-Vollbild-Hero; kein zentriertes Hero-Klischee, kein Mockup |
| 2 | **Komplettsanierung** (Feature-Section, nicht Grid-Kachel) | Das wertvollste Angebot bekommt eine eigene Bühne: Bad-/Komplettsanierung inkl. Raumgestaltung, aus einer Hand — mit Bild und eigenem CTA | Bisher letzter Listenpunkt von 13; jetzt Angebot Nr. 1 |
| 3 | **Leistungen** (gruppiert, typografisch nummeriert 01/02/03 — keine Icons) | **Verlegearbeiten:** Wand- & Bodenfliesen, Naturstein, edle Materialien, elastische Fugen · **Sanierung & Ausbau:** Trockenausbau, Abdichtung, Reparaturen · **Technik & Service:** elektrische Fußbodenheizung, Materialanlieferung. Drei ungleich gewichtete Blöcke im Verband-Versatz, nicht drei identische Karten | Ersetzt die flache 13-Punkte-Liste; alle Punkte bleiben erhalten, nur geordnet |
| 4 | **Ablauf** („So läuft Ihr Projekt") | 4 Schritte aus den vorhandenen Service-Punkten gebaut: Besichtigung & Beratung vor Ort → individuelle Planung → Ausführung & Überwachung → Übergabe. Als nummerierte Zeile, nicht als Icon-Grid | Neu — verwertet die schwachen Listenpunkte (Besichtigung, Planung, Überwachung) als Vertrauens-Erzählung |
| 5 | **Über den Betrieb / Vertrauen** | Jahre am Markt **[Platzhalter — vom Kunden]**, Meisterbetrieb **[nur falls zutreffend — klären]**, Einzugsgebiet Köln + Umgebung (konkrete Nennung, gut für Local SEO), Inhaber-Foto **[Platzhalter]** | Neu — bisher null Vertrauenselemente |
| 6 | **Referenzen** (Vorher/Nachher-Optik) | Versetzte Bildkacheln im Fugen-Raster, Layout für Vorher/Nachher-Paare vorbereitet. Startet mit den 4 Motiven aus `collage.jpg` als **markierte Platzhalter** (nur 600×420px — Originale vom Kunden nötig) | Neu — ersetzt die Polaroid-Collage |
| 7 | **Kontakt** | Adresse, `tel:`- und `mailto:`-Links, Einzugsgebiet, kompaktes Anfrage-Element. Dunkle Fläche (Anthrazit bzw. Tiefblau) als visueller Schlusspunkt | Aufgewertet — bisher reiner Text-Footer |
| 8 | **Footer** | Impressum, Datenschutz, © | Übernommen, ohne „Stolz präsentiert von WordPress" |

### Strukturelle Änderungen — Begründung
1. **CTA-Kette von oben bis unten:** Header-Telefon → Hero-Buttons → Section-CTAs → Kontakt. Bisher gab es exakt null Handlungsaufforderungen.
2. **Komplettsanierung nach vorn:** höchster Auftragswert, größte Differenzierung („inkl. Raumgestaltung" = Planungskompetenz, nicht nur Ausführung) — gehört nicht ans Listenende.
3. **Vertrauen als eigene Ebene:** Jahre/Meister/Region/Referenzen sind bei einem Handwerksbetrieb das eigentliche Verkaufsargument; die Seite erzählt sie in drei Sections (Ablauf, Über uns, Referenzen) statt gar nicht.
4. **Onepager bleibt Onepager:** Der Informationsumfang rechtfertigt keine Unterseiten-Navigation; eine gut strukturierte lange Seite mit Ankern konvertiert hier besser und bleibt wartbar.

## Offene Punkte für den Kunden (fließen in Phase 3 als markierte Platzhalter ein)
- Logo: überarbeiten oder bestehendes Mosaik behalten? (steuert Farbvariante A vs. B)
- Meisterbetrieb ja/nein, Gründungsjahr / Jahre am Markt
- Referenzfotos in Originalauflösung (Vorher/Nachher-Paare, wenn vorhanden)
- Inhaber-/Teamfoto
- Genaues Einzugsgebiet (nur Köln? Umland bis wohin?)
- Öffnungs-/Erreichbarkeitszeiten
