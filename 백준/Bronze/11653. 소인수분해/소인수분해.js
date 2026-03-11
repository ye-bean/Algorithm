const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

if (n === 1) {
    process.exit();
}

let result = [];
let i = 2;

while (i * i <= n) {
    while (n % i === 0) {
        result.push(i);
        n /= i;
    }
    i++;
}

if (n > 1) {
    result.push(n);
}

console.log(result.join('\n'));