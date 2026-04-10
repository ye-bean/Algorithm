const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let myMap = new Map();
let answer = [];

for(let i = 1; i < input.length; i++){
    myMap.set(input[i], (myMap.get(input[i]) || 0) + 1);
}

for(const [key, value] of myMap){
    if(2 <= value){
        answer.push(key);
    }
}

console.log(answer.length);
console.log(answer.sort().join('\n'));