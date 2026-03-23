const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0])
let answer = [];

for(let i = 1 ; i <=n ; i++){
    let string = input[i].split('');
    let arr = [];
    for(let j = 0; j < string.length; j++){
        arr.push(string[j]);
        if (arr[0] === ')'){
            break;
        }
        else if( (2<= arr.length) && (arr[arr.length-1] != arr[arr.length-2])){
            arr.pop();
            arr.pop();   
        } 
    }
    answer.push(arr.length === 0 ? 'YES' : 'NO');
}

console.log(answer.join('\n'));