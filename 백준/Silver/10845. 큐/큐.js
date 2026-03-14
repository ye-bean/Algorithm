const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let queue = [];
let answer = [];

for(let i = 1 ; i <=n; i++){
    const [action, num] = input[i].split(' ');
    switch(action){
        case "push":
            queue.push(num);
            break;
        case "pop":
            answer.push(queue.length > 0 ? queue.shift() : -1);
            break;
        case "size":
            answer.push(queue.length);
            break;
        case "empty":
            answer.push(queue.length > 0 ? 0 : 1);
            break;
        case "front":
            answer.push(queue.length > 0 ? queue[0]: -1);
            break;
        case "back":
            answer.push(queue.length > 0 ? queue[queue.length-1]: -1);
            break;
    }
}

console.log(answer.join('\n'));