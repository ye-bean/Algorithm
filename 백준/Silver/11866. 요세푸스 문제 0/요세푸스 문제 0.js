const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [n, k] = input;
let arr = [];
let answer = [];

for(let i = 1; i <= n; i++){
    arr.push(i);
}

while(arr.length > 0){
    for(let i = 0; i < k-1; i++){
        arr.push(arr.shift());
    }
    answer.push(arr.shift());
}

console.log(`<${answer.join(', ')}>`);
