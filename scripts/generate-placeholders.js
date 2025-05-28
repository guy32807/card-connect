const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'public/images',
  'public/images/logos',
  'public/images/blog',
  'public/images/products',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create a simple SVG placeholder
function createSvgPlaceholder(width, height, text, bgColor = '#f3f4f6', textColor = '#9ca3af') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="${Math.min(width, height) / 10}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Generate placeholders for various images
const placeholders = [
  { path: 'public/images/logo.png', width: 150, height: 40, text: 'CardConnect Logo' },
  { path: 'public/images/background.jpg', width: 1920, height: 1080, text: 'Background Image' },
  { path: 'public/images/placeholder.jpg', width: 600, height: 400, text: 'Placeholder' },
  { path: 'public/images/card-collection.jpg', width: 600, height: 400, text: 'Card Collection' },
  
  // Logos
  { path: 'public/images/logos/sports-illustrated.svg', width: 200, height: 80, text: 'Sports Illustrated' },
  { path: 'public/images/logos/espn.svg', width: 200, height: 80, text: 'ESPN' },
  { path: 'public/images/logos/forbes.svg', width: 200, height: 80, text: 'Forbes' },
  { path: 'public/images/logos/bleacher-report.svg', width: 200, height: 80, text: 'Bleacher Report' },
  { path: 'public/images/logos/cbs-sports.svg', width: 200, height: 80, text: 'CBS Sports' },
  
  // Blog posts
  { path: 'public/images/blog/card-storage-header.jpg', width: 800, height: 500, text: 'Card Storage' },
  { path: 'public/images/blog/default-cover.jpg', width: 800, height: 500, text: 'Blog Cover' },
  
  // Products
  { path: 'public/images/products/item1.jpg', width: 500, height: 500, text: 'Product 1' },
  { path: 'public/images/products/item2.jpg', width: 500, height: 500, text: 'Product 2' },
  { path: 'public/images/products/item3.jpg', width: 500, height: 500, text: 'Product 3' },
];

// Generate all placeholders
placeholders.forEach(item => {
  const svg = createSvgPlaceholder(item.width, item.height, item.text);
  fs.writeFileSync(item.path, svg);
  console.log(`Created placeholder: ${item.path}`);
});

// Create .nojekyll file for GitHub Pages
fs.writeFileSync('public/.nojekyll', '');
console.log('Created .nojekyll file');

console.log('All placeholders have been generated!');