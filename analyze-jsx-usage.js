const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'apps', 'website', 'src', 'components');
const pagesDir = path.join(__dirname, 'apps', 'website', 'src', 'pages');
const appFile = path.join(__dirname, 'apps', 'website', 'src', 'App.jsx');

// Get all JSX files
function getJSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getJSXFiles(fullPath));
    } else if (item.name.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Extract component name from file path
function getComponentName(filePath) {
  return path.basename(filePath, '.jsx');
}

// Check if component is imported in a file
function isComponentUsed(componentName, fileContent) {
  const patterns = [
    new RegExp(`import\\s+${componentName}\\s+from`, 'g'),
    new RegExp(`import\\s+{[^}]*${componentName}[^}]*}\\s+from`, 'g'),
    new RegExp(`<${componentName}[\\s/>]`, 'g'),
  ];
  return patterns.some(pattern => pattern.test(fileContent));
}

// Main analysis
const componentFiles = getJSXFiles(componentsDir);
const pageFiles = getJSXFiles(pagesDir);
const appContent = fs.readFileSync(appFile, 'utf-8');

const allFiles = [...pageFiles, appFile];
const allContents = allFiles.map(f => fs.readFileSync(f, 'utf-8')).join('\n');

const results = {
  used: [],
  unused: [],
  total: componentFiles.length
};

console.log('\n=== JSX COMPONENT USAGE ANALYSIS ===\n');

componentFiles.forEach(componentFile => {
  const componentName = getComponentName(componentFile);
  const relativePath = path.relative(__dirname, componentFile);
  const isUsed = isComponentUsed(componentName, allContents);
  
  if (isUsed) {
    results.used.push({ name: componentName, path: relativePath });
  } else {
    results.unused.push({ name: componentName, path: relativePath });
  }
});

// Display results
console.log('✅ USED COMPONENTS (' + results.used.length + '):');
console.log('─'.repeat(60));
results.used.forEach(c => console.log(`  ✓ ${c.name.padEnd(35)} ${c.path}`));

console.log('\n❌ UNUSED COMPONENTS (' + results.unused.length + '):');
console.log('─'.repeat(60));
results.unused.forEach(c => console.log(`  ✗ ${c.name.padEnd(35)} ${c.path}`));

console.log('\n📊 SUMMARY:');
console.log('─'.repeat(60));
console.log(`  Total Components: ${results.total}`);
console.log(`  Used: ${results.used.length} (${Math.round(results.used.length/results.total*100)}%)`);
console.log(`  Unused: ${results.unused.length} (${Math.round(results.unused.length/results.total*100)}%)`);

// Check pages usage
console.log('\n\n=== PAGE USAGE ANALYSIS ===\n');
const usedPages = [];
const unusedPages = [];

pageFiles.forEach(pageFile => {
  const pageName = getComponentName(pageFile);
  const relativePath = path.relative(__dirname, pageFile);
  const isUsed = isComponentUsed(pageName, appContent);
  
  if (isUsed) {
    usedPages.push({ name: pageName, path: relativePath });
  } else {
    unusedPages.push({ name: pageName, path: relativePath });
  }
});

console.log('✅ USED PAGES (' + usedPages.length + '):');
console.log('─'.repeat(60));
usedPages.forEach(p => console.log(`  ✓ ${p.name.padEnd(35)} ${p.path}`));

console.log('\n❌ UNUSED PAGES (' + unusedPages.length + '):');
console.log('─'.repeat(60));
unusedPages.forEach(p => console.log(`  ✗ ${p.name.padEnd(35)} ${p.path}`));

console.log('\n📊 PAGE SUMMARY:');
console.log('─'.repeat(60));
console.log(`  Total Pages: ${pageFiles.length}`);
console.log(`  Used: ${usedPages.length} (${Math.round(usedPages.length/pageFiles.length*100)}%)`);
console.log(`  Unused: ${unusedPages.length} (${Math.round(unusedPages.length/pageFiles.length*100)}%)`);
console.log('\n');
