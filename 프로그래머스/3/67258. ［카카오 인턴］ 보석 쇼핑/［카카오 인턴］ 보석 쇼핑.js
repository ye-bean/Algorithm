function solution(gems) {
    const n = gems.length;
    const totalKinds = new Set(gems).size;
    let answer = [1, n];
    
    const gemMap = new Map();
    let start = 0;
    let end = 0;

    while (end < n) {
        const endGem = gems[end];
        gemMap.set(endGem, (gemMap.get(endGem) || 0) + 1);

        while (gemMap.size === totalKinds) {
            if (end - start < answer[1] - answer[0]) {
                answer = [start + 1, end + 1];
            }

            const startGem = gems[start];
            gemMap.set(startGem, gemMap.get(startGem) - 1);

            
            if (gemMap.get(startGem) === 0) {
                gemMap.delete(startGem);
            }
            
            start++;
        }
        
        end++;
    }

    return answer;
}