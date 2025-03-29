const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input.shift();
const m = input.join('').split(' ').map(Number).sort((a,b) => a - b);

let sit = [];
let count = 0;

for(let i = 0; i < n; i++){
    if(sit.includes(m[i])) {
        count += 1;
    } else {
        sit.push(m[i]);
    }
    
}

console.log(count);