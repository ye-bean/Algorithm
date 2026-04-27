function solution(progresses, speeds) {
    var days = [];
    for(let i = 0; i < progresses.length; i++){
        days.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    let standardDay = days[0];
    let count = 0;
    
    let answer = [];
    
    for (const day of days) {
        if (day <= standardDay) {
            count++;
        } else {
            answer.push(count);
            standardDay = day;
            count = 1;
        }
    }
    answer.push(count);    
    return answer;
}