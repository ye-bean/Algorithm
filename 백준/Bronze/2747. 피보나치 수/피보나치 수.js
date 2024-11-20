const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const dp = [];

function fibonacci(n) {
    if (n <= 1) return n;
    if (dp[n] !== undefined) return dp[n];
    dp[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return dp[n];
}

console.log(fibonacci(input)); // 55
