---
target: Startseite (Werkbank)
total_score: 27
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro"
target_fingerprint: "sha256:92feef6b66164c829997f33b8f666ad07d3d95dcba42c376fcc4e06654b3d996"
target_path: /Users/mauricebourkiah/MB-Solutions/Fliesenfachbetrieb Rochlus/Website Rochlus/website/src/pages/index.astro
timestamp: 2026-10-13T17-16-57Z
slug: website-src-pages-index-astro
---
Method: dual-agent (A: Design-Review · B: Detektor/Browser) — Welt „Werkbank“

## Design Health Score: 27/32 (Good, ~84 %; H7 n/a, H10 gewertet = 2 → mit Lauf 1/2 vergleichbar nur grob, andere Welt)
H1 3 · H2 4 · H3 3 · H4 3 · H5 3 · H6 3 · H7 n/a · H8 3 · H9 3 · H10 2

## Priority Issues
1. [P1] Echte Arbeit liegt hinten, Stockbilder sehen aus wie Kundenarbeit (gleiche Zwinge/Rahmen). Fix: Arbeiten direkt nach Hero; Zwinge+Rahmen nur für echte Rochlus-Fotos; Material als kleine ungerahmte Proben. /impeccable layout
2. [P1] Referenzfotos schwächen den Qualitätsanspruch (offene Anschlüsse, rosa Rand, gelbe Kappen, Blitz; keine Fuge erkennbar). Fix: Ausschnitte neu wählen, Detail-Crops (Fuge, Nische, Mosaik), fertige Fotos anfragen. /impeccable polish
3. [P2] 320 px: seitliches Scrollen (scrollWidth 356), Menüknopf halb außerhalb; Kontakt-Anhänger 8 px zu breit. /impeccable adapt
4. [P2] Stempel „ANRUFEN“ 2,8:1 (mit multiply ~4,1:1) und klein; Anhänger als Knopf nicht eindeutig. /impeccable harden
5. [P3] Wiederholte Anruf-Zeilen am Section-Ende; Betrieb ohne Gesicht. /impeccable distill

## Detektor
CLI 0. Browser 4 (Desktop)/5 (Mobil): buried-raster (Putzstruktur, gewollt), cream-palette (Putz, gewollt), nested-cards ×2 (Klemmfoto-Rahmen, Fehlalarm), text-occlusion ×1 (geschlossenes Menü, Fehlalarm). Kontrast sonst ≥4,96:1, Fokus überall sichtbar, keine Fehler, 271 KB Bilder mobil, LCP = Hero-Foto.
