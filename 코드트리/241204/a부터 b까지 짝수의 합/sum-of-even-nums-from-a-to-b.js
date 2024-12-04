const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a,b] = input;
let sum = 0;

for(a; a<=b; a++){
    if(a%2 === 0){
        sum+=a;
    }
}

console.log(sum);