const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const n = input[0];
let answer = [];

for(let i = 1; i<=n;i++){
    if (input[i]===0){
        answer.pop();
    } else{
        answer.push(input[i]);
    }
}

if(answer.length === 0){
    console.log(0);
} else{
    console.log(answer.reduce((v,i) => v+i));
}