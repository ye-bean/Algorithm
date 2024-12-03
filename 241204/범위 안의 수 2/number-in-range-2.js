const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
let cnt = 0;

for(let i = 0; i<10; i++){
    if(0<=input[i] && input[i]<=200){
        sum+=input[i];
        cnt+=1;
    }
}

console.log(`${sum} ${(sum/cnt).toFixed(1)}`);