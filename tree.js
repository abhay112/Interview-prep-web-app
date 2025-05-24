const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '', isLast = true) {
  // Exclude node_modules
  if (path.basename(dir) === 'node_modules') return '';

  let output = '';
  const items = fs.readdirSync(dir).filter(item => item !== 'node_modules');
  items.forEach((item, idx) => {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const isLastEntry = idx === items.length - 1;
    output += `${prefix}${isLast ? '└─' : '├─'}${item}\n`;
    if (isDir) {
      const nextPrefix = prefix + (isLast ? '  ' : '│ ');
      output += printTree(fullPath, nextPrefix, isLastEntry);
    }
  });
  return output;
}

// Usage: node tree.js [directory]
const startDir = process.argv[2] || 'src'; // Default to 'src' folder
console.log(startDir);
console.log(printTree(startDir, '', true));
