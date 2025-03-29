const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const m = input[1].split(' ').map(Number);

const sit = new Set();
let count = 0;

for (let i = 0; i < n; i++) {
    if (sit.has(m[i])) {
        count++;
    } else {
        sit.add(m[i]);
    }
}

console.log(count);
