function solution(number) {
    return number.split('').reduce((v, i) => (v + Number(i)) % 9, 0);
}
