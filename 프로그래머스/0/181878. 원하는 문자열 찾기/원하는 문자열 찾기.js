function solution(myString, pat) {
    let answer = myString.toUpperCase();
    let upper = pat.toUpperCase();
    return answer.includes(upper) ? 1 : 0 ;
}