const fs = require('fs');
const path = require('path');

// Copy the public directory to the out directory with the correct path
function copyPublicToOut() {
  const publicDir = path.join(process.cwd(), 'public');
  const outDir = path.join(process.cwd(), 'out/card-connect');
  const rootOutDir = path.join(process.cwd(), 'out');
  
  // Create the directory if it doesn't exist
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Copy the public directory to out/card-connect
  copyDirSync(publicDir, outDir);
  
  // Copy certain files to the root out directory (like .nojekyll and favicon)
  const filesToCopyToRoot = [
    '.nojekyll',
    'favicon.ico',
    'robots.txt',
  ];
  
  filesToCopyToRoot.forEach(file => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(rootOutDir, file);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to root output directory`);
    }
  });
  
  // Also copy the images directory to the root out directory for easier access
  const imagesDir = path.join(publicDir, 'images');
  const rootImagesDir = path.join(rootOutDir, 'images');
  
  if (fs.existsSync(imagesDir)) {
    copyDirSync(imagesDir, rootImagesDir);
    console.log('Copied images to root output directory');
  }
  
  console.log('Successfully copied public files to output directories');
}

// Helper function to copy directories recursively
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Run the script
copyPublicToOut();