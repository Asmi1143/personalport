#!/usr/bin/env node

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Execute command and return promise
function execCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Executing: ${command}`);
    exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        console.error(`stderr: ${stderr}`);
        reject(error);
        return;
      }
      
      console.log(stdout);
      resolve(stdout);
    });
  });
}

async function deployStatic() {
  try {
    console.log('Starting deployment process...');
    
    // Build the static site
    await execCommand('node build-static.js');
    
    console.log('✓ Static build completed');
    
    // Create a _redirects file for Netlify (if using Netlify)
    const redirectsFile = path.join(__dirname, 'dist', '_redirects');
    fs.writeFileSync(redirectsFile, '/* /index.html 200');
    console.log('✓ Created _redirects file for Netlify');
    
    // Create a netlify.toml file (if using Netlify)
    const netlifyConfig = path.join(__dirname, 'dist', 'netlify.toml');
    fs.writeFileSync(netlifyConfig, `[build]\n  publish = "."\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200`);
    console.log('✓ Created netlify.toml configuration');
    
    console.log('\nDeployment ready! The static site is available in the ./dist directory.');
    console.log('You can deploy it to any static hosting service:');
    console.log('- Netlify');
    console.log('- Vercel');
    console.log('- GitHub Pages');
    console.log('- Cloudflare Pages');
    console.log('- Replit Deployments\n');
    
  } catch (e) {
    console.error('Deployment failed:', e);
  }
}

deployStatic();