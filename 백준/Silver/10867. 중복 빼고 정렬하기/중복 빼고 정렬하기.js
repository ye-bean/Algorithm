const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let mySet = new Set();
for(const num of arr){
    mySet.add(num);
}

const answer = [...mySet].sort((a,b) => a - b);

console.log(answer.join(' '));