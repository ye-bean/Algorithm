const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input.shift());
let p = 0;

const cal_gcd = (a, b)  => {
    return a % b === 0 ? b : cal_gcd(b, a % b);
};

for(let i = 0; i < n; i++){
    const [num1,num2] = input[i].split(' ').map(Number);
    p = cal_gcd(num1,num2);
    console.log(num1*num2/p);
}