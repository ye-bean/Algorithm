const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let count = 0;

for(let i = 0; i < input.length; i++){
    if( input[i] === 'c'){
        if(input[i+1] === '=' || input[i+1] === '-'){
            count += 1;
            i++;
        } else {
            count++;
        }
    } else if(input[i]==='d'){
        if(input[i+1] === 'z' && input[i+2] === '='){
            count += 1;
            i=i+2;
        } else if(input[i+1] === '-'){
            count += 1;
            i++;
        } else {
            count++;
        }
        
    }else if(input[i]==='l'){
        if(input[i+1] === 'j'){
            count += 1;
            i++;
        } else {
            count++;
        }
    }else if(input[i]==='n'){
        if(input[i+1] === 'j'){
            count += 1;
            i++;
        } else {
            count++;
        }
        
    }else if(input[i]==='s'){
        if(input[i+1] === '='){
            count += 1;
            i++;
        } else {
            count++;
        }
        
    }else if(input[i]==='z'){
        if(input[i+1] === '='){
            count += 1;
            i++;
        } else {
            count++;
        }
    } else {
        count+=1;
    }
}

console.log(count);