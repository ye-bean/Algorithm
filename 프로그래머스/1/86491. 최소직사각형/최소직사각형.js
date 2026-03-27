function solution(sizes) {
    let arr = []
    let maxW = 0;
    let maxH = 0;
    
    for(let i = 0; i < sizes.length; i++){
        let a = sizes[i][0];
        let b = sizes[i][1];
        let bigNum = Math.max(a,b);
        let minNum = Math.min(a,b); 
        arr.push([bigNum,minNum]);
    }
    
    for(let i = 0; i < arr.length; i++){
        let weight = arr[i][0];
        let height = arr[i][1];
        if(maxW < weight){
            maxW = weight;
        }
        if(maxH < height){
            maxH = height;
        }
    }
    
    return maxW * maxH;
}
