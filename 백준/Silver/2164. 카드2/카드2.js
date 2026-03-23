const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let arr = [];

for(let i = 1; i <=n; i++){
    arr.push(i);
}

let start = 0;
let end = n-1;

while(arr.length - start > 1){
    start++;
    arr.push(arr[start]);
    start++;
}

console.log(arr[start]);
