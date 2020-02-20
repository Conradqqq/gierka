
export const GameAction = {
    SELECT_NUMBER: "SELECT_NUMBER",
    TIME_LEFT: "TIME_LEFT",
    GAME_STATUS: "GAME_STATUS",
    RESET_GAME: "RESET_GAME",
    TIME_TICK: "TIME_TICK"
};

export const NumberStatus = {
    USED: 'used',
    WRONG: 'wrong',
    CANDIDATE: 'candidate',
    AVAILABLE: 'available',
};

export const NumberColor = {
    [NumberStatus.AVAILABLE]: 'lightgray',
    [NumberStatus.USED]: 'lightgreen',
    [NumberStatus.WRONG]: 'lightcoral',
    [NumberStatus.CANDIDATE]: 'deepskyblue',
};

export const GameStatus = {
    START: 'start',
    WRONG: 'wrong',
    CORRECT: 'correct',
    END: 'end',
};

export const GameStatusColor = {
    [GameStatus.START]: 'black',
    [GameStatus.WRONG]: 'red',
    [GameStatus.CORRECT]: 'green',
    [GameStatus.END]: 'red',
};

export const GameStatusLabels = {
    [GameStatus.START]: 'Gierka hehe',
    [GameStatus.WRONG]: 'Wrong!',
    [GameStatus.CORRECT]: 'Good!',
    [GameStatus.END]: 'The end. Out fo time!',
};

