const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(' ').map(Number);

let total = arr.reduce((v,i) => v+i);
console.log((total/8).toFixed(1));
