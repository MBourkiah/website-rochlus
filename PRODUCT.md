# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Private Haus- und Wohnungseigentümer in Köln und Umgebung, die ein Bad sanieren oder Fliesen- bzw. Natursteinarbeiten ausführen lassen wollen. Sie entscheiden selbst, vergleichen mehrere Betriebe, oft am Smartphone, und wollen schnell wissen: Macht der Betrieb das, was ich brauche? Ist er seriös? Wie erreiche ich ihn? Ihr Ziel ist ein Anruf oder eine kurze Anfrage mit anschließender Besichtigung vor Ort.

Die Website wird von MB Solutions (Agentur) für den Kunden Fliesenfachbetrieb Rochlus GmbH entwickelt; Texte, Fakten und Logo stehen unter Kundenfreigabe (siehe `konzept/kunden-checkliste.md`).

## Product Purpose

Onepager-Website der Fliesenfachbetrieb Rochlus GmbH, die die ungewartete WordPress-5.5-Seite von 2020 ablöst. Sie soll aus Besuchern Anfragen machen: Die bisherige Seite hatte keine einzige Handlungsaufforderung, keine Vertrauenselemente und eine flache 13-Punkte-Leistungsliste. Erfolg heißt: mehr Anrufe und Anfragen zu hochwertigen Aufträgen, allen voran Bad-/Komplettsanierungen, sowie gute lokale Auffindbarkeit in Köln.

## Positioning

Alle vier Punkte gelten gemeinsam, keiner allein:

- **Komplettsanierung aus einer Hand:** Bad-/Komplettsanierung inklusive Raumgestaltung, vom ersten Aufmaß bis zur letzten Fuge. Das ist Planungs- und nicht nur Ausführungskompetenz und der höchste Auftragswert.
- **Direkter Fachbetrieb:** inhabergeführte GmbH, Marc Rochlus als direkter Ansprechpartner. Kein Vermittlungsportal, keine wechselnden Kolonnen.
- **Hochwertige Materialien:** Naturstein und Verarbeitung edler Materialien als Spezialkompetenz.
- **Lokal verankert:** Sitz Kranzbinderweg 15, 51067 Köln; Einzugsgebiet Köln und Umgebung.

## Operating Context

- Besucher kommen über lokale Suche (Google, Maps) oder Empfehlung, häufig mobil.
- Der Weg zum Auftrag: Anruf oder E-Mail → Besichtigung und Beratung vor Ort (unverbindlich) → individuelle Planung → Ausführung und Überwachung → Übergabe.
- Das Telefon ist der Hauptkanal eines Handwerksbetriebs; Festnetz 0221 968 75 75, Mobil 0172 277 06 74, E-Mail mrochlus@web.de.

## Capabilities and Constraints

- **Stack (bestehend):** Astro 7 + Tailwind CSS 4 in `website/`; Fonts self-hosted über Fontsource. Statischer Onepager mit Ankernavigation plus Unterseiten Impressum und Datenschutz.
- **Leistungen (alle 13 aus dem Bestand bleiben erhalten):** Komplettsanierung inkl. Raumgestaltung; Wand- und Bodenfliesen; Naturstein; Verarbeitung edler Materialien; elastische Fugen; Trockenausbau; Abdichtungsarbeiten; kleine Reparaturarbeiten; elektrische Fußbodenheizungen; Materialanlieferung; Besichtigung und Beratung vor Ort; individuelle Planung; Überwachung der Leistungen.
- **Keine Cookies, kein Tracking:** keine Analyse-Tools, keine Google-Dienste, keine extern geladenen Fonts oder Skripte. Die Datenschutzerklärung ist darauf verschlankt; jede neue Drittanbieter-Einbindung bricht diese Zusage.
- **Telefon als primäre Conversion:** `tel:`-Links durchgängig (Header, Hero, Section-CTAs, Kontakt, mobile Call-Bar). Kein Kontaktformular mit Backend; schriftliche Anfragen laufen über `mailto:`.
- **Offen (Kunde klärt):** Meisterbetrieb ja/nein, Gründungsjahr, genaues Einzugsgebiet, Erreichbarkeitszeiten, USt-IdNr. fürs Impressum, Hosting/Domain-Umzug.

## Brand Commitments

- **Name:** Fliesenfachbetrieb Rochlus GmbH; Kurzform „Rochlus“.
- **Logo:** Das neue Logopaket (Wortmarke „Rochlus“ + Fugen-Grid-/Verband-Icon, `website/public/logo/`) ist verbindliche Arbeitsgrundlage und löst das alte Mosaik-Logo ab. Die finale Freigabe durch den Kunden steht noch aus.
- **Ansprache:** Siezen, direkt, handwerklich-ehrlich, ohne Werbesprech; kurze Sätze, konkrete Aussagen („Wer anruft, spricht direkt mit dem Betrieb“).

## Evidence on Hand

- **Belegte Fakten:** Firmenname, Rechtsform GmbH, Inhaber/Geschäftsführer Marc Rochlus, Adresse, Telefonnummern, E-Mail, die 13 Leistungen (alle aus der Bestandsseite, `analyse/daten/ist-analyse.json`, `analyse/daten/rechtstexte.json`).
- **Fotos:** nur vier Archivmotive aus `analyse/daten/collage.jpg` (600×420 px) als markierte Platzhalter in `website/public/bilder/`. Originalfotos, Vorher/Nachher-Paare und ein Inhaber-/Teamfoto kommen vom Kunden.
- **Fehlt und darf nicht erfunden werden:** Kundenstimmen, Bewertungen, Projektnamen, Referenzkunden, Zertifikate, Meistertitel, Gründungsjahr, Jahre am Markt, Zahlen/Statistiken, Preise. Bis zur Bestätigung bleiben sie als sichtbar gekennzeichnete Platzhalter (`PlatzhalterBadge`) stehen.

## Product Principles

1. **Nichts Unbelegtes:** Auf der Seite steht nur, was der Betrieb bestätigt hat. Lücken sind ehrlich markiert, nicht kaschiert.
2. **Der Anruf ist das Ziel:** Jede Section führt zum Telefon oder zur Anfrage; die Nummer ist nie mehr als einen Blick entfernt.
3. **Das Hochwertige nach vorn:** Komplettsanierung und edle Materialien führen, Kleinaufträge folgen; alle Leistungen bleiben auffindbar.
4. **Ein Betrieb, ein Gesicht:** Vertrauen entsteht über Person, Ort und Handwerk, nicht über Superlative.
5. **Datenschutz als Zusage:** Die Seite bleibt ohne Tracking und ohne Drittanbieter.

## Accessibility & Inclusion

Kein produktspezifischer Standard vereinbart. Die Zielgruppe umfasst ältere Eigentümer; deshalb gut lesbare Schriftgrößen, ausreichende Kontraste und große Touch-Ziele für Telefon-Links. Barrierefreiheit nach WCAG 2.2 AA als Arbeitsbasis.
