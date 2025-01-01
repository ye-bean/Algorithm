const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a,b) => b - a);
let num = arr[0];

for(let i = 0 ; i < n ; i++){
    for(let j = i+1; j < n; j++){
        if(arr[i] < arr[j]) arr[i] = arr[j];
    }
}

console.log(arr[0], arr[1]);