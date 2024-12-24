function solution(a, b) {
    let answer = 0;
    let min = Math.min(a,b);
    const max = Math.max(a,b);
    for(min ; min <= max; min++){
        answer += min;
    }
    return answer;
}