function solution(survey, choices) {
    let myMap = new Map([['R',0],['T',0],['C',0],['F',0],['J',0],['M',0],['A',0],['N',0]]);    
    let answer = [];
    
    for(let i = 0; i < survey.length; i++){
        const [mb,ti]=survey[i].trim().split('');
        if(choices[i] === 4){
            continue;
        } else if (choices[i] < 4){
            myMap.set(mb,myMap.get(mb)+Math.abs(choices[i]-4));
        } else {
            myMap.set(ti,myMap.get(ti)+Math.abs(choices[i]-4));
        }    
    }
    
    answer.push(myMap.get("R") < myMap.get("T") ? "T" : "R");
    answer.push(myMap.get("C") < myMap.get("F") ? "F" : "C");
    answer.push(myMap.get("J") < myMap.get("M") ? "M" : "J");
    answer.push(myMap.get("A") < myMap.get("N") ? "N" : "A");
    
    return answer.join('');
}