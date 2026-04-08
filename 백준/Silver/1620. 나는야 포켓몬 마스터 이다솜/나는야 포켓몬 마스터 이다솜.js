const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let nameToNum = new Map();
let numToName = new Array(N + 1);
let answer = [];

for(let i = 1; i <= N; i ++){
    nameToNum.set(input[i],i);
    numToName[i] = input[i];
}

for(let j = N + 1; j < input.length; j++){
    let query = input[j].trim();
    const c = query.charCodeAt(0);

    if(c >= 48 && c <= 57){
        answer.push(numToName[Number(query)]);
    } else {
        answer.push(nameToNum.get(query));
    }
}

console.log(answer.join('\n'));