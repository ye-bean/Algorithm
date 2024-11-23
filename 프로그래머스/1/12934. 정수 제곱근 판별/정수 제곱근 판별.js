function solution(n) {
    const i = Math.sqrt(n);
    return Number.isInteger(i) ? (i+1)**2 : -1;
}