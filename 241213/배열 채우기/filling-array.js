const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
for(let i = 0; i<input.length; i++){
    if(input[i]===0){
        break;
    } else {
        arr.unshift(input[i]);
    }
}

console.log(...arr);