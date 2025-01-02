const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].split(' ').map(Number).sort((a,b) => a - b);
const arr2 = input[2].split(' ').map(Number);

let newarr2 = arr2.sort((a,b) => b - a);
let total = 0;

for(let i = 0 ; i < n ; i++){
    total += arr1[i]*newarr2[i];
}

console.log(total);