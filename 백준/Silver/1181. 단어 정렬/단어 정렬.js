const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input.shift());

const words = [...new Set(input)];

words.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    if (a < b) return -1; 
    if (a > b) return 1;  
    return 0;             
});

console.log(words.join('\n'));