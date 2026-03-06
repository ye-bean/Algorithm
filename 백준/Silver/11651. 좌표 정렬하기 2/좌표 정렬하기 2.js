const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input.shift());

const arr = input.map(v => v.split(' ').map(Number));

arr.sort((a,b) => {
    if(a[1] === b[1]){
        return a[0]-b[0];
    }
    return a[1]-b[1];
})

console.log(arr.map(v => v.join(' ')).join('\n'));