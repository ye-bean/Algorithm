const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const sortSet = new Set([...arr].sort((a,b)=> a-b));
const sortArr = [...sortSet];
let answer = [];

const map = new Map();
sortArr.forEach((num, index) => {
    map.set(num,index);
});

for(let i = 0 ; i < n ; i++){
    answer.push(map.get(arr[i]));
}


console.log(answer.join(' '));