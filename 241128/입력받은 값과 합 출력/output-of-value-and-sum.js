const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(v=>Number(v));

const [a, b] = input;
console.log(a,b,a+b);