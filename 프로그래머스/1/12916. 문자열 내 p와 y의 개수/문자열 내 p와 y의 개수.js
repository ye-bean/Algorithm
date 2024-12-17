function solution(s){
    let arr = s.split('');
    let cnt1 = 0;
    let cnt2 = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==='P' || arr[i]==='p'){
            cnt1 += 1;
        } else if (arr[i]==='Y' || arr[i]==='y'){
            cnt2 += 1;
        } else {
            continue;
        }
    }
    
    if(cnt1===cnt2 || (cnt1===0 && cnt2===0)) return true;
    else return false;
}