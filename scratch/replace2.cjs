const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

const excludeFiles = [
    'Projects.jsx',
    'Gallery.jsx',
    'GalleryDetailPage.jsx',
    'BlogDetailPage.jsx',
    'ProjectDetailPage.jsx',
    'Hero.jsx' // Already did Hero manually
];

files.forEach(file => {
    if (excludeFiles.includes(file)) return;
    
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');

    // Make replacements
    content = content.replace(/\btext-white\b/g, 'text-foreground');
    content = content.replace(/\btext-black\b/g, 'text-foreground');
    
    // Replace text-neutral with semantic colors
    content = content.replace(/\btext-neutral-400\b/g, 'text-muted-foreground');
    content = content.replace(/\btext-neutral-300\b/g, 'text-foreground/80');
    content = content.replace(/\btext-neutral-200\b/g, 'text-foreground/90');
    content = content.replace(/\btext-neutral-500\b/g, 'text-muted-foreground');
    content = content.replace(/\btext-neutral-100\b/g, 'text-foreground');

    // Replace backgrounds
    content = content.replace(/\bbg-neutral-900\b/g, 'bg-card');
    content = content.replace(/\bbg-neutral-800\b/g, 'bg-muted');
    content = content.replace(/\bbg-neutral-950\b/g, 'bg-background');

    // Replace borders
    content = content.replace(/\bborder-white\//g, 'border-foreground/');
    content = content.replace(/\bborder-white\b/g, 'border-foreground');

    // Replace bg-white/xx with bg-foreground/xx (for glassmorphism)
    content = content.replace(/\bbg-white\//g, 'bg-foreground/');
    
    // For text-white/xx 
    content = content.replace(/\btext-white\//g, 'text-foreground/');

    fs.writeFileSync(path.join(srcDir, file), content);
});

console.log("Replacement complete for 20+ files safely.");
