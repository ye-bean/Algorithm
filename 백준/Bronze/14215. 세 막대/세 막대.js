const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const [a, b, c] = input;

if (c < a + b) {
    console.log(a + b + c);
} else {
    console.log((a + b) + (a + b - 1));
}