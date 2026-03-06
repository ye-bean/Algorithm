const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
let num = 666;

while(true){
    if(String(num).includes('666')){
        count +=1;
    }

    if(count === n){
        console.log(num);
        break;
    }
    num++;
}
