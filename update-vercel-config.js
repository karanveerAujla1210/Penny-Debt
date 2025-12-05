// Update Vercel Project Configuration via API
const https = require('https');

const PROJECT_ID = 'prj_ES2OaWPM99CANPSeIayZWMg2nhIC';
const VERCEL_TOKEN = process.env.VERCEL_TOKEN || 'YOUR_VERCEL_TOKEN_HERE';

const config = {
  rootDirectory: 'apps/website',
  framework: 'vite',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  installCommand: 'npm install',
};

const options = {
  hostname: 'api.vercel.com',
  path: `/v9/projects/${PROJECT_ID}`,
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${VERCEL_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

const data = JSON.stringify(config);

const req = https.request(options, (res) => {
  let body = '';
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Vercel project updated successfully!');
      console.log('Configuration:', JSON.parse(body));
    } else {
      console.error('❌ Failed to update:', res.statusCode);
      console.error(body);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error);
});

req.write(data);
req.end();
