const fs = require("fs");

let n =Number(fs.readFileSync(0).toString().trim());

for (let i = n; i > 0; i--) {      
    str = "";
    for (let j = 0; j <= n - i; j++) {
        str += '*';
    }
    console.log(str);
    console.log(' ');
}

for (let i = 1; i < n; i++) {      
    str = "";
    for (let j = 0; j < n - i; j++) {
        str += "*";
    }
    console.log(str);
    console.log(' ');
}