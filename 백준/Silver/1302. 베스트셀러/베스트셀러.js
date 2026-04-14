const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let books = [];
let answer = [];
let myMap = new Map();
let max = 0;

for(let i = 1; i <= n; i++){
    books.push(input[i]);    
}

for(const book of books){
    myMap.set(book, (myMap.get(book) || 0) + 1);
}

for (const value of myMap.values()) {
    max = Math.max(max, value);
}

for (const [key, value] of myMap) {
    if (value === max) {
        answer.push(key);
    }
}

console.log(answer.sort()[0]);