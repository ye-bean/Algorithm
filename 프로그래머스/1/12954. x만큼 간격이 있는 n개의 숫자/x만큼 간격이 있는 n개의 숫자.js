function solution(x, n) {
    let answer = [];
    if(0 < x){
        for(let i = x; i <= x*n; i+=x){
        answer.push(i);
        } 
    } else if(x ===0) {
        let i = 0;
        while(i < n){
            answer.push(0);
            i++
        }
    } else {
        for(let i = x; x*n <= i; i+=x){
            answer.push(i);
        }
    }
    return answer;
}