const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [n,m] = input;
const p = gcd(n,m);

function gcd(a,b) {
    return a%b === 0 ? b : gcd(b,a%b);
}

console.log(n*m/p);
