// filepath: /Users/augustedubuisson/Library/CloudStorage/OneDrive-Personal/CJ/beckett-affiliate-hub/scripts/create-placeholders.js
const fs = require('fs');
const path = require('path');

// Ensure directories exist
const dirs = [
  'public/images',
  'public/images/products',
];

dirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create a modern SVG placeholder
function createProductSvg(name, bgColor = '#4361ee', textColor = '#ffffff') {
  const width = 640;
  const height = 360;
  
  // Generate random patterns for background
  const patternCount = Math.floor(Math.random() * 10) + 5;
  let patterns = '';
  
  for (let i = 0; i < patternCount; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const size = Math.floor(Math.random() * 40) + 20;
    const opacity = (Math.random() * 0.2 + 0.05).toFixed(2);
    
    patterns += `<circle cx="${x}" cy="${y}" r="${size}" fill="${textColor}" opacity="${opacity}" />`;
  }
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    ${patterns}
    <rect width="200" height="8" x="${width/2 - 100}" y="${height/2 - 40}" fill="${textColor}" opacity="0.8"/>
    <rect width="160" height="8" x="${width/2 - 80}" y="${height/2 + 32}" fill="${textColor}" opacity="0.6"/>
    <text x="50%" y="50%" font-family="Arial" font-size="32" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${name}</text>
  </svg>`;
}

// Create a simple favicon SVG
function createFaviconSvg(size, letter, bgColor = '#4361ee', textColor = '#ffffff') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${size * 0.6}" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${letter}</text>
  </svg>`;
}

// Create product placeholders
const products = [
  { name: 'authentication.jpg', title: 'Authentication', color: '#4361ee' },
  { name: 'grading.jpg', title: 'Grading', color: '#f72585' },
  { name: 'price-guide.jpg', title: 'Price Guide', color: '#4cc9f// filepath: /Users/augustedubuisson/Library/CloudStorage/OneDrive-Personal/CJ/beckett-affiliate-hub/scripts/create-placeholders.js
const fs = require('fs');
const path = require('path');

// Ensure directories exist
const dirs = [
  'public/images',
  'public/images/products',
];

dirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create a modern SVG placeholder
function createProductSvg(name, bgColor = '#4361ee', textColor = '#ffffff') {
  const width = 640;
  const height = 360;
  
  // Generate random patterns for background
  const patternCount = Math.floor(Math.random() * 10) + 5;
  let patterns = '';
  
  for (let i = 0; i < patternCount; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const size = Math.floor(Math.random() * 40) + 20;
    const opacity = (Math.random() * 0.2 + 0.05).toFixed(2);
    
    patterns += `<circle cx="${x}" cy="${y}" r="${size}" fill="${textColor}" opacity="${opacity}" />`;
  }
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    ${patterns}
    <rect width="200" height="8" x="${width/2 - 100}" y="${height/2 - 40}" fill="${textColor}" opacity="0.8"/>
    <rect width="160" height="8" x="${width/2 - 80}" y="${height/2 + 32}" fill="${textColor}" opacity="0.6"/>
    <text x="50%" y="50%" font-family="Arial" font-size="32" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${name}</text>
  </svg>`;
}

// Create a simple favicon SVG
function createFaviconSvg(size, letter, bgColor = '#4361ee', textColor = '#ffffff') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${size * 0.6}" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${letter}</text>
  </svg>`;
}

// Create product placeholders
const products = [
  { name: 'authentication.jpg', title: 'Authentication', color: '#4361ee' },
  { name: 'grading.jpg', title: 'Grading', color: '#f72585' },
  { name: 'price-guide.jpg', title: 'Price Guide', color: '#4cc9f