const fs = require('fs');
const path = require('path');

const emptyFiles = [
  'apps/crm/src/pages/CEO/CEODashboard.jsx',
  'apps/crm/src/pages/Compliance/ComplianceDashboard.jsx',
  'apps/crm/src/pages/COO/COODashboard.jsx'
];

const template = (name) => `import React from 'react';

const ${name} = () => {
  return <div>${name}</div>;
};

export default ${name};
`;

emptyFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  const name = path.basename(file, '.jsx');
  fs.writeFileSync(fullPath, template(name), 'utf8');
  console.log('Fixed:', file);
});

console.log('Done!');
