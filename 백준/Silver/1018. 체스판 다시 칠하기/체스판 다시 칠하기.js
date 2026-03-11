const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input;

let minCount = 64;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        
        let countW = 0;

        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                let currentPos = board[i + k][j + l];

                if ((k + l) % 2 === 0) {
                    if (currentPos !== 'W') countW++;
                } else {
                    if (currentPos !== 'B') countW++;
                }
            }
        }
        
        let countB = 64 - countW;

        let currentMin = Math.min(countW, countB);
        if (currentMin < minCount) minCount = currentMin;
    }
}

console.log(minCount);