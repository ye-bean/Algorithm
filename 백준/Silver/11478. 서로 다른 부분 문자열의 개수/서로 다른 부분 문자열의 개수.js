const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const substrings = new Set();

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
        substrings.add(input.substring(i, j));
    }
}

console.log(substrings.size);