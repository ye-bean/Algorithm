const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const a = input[0];
const b = input[1];
const c = input[2];

if (c < a + b) {
    console.log(a + b + c);
} else {
    console.log((a + b) + (a + b - 1));
}