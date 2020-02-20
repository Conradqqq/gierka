import {GameAction} from "../../constants/GameConstants";

export function selectNumber(number) {
    return {
        type : GameAction.SELECT_NUMBER,
        number
    }
}

export function updateTimeLeft(timeLeft) {
    return {
        type : GameAction.TIME_LEFT,
        timeLeft
    }
}

export function updateGameStatus(gameStatus) {
    return {
        type : GameAction.GAME_STATUS,
        gameStatus
    }
}

export function timeTick() {
    return {
        type : GameAction.TIME_TICK
    }
}

export function resetGame() {
    return {
        type : GameAction.RESET_GAME
    }
}