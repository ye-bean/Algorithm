const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

let queue = Array.from({ length: n }, (_, i) => i + 1); 
let head = 0;
let tail = n - 1;

while (tail - head > 0) {
    head++;
    queue[++tail] = queue[head];
    head++;
}

console.log(queue[head]);
