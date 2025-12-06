const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function clickByText(page, text) {
  const escaped = text.replace(/"/g, '\\"');
  // Try XPath to find clickable elements containing the text
  const xpaths = [
    `//a[contains(normalize-space(string(.)), "${escaped}")]`,
    `//button[contains(normalize-space(string(.)), "${escaped}")]`,
    `//*[contains(normalize-space(string(.)), "${escaped}")]`
  ];

  for (const xp of xpaths) {
    const els = await page.$x(xp);
    if (els && els.length) {
      for (const el of els) {
        try {
          await el.scrollIntoViewIfNeeded?.();
        } catch (e) {}
        try {
          await el.click({ delay: 50 });
          return true;
        } catch (err) {
          // continue trying other matches
        }
      }
    }
  }
  return false;
}

async function run() {
  const results = [];
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Emulate a common mobile device
  const iPhone = puppeteer.devices['iPhone X'] || { viewport: { width: 375, height: 812, isMobile: true } };
  await page.emulate(iPhone);

  const consoles = [];
  page.on('console', msg => {
    try {
      consoles.push({ type: msg.type(), text: msg.text() });
    } catch (e) {
      consoles.push({ type: 'log', text: String(msg) });
    }
  });

  const base = 'http://localhost:5175/';
  console.log('Opening', base);
  await page.goto(base, { waitUntil: 'networkidle2', timeout: 30000 }).catch(e => {});

  const timestamp = Date.now();
  const rootShot = path.join(OUT, `home-${timestamp}.png`);
  await page.screenshot({ path: rootShot, fullPage: true });
  results.push({ step: 'home', url: page.url(), screenshot: rootShot });

  const ctas = ['Check Eligibility', 'How it works', 'Learn more', 'Learn more ›', 'Learn More'];

  for (const label of ctas) {
    console.log('Trying CTA:', label);
    const beforeUrl = page.url();
    const clicked = await clickByText(page, label);
    if (!clicked) {
      console.log('CTA not found on page for label:', label);
      results.push({ step: label, found: false, url: beforeUrl });
      continue;
    }

    // Wait for a navigation or a short delay to let SPA routing happen
    try {
      await Promise.race([
        page.waitForNavigation({ timeout: 4000, waitUntil: 'networkidle2' }),
        new Promise(r => setTimeout(r, 1200))
      ]);
    } catch (e) {}

    const shot = path.join(OUT, `${label.replace(/\s+/g, '_')}-${Date.now()}.png`);
    await page.screenshot({ path: shot, fullPage: true }).catch(() => {});
    results.push({ step: label, found: true, url: page.url(), screenshot: shot });

    // Navigate back to home for the next CTA if routing changed
    if (page.url() !== base) {
      await page.goto(base, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
    }
  }

  // Also try clicking the primary customer login CTA (which was Check Eligibility on the login page)
  try {
    // navigate to /login then click primary button
    await page.goto(base + 'login', { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
    const shotLogin = path.join(OUT, `login-${Date.now()}.png`);
    await page.screenshot({ path: shotLogin, fullPage: true }).catch(() => {});
    const clicked = await clickByText(page, 'Check Eligibility');
    if (clicked) {
      try {
        await Promise.race([
          page.waitForNavigation({ timeout: 4000, waitUntil: 'networkidle2' }),
          new Promise(r => setTimeout(r, 1200))
        ]);
      } catch (e) {}
      const shot2 = path.join(OUT, `login-cta-${Date.now()}.png`);
      await page.screenshot({ path: shot2, fullPage: true }).catch(() => {});
      results.push({ step: 'login-cta', clicked: true, url: page.url(), screenshot: shot2 });
    } else {
      results.push({ step: 'login-cta', clicked: false, url: page.url() });
    }
  } catch (e) {
    console.error('Error testing login CTA', e && e.message);
  }

  await browser.close();

  const outFile = path.join(OUT, `headless-results-${timestamp}.json`);
  fs.writeFileSync(outFile, JSON.stringify({ results, consoles }, null, 2));
  console.log('Results saved to', outFile);
  consoles.forEach(c => console.log(`[console:${c.type}] ${c.text}`));
  console.log('Screenshots:', results.map(r => r.screenshot).filter(Boolean));
  process.exit(0);
}

run().catch(err => {
  console.error('Headless check failed:', err);
  process.exit(2);
});
