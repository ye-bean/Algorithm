function solution(clothes) {
    let clothesMap = new Map();
    let sum = 0;
    
    for(const cloth of clothes){
        clothesMap.set(cloth[1], (clothesMap.get(cloth[1]) || 0) + 1);
    }
    
    
    let answer = 1;
    for (const count of clothesMap.values()) {
        answer *= (count + 1);
    }

    return answer - 1;
    
}