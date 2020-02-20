import GameStatus from "../../constants/GameConstants";
import utils from "../../utils/utils";

const numberClick = (state, number) => {
    if (state.candidates.includes(number) || state.gameStatus === "end") {
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
            gameStatus: "correct",
        };
    } else if (newCandidatesAreWrong) {
        return {
            candidates: [],
            gameStatus: "wrong",
        };
    } else {
        return {
            candidates: newCandidates,
        }
    }
};

const initialState = {
    availableNumbers: utils.range(1, 9),
    starsCount: utils.random(1, 9),
    candidates: [],
    gameStatus: 'start',
    timeLeft: 5,
};

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        case "SELECT_NUMBER":
            return Object.assign({}, state, {
                ...numberClick(state, action.number)
            });
        case "TIME_LEFT":
            return Object.assign({}, state, {
                timeLeft: action.timeLeft
            });
        case "GAME_STATUS":
            return Object.assign({}, state, {
                gameStatus: action.gameStatus
            });
        case "RESET_GAME":
            return initialState;
        default:
            return state;
    }
}