const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.js')).map(f => path.join(dir, f));
}

const roots = [
  path.join(__dirname, '..', 'models'),
  path.join(__dirname, '..', 'models-website'),
  path.join(__dirname, '..', 'src', 'models')
];

const map = {};

for (const r of roots) {
  const files = listFiles(r);
  for (const f of files) {
    const base = path.basename(f, '.js').toLowerCase();
    map[base] = map[base] || new Set();
    map[base].add(path.relative(process.cwd(), f));
  }
}

const duplicates = Object.entries(map).filter(([, set]) => set.size > 1);

if (duplicates.length === 0) {
  console.log('No duplicate model basenames found across model folders.');
  process.exit(0);
}

console.log('Duplicate model basenames and their locations:');
for (const [name, set] of duplicates) {
  console.log(`- ${name}`);
  for (const p of [...set]) console.log(`    - ${p}`);
}

process.exit(0);
