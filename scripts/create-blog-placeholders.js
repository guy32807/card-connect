const fs = require('fs');
const path = require('path');

// Ensure blog images directory exists
const blogDir = path.join(process.cwd(), 'public/images/blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
  console.log(`Created directory: public/images/blog`);
}

// Create a blog post placeholder SVG - save as SVG file instead of jpg
function createBlogImageSvg(color = '#4f46e5', name = 'default-cover') {
  return `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <rect x="100" y="80" width="600" height="240" fill="${color}" opacity="0.3"/>
    <text x="400" y="200" font-family="Arial" font-size="40" text-anchor="middle" fill="#1f2937">Blog Post Image</text>
    <text x="400" y="250" font-family="Arial" font-size="20" text-anchor="middle" fill="#4b5563">${name}</text>
  </svg>`;
}

// Save the default blog image as SVG instead of JPG
fs.writeFileSync(
  path.join(blogDir, 'default-cover.svg'),
  createBlogImageSvg()
);

// Create some sample blog images as SVGs
const topics = [
  { name: 'card-grading', color: '#3b82f6' },
  { name: 'baseball-cards', color: '#10b981' },
  { name: 'counterfeit-detection', color: '#ef4444' },
  { name: 'card-storage', color: '#8b5cf6' },
  { name: 'nfts', color: '#f59e0b' },
  { name: 'market-trends', color: '#ec4899' }
];

topics.forEach(topic => {
  fs.writeFileSync(
    path.join(blogDir, `${topic.name}.svg`),
    createBlogImageSvg(topic.color, topic.name)
  );
});

console.log('Created blog placeholder images as SVGs');