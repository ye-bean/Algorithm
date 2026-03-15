const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [n,m] = input;

function gcd(a,b) {
    return a%b === 0 ? b : gcd(b,a%b);
}

const p = gcd(n,m);

console.log(p);
console.log(n*m/p);