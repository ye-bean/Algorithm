const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

for(let i = 0; i < input.length-1; i++){
    const num = input[i].trim().split(' ').map(Number);
    const a = num[0];
    const b = num[1];
    a > b ? console.log('Yes') : console.log('No');
}