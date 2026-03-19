const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
let answer = [];
let left = 0;
let right = 0;

for(let i = 1; i <= n; i++){
    answer.push(i);
}

for(let i = 1; i <= m; i++){
    const [start,end] = input[i].split(' ').map(Number);
    left = start - 1;
    right = end - 1;
    while(left < right){
        [answer[left], answer[right]] = [answer[right], answer[left]];
        left++;
        right--;
    }
}

console.log(answer.join(' '));