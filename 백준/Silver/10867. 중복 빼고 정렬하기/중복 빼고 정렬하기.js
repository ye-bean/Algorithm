const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let mySet = new Set(input[1].split(' ').map(Number));
const answer = [...mySet].sort((a,b) => a - b);

console.log(answer.join(' '));