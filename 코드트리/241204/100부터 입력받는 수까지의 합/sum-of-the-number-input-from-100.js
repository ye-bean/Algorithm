const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let sum = 0;

for(n; n<=100; n++){
    sum+=n;
}

console.log(sum);