const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
let answer = [];

for(let i = 0; i < n; i++){
    answer.push(0);
}

for(let i = 1; i <= m; i++){
    const [a,b,c] = input[i].split(' ').map(Number);
    for(let j = a; j <= b; j++){
        answer[j-1] = c;
    }
}

console.log(answer.join(' '));