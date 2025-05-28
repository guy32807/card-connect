const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// First ensure the directory exists
const teamDir = path.join(process.cwd(), 'public/images/team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
  console.log(`Created directory: public/images/team`);
}

// Create a modern SVG placeholder with abstract design
function createProductSvg(name, primaryColor = '#4f46e5', secondaryColor = '#7c3aed') {
  const width = 640;
  const height = 360;
  
  // Generate random patterns
  const patternCount = Math.floor(Math.random() * 15) + 10;
  let patterns = '';
  
  for (let i = 0; i < patternCount; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const size = Math.floor(Math.random() * 50) + 10;
    const opacity = (Math.random() * 0.3 + 0.05).toFixed(2);
    
    if (i % 3 === 0) {
      // Circle
      patterns += `<circle cx="${x}" cy="${y}" r="${size}" fill="white" opacity="${opacity}" />`;
    } else if (i % 3 === 1) {
      // Rectangle
      patterns += `<rect x="${x}" y="${y}" width="${size}" height="${size/2}" rx="4" fill="white" opacity="${opacity}" />`;
    } else {
      // Triangle
      const x1 = x;
      const y1 = y;
      const x2 = x + size;
      const y2 = y;
      const x3 = x + size/2;
      const y3 = y - size;
      patterns += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="white" opacity="${opacity}" />`;
    }
  }
  
  const gradientId = `gradient-${Math.random().toString(36).substring(7)}`;
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${primaryColor}" />
        <stop offset="100%" stop-color="${secondaryColor}" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#${gradientId})"/>
    ${patterns}
    <rect width="200" height="8" x="${width/2 - 100}" y="${height/2 - 30}" fill="white" opacity="0.8"/>
    <rect width="160" height="8" x="${width/2 - 80}" y="${height/2 + 30}" fill="white" opacity="0.6"/>
    <text x="50%" y="50%" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${name}</text>
  </svg>`;
}

// Create a team member placeholder
function createTeamMemberSvg() {
  return `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e5e7eb"/>
    <circle cx="200" cy="140" r="80" fill="#9ca3af"/>
    <rect x="120" y="240" width="160" height="180" rx="5" fill="#9ca3af"/>
    <circle cx="200" cy="120" r="30" fill="#e5e7eb"/>
    <rect x="170" y="150" width="60" height="60" rx="5" fill="#e5e7eb"/>
  </svg>`;
}

// Create favicon
function createFaviconSvg(size = 32, letter = 'C', bgColor = '#4f46e5') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${size * 0.6}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${letter}</text>
  </svg>`;
}

// Try to convert SVG to PNG/ICO if possible - this is optional but helps with compatibility
function convertSvgToImage(svgPath, outputPath) {
  try {
    // Check if imagemagick is installed
    execSync('which convert', { stdio: 'ignore' });
    
    // Convert SVG to PNG/ICO
    execSync(`convert ${svgPath} ${outputPath}`);
    console.log(`Converted ${svgPath} to ${outputPath}`);
    return true;
  } catch (error) {
    // If ImageMagick is not available, we'll just use the SVG directly
    console.log(`Note: ImageMagick not available, keeping ${svgPath} as SVG`);
    return false;
  }
}

// Product data
const products = [
  { name: 'authentication.jpg', title: 'Authentication', color1: '#4f46e5', color2: '#7c3aed' },
  { name: 'grading.jpg', title: 'Grading', color1: '#f59e0b', color2: '#d97706' },
  { name: 'price-guide.jpg', title: 'Price Guide', color1: '#10b981', color2: '#059669' },
  { name: 'placeholder.jpg', title: 'Sports Cards', color1: '#4f46e5', color2: '#7c3aed' },
];

// Generate product images
products.forEach(product => {
  const svg = createProductSvg(product.title, product.color1, product.color2);
  const svgPath = path.join(process.cwd(), 'public/images/products', `${product.name}.svg`);
  const outputPath = path.join(process.cwd(), 'public/images/products', product.name);
  
  // Write SVG
  fs.writeFileSync(svgPath, svg);
  console.log(`Created product image: ${product.name}`);
  
  // Try to convert to actual image format if possible
  try {
    const svgContent = Buffer.from(svg);
    fs.writeFileSync(outputPath, svgContent);
    console.log(`Saved ${outputPath}`);
  } catch (err) {
    console.error(`Error saving image: ${err.message}`);
    // Fallback - copy the SVG with jpg extension
    fs.copyFileSync(svgPath, outputPath);
    console.log(`Fallback: Copied SVG as ${product.name}`);
  }
});

// Save the team member placeholder
fs.writeFileSync(
  path.join(teamDir, 'placeholder.jpg'),
  createTeamMemberSvg()
);
console.log('Created team member placeholder image');

// Generate favicon and icons
const faviconSvg = createFaviconSvg(32, 'C');
const faviconSvgPath = path.join(process.cwd(), 'public', 'favicon.svg');
const faviconIcoPath = path.join(process.cwd(), 'public', 'favicon.ico');
fs.writeFileSync(faviconSvgPath, faviconSvg);

// Create icon
const iconSvg = createFaviconSvg(64, 'C');
const iconSvgPath = path.join(process.cwd(), 'public', 'icon.svg');
const iconPngPath = path.join(process.cwd(), 'public', 'icon.png');
fs.writeFileSync(iconSvgPath, iconSvg);

// Create apple icon
const appleSvg = createFaviconSvg(180, 'C');
const appleSvgPath = path.join(process.cwd(), 'public', 'apple-icon.svg');
const applePngPath = path.join(process.cwd(), 'public', 'apple-icon.png');
fs.writeFileSync(appleSvgPath, appleSvg);

// Try to convert SVGs to proper formats
convertSvgToImage(faviconSvgPath, faviconIcoPath);
convertSvgToImage(iconSvgPath, iconPngPath);
convertSvgToImage(appleSvgPath, applePngPath);

// Fall back to SVG if conversion fails - copy with appropriate extensions
if (!fs.existsSync(faviconIcoPath)) fs.copyFileSync(faviconSvgPath, faviconIcoPath);
if (!fs.existsSync(iconPngPath)) fs.copyFileSync(iconSvgPath, iconPngPath);
if (!fs.existsSync(applePngPath)) fs.copyFileSync(appleSvgPath, applePngPath);

// Create .nojekyll file for GitHub Pages
fs.writeFileSync(path.join(process.cwd(), 'public', '.nojekyll'), '');

console.log('All placeholders created successfully!');