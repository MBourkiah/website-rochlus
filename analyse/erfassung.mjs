/**
 * Ist-Analyse: fliesen-rochlus.de
 * Erfasst Screenshots (3 Breakpoints), Textinhalte, Bild-Inventar,
 * Farben/Fonts aus dem gerenderten CSS, Performance-Basiswerte und Section-Struktur.
 *
 * Aufruf: node erfassung.mjs
 * Output: screenshots/*.png, daten/*.json
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const URL = 'https://fliesen-rochlus.de/';
const BREAKPOINTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

const browser = await chromium.launch();

// ---------- 1) Screenshots in drei Breakpoints ----------
for (const bp of BREAKPOINTS) {
  const ctx = await browser.newContext({
    viewport: { width: bp.width, height: bp.height },
    deviceScaleFactor: 2,
    ...(bp.name === 'mobile' ? { isMobile: true, hasTouch: true } : {}),
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  // Cookie-Banner falls vorhanden wegklicken, damit der Screenshot sauber ist
  for (const sel of ['#cookie-accept', '.cookie-accept', '[id*="cookie"] button', 'button:has-text("Akzeptieren")', 'button:has-text("Alle akzeptieren")', 'a:has-text("Akzeptieren")']) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 500 })) { await el.click(); break; }
    } catch { /* kein Banner */ }
  }
  // Lazy-Loading triggern: einmal komplett durchscrollen
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += 600;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 120);
        else { window.scrollTo(0, 0); setTimeout(resolve, 800); }
      };
      step();
    });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `screenshots/${bp.name}-${bp.width}px.png`, fullPage: true });
  console.log(`Screenshot: ${bp.name} (${bp.width}px)`);
  await ctx.close();
}

// ---------- 2) Inhalt, Bilder, Farben, Fonts, Struktur (Desktop-Kontext) ----------
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

// Netzwerk-Requests für Performance/Assets mitschneiden
const requests = [];
page.on('response', async (res) => {
  try {
    const req = res.request();
    const headers = res.headers();
    requests.push({
      url: res.url(),
      status: res.status(),
      type: req.resourceType(),
      contentType: headers['content-type'] || '',
      size: Number(headers['content-length'] || 0),
    });
  } catch { /* ignore */ }
});

const t0 = Date.now();
await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
const loadMs = Date.now() - t0;
await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});

// Performance-Metriken aus dem Browser
const perf = await page.evaluate(() => {
  const nav = performance.getEntriesByType('navigation')[0];
  const paint = performance.getEntriesByType('paint');
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  return {
    domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
    loadEvent: nav ? Math.round(nav.loadEventEnd) : null,
    ttfb: nav ? Math.round(nav.responseStart) : null,
    firstContentfulPaint: Math.round(paint.find((p) => p.name === 'first-contentful-paint')?.startTime || 0),
    transferSizeKB: nav ? Math.round(nav.transferSize / 1024) : null,
    resourceCount: performance.getEntriesByType('resource').length,
  };
});

