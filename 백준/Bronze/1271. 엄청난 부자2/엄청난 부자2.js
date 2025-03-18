const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

const c = a / b;  // 몫 계산
const d = a % b;  // 나머지 계산

console.log(c.toString());
console.log(d.toString());
