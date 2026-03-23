const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let answer = [];

for (let i = 1; i <= n; i++) {
    const s = input[i].trim();
    let stack = [];
    let isVPS = true;

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                isVPS = false;
                break;
            }
            stack.pop();
        }
    }

    if (isVPS && stack.length === 0) {
        answer.push("YES");
    } else {
        answer.push("NO");
    }
}

console.log(answer.join('\n'));