function solution(participant, completion){
    let myMap = new Map();
    
    for(const name of participant){
        myMap.set(name, (myMap.get(name) || 0) + 1);
    }
    
    for(const name of completion){
        myMap.set(name, (myMap.get(name)) -1);
    }
    
    for(const [name, count] of myMap){
        if(count > 0){
            return name;
        }
    }
}