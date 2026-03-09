const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let L = 1;

while (n > L) {
    n -= L;
    L++;
}

let a, b;

if (L % 2 === 0) {
    a = n;
    b = L - n + 1;
} else {
    a = L - n + 1;
    b = n;
}

console.log(`${a}/${b}`);