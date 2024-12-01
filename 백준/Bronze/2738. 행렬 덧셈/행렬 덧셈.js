const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let A = input.slice(1, N + 1).map(row => row.split(' ').map(Number));
let B = input.slice(N + 1).map(row => row.split(' ').map(Number));

let result = Array.from({ length: N }, (_, i) =>
    A[i].map((value, j) => value + B[i][j])
);

result.forEach(row => console.log(row.join(' ')));