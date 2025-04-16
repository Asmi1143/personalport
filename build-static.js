#!/usr/bin/env node

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  try {
    console.log('Starting static build...');
    
    // Build the client
    await build({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
      },
    });

    // Copy index.html to 404.html for client-side routing in static hosts
    const indexHtml = path.resolve(__dirname, 'dist', 'index.html');
    const notFoundHtml = path.resolve(__dirname, 'dist', '404.html');
    
    fs.copyFileSync(indexHtml, notFoundHtml);
    
    console.log('Static build completed successfully!');
    console.log('Files ready for deployment in ./dist folder');
  } catch (e) {
    console.error('Error building static site:', e);
    process.exit(1);
  }
}

buildStatic();