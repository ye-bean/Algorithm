const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    for(let i = 0; i<input.length-1; i++){
        const [num1, num2] = input[i];
        if(num1%num2 === 0){
            console.log('multiple');
        } else if(num2%num1 === 0){
            console.log('factor');
        }else{
            console.log('neither');
        }
    }
    process.exit();
});