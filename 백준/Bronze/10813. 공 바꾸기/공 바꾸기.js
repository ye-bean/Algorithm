const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m] =input[0].split(' ').map(Number);
let answer = [];

for(let i = 1; i <= n; i++){
    answer.push(i);
}

for(i = 1; i <= m; i++){
    const [a,b] = input[i].split(' ').map(Number);
    [answer[a-1], answer[b-1]] = [answer[b-1], answer[a-1]];
}

console.log(answer.join(' '));