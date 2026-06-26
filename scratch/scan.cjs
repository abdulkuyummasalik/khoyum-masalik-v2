const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

const patterns = {
    'text-white': /text-white\b/g,
    'text-black': /text-black\b/g,
    'bg-white': /bg-white\b/g,
    'bg-black': /bg-black\b/g,
    'text-neutral': /text-neutral-\d+/g,
    'bg-neutral': /bg-neutral-\d+/g,
    'text-gray': /text-gray-\d+/g,
    'bg-gray': /bg-gray-\d+/g,
    'rgba': /rgba\([^\)]+\)/g,
    'border-white': /border-white\b/g,
    'border-black': /border-black\b/g,
    'from-black': /from-black\b/g,
    'via-black': /via-black\b/g,
    'to-black': /to-black\b/g,
    'from-white': /from-white\b/g,
    'via-white': /via-white\b/g,
    'to-white': /to-white\b/g
};

let results = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    const lines = content.split('\n');
    let fileResults = [];
    
    lines.forEach((line, index) => {
        let matches = [];
        for (let key in patterns) {
            if (line.match(patterns[key])) {
                matches.push(key);
            }
        }
        if (matches.length > 0) {
            fileResults.push({ line: index + 1, content: line.trim(), matches });
        }
    });

    if (fileResults.length > 0) {
        results[file] = fileResults;
    }
});

fs.writeFileSync(path.join(__dirname, 'findings.json'), JSON.stringify(results, null, 2));
console.log("Done scanning. Results in scratch/findings.json");
