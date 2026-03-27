function solution(answers) {
    var answer = [];
    let student1 = [1,2,3,4,5];
    let student2 = [2,1,2,3,2,4,2,5];
    let student3 = [3,3,1,1,2,2,4,4,5,5];
    let count1, count2, count3, i, m, n, l;
    count1 = count2 = count3 = i = m = n = l = 0;
    
    for(i ; i < answers.length; i++){
        
        if(student1.length <= m){
            m = m%5;
        }
        if(student2.length <= n){
            n = n%8;
        }
        if(student3.length <= l){
            l = l%10;
        }
        
        if(answers[i] === student1[m]){
            count1+=1;
        }     
        
        if(answers[i] === student2[n]){
            count2+=1;
        }         
         if(answers[i] === student3[l]){
            count3+=1;
        } 
        
        m+=1;
        n+=1;
        l+=1;
    }
    
    let max = Math.max(count1, count2, count3);
    
    if(max === count1){
        answer.push(1);
    }
        if(max === count2){
        answer.push(2);
    }
        if(max === count3){
        answer.push(3);
    }
    
    return answer;
}