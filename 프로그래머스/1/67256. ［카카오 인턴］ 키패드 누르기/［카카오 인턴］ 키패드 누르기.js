function solution(numbers, hand) {
    var answer = [];
    
    let mainHand = hand[0].toUpperCase();
    
    let leftNum = [1,4,7];
    let centerNum = [2,5,8,0];
    let rightNum = [3,6,9];
    
let lines = [
    [1, 2, 3], // 0번 인덱스
    [4, 5, 6], // 1번 인덱스
    [7, 8, 9], // 2번 인덱스
    ['*',0,'#']        // 3번 인덱스
];
    
    let left = '*';
    let right = '#';
    
    for(const c of numbers){
        if(leftNum.includes(c)){
            left = c;
            answer.push('L')
        } else if(rightNum.includes(c)){
            right = c;
            answer.push('R')
        } else {
            let lineIndex = lines.findIndex(line => line.includes(c));
            let leftIndex = lines.findIndex(line => line.includes(left));
            let rightIndex = lines.findIndex(line => line.includes(right));
    
            let dLeft = Math.abs(leftIndex - lineIndex);
            let dRight = Math.abs(rightIndex - lineIndex);
            
            if(!centerNum.includes(left)){
                dLeft += 1;
            }
            
            if(!centerNum.includes(right)){
                dRight += 1;
            }
            
            if(dLeft === dRight){
                answer.push(mainHand);
                if(mainHand === 'L'){
                    left = c;
                } else {
                    right = c;
                }
                
            } else if (dLeft < dRight){
                answer.push('L');
                left = c;
            } else {
                answer.push('R');
                right = c;
            }
            
        }
    }
    return answer.join('');
}