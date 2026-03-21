const fs = require('fs');
const [N, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const base = parseInt(B);

let result = 0;
for (let i = 0; i < N.length; i++) {
    const char = N[i];
    let num;

    if (char >= 'A' && char <= 'Z') {
        num = char.charCodeAt(0) - 55;
    } else {
        num = parseInt(char);
    }

    result = result * base + num;
}

console.log(result);