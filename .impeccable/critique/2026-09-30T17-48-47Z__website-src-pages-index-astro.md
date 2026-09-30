---
target: Startseite
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro"
target_fingerprint: "sha256:304d417cbe40fdb52020b6b27145be9569c7d725eb665243c7d2f97a18f88fd5"
target_path: /Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro
timestamp: 2026-09-30T17-48-47Z
slug: website-src-pages-index-astro
---
Method: dual-agent (A: Design-Review · B: Detektor/Browser)

## Design Health Score: 23/32 (Good, ~72 %; H7, H10 n/a wie im ersten Lauf)
| # | Heuristik | Score | Kernproblem |
|---|---|---|---|
| 1 | Systemstatus | 3 | tel: am Desktop ohne Rückmeldung |
| 2 | Echte Welt | 3 | große „15“ liest sich wie Kennzahl |
| 3 | Kontrolle | 2 | Mobilmenü öffnet außerhalb des Bildschirms |
| 4 | Konsistenz | 2 | Leistungsschilder sehen wie Bedienelemente aus; Kobalt-Schild wie „ausgewählt“ |
| 5 | Fehlervermeidung | 3 | keine Zeiten |
| 6 | Wiedererkennen | 4 | Nummer immer einen Blick entfernt |
| 7 | Flexibilität | n/a | Onepager |
| 8 | Ästhetik | 3 | Schilderwand mobil ~1.560 px |
| 9 | Fehlerbehebung | 3 | Mobil-Rückfall gut, keine Zeiten |
| 10 | Hilfe | n/a | Landingpage |

## Priority Issues
1. [P0] Mobilmenü öffnet im Fluss statt als Overlay: .schild {position:relative} (ungelayert) schlägt Tailwinds absolute; bei 390 px scrollWidth 538, Menü-Schalter aus dem Bild. Fix: .schild-Regeln in @layer components. /impeccable harden
2. [P1] Leistungsschilder lesen sich als Bedienelemente, mobil 13 gestapelte Kacheln. Fix: reine Etiketten ohne eingelegten Rand, mobil kompakt; Kobalt-Betonung auf Gruppenebene. /impeccable distill
3. [P1] Keine Ergebnisbilder; Launch-Stand hat gar kein Foto. Fix: Fotoshooting (Vorher/Nachher, Porträt) als Top-Punkt, Launch-Zustand mit Porträt und Badfoto vorbereiten. /impeccable shape
4. [P2] „15“ (7.5rem) größer als die Telefonnummer, Missverständnis „15 Jahre“. Fix: ~4.5rem, eng mit Straße. /impeccable layout
5. [P2] Umfang und Verbindlichkeit unklar: H1 „ganze Bäder“ vs. Text „rund um die Fliese“; „unverbindlich“ und Zeiten fehlen (Kundenbestätigung). /impeccable clarify

## Detektor
CLI 0. Browser 6 (Desktop) / 11 (Mobil): buried-raster, cream-palette, repeating-stripes (Putz-Konzept, gewollt), gpt-thin-border-wide-shadow (Klingelring), nested-cards ×3 (Schichtschnitt-Figur, 2 Review-Platzhalter), text-occlusion ×5 mobil (zeigt auf den echten Menü-Bug). Kontrast 0 Fehler (247 Proben), Fokus überall sichtbar, keine Konsolenfehler.
