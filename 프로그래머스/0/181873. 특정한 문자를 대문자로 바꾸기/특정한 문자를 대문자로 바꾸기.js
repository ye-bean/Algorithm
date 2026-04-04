function solution(my_string, alp) {
    let answer = [];
    for(const c of my_string){
        answer.push((c === alp) ? c.toUpperCase() : c);

    }
   return answer.join('');
}