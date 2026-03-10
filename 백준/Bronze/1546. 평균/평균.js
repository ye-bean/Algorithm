const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input.shift());
const arr = input[0].split(' ').map(v => parseInt(v)).sort((a,b) => a-b);
let total = 0;

for(let i = 0; i < n; i++){
    arr[i] = arr[i]/arr[n-1]*100;
    total += arr[i];
}

console.log(total/n);