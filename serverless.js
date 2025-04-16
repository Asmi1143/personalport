#!/usr/bin/env node

import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a temporary static.json in client directory for proper configuration
function createStaticConfig() {
  const staticConfigPath = path.join(__dirname, 'client', 'static.json');
  const staticConfig = {
    "root": "./",
    "clean_urls": true,
    "routes": {
      "/**": "index.html"
    },
    "https_only": true,
    "headers": {
      "/**": {
        "Cache-Control": "public, max-age=0, must-revalidate"
      },
      "/assets/**": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    }
  };
  
  fs.writeFileSync(staticConfigPath, JSON.stringify(staticConfig, null, 2));
  console.log('✓ Created static.json configuration for static hosting');
}

async function startServer() {
  try {
    console.log('Starting Serverless Portfolio...');
    console.log('Setting up for static deployment...');
    
    // Create static hosting configuration
    createStaticConfig();
    
    console.log('Starting standalone Vite server...');
    
    const server = await createServer({
      // Configure Vite
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      root: path.resolve(__dirname, 'client'),
      server: {
        port: 3000, // Use different port to avoid conflict with Express server
        host: '0.0.0.0',
        strictPort: false, // Allow fallback to another port if 3000 is in use
        cors: true,
        hmr: true,
      },
    });
    
    await server.listen();
    
    server.printUrls();
    console.log('✓ Vite server is running in standalone mode!');
    console.log(''); 
    console.log('Portfolio is now running as a completely serverless application');
    console.log('No backend server or API is required');
    console.log('You can use deploy-static.js to build for production deployment');
  } catch (e) {
    console.error('Error starting Vite server:', e);
    process.exit(1);
  }
}

startServer();