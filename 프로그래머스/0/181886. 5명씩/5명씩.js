function solution(names) {
    let name = [];
    for(let i = 0; i < names.length; i++){
        i%5 ===0 ? name.push(names[i]) : -1;
    }
    return name;
}