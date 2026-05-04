function solution(n, lost, reserve) {
    var answer = 0;
    let wear = new Array(n).fill(true);
    for(const i of lost){
        wear[i-1] = false;
    }
    reserve.sort((a, b) => a - b);
    
    for(const r of reserve){
        if(wear[r-1] === false){
            wear[r-1] = true;
        } else{
            if(r-2 >= 0 && wear[r-2] === false){
            wear[r-2] = true;
        } else if(r < n && wear[r] === false){
if(!reserve.includes(r + 1)) { // 뒷번호 애가 여벌이 없을 때만 빌려준다!
                     wear[r] = true;
                }
        }
        }
    }
    
    for(const m of wear){
        if(m === true){
            answer+=1;
        }
    }
    return answer;
}