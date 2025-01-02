const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].split(' ').map(Number).sort((a,b) => a - b);
const arr2 = input[2].split(' ').map(Number);

let total = 0;

for(let i = 0 ; i < n ; i++){
    const max = Math.max(...arr2);
    const index = arr2.indexOf(max);
    total += max*arr1[i];
    arr2.splice(index, 1);
}

console.log(total);