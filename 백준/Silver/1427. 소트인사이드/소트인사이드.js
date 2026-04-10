const input = require('fs').readFileSync(0).toString().trim().split('');

console.log(input.sort((a,b) => b - a).join(''));