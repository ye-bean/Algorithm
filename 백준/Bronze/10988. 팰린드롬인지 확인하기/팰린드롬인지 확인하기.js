const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const string1 = input;
const string2 = input.split('').reverse().join('');

if(string1 === string2){
    console.log(1);
} else {
    console.log(0);
}