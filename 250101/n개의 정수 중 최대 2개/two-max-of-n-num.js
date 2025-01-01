const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr = input[1].split(' ').map(Number).sort((a,b) => b - a);

console.log(arr[0], arr[1]);