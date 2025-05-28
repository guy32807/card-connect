const fs = require('fs');
const path = require('path');

// Copy the public directory to the out directory with the correct path
function copyPublicToOut() {
  const publicDir = path.join(process.cwd(), 'public');
  const outDir = path.join(process.cwd(), 'out/card-connect');
  
  // Create the directory if it doesn't exist
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Copy the public directory
  copyDirSync(publicDir, outDir);
  
  console.log('Successfully copied public files to out/card-connect directory');
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