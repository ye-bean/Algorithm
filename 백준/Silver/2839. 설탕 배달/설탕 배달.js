const fs = require('fs');
let kg = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let count = -1;

if(kg%5 === 0){
    count = kg/5;
} else if (kg%3 === 0 && kg<15) {
    count = kg/3;
} else if (5 < kg && 1 < kg/5){
    let q = Math.floor(kg/5);
    for(i = q; 0 < q; q--){
        if((kg - q*5)%3 === 0){
            let p = (kg - q*5)/3;
            count = q + p;
            break;
        } 
    }
}

console.log(count);