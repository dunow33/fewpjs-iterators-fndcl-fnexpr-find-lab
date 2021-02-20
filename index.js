function superbowlWin(results) {
    let result = results.find(game => game.result === "W")
    return result ? result.year : undefined;
}