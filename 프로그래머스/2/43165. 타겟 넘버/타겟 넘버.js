function solution(numbers, target) {
    let answer = 0;

    function dfs(index, sum) {
        // 1. 탈출 조건: 숫자를 다 썼을 때
        if (index === numbers.length) {
            if (sum === target) answer++;
            return;
        }

        // 2. 수행 동작: 현재 숫자를 더하거나 빼거나
        dfs(index + 1, sum + numbers[index]); // 더하는 길
        dfs(index + 1, sum - numbers[index]); // 빼는 길
    }

    dfs(0, 0);
    return answer;
}