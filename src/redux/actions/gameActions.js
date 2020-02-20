export function selectNumber(number) {
    return {type : "SELECT_NUMBER", number}
}

export function updateTimeLeft(timeLeft) {
    return {type : "TIME_LEFT", timeLeft}
}

export function updateGameStatus(gameStatus) {
    return {type : "GAME_STATUS", gameStatus}
}

export function resetGame() {
    return {type : "RESET_GAME"}
}