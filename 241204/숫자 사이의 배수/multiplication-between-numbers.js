const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b] = input;
let cnt = 0;
let sum = 0;

for(a; a<=b; a++){
    if(a%5 === 0 || a%7 === 0){
        cnt+=1;
        sum+=a;
    }
}

console.log(`${sum} ${(sum/cnt).toFixed(1)}`);