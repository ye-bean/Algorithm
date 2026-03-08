const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.length;
const arr = input.map(v => v.split(''));
let answer = [];

let maxLen = 0;
for(let i = 0; i < n; i++){
    if(arr[i].length > maxLen) maxLen = arr[i].length;
}

for(let i = 0 ; i < maxLen; i++){
    for(let j = 0; j < n; j++){
        if(arr[j][i] !== undefined){
            answer.push(arr[j][i]);
        }    
    }
}

console.log(answer.join(''));