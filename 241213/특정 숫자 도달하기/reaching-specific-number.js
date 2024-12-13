const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
let total = 0;

for(let i = 0; i < arr.length; i++){
    if(250<=arr[i]){
        break;
    } else {
        total += arr[i];
        cnt += 1;
    }
}

console.log(total, (total/cnt).toFixed(1));