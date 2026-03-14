const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = [];
let answer = [];

for(let i = 1 ; i <=n; i++){
    const [action, num] = input[i].split(' ');
    switch(action){
        case "push":
            arr.push(num);
            break;
        case "pop":
            if(arr.length > 0){
                let m = arr.pop();
                answer.push(m);
            } else { answer.push(-1);}
            break;
        case "size":
            answer.push(arr.length);
            break;
        case "empty":
            arr.length > 0 ? answer.push(0) : answer.push(1);
            break;
        case "top":
            arr.length > 0 ? answer.push(arr[arr.length-1]) : answer.push(-1);
            break;
    }
}

console.log(answer.join('\n'));