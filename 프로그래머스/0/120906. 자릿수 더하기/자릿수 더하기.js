function solution(n) {
    let arr = n.toString().split('').map(Number);
    let answer = 0;
    for(const num of arr){
        answer += parseInt(num);
    }
    return answer;
}