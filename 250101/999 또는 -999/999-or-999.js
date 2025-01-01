const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let minVal = input[0];
let maxVal = input[0];

for(let i = 0 ; i < input.length; i++){
    if(input[i] === 999 || input[i] === -999) break;

    if(input[i] < minVal){
        minVal = input[i];
    } else if(maxVal < input[i]){
        maxVal = input[i];
    }
}

console.log(maxVal, minVal);