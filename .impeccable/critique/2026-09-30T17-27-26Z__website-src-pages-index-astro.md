---
target: Startseite
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro"
target_fingerprint: "sha256:3f72a9ca980de2664b4dd60380d87870cbbda33f2aa1aeadd5a4a65fd4b6b34b"
target_path: /Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro
timestamp: 2026-09-30T17-27-26Z
slug: website-src-pages-index-astro
closed: true
---
Method: dual-agent (A: Design-Review · B: Detektor/Browser)

## Design Health Score: 22/32 (Good, ~69 %; H7, H10 n/a)
| # | Heuristik | Score | Kernproblem |
|---|---|---|---|
| 1 | Systemstatus | 3 | Scrollspy + Rot-Wechsel funktionieren; Call-Bar fährt am Kontakt weg und im Footer wieder ein |
| 2 | Echte Welt | 3 | Schilder/Klingel stark; nackte „15“ liest sich wie Statistik |
| 3 | Kontrolle | 3 | Mobilmenü schließt nicht bei Außen-Tap/Esc |
| 4 | Konsistenz | 2 | 13 statische Leistungsschilder sehen aus wie drückbare Schilder |
| 5 | Fehlervermeidung | 3 | Festnetz/Mobil ohne Hinweis, wann welche |
| 6 | Wiedererkennen | 3 | Erreichbarkeitszeiten fehlen |
| 7 | Flexibilität | n/a | Persuade-Onepager |
| 8 | Ästhetik/Minimal | 3 | Viele gleiche Schildkästen, 8 Platzhalter-Etiketten |
| 9 | Fehlerbehebung | 2 | Kein Rückfall bei tel:/mailto: ohne App |
| 10 | Hilfe | n/a | Landingpage |

## Priority Issues
1. [P0] Platzhalter ballen sich dort, wo Vertrauen entsteht (Betrieb, Arbeiten) → Review- vs. Launch-Build trennen, leere Slots im Launch ausblenden. /impeccable harden
2. [P1] Statische Leistungsschilder wirken klickbar → flacher (ohne Wandschatten), Tiefe nur für Drückbares. /impeccable clarify
3. [P1] Fokusring am roten Anruf-Schild unsichtbar (weiß auf Putz, 1.2:1) → Outline nach innen oder dunkel. /impeccable audit
4. [P2] Keine Beruhigung/Erreichbarkeit am Anruf → nach Kundenbestätigung Zeiten + „unverbindlich“; bis dahin Mobil als Rückfall. /impeccable clarify
5. [P2] Inline-Anruflinks 29 px hoch, fehlendes Leerzeichen vor Nummer; Rhythmus nach dem Hero monoton. /impeccable adapt, /impeccable layout

## Detektor
CLI 0 Funde. Browser 7 (Desktop)/12 (Mobil): buried-raster (Putzstruktur, gewollt), gpt-thin-border-wide-shadow (Referenzen-Rahmen), nested-cards ×4 (Schild-Sprache), cream-palette (Putz #ebe9e3), repeating-stripes (Schichtschnitt, gewollt), text-occlusion ×4 (geschlossenes Mobilmenü, falsch-positiv). Kontrast 0 Fehler, Überschriften korrekt, Fokus sichtbar außer rotem Schild.

## Personas
Jordan: „15“ unklar, Festnetz vs. Mobil. Riley: tippt Leistungsschilder, Menü schließt nicht per Esc. Casey: 29-px-Links, „Schreiben“ 8 px neben Anrufen. Frau K. (68): leerer Fotorahmen, „Meister-Qualifikation wird ergänzt“ säht Zweifel, keine Zeiten.