// Sichtbaren Text strukturiert extrahieren
const content = await page.evaluate(() => {
  const visible = (el) => {
    const s = getComputedStyle(el);
    return s.display !== 'none' && s.visibility !== 'hidden' && el.offsetParent !== null;
  };
  const txt = (el) => el.innerText.replace(/\s+/g, ' ').trim();

  const headlines = [];
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((h) => {
    if (visible(h) && txt(h)) headlines.push({ tag: h.tagName.toLowerCase(), text: txt(h) });
  });

  const paragraphs = [];
  document.querySelectorAll('p').forEach((p) => {
    if (visible(p) && txt(p).length > 2) paragraphs.push(txt(p));
  });

  const lists = [];
  document.querySelectorAll('ul, ol').forEach((l) => {
    if (!visible(l)) return;
    const items = [...l.querySelectorAll(':scope > li')].map(txt).filter(Boolean);
    // Navigations-Listen (nur Links) getrennt behandeln
    const isNav = l.closest('nav, header, footer') !== null;
    if (items.length) lists.push({ isNav, items });
  });

  const ctas = [];
  document.querySelectorAll('a, button').forEach((a) => {
    if (!visible(a)) return;
    const t = txt(a);
    if (!t || t.length > 80) return;
    const s = getComputedStyle(a);
    const looksLikeButton =
      a.tagName === 'BUTTON' ||
      s.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
      (a.className && /btn|button|cta/i.test(a.className));
    ctas.push({ text: t, href: a.getAttribute('href') || null, looksLikeButton });
  });

  // Kontaktdaten aus Links + Volltext
  const bodyText = document.body.innerText;
  const tels = [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href'));
  const mails = [...document.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute('href'));
  const phoneMatches = bodyText.match(/(\+49[\d\s\/\-()]{6,}|0\d{2,5}[\s\/\-]?\d{3,})/g) || [];
  const mailMatches = bodyText.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) || [];
  const addressMatch = bodyText.match(/([A-ZÄÖÜ][\wäöüß.\- ]+(?:straße|strasse|str\.|weg|platz|allee|ring|gasse)\s*\d+[a-z]?[,\s]+\d{5}\s+[A-ZÄÖÜ][\wäöüß\- ]+)/gi) || [];

  return {
    title: document.title,
    metaDescription: document.querySelector('meta[name="description"]')?.content || null,
    lang: document.documentElement.lang || null,
    headlines,
    paragraphs,
    lists,
    ctas,
    kontakt: {
      telLinks: [...new Set(tels)],
      mailLinks: [...new Set(mails)],
      telefonImText: [...new Set(phoneMatches.map((m) => m.trim()))],
      mailsImText: [...new Set(mailMatches)],
      adressen: [...new Set(addressMatch.map((m) => m.trim()))],
    },
  };
});

// Bild-Inventar: <img>, <picture>-Sources und CSS-Hintergrundbilder
const images = await page.evaluate(() => {
  const sectionLabel = (el) => {
    const sec = el.closest('section, header, footer, main, [class*="section"]');
    if (!sec) return 'unbekannt';
    const h = sec.querySelector('h1, h2, h3');
    return (
      sec.id ||
      (h ? h.innerText.replace(/\s+/g, ' ').trim().slice(0, 60) : sec.className?.toString().slice(0, 60)) ||
      sec.tagName.toLowerCase()
    );
  };
  const result = [];
  document.querySelectorAll('img').forEach((img) => {
    result.push({
      art: 'img',
      src: img.currentSrc || img.src,
      alt: img.alt || null,
      natuerlicheGroesse: `${img.naturalWidth}x${img.naturalHeight}`,
      dargestellteGroesse: `${Math.round(img.getBoundingClientRect().width)}x${Math.round(img.getBoundingClientRect().height)}`,
      loading: img.loading || 'eager',
      einsatzort: sectionLabel(img),
    });
  });
  document.querySelectorAll('*').forEach((el) => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none' && bg.includes('url(') && !bg.includes('gradient')) {
      const url = bg.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
      if (url && !url.startsWith('data:')) {
        const r = el.getBoundingClientRect();
        result.push({
          art: 'css-background',
          src: url,
          alt: null,
          natuerlicheGroesse: null,
          dargestellteGroesse: `${Math.round(r.width)}x${Math.round(r.height)}`,
          loading: null,
          einsatzort: sectionLabel(el),
        });
      }
    }
  });
  // Dedupe nach src+art
  const seen = new Set();
  return result.filter((r) => {
    const k = r.art + '|' + r.src;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
});

// Farben & Fonts aus dem gerenderten CSS (nicht geraten)
const design = await page.evaluate(() => {
  const colorCount = new Map();
  const bgCount = new Map();
  const fontCount = new Map();
  const add = (map, key, weight = 1) => {
    if (!key) return;
    map.set(key, (map.get(key) || 0) + weight);
  };
  document.querySelectorAll('body *').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const s = getComputedStyle(el);
    const area = Math.min(r.width * r.height, 500000); // Fläche als Gewicht, gedeckelt
    if (el.innerText && el.innerText.trim()) add(colorCount, s.color, 1);
    if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') add(bgCount, s.backgroundColor, area);
    add(fontCount, s.fontFamily, 1);
  });
  const top = (map, n) =>
    [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => ({ wert: k, gewicht: Math.round(v) }));

  // Headline- vs. Body-Font unterscheiden
  const hFonts = new Set();
  document.querySelectorAll('h1,h2,h3').forEach((h) => hFonts.add(getComputedStyle(h).fontFamily));
  const bodyFont = getComputedStyle(document.body).fontFamily;

  // Akzentfarbe: Buttons/Links
  const accents = new Set();
  document.querySelectorAll('a, button, [class*="btn"], [class*="button"]').forEach((el) => {
    const s = getComputedStyle(el);
    if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') accents.add(s.backgroundColor);
    accents.add(s.color);
  });

  return {
    textfarben: top(colorCount, 8),
    hintergrundfarben: top(bgCount, 8),
    schriftfamilien: top(fontCount, 6),
    headlineFonts: [...hFonts],
    bodyFont,
    akzentKandidaten: [...accents].slice(0, 15),
  };
});

