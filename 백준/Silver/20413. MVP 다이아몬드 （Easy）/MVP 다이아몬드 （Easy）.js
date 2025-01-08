const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
let numArr = input[0].split(' ').map(Number);
let lankArr = input[1].split('');
let answer = new Array(n);
const B = 0;
const [S, G, P, D] = numArr;

for (let i = 0; i < n; i++) {
    let prev = 0;
    if(i === 0) {
        prev = 0;
    } else {
        prev = answer[i-1];
    }
    
    let now = 0;
    switch (lankArr[i]){
        case 'B':
            now = S - 1 - prev;
            break;
        case 'S':
            now = G - 1 - prev;
            break;
        case 'G':
            now = P - 1 - prev;
            break;
        case 'P':
            now = D - 1 - prev;
            break;
        case 'D':
            now = D;
            break;
    }
    answer[i] = now;
}

console.log(answer.reduce((v,i) => v+i));