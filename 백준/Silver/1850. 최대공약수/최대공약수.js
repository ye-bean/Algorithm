const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const [n, m] = input;

function gcd(a, b) {
    return b === 0n ? a : gcd(b, a % b);
}

const p = gcd(n, m);

console.log('1'.repeat(Number(p)));