// Geladene Font-Dateien aus dem Netzwerk-Log
const fontFiles = requests
  .filter((r) => r.type === 'font' || /\.(woff2?|ttf|otf|eot)(\?|$)/i.test(r.url))
  .map((r) => r.url);

// Section-Struktur in DOM-Reihenfolge
const structure = await page.evaluate(() => {
  const nodes = document.querySelectorAll('body > *, main > *, body > div > section, section');
  const seen = new Set();
  const out = [];
  document.querySelectorAll('header, nav, section, footer, main > div, body > div').forEach((el) => {
    if (seen.has(el)) return;
    // nur oberste Ebene: keine Sections innerhalb bereits erfasster Sections
    if ([...seen].some((p) => p.contains(el))) return;
    const r = el.getBoundingClientRect();
    const h = el.querySelector('h1, h2, h3');
    const height = Math.round(el.scrollHeight);
    if (height < 40) return;
    seen.add(el);
    out.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      klassen: (el.className?.toString() || '').slice(0, 80) || null,
      ueberschrift: h ? h.innerText.replace(/\s+/g, ' ').trim().slice(0, 80) : null,
      hoehePx: height,
    });
  });
  return out;
});

// Technologie-Hinweise (Generator, CMS)
const tech = await page.evaluate(() => {
  const gen = document.querySelector('meta[name="generator"]')?.content || null;
  const html = document.documentElement.outerHTML;
  const hints = [];
  if (/wp-content|wp-includes/i.test(html)) hints.push('WordPress');
  if (/elementor/i.test(html)) hints.push('Elementor');
  if (/jimdo/i.test(html)) hints.push('Jimdo');
  if (/wix\.com|wixstatic/i.test(html)) hints.push('Wix');
  if (/squarespace/i.test(html)) hints.push('Squarespace');
  if (/webflow/i.test(html)) hints.push('Webflow');
  if (/bootstrap/i.test(html)) hints.push('Bootstrap');
  if (/jquery/i.test(html)) hints.push('jQuery');
  return { generator: gen, hinweise: hints };
});

// Gesamtgewicht der Seite aus dem Netzwerk-Log
const totalKB = Math.round(requests.reduce((s, r) => s + (r.size || 0), 0) / 1024);
const byType = {};
for (const r of requests) {
  byType[r.type] = byType[r.type] || { anzahl: 0, kb: 0 };
  byType[r.type].anzahl++;
  byType[r.type].kb += Math.round((r.size || 0) / 1024);
}

const report = {
  erfasstAm: new Date().toISOString(),
  url: URL,
  tech,
  performance: { ...perf, wallClockLoadMs: loadMs, gesamtTransferKBLautHeadern: totalKB, requestsNachTyp: byType },
  design: { ...design, geladeneFontDateien: fontFiles },
  struktur: structure,
  inhalt: content,
  bilder: images,
};

writeFileSync('daten/ist-analyse.json', JSON.stringify(report, null, 2));
console.log('Fertig: daten/ist-analyse.json');
console.log(`Load: ${loadMs}ms, FCP: ${perf.firstContentfulPaint}ms, Requests: ${perf.resourceCount}`);

await browser.close();
