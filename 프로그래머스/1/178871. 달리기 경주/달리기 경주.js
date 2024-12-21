function solution(players, callings) {

    const playerIndexMap = {};
    players.forEach((player, index) => {
        playerIndexMap[player] = index;
    });

    for (const name of callings) {
        const currentIndex = playerIndexMap[name];
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            const prevPlayer = players[prevIndex];

            [players[prevIndex], players[currentIndex]] = [players[currentIndex], players[prevIndex]];

            playerIndexMap[name] = prevIndex;
            playerIndexMap[prevPlayer] = currentIndex;
        }
    }

    return players;
}
