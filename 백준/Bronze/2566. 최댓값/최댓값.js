const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = -1;
let colMax = 0;
let rowMax = 0;

for(let i = 0; i < 9; i++){
    const row = input[i].split(' ').map(Number);
    for(let j = 0; j < 9; j++){
        if(row[j] > max){
            max = row[j];
            colMax = i+1;
            rowMax = j+1;
        }
    }
}

console.log(max);
console.log(colMax, rowMax);
