const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'apps', 'crm-backend', 'routes');

function fixImports(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      fixImports(fullPath);
    } else if (file.name.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      content = content.replace(/require\(['"]\.\.\/\.\.\/models\//g, "require('../models-website/");
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', fullPath);
      }
    }
  });
}

fixImports(routesDir);
console.log('Done!');
