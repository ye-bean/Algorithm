function solution(n) {
    let i = 2;
    while(true){
        if(n%i === 1){
            break;
        }
        i++;
    }
    return i;
}