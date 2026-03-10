const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input.shift());
const b = parseInt(input.shift());
const c = parseInt(input.shift());

let maxLen = a;

if(a < b){
    if(c < b){
        maxLen = b;
        if(b < a+c){console.log(a+b+c);}
        else {console.log(a+c+a+c+-1);}
    } else{
        maxLen = c;
        if(c < a+b){console.log(a+b+c);}
        else {console.log(a+b+a+b-1);}
    }
} else {
    if(c < a){
        maxLen = a;
        if(a < b+c){console.log(a+b+c);}
        else {console.log(b+c+b+c-1);}
    } else {
        maxLen = c;
        if(c < a+b){console.log(a+b+c);}
        else {console.log(a+b+a+b-1);}
    }
}