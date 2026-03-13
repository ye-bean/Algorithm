const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const m = parseInt(input[2]);
const sangun = input[3].split(' ').map(Number);
const set = new Set(arr);
let answer = [];

for(let i = 0; i < m; i++){
    if (set.has(sangun[i])){
        answer.push(1);
    } else {
        answer.push(0);
    }
}

console.log(answer.join(' '));