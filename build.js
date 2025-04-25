// build.js — Build-time include script for static site
// 1. Reads partials (head.html, header.html, footer.html) from src/partials
// 2. Injects them into every HTML file under src/
// 3. Copies all other files (css/, js/, assets/) into public/

const fs = require('fs');
const path = require('path');

// Load partials
const PARTIALS = {
  head: fs.readFileSync('src/partials/head.html', 'utf8'),
  header: fs.readFileSync('src/partials/header.html', 'utf8'),
  footer: fs.readFileSync('src/partials/footer.html', 'utf8')
};

// Inject partials into a single HTML file
function injectPartials(srcPath, destPath) {
  let html = fs.readFileSync(srcPath, 'utf8');
  html = html.replace('<div id="head-placeholder"></div>', PARTIALS.head);
  html = html.replace('<div id="header-placeholder"></div>', PARTIALS.header);
  html = html.replace('<div id="footer-placeholder"></div>', PARTIALS.footer);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, html, 'utf8');
}

// Recursively process src/ tree
function build(srcDir, outDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (let entry of entries) {
    const src = path.join(srcDir, entry.name);
    const dst = path.join(outDir, entry.name);
    if (entry.isDirectory()) {
      build(src, dst);
    } else if (src.endsWith('.html')) {
      injectPartials(src, dst);
    } else {
      // Copy static assets (css, js, images, CNAME, etc.)
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.copyFileSync(src, dst);
    }
  }
}

// Clean and recreate public/
const PUBLIC_DIR = 'public';
if (fs.existsSync(PUBLIC_DIR)) fs.rmSync(PUBLIC_DIR, { recursive: true });
fs.mkdirSync(PUBLIC_DIR);

// Run build
build('src', PUBLIC_DIR);
console.log('✅ Build complete: output in /public');

/*
In your package.json, add:

  "scripts": {
    "build": "node build.js"
  }

And in Vercel settings:
  Build Command: npm run build
  Output Directory: public

Optionally, include a minimal vercel.json:

{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" }
  ]
}
*/
