const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ').map(v=>Number(v));

let sum = 0;
let [a,b] = n;

for(a; a<=b; a++){
    sum+=a;
}

console.log(sum);