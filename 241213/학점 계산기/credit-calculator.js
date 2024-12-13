const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let total = arr.reduce((v,i) => v+i);
const avg = total/n;
console.log(avg.toFixed(1));
if(4.0 <= avg){
    console.log('Perfect');
} else if(3.0 <= avg){
    console.log('Good');
} else {
    console.log('Poor');
}