const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
let arr = [];

for(let i = 0; i < n; i++){
    arr.push(input[i].split(' '));
}

for(let i = 0 ; i < n; i++){
    const word = arr[i][1];
    answer = arr[i][0].replaceAll(word,'i');
    console.log(answer.length);
}