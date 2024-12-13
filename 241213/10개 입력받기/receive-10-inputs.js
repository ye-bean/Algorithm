const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
let total = 0;

for(let i = 0; i<input.length; i++){
    if(input[i]===0){
        console.log(total, (total/i).toFixed(1));
        break;
    } else {
        total += input[i];
    }
}