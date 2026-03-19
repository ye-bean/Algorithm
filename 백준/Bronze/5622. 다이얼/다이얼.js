const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let total = 0;
const string = input.split('');
const dial = {
    ABC: 3, DEF: 4, GHI: 5, JKL: 6,
    MNO: 7, PQRS: 8, TUV: 9, WXYZ: 10
};

for (let i = 0; i < input.length; i++) {
    const char = input[i];

    for (let key in dial) {
        if (key.includes(char)) {
            total += dial[key]; 
            break;
        }
    }
}

console.log(total);