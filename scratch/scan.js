const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

const patterns = [
    /text-white\b/g,
    /text-black\b/g,
    /bg-white\b/g,
    /bg-black\b/g,
    /text-neutral-\d+/g,
    /bg-neutral-\d+/g,
    /text-gray-\d+/g,
    /bg-gray-\d+/g,
];

let filesToUpdate = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    let hasMatch = false;
    for (let p of patterns) {
        if (content.match(p)) {
            hasMatch = true;
            break;
        }
    }
    if (hasMatch) {
        filesToUpdate.push(file);
    }
});

console.log("Files needing update:", filesToUpdate.length);
console.log(filesToUpdate);
