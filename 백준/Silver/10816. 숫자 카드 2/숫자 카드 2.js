const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const mine = input[1].split(' ').map(Number).sort((a,b) => a - b);
const m = Number(input[2]);
const cards = input[3].split(' ').map(Number);

let myMap = new Map();
let answer = [];

for(const num of mine){
    myMap.set(num, (myMap.get(num) || 0) + 1);
}

for(let i = 0; i < m; i++){
    const card = cards[i];
    if(1 <= myMap.get(card)){
        answer.push(myMap.get(card));
    } else {
        answer.push(0);
    }   
}

console.log(answer.join(' '));