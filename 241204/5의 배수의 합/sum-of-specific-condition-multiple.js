const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number).sort((a,b) => a-b);

let sum = 0;
let [a,b] = input;

for(a; a<=b; a++){
    if(a%5 === 0){
        sum+=a;
    }
}

console.log(sum);