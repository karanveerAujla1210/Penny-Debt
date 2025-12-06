const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function clickByText(page, text) {
  // Use a DOM-based find-and-click to avoid depending on $x which may vary
  // across Puppeteer builds. This clicks the first link/button-like
  // element whose visible text contains the provided text.
  const clicked = await page.evaluate((txt) => {
    function visibleText(el) {
      return el && el.innerText ? el.innerText.trim() : '';
    }
    const candidates = Array.from(document.querySelectorAll('a,button,[role="button"],input[type=button],input[type=submit]'));
    for (const el of candidates) {
      if (visibleText(el).toLowerCase().includes(txt.toLowerCase())) {
        try { el.click(); return true; } catch (e) { }
      }
    }
    // fallback: search any element
    const all = Array.from(document.querySelectorAll('*'));
    for (const el of all) {
      if (visibleText(el).toLowerCase().includes(txt.toLowerCase())) {
        try { el.click(); return true; } catch (e) { }
      }
    }
    return false;
  }, text);
  return clicked;
}

async function run() {
  const results = [];
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  let page = await browser.newPage();

  // Helper to recreate page if it's closed (some environments close pages)
  async function ensurePageOpen() {
    if (page.isClosed && page.isClosed()) {
      page = await browser.newPage();
      await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
      await page.setUserAgent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1'
      );
      page.on('console', msg => {
        try { consoles.push({ type: msg.type(), text: msg.text() }); } catch (e) { consoles.push({ type: 'log', text: String(msg) }); }
      });
    }
  }

  // Set a mobile viewport and user agent (avoids older DeviceDescriptors API)
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.setUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1'
  );

  const consoles = [];
  page.on('console', msg => {
    try { consoles.push({ type: msg.type(), text: msg.text() }); } catch (e) { consoles.push({ type: 'log', text: String(msg) }); }
  });

  const base = 'http://localhost:5175/';
  console.log('Opening', base);
  await page.goto(base, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});

  const timestamp = Date.now();
  const rootShot = path.join(OUT, `home-${timestamp}.png`);
  try {
    await ensurePageOpen();
    await page.goto(base, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await page.screenshot({ path: rootShot, fullPage: true });
    results.push({ step: 'home', url: page.url(), screenshot: rootShot });
  } catch (err) {
    console.warn('Could not capture home screenshot:', err && err.message);
    results.push({ step: 'home', url: base, screenshot: null, error: String(err) });
  }

  const ctas = ['Check Eligibility', 'How it works', 'Learn more', 'Learn more ›', 'Learn More'];

  for (const label of ctas) {
    console.log('Trying CTA:', label);
    const beforeUrl = page.url ? page.url() : base;
    await ensurePageOpen();
    const clicked = await clickByText(page, label);
    if (!clicked) {
      console.log('CTA not found on page for label:', label);
      results.push({ step: label, found: false, url: beforeUrl });
      continue;
    }
    try {
      await Promise.race([
        page.waitForNavigation({ timeout: 4000, waitUntil: 'networkidle2' }),
        new Promise(r => setTimeout(r, 1200))
      ]);
    } catch (e) {}
    const shot = path.join(OUT, `${label.replace(/\s+/g, '_')}-${Date.now()}.png`);
    try {
      await ensurePageOpen();
      await page.screenshot({ path: shot, fullPage: true }).catch(() => {});
      results.push({ step: label, found: true, url: page.url(), screenshot: shot });
    } catch (err) {
      results.push({ step: label, found: true, url: page.url ? page.url() : null, screenshot: null, error: String(err) });
    }
    if (page.url() !== base) { await page.goto(base, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {}); }
  }

  try {
    await ensurePageOpen();
    await page.goto(base + 'login', { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
    const shotLogin = path.join(OUT, `login-${Date.now()}.png`);
    try { await page.screenshot({ path: shotLogin, fullPage: true }).catch(() => {}); } catch (e) {}
    const clicked = await clickByText(page, 'Check Eligibility');
    if (clicked) {
      try {
        await Promise.race([
          page.waitForNavigation({ timeout: 4000, waitUntil: 'networkidle2' }),
          new Promise(r => setTimeout(r, 1200))
        ]);
      } catch (e) {}
      const shot2 = path.join(OUT, `login-cta-${Date.now()}.png`);
      try { await ensurePageOpen(); await page.screenshot({ path: shot2, fullPage: true }).catch(() => {}); } catch (e) {}
      results.push({ step: 'login-cta', clicked: true, url: page.url ? page.url() : null, screenshot: shot2 });
    } else {
      results.push({ step: 'login-cta', clicked: false, url: page.url() });
    }
  } catch (e) { console.error('Error testing login CTA', e && e.message); }

  await browser.close();

  const outFile = path.join(OUT, `headless-results-${timestamp}.json`);
  fs.writeFileSync(outFile, JSON.stringify({ results, consoles }, null, 2));
  console.log('Results saved to', outFile);
  consoles.forEach(c => console.log(`[console:${c.type}] ${c.text}`));
  console.log('Screenshots:', results.map(r => r.screenshot).filter(Boolean));
  process.exit(0);
}

run().catch(err => { console.error('Headless check failed:', err); process.exit(2); });
