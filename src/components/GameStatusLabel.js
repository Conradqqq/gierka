import React from "react";

const GameStatusLabel = props => {
    if (props.gameStatus === 'start') {
        return 'Gierka hehe';
    } else if (props.gameStatus === "wrong") {
        return <span style={{color: 'red'}}>Wrong!</span>
    } else if (props.gameStatus === "correct") {
        return <span style={{color: 'green'}}>Good!</span>
    } else if (props.gameStatus === "end") {
        return <span style={{color: 'red'}}>The end. Out fo time!</span>
    } else {
        return '';
    }
};

export default GameStatusLabel;