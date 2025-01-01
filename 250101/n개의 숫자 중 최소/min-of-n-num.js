const INT_MAX = Number.MAX_SAFE_INTEGER;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let min = INT_MAX;
let cnt = 0;

for(let i = 0; i < n; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

for(let i = 0; i < n; i++){
    if(arr[i] === min){
        cnt += 1;
    }
}

console.log(min, cnt);