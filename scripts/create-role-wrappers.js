#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch (e) {
    return false;
  }
}

function makeWrapperContent(sharedRelPath, pageName, roleName) {
  const componentName = pageName.replace(/\.jsx?$/i, '');
  return `import React from 'react';\nimport ${componentName} from '${sharedRelPath}';\n\nexport default function ${roleName}${componentName}(props) {\n  return <${componentName} role={\"${roleName}\"} {...props} />;\n}\n`;
}

async function main() {
  const root = process.cwd();
  const pagesRoot = path.join(root, 'apps', 'crm-frontend', 'src', 'pages');
  const sharedDir = path.join(pagesRoot, 'Shared');
  const pagesToWrap = ['Clients.jsx', 'Leads.jsx', 'Reports.jsx', 'Settings.jsx', 'Tasks.jsx'];

  const argv = process.argv.slice(2);
  const apply = argv.includes('--apply') || argv.includes('-a');
  const force = argv.includes('--force') || argv.includes('-f');

  if (!(await exists(pagesRoot))) {
    console.error('Could not find pages root at', pagesRoot);
    process.exit(2);
  }
  if (!(await exists(sharedDir))) {
    console.error('Could not find Shared directory at', sharedDir);
    process.exit(2);
  }

  const sharedFiles = await fs.readdir(sharedDir);
  const available = pagesToWrap.filter(p => sharedFiles.includes(p));
  if (available.length === 0) {
    console.error('No target files found in Shared. Nothing to do.');
    process.exit(0);
  }

  const entries = await fs.readdir(pagesRoot, { withFileTypes: true });
  const excluded = new Set(['Shared', 'Dashboard', 'Auth', 'Customer', 'Employee', '_playground']);

  const actions = [];

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const role = e.name;
    if (excluded.has(role)) continue;
    const roleDir = path.join(pagesRoot, role);
    for (const page of available) {
      const roleFile = path.join(roleDir, page);
      const relShared = path.relative(roleDir, path.join(sharedDir, page)).replace(/\\/g, '/');
      const sharedImport = relShared.startsWith('.') ? relShared : './' + relShared;
      const content = makeWrapperContent(sharedImport, page, role);

      const fileExists = await exists(roleFile);
      const willWrite = apply && (force || !fileExists);
      actions.push({ role, page, roleFile, willWrite, content, exists: fileExists });
    }
  }

  if (actions.length === 0) {
    console.log('No role folders found to process.');
    return;
  }

  console.log(`Planned actions: ${actions.length}`);
  for (const a of actions) {
    console.log(`- ${a.exists ? '[EXISTS]' : '[NEW]'} ${a.role}/${a.page} ${a.willWrite ? '(will overwrite)' : '(dry-run)'}`);
  }

  if (!apply) {
    console.log('\nDry run complete. To apply changes run:');
    console.log('  node scripts/create-role-wrappers.js --apply --force');
    return;
  }

  for (const a of actions) {
    if (!a.willWrite) {
      console.log(`Skipping ${a.role}/${a.page} (exists and --force not passed)`);
      continue;
    }
    await fs.writeFile(a.roleFile, a.content, 'utf8');
    console.log(`Wrote ${a.role}/${a.page}`);
  }

  console.log('Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
