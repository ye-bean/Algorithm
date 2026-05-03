function solution(s) {
    let mid = Math.floor(s.length/2);
    let answer = s.length%2 === 0 ? s[mid-1]+s[mid] : s[mid];
    return answer;
}