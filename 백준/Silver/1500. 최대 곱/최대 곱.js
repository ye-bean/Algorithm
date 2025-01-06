const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const [s, k] = input;
let answer = [];
for(let i = 0; i < k; i++){
    answer.push(Math.floor(s/k));
}

let renum = s - answer.reduce((v,i) => v+i);

if(renum !== 0){
    for(let j = 0; j < answer.length; j++){
        if(renum===0) break;
        answer[j]+=1;
        renum-=1;
    }   
}

console.log(answer.reduce((v,i) => v*i));