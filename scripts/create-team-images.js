const fs = require('fs');
const path = require('path');

// Ensure team directory exists
const teamDir = path.join(process.cwd(), 'public/images/team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
  console.log(`Created directory: public/images/team`);
}

// Create a team member placeholder SVG
function createTeamMemberSvg() {
  return `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e5e7eb"/>
    <circle cx="200" cy="140" r="80" fill="#9ca3af"/>
    <rect x="120" y="240" width="160" height="180" rx="5" fill="#9ca3af"/>
    <circle cx="200" cy="120" r="30" fill="#e5e7eb"/>
    <rect x="170" y="150" width="60" height="60" rx="5" fill="#e5e7eb"/>
  </svg>`;
}

// Save the team member placeholder
fs.writeFileSync(
  path.join(teamDir, 'placeholder.jpg'),
  createTeamMemberSvg()
);
console.log('Created team member placeholder image');