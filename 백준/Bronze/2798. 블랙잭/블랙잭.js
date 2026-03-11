const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b); // 1. 오름차순 정렬

let maxTotal = 0;

for (let i = 0; i < N - 2; i++) {
    let left = i + 1;   
    let right = N - 1;

    while (left < right) {
        const sum = cards[i] + cards[left] + cards[right];

        if (sum === M) {
            
            console.log(M);
            return;
        }

        if (sum < M) {
           
            maxTotal = Math.max(maxTotal, sum);
            left++;
        } else {
           
            right--;
        }
    }
}

console.log(maxTotal);