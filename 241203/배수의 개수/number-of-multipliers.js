const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt_three = 0;
let cnt_five = 0;
for(let i = 0; i<10; i++){
    if(input[i]%3===0 && input[i]%5===0){
        cnt_three+=1;
        cnt_five+=1;
    } else if(input[i]%5===0){
        cnt_five+=1;
    } else if(input[i]%3===0){
        cnt_three+=1;
    }
}
console.log(`${cnt_three} ${cnt_five}`);