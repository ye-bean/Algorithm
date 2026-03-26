function solution(s){
    var answer = true;
    
    let arr = s.trim().split('');
    let stack = [];
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === '('){
            stack.push(arr[i]);
        } else {
            if(stack.length === 0){
                answer = false;
                break;
            }
            stack.pop();
        }
    }
    
    if(answer && stack.length === 0){
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}