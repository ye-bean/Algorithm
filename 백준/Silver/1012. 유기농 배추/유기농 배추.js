const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let line = 1;

while (T > 0) {
    const [M, N, K] = input[line++].split(/\s+/).map(Number);
    let matrix = Array.from({ length: N }, () => Array(M).fill(0));
    let visited = Array.from({ length: N }, () => Array(M).fill(false));

    for (let i = 0; i < K; i++) {
        const [x, y] = input[line++].split(' ').map(Number);
        matrix[y][x] = 1;
    }

    let count = 0;
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (matrix[y][x] === 1 && !visited[y][x]) {
                count += 1;
                bfs(y, x, M, N, matrix, visited);
            }
        }
    }

    console.log(count);
    T--;
}

function bfs(startY, startX, M, N, matrix, visited) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let queue = [[startY, startX]];
    visited[startY][startX] = true;
    let head = 0;

    while (head < queue.length) {
        const [currY, currX] = queue[head++];
        for (let i = 0; i < 4; i++) {
            const ny = currY + dy[i];
            const nx = currX + dx[i];

            if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx] && matrix[ny][nx] === 1) {
                visited[ny][nx] = true;
                queue.push([ny, nx]);
            }
        }
    }
}