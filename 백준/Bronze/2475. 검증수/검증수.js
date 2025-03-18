const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number).map(v => v*v). reduce((v,i) => v+i);

console.log(input%10);