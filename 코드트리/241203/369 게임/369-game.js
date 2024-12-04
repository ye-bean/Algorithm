const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let i = 1;
let answer = '';
while(i<=n){
    if(i%10 === 3 || parseInt(i/10) === 3 
    || i%10 === 6 || parseInt(i/10) === 6 
    || i%10 === 9 || parseInt(i/10) === 9
    || i%3 === 0){
        answer+= '0'+' ';
    } else{
        answer +=`${i}`+' ';
    }
    i++;
}

console.log(answer);
