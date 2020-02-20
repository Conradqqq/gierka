import {GameStatus, GameAction} from "../../constants/GameConstants";
import utils from "../../utils/utils";

const numberClick = (state, number) => {
    if (state.candidates.includes(number) || state.gameStatus === GameStatus.END) {
        return {};
    }

    const newCandidates = state.candidates.concat(number);
    const newCandidatesAreWrong = utils.sum(newCandidates) > state.starsCount;

    if (utils.sum(newCandidates) === state.starsCount) {
        let newAvailableNumbers = state.availableNumbers.filter(number => !newCandidates.includes(number));
        return {
            starsCount: utils.randomSumIn(newAvailableNumbers, 9),
            availableNumbers: newAvailableNumbers,
            candidates: [],
            gameStatus: GameStatus.CORRECT,
        };
    } else if (newCandidatesAreWrong) {
        return {
            candidates: [],
            gameStatus: GameStatus.WRONG,
        };
    }

    return {
        candidates: newCandidates,
    }
};

const timeTick = (state) => {
    if (state.gameStatus !== GameStatus.END) {
        const newTimeLeft = state.timeLeft - 1;
        return {
            timeLeft: newTimeLeft,
            gameStatus: (newTimeLeft === 0) ? GameStatus.END : state.gameStatus
        };
    }

    return {};
};

const initialState = {
    availableNumbers: utils.range(1, 9),
    starsCount: utils.random(1, 9),
    candidates: [],
    gameStatus: GameStatus.START,
    timeLeft: 10,
};

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        case GameAction.SELECT_NUMBER:
            return {
                ...state,
                ...numberClick(state, action.number)
            };
        case GameAction.TIME_LEFT:
            return {
                ...state,
                timeLeft: action.timeLeft
            };
        case GameAction.GAME_STATUS:
            return {
                ...state,
                gameStatus: action.gameStatus
            };
        case GameAction.TIME_TICK:
            return {
                ...state,
                ...timeTick(state)
            };
        case GameAction.RESET_GAME:
            return initialState;
        default:
            return state;
    }
}