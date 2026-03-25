function solution(phone_book) {
    let mySet = new Set();
    let answer = true;

    for (const number of phone_book) {
        mySet.add(number);
    }
    
    for(const number of phone_book){
        for(let i = 1; i < number.length; i++){
            let piece = number.slice(0, i);
            
            if(mySet.has(piece)){
                answer = false;
                break;
            }
        }
    } 
    return answer;
}