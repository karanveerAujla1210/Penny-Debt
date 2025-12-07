const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) {
      // skip node_modules and .git
      if (d.name === 'node_modules' || d.name === '.git') continue;
      walk(full, cb);
    } else if (d.isFile()) {
      cb(full);
    }
  }
}

function inspectFile(file) {
  if (!file.endsWith('.js') && !file.endsWith('.ts') && !file.endsWith('.json')) return;
  try {
    const txt = fs.readFileSync(file, 'utf8');
    const re = /require\(['\"](.{0,200}?models[\/.][^'\"]*)['\"]\)/g;
    let m;
    const hits = [];
    while ((m = re.exec(txt)) !== null) {
      hits.push(m[1]);
    }
    if (hits.length) {
      console.log('FILE:', file);
      for (const h of hits) console.log('  ->', h);
      console.log('');
    }
  } catch (e) {
    // ignore
  }
}

const root = path.resolve(__dirname, '..', '..');
console.log('Scanning from', root);
walk(root, inspectFile);
console.log('Scan complete.');
