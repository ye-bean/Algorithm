const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const times = input[1].split(' ').map(Number);

times.sort((a, b) => a - b);

let totalTime = 0;
let currentTime = 0;

for (let time of times) {
    currentTime += time;
    totalTime += currentTime;
}

console.log(totalTime);