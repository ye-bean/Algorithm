function solution(new_id) {
    let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '');
    
    while (answer.includes('..')) {
        answer = answer.replace('..', '.');
    }
    
    if(answer[0] === '.'){
        answer = answer.slice(1);
    } else if(answer.at(-1)==='.'){
        answer = answer.slice(0,-1);
    }
    
    if(answer.length === 0){
        answer = "a";
    }
    
    if(16<=answer.length){
        answer = answer.slice(0,15);
    }

    if(answer.at(-1) === '.'){
        answer = answer.slice(0,-1);
    }

    if(answer.length <= 2){
        let char = answer.at(-1);
        while(answer.length < 3){
            answer += char;
        }
    }
    
    return answer;
}