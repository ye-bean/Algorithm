const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let i = 1;
let cnt_class = 0;
let cnt_hall = 0;
let cnt_toilet = 0;

while (i <= n) {
    if (i % 12 === 0) { 
        cnt_toilet += 1;
    } else if (i % 2 === 0 && i % 3 === 0) {
        cnt_hall += 1;
    } else if (i % 2 === 0) {
        cnt_class += 1;
    } else if (i % 3 === 0) {
        cnt_hall += 1;
    }
    i++;
}

console.log(`${cnt_class} ${cnt_hall} ${cnt_toilet}`);